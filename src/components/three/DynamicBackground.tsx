import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { getGPUTier } from '../../lib/three/threeUtils';

type DynamicBackgroundProps = {
  height?: string;
  backgroundColor?: string;
  color?: string;
  speed?: number;
  density?: number;
};

const FloatingDots = ({ color = '#3b82f6', speed = 0.5, density = 60 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [gpuTier, setGpuTier] = useState<'high' | 'medium' | 'low'>('medium');
  
  useEffect(() => {
    // Check GPU capabilities when component mounts
    setGpuTier(getGPUTier());
  }, []);
  
  // Define the type for dot objects
  type Dot = {
    position: [number, number, number];
    initialY: number;
  };

  // Create dots in a grid pattern with density adjusted for GPU performance
  const dots: Dot[] = [];
  const size = 0.05;
  const spacing = 1;
  
  // Adjust density based on GPU tier
  const adjustedDensity = gpuTier === 'low' ? Math.floor(density * 0.5) : 
                         (gpuTier === 'medium' ? Math.floor(density * 0.75) : density);
  
  const rows = adjustedDensity;
  const cols = adjustedDensity;
  const halfRows = rows / 2;
  const halfCols = cols / 2;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = (j - halfCols) * spacing;
      const y = (i - halfRows) * spacing;
      const z = Math.sin(i * 0.5) * Math.cos(j * 0.5) * 2; // Initial z-position with some variation
      
      dots.push({ position: [x, y, z], initialY: y });
    }
  }
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      
      // Gently rotate the entire group
      groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.1;
      
      // Update individual dot positions
      const children = groupRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const x = child.position.x;
        const y = dots[i].initialY;
        
        // Create smooth wave effect
        child.position.z = Math.sin(time * speed + x * 0.5 + y * 0.5) * 0.5;
        child.position.y = y + Math.sin(time * speed * 0.5 + x * 0.3) * 0.3;
      }
    }
  });
  
  return (
    <group ref={groupRef}>
      {dots.map((dot, i) => {
        // Use lower resolution geometry for low-end devices
        const segments = gpuTier === 'low' ? 4 : (gpuTier === 'medium' ? 6 : 8);
        
        return (
          <mesh key={i} position={dot.position as [number, number, number]}>
            <sphereGeometry args={[size, segments, segments]} />
            <meshBasicMaterial color={color} transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
};

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  height = '500px',
  backgroundColor = '#ffffff',
  color = '#3b82f6',
  speed = 0.5,
  density = 25,
}) => {
  const [gpuTier, setGpuTier] = useState<'high' | 'medium' | 'low'>('medium');
  
  useEffect(() => {
    // Check GPU capabilities when component mounts
    setGpuTier(getGPUTier());
  }, []);
  
  return (
    <div style={{ width: '100%', height, position: 'relative', background: backgroundColor }}>
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 60 }}
        dpr={gpuTier === 'low' ? [0.7, 1.5] : [1, 2]} // Adjust resolution based on GPU capability
      >
        <FloatingDots color={color} speed={speed} density={density} />
      </Canvas>
    </div>
  );
};
