// Utility functions for working with LayerConfigParam[]
import { LayerConfigParam } from '../../core/layers/layer-factory.types';

/**
 * Get the value of a parameter by key (supports dot notation for nested fields)
 */
export function getParamValue(params: LayerConfigParam[], key: string): any {
    const param = params.find(p => p.key === key);
    return param ? param.value : undefined;
}

/**
 * Set the value of a parameter by key (returns a new array)
 */
export function setParamValue(params: LayerConfigParam[], key: string, value: any): LayerConfigParam[] {
    return params.map(p => p.key === key ? { ...p, value } : p);
}
