import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

type ParticleFieldProps = {
  count?: number;
  size?: number;
  speed?: number;
  colors?: string[];
  backgroundColor?: string;
  height?: string;
  bloom?: boolean;
};

function Particles({ count = 1000, size = 0.02, speed = 0.1, colors = ['#4a9fff', '#a855f7', '#f97316'] }) {
  const mesh = useRef<THREE.Points>(null);
  
  // Create particles with random positions
  const [positions, colors_array] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors_array = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Position particles in a disc shape with some random height
      const theta = Math.random() * Math.PI * 2;
      const r = THREE.MathUtils.randFloat(1, 6);
      
      const x = r * Math.cos(theta);
      const y = THREE.MathUtils.randFloatSpread(3);
      const z = r * Math.sin(theta);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Assign random colors from the provided colors array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      color.set(randomColor);
      
      colors_array[i * 3] = color.r;
      colors_array[i * 3 + 1] = color.g;
      colors_array[i * 3 + 2] = color.b;
    }
    
    return [positions, colors_array];
  }, [count, colors]);
  
  useFrame((state) => {
    if (mesh.current) {
      // Rotate the entire particle system
      mesh.current.rotation.y += speed * 0.01;
      
      // Update individual particle positions for a flowing effect
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Create a flowing wave movement
        const x = positions[i];
        const z = positions[i + 2];
        const y = positions[i + 1];
        
        const time = state.clock.getElapsedTime();
        const distance = Math.sqrt(x * x + z * z);
        
        // Apply a wave-like motion
        positions[i + 1] = y + Math.sin(distance - time) * 0.01;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors_array}
          count={count}
          itemSize={3}
          args={[colors_array, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 1000,
  size = 0.05,
  speed = 0.1,
  colors = ['#4a9fff', '#a855f7', '#f97316'],
  backgroundColor = 'transparent',
  height = '500px',
  bloom = true,
}) => {
  return (
    <div style={{ width: '100%', height, background: backgroundColor, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles count={count} size={size} speed={speed} colors={colors} />
        {bloom && (
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              height={300}
              intensity={0.8}
            />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};
