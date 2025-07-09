import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

import { LightingService } from '../../services/lighting.service';
import { PostprocessingService } from '../../services/postprocessing.service';
import { SceneService } from '../../services/scene.service';
import { SkyboxService } from '../../services/skybox.service';

@Component({
    selector: 'app-world-view',
    standalone: true,
    imports: [],
    templateUrl: './world-view.component.html',
    styleUrls: ['./world-view.component.css']
})

export class WorldViewComponent implements OnInit, OnDestroy {
    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    constructor(
        private skyboxService: SkyboxService,
        private lightingService: LightingService,
        private postprocessingService: PostprocessingService,
        private sceneService: SceneService
    ) {

    }

    ngOnInit(): void {
        this.sceneService.init(
            this.canvasRef.nativeElement,
            window.innerWidth,
            window.innerHeight
        );

        this.skyboxService.init(this.sceneService);

        this.postprocessingService.init(this.sceneService);

        this.lightingService.init(this.sceneService);

        this.createBasicScene();

        this.sceneService.renderer.setAnimationLoop(() => {
            this.render();
        });
    }

    ngOnDestroy(): void {
        this.skyboxService.dispose();
        this.lightingService.dispose();
        this.sceneService.dispose();
        this.postprocessingService.dispose();
    }

    private createBasicScene(): void {
        const gridHelper = new THREE.GridHelper(30, 30, 0x238636, 0x21262d);
        this.sceneService.scene.add(gridHelper);

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
        this.sceneService.scene.add(plane);

        // Sample objects
        const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
        const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x238636 });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(5, 1, 5);
        cube.castShadow = true;
        this.sceneService.scene.add(cube);

        // Add a sphere
        const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x1f6feb });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(-5, 1.5, -5);
        sphere.castShadow = true;
        this.sceneService.scene.add(sphere);
    }

    private render(): void {
        this.sceneService.update();
        this.postprocessingService.update();
    }
}