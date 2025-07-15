import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayerManagerService } from '../../core/layers/layer-manager.service';
import { NavSection } from './nav-bar.types';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-nav-bar-layer-buttons',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="nav-bar-layer-buttons">
      <ng-container *ngFor="let section of sections">
        <button class="layer-btn" [class.active]="section.active" [class.selected]="selectedLayer === section.key" (click)="toggleLayer(section)" [attr.aria-label]="section.label">
          <span class="icon">
            <ng-container *ngIf="section.icon">
              <ng-container *ngComponentOutlet="section.icon"></ng-container>
            </ng-container>
          </span>
          <span class="label">{{ section.label }}</span>
        </button>
      </ng-container>
    </div>
  `,
    styleUrls: ['./nav-bar-layer-buttons.component.css']
})
export class NavBarLayerButtonsComponent implements OnInit, OnDestroy {
    sections: NavSection[] = [];
    selectedLayer: string | null = null;
    private sub = new Subscription();

    constructor(private layerManager: LayerManagerService) { }

    ngOnInit() {
        const keys = this.layerManager.getLayers();
        this.sections = keys.map(key => {
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            return {
                key,
                label,
                icon: this.layerManager.getIcon(key),
                active: this.layerManager.getLayerState(key).active
            };
        });
        this.sub.add(
            this.layerManager.getLayerStates().subscribe(states => {
                for (const section of this.sections) {
                    section.active = states[section.key]?.active ?? false;
                }
            })
        );
        this.sub.add(
            this.layerManager.selectedLayer$.subscribe(selected => {
                this.selectedLayer = selected;
            })
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    toggleLayer(section: NavSection) {
        if (this.selectedLayer === section.key) {
            this.layerManager.setSelectedLayer(null); // Deselect if already selected
        } else {
            this.layerManager.setSelectedLayer(section.key);
        }
    }
}
