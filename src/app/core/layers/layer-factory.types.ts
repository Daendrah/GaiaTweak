export interface LayerConfigParam {
  key: string;
  label: string;
  type: 'slider' | 'number' | 'color' | 'checkbox' | 'text';
  value: any;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: any }[];
  section?: string;
  disabled?: boolean;
  tooltip?: string;
}

// Contract for a procedural layer factory
export interface LayerFactory {
    getPipeline(params: LayerConfigParam[], world: any): { steps: any[] };
    reset(world: any): void;
    isActive(world: any): boolean;
}

import { InjectionToken } from '@angular/core';

export interface LayerFactoryProvider {
  key: string;
  factory: LayerFactory;
  params: any;
  icon: any;
}

export const LAYER_FACTORY = new InjectionToken<LayerFactoryProvider[]>('LAYER_FACTORY');
