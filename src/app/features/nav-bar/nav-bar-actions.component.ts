import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-nav-bar-actions',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    template: `
    <div class="nav-bar-actions">
      <button mat-icon-button class="action-btn action-btn-generate-all" (click)="generateAll.emit()" aria-label="Generate all">
        <mat-icon>bolt</mat-icon>
        <span class="label">Generate All</span>
      </button>
      <button mat-icon-button class="action-btn action-btn-reset" (click)="reset.emit()" aria-label="Reset">
        <mat-icon>refresh</mat-icon>
        <span class="label">Reset</span>
      </button>
    </div>
  `,
    styleUrls: ['./nav-bar-actions.component.css']
})
export class NavBarActionsComponent {
    @Output() generateAll = new EventEmitter<void>();
    @Output() reset = new EventEmitter<void>();
}
