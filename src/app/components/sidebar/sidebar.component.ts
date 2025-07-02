import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyboxService, SkyboxGenerationParams } from '../../services/skybox.service';

interface Parameter {
  name: string;
  value: string | number;
  type: 'range' | 'select';
  min?: number;
  max?: number;
  step?: number;
  options?: (string | number)[];
}

export interface SidebarSection {
  key: string;
  label: string;
  icon: string;
  parameters: Parameter[];
  // Add an optional field for advanced config
  advancedConfig?: any;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarToggled = new EventEmitter<boolean>();

  skyboxParams: SkyboxGenerationParams = {
    textureSize: 1024,
    seed: 42928,
    baseColor: { r: 0, g: 19, b: 54 },
    background: {
      enabled: true,
      backgroundNoise: {
        color: { r: 0, g: 35, b: 67 },
        scale: 4.0,
        octaves: 6
      }
    },
    stars: {
      enabled: true,
      density: 0.02,
      minSize: 0.001,
      maxSize: 0.0025,
      brightness: 0.5,
      color1: { r: 249, g: 188, b: 139 },
      color2: { r: 92, g: 222, b: 255 },
      foregroundDensityMultiplier: 3.0,
      foregroundSizeMultiplier: 1.1,
      foregroundBrightnessMultiplier: 4.0
    },
    nebula: {
      enabled: true,
      outerColor: { r: 0, g: 41, b: 66 },
      innerColor: { r: 46, g: 191, b: 239 },
      coreColor: { r: 255, g: 220, b: 130 },
      noiseScale: 3.0,
      noiseOctave: 6,
      lightColor: { r: 255, g: 255, b: 255 },
      coreRadius: 0.006,
      coreIntensity: 100.0,
      raymarchSteps: 5,
      absorption: 15.,
      scattering: 6.
    }
  };

  sections: SidebarSection[] = [
    {
      key: 'skybox',
      label: 'Skybox',
      icon: 'skybox',
      parameters: [
        { name: 'Seed', value: 42928, type: 'range', min: 0, max: 65535, step: 1 },
        { name: 'Base Color', value: '#001336', type: 'select' },
        { name: 'Background Noise Color', value: '#002343', type: 'select' },
        { name: 'Background Noise Scale', value: 4.0, type: 'range', min: 0.1, max: 100, step: 0.1 },
        { name: 'Background Noise Octave', value: 6, type: 'range', min: 1, max: 10, step: 1 },
        { name: 'Stars Enabled', value: 1, type: 'select', options: [0, 1] },
        { name: 'Stars Density', value: 0.5, type: 'range', min: 0, max: 2, step: 0.01 },
        { name: 'Stars Min Size', value: 0.05, type: 'range', min: 0.01, max: 2, step: 0.01 },
        { name: 'Stars Max Size', value: 1.5, type: 'range', min: 0.01, max: 5, step: 0.01 },
        { name: 'Stars Brightness', value: 1.0, type: 'range', min: 0, max: 5, step: 0.01 },
        { name: 'Stars Color 1', value: '#ffffff', type: 'select' },
        { name: 'Stars Color 2', value: '#ffc8b4', type: 'select' },
        { name: 'Stars Foreground Density Multiplier', value: 1.0, type: 'range', min: 0, max: 5, step: 0.01 },
        { name: 'Stars Foreground Size Multiplier', value: 1.0, type: 'range', min: 0, max: 5, step: 0.01 },
        { name: 'Stars Foreground Brightness Multiplier', value: 1.0, type: 'range', min: 0, max: 5, step: 0.01 },
        { name: 'Nebula Enabled', value: 1, type: 'select', options: [0, 1] },
        { name: 'Nebula Outer Color', value: '#1e465a', type: 'select' },
        { name: 'Nebula Mid Color', value: '#78b464', type: 'select' },
        { name: 'Nebula Inner Color', value: '#f08c32', type: 'select' },
        { name: 'Nebula Core Color', value: '#ffdc82', type: 'select' },
        { name: 'Nebula Noise Scale', value: 1.0, type: 'range', min: 0.1, max: 10, step: 0.1 },
        { name: 'Nebula Noise Octave', value: 6, type: 'range', min: 1, max: 10, step: 1 },
        { name: 'Nebula Light Color', value: '#ffffff', type: 'select' },
        { name: 'Nebula Core Radius', value: 0.5, type: 'range', min: 0, max: 2, step: 0.01 },
        { name: 'Nebula Core Intensity', value: 1.0, type: 'range', min: 0, max: 10, step: 0.01 },
        { name: 'Nebula Raymarch Steps', value: 8, type: 'range', min: 1, max: 32, step: 1 },
        { name: 'Nebula Absorption', value: 0.6, type: 'range', min: 0, max: 2, step: 0.01 },
        { name: 'Nebula Scattering', value: 0.5, type: 'range', min: 0, max: 2, step: 0.01 }
      ]
    }
  ];

