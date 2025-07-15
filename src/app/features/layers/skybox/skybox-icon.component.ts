import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-skybox-icon',
    standalone: true,
    host: { 'style': 'display: contents;' },
    imports: [MatIconModule],
    template: `<mat-icon>view_in_ar</mat-icon>`
})
export class SkyboxIconComponent { }
