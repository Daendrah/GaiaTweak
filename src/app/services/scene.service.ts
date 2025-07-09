import { Injectable } from '@angular/core';
import * as THREE from 'three';

// @ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

@Injectable({ providedIn: 'root' })
export class SceneService {
    public scene!: THREE.Scene;
    public camera!: THREE.PerspectiveCamera;
    public renderer!: THREE.WebGLRenderer;
    public controls!: OrbitControls;

    init(canvas: HTMLCanvasElement, width: number, height: number): void {
        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
        this.camera.position.set(0, 20, 50);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.NoToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        this.renderer.shadowMap.autoUpdate = true;

        // Controls
        this.controls = new OrbitControls(this.camera, canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 500;
        this.controls.maxPolarAngle = Math.PI / 2;

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    update(): void {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    dispose(): void {
        this.controls.dispose();
        this.renderer.dispose();
        this.scene.traverse((obj: any) => {
            if (obj.geometry) obj.geometry.dispose?.();
            if (obj.material) {
                if (Array.isArray(obj.material)) {
                    obj.material.forEach((m: any) => m.dispose?.());
                } else {
                    obj.material.dispose?.();
                }
            }
        });

        this.scene = undefined as any;
        this.camera = undefined as any;
        this.renderer = undefined as any;
        this.controls = undefined as any;
    }
}
