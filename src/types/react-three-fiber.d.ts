/**
 * Type declarations for React Three Fiber and related packages
 * This resolves TypeScript errors with three.js components
 */

import * as React from 'react';
import * as THREE from 'three';

declare module '@react-three/fiber' {
  export interface ThreeElements {
    mesh: JSX.IntrinsicElements['mesh'];
    group: JSX.IntrinsicElements['group'];
    lineSegments: JSX.IntrinsicElements['lineSegments'];
    instancedMesh: JSX.IntrinsicElements['instancedMesh'];
    primitive: JSX.IntrinsicElements['primitive'];
    sphereGeometry: JSX.IntrinsicElements['sphereGeometry'];
    planeGeometry: JSX.IntrinsicElements['planeGeometry'];
    meshBasicMaterial: JSX.IntrinsicElements['meshBasicMaterial'];
    meshStandardMaterial: JSX.IntrinsicElements['meshStandardMaterial'];
    meshPhongMaterial: JSX.IntrinsicElements['meshPhongMaterial'];
    pointLight: JSX.IntrinsicElements['pointLight'];
    ambientLight: JSX.IntrinsicElements['ambientLight'];
    directionalLight: JSX.IntrinsicElements['directionalLight'];
    spotLight: JSX.IntrinsicElements['spotLight'];
  }
  
  // Define proper types for useFrame callback
  export type RenderCallback = (state: RenderState, delta: number) => void;
  
  export interface RenderState {
    gl: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    clock: THREE.Clock;
    pointer: THREE.Vector2;
    mouse: THREE.Vector2;
    raycaster: THREE.Raycaster;
    performance: {
      current: number;
      min: number;
      max: number;
      debounce: number;
      regress: () => void;
    };
  }
  
  export function useFrame(callback: RenderCallback, renderPriority?: number): void;
}

// Type declarations for @react-three/drei
declare module '@react-three/drei' {
  export const OrbitControls: React.FC<{
    enablePan?: boolean;
    enableZoom?: boolean;
    minDistance?: number;
    maxDistance?: number;
    dampingFactor?: number;
    rotateSpeed?: number;
    enableDamping?: boolean;
  }>;
  
  // Define a more specific type for useGLTF result
  interface GLTFResult {
    scene: THREE.Group;
    nodes: Record<string, THREE.Object3D>; // Changed to THREE.Object3D for broader compatibility
    materials: Record<string, THREE.Material>;
    animations: THREE.AnimationClip[];
    [key: string]: any; // Keep this for additional, non-standard properties if absolutely necessary
  }
  export const useGLTF: (url: string) => GLTFResult;
  
  export const PerformanceMonitor: React.FC<{
    onIncreasePerformance?: (factor: number) => void;
    onDecreasePerformance?: (factor: number) => void;
    onFallback?: (fallback: boolean) => void;
    enabled?: boolean;
    children?: React.ReactNode;
  }>;
}

// Type declarations for @react-three/postprocessing
declare module '@react-three/postprocessing' {
  export const EffectComposer: React.FC<{
    enabled?: boolean;
    children?: React.ReactNode;
  }>;
  
  export const Bloom: React.FC<{
    intensity?: number;
    luminanceThreshold?: number;
    luminanceSmoothing?: number;
    kernelSize?: number;
    mipmapBlur?: boolean;
  }>;
}
