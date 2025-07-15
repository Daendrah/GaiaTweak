export const SKYBOX_VERTEX_SHADER = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const SKYBOX_FRAGMENT_SHADER = `
uniform int u_face_index;
uniform float u_seed;

// Base color
uniform vec3 u_base_color;

// Background uniforms
uniform bool u_background_enabled;
uniform vec3 u_background_noise_color;
uniform float u_background_noise_scale;
uniform int u_background_noise_octave;

// Stars uniforms
uniform bool u_stars_enabled;
uniform float u_stars_density;
uniform float u_stars_min_size;
uniform float u_stars_max_size;
uniform float u_stars_brightness;
uniform vec3 u_stars_color_1;
uniform vec3 u_stars_color_2;
uniform float u_stars_foreground_density_multiplier;
uniform float u_stars_foreground_size_multiplier;
uniform float u_stars_foreground_brightness_multiplier;

// Nebula color uniforms
uniform bool u_nebula_enabled;
uniform vec3 u_nebula_outer_color;
uniform vec3 u_nebula_inner_color;
uniform vec3 u_nebula_core_color;
uniform float u_nebula_noise_scale;
uniform int u_nebula_noise_octave;

// Nebula lighting uniforms
uniform vec3 u_nebula_light_color;
uniform float u_nebula_core_radius;
uniform float u_nebula_core_intensity;
uniform int u_nebula_raymarch_steps;
uniform float u_nebula_absorption;
uniform float u_nebula_scattering;

varying vec2 v_uv;

// Precomputed constants
const float MIN_TRANSMITTANCE = .005;
const vec3 TRANSMITTANCE_WEIGHTS = vec3(.333);
const float GLOW_THRESHOLD = .7;

// Get cube direction from face index and UV
vec3 getCubeDirection(int faceIndex, vec2 uv) {
  vec2 coords = uv * 2. - 1.;

  if (faceIndex == 0) return normalize(vec3(1., -coords.y, -coords.x));
  if (faceIndex == 1) return normalize(vec3(-1., -coords.y, coords.x));
  if (faceIndex == 2) return normalize(vec3(coords.x, 1., coords.y));
  if (faceIndex == 3) return normalize(vec3(coords.x, -1., -coords.y));
  if (faceIndex == 4) return normalize(vec3(coords.x, -coords.y, 1.));
  if (faceIndex == 5) return normalize(vec3(-coords.x, -coords.y, -1.));

  return vec3(0., 0., 1.);
}

// Optimized seeded random
float seeded_random(vec2 seed) {
  return fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453);
}

float hash(float p) {
  p = fract(p * .011);
  p *= p + 7.5;
  p *= p + p;
  return fract(p);
}

float hash(vec3 p) {
  p = fract(p * .3183099 + .1) * 17.;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 x) {
  const vec3 step = vec3(110, 241, 171);

  vec3 i = floor(x);
  vec3 f = fract(x);

  float n = dot(i, step);
  vec3 u = f * f * (3. - 2. * f);

  return mix(
    mix(
      mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
      mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
    mix(
      mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
      mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
}

// Optimized fractal noise with early exit
float fractal_noise(const vec3 p, const float scale, const int octaves) {
  float total = 0.;
  float frequency = scale;
  float amplitude = 1.;
  float max_value = 0.;

  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;

    total += noise(p * frequency) * amplitude;
    max_value += amplitude;
    amplitude *= .5;
    frequency *= 2.;
  }

  return total / max_value;
}

// Optimized Voronoi with reduced search
vec3 voronoi_3d(vec3 position, float density) {
  vec3 cell = floor(position / density);

  float min_dist = 8.;
  vec3 star_id = vec3(0.);

  // Recherche 2x2x2 au lieu de 3x3x3 pour les petites étoiles
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      for (int z = -1; z <= 1; z++) {
        vec3 neighbor = cell + vec3(x, y, z);
        vec3 point = vec3(
          seeded_random(neighbor.xy + neighbor.z * 127.1),
          seeded_random(neighbor.xy + neighbor.z * 311.7),
          seeded_random(neighbor.xy + neighbor.z * 74.7)
        ) * density;

        vec3 diff = (neighbor * density + point) - position;
        float dist = dot(diff, diff);

        if (dist < min_dist) {
          min_dist = dist;
          star_id = neighbor;
        }
      }
    }
  }

  return vec3(sqrt(min_dist),
    hash(star_id.x + star_id.y * 127.1 + star_id.z * 311.7),
    hash(star_id.x * 74.7 + star_id.y + star_id.z * 127.1));
}

vec4 generate_background(vec3 position) {
  vec3 random_seed = vec3(seeded_random(vec2(u_seed * 0.2)), seeded_random(vec2(u_seed * 0.3)), 0.0);
  float density = fractal_noise(position + random_seed, u_background_noise_scale, u_background_noise_octave);
  return vec4(u_background_noise_color, density);
}

// Optimized star generation with fewer branches
vec4 generate_stars(vec3 position, float density, float min_size, float max_size, float brightness, vec3 color1, vec3 color2) {
  vec3 voronoi_data = voronoi_3d(position, density);

  float dist_to_star = voronoi_data.x;
  float star_random1 = voronoi_data.y;
  float star_random2 = voronoi_data.z;

  // Precomputations
  float star_size = mix(min_size, max_size, star_random1);
  float star_radius = star_size * .5;
  float glow_radius = star_size * 2.;
  float glow_threshold = (min_size + max_size) * GLOW_THRESHOLD;

  // Calcul d'intensité unifié avec step functions
  float core_mask = step(dist_to_star, star_radius);
  float edge_mask = step(dist_to_star, star_size) * (1. - core_mask);
  float glow_mask = step(dist_to_star, glow_radius) * step(glow_threshold, star_size) * (1. - step(dist_to_star, star_size));

  // Intensité basée sur les masques
  float edge_factor = (dist_to_star - star_radius) / star_radius;
  float glow_factor = (dist_to_star - star_size) / (glow_radius - star_size);

  float intensity = core_mask +
    edge_mask * (1. - smoothstep(0., 1., edge_factor)) +
    glow_mask * (1. - smoothstep(0., 1., glow_factor)) * .3;

  // Effets additionnels groupés
  float temperature_variation = .8 + .4 * star_random1;
  float twinkle = .9 + .1 * sin(star_random1 * 100. + position.x + position.y);

  intensity *= brightness * temperature_variation * twinkle;

  vec3 star_color = mix(color1, color2, star_random2);

  return vec4(star_color, clamp(intensity, 0., 1.));
}

// Optimized nebula density with fewer octaves
float get_nebula_density(vec3 position) {
  vec3 random_seed = vec3(seeded_random(vec2(u_seed * 0.2)), seeded_random(vec2(u_seed * 0.3)), 0.0);
  float fbm = fractal_noise(position + random_seed, u_nebula_noise_scale, u_nebula_noise_octave);
  fbm = fractal_noise(position + fbm, u_nebula_noise_scale, u_nebula_noise_octave);

  return 2. * fbm - 0.95;
}

vec4 generate_nebula(vec3 position) {
  // Precomputations
  vec3 light_dir = normalize(position);
  vec3 light_color = u_nebula_light_color;
  float core_radius = u_nebula_core_radius;
  vec3 core_color = u_nebula_core_color;
  float core_intensity = u_nebula_core_intensity;

  vec3 ray_origin = 10. * position / 16.;
  vec3 ray_direction = normalize(position - ray_origin);
  float ray_length = length(position - ray_origin);

  int steps = u_nebula_raymarch_steps;
  float inv_steps = 1. / float(steps);
  vec3 ray_step = ray_direction * (ray_length * inv_steps);
  float ray_step_length = ray_length * inv_steps;

  vec3 ray_pos = ray_origin;
  vec3 transmittance = vec3(1.);
  vec3 accumulated_light = vec3(0.);

  // Precompute phase function
  float cos_theta = dot(ray_direction, light_dir);
  float phase_fn = .5 + .5 * cos_theta;

  // Ultra-optimized raymarching
  for (int i = 0; i < 20; i++) {
    if (i >= steps) break;

    ray_pos += ray_step;

    float density = max(0., get_nebula_density(ray_pos));

    // Simplified core glow
    float dist_to_core = 1. - density;
    float core_glow = core_radius / max(dist_to_core, .001);
    core_glow = core_glow * core_intensity;

    float shadow = 1.;
    vec3 shadow_pos = ray_pos + light_dir * ray_step_length;
    for (int j = 0; j < 5; j++) {
      float shadow_density = max(0., get_nebula_density(shadow_pos));
      shadow *= exp(-shadow_density * u_nebula_absorption * ray_step_length);
      shadow_pos += light_dir * ray_step_length;
      if (shadow < .01) {
        shadow = .01;
        break;
      }
    }

    // Simplified nebula colors (removed extra noise)
    vec3 nebula_color = u_nebula_outer_color;
    nebula_color = mix(nebula_color, u_nebula_inner_color, density * 2.5);
    nebula_color = mix(nebula_color, core_color, min(1., core_glow * density));

    density *= (1. + core_glow * .5); // Réduction de l'influence du core glow

    // Simplified volume rendering
    float absorption_factor = u_nebula_absorption * ray_step_length;
    vec3 absorption = exp(-nebula_color * absorption_factor);
    vec3 scattering = nebula_color * u_nebula_scattering * ray_step_length;

    vec3 light_contribution = light_color * shadow * phase_fn + core_color * core_glow * .5;
    vec3 inscattering = scattering * light_contribution;

    accumulated_light += inscattering * transmittance;
    transmittance *= absorption;

    if (dot(transmittance, TRANSMITTANCE_WEIGHTS) < .02) {
      break;
    }
  }

  vec3 color = accumulated_light;
  float alpha = 1. - dot(transmittance, TRANSMITTANCE_WEIGHTS);
  alpha = clamp(alpha, 0., 1.);
  alpha = pow(alpha, 2.5); // Adjust alpha curve

  return vec4(color, alpha);
}

void main() {
  vec3 position = getCubeDirection(u_face_index, v_uv);
  vec3 color = vec3(0.);

  if (u_background_enabled) {
    vec4 background = generate_background(position);
    color = mix(u_base_color, background.xyz, background.w);
  }

  if (u_stars_enabled) {
    vec4 stars_background = generate_stars(position, u_stars_density, u_stars_min_size,
      u_stars_max_size, u_stars_brightness,
      u_stars_color_1, u_stars_color_2);
    color = mix(color, stars_background.xyz, stars_background.w);
  }

  if (u_nebula_enabled) {
    vec4 nebula = generate_nebula(position);
    color = mix(color, nebula.xyz, nebula.w);
  }

  if (u_stars_enabled) {
    vec4 stars_foreground = generate_stars(position,
      u_stars_density * u_stars_foreground_density_multiplier,
      u_stars_min_size * u_stars_foreground_size_multiplier,
      u_stars_max_size * u_stars_foreground_size_multiplier,
      u_stars_brightness * u_stars_foreground_brightness_multiplier,
      u_stars_color_1, u_stars_color_2);
    color = mix(color, stars_foreground.xyz, stars_foreground.w);
  }

  gl_FragColor = vec4(color, 1.);
}
`;