import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SkyboxService } from '../../services/skybox.service';
import { LightingService } from '../../services/lighting.service';
import { SidebarSection } from '../sidebar/sidebar.component'; // Import type for type safety

@Component({
  selector: 'app-world-view',
  standalone: true,
  imports: [],
  templateUrl: './world-view.component.html',
  styleUrls: ['./world-view.component.css']
})
export class WorldViewComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private animationId!: number;

  // Add this property to store the latest skybox parameters
  private latestSkyboxParams: any = null;

  constructor(
    private skyboxService: SkyboxService,
    private lightingService: LightingService
  ) {}

  ngOnInit(): void {
    this.initThreeJS();
    this.createBasicScene();

    window.addEventListener('generate-skybox', (event: any) => {
      this.latestSkyboxParams = event.detail;
      this.generateSkybox(this.latestSkyboxParams);
    });

    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.controls?.dispose();
    this.skyboxService.dispose();
    this.lightingService.dispose();
    this.renderer?.dispose();
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  private initThreeJS(): void {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    this.camera.position.set(15, 15, 15);

    // Renderer with proper shadow configuration
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    
    // Prevent skybox from interfering with shadows
    this.renderer.shadowMap.autoUpdate = true;

    // Orbit Controls
    this.controls = new OrbitControls(this.camera, this.canvasRef.nativeElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 500;  // Increased for space environment
    this.controls.maxPolarAngle = Math.PI / 2;

    // Handle resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private createBasicScene(): void {
    this.lightingService.createSunLighting(this.scene);

    // Ground plane with grid
    const gridHelper = new THREE.GridHelper(30, 30, 0x238636, 0x21262d);
    this.scene.add(gridHelper);

    // Sample terrain
    const geometry = new THREE.PlaneGeometry(30, 30, 32, 32);
    const material = new THREE.MeshLambertMaterial({ 
      color: 0x6fa8dc, // lighter blue for testing
      wireframe: false
    });
    
    // Add some noise to the plane vertices - fix bracket notation
    const vertices = geometry.attributes['position'].array as Float32Array;
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 2] = Math.random() * 2 - 1; // z coordinate
    }
    geometry.attributes['position'].needsUpdate = true;
    geometry.computeVertexNormals();

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    this.scene.add(plane);

    // Sample objects
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x238636 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(5, 1, 5);
    cube.castShadow = true;
    this.scene.add(cube);

    // Add a sphere
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x1f6feb });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(-5, 1.5, -5);
    sphere.castShadow = true;
    this.scene.add(sphere);
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    // Draw lens flare overlay in screen space
    this.lightingService.renderLensFlareOverlay(this.renderer, this.camera);
  }

  private onWindowResize(): void {
    const container = this.canvasRef.nativeElement.parentElement;
    if (container) {
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }

  private async generateSkybox(params: any): Promise<void> {
    try {
      console.time('Skybox generated successfully');
      const cubeTexture = await this.skyboxService.generateSpaceSkybox(params);
      this.scene.background = cubeTexture;
      console.timeEnd('Skybox generated successfully');
    } catch (error) {
      console.error('Failed to generate skybox:', error);
    }
  }
}