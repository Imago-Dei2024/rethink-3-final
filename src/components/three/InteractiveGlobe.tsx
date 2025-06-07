"use client";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

type MarkerProps = {
  position: [number, number, number];
  label: string;
  onClick: (label: string) => void;
  active: boolean;
};

// Marker component for points on the globe
function Marker({ position, label, onClick, active }: MarkerProps) {
  const [hovered, setHovered] = useState(false);
  const markerRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!markerRef.current) return;
    
    // Pulse effect when hovered or active
    if (hovered || active) {
      markerRef.current.scale.x = THREE.MathUtils.lerp(markerRef.current.scale.x, 1.4, 0.1);
      markerRef.current.scale.y = THREE.MathUtils.lerp(markerRef.current.scale.y, 1.4, 0.1);
      markerRef.current.scale.z = THREE.MathUtils.lerp(markerRef.current.scale.z, 1.4, 0.1);
    } else {
      markerRef.current.scale.x = THREE.MathUtils.lerp(markerRef.current.scale.x, 1, 0.1);
      markerRef.current.scale.y = THREE.MathUtils.lerp(markerRef.current.scale.y, 1, 0.1);
      markerRef.current.scale.z = THREE.MathUtils.lerp(markerRef.current.scale.z, 1, 0.1);
    }
  });
  
  return (
    <group position={position}>
      <mesh 
        ref={markerRef}
        onClick={() => onClick(label)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial 
          color={active ? "#ff4a9f" : (hovered ? "#4a9fff" : "#ffffff")} 
          emissive={active ? "#ff4a9f" : (hovered ? "#4a9fff" : "#ffffff")}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {(hovered || active) && (
        <Text
          position={[0, 0.1, 0]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="bottom"
        >
          {label}
        </Text>
      )}
    </group>
  );
}

type MarkerData = {
  label: string;
  position: [number, number, number];
  content: string;
};

type GlobeProps = {
  markers: MarkerData[];
  activeMarker: string | null;
  setActiveMarker: (label: string) => void;
};

// Globe component
function Globe({ markers, activeMarker, setActiveMarker }: GlobeProps) {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!globeRef.current) return;
    
    // Gentle rotation when no interaction
    if (!activeMarker) {
      globeRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#1a2b4a" 
          metalness={0.8}
          roughness={0.7}
          emissive="#0a1525"
          emissiveIntensity={0.2}
        />
        
        {/* Grid lines */}
        <lineSegments>
          <edgesGeometry args={[new THREE.SphereGeometry(1.001, 36, 36)]} />
          <lineBasicMaterial color="#4a9fff" transparent opacity={0.2} />
        </lineSegments>
      </mesh>
      
      {/* Markers */}
      {markers.map((marker, i) => (
        <Marker 
          key={i}
          position={marker.position}
          label={marker.label}
          onClick={setActiveMarker}
          active={activeMarker === marker.label}
        />
      ))}
    </group>
  );
}

type InteractiveGlobeProps = {
  height?: string;
  backgroundColor?: string;
  data?: MarkerData[];
};

export function InteractiveGlobe({ 
  height = "500px",
  backgroundColor = "transparent",
  data = [
    { label: "Anxiety", position: [0.7, 0.5, 0.5], content: "Anxiety disorders affect 18.1% of adults in the United States." },
    { label: "Depression", position: [-0.5, 0.6, 0.6], content: "Major depression is one of the most common mental disorders in the US." },
    { label: "PTSD", position: [0.6, -0.5, 0.6], content: "About 6% of the population will experience PTSD at some point in their lives." },
    { label: "Addiction", position: [-0.6, -0.4, -0.7], content: "Substance use disorders affect millions of Americans every year." },
    { label: "Wellness", position: [0.2, 0.8, -0.5], content: "Mental wellness practices can significantly improve quality of life." }
  ]
}: InteractiveGlobeProps) {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const activeData = data.find(item => item.label === activeMarker);
  
  return (
    <div style={{ width: '100%', height, position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 60 }}
        style={{ background: backgroundColor }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Globe 
          markers={data} 
          activeMarker={activeMarker}
          setActiveMarker={setActiveMarker}
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={!activeMarker}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Information panel */}
      {activeMarker && (
        <div 
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '10px',
            maxWidth: '80%',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h3 style={{ margin: '0 0 10px 0', color: '#4a9fff' }}>{activeMarker}</h3>
          <p style={{ margin: 0 }}>{activeData?.content}</p>
        </div>
      )}
    </div>
  );
}
