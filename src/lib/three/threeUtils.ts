/**
 * Three.js Utilities for Rethink-3
 * Optimized implementation using Three.js version 0.175.0
 */

import * as THREE from 'three';

// GPU Compatibility and Performance Utils
export const getGPUTier = (): 'high' | 'medium' | 'low' => {
  // Skip detection during SSR
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return 'medium'; // Default for SSR
  }
  
  // Detect GPU capabilities
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') as WebGLRenderingContext | null || 
             canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
  
  if (!gl) return 'low';
  
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (!debugInfo) return 'medium';
  
  const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  
  // Check for high-end GPUs
  if (
    /NVIDIA/i.test(renderer) || 
    /AMD/i.test(renderer) || 
    /Intel Iris/i.test(renderer) ||
    /Apple M1/i.test(renderer) ||
    /Apple M2/i.test(renderer)
  ) {
    return 'high';
  }
  
  // Check for medium-tier GPUs
  if (/Intel/i.test(renderer)) {
    return 'medium';
  }
  
  return 'low';
};

// Optimized material creation based on GPU capabilities
export const createOptimizedMaterial = (
  options: {
    color?: string | THREE.Color;
    emissive?: string | THREE.Color;
    metalness?: number;
    roughness?: number;
    transparent?: boolean;
    opacity?: number;
    blending?: THREE.Blending;
  } = {}
): THREE.Material => {
  const gpuTier = getGPUTier();
  
  // For low-end devices, use basic materials
  if (gpuTier === 'low') {
    return new THREE.MeshBasicMaterial({
      color: options.color || 0xffffff,
      transparent: options.transparent || false,
      opacity: options.opacity || 1.0,
      blending: options.blending || THREE.NormalBlending,
    });
  }
  
  // For medium and high-end devices, use better materials
  return new THREE.MeshStandardMaterial({
    color: options.color || 0xffffff,
    emissive: options.emissive || 0x000000,
    metalness: options.metalness !== undefined ? options.metalness : 0.1,
    roughness: options.roughness !== undefined ? options.roughness : 0.5,
    transparent: options.transparent || false,
    opacity: options.opacity || 1.0,
    blending: options.blending || THREE.NormalBlending,
  });
};

// Optimized geometry creation
export const createOptimizedGeometry = (
  type: 'sphere' | 'box' | 'cylinder',
  options: any = {}
): THREE.BufferGeometry => {
  const gpuTier = getGPUTier();
  
  // Simplify geometry for low-end devices
  const detailLevel = gpuTier === 'high' ? 'high' : (gpuTier === 'medium' ? 'medium' : 'low');
  
  const detail = {
    sphere: {
      high: [32, 24],
      medium: [16, 12],
      low: [8, 6]
    },
    box: {
      high: [1, 1, 1],
      medium: [1, 1, 1],
      low: [1, 1, 1]
    },
    cylinder: {
      high: [32, 1, 16],
      medium: [16, 1, 8],
      low: [8, 1, 4]
    }
  };
  
  switch (type) {
    case 'sphere':
      return new THREE.SphereGeometry(
        options.radius || 1,
        detail.sphere[detailLevel][0],
        detail.sphere[detailLevel][1]
      );
    case 'box':
      return new THREE.BoxGeometry(
        options.width || 1,
        options.height || 1,
        options.depth || 1,
        detail.box[detailLevel][0],
        detail.box[detailLevel][1],
        detail.box[detailLevel][2]
      );
    case 'cylinder':
      return new THREE.CylinderGeometry(
        options.radiusTop || 1,
        options.radiusBottom || 1,
        options.height || 1,
        detail.cylinder[detailLevel][0],
        detail.cylinder[detailLevel][1],
        options.openEnded || false,
        options.thetaStart || 0,
        options.thetaLength || Math.PI * 2
      );
    default:
      return new THREE.SphereGeometry(1, 8, 6);
  }
};

// Optimized lighting setup
export const createOptimizedLighting = (scene: THREE.Scene, intensity: number = 1.0) => {
  const gpuTier = getGPUTier();
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, intensity * 0.5);
  scene.add(ambientLight);
  
  // Add directional light with shadows for medium and high tier
  if (gpuTier !== 'low') {
    const directionalLight = new THREE.DirectionalLight(0xffffff, intensity);
    directionalLight.position.set(5, 5, 5);
    
    if (gpuTier === 'high') {
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
    }
    
    scene.add(directionalLight);
    
    // Add fill light from opposite direction
    const fillLight = new THREE.DirectionalLight(0xffffff, intensity * 0.5);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);
  }
};

// Optimized effect composer setup
export const setupEffectComposer = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  effects: {
    bloom?: {
      strength?: number;
      radius?: number;
      threshold?: number;
    }
  } = {}
) => {
  const gpuTier = getGPUTier();
  
  // Import necessary modules dynamically to avoid tree-shaking issues
  return import('three/examples/jsm/postprocessing/EffectComposer.js').then(({ EffectComposer }) => {
    return import('three/examples/jsm/postprocessing/RenderPass.js').then(({ RenderPass }) => {
      const composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);
      
      // Add bloom effect if requested and GPU can handle it
      if (effects.bloom && gpuTier !== 'low') {
        return import('three/examples/jsm/postprocessing/UnrealBloomPass.js').then(({ UnrealBloomPass }) => {
          const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            effects.bloom?.strength || 1.5,
            effects.bloom?.radius || 0.4,
            effects.bloom?.threshold || 0.85
          );
          composer.addPass(bloomPass);
          return composer;
        });
      }
      
      return composer;
    });
  });
};

// Helper for responsive design
export const getResponsiveSize = (
  baseSize: number, 
  minSize: number, 
  maxSize: number
): number => {
  const width = window.innerWidth;
  const size = baseSize * (width / 1920); // Scale based on 1920px as reference
  return Math.max(minSize, Math.min(maxSize, size));
};

// Performance monitoring
export class PerformanceMonitor {
  private frameTimes: number[] = [];
  private framerate: number = 60;
  private lastTime: number = 0;
  private enabled: boolean = false;
  
  constructor(public maxSamples: number = 60) {}
  
  start(): void {
    this.enabled = true;
    this.lastTime = performance.now();
  }
  
  update(): void {
    if (!this.enabled) return;
    
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;
    
    this.frameTimes.push(deltaTime);
    
    if (this.frameTimes.length > this.maxSamples) {
      this.frameTimes.shift();
    }
    
    // Calculate average framerate
    const averageFrameTime = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    this.framerate = 1000 / averageFrameTime;
  }
  
  getFramerate(): number {
    return Math.round(this.framerate);
  }
  
  isLowPerformance(): boolean {
    return this.framerate < 40; // Below 40fps is considered low performance
  }
  
  stop(): void {
    this.enabled = false;
  }
}
