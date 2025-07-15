import { TerrainFactory } from './terrain.factory';
import { TerrainIconComponent } from './terrain-icon.component';
import { LayerConfigParam, LAYER_FACTORY, LayerFactoryProvider } from '../../../core/layers/layer-factory.types';
import { Provider } from '@angular/core';

export const terrainParams: LayerConfigParam[] = [
  { key: 'seed', label: 'Seed', type: 'number', value: 12345, min: 0, max: 99999, step: 1, section: 'General', tooltip: 'Random seed for terrain.' },
  { key: 'radius', label: 'Radius', type: 'slider', value: 16, min: 1, max: 256, step: 1, section: 'General', tooltip: 'Radius of the terrain.' },
  { key: 'resolution', label: 'Resolution', type: 'slider', value: 1, min: 1, max: 10, step: 1, section: 'General', tooltip: 'Resolution of the terrain.' }
];

export const TERRAIN_LAYER_PROVIDER: Provider = {
    provide: LAYER_FACTORY,
    useValue: {
        key: 'terrain',
        factory: new TerrainFactory(),
        params: terrainParams,
        icon: TerrainIconComponent
    } as LayerFactoryProvider,
    multi: true
};
