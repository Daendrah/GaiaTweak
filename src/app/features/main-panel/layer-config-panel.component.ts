import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerConfigParam } from './../../core/layers/layer-factory.types';
import { LayerManagerService } from '../../core/layers/layer-manager.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-layer-config-panel',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    template: `
    <ng-template #placeholder>
      <div class="placeholder"><p>Configuration UI coming soon…</p></div>
    </ng-template>
    <div class="layer-config-panel"
      role="dialog"
      aria-modal="true"
      [attr.aria-labelledby]="layerTitleId"
      *ngIf="layerConfig$ | async as config"
      tabindex="-1"
      #panelRoot
    >
      <div class="layer-config-header">
        <span class="layer-config-title" [id]="layerTitleId">{{ config.layerName ? config.layerName + ' configuration' : 'Layer configuration' }}</span>
        <button
          class="close-btn"
          type="button"
          aria-label="Close configuration panel"
          (click)="closePanel()">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <div class="layer-config-body" *ngIf="config.params && config.params.length; else placeholder">
        <ng-container *ngFor="let section of getSections(config.params); let i = index">
          <hr *ngIf="i > 0" class="config-section-separator" />
          <div class="config-section">
            <h3 *ngIf="section">{{ section }}</h3>
            <ng-container *ngFor="let param of getParamsForSection(config.params, section)">
              <ng-container [ngSwitch]="param.type">
                <!-- Slider: label/value row above, slider below -->
                <div *ngSwitchCase="'slider'" class="config-row--slider" [attr.title]="param.tooltip || null">
                  <div class="config-row-slider-header">
                    <label [attr.for]="param.key">{{ param.label }}</label>
                    <span class="config-row-value">{{ param.value }}</span>
                  </div>
                  <input type="range" [id]="param.key" [min]="param.min" [max]="param.max" [step]="param.step" [value]="param.value" [disabled]="param.disabled" (input)="onParamInput(param, $event)" />
                </div>
                <!-- Other input types: label left, value/input right -->
                <div *ngSwitchDefault class="config-row" [attr.title]="param.tooltip || null">
                  <label [attr.for]="param.key">{{ param.label }}</label>
                  <ng-container [ngSwitch]="param.type">
                    <input *ngSwitchCase="'number'" type="number" [id]="param.key" [min]="param.min" [max]="param.max" [step]="param.step" [value]="param.value" [disabled]="param.disabled" (input)="onParamInput(param, $event)" class="config-row-value" />
                    <input *ngSwitchCase="'color'" type="color" [id]="param.key" [value]="param.value" [disabled]="param.disabled" (input)="onParamInput(param, $event)" class="config-row-value" />
                    <span *ngSwitchCase="'checkbox'" class="config-row-value">
                      <label class="switch switch-label">
                        <input
                          type="checkbox"
                          [id]="param.key"
                          [checked]="param.value"
                          [disabled]="param.disabled"
                          (change)="onParamInput(param, $event)"
                          [attr.aria-checked]="param.value"
                          role="switch"
                        />
                        <span class="slider"></span>
                      </label>
                    </span>
                    <input *ngSwitchCase="'text'" type="text" [id]="param.key" [value]="param.value" [disabled]="param.disabled" (input)="onParamInput(param, $event)" class="config-row-value" />
                    <span *ngSwitchDefault class="config-row-value">{{ param.value }}</span>
                  </ng-container>
                </div>
              </ng-container>
            </ng-container>
          </div>
        </ng-container>
      </div>
      <div class="layer-config-footer">
        <button
          class="generate-btn"
          type="button"
          (click)="onGenerate()"
          aria-label="Generate with current configuration"
        >
          Generate
        </button>
      </div>
    </div>
  `,
    styleUrls: ['./layer-config-panel.component.css']
})
export class LayerConfigPanelComponent implements AfterViewInit {

    layerConfig$: Observable<{ layerName: string | null, params: LayerConfigParam[] }>;
    selectedLayerKey: string | null = null;
    @ViewChild('panelRoot') panelRoot!: ElementRef<HTMLDivElement>;
    layerTitleId = 'layer-config-title';

    constructor(private layerManager: LayerManagerService) {
        this.layerConfig$ = this.layerManager.selectedLayer$.pipe(
            map(key => {
                this.selectedLayerKey = key;
                if (!key) return { layerName: null, params: [] };
                const params = this.layerManager.getLayerConfigParams(key) ?? [];
                return {
                    layerName: key.charAt(0).toUpperCase() + key.slice(1),
                    params
                };
            })
        );
    }

    ngAfterViewInit() {
        if (this.panelRoot && this.panelRoot.nativeElement) {
            setTimeout(() => this.panelRoot.nativeElement.focus(), 0);
        }
    }

    getSections(params: LayerConfigParam[]): (string | undefined)[] {
        return Array.from(new Set(params.map(p => p.section)));
    }

    getParamsForSection(params: LayerConfigParam[], section: string | undefined): LayerConfigParam[] {
        return params.filter(p => p.section === section);
    }

    closePanel() {
        this.layerManager.setSelectedLayer(null);
    }

    onGenerate() {
        if (!this.selectedLayerKey) return;
        this.layerManager.queueLayerGeneration(this.selectedLayerKey);
    }

    onParamInput(param: LayerConfigParam, event: Event) {
        let value: any;
        console.log('Checkbox input detected', param);
        if (param.type === 'checkbox') {
            value = (event.target as HTMLInputElement).checked;
        } else {
            value = (event.target as HTMLInputElement).value;
            if (param.type === 'number' || param.type === 'slider') {
                value = value === '' ? null : Number(value);
            }
        }
        if (this.selectedLayerKey) {
            this.layerManager.updateLayerConfigParam(this.selectedLayerKey, param.key, value);
        }
    }
}