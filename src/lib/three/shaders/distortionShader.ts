/**
 * Distortion Shader for Three.js
 * Creates a fluid distortion effect for post-processing or materials
 */

import * as THREE from 'three';

export const DistortionShader = {
  uniforms: {
    "tDiffuse": { value: null },
    "time": { value: 0 },
    "amount": { value: 0.08 },
    "speed": { value: 0.5 },
    "noiseScale": { value: 5.0 }
  },
  
  vertexShader: `
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float amount;
    uniform float speed;
    uniform float noiseScale;
    
    varying vec2 vUv;
    
    //
    // Description : Array and textureless GLSL 2D simplex noise function.
    //      Author : Ian McEwan, Ashima Arts.
    //  Maintainer : stegu
    //     Lastmod : 20110822 (ijm)
    //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
    //               Distributed under the MIT License. See LICENSE file.
    //
    
    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec2 mod289(vec2 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec3 permute(vec3 x) {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                          0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                         -0.577350269189626,  // -1.0 + 2.0 * C.x
                          0.024390243902439); // 1.0 / 41.0
      
      // First corner
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v -   i + dot(i, C.xx);
      
      // Other corners
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      
      // Permutations
      i = mod289(i); // Avoid truncation effects in permutation
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
      
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m;
      m = m*m;
      
      // Gradients
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      
      // Normalise gradients implicitly by scaling m
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      
      // Compute final noise value at P
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    void main() {
      float t = time * speed;
      
      // Use noise to create distortion
      float noise = snoise(vUv * noiseScale + vec2(t * 0.1, t * 0.2)) * amount;
      
      // Apply distortion to UVs
      vec2 distortedUv = vUv + vec2(noise, noise);
      
      // Sample the texture with distorted UVs
      vec4 texel = texture2D(tDiffuse, distortedUv);
      
      // Apply subtle RGB shift for chromatic aberration
      float r = texture2D(tDiffuse, distortedUv + vec2(amount * 0.1, 0.0)).r;
      float g = texel.g;
      float b = texture2D(tDiffuse, distortedUv - vec2(amount * 0.1, 0.0)).b;
      
      gl_FragColor = vec4(r, g, b, texel.a);
    }
  `
};

// Custom shader material
export class DistortionMaterial extends THREE.ShaderMaterial {
  constructor(options: {
    amount?: number;
    speed?: number;
    noiseScale?: number;
    time?: number;
  } = {}) {
    super({
      uniforms: THREE.UniformsUtils.clone(DistortionShader.uniforms),
      vertexShader: DistortionShader.vertexShader,
      fragmentShader: DistortionShader.fragmentShader,
      transparent: true
    });
    
    // Apply custom options
    Object.keys(options).forEach(key => {
      if (this.uniforms[key]) {
        this.uniforms[key].value = options[key as keyof typeof options];
      }
    });
  }
  
  update(time: number) {
    this.uniforms.time.value = time;
  }
}
