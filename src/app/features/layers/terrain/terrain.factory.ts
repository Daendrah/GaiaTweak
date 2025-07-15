import * as THREE from 'three';
import { World } from '../../../core/gaia/world/world';
import { getParamValue } from '../../../shared/utils/layer-config.utils';
import { createNoise2D } from 'simplex-noise';
import alea from 'alea';
import { WorldCell } from '../../../core/gaia/world/world.types';
import { LayerConfigParam, LayerFactory } from '../../../core/layers/layer-factory.types';
import { PipelineJob, PipelineJobStep } from '../../../core/layers/pipeline-job.types';

const TERRAIN_OBJECT_TAG = 'terrainMesh';

export class TerrainFactory implements LayerFactory {
    /**
     * Retourne le pipeline d'étapes pour la génération du terrain (shape, elevation, biome, mesh).
     */
    getPipeline(params: LayerConfigParam[], world: World): PipelineJob {
        const steps: PipelineJobStep[] = [
            {
                name: 'Generate shape',
                run: async () => {
                    // Placeholder: shape generation logic
                }
            },
            {
                name: 'Generate elevation',
                run: async () => {
                    // Placeholder: elevation logic
                }
            },
            {
                name: 'Generate biome',
                run: async () => {
                    // Placeholder: biome logic
                }
            },
            {
                name: 'Generate mesh',
                run: async () => {
                    this.generateTerrain(params, world);
                }
            }
        ];
        return { steps };
    }

    /**
     * Reset or remove the terrain layer from the world.
     */
    reset(world: World): void {
        const scene = world.getScene();
        const existingMesh = scene.getObjectByName(TERRAIN_OBJECT_TAG) as THREE.Mesh | null;
        if (existingMesh) {
            scene.remove(existingMesh);
            existingMesh.geometry.dispose();
            if (Array.isArray(existingMesh.material)) {
                existingMesh.material.forEach(mat => mat.dispose());
            } else {
                existingMesh.material.dispose();
            }
        }
    }

    /**
     * Return true if the terrain layer is currently active in the world.
     */
    isActive(world: World): boolean {
        return !!world.getScene().getObjectByName(TERRAIN_OBJECT_TAG);
    }

    private generateTerrain(params: LayerConfigParam[], world: World): void {
        const scene = world.getScene();
        const cells = this.generateWorldGrid(params);
        world.setWorldCells(cells);

        const existingMesh = scene.getObjectByName(TERRAIN_OBJECT_TAG) as THREE.Mesh | null;
        if (existingMesh) {
            scene.remove(existingMesh);
            existingMesh.geometry.dispose();
            if (Array.isArray(existingMesh.material)) {
                existingMesh.material.forEach(mat => mat.dispose());
            } else {
                existingMesh.material.dispose();
            }
        }

        const terrainMesh = this.generateTerrainMesh(params, cells);
        terrainMesh.name = TERRAIN_OBJECT_TAG;
        terrainMesh.castShadow = true;
        terrainMesh.receiveShadow = true;
        terrainMesh.frustumCulled = true; // Enable frustum culling for terrain
        scene.add(terrainMesh);
    }

    private generateWorldGrid(params: LayerConfigParam[]): WorldCell[] {
        function fbmNoise(noise: any, nx: number, ny: number) {
            let sum = 0;
            let amplitude = 0.5;
            let sumOfAmplitudes = 0;
            let frequency = 1;
            for (let octave = 0; octave < 4; octave++) {
                sum += amplitude * noise(nx * frequency, ny * frequency);
                sumOfAmplitudes += amplitude;
                frequency *= 2.0;
                amplitude *= 0.5;
            }
            return sum / sumOfAmplitudes;
        }

        const radius = getParamValue(params, 'radius');
        const resolution = getParamValue(params, 'resolution');
        const radiusCellCount = radius / resolution;
        const gridSize = radiusCellCount * 2 + 1;
        const mix = 0.3; // how strongly to force the island shape (0 = none, 1 = full)
        const round = 0.2; // how round the island is (0 = square, 1 = full circle)

        const seed = getParamValue(params, 'seed');
        const noise = createNoise2D(alea(seed));

        const cells = Array.from({ length: gridSize * gridSize }, (_, index) => {
            const q = index % gridSize - radiusCellCount;
            const r = Math.floor(index / gridSize) - radiusCellCount;
            const s = -q - r;

            // Normalized coordinates [-1, 1]
            const nx = q / radiusCellCount;
            const ny = r / radiusCellCount;

            let e = fbmNoise(noise, nx * 1, ny * 1) * 0.5 + 0.5;
            e = e * (1.0 - round) + 0.5 * round; // Apply roundness

            // Distance function for round island
            const d = (Math.abs(q / radiusCellCount) + Math.abs(r / radiusCellCount) + Math.abs(s / radiusCellCount)) / 1.8;

            // Scale to match previous range
            return { height: (e * 0.5 + 0.5) * 20, biome: e - (1.0 - mix) * d * d < 0 ? 'water' : 'land' };
        });

        return cells;
    }

