import * as THREE from 'three';
import { World } from '../../../core/gaia/world/world';
import { BLOOM_LAYER_INDEX } from '../../../core/gaia/graphic/rendering-pipeline';
import { getParamValue } from '../../../shared/utils/layer-config.utils';
import { SUN_VERTEX_SHADER, SUN_FRAGMENT_SHADER } from './sun.shader';
import { LayerFactory, LayerConfigParam } from '../../../core/layers/layer-factory.types';
import { PipelineJob, PipelineJobStep } from '../../../core/layers/pipeline-job.types';

const SUN_LIGHT_TAG = 'sunLight';
const SUN_MESH_TAG = 'sunMesh';

export class LightingFactory implements LayerFactory {
    /**
     * Retourne le pipeline d'étapes pour la génération du lighting (une étape unique ici).
     */
    getPipeline(params: LayerConfigParam[], world: World): PipelineJob {
        const steps: PipelineJobStep[] = [
            {
                name: 'Generate sun',
                run: async () => {
                    this.generateSun(params, world);
                }
            }
        ];
        return { steps };
    }

    /**
     * Reset or remove the lighting layer from the world.
     */
    reset(world: World): void {
        const scene = world.getScene();
        const light = scene.getObjectByName(SUN_LIGHT_TAG) as THREE.DirectionalLight | null;
        const mesh = scene.getObjectByName(SUN_MESH_TAG) as THREE.Mesh | null;
        if (light) {
            scene.remove(light);
            light.dispose?.();
        }
        if (mesh) {
            scene.remove(mesh);
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
                mesh.material.forEach(mat => mat.dispose());
            } else {
                mesh.material.dispose();
            }
        }
    }

    /**
     * Return true if the lighting layer is currently active in the world.
     */
    isActive(world: World): boolean {
        return !!world.getScene().getObjectByName(SUN_LIGHT_TAG);
    }

    private generateSun(params: LayerConfigParam[], world: World): void {
        let existingLight = world.getScene().getObjectByName(SUN_LIGHT_TAG) as THREE.DirectionalLight | null;
        let existingMesh = world.getScene().getObjectByName(SUN_MESH_TAG) as THREE.Mesh | null;
        if (!existingLight && !existingMesh) {
            const sunObjects = this.createSun(world);
            existingLight = sunObjects.light;
            existingMesh = sunObjects.mesh;
        }

        // Calculate sun position from angle and distance
        const sunAngle = getParamValue(params, 'sunAngle');
        const sunDistance = getParamValue(params, 'sunDistance');
        const angleRad = (sunAngle / 180) * Math.PI;
        const x = 0;
        const y = Math.cos(angleRad) * sunDistance;
        const z = -Math.sin(angleRad) * sunDistance;

        if (existingLight) {
            existingLight.position.set(x, y, z);
            const sunLightColor = new THREE.Color(getParamValue(params, 'sunLightColor'));
            existingLight.color.setRGB(sunLightColor.r, sunLightColor.g, sunLightColor.b);
        }

        if (existingMesh) {
            existingMesh.position.set(x, y, z);
            const geometry = existingMesh.geometry as THREE.SphereGeometry;
            const sunSize = getParamValue(params, 'sunSize');
            if (geometry.parameters.radius !== sunSize) {
                existingMesh.geometry.dispose();
                existingMesh.geometry = new THREE.SphereGeometry(sunSize, 64, 64);
            }

            const mat = existingMesh.material as THREE.ShaderMaterial;
            const sunInnerColor = new THREE.Color(getParamValue(params, 'sunInnerColor'));
            const sunOuterColor = new THREE.Color(getParamValue(params, 'sunOuterColor'));
            mat.uniforms['u_innerColor'].value.setRGB(sunInnerColor.r, sunInnerColor.g, sunInnerColor.b);
            mat.uniforms['u_outerColor'].value.setRGB(sunOuterColor.r, sunOuterColor.g, sunOuterColor.b);
            mat.uniforms['u_edgePower'].value = getParamValue(params, 'sunEdgePower');
            mat.needsUpdate = true;
        }
    }

    private createSun(world: World): { light: THREE.DirectionalLight; mesh: THREE.Mesh } {
        const light = new THREE.DirectionalLight(0xffffff, 0.9);
        light.position.set(100, 80, 50);
        light.castShadow = true;

        // Optimized shadow settings for large terrain
        light.shadow.mapSize.width = 4096;
        light.shadow.mapSize.height = 4096;
        const d = 200;
        light.shadow.camera.left = -d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = -d;
        light.shadow.camera.near = 1;
        light.shadow.camera.far = 500;
        light.shadow.bias = -0.0005;
        light.shadow.normalBias = 0.05;
        light.shadow.radius = 1.5;
        light.shadow.blurSamples = 8;

        const geometry = new THREE.SphereGeometry(7, 64, 64);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_innerColor: { value: new THREE.Color(1.0, 0.35, 0.0) },
                u_outerColor: { value: new THREE.Color(1.0, 0.99, 0.88) },
                u_edgePower: { value: 2.5 }
            },
            vertexShader: SUN_VERTEX_SHADER,
            fragmentShader: SUN_FRAGMENT_SHADER,
            transparent: true,
            depthWrite: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(light.position);
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        mesh.layers.enable(BLOOM_LAYER_INDEX);

        light.name = SUN_LIGHT_TAG;
        mesh.name = SUN_MESH_TAG;

        world.getScene().add(light);
        world.getScene().add(mesh);

        return { light, mesh };
    }
}
