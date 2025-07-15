export const SUN_VERTEX_SHADER = `
  varying vec3 v_normal;

  void main() {
    v_normal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const SUN_FRAGMENT_SHADER = `
  uniform vec3 u_innerColor;
  uniform vec3 u_outerColor;
  uniform float u_edgePower;
  
  varying vec3 v_normal;

  void main() {
    vec3 cameraDirection = normalize((inverse(viewMatrix) * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
    float intensity = -dot(v_normal, cameraDirection);

    // Apply edge power for soft edges
    intensity = clamp(pow(intensity, u_edgePower), 0.0, 1.0);
    vec3 color = mix(u_outerColor, u_innerColor, intensity);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;