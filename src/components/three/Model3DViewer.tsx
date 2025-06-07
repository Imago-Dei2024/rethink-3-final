import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber'; // Removed useThree
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Define a more specific type for GLTFResult if possible, or use a general one
interface GLTFResult {
  nodes: { [name: string]: THREE.Mesh | THREE.SkinnedMesh | THREE.Group | any }; // Allow any for now, refine later
  materials: { [name: string]: THREE.Material | any }; // Allow any for now, refine later
  scene: THREE.Group;
  animations?: THREE.AnimationClip[];
}

interface ModelProps {
  modelPath?: string;
  intensity?: number;
  ambientLightIntensity?: number;
  backgroundColor?: string;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
  enablePan?: boolean;
  enableRotate?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  maxDistance?: number;
  minDistance?: number;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  style?: React.CSSProperties;
  className?: string;
  height?: string | number;
  containerClasses?: string;
}

// Helper hook to conditionally load GLTF and handle errors
function useConditionalGLTF(modelPath?: string, onError?: (error: Error) => void): GLTFResult {
  // Call useGLTF unconditionally. `useGLTF` can typically handle null/undefined paths
  // by returning a specific state or throwing an error that we can catch.
  // If `modelPath` is undefined, we intend to return an empty scene.
  const gltfResult = useGLTF(modelPath || null as any); // Pass null if modelPath is undefined; `as any` to bypass strict null checks if useGLTF doesn't explicitly allow null.

  useEffect(() => {
    // Check for errors after attempting to load, if a modelPath was provided.
    // This error checking logic might need adjustment based on how useGLTF signals errors.
    // For instance, if useGLTF throws an error, it should be caught by an ErrorBoundary or a try...catch in the component using the hook.
    // If it sets an error state internally that can be accessed, that would be different.
    // The previous ((useGLTF as any).getState?.().error) is not standard and likely incorrect.
    // For now, we'll rely on useGLTF throwing an error if it fails, which should be caught by React's error handling or an ErrorBoundary.
    // If specific error propogation is needed, it would require a different pattern.
  }, [modelPath, onError, gltfResult]); // gltfResult is added to deps if its structure indicates loading status/error

  if (!modelPath || !gltfResult || (gltfResult as any).error) { // Check if modelPath was not provided or if gltfResult indicates an error/empty state
    if ((gltfResult as any).error && onError) {
      onError(new Error('Failed to load GLTF model')); // Provide a generic error or use error from gltfResult if available
    }
    return {
      scene: new THREE.Group(),
      materials: {},
      nodes: {},
    };
  }

  return gltfResult as unknown as GLTFResult;
}


// useGLTF.preload('/models/brain.glb'); // Commented out

const Model3DViewer: React.FC<ModelProps> = ({
  modelPath,
  intensity = 1,
  ambientLightIntensity = 0.5,
  backgroundColor = 'transparent',
  cameraPosition = [0, 0, 5],
  enableZoom = true,
  enablePan = true,
  enableRotate = true,
  autoRotate = false,
  autoRotateSpeed = 2.0,
  maxDistance = 100,
  minDistance = 1,
  onLoad,
  onError,
  style,
  className, // Added className to destructuring
  height = '400px',
  containerClasses = '', // Added containerClasses to destructuring
}) => {
  // useThree() hook should be called inside a component that is a child of <Canvas>
  // We will define a sub-component for the scene content.

  const mergedStyle = useMemo(() => ({
    height,
    background: backgroundColor,
    ...style,
  }), [height, backgroundColor, style]);

  const mergedClassName = useMemo(() => `${containerClasses} ${className || ''}`.trim(), [containerClasses, className]);

  // Scene content as a sub-component to use R3F hooks
  const SceneContent: React.FC<{
    modelPath?: string;
    intensity: number;
    ambientLightIntensity: number;
    cameraPosition: [number, number, number];
    enableZoom: boolean;
    enablePan: boolean;
    enableRotate: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
    maxDistance: number;
    minDistance: number;
    onLoad?: () => void;
    onError?: (error: Error) => void;
  }> = ({
    modelPath: sceneModelPath, // Renamed to avoid conflict
    intensity: sceneIntensity,
    ambientLightIntensity: sceneAmbientLightIntensity,
    // cameraPosition is used by Canvas, not directly here
    enableZoom: sceneEnableZoom,
    enablePan: sceneEnablePan,
    enableRotate: sceneEnableRotate,
    autoRotate: sceneAutoRotate,
    autoRotateSpeed: sceneAutoRotateSpeed,
    maxDistance: sceneMaxDistance,
    minDistance: sceneMinDistance,
    onLoad: sceneOnLoad,
    onError: sceneOnError,
  }) => {
    const data = useConditionalGLTF(sceneModelPath, sceneOnError);
    const { scene } = data;
    const copiedScene = useMemo(() => scene.clone(true), [scene]);
    const modelRef = useRef<THREE.Group>(null);

    useEffect(() => {
      if (copiedScene && modelRef.current) {
        copiedScene.traverse((node) => {
          if ((node as THREE.Mesh).isMesh) {
            const meshNode = node as THREE.Mesh;
            if (meshNode.material) {
              const originalMaterial = meshNode.material as THREE.MeshStandardMaterial;
              meshNode.material = originalMaterial.clone();
              (meshNode.material as THREE.MeshStandardMaterial).needsUpdate = true;
            }
          }
        });
        if (sceneOnLoad) sceneOnLoad();
      }
    }, [copiedScene, sceneOnLoad]);

    useFrame(() => {
      if (sceneAutoRotate && modelRef.current) {
        modelRef.current.rotation.y += sceneAutoRotateSpeed / 300;
      }
    });
    

    return (
      <>
        <ambientLight intensity={sceneAmbientLightIntensity} />
        <directionalLight
          intensity={sceneIntensity}
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <primitive object={copiedScene} ref={modelRef} scale={1} />
        <OrbitControls
          enableZoom={sceneEnableZoom}
          enablePan={sceneEnablePan}
          enableRotate={sceneEnableRotate}
          autoRotate={sceneAutoRotate}
          autoRotateSpeed={sceneAutoRotateSpeed}
          maxDistance={sceneMaxDistance}
          minDistance={sceneMinDistance}
        />
        <Environment preset="city" />
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </>
    );
  };

  return (
    <div style={mergedStyle} className={mergedClassName}>
      <Canvas
        camera={{ position: cameraPosition, fov: 50 }}
        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        shadows
        className="w-full h-full" // Keep this for Canvas sizing
      >
        <SceneContent
            modelPath={modelPath}
            intensity={intensity}
            ambientLightIntensity={ambientLightIntensity}
            cameraPosition={cameraPosition}
            enableZoom={enableZoom}
            enablePan={enablePan}
            enableRotate={enableRotate}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            maxDistance={maxDistance}
            minDistance={minDistance}
            onLoad={onLoad}
            onError={onError}
        />
      </Canvas>
    </div>
  );
};

export default Model3DViewer;

// Note: The GLTFResult type is a basic representation.
// For specific models, you might want to generate more precise types using tools like gltfjsx.
// Since brain.glb is removed, this component is now more generic.
// If no modelPath is provided, it will render an empty scene with controls and environment.
