"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

type WavePlaneProps = {
  color?: THREE.ColorRepresentation;
  speed?: number;
  distortion?: number;
};

function WavePlane({ color = "#6a98ff", speed = 0.3, distortion = 0.4 }: WavePlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Subtle rotation
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });
  
  return (
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={distortion}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

type FloatingOrbsProps = {
  count?: number;
  size?: number;
  color?: THREE.ColorRepresentation;
};

type OrbData = {
  position: [number, number, number];
  speed: number;
  radius: number;
  wobbleSpeed: number;
};

function FloatingOrbs({ count = 8, size = 4, color = "#ffffff" }: FloatingOrbsProps) {
  // Generate random orb positions
  const orbData = useMemo<OrbData[]>(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * size,
        (Math.random() - 0.5) * size * 0.5,
        (Math.random() - 0.5) * size
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.5,
      radius: 0.1 + Math.random() * 0.3,
      wobbleSpeed: 1 + Math.random() * 2
    }));
  }, [count, size]);
  
  return (
    <>
      {orbData.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.radius, 16, 16]} />
          <MeshWobbleMaterial
            color={color}
            factor={0.4}
            speed={orb.wobbleSpeed}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </>
  );
}

type CalmingWavesProps = {
  waveColor?: THREE.ColorRepresentation;
  orbColor?: THREE.ColorRepresentation;
  backgroundColor?: string;
  height?: string;
};

export function CalmingWaves({ 
  waveColor = "#4a9fff", 
  orbColor = "#ffffff",
  backgroundColor = "transparent",
  height = "400px"
}: CalmingWavesProps) {
  return (
    <div style={{ width: '100%', height, position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        style={{ background: backgroundColor }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Animated wave surface */}
        <WavePlane color={waveColor} />
        
        {/* Floating orbs */}
        <FloatingOrbs color={orbColor} />
        
        {/* Subtle fog effect */}
        <fog attach="fog" args={[waveColor, 5, 15]} />
      </Canvas>
    </div>
  );
}
