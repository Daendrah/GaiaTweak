import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { RenderingPipeline } from './graphic/rendering-pipeline';
import { World } from './world/world';
import { LayerManagerService } from '../layers/layer-manager.service';

@Injectable({
    providedIn: 'root'
})

export class GaiaService {
    private world!: World;
    private layerManager: LayerManagerService;
    private framerateSubject = new BehaviorSubject<number>(0);

    private frameCount: number = 0;
    private captureTime: number = performance.now();

    constructor(layerManager: LayerManagerService) {
        this.layerManager = layerManager;
    }

    getFramerate(): Observable<number> {
        return this.framerateSubject.asObservable();
    }

    // Layer generation is now handled by LayerManagerService

    init(canvas: HTMLCanvasElement, width: number, height: number): void {
        this.world = new World();
        this.world.create(canvas, width, height);

        // Inform LayerManagerService of the world instance
        this.layerManager.setWorld(this.world);

        // Génération initiale de tous les layers via LayerManagerService
        for (const key of this.layerManager.getLayers()) {
            this.layerManager.queueLayerGeneration(key);
        }
    }

    onResize(width: number, height: number): void {
        this.world.onResize(width, height);
    }

    update(): void {
        this.world.update();

        this.frameCount++;
        if (this.frameCount >= 60) {
            const now = performance.now();
            this.framerateSubject.next(Math.round(1000 * this.frameCount / (now - this.captureTime)));
            this.frameCount = 0;
            this.captureTime = now;
        }
    }

    dispose(): void {
        this.world.dispose();
    }
}