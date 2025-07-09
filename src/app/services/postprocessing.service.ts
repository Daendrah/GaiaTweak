import { Injectable } from '@angular/core';
import * as THREE from 'three';

import { SceneService } from './scene.service';

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


export const BLOOM_LAYER_INDEX = 1;

@Injectable({ providedIn: 'root' })
export class PostprocessingService {
    private bloomComposer!: EffectComposer;
    private finalComposer!: EffectComposer;

    private bloomRenderPass!: UnrealBloomPass;
    private baseRenderPass!: RenderPass;

    private sceneService!: SceneService;

    private bloomCompositingShader = {
        uniforms: {
            u_baseTexture: { value: null as THREE.Texture | null },
            u_bloomTexture: { value: null as THREE.Texture | null }
        },
        vertexShader: `
            varying vec2 v_uv;

            void main() {
                v_uv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D u_baseTexture;
            uniform sampler2D u_bloomTexture;
            varying vec2 v_uv;

            void main() {
                vec4 baseColor = texture2D(u_baseTexture, v_uv);
                vec4 bloomColor = texture2D(u_bloomTexture, v_uv);
                gl_FragColor = baseColor + bloomColor;
            }
        `
    };

    constructor() {
    }

    init(sceneService: SceneService): void {
        this.sceneService = sceneService;

        // Setup bloom composer
        this.baseRenderPass = new RenderPass(sceneService.scene, sceneService.camera);

        this.baseRenderPass.clearColor = new THREE.Color(0, 0, 0);
        this.baseRenderPass.clearAlpha = 0;


        this.bloomRenderPass = new UnrealBloomPass(
            new THREE.Vector2(
                sceneService.renderer.domElement.width,
                sceneService.renderer.domElement.height
            ),
            1.5, 0.4, 0.85
        );

        // Configure bloom pass
        this.bloomRenderPass.threshold = 0.;
        this.bloomRenderPass.strength = 1.;
        this.bloomRenderPass.radius = 0.;
        this.bloomRenderPass.clearColor = new THREE.Color(0, 0, 0);

        // Set up bloom composer - will only render bloom objects
        this.bloomComposer = new EffectComposer(sceneService.renderer);
        this.bloomComposer.renderToScreen = false;
        this.bloomComposer.addPass(this.baseRenderPass);
        this.bloomComposer.addPass(this.bloomRenderPass);

        const shader = this.bloomCompositingShader;
        // Clone uniforms to avoid shared reference issues
        const uniforms = THREE.UniformsUtils.clone(shader.uniforms);
        uniforms['u_bloomTexture'].value = this.bloomComposer.renderTarget2.texture;

        const bloomCompositingPass = new ShaderPass(
            new THREE.ShaderMaterial({
                uniforms,
                vertexShader: shader.vertexShader,
                fragmentShader: shader.fragmentShader,
                defines: {}
            }),
            'u_baseTexture'
        );
        bloomCompositingPass.needsSwap = true;

        this.finalComposer = new EffectComposer(sceneService.renderer);
        this.finalComposer.renderToScreen = true;

        const outputPass = new OutputPass();
        this.finalComposer.addPass(this.baseRenderPass);
        this.finalComposer.addPass(bloomCompositingPass);
        this.finalComposer.addPass(outputPass);
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

    private renderComposer(composer: EffectComposer, layers: THREE.Layers): void {
        const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
        const materialsMap = new Map();

        const originalBackground = this.sceneService.scene.background;
        this.sceneService.scene.background = null;

        this.sceneService.scene.traverse(obj => this.filterObject(obj, layers, materialsMap, darkMaterial));

        this.sceneService.camera.layers = layers;

        composer.render();

        this.sceneService.camera.layers.set(0);

        this.restoreObjects(materialsMap);

        this.sceneService.scene.background = originalBackground;
    }

    update(): void {
        if (!this.sceneService) return;

        // 1. Render bloom objects only
        const bloomLayer = new THREE.Layers();
        bloomLayer.set(BLOOM_LAYER_INDEX);
        this.renderComposer(this.bloomComposer, bloomLayer);

        this.finalComposer.render();
    }

    dispose(): void {
        if (this.bloomComposer) this.bloomComposer.dispose();
        if (this.finalComposer) this.finalComposer.dispose();
        this.bloomComposer = undefined as any;
        this.finalComposer = undefined as any;
        this.baseRenderPass = undefined as any;
        this.bloomRenderPass = undefined as any;
        this.sceneService = undefined as any;
    }
}
