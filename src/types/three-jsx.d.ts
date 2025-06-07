/**
 * Type declarations for Three.js JSX elements
 * This resolves TypeScript errors with @react-three/fiber components
 */

import * as THREE from 'three';
import { ReactThreeFiber } from '@react-three/fiber';

// Extend JSX.IntrinsicElements with Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
      mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      lineSegments: ReactThreeFiber.Object3DNode<THREE.LineSegments, typeof THREE.LineSegments>;
      instancedMesh: ReactThreeFiber.Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>;

      // Geometries
      sphereGeometry: ReactThreeFiber.BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
      boxGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
      planeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
      cylinderGeometry: ReactThreeFiber.BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>;

      // Materials
      meshBasicMaterial: ReactThreeFiber.MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
      meshStandardMaterial: ReactThreeFiber.MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      pointsMaterial: ReactThreeFiber.MaterialNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
      lineBasicMaterial: ReactThreeFiber.MaterialNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>;

      // Lights
      ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      directionalLight: ReactThreeFiber.Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
      pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
      spotLight: ReactThreeFiber.Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;

      // Other
      primitive: ReactThreeFiber.PrimitiveProps; // Using PrimitiveProps for better typing
    }
  }
}

// Extend the PerformanceMonitor component props
declare module '@react-three/drei' {
  export interface PerformanceMonitorProps {
    children?: React.ReactNode;
    onIncreasePerformance?: (factor: number) => void;
    onDecreasePerformance?: (factor: number) => void;
    onFallback?: (fallback: boolean) => void;
    target?: number;
    trackGPU?: boolean;
    iterations?: number;
    enabled?: boolean;
  }

  export class PerformanceMonitor extends React.Component<PerformanceMonitorProps> {}
}

// Extend react-three/fiber Clock type
declare module '@react-three/fiber' {
  interface RootState {
    clock: THREE.Clock;
  }
}
