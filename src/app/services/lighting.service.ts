import { Injectable } from '@angular/core';
import * as THREE from 'three';

import { SceneService } from './scene.service';

import { BLOOM_LAYER_INDEX } from './postprocessing.service';
import { SUN_VERTEX_SHADER, SUN_FRAGMENT_SHADER } from '../shaders/space-shaders';

export interface LightingParams {
    sunSize: number;
    sunAngle: number; // degrees, 0 = top, 90 = horizontal
    sunDistance: number;
    sunLightColor: { r: number, g: number, b: number; },
    sunOuterColor: { r: number, g: number, b: number; },
    sunInnerColor: { r: number, g: number, b: number; },
    sunEdgePower: number;
}

@Injectable({
    providedIn: 'root'
})

export class LightingService {

    private sunLight!: THREE.DirectionalLight;
    private sunMesh!: THREE.Mesh;

    constructor() {
    }

    init(sceneService: SceneService): void {
        this.sunLight = new THREE.DirectionalLight(0xffffff, 0.9);
        this.sunLight.position.set(100, 80, 50);
        this.sunLight.castShadow = true;

        // Optimized shadow settings to avoid skybox interference
        this.sunLight.shadow.mapSize.width = 2048;
        this.sunLight.shadow.mapSize.height = 2048;
        this.sunLight.shadow.camera.near = 1;
        this.sunLight.shadow.camera.far = 200;
        this.sunLight.shadow.camera.left = -50;
        this.sunLight.shadow.camera.right = 50;
        this.sunLight.shadow.camera.top = 50;
        this.sunLight.shadow.camera.bottom = -50;
        this.sunLight.shadow.bias = -0.0005;

        sceneService.scene.add(this.sunLight);

        if (this.sunMesh) {
            sceneService.scene.remove(this.sunMesh);
            this.sunMesh.geometry.dispose();
            (this.sunMesh.material as THREE.Material).dispose();
        }

        // Sun as a sphere
        const geometry = new THREE.SphereGeometry(7, 64, 64);

        // Custom shader material for a stylized sun with radial color and soft edge
        const sunMaterial = new THREE.ShaderMaterial({
            uniforms: {
                u_innerColor: { value: new THREE.Color(1.0, 0.35, 0.0) }, // emissive orange
                u_outerColor: { value: new THREE.Color(1.0, 0.99, 0.88) }, // pale yellow/white
                u_edgePower: { value: 2.5 }
            },
            vertexShader: SUN_VERTEX_SHADER,
            fragmentShader: SUN_FRAGMENT_SHADER,
            transparent: true,
            depthWrite: false
        });

        this.sunMesh = new THREE.Mesh(geometry, sunMaterial);
        this.sunMesh.position.copy(this.sunLight.position);
        this.sunMesh.castShadow = false;
        this.sunMesh.receiveShadow = false;
        this.sunMesh.layers.set(BLOOM_LAYER_INDEX); // Use the constant from PostprocessingService

        sceneService.scene.add(this.sunMesh);

        window.addEventListener('generate-lighting', (event: any) => {
            this.generateLighting(event.detail);
        });
    }


    updateLighting(params: LightingParams) {
        // Calculate sun position from angle and distance
        const angleRad = (params.sunAngle / 180) * Math.PI;
        const x = 0;
        const y = Math.cos(angleRad) * params.sunDistance;
        const z = -Math.sin(angleRad) * params.sunDistance;

        // Update sun position
        if (this.sunLight) this.sunLight.position.set(x, y, z);
        if (this.sunMesh) this.sunMesh.position.set(x, y, z);

        // Update sun size (geometry)
        if (this.sunMesh) {
            const geo = this.sunMesh.geometry as THREE.SphereGeometry;
            if (geo.parameters.radius !== params.sunSize) {
                this.sunMesh.geometry.dispose();
                this.sunMesh.geometry = new THREE.SphereGeometry(params.sunSize, 64, 64);
            }

            if (this.sunMesh.children.length > 0) {
                const glowMesh = this.sunMesh.children[0] as THREE.Mesh;
                if (glowMesh && glowMesh.geometry instanceof THREE.SphereGeometry) {
                    glowMesh.geometry.dispose();
                    glowMesh.geometry = new THREE.SphereGeometry(params.sunSize * 2, 48, 48);
                }
            }
        }

        // Update sun light color
        if (this.sunLight) {
            this.sunLight.color.setRGB(
                params.sunLightColor.r / 255,
                params.sunLightColor.g / 255,
                params.sunLightColor.b / 255
            );
        }

        // Update sun mesh shader uniforms
        if (this.sunMesh && this.sunMesh.material instanceof THREE.ShaderMaterial) {
            const mat = this.sunMesh.material;
            mat.uniforms['u_innerColor'].value.setRGB(
                params.sunInnerColor.r / 255,
                params.sunInnerColor.g / 255,
                params.sunInnerColor.b / 255
            );
            mat.uniforms['u_outerColor'].value.setRGB(
                params.sunOuterColor.r / 255,
                params.sunOuterColor.g / 255,
                params.sunOuterColor.b / 255
            );
            mat.uniforms['u_edgePower'].value = params.sunEdgePower;

            mat.needsUpdate = true;
        }
    }

    private async generateLighting(params: any): Promise<void> {
        try {
            console.time('Lighting generated successfully');
            this.updateLighting(params);
            console.timeEnd('Lighting generated successfully');
        } catch (error) {
            console.error('Failed to generate lighting:', error);
        }
    }

    dispose(): void {
        if (this.sunLight) this.sunLight.dispose();
        if (this.sunMesh) {
            this.sunMesh.geometry.dispose();
            (this.sunMesh.material as THREE.Material).dispose();
        }
    }
}
