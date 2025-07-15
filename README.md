GaiaTweak
=========

**GaiaTweak** is a next-generation procedural world editor and generator, designed for creative professionals, technical artists, and developers who want to quickly prototype, visualize, and tweak rich 3D environments.

---

## What is GaiaTweak?

GaiaTweak provides a modern, immersive dashboard UI to generate, combine, and customize multiple environment layers (sky, lighting, terrain, and more) in real time. It is built for speed, modularity, and creative exploration.

---

## Key Features

- **Layer-based Workflow**: Each environment aspect (sky, lighting, terrain, etc.) is a modular layer you can generate, enable/disable, and configure independently.
- **Real-time 3D Viewport**: See your changes live in a performant, interactive 3D viewport.
- **Modern UI/UX**: Minimal, dark-themed dashboard inspired by the best creative tools (Dribbble, Figma, etc.).
- **Non-blocking Generation**: Generate or tweak any layer without freezing the app—workflows remain smooth and responsive.
- **One-click World Generation**: Generate all layers at once, or randomize the entire scene.
- **Presets & Save/Load**: Save your favorite setups and reload them instantly (coming soon).
---

## Layers & Parameters

GaiaTweak is built around the concept of modular, procedural layers. Each layer can be generated, enabled/disabled, and customized independently. Here’s an overview of the main layers and their parameter groups:

### Skybox Layer
Procedurally generates the background sky, including stars and nebulae.

**Parameter groups:**
- **Base Color**: Main color of the sky background
- **Background Noise**: Color, scale, octaves for subtle sky texture
- **Stars**: Enable/disable, density, min/max size, brightness, two color gradients, foreground multipliers
- **Nebula**: Enable/disable, outer/inner/core colors, noise scale/octave, light color, core radius/intensity, raymarch steps, absorption, scattering

### Lighting Layer
Controls global illumination, sun, and ambient settings for your scene.

**Parameter groups:**
- **Sun**: Direction, color, intensity
- **Ambient**: Color, intensity
- **Shadows**: Enable/disable, softness, bias

### Terrain Layer
Generates and edits procedural terrains with customizable parameters.

**Parameter groups:**
- **Heightmap**: Noise scale, octaves, seed
- **Colors**: Gradient, elevation-based coloring
- **Details**: Roughness, erosion, water level

### (Upcoming) Environment Layer
Add global fog, atmospheric effects, and weather controls.

**Parameter groups:**
- **Fog**: Color, density, start/end distance
- **Weather**: Type, intensity, animation

### (Upcoming) Clouds Layer
Procedural volumetric or billboard clouds, with density and animation controls.

**Parameter groups:**
- **Cloud Type**: Volumetric/billboard
- **Density**: Amount, scale
- **Animation**: Speed, direction

### (Upcoming) Vegetation Layer
Scatter and customize plants, trees, and ground cover procedurally.

**Parameter groups:**
- **Density**: Amount, distribution
- **Types**: Tree/plant selection
- **Variation**: Size, color, randomness

### (Upcoming) Water Layer
Add lakes, rivers, and oceans with real-time water simulation and material controls.

**Parameter groups:**
- **Type**: Lake, river, ocean
- **Color**: Shallow/deep, foam
- **Waves**: Height, speed, direction
- **Reflection/Refraction**: Intensity, blur

---

## Roadmap & Upcoming Features

- **Presets & Save/Load**: Save and reload your favorite setups
- **Extensible Plugin System**: Add your own layers or generators
- **Export**: Export generated assets for use in other engines or pipelines
- **Multi-layer Editing**: Edit and preview several layers in parallel
- **Collaboration**: Share and remix worlds with others (future)

---

## Why GaiaTweak?

- **Fast iteration**: Instantly see the impact of your tweaks
- **Creative freedom**: Mix and match layers, experiment, and discover new looks
- **Scalable**: Designed to grow with your needs—add new layers, features, or integrations
- **Open and documented**: (Coming soon) Full documentation and plugin API

---

## Screenshots & Demos

*Coming soon!*

---

## Get Involved

GaiaTweak is in active development. Feedback, feature requests, and contributions are welcome!

For technical details, contribution guidelines, and developer documentation, see the [docs/](docs/) folder (coming soon).

