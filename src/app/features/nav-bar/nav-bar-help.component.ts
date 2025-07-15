import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-nav-bar-help',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    template: `
    <a mat-icon-button class="help-btn" href="https://github.com/Daendrah/GaiaTweak" target="_blank" rel="noopener" aria-label="Help (GitHub)">
      <mat-icon>help_outline</mat-icon>
    </a>
  `,
    styleUrls: ['./nav-bar-help.component.css']
})
export class NavBarHelpComponent { }