    generateTerrainMesh(params: LayerConfigParam[], cells: WorldCell[]): THREE.Mesh {
        // Create a buffer geometry
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.MeshStandardMaterial({
            vertexColors: true,
            side: THREE.DoubleSide,
            shadowSide: THREE.DoubleSide // Optimize shadow calculations
        });

        const cellRadius = getParamValue(params, 'resolution');
        const radiusCellCount = getParamValue(params, 'radius') / cellRadius;

        // Arrays to store geometry data
        const vertices = [];
        const indices = [];
        const colors = [];

        const colorMap = {
            water: new THREE.Color(0x0077be),
            land: new THREE.Color(0x228B22)
        };

        const width = Math.sqrt(3) * cellRadius;
        const height = 2 * cellRadius;
        
        // Define neighbor directions with edge information
        const neighborData = [
            { dir: [1, 0], currentEdge: [5, 0], neighborEdge: [2, 3] },     // right
            { dir: [1, -1], currentEdge: [4, 5], neighborEdge: [1, 2] },    // upper right
            { dir: [0, -1], currentEdge: [3, 4], neighborEdge: [0, 1] },    // upper left
            { dir: [-1, 0], currentEdge: [2, 3], neighborEdge: [5, 0] },    // left
            { dir: [-1, 1], currentEdge: [1, 2], neighborEdge: [4, 5] },    // lower left
            { dir: [0, 1], currentEdge: [0, 1], neighborEdge: [3, 4] }      // lower right
        ];

        // Create vertices and top faces for all hexes
        for (let q = -radiusCellCount; q <= radiusCellCount; q++) {
            for (let r = -radiusCellCount; r <= radiusCellCount; r++) {
                const s = -q - r;
                const hexDistance = (Math.abs(q) + Math.abs(r) + Math.abs(s)) / 2;
                if (hexDistance > radiusCellCount) {
                    continue; // Skip cells outside the hexagonal radius
                }

                const nq = q + radiusCellCount;
                const nr = r + radiusCellCount;
                const cell = cells[nq * (radiusCellCount * 2 + 1) + nr];

                const x = width * (q + r / 2);
                const z = height * 3 / 4 * r;
                const y = cell.height || 0;

                // Set color based on biome
                const color = colorMap[cell.biome as 'water' | 'land'] || new THREE.Color(0x888888);

                const centerIndex = vertices.length / 3;
                vertices.push(x, y, z);
                colors.push(color.r, color.g, color.b);

                // Add 6 corner vertices and create top face triangles
                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI / 3) + Math.PI / 6;
                    const cornerX = x + cellRadius * Math.cos(angle);
                    const cornerZ = z + cellRadius * Math.sin(angle);
                    
                    vertices.push(cornerX, y, cornerZ);
                    colors.push(color.r, color.g, color.b);
                    
                    const cornerIndex = centerIndex + 1 + i;
                    const nextCornerIndex = i === 5 ? centerIndex + 1 : cornerIndex + 1;
                    
                    indices.push(centerIndex, cornerIndex, nextCornerIndex);
                }
                
                // Add wall faces (only check 3 directions to avoid duplicates)
                for (let i = 0; i < 3; i++) {
                    const { dir, currentEdge, neighborEdge } = neighborData[i];
                    const [dq, dr] = dir;
                    const neighborQ = q + dq;
                    const neighborR = r + dr;
                    
                    // Skip if neighbor is outside the map
                    if (Math.abs(neighborQ) > radiusCellCount || 
                        Math.abs(neighborR) > radiusCellCount || 
                        Math.abs(-neighborQ-neighborR) > radiusCellCount) {
                        continue;
                    }
                    
                    const neighborNq = neighborQ + radiusCellCount;
                    const neighborNr = neighborR + radiusCellCount;
                    const neighborCell = cells[neighborNq * (radiusCellCount * 2 + 1) + neighborNr];
                    const neighborY = neighborCell.height || 0;
                    
                    // Only create wall if heights differ
                    if (Math.abs(y - neighborY) > 0.01) {
                        // Calculate indices of corners in current hex
                        const currentCorner1 = centerIndex + 1 + currentEdge[0];
                        const currentCorner2 = centerIndex + 1 + currentEdge[1];
                        
                        // Calculate neighbor's center index (based on vertex pattern)
                        const neighborCenterIndex = getHexCenterIndex(neighborQ, neighborR, radiusCellCount);
                        
                        // Calculate indices of corners in neighbor hex
                        const neighborCorner1 = neighborCenterIndex + 1 + neighborEdge[0];
                        const neighborCorner2 = neighborCenterIndex + 1 + neighborEdge[1];
                        
                        // Create two triangles to form the wall quad
                        // Order vertices based on which hex is higher for correct face normals
                        if (y > neighborY) {
                            indices.push(currentCorner1, neighborCorner2, neighborCorner1);
                            indices.push(currentCorner1, neighborCorner1, currentCorner2);
                        } else {
                            indices.push(currentCorner1, neighborCorner2, currentCorner2);
                            indices.push(currentCorner2, neighborCorner2, neighborCorner1);
                        }
                    }
                }
            }
        }
        
        // Helper function to calculate the center index of a hex at coordinates q,r
        function getHexCenterIndex(q: number, r: number, radiusCount: number): number {
            let count = 0;
            
            // Count hexes processed before this one
            for (let qIter = -radiusCount; qIter <= radiusCount; qIter++) {
                for (let rIter = -radiusCount; rIter <= radiusCount; rIter++) {
                    const sIter = -qIter - rIter;
                    const distance = (Math.abs(qIter) + Math.abs(rIter) + Math.abs(sIter)) / 2;
                    
                    if (distance > radiusCount) {
                        continue; // Skip cells outside the hexagonal radius
                    }
                    
                    if (qIter === q && rIter === r) {
                        // Found our hex
                        return count * 7; // Each hex uses 7 vertices (1 center + 6 corners)
                    }
                    
                    count++;
                }
            }
            
            return -1; // Should never happen if coordinates are valid
        }

        // Set the geometry attributes
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setIndex(indices);

        // Compute normals for proper lighting
        geometry.computeVertexNormals();

        // Create and return the mesh
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }
}
