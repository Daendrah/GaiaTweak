import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class LightingService {
  private sunLight!: THREE.DirectionalLight;
  private sunMesh!: THREE.Mesh; // Use a mesh for the sun

  createSunLighting(scene: THREE.Scene): void {
    this.createSunLight(scene);
    this.createVisualSun(scene);
  }

  private createSunLight(scene: THREE.Scene): void {
    // Main sun light, still directional but slightly less intense for balance
    this.sunLight = new THREE.DirectionalLight(0xffffff, 0.9);
    this.sunLight.position.set(100, 80, 50);
    this.sunLight.castShadow = true;
    
    // Optimized shadow settings to avoid skybox interference
    // this.sunLight.shadow.mapSize.width = 2048;
    // this.sunLight.shadow.mapSize.height = 2048;
    // this.sunLight.shadow.camera.near = 1;
    // this.sunLight.shadow.camera.far = 200;
    // this.sunLight.shadow.camera.left = -50;
    // this.sunLight.shadow.camera.right = 50;
    // this.sunLight.shadow.camera.top = 50;
    // this.sunLight.shadow.camera.bottom = -50;
    // this.sunLight.shadow.bias = -0.0005;
    
    scene.add(this.sunLight);
  }

  private createVisualSun(scene: THREE.Scene): void {
    // Remove old sun if exists
    if (this.sunMesh) {
      scene.remove(this.sunMesh);
      this.sunMesh.geometry.dispose();
      (this.sunMesh.material as THREE.Material).dispose();
    }

    // Create a canvas texture with gradient and rays
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    // Draw radial gradient (white center to orange edge)
    const grad = ctx.createRadialGradient(size/2, size/2, size*0.05, size/2, size/2, size/2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.25, 'rgba(255,240,180,0.95)');
    grad.addColorStop(0.55, 'rgba(255,200,80,0.85)');
    grad.addColorStop(0.8, 'rgba(255,140,30,0.5)');
    grad.addColorStop(1, 'rgba(255,120,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    // Draw sun rays
    const rayCount = 18;
    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * 2 * Math.PI;
      const rayLength = size * (0.45 + 0.08 * Math.random());
      const rayWidth = size * (0.01 + 0.01 * Math.random());
      ctx.save();
      ctx.translate(size/2, size/2);
      ctx.rotate(angle);
      const gradRay = ctx.createLinearGradient(0, 0, 0, -rayLength);
      gradRay.addColorStop(0, 'rgba(255,255,180,0.18)');
      gradRay.addColorStop(0.2, 'rgba(255,200,80,0.13)');
      gradRay.addColorStop(1, 'rgba(255,120,0,0)');
      ctx.beginPath();
      ctx.moveTo(-rayWidth, 0);
      ctx.lineTo(0, -rayLength);
      ctx.lineTo(rayWidth, 0);
      ctx.closePath();
      ctx.fillStyle = gradRay;
      ctx.globalAlpha = 0.7 + 0.3 * Math.random();
      ctx.filter = 'blur(0.5px)';
      ctx.fill();
      ctx.restore();
    }
    ctx.globalAlpha = 1;
    ctx.filter = 'none';

    // Optionally, add some subtle noise for realism
    const imgData = ctx.getImageData(0, 0, size, size);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 8;
      imgData.data[i] = Math.min(255, Math.max(0, imgData.data[i] + noise));
      imgData.data[i+1] = Math.min(255, Math.max(0, imgData.data[i+1] + noise));
      imgData.data[i+2] = Math.min(255, Math.max(0, imgData.data[i+2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    // Sun as a glowing quad always facing the camera (billboard)
    const geometry = new THREE.PlaneGeometry(18, 18);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.sunMesh = new THREE.Mesh(geometry, material);
    this.sunMesh.position.copy(this.sunLight.position);
    scene.add(this.sunMesh);
  }

  /**
   * Call this from your render loop after renderer.render().
   * Draws a procedural lens flare overlay at the projected sun position,
   * inspired by the Three.js example, but without using any textures.
   */
  renderLensFlareOverlay(renderer: THREE.WebGLRenderer, camera: THREE.Camera): void {
    if (!this.sunLight) return;

    // Use a dedicated overlay canvas for 2D drawing
    let overlay = document.getElementById('lensflare-overlay') as HTMLCanvasElement | null;
    if (!overlay) {
      overlay = document.createElement('canvas');
      overlay.id = 'lensflare-overlay';
      overlay.style.position = 'absolute';
      overlay.style.pointerEvents = 'none';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.zIndex = '10';
      overlay.width = renderer.domElement.width;
      overlay.height = renderer.domElement.height;
      renderer.domElement.parentElement?.appendChild(overlay);
    }
    // Resize overlay if needed
    if (overlay.width !== renderer.domElement.width || overlay.height !== renderer.domElement.height) {
      overlay.width = renderer.domElement.width;
      overlay.height = renderer.domElement.height;
    }

    const ctx = overlay.getContext('2d');
    if (!ctx) return;

    // Project sun position to screen
    const sunScreenPos = this.sunLight.position.clone().project(camera);
    const width = overlay.width;
    const height = overlay.height;
    const x = (sunScreenPos.x * 0.5 + 0.5) * width;
    const y = (-sunScreenPos.y * 0.5 + 0.5) * height;

    // Only show lens flare if sun is in front of camera (z between -1 and 1 in NDC)
    if (sunScreenPos.z < -1 || sunScreenPos.z > 1) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Inspired by Three.js LensFlare: draw several circles ("elements") along the sun-to-center line
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    // Parameters for procedural elements (size, color, position factor)
    const elements = [
      // [sizeFactor, positionFactor, color, alpha]
      [0.18, 0.0,   '255,255,220', 0.45], // main core
      [0.10, 0.3,   '255,200,120', 0.18],
      [0.07, 0.5,   '120,180,255', 0.13],
      [0.13, 0.7,   '255,80,180',  0.10],
      [0.06, 1.0,   '255,255,255', 0.08],
      [0.09, 1.3,   '120,255,200', 0.10],
      [0.04, 1.7,   '255,255,120', 0.07],
      [0.08, 2.0,   '180,120,255', 0.09]
    ];

    const centerX = width / 2, centerY = height / 2;
    const dx = centerX - x, dy = centerY - y;
    const baseRadius = Math.max(width, height) * 0.07;

    for (const [sizeF, posF, rgb, alpha] of elements) {
      const fx = x + dx * (posF as number);
      const fy = y + dy * (posF as number);
      const r = baseRadius * (sizeF as number);
      const grad = ctx.createRadialGradient(fx, fy, 0, fx, fy, r);
      grad.addColorStop(0, `rgba(${rgb},${(alpha as number)})`);
      grad.addColorStop(0.5, `rgba(${rgb},${(alpha as number) * 0.5})`);
      grad.addColorStop(1, `rgba(${rgb},0)`);
      ctx.beginPath();
      ctx.arc(fx, fy, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // Optionally, add a faint ring around the main core
    ctx.beginPath();
    ctx.arc(x, y, baseRadius * 0.7, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(120,180,255,0.13)';
    ctx.lineWidth = baseRadius * 0.09;
    ctx.stroke();

    ctx.restore();
  }

  getSunPosition(): THREE.Vector3 {
    return this.sunLight ? this.sunLight.position.clone() : new THREE.Vector3();
  }

  updateSunPosition(position: THREE.Vector3): void {
    if (this.sunLight) this.sunLight.position.copy(position);
    if (this.sunMesh) this.sunMesh.position.copy(position);
  }

  dispose(): void {
    if (this.sunLight) this.sunLight.dispose();
    if (this.sunMesh) {
      this.sunMesh.geometry.dispose();
      (this.sunMesh.material as THREE.Material).dispose();
    }
  }
}
