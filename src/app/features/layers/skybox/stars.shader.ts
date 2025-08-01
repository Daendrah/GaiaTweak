export const SKYBOX_STARS_FRAGMENT_SHADER = `
precision highp float;

in vec3 v_position;
in vec2 v_uv;
out vec4 outColor;

uniform bool u_stars_enabled;
uniform vec3 u_star_color_base;
uniform vec3 u_star_color_tint1;
uniform vec3 u_star_color_tint2;
uniform float u_color_threshold1;
uniform float u_color_threshold2;
uniform float u_star_brightness_max;
uniform float u_star_brightness_min;
uniform float u_star_density;
uniform float u_star_size_variation;
uniform samplerCube u_previous_cubemap;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec4 generateStars(vec2 uv) {
  float gridCount = 1.0 / (1.0 - clamp(u_star_density, 0.0, 1.0));
  vec2 grid = vec2(gridCount);
  vec2 sector = floor(uv * grid);
  vec3 starColor = vec3(0.0);
  for (int j = -1; j <= 1; ++j) {
    for (int i = -1; i <= 1; ++i) {
      vec2 neighborSector = sector + vec2(i, j);
      float starSeed = hash21(neighborSector);
      vec2 starPos = (neighborSector + vec2(
          hash21(neighborSector + 0.1),
          hash21(neighborSector + 0.2)
        )) / grid;

      float colorSeed = hash21(neighborSector + 0.3);
      vec3 starColorRamp;
      if (colorSeed < u_color_threshold1) {
        float t = colorSeed / u_color_threshold1;
        starColorRamp = mix(u_star_color_tint1, u_star_color_base, t);
      } else if (colorSeed < u_color_threshold2) {
        starColorRamp = u_star_color_base;
      } else {
        float t = (colorSeed - u_color_threshold2) / (1.0 - u_color_threshold2);
        starColorRamp = mix(u_star_color_base, u_star_color_tint2, t);
      }

      float sizeSeed = hash21(neighborSector + 0.4);
      float starSize = (sizeSeed * u_star_size_variation) / gridCount;
      float brightnessSeed = hash21(neighborSector + 0.5);
      float starBrightness = mix(u_star_brightness_min, u_star_brightness_max, brightnessSeed);
      float dist = length(uv - starPos);
      float starIntensity = smoothstep(starSize, 0.0, dist);

      starColor += starColorRamp * starIntensity * starBrightness;
    }
  }

  return vec4(starColor, length(starColor));
}

void main() {
if (!u_stars_enabled) {
    outColor = texture(u_previous_cubemap, v_position);
    return;
  }

  vec4 stars = generateStars(v_uv);
  outColor = mix(texture(u_previous_cubemap, v_position), stars, stars.a);
}
`;