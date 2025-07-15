import { Component } from '@angular/core';
import { AppLogoComponent } from '../../shared/components/logo/logo.component';
import { NavBarLayerButtonsComponent } from './nav-bar-layer-buttons.component';
import { NavBarActionsComponent } from './nav-bar-actions.component';
import { NavBarOptionsComponent } from './nav-bar-options.component';
import { NavBarHelpComponent } from './nav-bar-help.component';
import { FpsIndicatorComponent } from './fps-indicator.component';
import { LayerTogglePanelComponent } from './layer-toggle-panel.component';
import { LayerManagerService } from '../../core/layers/layer-manager.service';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [
        AppLogoComponent,
        NavBarLayerButtonsComponent,
        NavBarActionsComponent,
        NavBarOptionsComponent,
        NavBarHelpComponent,
        FpsIndicatorComponent,
        LayerTogglePanelComponent
    ],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    togglePanelOpen = false;

    constructor(private layerManager: LayerManagerService) {
    }

    onOptionsClick() {
        this.togglePanelOpen = !this.togglePanelOpen;
    }

    onGenerateAll() {
        this.layerManager.generateAllLayers();
    }

    onReset() {
        this.layerManager.resetAllLayers();
    }

    closeTogglePanel() {
        this.togglePanelOpen = false;
    }
}
