/**
 * Interactive Treatment Visualization Component
 * Visualizes mental health treatment effects with WebGL and Three.js
 */

import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import gsap from 'gsap';
import { getGPUTier } from '../../lib/three/threeUtils';

interface BrainModelProps {
  condition: string;
  treatment: string;
  animate: boolean;
}

// Treatment brain model with interactive regions
const BrainModel: React.FC<BrainModelProps> = ({ condition, treatment, animate }) => {
  const groupRef = useRef<THREE.Group>(null);
  const brainRef = useRef<THREE.Mesh>(null);
  const regionsRef = useRef<THREE.Mesh[]>([]);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [initialAnimation, setInitialAnimation] = useState(true);
  
  // Define brain regions affected by different conditions
  const brainRegions = {
    'depression': ['prefrontal-cortex', 'amygdala', 'hippocampus'],
    'anxiety': ['amygdala', 'prefrontal-cortex', 'thalamus'],
    'ptsd': ['amygdala', 'hippocampus', 'prefrontal-cortex'],
    'adhd': ['prefrontal-cortex', 'striatum', 'cerebellum']
  };
  
  // Treatment effect maps
  const treatmentEffects = {
    'ketamine': {
      intensity: 0.8,
      speed: 1.2,
      color: new THREE.Color('#4a9fff')
    },
    'tms': {
      intensity: 0.7,
      speed: 0.9,
      color: new THREE.Color('#9b59b6')
    },
    'therapy': {
      intensity: 0.5,
      speed: 0.5,
      color: new THREE.Color('#2ecc71')
    }
  };
  
  // Initial animation on mount
  useEffect(() => {
    if (groupRef.current && initialAnimation) {
      gsap.fromTo(
        groupRef.current.rotation,
        { y: Math.PI * 2 },
        { y: 0, duration: 1.5, ease: "power3.out" }
      );
      
      gsap.fromTo(
        groupRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      );
      
      setInitialAnimation(false);
    }
  }, [initialAnimation]);
  
  // Animate treatment effects
  useEffect(() => {
    if (!brainRef.current || !animate) return;
    
    const effect = treatmentEffects[treatment as keyof typeof treatmentEffects];
    
    if (effect && regionsRef.current.length > 0) {
      regionsRef.current.forEach(region => {
        if (region && brainRegions[condition as keyof typeof brainRegions].includes(region.name)) {
          // Animate affected regions
          if (region.material) {
            gsap.to(region.material, {
              emissiveIntensity: effect.intensity,
              duration: 1.5,
              ease: "power2.inOut"
            });
            
            gsap.to((region.material as THREE.MeshStandardMaterial).color, {
              r: effect.color.r,
              g: effect.color.g,
              b: effect.color.b,
              duration: 2,
              ease: "power2.inOut"
            });
          }
          
          gsap.to(region.scale, {
            x: 1.05,
            y: 1.05,
            z: 1.05,
            duration: 1,
            ease: "elastic.out(1, 0.3)"
          });
        } else if (region) {
          // Reset unaffected regions
          if (region.material) {
            gsap.to(region.material, {
              emissiveIntensity: 0.2,
              duration: 1,
              ease: "power2.inOut"
            });
            
            gsap.to((region.material as THREE.MeshStandardMaterial).color, {
              r: 0.5,
              g: 0.5,
              b: 0.5,
              duration: 1,
              ease: "power2.inOut"
            });
          }
          
          gsap.to(region.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "power2.out"
          });
        }
      });
    }
  }, [condition, treatment, animate, brainRegions, treatmentEffects]);
  
  // Add subtle rotation animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  
  // Interactive hover effects
  const handleRegionHover = (region: THREE.Mesh, isEntering: boolean) => {
    if (isEntering) {
      setActiveRegion(region.name);
      
      gsap.to(region.scale, {
        x: 1.1,
        y: 1.1,
        z: 1.1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    } else {
      setActiveRegion(null);
      
      gsap.to(region.scale, {
        x: brainRegions[condition as keyof typeof brainRegions].includes(region.name) ? 1.05 : 1,
        y: brainRegions[condition as keyof typeof brainRegions].includes(region.name) ? 1.05 : 1,
        z: brainRegions[condition as keyof typeof brainRegions].includes(region.name) ? 1.05 : 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };
  
  // Position regions in anatomically inspired positions
  const positionMap: Record<string, [number, number, number]> = {
    'prefrontal-cortex': [0, 1.5, 0.5],
    'amygdala': [0.8, 0, 0],
    'hippocampus': [0.5, -0.5, 0.8],
    'thalamus': [0, 0.5, 0],
    'striatum': [0.5, 0.5, -0.5],
    'cerebellum': [0, -1.5, 0]
  };
  
  return (
    <group ref={groupRef}>
      {/* Brain base */}
      <mesh
        ref={brainRef}
        position={[0, 0, 0]}
      >
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#333333" 
          roughness={0.7} 
          metalness={0.2}
          transparent 
          opacity={0.2} 
        />
      </mesh>
      
      {/* Brain regions */}
      {Object.entries(brainRegions).map(([, regions]) => 
        regions.map((region, j) => (
          <mesh
            key={`${region}-${j}`}
            name={region}
            position={positionMap[region] || [
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 3
            ]}
            ref={el => {
              if (el) regionsRef.current[j] = el;
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              handleRegionHover(e.object as THREE.Mesh, true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              handleRegionHover(e.object as THREE.Mesh, false);
            }}
          >
            <sphereGeometry args={[0.4, 24, 24]} />
            <meshStandardMaterial
              color={new THREE.Color(0.5, 0.5, 0.5)}
              emissive={new THREE.Color('#ffffff')}
              emissiveIntensity={0.2}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        ))
      )}
      
      {/* Display region name on hover */}
      {activeRegion && (
        <Text
          position={[0, -2.5, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {activeRegion.replace('-', ' ')}
        </Text>
      )}
    </group>
  );
};

/**
 * TreatmentVisualizer component with interactive controls
 */
export const TreatmentVisualizer: React.FC = () => {
  const [condition, setCondition] = useState('depression');
  const [treatment, setTreatment] = useState('ketamine');
  const [animate, setAnimate] = useState(false);
  const [gpuTier] = useState(() => getGPUTier());
  
  return (
    <div className="treatment-visualizer relative w-full h-[500px] rounded-xl overflow-hidden bg-neutral-900">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={gpuTier === 'low' ? [0.8, 1.5] : [1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        
        <BrainModel 
          condition={condition} 
          treatment={treatment}
          animate={animate}
        />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={5}
          maxDistance={10}
        />
        
        {gpuTier !== 'low' && (
          <EffectComposer>
            <Bloom 
              intensity={1.0} 
              luminanceThreshold={0.2} 
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        )}
      </Canvas>
      
      {/* UI Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-4 px-4">
        <div className="flex items-center justify-center gap-4 bg-neutral-800/70 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-white">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">Condition</label>
            <select 
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="bg-neutral-700 text-white rounded px-2 py-1 text-sm"
            >
              <option value="depression">Depression</option>
              <option value="anxiety">Anxiety</option>
              <option value="ptsd">PTSD</option>
              <option value="adhd">ADHD</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">Treatment</label>
            <select 
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="bg-neutral-700 text-white rounded px-2 py-1 text-sm"
            >
              <option value="ketamine">Ketamine</option>
              <option value="tms">TMS</option>
              <option value="therapy">Therapy</option>
            </select>
          </div>
          
          <button 
            onClick={() => setAnimate(true)}
            className="mt-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:from-primary-600 hover:to-secondary-600 transition-colors"
          >
            Apply Treatment
          </button>
        </div>
        
        <div className="text-xs text-white/50">
          Click and drag to rotate • Scroll to zoom
        </div>
      </div>
    </div>
  );
};
