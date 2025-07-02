import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-metrics-card',
  standalone: true,
  imports: [],
  templateUrl: './metrics-card.component.html',
  styleUrls: ['./metrics-card.component.css']
})
export class MetricsCardComponent implements OnInit, OnDestroy {
  
  fps: number = 0;
  frameCount: number = 0;
  lastTime: number = 0;
  animationFrameId: number = 0;

  ngOnInit(): void {
    this.startFPSCounter();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private startFPSCounter(): void {
    this.lastTime = performance.now();
    
    const updateFPS = () => {
      this.frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - this.lastTime >= 1000) {
        this.fps = Math.round(this.frameCount * 1000 / (currentTime - this.lastTime));
        this.frameCount = 0;
        this.lastTime = currentTime;
      }
      
      this.animationFrameId = requestAnimationFrame(updateFPS);
    };
    
    updateFPS();
  }
}