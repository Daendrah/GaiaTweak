import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerManagerService } from '../../core/layers/layer-manager.service';
import { NavSection } from './nav-bar.types';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-layer-toggle-panel',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './layer-toggle-panel.component.html',
    styleUrls: ['./layer-toggle-panel.component.css']
})
export class LayerTogglePanelComponent implements OnInit {
    @Input() open = false;
    @Output() close = new EventEmitter<void>();
    sections: NavSection[] = [];

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
        this.layerManager.getLayerStates().subscribe(states => {
            for (const section of this.sections) {
                section.active = states[section.key]?.active ?? false;
            }
        });
    }

    toggleLayer(section: NavSection) {
        if (section.active) {
            this.layerManager.resetLayer(section.key);
        } else {
            this.layerManager.queueLayerGeneration(section.key);
        }
    }
}
