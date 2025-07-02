import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { SKYBOX_VERTEX_SHADER, SKYBOX_FRAGMENT_SHADER } from './skybox-shaders';

export interface SkyboxLayerParams {
  enabled: boolean;
  scale?: number;
  octaves?: number;
  persistence?: number;
  color?: { r: number, g: number, b: number };
  density?: number;
  contrast?: number;
}

export interface SkyboxGenerationParams {
  textureSize?: number;
  seed?: number;
  baseColor?: { r: number, g: number, b: number };
  background?: {
    enabled: boolean;
    backgroundNoise?: {
      color: { r: number, g: number, b: number };
      scale: number;
      octaves: number;
    }
  };
  stars?: {
    enabled: boolean;
    density?: number;
    minSize?: number;
    maxSize?: number;
    brightness?: number;
    color1?: { r: number, g: number, b: number };
    color2?: { r: number, g: number, b: number };
    foregroundDensityMultiplier?: number;
    foregroundSizeMultiplier?: number;
    foregroundBrightnessMultiplier?: number;
  };
  nebula?: {
    enabled: boolean;
    outerColor?: { r: number, g: number, b: number };
    innerColor?: { r: number, g: number, b: number };
    coreColor?: { r: number, g: number, b: number };
    noiseScale?: number;
    noiseOctave?: number;
    lightColor?: { r: number, g: number, b: number };
    coreRadius?: number;
    coreIntensity?: number;
    raymarchSteps?: number;
    absorption?: number;
    scattering?: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SkyboxService {
  private readonly BASE_BLUE = { r: 3, g: 7, b: 13 };
  private readonly NEBULA_COLOR = { r: 207, g: 75, b: 4 };
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.OrthographicCamera;
  private quad!: THREE.Mesh;

  constructor() {
    this.initializeGPUResources();
  }

  private initializeGPUResources(): void {
    // Create offscreen renderer for GPU computations
    this.renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false });
    this.renderer.setSize(1, 1); // Will be resized as needed
    
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    // Create fullscreen quad for shader rendering
    const geometry = new THREE.PlaneGeometry(2, 2);
    this.quad = new THREE.Mesh(geometry);
    this.scene.add(this.quad);
  }

  // Main API methods
  generateSpaceSkybox(params?: SkyboxGenerationParams): Promise<THREE.CubeTexture> {
    return this.generateSpaceSkyboxInternal(params);
  }

  private async generateSpaceSkyboxInternal(
    params?: SkyboxGenerationParams
  ): Promise<THREE.CubeTexture> {
    const textureSize = params?.textureSize ?? 128;
    const seed = params?.seed ?? Math.floor(Math.random() * 0xffffffff);
    
    const generatedFaces = await this.generateCubeFacesGpu(textureSize, seed, params);
    const cubeTexture = new THREE.CubeTexture(generatedFaces);
    cubeTexture.needsUpdate = true;
    cubeTexture.format = THREE.RGBAFormat;
    cubeTexture.colorSpace = THREE.SRGBColorSpace;
    
    return cubeTexture;
  }

  // GPU Implementation
  private async generateCubeFacesGpu(
    textureSize: number, 
    seed: number, 
    params?: SkyboxGenerationParams
  ): Promise<HTMLCanvasElement[]> {
    const renderTarget = new THREE.WebGLRenderTarget(textureSize, textureSize, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter
    });

    this.renderer.setSize(textureSize, textureSize);
    
    const faces: HTMLCanvasElement[] = [];
    
    // Generate each cube face
    for (let faceIndex = 0; faceIndex < 6; faceIndex++) {
      const canvas = await this.generateCubeFaceGpu(textureSize, faceIndex, seed, params, renderTarget);
      faces.push(canvas);
    }
    
