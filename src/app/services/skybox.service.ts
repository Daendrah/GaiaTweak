import { Injectable } from '@angular/core';
import * as THREE from 'three';

import { SceneService } from './scene.service';

import { SKYBOX_VERTEX_SHADER, SKYBOX_FRAGMENT_SHADER } from '../shaders/space-shaders';

export interface SkyboxParams {
    textureSize: number;
    seed: number;
    baseColor: { r: number, g: number, b: number; };
    background: {
        enabled: boolean;
        backgroundNoise: {
            color: { r: number, g: number, b: number; };
            scale: number;
            octaves: number;
        };
    };
    stars: {
        enabled: boolean;
        density: number;
        minSize: number;
        maxSize: number;
        brightness: number;
        color1: { r: number, g: number, b: number; };
        color2: { r: number, g: number, b: number; };
        foregroundDensityMultiplier: number;
        foregroundSizeMultiplier: number;
        foregroundBrightnessMultiplier: number;
    };
    nebula: {
        enabled: boolean;
        outerColor: { r: number, g: number, b: number; };
        innerColor: { r: number, g: number, b: number; };
        coreColor: { r: number, g: number, b: number; };
        noiseScale: number;
        noiseOctave: number;
        lightColor: { r: number, g: number, b: number; };
        coreRadius: number;
        coreIntensity: number;
        raymarchSteps: number;
        absorption: number;
        scattering: number;
    };
}

@Injectable({
    providedIn: 'root'
})

export class SkyboxService {
    private sceneService!: SceneService;

    constructor() {
    }

    init(sceneService: SceneService): void {
        this.sceneService = sceneService;

        window.addEventListener('generate-skybox', (event: any) => {
            this.generateSkybox(event.detail);
        });
    }

    generateSpaceSkybox(params: SkyboxParams): Promise<THREE.CubeTexture> {
        return this.generateSpaceSkyboxInternal(params);
    }

    private async generateSpaceSkyboxInternal(
        params: SkyboxParams
    ): Promise<THREE.CubeTexture> {
        const generatedFaces = await this.generateCubeFaces(params);
        const cubeTexture = new THREE.CubeTexture(generatedFaces);
        cubeTexture.needsUpdate = true;
        cubeTexture.format = THREE.RGBAFormat;
        cubeTexture.colorSpace = THREE.SRGBColorSpace;

        return cubeTexture;
    }

    private async generateCubeFaces(params: SkyboxParams): Promise<HTMLCanvasElement[]> {
        const faces: HTMLCanvasElement[] = [];

        // Generate each cube face
        for (let faceIndex = 0; faceIndex < 6; faceIndex++) {
            const canvas = await this.generateCubeFace(faceIndex, params);
            faces.push(canvas);
        }

        return faces;
    }

