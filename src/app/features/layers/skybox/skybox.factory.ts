import * as THREE from 'three';
import { World } from '../../../core/gaia/world/world';
import { getParamValue } from '../../../shared/utils/layer-config.utils';
import { SKYBOX_VERTEX_SHADER, SKYBOX_FRAGMENT_SHADER } from './skybox.shader';
import { LayerConfigParam, LayerFactory } from '../../../core/layers/layer-factory.types';
import { PipelineJob, PipelineJobStep } from '../../../core/layers/pipeline-job.types';

export class SkyboxFactory implements LayerFactory {
    private currentSkyboxTexture: THREE.CubeTexture | null = null;
    private currentCubeRenderTarget: THREE.WebGLCubeRenderTarget | null = null;
    private generationScene: THREE.Scene;

    constructor() {
        this.generationScene = new THREE.Scene();
    }

    /**
     * Returns the pipeline of steps for skybox generation.
     * Uses the main renderer and a CubeCamera for efficient GPU-side cubemap generation.
     */
    getPipeline(params: LayerConfigParam[], world: World): PipelineJob {
        const steps: PipelineJobStep[] = [];

        steps.push({
            name: 'Generate procedural cubemap',
            run: async (context: any) => {
                // 1. Prepare render target and camera
                const textureSize = getParamValue(params, 'textureSize');
                if (this.currentCubeRenderTarget) {
                    this.currentCubeRenderTarget.dispose();
                    this.currentCubeRenderTarget = null;
                }
                const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(textureSize, {
                    format: THREE.RGBAFormat,
                    colorSpace: THREE.LinearSRGBColorSpace,
                    type: THREE.UnsignedByteType,
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                });

                // Reuse the class-level tempScene
                const material = this.createShaderMaterial(0, params);
                const geometry = new THREE.BoxGeometry(1, 1, 1);
                geometry.scale(1, 1, -1);
                const cube = new THREE.Mesh(geometry, material);
                this.generationScene.add(cube);

                const renderer = world.getRenderer();
                // 3. Setup CubeCamera and render to cubemap
                const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeRenderTarget);
                cubeCamera.update(renderer, this.generationScene);

                const pixel = new Uint8Array(4);
                renderer.readRenderTargetPixels(cubeRenderTarget, 0, 0, 1, 1, pixel, 0);

                // 4. Assign cubemap to world background
                world.getScene().background = cubeRenderTarget.texture;
                this.currentSkyboxTexture = cubeRenderTarget.texture as THREE.CubeTexture;
                this.currentCubeRenderTarget = cubeRenderTarget;

                // Cleanup mesh from generationScene and dispose geometry/material
                this.generationScene.remove(cube);
                geometry.dispose();
                material.dispose();
            }
        });

        return { steps };
    }

    /**
     * Reset or remove the skybox from the world.
     */
    reset(world: World): void {
        if (world && world.getScene().background === this.currentSkyboxTexture) {
            world.getScene().background = null;
        }
        this.cleanup();
    }

    /**
     * Return true if the skybox layer is currently active in the world.
     */
    isActive(world: World): boolean {
        return world.getScene().background === this.currentSkyboxTexture && !!this.currentSkyboxTexture;
    }

    private cleanup(): void {
        if (this.currentSkyboxTexture) {
            this.currentSkyboxTexture.dispose();
            this.currentSkyboxTexture = null;
        }
        if (this.currentCubeRenderTarget) {
            this.currentCubeRenderTarget.dispose();
            this.currentCubeRenderTarget = null;
        }
    }

    private createShaderMaterial(faceIndex: number, params: LayerConfigParam[]): THREE.ShaderMaterial {
        // Helper to convert hex color to normalized Vector3
        function hexToVec3(hex: string): THREE.Vector3 {
            const col = new THREE.Color(hex);
            return new THREE.Vector3(col.r, col.g, col.b);
        }

        return new THREE.ShaderMaterial({
            uniforms: {
                u_face_index: { value: faceIndex },
                u_seed: { value: getParamValue(params, 'seed') },
                u_base_color: { value: hexToVec3(getParamValue(params, 'baseColor')) },
                u_background_enabled: { value: getParamValue(params, 'background.enabled') },
                u_background_noise_color: { value: hexToVec3(getParamValue(params, 'background.backgroundNoise.color')) },
                u_background_noise_scale: { value: getParamValue(params, 'background.backgroundNoise.scale') },
                u_background_noise_octave: { value: getParamValue(params, 'background.backgroundNoise.octaves') },
                u_stars_enabled: { value: getParamValue(params, 'stars.enabled') },
                u_stars_density: { value: getParamValue(params, 'stars.density') },
                u_stars_min_size: { value: getParamValue(params, 'stars.minSize') },
                u_stars_max_size: { value: getParamValue(params, 'stars.maxSize') },
                u_stars_brightness: { value: getParamValue(params, 'stars.brightness') },
                u_stars_color_1: { value: hexToVec3(getParamValue(params, 'stars.color1')) },
                u_stars_color_2: { value: hexToVec3(getParamValue(params, 'stars.color2')) },
                u_stars_foreground_density_multiplier: { value: getParamValue(params, 'stars.foregroundDensityMultiplier') },
                u_stars_foreground_size_multiplier: { value: getParamValue(params, 'stars.foregroundSizeMultiplier') },
                u_stars_foreground_brightness_multiplier: { value: getParamValue(params, 'stars.foregroundBrightnessMultiplier') },
                u_nebula_enabled: { value: getParamValue(params, 'nebula.enabled') },
                u_nebula_outer_color: { value: hexToVec3(getParamValue(params, 'nebula.outerColor')) },
                u_nebula_inner_color: { value: hexToVec3(getParamValue(params, 'nebula.innerColor')) },
                u_nebula_core_color: { value: hexToVec3(getParamValue(params, 'nebula.coreColor')) },
                u_nebula_noise_scale: { value: getParamValue(params, 'nebula.noiseScale') },
                u_nebula_noise_octave: { value: getParamValue(params, 'nebula.noiseOctave') },
                u_nebula_light_color: { value: hexToVec3(getParamValue(params, 'nebula.lightColor')) },
                u_nebula_core_radius: { value: getParamValue(params, 'nebula.coreRadius') },
                u_nebula_core_intensity: { value: getParamValue(params, 'nebula.coreIntensity') },
                u_nebula_raymarch_steps: { value: getParamValue(params, 'nebula.raymarchSteps') },
                u_nebula_absorption: { value: getParamValue(params, 'nebula.absorption') },
                u_nebula_scattering: { value: getParamValue(params, 'nebula.scattering') }
            },
            vertexShader: SKYBOX_VERTEX_SHADER,
            fragmentShader: SKYBOX_FRAGMENT_SHADER
        });
    }
}
