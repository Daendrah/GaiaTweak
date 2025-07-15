import { SkyboxFactory } from './skybox.factory';
import { SkyboxIconComponent } from './skybox-icon.component';
import { LayerConfigParam, LAYER_FACTORY, LayerFactoryProvider } from '../../../core/layers/layer-factory.types';
import { Provider } from '@angular/core';

export const skyboxParams: LayerConfigParam[] = [
  { key: 'textureSize', label: 'Texture Size', type: 'number', value: 1024, min: 64, max: 2048, step: 1, section: 'General', tooltip: 'Resolution of the skybox faces.' },
  { key: 'seed', label: 'Seed', type: 'number', value: 42928, min: 0, max: 99999, step: 1, section: 'General', tooltip: 'Random seed for procedural generation.' },
  { key: 'background.enabled', label: 'Background Enabled', type: 'checkbox', value: true, section: 'Background', tooltip: 'Enable background noise.' },
  { key: 'baseColor', label: 'Base Color', type: 'color', value: '#001336', section: 'Background', tooltip: 'Base color of the sky.' },
  { key: 'background.backgroundNoise.color', label: 'Background Noise Color', type: 'color', value: '#002343', section: 'Background', tooltip: 'Color of the background noise.' },
  { key: 'background.backgroundNoise.scale', label: 'Background Noise Scale', type: 'slider', value: 4.0, min: 0.1, max: 10, step: 0.1, section: 'Background', tooltip: 'Scale of the background noise.' },
  { key: 'background.backgroundNoise.octaves', label: 'Background Noise Octaves', type: 'number', value: 6, min: 1, max: 10, step: 1, section: 'Background', tooltip: 'Octaves for background noise.' },
  { key: 'stars.enabled', label: 'Stars Enabled', type: 'checkbox', value: true, section: 'Stars', tooltip: 'Enable stars.' },
  { key: 'stars.density', label: 'Star Density', type: 'slider', value: 0.02, min: 0, max: 0.1, step: 0.001, section: 'Stars', tooltip: 'Density of stars.' },
  { key: 'stars.minSize', label: 'Star Min Size', type: 'slider', value: 0.001, min: 0, max: 0.01, step: 0.0001, section: 'Stars', tooltip: 'Minimum star size.' },
  { key: 'stars.maxSize', label: 'Star Max Size', type: 'slider', value: 0.0025, min: 0, max: 0.01, step: 0.0001, section: 'Stars', tooltip: 'Maximum star size.' },
  { key: 'stars.brightness', label: 'Star Brightness', type: 'slider', value: 0.5, min: 0, max: 2, step: 0.01, section: 'Stars', tooltip: 'Brightness of stars.' },
  { key: 'stars.color1', label: 'Star Color 1', type: 'color', value: '#f9bc8b', section: 'Stars', tooltip: 'First star color.' },
  { key: 'stars.color2', label: 'Star Color 2', type: 'color', value: '#5cdeff', section: 'Stars', tooltip: 'Second star color.' },
  { key: 'stars.foregroundDensityMultiplier', label: 'Foreground Density Multiplier', type: 'slider', value: 3.0, min: 0, max: 10, step: 0.1, section: 'Stars', tooltip: 'Multiplier for foreground star density.' },
  { key: 'stars.foregroundSizeMultiplier', label: 'Foreground Size Multiplier', type: 'slider', value: 1.1, min: 0, max: 5, step: 0.01, section: 'Stars', tooltip: 'Multiplier for foreground star size.' },
  { key: 'stars.foregroundBrightnessMultiplier', label: 'Foreground Brightness Multiplier', type: 'slider', value: 4.0, min: 0, max: 10, step: 0.1, section: 'Stars', tooltip: 'Multiplier for foreground star brightness.' },
  { key: 'nebula.enabled', label: 'Nebula Enabled', type: 'checkbox', value: true, section: 'Nebula', tooltip: 'Enable nebula.' },
  { key: 'nebula.outerColor', label: 'Nebula Outer Color', type: 'color', value: '#002942', section: 'Nebula', tooltip: 'Outer color of the nebula.' },
  { key: 'nebula.innerColor', label: 'Nebula Inner Color', type: 'color', value: '#2ebfef', section: 'Nebula', tooltip: 'Inner color of the nebula.' },
  { key: 'nebula.coreColor', label: 'Nebula Core Color', type: 'color', value: '#ffdc82', section: 'Nebula', tooltip: 'Core color of the nebula.' },
  { key: 'nebula.noiseScale', label: 'Nebula Noise Scale', type: 'slider', value: 3.0, min: 0.1, max: 10, step: 0.1, section: 'Nebula', tooltip: 'Noise scale for nebula.' },
  { key: 'nebula.noiseOctave', label: 'Nebula Noise Octave', type: 'number', value: 6, min: 1, max: 10, step: 1, section: 'Nebula', tooltip: 'Noise octave for nebula.' },
  { key: 'nebula.lightColor', label: 'Nebula Light Color', type: 'color', value: '#ffffff', section: 'Nebula', tooltip: 'Light color for nebula.' },
  { key: 'nebula.coreRadius', label: 'Nebula Core Radius', type: 'slider', value: 0.006, min: 0, max: 0.1, step: 0.0001, section: 'Nebula', tooltip: 'Core radius of the nebula.' },
  { key: 'nebula.coreIntensity', label: 'Nebula Core Intensity', type: 'slider', value: 100.0, min: 0, max: 500, step: 1, section: 'Nebula', tooltip: 'Core intensity of the nebula.' },
  { key: 'nebula.raymarchSteps', label: 'Nebula Raymarch Steps', type: 'number', value: 5, min: 1, max: 20, step: 1, section: 'Nebula', tooltip: 'Raymarch steps for nebula.' },
  { key: 'nebula.absorption', label: 'Nebula Absorption', type: 'slider', value: 15.0, min: 0, max: 50, step: 0.1, section: 'Nebula', tooltip: 'Absorption for nebula.' },
  { key: 'nebula.scattering', label: 'Nebula Scattering', type: 'slider', value: 6.0, min: 0, max: 50, step: 0.1, section: 'Nebula', tooltip: 'Scattering for nebula.' }
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
