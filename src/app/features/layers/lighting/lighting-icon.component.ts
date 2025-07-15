import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-lighting-icon',
    standalone: true,
    host: { 'style': 'display: contents;' },
    imports: [MatIconModule],
    template: `<mat-icon>lightbulb</mat-icon>`
})
export class LightingIconComponent { }
