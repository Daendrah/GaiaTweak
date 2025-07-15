import { LightingFactory } from './lighting.factory';
import { LightingIconComponent } from './lighting-icon.component';
import { LayerConfigParam, LAYER_FACTORY, LayerFactoryProvider } from '../../../core/layers/layer-factory.types';
import { Provider } from '@angular/core';

export const lightingParams: LayerConfigParam[] = [
  { key: 'sunSize', label: 'Sun Size', type: 'slider', value: 7, min: 0, max: 20, step: 0.1, section: 'Sun', tooltip: 'Size of the sun.' },
  { key: 'sunAngle', label: 'Sun Angle', type: 'slider', value: 50, min: 0, max: 360, step: 1, section: 'Sun', tooltip: 'Angle of the sun.' },
  { key: 'sunDistance', label: 'Sun Distance', type: 'slider', value: 100, min: 0, max: 1000, step: 1, section: 'Sun', tooltip: 'Distance of the sun.' },
  { key: 'sunLightColor', label: 'Sun Light Color', type: 'color', value: '#ffffdc', section: 'Sun', tooltip: 'Color of the sunlight.' },
  { key: 'sunOuterColor', label: 'Sun Outer Color', type: 'color', value: '#ffbc05', section: 'Sun', tooltip: 'Outer color of the sun.' },
  { key: 'sunInnerColor', label: 'Sun Inner Color', type: 'color', value: '#ff8800', section: 'Sun', tooltip: 'Inner color of the sun.' },
  { key: 'sunEdgePower', label: 'Sun Edge Power', type: 'slider', value: 1.0, min: 0, max: 10, step: 0.01, section: 'Sun', tooltip: 'Edge power of the sun.' }
];

export const LIGHTING_LAYER_PROVIDER: Provider = {
    provide: LAYER_FACTORY,
    useValue: {
        key: 'lighting',
        factory: new LightingFactory(),
        params: lightingParams,
        icon: LightingIconComponent
    } as LayerFactoryProvider,
    multi: true
};
