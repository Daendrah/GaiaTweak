import * as THREE from 'three';
import { World } from '../../../core/gaia/world/world';
import { getParamValue } from '../../../shared/utils/layer-config.utils';
import { SKYBOX_VERTEX_SHADER } from './common.shader';
import { SKYBOX_BACKGROUND_FRAGMENT_SHADER } from './background.shader';
import { SKYBOX_KUWAHARA_FRAGMENT_SHADER } from './kuwahara.shader';
import { SKYBOX_STARS_FRAGMENT_SHADER } from './stars.shader';
import { LayerConfigParam, LayerFactory } from '../../../core/layers/layer-factory.types';
import { PipelineJob, PipelineJobStep } from '../../../core/layers/pipeline-job.types';
import { SKYBOX_CLOUDS_FRAGMENT_SHADER } from './clouds.shader';

export class SkyboxFactory implements LayerFactory {
    private currentSkyboxTexture: THREE.CubeTexture | null = null;
    private currentCubeRenderTarget: THREE.WebGLCubeRenderTarget | null = null;
    private generationScene: THREE.Scene;
    private intermediateCubeTargets: THREE.WebGLCubeRenderTarget[] = [];

    constructor() {
        this.generationScene = new THREE.Scene();
    }

    getPipeline(params: LayerConfigParam[], world: World): PipelineJob {
        const steps: PipelineJobStep[] = [];
        const textureSize = getParamValue(params, 'textureSize');
        const renderer = world.getRenderer();

        // Step 1: Creating resources (initialize cubemap render targets for each pass)
        steps.push({
            name: 'Creating resources',
            run: async (context: any) => {
                this.intermediateCubeTargets = [];
                // 4 passes: background, clouds, post-process, stars
                for (let i = 0; i < 4; ++i) {
                    this.intermediateCubeTargets.push(
                        new THREE.WebGLCubeRenderTarget(textureSize, {
                            format: THREE.RGBAFormat,
                            colorSpace: THREE.LinearSRGBColorSpace,
                            type: THREE.FloatType,
                            minFilter: THREE.LinearFilter,
                            magFilter: THREE.LinearFilter,
                        })
                    );
                }
                context.prevCubemap = null; // No input for first pass
            }
        });

        // Step 2: Generating skybox background (cubemap)
        steps.push({
            name: 'Generating skybox background',
            run: async (context: any) => {
                const cubeTarget = this.intermediateCubeTargets[0];
                const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeTarget);
                this.generationScene.clear();
                const material = this.createBackgroundCubemapShader(params, context.noiseTexture);
                const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
                mesh.geometry.scale(1, 1, -1);
                this.generationScene.add(mesh);
                cubeCamera.update(renderer, this.generationScene);
                this.generationScene.remove(mesh);
                mesh.geometry.dispose();
                material.dispose();
                context.prevCubemap = cubeTarget.texture;
            }
        });

