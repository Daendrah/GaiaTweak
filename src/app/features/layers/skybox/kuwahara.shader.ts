export const SKYBOX_KUWAHARA_FRAGMENT_SHADER = `
precision highp float;

in vec3 v_position;
in vec2 v_uv;
out vec4 outColor;

uniform bool u_kuwahara_enabled;
uniform float u_kernel_radius;
uniform samplerCube u_previous_cubemap;

// Generalized Kuwahara filter with configurable sector count
vec4 generateKuwahara(vec3 pos) {
    const int SECTOR_COUNT = 4; // Number of angular sectors (change as needed)
    const int KERNEL_RADIUS = 2; // Kernel radius in samples (for 5x5, use 2)
    const int KERNEL_SIZE = KERNEL_RADIUS * 2 + 1;
    float stepSize = (0.03 * 2.0) / float(KERNEL_SIZE - 1);

    // Per-sector accumulators
    vec3 sum[SECTOR_COUNT];
    vec3 sumSq[SECTOR_COUNT];
    int count[SECTOR_COUNT];
    for (int i = 0; i < SECTOR_COUNT; ++i) {
        sum[i] = vec3(0.0);
        sumSq[i] = vec3(0.0);
        count[i] = 0;
    }

    // Center of kernel for angle calculation
    vec2 center = vec2(0.0);

    for (int x = -KERNEL_RADIUS; x <= KERNEL_RADIUS; x++) {
        for (int y = -KERNEL_RADIUS; y <= KERNEL_RADIUS; y++) {
            vec2 offset = vec2(float(x), float(y)) * stepSize;
            vec3 samplePos = normalize(pos) + vec3(offset, 0.0);
            vec3 color = texture(u_previous_cubemap, samplePos).rgb;
            vec3 colorSq = color * color;

            // Compute angle and assign to sector
            float angle = atan(float(y), float(x)); // [-PI, PI]
            if (angle < 0.0) angle += 6.28318530718; // [0, 2PI]
            int sector = int(floor(angle / (6.28318530718 / float(SECTOR_COUNT))));
            sector = clamp(sector, 0, SECTOR_COUNT - 1);

            sum[sector] += color;
            sumSq[sector] += colorSq;
            count[sector] += 1;
        }
    }

    // Compute mean and variance for each sector
    vec3 mean[SECTOR_COUNT];
    float variance[SECTOR_COUNT];
    for (int i = 0; i < SECTOR_COUNT; ++i) {
        if (count[i] > 0) {
            mean[i] = sum[i] / float(count[i]);
            variance[i] = dot(sumSq[i] / float(count[i]) - mean[i] * mean[i], vec3(1.0));
        } else {
            mean[i] = vec3(0.0);
            variance[i] = 1e20; // Large value to avoid selecting empty sector
        }
    }

    // Find sector with minimum variance
    int minIdx = 0;
    float minVar = variance[0];
    for (int i = 1; i < SECTOR_COUNT; ++i) {
        if (variance[i] < minVar) {
            minVar = variance[i];
            minIdx = i;
        }
    }

    return vec4(mean[minIdx], 1.0);
}

void main() {
  if (!u_kuwahara_enabled) {
    outColor = texture(u_previous_cubemap, v_position);
    return;
  }

  outColor = generateKuwahara(v_position);
}
`;