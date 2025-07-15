import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ElementRef, ViewChild, inject, NgZone } from '@angular/core';
import { GaiaService } from '../../core/gaia/gaia.service';

@Component({
    selector: 'app-viewport',
    standalone: true,
    imports: [],
    templateUrl: './viewport.component.html',
    styleUrls: ['./viewport.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ViewportComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private gaiaService = inject(GaiaService);
    private animationId: number = 0;

    constructor(private ngZone: NgZone) {
    }

    ngAfterViewInit(): void {
        this.gaiaService.init(this.canvasRef.nativeElement, window.innerWidth, window.innerHeight);

        window.addEventListener('resize', () => {
            this.gaiaService.onResize(window.innerWidth, window.innerHeight);
        });

        const render = () => {
            this.gaiaService.update();
            this.animationId = requestAnimationFrame(render);
        };

        this.ngZone.runOutsideAngular(() => {
            render();
        });
    }

    ngOnDestroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        this.gaiaService.dispose();
    }

}