    private async generateCubeFace(
        faceIndex: number,
        params: SkyboxParams,
    ): Promise<HTMLCanvasElement> {
        const target = new THREE.WebGLRenderTarget(params.textureSize, params.textureSize, {
            format: THREE.RGBAFormat,
            type: THREE.UnsignedByteType,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter
        });

        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_face_index: { value: faceIndex },
                u_seed: { value: params.seed },
                u_base_color: {
                    value: new THREE.Vector3(
                        (params.baseColor.r) / 255,
                        (params.baseColor.g) / 255,
                        (params.baseColor.b) / 255
                    )
                },
                u_background_enabled: { value: params.background.enabled },
                u_background_noise_color: {
                    value: new THREE.Vector3(
                        (params.background.backgroundNoise.color.r) / 255,
                        (params.background.backgroundNoise.color.g) / 255,
                        (params.background.backgroundNoise.color.b) / 255
                    )
                },
                u_background_noise_scale: { value: params.background.backgroundNoise.scale },
                u_background_noise_octave: { value: params.background.backgroundNoise.octaves },
                u_stars_enabled: { value: params.stars.enabled },
                u_stars_density: { value: params.stars.density },
                u_stars_min_size: { value: params.stars.minSize },
                u_stars_max_size: { value: params.stars.maxSize },
                u_stars_brightness: { value: params.stars.brightness },
                u_stars_color_1: {
                    value: new THREE.Vector3(
                        (params.stars.color1.r) / 255,
                        (params.stars.color1.g) / 255,
                        (params.stars.color1.b) / 255
                    )
                },
                u_stars_color_2: {
                    value: new THREE.Vector3(
                        (params.stars.color2.r) / 255,
                        (params.stars.color2.g) / 255,
                        (params.stars.color2.b) / 255
                    )
                },
                u_stars_foreground_density_multiplier: { value: params.stars.foregroundDensityMultiplier },
                u_stars_foreground_size_multiplier: { value: params.stars.foregroundSizeMultiplier },
                u_stars_foreground_brightness_multiplier: { value: params.stars.foregroundBrightnessMultiplier },
                u_nebula_enabled: { value: params.nebula.enabled },
                u_nebula_outer_color: {
                    value: new THREE.Vector3(
                        (params.nebula.outerColor.r) / 255,
                        (params.nebula.outerColor.g) / 255,
                        (params.nebula.outerColor.b) / 255
                    )
                },
                u_nebula_inner_color: {
                    value: new THREE.Vector3(
                        (params.nebula.innerColor.r) / 255,
                        (params.nebula.innerColor.g) / 255,
                        (params.nebula.innerColor.b) / 255
                    )
                },
                u_nebula_core_color: {
                    value: new THREE.Vector3(
                        (params.nebula.coreColor.r) / 255,
                        (params.nebula.coreColor.g) / 255,
                        (params.nebula.coreColor.b) / 255
                    )
                },
                u_nebula_noise_scale: { value: params.nebula.noiseScale },
                u_nebula_noise_octave: { value: params.nebula.noiseOctave },
                u_nebula_light_color: {
                    value: new THREE.Vector3(
                        (params.nebula.lightColor.r) / 255,
                        (params.nebula.lightColor.g) / 255,
                        (params.nebula.lightColor.b) / 255
                    )
                },
                u_nebula_core_radius: { value: params.nebula.coreRadius },
                u_nebula_core_intensity: { value: params.nebula.coreIntensity },
                u_nebula_raymarch_steps: { value: params.nebula.raymarchSteps },
                u_nebula_absorption: { value: params.nebula.absorption },
                u_nebula_scattering: { value: params.nebula.scattering }
            },
            vertexShader: SKYBOX_VERTEX_SHADER,
            fragmentShader: SKYBOX_FRAGMENT_SHADER
        });

        const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false });
        renderer.setSize(params.textureSize, params.textureSize);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const quad = new THREE.Mesh(geometry);
        scene.add(quad);

        quad.material = material;
        renderer.setRenderTarget(target);
        renderer.render(scene, camera);

        // Read pixels and convert to canvas
        const canvas = document.createElement('canvas');
        canvas.width = params.textureSize;
        canvas.height = params.textureSize;
        const ctx = canvas.getContext('2d')!;

        const pixels = new Uint8Array(params.textureSize * params.textureSize * 4);
        renderer.readRenderTargetPixels(target, 0, 0, params.textureSize, params.textureSize, pixels);

        const imageData = new ImageData(new Uint8ClampedArray(pixels), params.textureSize, params.textureSize);
        ctx.putImageData(imageData, 0, 0);

        renderer.dispose();
        material.dispose();
        target.dispose();

        return canvas;
    }

    private async generateSkybox(params: any): Promise<void> {
        try {
            console.time('Skybox generated successfully');
            const cubeTexture = await this.generateSpaceSkybox(params);
            this.sceneService.scene.background = cubeTexture;
            console.timeEnd('Skybox generated successfully');
        } catch (error) {
            console.error('Failed to generate skybox:', error);
        }
    }

    dispose(): void {
    }
}
