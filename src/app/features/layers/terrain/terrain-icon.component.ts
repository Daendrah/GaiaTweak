import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-terrain-icon',
    standalone: true,
    host: { 'style': 'display: contents;' },
    imports: [MatIconModule],
    template: `<mat-icon>landscape</mat-icon>`
})
export class TerrainIconComponent { }
