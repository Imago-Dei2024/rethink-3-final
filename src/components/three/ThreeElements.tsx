/**
 * ThreeElements.tsx
 * 
 * Custom typed components for Three.js elements to fix TypeScript errors
 * These components wrap the basic Three.js primitives as React components with proper TypeScript typing
 */

import React, { forwardRef } from 'react';
// Use 'any' type instead of importing Object3D to avoid namespace errors
// This is a workaround for the missing type declarations for three.js

// Helper types
interface ThreeElementProps {
  [key: string]: any;
  children?: React.ReactNode;
}

// Define the primitive component creator helper function
// This is a TypeScript workaround to handle the Three.js JSX elements
const createPrimitive = <P extends ThreeElementProps>(type: string): React.FC<P> => {
  return (props) => {
    // Using the 'as any' type assertion is necessary here to bypass
    // TypeScript's JSX element validation, which doesn't recognize Three.js elements
    const element = React.createElement(type as any, props);
    return element;
  };
};

// Create forwardRef version for elements that need refs
const createForwardRefPrimitive = <P extends ThreeElementProps>(type: string) => {
  const Component = forwardRef<any, P>((props, ref) => {
    // Same workaround using type assertion
    const element = React.createElement(type as any, { ...props, ref });
    return element;
  });
  
  Component.displayName = `ThreeElement(${type})`;
  return Component;
};

// Create typed versions of the Three.js elements using our helper functions
export const Group = createForwardRefPrimitive<ThreeElementProps>('group');
export const Mesh = createForwardRefPrimitive<ThreeElementProps>('mesh');
export const LineSegments = createForwardRefPrimitive<ThreeElementProps>('lineSegments');
export const InstancedMesh = createForwardRefPrimitive<ThreeElementProps>('instancedMesh');

export const PlaneGeometry = createPrimitive<ThreeElementProps>('planeGeometry');
export const BoxGeometry = createPrimitive<ThreeElementProps>('boxGeometry');
export const SphereGeometry = createPrimitive<ThreeElementProps>('sphereGeometry');
export const CylinderGeometry = createPrimitive<ThreeElementProps>('cylinderGeometry');
export const BufferGeometry = createPrimitive<ThreeElementProps>('bufferGeometry');

export const MeshBasicMaterial = createPrimitive<ThreeElementProps>('meshBasicMaterial');
export const MeshStandardMaterial = createPrimitive<ThreeElementProps>('meshStandardMaterial');
export const MeshPhongMaterial = createPrimitive<ThreeElementProps>('meshPhongMaterial');
export const MeshNormalMaterial = createPrimitive<ThreeElementProps>('meshNormalMaterial');
export const LineBasicMaterial = createPrimitive<ThreeElementProps>('lineBasicMaterial');

export const PointLight = createPrimitive<ThreeElementProps>('pointLight');
export const DirectionalLight = createPrimitive<ThreeElementProps>('directionalLight');
export const AmbientLight = createPrimitive<ThreeElementProps>('ambientLight');
export const SpotLight = createPrimitive<ThreeElementProps>('spotLight');

export const PerspectiveCamera = createForwardRefPrimitive<ThreeElementProps>('perspectiveCamera');
export const OrthographicCamera = createForwardRefPrimitive<ThreeElementProps>('orthographicCamera');

// Primitives
export const Primitive = createPrimitive<ThreeElementProps>('primitive');

// Add more elements as needed
