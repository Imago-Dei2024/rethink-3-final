"use client";

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

type NeuronProps = {
  position: [number, number, number];
  color: THREE.ColorRepresentation;
  speed?: number;
  size?: number;
};

// Neuron node component
function Neuron({ position, color, speed = 0.5, size = 0.05 }: NeuronProps) {
  const ref = useRef<THREE.Mesh>(null);
  const initialPosition = useMemo(() => new THREE.Vector3(...position), [position]);
  
  useFrame((state) => {
    if (!ref.current) return;
    
    // Subtle floating movement
    ref.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
    ref.current.position.x += Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.001;
    ref.current.position.z += Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.001;
    
    // Subtle pulsing effect
    const scale = 1 + Math.sin(state.clock.elapsedTime * speed * 2) * 0.1;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={ref} position={initialPosition}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

type NeuronConnectionsProps = {
  neurons: THREE.Vector3[];
  color: THREE.ColorRepresentation;
  maxDistance?: number;
};

// Connection lines between neurons
function NeuronConnections({ neurons, color, maxDistance = 1.5 }: NeuronConnectionsProps) {
  const linesRef = useRef<THREE.LineSegments>(null);
  const { camera } = useThree();
  
  useFrame(() => {
    if (!linesRef.current) return;
    
    // Update line positions based on neuron positions
    const positions = linesRef.current.geometry.attributes.position;
    let connectionIndex = 0;
    
    // Reset all connections
    for (let i = 0; i < positions.count; i++) {
      positions.setXYZ(i, 0, 0, 0);
    }
    
    // Create connections between neurons that are close to each other
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const n1 = neurons[i];
        const n2 = neurons[j];
        
        const distance = n1.distanceTo(n2);
        
        if (distance < maxDistance) {
          // Calculate opacity based on distance
          const opacity = 1 - (distance / maxDistance);
          
          // Only draw connections if we have space in the buffer
          if (connectionIndex < positions.count / 2) {
            positions.setXYZ(connectionIndex * 2, n1.x, n1.y, n1.z);
            positions.setXYZ(connectionIndex * 2 + 1, n2.x, n2.y, n2.z);
            connectionIndex++;
          }
        }
      }
    }
    
    positions.needsUpdate = true;
  });
  
  // Create a geometry with enough vertices for all possible connections
  const maxConnections = (neurons.length * (neurons.length - 1)) / 2;
  const positions = new Float32Array(maxConnections * 2 * 3); // 2 points per line, 3 coordinates per point
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </lineSegments>
  );
}

type NeuronFieldProps = {
  count?: number;
  size?: number;
  color?: THREE.ColorRepresentation;
  backgroundColor?: string;
  interactive?: boolean;
  height?: string;
};

// Main component
export function NeuronField({ 
  count = 100, 
  size = 4, 
  color = "#4a9fff", 
  backgroundColor = "transparent",
  interactive = true,
  height = "500px"
}: NeuronFieldProps) {
  // Generate random neuron positions
  const neuronPositions = useMemo(() => {
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size
    ] as [number, number, number]);
  }, [count, size]);
  
  // Create Vector3 objects for each neuron for distance calculations
  const neuronVectors = useMemo(() => {
    return neuronPositions.map(pos => new THREE.Vector3(...pos));
  }, [neuronPositions]);

  return (
    <div style={{ width: '100%', height, position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: backgroundColor }}
      >
        {/* Neurons */}
        {neuronPositions.map((position, i) => (
          <Neuron 
            key={i} 
            position={position} 
            color={color} 
            speed={0.2 + Math.random() * 0.8}
            size={0.03 + Math.random() * 0.04}
          />
        ))}
        
        {/* Connections between neurons */}
        <NeuronConnections 
          neurons={neuronVectors} 
          color={color}
          maxDistance={1.5}
        />
        
        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} intensity={0.8} />
        </EffectComposer>
        
        {/* Camera controls if interactive */}
        {interactive && (
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>
    </div>
  );
}
