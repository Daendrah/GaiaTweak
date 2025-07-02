import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WorldViewComponent } from './components/world-view/world-view.component';
import { MetricsCardComponent } from './components/metrics-card/metrics-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    WorldViewComponent,
    MetricsCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GaiaTweak';
  sidebarCollapsed = false;

  onSidebarToggle(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }
}