        // Step 3: Generating cosmic clouds (cubemap)
        steps.push({
            name: 'Generating cosmic clouds',
            run: async (context: any) => {
                const prevCubemap = context.prevCubemap;
                const cubeTarget = this.intermediateCubeTargets[1];
                const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeTarget);
                this.generationScene.clear();
                const material = this.createCloudsCubemapShader(params, prevCubemap);
                const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
                mesh.geometry.scale(1, 1, -1);
                this.generationScene.add(mesh);
                cubeCamera.update(renderer, this.generationScene);
                this.generationScene.remove(mesh);
                mesh.geometry.dispose();
                material.dispose();
                context.prevCubemap = cubeTarget.texture;
            }
        });

        // Step 4: Post-processing Skybox (cubemap, e.g. Kuwahara)
        steps.push({
            name: 'Post-processing Skybox',
            run: async (context: any) => {
                const prevCubemap = context.prevCubemap;
                const cubeTarget = this.intermediateCubeTargets[2];
                const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeTarget);
                this.generationScene.clear();
                const material = this.createPostProcessCubemapShader(params, prevCubemap);
                const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
                mesh.geometry.scale(1, 1, -1);
                this.generationScene.add(mesh);
                cubeCamera.update(renderer, this.generationScene);
                this.generationScene.remove(mesh);
                mesh.geometry.dispose();
                material.dispose();
                context.prevCubemap = cubeTarget.texture;
            }
        });

        // Step 5: Generating Stars (cubemap)
        steps.push({
            name: 'Generating Stars',
            run: async (context: any) => {
                const prevCubemap = context.prevCubemap;
                const cubeTarget = this.intermediateCubeTargets[3];
                const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeTarget);
                this.generationScene.clear();
                const material = this.createStarsCubemapShader(params, prevCubemap);
                const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
                mesh.geometry.scale(1, 1, -1);
                this.generationScene.add(mesh);
                cubeCamera.update(renderer, this.generationScene);
                this.generationScene.remove(mesh);
                mesh.geometry.dispose();
                material.dispose();
                context.prevCubemap = cubeTarget.texture;
            }
        });

        // Step 6: Assign final cubemap to world
        steps.push({
            name: 'Assemble cubemap',
            run: async (context: any) => {
                if (this.currentCubeRenderTarget) {
                    this.currentCubeRenderTarget.dispose();
                    this.currentCubeRenderTarget = null;
                }
                // The last cubemap is the final result
                const finalCubemap = this.intermediateCubeTargets[3];
                world.getScene().background = finalCubemap.texture;
                this.currentSkyboxTexture = finalCubemap.texture as THREE.CubeTexture;
                this.currentCubeRenderTarget = finalCubemap;
            }
        });

        // Step 7: Finalize (dispose intermediates except the last one)
        steps.push({
            name: 'Finalize',
            run: async (context: any) => {
                // Dispose all intermediate cubemaps except the last (used as background)
                for (let i = 0; i < this.intermediateCubeTargets.length - 1; ++i) {
                    //this.intermediateCubeTargets[i].dispose();
                }
                //this.intermediateCubeTargets = [];
                //this.cleanup();
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

    private createBackgroundCubemapShader(params: LayerConfigParam[], noiseTexture: THREE.Texture): THREE.ShaderMaterial {
        function hexToVec3(hex: string): THREE.Vector3 {
            const col = new THREE.Color(hex);
            return new THREE.Vector3(col.r, col.g, col.b);
        }

        return new THREE.ShaderMaterial({
            uniforms: {
                u_seed: { value: getParamValue(params, 'seed') },
                u_background_enabled: { value: getParamValue(params, 'background.enabled') },
                u_background_noise_intensity: { value: getParamValue(params, 'background.noiseIntensity') },
                u_deep_space_base: { value: hexToVec3(getParamValue(params, 'background.deepSpaceBase')) },
                u_deep_space_dark: { value: hexToVec3(getParamValue(params, 'background.deepSpaceDark')) },
                u_deep_space_mid: { value: hexToVec3(getParamValue(params, 'background.deepSpaceMid')) },
                u_deep_space_subtle: { value: hexToVec3(getParamValue(params, 'background.deepSpaceSubtle')) },
            },
            vertexShader: SKYBOX_VERTEX_SHADER,
            fragmentShader: SKYBOX_BACKGROUND_FRAGMENT_SHADER,
            glslVersion: THREE.GLSL3
        });
    }

    // Shader for clouds, takes previous cubemap as uniform
    private createCloudsCubemapShader(params: LayerConfigParam[], prevCubemap: THREE.CubeTexture): THREE.ShaderMaterial {
        return new THREE.ShaderMaterial({
            uniforms: {
                u_previous_cubemap: { value: prevCubemap },
            },
            vertexShader: SKYBOX_VERTEX_SHADER,
            fragmentShader: SKYBOX_CLOUDS_FRAGMENT_SHADER,
            glslVersion: THREE.GLSL3
        });
    }

    // Shader for post-process, takes previous cubemap as uniform
    private createPostProcessCubemapShader(params: LayerConfigParam[], prevCubemap: THREE.CubeTexture): THREE.ShaderMaterial {
        return new THREE.ShaderMaterial({
            uniforms: {
                u_kuwahara_enabled: { value: getParamValue(params, 'kuwahara.enabled') },
                u_kernel_radius: { value: getParamValue(params, 'kuwahara.kernelRadius') },
                u_previous_cubemap: { value: prevCubemap },
            },
            vertexShader: SKYBOX_VERTEX_SHADER,
            fragmentShader: SKYBOX_KUWAHARA_FRAGMENT_SHADER,
            glslVersion: THREE.GLSL3
        });
    }

    // Shader for stars, takes previous cubemap as uniform
    private createStarsCubemapShader(params: LayerConfigParam[], prevCubemap: THREE.CubeTexture): THREE.ShaderMaterial {
        function hexToVec3(hex: string): THREE.Vector3 {
            const col = new THREE.Color(hex);
            return new THREE.Vector3(col.r, col.g, col.b);
        }

        return new THREE.ShaderMaterial({
            uniforms: {
                u_stars_enabled: { value: getParamValue(params, 'stars.enabled') },
                u_star_density: { value: getParamValue(params, 'stars.density') },
                u_star_size_variation: { value: getParamValue(params, 'stars.sizeVariation') },
                u_star_color_base: { value: hexToVec3(getParamValue(params, 'stars.colorBase')) },
                u_star_color_tint1: { value: hexToVec3(getParamValue(params, 'stars.colorTint1')) },
                u_star_color_tint2: { value: hexToVec3(getParamValue(params, 'stars.colorTint2')) },
                u_color_threshold1: { value: getParamValue(params, 'stars.colorThreshold1') },
                u_color_threshold2: { value: getParamValue(params, 'stars.colorThreshold2') },
                u_star_brightness_max: { value: getParamValue(params, 'stars.brightnessMax') },
                u_star_brightness_min: { value: getParamValue(params, 'stars.brightnessMin') },
                u_previous_cubemap: { value: prevCubemap }
            },
            vertexShader: SKYBOX_VERTEX_SHADER,
            fragmentShader: SKYBOX_STARS_FRAGMENT_SHADER,
            glslVersion: THREE.GLSL3
        });
    }
}
