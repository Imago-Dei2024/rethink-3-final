import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';

type IconType = 'shield' | 'fingerprint' | 'lightbulb';

type AnimatedIcon3DProps = {
  iconType: IconType;
  color?: string;
  size?: number;
  rotationSpeed?: number;
  interactive?: boolean;
};

const Shield = ({ color = '#6366f1' }: { color?: string }) => {
  const shieldRef = useRef<any>(null);
  
  useFrame((state) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={shieldRef}>
      {/* Shield base */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Shield front symbol */}
      <mesh position={[0, 0, 0.5]}>
        <torusGeometry args={[0.3, 0.05, 16, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
      </mesh>
      
      <mesh position={[0, 0, 0.5]}>
        <boxGeometry args={[0.1, 0.5, 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
      </mesh>
    </group>
  );
};

const Fingerprint = ({ color = '#3b82f6' }: { color?: string }) => {
  const fingerprintRef = useRef<any>(null);
  
  useFrame((state) => {
    if (fingerprintRef.current) {
      fingerprintRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  // Create fingerprint pattern with multiple toruses
  return (
    <group ref={fingerprintRef}>
      {[0.3, 0.5, 0.7].map((radius, i) => (
        <mesh key={i} position={[0, 0, -0.1 * i]}>
          <torusGeometry args={[radius, 0.05, 16, 32]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} transparent opacity={1 - i * 0.2} />
        </mesh>
      ))}
      {/* Center dot */}
      <mesh position={[0, 0, 0.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
      </mesh>
    </group>
  );
};

const Lightbulb = ({ color = '#8b5cf6' }: { color?: string }) => {
  const bulbRef = useRef<any>(null);
  const glowRef = useRef<any>(null);
  const [intensity, setIntensity] = useState(1);
  
  useFrame((state) => {
    if (bulbRef.current) {
      bulbRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
    
    if (glowRef.current) {
      const pulsate = Math.sin(state.clock.getElapsedTime() * 2) * 0.3 + 0.7;
      glowRef.current.intensity = pulsate * 2;
      setIntensity(pulsate);
    }
  });

  return (
    <group ref={bulbRef}>
      {/* Bulb */}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.2} 
          emissive={color}
          emissiveIntensity={intensity * 0.5} 
          transparent 
          opacity={0.9} 
        />
      </mesh>
      
      {/* Bulb base */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.3, 16]} />
        <meshStandardMaterial color="#aaaaaa" roughness={0.5} metalness={0.8} />
      </mesh>
      
      {/* Glow light */}
      <pointLight 
        ref={glowRef} 
        position={[0, 0.2, 0]} 
        color={color} 
        intensity={2} 
        distance={5} 
      />
    </group>
  );
};

const IconScene = ({ iconType, color, rotationSpeed = 0.5, interactive = false }: AnimatedIcon3DProps) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      {iconType === 'shield' && <Shield color={color} />}
      {iconType === 'fingerprint' && <Fingerprint color={color} />}
      {iconType === 'lightbulb' && <Lightbulb color={color} />}
      
      {interactive && <OrbitControls enableZoom={false} />}
    </>
  );
};

export const AnimatedIcon3D = ({ 
  iconType, 
  color, 
  size = 80,
  rotationSpeed = 0.5,
  interactive = false
}: AnimatedIcon3DProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <IconScene 
          iconType={iconType} 
          color={color} 
          rotationSpeed={rotationSpeed}
          interactive={interactive}
        />
      </Canvas>
    </div>
  );
};