  selectedSection: SidebarSection | null = null;

  constructor(private skyboxService: SkyboxService) { }

  ngOnInit(): void {
    window.dispatchEvent(new CustomEvent('generate-skybox', {
      detail: { ...this.skyboxParams }
    }));
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new CustomEvent('generate-skybox', {
      detail: { ...this.skyboxParams }
    }));
  }

  onButtonClick(sectionKey: string): void {
    const wasSelected = this.selectedSection?.key === sectionKey;

    if (wasSelected) {
      this.selectedSection = null; // Hide panel if clicking current selected
    } else {
      this.selectedSection = this.sections.find(s => s.key === sectionKey) || null;
    }

    this.sidebarToggled.emit(this.selectedSection !== null);
  }

  hidePanel(): void {
    this.selectedSection = null;
    this.sidebarToggled.emit(false);
  }

  // Converts {r,g,b} to "#RRGGBB"
  rgbToHex(color?: { r: number, g: number, b: number }): string {
    if (!color) return '#000000';
    const toHex = (v: number) => v.toString(16).padStart(2, '0');
    return (
      '#' +
      toHex(Math.max(0, Math.min(255, color.r))) +
      toHex(Math.max(0, Math.min(255, color.g))) +
      toHex(Math.max(0, Math.min(255, color.b)))
    );
  }

  // Converts "#RRGGBB" to {r,g,b}
  hexToRgb(hex: string): { r: number, g: number, b: number } {
    hex = hex.replace(/^#/, '');
    if (hex.length !== 6) return { r: 0, g: 0, b: 0 };
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16)
    };
  }

  // Smart handler for skybox param changes
  onSkyboxParamChange(path: string, event: Event, isColorPicker = false, isTextureSizeSlider = false): void {
    // path: e.g. "textureSize", "background.enabled", "background.color.r", etc.
    const keys = path.split('.');
    let obj: any = this.skyboxParams;
    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]];
    }
    const lastKey = keys[keys.length - 1];
    let value: any;
    const input = event.target as HTMLInputElement;

    if (isTextureSizeSlider && lastKey === 'textureSize') {
      // Slider value is 0..4, map to 128, 256, 512, 1024, 2048
      const pow = 7 + Number(input.value);
      obj[lastKey] = Math.pow(2, pow);
      return;
    }

    if (isColorPicker) {
      value = this.hexToRgb(input.value);
      obj[lastKey] = value;
      return;
    }

    if (input.type === 'checkbox') {
      value = input.checked;
    } else {
      value = input.value;
    }
    if (lastKey === 'seed') {
      // Clamp to uint16
      let v = Number(value);
      v = Math.floor(v);
      if (isNaN(v) || v < 0) v = 0;
      if (v > 0xFFFF) v = 0xFFFF;
      obj[lastKey] = v;
    } else if (typeof obj[lastKey] === 'number') {
      obj[lastKey] = parseFloat(value);
    } else if (typeof obj[lastKey] === 'boolean') {
      obj[lastKey] = value === true || value === 'true' || value === 1 || value === '1';
    } else {
      obj[lastKey] = value;
    }
  }

  onParameterChange(param: Parameter, event: any): void {
    if (param.type === 'select') {
      param.value = event && event.target ? event.target.value : event;
    } else if (param.type === 'range') {
      param.value = event && event.target ? parseFloat(event.target.value) : parseFloat(event);
    }
    if (this.selectedSection?.key === 'skybox' && param.name === 'Texture Size') {
      this.skyboxParams.textureSize = Number(param.value);
    }
  }

  generateSection(section: SidebarSection): void {
    if (section.key === 'skybox') {
      window.dispatchEvent(new CustomEvent('generate-skybox', {
        detail: { ...this.skyboxParams }
      }));
    }
    console.log('Generate', section.label, section.parameters);
  }

  toggleSidebar(value?: boolean): void {
    if (value !== undefined) {
      this.sidebarToggled.emit(value);
    } else {
      this.sidebarToggled.emit(this.selectedSection !== null);
    }
  }

  log2TextureSizeMinus7(): number {
    // Returns 0 for 128, 1 for 256, ..., 4 for 2048
    return Math.log2(this.skyboxParams.textureSize || 128) - 7;
  }
}