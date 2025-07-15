
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy, inject } from '@angular/core';
import { GaiaService } from '../../core/gaia/gaia.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-fps-indicator',
    standalone: true,
    template: `
    <div class="fps-indicator" title="Current framerate" aria-label="Framerate">
      <span class="fps-label">FPS:</span>
      <span class="fps-value">{{ framerate }}</span>
    </div>
  `,
    styleUrls: ['./fps-indicator.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FpsIndicatorComponent implements OnInit, OnDestroy {
    private gaiaService = inject(GaiaService);
    private sub = Subscription.EMPTY;
    framerate = 0;
    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.sub = this.gaiaService.getFramerate().subscribe(fps => {
            this.framerate = fps;
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
