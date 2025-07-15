import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type NotificationType = 'success' | 'error' | 'progress';

export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    progress?: number;
    timeout?: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private notificationsSubject = new BehaviorSubject<Notification[]>([]);
    notifications$: Observable<Notification[]> = this.notificationsSubject.asObservable();

    private notifications: Notification[] = [];

    show(notification: Omit<Notification, 'id'>): string {
        const id = Math.random().toString(36).slice(2, 10);
        const notif: Notification = { id, ...notification };
        this.notifications.push(notif);
        this.notificationsSubject.next([...this.notifications]);
        if (notif.timeout && notif.type !== 'progress') {
            setTimeout(() => this.dismiss(id), notif.timeout);
        }
        return id;
    }

    update(id: string, patch: Partial<Notification>) {
        const idx = this.notifications.findIndex(n => n.id === id);
        if (idx !== -1) {
            this.notifications[idx] = { ...this.notifications[idx], ...patch };
            this.notificationsSubject.next([...this.notifications]);
        }
    }

    dismiss(id: string) {
        this.notifications = this.notifications.filter(n => n.id !== id);
        this.notificationsSubject.next([...this.notifications]);
    }

    clear() {
        this.notifications = [];
        this.notificationsSubject.next([]);
    }
}
