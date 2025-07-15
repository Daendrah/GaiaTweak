import * as THREE from 'three';

// @ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WorldCell } from './world.types';
import { RenderingPipeline } from '../graphic/rendering-pipeline';

export class World {
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private controls!: OrbitControls;
    private renderingPipeline!: RenderingPipeline;

    private cells: WorldCell[] = [];

    create(canvas: HTMLCanvasElement, width: number, height: number): void {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
        this.camera.position.set(0, 20, 50);

        this.controls = new OrbitControls(this.camera, canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 500;
        this.controls.maxPolarAngle = Math.PI / 2;

        this.renderingPipeline = new RenderingPipeline();
        this.renderingPipeline.init(canvas, width, height, this);
    }

    onResize(width: number, height: number): void {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderingPipeline.onResize(width, height);
    }

    update(): void {
        this.controls.update();
        this.renderingPipeline.render(this);
    }

    getScene(): THREE.Scene {
        return this.scene;
    }

    getCamera(): THREE.PerspectiveCamera {
        return this.camera;
    }

    getWorldCells(): WorldCell[] {
        return this.cells;
    }

    getRenderer(): THREE.WebGLRenderer {
        return this.renderingPipeline.getRenderer();
    }

    setWorldCells(cells: WorldCell[]): void {
        this.cells = cells;
    }

    dispose(): void {
        this.controls.dispose();
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
        this.renderingPipeline.dispose();
        
        this.scene = undefined as any;
        this.camera = undefined as any;
        this.controls = undefined as any;
        this.renderingPipeline = undefined as any;
    }
}
