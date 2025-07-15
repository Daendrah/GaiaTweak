import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { ViewportComponent } from './features/viewport/viewport.component';
import { NotificationContainerComponent } from './features/notification/notification-container.component';
import { LayerConfigPanelComponent } from './features/main-panel/layer-config-panel.component';
import { LayerManagerService } from './core/layers/layer-manager.service';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule, ViewportComponent, NotificationContainerComponent, LayerConfigPanelComponent, NavBarComponent]
})

export class AppComponent {
    selectedLayer$: Observable<string | null>;
    constructor(layerManager: LayerManagerService) {
        this.selectedLayer$ = layerManager.selectedLayer$;
    }
}
