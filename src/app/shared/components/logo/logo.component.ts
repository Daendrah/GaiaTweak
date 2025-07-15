import { Component } from '@angular/core';

@Component({
    selector: 'app-logo',
    standalone: true,
    template: `
    <svg [attr.width]="null" [attr.height]="null" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="gaia-logo-svg" style="width: var(--btn-size); height: var(--btn-size);">
      <!-- Minimalist sun -->
      <circle cx="22" cy="10" r="2.2" fill="var(--color-text-main)" />
      <!-- Larger mountain -->
      <path d="M6 23 L13 13 L20 23" stroke="var(--color-text-main)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Smaller mountain -->
      <path d="M15 23 L17.5 18 L19 20.5 L21 17 L25 23" stroke="var(--color-text-main)" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
    styles: [
        `:host { display: flex; align-items: center; justify-content: center; }
     .gaia-logo-svg { width: var(--btn-size); height: var(--btn-size); display: block; }
     .gaia-logo-svg circle, .gaia-logo-svg path, .gaia-logo-svg ellipse, .gaia-logo-svg text {
       transition: fill 0.18s, stroke 0.18s;
     }
    `
    ]
})
export class AppLogoComponent { }
