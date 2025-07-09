import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyboxParams } from '../../services/skybox.service';
import { LightingParams } from '../../services/lighting.service';


export interface SidebarSection {
    key: string;
    label: string;
    icon: string;
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

    skyboxParams: SkyboxParams = {
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

    lightingParams: LightingParams = {
        sunSize: 7,
        sunAngle: 50,
        sunDistance: 100,
        sunLightColor: { r: 255, g: 255, b: 220 },
        sunOuterColor: { r: 255, g: 188, b: 5 },
        sunInnerColor: { r: 255, g: 136, b: 0 },
        sunEdgePower: 1.0
    };

    sections: SidebarSection[] = [
        {
            key: 'skybox',
            label: 'Skybox',
            icon: 'skybox'
        },
        {
            key: 'lighting',
            label: 'Lighting',
            icon: 'lighting'
        }
    ];

    selectedSection: SidebarSection | null = null;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        window.dispatchEvent(new CustomEvent('generate-skybox', {
            detail: { ...this.skyboxParams }
        }));
        window.dispatchEvent(new CustomEvent('generate-lighting', {
            detail: { ...this.lightingParams }
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

    // Converts "#RRGGBB" to {r,g,b}
    hexToRgb(hex: string): { r: number, g: number, b: number; } {
        hex = hex.replace(/^#/, '');
        if (hex.length !== 6) return { r: 0, g: 0, b: 0 };
        return {
            r: parseInt(hex.substring(0, 2), 16),
            g: parseInt(hex.substring(2, 4), 16),
            b: parseInt(hex.substring(4, 6), 16)
        };
    }

    // Converts {r,g,b} to "#RRGGBB"
    rgbToHex(color?: { r: number, g: number, b: number; }): string {
        if (!color) return '#000000';
        const toHex = (v: number) => v.toString(16).padStart(2, '0');
        return (
            '#' +
            toHex(Math.max(0, Math.min(255, color.r))) +
            toHex(Math.max(0, Math.min(255, color.g))) +
            toHex(Math.max(0, Math.min(255, color.b)))
        );
    }

    onSkyboxParamChange(path: string, event: Event, isColorPicker = false, isTextureSizeSlider = false): void {
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

    onLightingParamChange(path: string, event: Event, isColorPicker = false): void {
        const keys = path.split('.');
        let obj: any = this.lightingParams;
        for (let i = 0; i < keys.length - 1; i++) {
            obj = obj[keys[i]];
        }
        const lastKey = keys[keys.length - 1];
        let value: any;
        const input = event.target as HTMLInputElement;

        if (isColorPicker) {
            value = this.hexToRgb(input.value);
            obj[lastKey] = value;
        } else {
            value = input.value;
            if (typeof obj[lastKey] === 'number') {
                obj[lastKey] = parseFloat(value);
            } else {
                obj[lastKey] = value;
            }
        }
    }

    generateSection(section: SidebarSection): void {
        if (section.key === 'skybox') {
            window.dispatchEvent(new CustomEvent('generate-skybox', {
                detail: { ...this.skyboxParams }
            }));
        } else if (section.key === 'lighting') {
            window.dispatchEvent(new CustomEvent('generate-lighting', {
                detail: { ...this.lightingParams }
            }));
        }
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