    renderTarget.dispose();
    return faces;
  }

  private async generateCubeFaceGpu(
    textureSize: number,
    faceIndex: number,
    seed: number,
    params?: SkyboxGenerationParams,
    renderTarget?: THREE.WebGLRenderTarget
  ): Promise<HTMLCanvasElement> {
    const target = renderTarget || new THREE.WebGLRenderTarget(textureSize, textureSize);

    // Nebula color defaults
    const NEBULA_OUTER = { r: 30, g: 70, b: 90 };    // Dark blue/teal edge
    const NEBULA_MID = { r: 120, g: 180, b: 100 };   // Greenish mid-tone
    const NEBULA_INNER = { r: 240, g: 140, b: 50 };  // Orange inner
    const NEBULA_CORE = { r: 255, g: 220, b: 130 };  // Bright yellow core

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_face_index: { value: faceIndex },
        u_seed: { value: params?.seed ?? 0 },
        u_base_color: { value: new THREE.Vector3(
          (params?.baseColor?.r ?? 3) / 255,
          (params?.baseColor?.g ?? 7) / 255,
          (params?.baseColor?.b ?? 13) / 255
        )},
        u_background_enabled: { value: params?.background?.enabled ?? true },
        u_background_noise_color: { value: new THREE.Vector3(
          (params?.background?.backgroundNoise?.color?.r ?? 60) / 255,
          (params?.background?.backgroundNoise?.color?.g ?? 80) / 255,
          (params?.background?.backgroundNoise?.color?.b ?? 120) / 255
        )},
        u_background_noise_scale: { value: params?.background?.backgroundNoise?.scale ?? 2.0 },
        u_background_noise_octave: { value: params?.background?.backgroundNoise?.octaves ?? 6 },
        u_stars_enabled: { value: params?.stars?.enabled ?? true },
        u_stars_density: { value: params?.stars?.density ?? 0.5 },
        u_stars_min_size: { value: params?.stars?.minSize ?? 0.05 },
        u_stars_max_size: { value: params?.stars?.maxSize ?? 1.5 },
        u_stars_brightness: { value: params?.stars?.brightness ?? 1.0 },
        u_stars_color_1: { value: new THREE.Vector3(
          (params?.stars?.color1?.r ?? 255) / 255,
          (params?.stars?.color1?.g ?? 255) / 255,
          (params?.stars?.color1?.b ?? 255) / 255
        )},
        u_stars_color_2: { value: new THREE.Vector3(
          (params?.stars?.color2?.r ?? 255) / 255,
          (params?.stars?.color2?.g ?? 200) / 255,
          (params?.stars?.color2?.b ?? 180) / 255
        )},
        u_stars_foreground_density_multiplier: { value: params?.stars?.foregroundDensityMultiplier ?? 1.0 },
        u_stars_foreground_size_multiplier: { value: params?.stars?.foregroundSizeMultiplier ?? 1.0 },
        u_stars_foreground_brightness_multiplier: { value: params?.stars?.foregroundBrightnessMultiplier ?? 1.0 },
        u_nebula_enabled: { value: params?.nebula?.enabled ?? true },
        u_nebula_outer_color: { value: new THREE.Vector3(
          (params?.nebula?.outerColor?.r ?? NEBULA_OUTER.r) / 255,
          (params?.nebula?.outerColor?.g ?? NEBULA_OUTER.g) / 255,
          (params?.nebula?.outerColor?.b ?? NEBULA_OUTER.b) / 255
        )},
        u_nebula_inner_color: { value: new THREE.Vector3(
          (params?.nebula?.innerColor?.r ?? NEBULA_INNER.r) / 255,
          (params?.nebula?.innerColor?.g ?? NEBULA_INNER.g) / 255,
          (params?.nebula?.innerColor?.b ?? NEBULA_INNER.b) / 255
        )},
        u_nebula_core_color: { value: new THREE.Vector3(
          (params?.nebula?.coreColor?.r ?? NEBULA_CORE.r) / 255,
          (params?.nebula?.coreColor?.g ?? NEBULA_CORE.g) / 255,
          (params?.nebula?.coreColor?.b ?? NEBULA_CORE.b) / 255
        )},
        u_nebula_noise_scale: { value: params?.nebula?.noiseScale ?? 1.0 },
        u_nebula_noise_octave: { value: params?.nebula?.noiseOctave ?? 6 },
        u_nebula_light_color: { value: new THREE.Vector3(
          (params?.nebula?.lightColor?.r ?? 255) / 255,
          (params?.nebula?.lightColor?.g ?? 255) / 255,
          (params?.nebula?.lightColor?.b ?? 255) / 255
        )},
        u_nebula_core_radius: { value: params?.nebula?.coreRadius ?? 0.5 },
        u_nebula_core_intensity: { value: params?.nebula?.coreIntensity ?? 1.0 },
        u_nebula_raymarch_steps: { value: params?.nebula?.raymarchSteps ?? 8 },
        u_nebula_absorption: { value: params?.nebula?.absorption ?? 0.6 },
        u_nebula_scattering: { value: params?.nebula?.scattering ?? 0.5 }
      },
      vertexShader: SKYBOX_VERTEX_SHADER,
      fragmentShader: SKYBOX_FRAGMENT_SHADER
    });
    
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.camera);
    
    // Read pixels and convert to canvas
    const canvas = document.createElement('canvas');
    canvas.width = textureSize;
    canvas.height = textureSize;
    const ctx = canvas.getContext('2d')!;
    
    const pixels = new Uint8Array(textureSize * textureSize * 4);
    this.renderer.readRenderTargetPixels(target, 0, 0, textureSize, textureSize, pixels);
    
    const imageData = new ImageData(new Uint8ClampedArray(pixels), textureSize, textureSize);
    ctx.putImageData(imageData, 0, 0);
    
    material.dispose();
    this.renderer.setRenderTarget(null);
    
    return canvas;
  }

  dispose(): void {
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.quad?.geometry) {
      this.quad.geometry.dispose();
    }
    if (this.quad?.material && Array.isArray(this.quad.material)) {
      this.quad.material.forEach(material => material.dispose());
    } else if (this.quad?.material) {
      (this.quad.material as THREE.Material).dispose();
    }
  }
}
