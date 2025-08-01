import { SkyboxFactory } from './skybox.factory';
import { SkyboxIconComponent } from './skybox-icon.component';
import { LayerConfigParam, LAYER_FACTORY, LayerFactoryProvider } from '../../../core/layers/layer-factory.types';
import { Provider } from '@angular/core';

export const skyboxParams: LayerConfigParam[] = [
    // === General parameters ===
    { key: 'textureSize', label: 'Texture Size', type: 'number', value: 512, min: 64, max: 2048, step: 1, section: 'General', tooltip: 'Resolution of the skybox faces.' },
    { key: 'seed', label: 'Seed', type: 'number', value: 42928, min: 0, max: 99999, step: 1, section: 'General', tooltip: 'Random seed for procedural generation.' },
    { key: 'background.enabled', label: 'Background Enabled', type: 'checkbox', value: true, section: 'Background', tooltip: 'Enable background noise.' },
    { key: 'background.noiseIntensity', label: 'Background Noise Intensity', type: 'slider', value: 0.15, min: 0, max: 1, step: 0.01, section: 'Background', tooltip: 'Intensity of background noise.' },
    { key: 'background.deepSpaceBase', label: 'Deep Space Base', type: 'color', value: '#0d2640', section: 'Background', tooltip: 'Base color for deep space.' },
    { key: 'background.deepSpaceDark', label: 'Deep Space Dark', type: 'color', value: '#051428', section: 'Background', tooltip: 'Dark color for deep space.' },
    { key: 'background.deepSpaceMid', label: 'Deep Space Mid', type: 'color', value: '#14334d', section: 'Background', tooltip: 'Mid color for deep space.' },
    { key: 'background.deepSpaceSubtle', label: 'Deep Space Subtle', type: 'color', value: '#1e4060', section: 'Background', tooltip: 'Subtle color for deep space.' },
    // === Kuwahara filter parameters ===
    { key: 'kuwahara.enabled', label: 'Kuwahara Enabled', type: 'checkbox', value: true, section: 'Kuwahara', tooltip: 'Enable Kuwahara filter.' },
    { key: 'kuwahara.kernelRadius', label: 'Kuwahara Kernel Radius', type: 'slider', value: 0.1, min: 0, max: 1, step: 0.01, section: 'Kuwahara', tooltip: 'Physical radius for Kuwahara filter.' },
    // === Star uniforms ===
    { key: 'stars.enabled', label: 'Stars Enabled', type: 'checkbox', value: true, section: 'Stars', tooltip: 'Enable star generation.' },
    { key: 'stars.density', label: 'Star Density', type: 'slider', value: 0.95, min: 0, max: 1.0, step: 0.001, section: 'Stars', tooltip: 'Density of stars.' },
    { key: 'stars.sizeVariation', label: 'Star Size Variation', type: 'slider', value: 0.04, min: 0.01, max: 1, step: 0.01, section: 'Stars', tooltip: 'Variation in star size.' },
    { key: 'stars.colorBase', label: 'Star Color Base', type: 'color', value: '#f2f9ff', section: 'Stars', tooltip: 'Base color for stars.' },
    { key: 'stars.colorTint1', label: 'Star Color Tint 1', type: 'color', value: '#a4c4ff', section: 'Stars', tooltip: 'First tint color for stars.' },
    { key: 'stars.colorTint2', label: 'Star Color Tint 2', type: 'color', value: '#fffacc', section: 'Stars', tooltip: 'Second tint color for stars.' },
    { key: 'stars.colorThreshold1', label: 'Star Color Threshold 1', type: 'slider', value: 0.25, min: 0, max: 1, step: 0.01, section: 'Stars', tooltip: 'Threshold for first star color ramp.' },
    { key: 'stars.colorThreshold2', label: 'Star Color Threshold 2', type: 'slider', value: 0.75, min: 0, max: 1, step: 0.01, section: 'Stars', tooltip: 'Threshold for second star color ramp.' },
    { key: 'stars.brightnessMax', label: 'Star Brightness Max', type: 'slider', value: 1.2, min: 0, max: 2, step: 0.01, section: 'Stars', tooltip: 'Maximum star brightness.' },
    { key: 'stars.brightnessMin', label: 'Star Brightness Min', type: 'slider', value: 0.2, min: 0, max: 1, step: 0.01, section: 'Stars', tooltip: 'Minimum star brightness.' },
];

export const SKYBOX_LAYER_PROVIDER: Provider = {
    provide: LAYER_FACTORY,
    useValue: {
        key: 'skybox',
        factory: new SkyboxFactory(),
        params: skyboxParams,
        icon: SkyboxIconComponent
    } as LayerFactoryProvider,
    multi: true
};
