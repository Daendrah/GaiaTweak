import { Injectable, Inject, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { World } from '../gaia/world/world';
import { LayerConfigParam, LayerFactory, LAYER_FACTORY, LayerFactoryProvider } from '../layers/layer-factory.types';
import { NotificationService } from '../services/notification.service';
import { PipelineJobStep } from './pipeline-job.types';

@Injectable({
    providedIn: 'root'
})
export class LayerManagerService {

    private world: World | null = null;
    private jobQueue: Array<{ name: string; job: () => Promise<void>; key: string; }> = [];
    private runningJob: string | null = null;
    private runningJobSubject = new BehaviorSubject<string | null>(null);
    private jobSignal: (() => void) | null = null;
    private factories: Map<string, LayerFactoryProvider> = new Map();
    private layerStates: { [key: string]: { active: boolean; generating: boolean; progress: number; }; } = {};
    private layerStatesSubject = new BehaviorSubject<{ [key: string]: { active: boolean; generating: boolean; progress: number; }; }>({});
    private selectedLayerSubject = new BehaviorSubject<string | null>(null);

    constructor(
        @Optional() @Inject(LAYER_FACTORY) factories?: LayerFactoryProvider[],
        private notificationService?: NotificationService
    ) {
        // Register all factories from multi-provider (handle undefined)
        for (const provider of factories ?? []) {
            this.factories.set(provider.key, provider);
            this.layerStates[provider.key] = { active: false, generating: false, progress: 0 };
        }
        this.layerStatesSubject.next({ ...this.layerStates });
        this.startWorker();
    }

    setWorld(world: World) {
        this.world = world;
    }


    getLayers(): string[] {
        return Array.from(this.factories.keys());
    }

    getFactory(key: string): { factory: LayerFactory; params: any; } | undefined {
        const entry = this.factories.get(key);
        if (!entry) return undefined;
        return { factory: entry.factory, params: entry.params };
    }

    getIcon(key: string): any | undefined {
        const entry = this.factories.get(key);
        if (!entry) return undefined;
        return entry.icon;
    }

    getLayerConfigParams(key: string): LayerConfigParam[] | undefined {
        const entry = this.factories.get(key);
        return entry?.params;
    }

    updateLayerConfigParam(key: string, paramKey: string, value: any): void {
        const entry = this.factories.get(key);
        if (!entry) return;
        // Find and update the param in entry.params
        const params: LayerConfigParam[] = entry.params;
        const param = params.find(p => p.key === paramKey);
        if (param) {
            param.value = value;
        }
        // Optionally: trigger any additional logic or emit events if needed
    }

    getRunningJob(): Observable<string | null> {
        return this.runningJobSubject.asObservable();
    }

    // Observable for all layer states (active, generating, progress)
    getLayerStates(): Observable<{ [key: string]: { active: boolean; generating: boolean; progress: number; }; }> {
        return this.layerStatesSubject.asObservable();
    }

    // Get state for a single layer
    getLayerState(key: string) {
        return this.layerStates[key] || { active: false, generating: false, progress: 0 };
    }

    /**
     * Generate all declared layers.
     */
    generateAllLayers(): void {
        for (const key of this.getLayers()) {
            this.queueLayerGeneration(key);
        }
    }

    /**
     * Reset a given layer (reset via its factory).
     */
    resetLayer(key: string): void {
        const entry = this.getFactory(key);
        if (entry && this.world) {
            entry.factory.reset(this.world);
            this["setLayerActive"]?.(key, entry.factory.isActive(this.world));
        }
    }

    /**
     * Reset all layers.
     */
    resetAllLayers(): void {
        for (const key of this.getLayers()) {
            this.resetLayer(key);
        }
    }

    queueLayerGeneration(key: string): void {
        const entry = this.getFactory(key);
        if (entry && this.world) {
            let notifId: string | null = null;
            this.jobQueue.push({
                name: `${key} generation`,
                job: async () => {
                    try {
                        if (this.notificationService) {
                            notifId = this.notificationService.show({
                                type: 'progress',
                                message: `Generating ${key.charAt(0).toUpperCase() + key.slice(1)}…`,
                                progress: 0
                            });
                        }

                        await new Promise(resolve => setTimeout(resolve, 500));

                        this.setLayerGenerating(key, true);
                        this.setLayerProgress(key, 0);
                        const pipeline = entry.factory.getPipeline(entry.params, this.world!);
                        const total = pipeline.steps.length;
                        // Shared context for all steps
                        const context: any = {};
                        for (let i = 0; i < total; i++) {
                            const step = pipeline.steps[i] as PipelineJobStep;
                            console.time(`Running step ${step.name}`);
                            await step.run(context);
                            console.timeEnd(`Running step ${step.name}`);
                            this.setLayerProgress(key, Math.round(((i + 1) / total) * 100));
                            if (this.notificationService && notifId) {
                                this.notificationService.update(notifId, { progress: Math.round(((i + 1) / total) * 100) });
                            }
                            await new Promise(resolve => setTimeout(resolve, 200));
                        }
                        this.setLayerGenerating(key, false);
                        this.setLayerActive(key, entry.factory.isActive(this.world!));
                        if (this.notificationService && notifId) {
                            this.notificationService.update(notifId, { type: 'success', message: `${key.charAt(0).toUpperCase() + key.slice(1)} generated successfully!`, progress: undefined });
                            setTimeout(() => this.notificationService?.dismiss(notifId!), 3000);
                        }
                    } catch (err) {
                        this.setLayerGenerating(key, false);
                        if (this.notificationService) {
                            if (notifId) {
                                this.notificationService.update(notifId, {
                                    type: 'error',
                                    message: `${key.charAt(0).toUpperCase() + key.slice(1)}: generation error`,
                                    progress: undefined
                                });
                                setTimeout(() => this.notificationService?.dismiss(notifId!), 4000);
                            } else {
                                this.notificationService.show({
                                    type: 'error',
                                    message: `${key.charAt(0).toUpperCase() + key.slice(1)}: generation error`,
                                    timeout: 4000
                                });
                            }
                        }
                        // Optionally log error
                        console.error(`Error running job ${key} generation:`, err);
                    }
                },
                key
            });
            if (this.jobSignal) this.jobSignal();
        }
    }

    private async startWorker() {
        while (true) {
            if (this.jobQueue.length === 0) {
                await new Promise<void>(resolve => this.jobSignal = resolve);
                this.jobSignal = null;
            }
            const job = this.jobQueue.shift();
            if (!job) continue;
            this.runningJob = job.name;
            this.runningJobSubject.next(this.runningJob);
            await new Promise(resolve => setTimeout(resolve));
            await job.job();
            this.runningJob = null;
            this.runningJobSubject.next(this.runningJob);
        }
    }

    // --- State helpers ---
    private setLayerActive(key: string, active: boolean) {
        this.layerStates[key] = { ...this.layerStates[key], active };
        this.layerStatesSubject.next({ ...this.layerStates });
    }
    private setLayerGenerating(key: string, generating: boolean) {
        this.layerStates[key] = { ...this.layerStates[key], generating };
        this.layerStatesSubject.next({ ...this.layerStates });
    }
    private setLayerProgress(key: string, progress: number) {
        this.layerStates[key] = { ...this.layerStates[key], progress };
        this.layerStatesSubject.next({ ...this.layerStates });
    }

    selectedLayer$ = this.selectedLayerSubject.asObservable();

    setSelectedLayer(key: string | null) {
        this.selectedLayerSubject.next(key);
    }
}