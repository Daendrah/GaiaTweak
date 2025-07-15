import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-nav-bar-options',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    template: `
    <button mat-icon-button class="option-btn" aria-label="Options">
      <mat-icon>settings</mat-icon>
    </button>
  `,
    styleUrls: ['./nav-bar-options.component.css']
})
export class NavBarOptionsComponent { }
