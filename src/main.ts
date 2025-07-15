
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SKYBOX_LAYER_PROVIDER } from './app/features/layers/skybox/skybox.provider';
import { LIGHTING_LAYER_PROVIDER } from './app/features/layers/lighting/lighting.provider';
import { TERRAIN_LAYER_PROVIDER } from './app/features/layers/terrain/terrain.provider';

bootstrapApplication(AppComponent, {
  providers: [
    SKYBOX_LAYER_PROVIDER,
    LIGHTING_LAYER_PROVIDER,
    TERRAIN_LAYER_PROVIDER
  ]
})
  .catch(err => console.error(err));
