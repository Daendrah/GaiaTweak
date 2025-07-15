export const BLOOM_COMPOSITE_VERTEX_SHADER = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const BLOOM_COMPOSITE_FRAGMENT_SHADER = `
varying vec2 v_uv;

uniform sampler2D u_baseTexture;
uniform sampler2D u_bloomTexture;

void main() {
  vec4 baseColor = texture2D(u_baseTexture, v_uv);
  vec4 bloomColor = texture2D(u_bloomTexture, v_uv);
  gl_FragColor = baseColor + bloomColor;
}
`;
