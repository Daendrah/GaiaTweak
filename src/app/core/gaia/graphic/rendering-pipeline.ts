import * as THREE from 'three';

import { BLOOM_COMPOSITE_FRAGMENT_SHADER, BLOOM_COMPOSITE_VERTEX_SHADER } from './bloom-composite.shader';

// @ts-ignore
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// @ts-ignore
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
// @ts-ignore
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// @ts-ignore
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
// @ts-ignore
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

import { World } from '../world/world';


export const BLOOM_LAYER_INDEX = 1;

export class RenderingPipeline {
    private renderer!: THREE.WebGLRenderer;

    private bloomComposer!: EffectComposer;
    private finalComposer!: EffectComposer;

    init(canvas: HTMLCanvasElement, width: number, height: number, world: World): void {
        this.renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.NoToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        this.renderer.shadowMap.autoUpdate = true;
        
        const scene = world.getScene();
        const camera = world.getCamera();

        const renderPass = new RenderPass(scene, camera);
        renderPass.clearColor = new THREE.Color(0, 0, 0);

        const canvasSize = new THREE.Vector2(width, height);
        const bloomRenderPass = new UnrealBloomPass(canvasSize, 1.0, 0.0, 0.0);
        bloomRenderPass.clearColor = new THREE.Color(0, 0, 0);

        this.bloomComposer = new EffectComposer(this.renderer);
        this.bloomComposer.addPass(renderPass);
        this.bloomComposer.addPass(bloomRenderPass);
        this.bloomComposer.renderToScreen = false;

        const bloomTexture = this.bloomComposer.renderTarget2.texture;
        const bloomShader = new THREE.ShaderMaterial({
            uniforms: {
                u_baseTexture: { value: null as THREE.Texture | null },
                u_bloomTexture: { value: bloomTexture as THREE.Texture | null }
            },
            vertexShader: BLOOM_COMPOSITE_VERTEX_SHADER,
            fragmentShader: BLOOM_COMPOSITE_FRAGMENT_SHADER,
        });

        const bloomCompositingPass = new ShaderPass(bloomShader, 'u_baseTexture');
        bloomCompositingPass.needsSwap = true;

        const outputPass = new OutputPass();
        this.finalComposer = new EffectComposer(this.renderer);
        this.finalComposer.addPass(renderPass);
        this.finalComposer.addPass(bloomCompositingPass);
        this.finalComposer.addPass(outputPass);
        this.finalComposer.renderToScreen = true;
    }

    onResize(width: number, height: number): void {
        console.log('Resizing renderer to:', width, height);
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    private filterObject(obj: THREE.Object3D, layers: THREE.Layers, materialsMap: Map<THREE.Object3D, THREE.Material | THREE.Material[]>, darkMaterial: THREE.Material): void {
        if (obj instanceof THREE.Mesh && !obj.layers.test(layers)) {
            materialsMap.set(obj, obj.material);
            obj.material = darkMaterial;
        }
    }

    private restoreObjects(materialsMap: Map<THREE.Object3D, THREE.Material | THREE.Material[]>): void {
        materialsMap.forEach((material, obj) => {
            if (obj instanceof THREE.Mesh) {
                obj.material = material;
            }
        });
    }

    getRenderer(): THREE.WebGLRenderer {
        return this.renderer;
    }

    render(world: World): void {
        const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
        const materialsMap = new Map();
        const bloomLayer = new THREE.Layers();
        bloomLayer.set(BLOOM_LAYER_INDEX);

        const scene = world.getScene();
        const originalBackground = scene.background;
        scene.background = null;
        scene.traverse(obj => this.filterObject(obj, bloomLayer, materialsMap, darkMaterial));

        this.bloomComposer.render();

        this.restoreObjects(materialsMap);
        scene.background = originalBackground;
        
        this.finalComposer.render();
    }

    dispose(): void {
        this.renderer.dispose();
        this.bloomComposer.dispose();
        this.finalComposer.dispose();
        
        this.renderer = undefined as any;
        this.bloomComposer = undefined as any;
        this.finalComposer = undefined as any;
    }
}
