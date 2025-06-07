/**
 * Ambient type declarations for Three.js
 * This resolves TypeScript errors with Three.js imports and JSX elements
 */

// Define essential THREE types for use in the application
declare namespace THREE {
  export class WebGLRenderer {
    getContext(): any;
    info: {
      render: {
        calls: number;
        triangles: number;
        points: number;
        lines: number;
      };
      memory: {
        geometries: number;
        textures: number;
      };
      programs: number;
    };
    getParameter(param: any): any;
    getExtension(name: string): any;
  }
  
  export class Scene {}
  export class Camera {}
  export class Clock {
    getElapsedTime(): number;
  }
  export class Vector2 {}
  export class Vector3 {}
  export class Raycaster {}
  export class Material {}
  export class MeshStandardMaterial {}
  export class Object3D {}
  export class Mesh {}
  export class Group {}
  export class Points {}
  export class PointLight {}
  export class LineSegments {}
  export class ColorRepresentation {}
}

// Allow Three.js modules to be imported
declare module 'three';
declare module '@react-three/fiber' {
  export function useFrame(callback: (state: any) => void, priority?: number): void;
  export function useThree(): any;
}
declare module '@react-three/drei';
declare module '@react-three/postprocessing';

// Ensure JSX elements are properly recognized
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Basic elements
      group: any;
      mesh: any;
      scene: any;
      
      // Geometries
      planeGeometry: any;
      boxGeometry: any;
      sphereGeometry: any;
      cylinderGeometry: any;
      torusGeometry: any;
      
      // Materials
      meshBasicMaterial: any;
      meshStandardMaterial: any;
      meshPhongMaterial: any;
      meshNormalMaterial: any;
      pointsMaterial: any;
      
      // Lights
      pointLight: any;
      spotLight: any;
      directionalLight: any;
      ambientLight: any;
      hemisphereLight: any;
      
      // Cameras
      perspectiveCamera: any;
      orthographicCamera: any;
      
      // Others
      lineSegments: any;
      line: any;
      points: any;
      sprite: any;
      primitive: any;
      instancedMesh: any;
    }
  }
}
