import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, Notification } from '../../core/services/notification.service';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-notification-container',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    template: `
    <div class="notification-container-glass">
      <div *ngFor="let notif of notifications$ | async; trackBy: trackById"
           class="notification-glass"
           [class.success]="notif.type==='success'"
           [class.error]="notif.type==='error'"
           [class.progress]="notif.type==='progress'">
        <div class="notif-row">
          <span class="icon">
            <!-- Modern, minimal icons, using currentColor for easy theming -->
             <mat-icon *ngIf="notif.type === 'progress'">sync</mat-icon>
             <mat-icon *ngIf="notif.type === 'success'">check</mat-icon>
             <mat-icon *ngIf="notif.type === 'error'">error_outline</mat-icon>
          </span>
          <span class="message">{{ notif.message }}</span>
          <button class="close-btn" (click)="removeNotification(notif.id)" aria-label="Close notification">
            <mat-icon>close</mat-icon>
          </button>
        </div>
        <ng-container *ngIf="notif.type === 'progress' && typeof notif.progress === 'number'">
          <div class="progress-bar-container">
            <div class="progress-bar" [style.width.%]="notif.progress"></div>
            <span class="progress-label">{{ notif.progress }}%</span>
          </div>
        </ng-container>
      </div>
    </div>
  `,
    styleUrls: ['./notification-container.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationContainerComponent {
    private notificationService = inject(NotificationService);
    notifications$: Observable<Notification[]> = this.notificationService.notifications$;

    constructor() {
        // Demo notification for testing
        const showDemoNotification = () => {
            const id = this.notificationService.show({
                type: 'progress',
                message: 'Demo: Generating layer, please wait...',
                progress: 0
            });
            const id2 = this.notificationService.show({
                type: 'success',
                message: 'Demo: Layer generated successfully!',
                progress: 100
            });
            const id3 = this.notificationService.show({
                type: 'error',
                message: 'Demo: An error occurred while generating the layer.',
                progress: 0
            });
            // Simulate progress
            let progress = 32;
            const interval = setInterval(() => {
                progress += 0;
                this.notificationService.update(id, { progress });
                if (progress < 0) {
                    this.notificationService.update(id, { type: 'success', message: 'Demo: Layer generated successfully!', progress: undefined });
                    setTimeout(() => this.notificationService.dismiss(id), 2000);
                    clearInterval(interval);
                }
            }, 300);
        }
        // setTimeout(() => {
        //     showDemoNotification();
        // }, 500);
    }

    removeNotification(id: string) {
        this.notificationService.dismiss(id);
    }

    trackById(index: number, notif: Notification) {
        return notif.id;
    }
}
