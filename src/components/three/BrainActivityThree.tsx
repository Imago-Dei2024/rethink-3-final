/**
 * BrainActivityThree.tsx
 * 
 * This file contains the Three.js specific implementation for the BrainActivity component.
 * It is dynamically imported to reduce initial bundle size.
 */

import React, { useRef, useMemo, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { 
  Bloom, 
  EffectComposer
} from '@react-three/postprocessing';
import { 
  PerformanceMonitor,
  Stats,
  useGLTF,
  Sphere,
  meshBounds
} from '@react-three/drei';
import * as THREE from 'three';
import { 
  GPUTier,
  PerformanceReportData,
  AdaptiveOptimizationOptions
} from './BrainActivity.types';

// Props for the ThreeComponents
interface ThreeComponentsProps {
  gpuTier: GPUTier;
  nodeCount: number;
  connectionLimit: number;
  color1: string;
  color2: string;
  pulseSpeed: number;
  interactive: boolean;
  backgroundColor: string;
  showPerformanceStats: boolean;
  adaptiveQuality: boolean;
  adaptiveOptions?: AdaptiveOptimizationOptions;
  onPerformanceReport?: (stats: PerformanceReportData) => void;
}

// A single neuron node in the network
interface Node {
  position: any;
  connections: number[];
  strength: number;
  active: boolean;
  lastActive: number;
  size: number;
}

// Add JSX types for React Three Fiber components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: React.DetailedHTMLProps<any, any>;
      lineSegments: React.DetailedHTMLProps<any, any>;
      instancedMesh: React.DetailedHTMLProps<any, any>;
      sphereGeometry: React.DetailedHTMLProps<any, any>;
      meshBasicMaterial: React.DetailedHTMLProps<any, any>;
      primitive: React.DetailedHTMLProps<any, any>;
      mesh: React.DetailedHTMLProps<any, any>;
      ambientLight: React.DetailedHTMLProps<any, any>;
      pointLight: React.DetailedHTMLProps<any, any>;
      color: React.DetailedHTMLProps<any, any>;
    }
  }
}

// A connection between nodes
interface Connection {
  start: number;
  end: number;
  strength: number;
  active: boolean;
  lastActive: number;
}

// Neural Network Component
interface NeuralNetworkProps {
  nodeCount: number;
  connectionLimit: number;
  color1: string;
  color2: string;
  pulseSpeed: number;
  interactive: boolean;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ 
  nodeCount = 100, 
  connectionLimit = 5, 
  color1 = '#4a9fff', 
  color2 = '#a855f7',
  pulseSpeed = 1,
  interactive = true
}) => {
  const groupRef = useRef<any>(null);
  const nodesRef = useRef<any>(null);
  const linesRef = useRef<any>(null);
  
  // Create neural network structure
  const { nodes, connections } = useMemo(() => {
    const nodesArray: Node[] = [];
    
    // Create nodes positioned randomly in a rough brain shape
    for (let i = 0; i < nodeCount; i++) {
      // Create nodes in a roughly ellipsoid shape for brain-like appearance
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 0.5;
      
      // Squash the "brain" shape a bit to make it more brain-like
      const x = radius * Math.sin(phi) * Math.cos(theta) * 1.2;
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.8;
      const z = radius * Math.cos(phi) * 1;
      
      nodesArray.push({
        position: new THREE.Vector3(x, y, z),
        connections: [],
        strength: 0.1 + Math.random() * 0.9,
        active: Math.random() > 0.8, // Some nodes start active
        lastActive: -Math.random() * 5, // Stagger the initial activation
        size: 0.03 + Math.random() * 0.04,
      });
    }
    
    // Create connections between nearby nodes
    const connectionsArray: Connection[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const nodeConnections: number[] = [];
      
      // Calculate distances to all other nodes
      const distances: { index: number, distance: number }[] = [];
      for (let j = 0; j < nodeCount; j++) {
        if (i !== j) {
          const distance = nodesArray[i].position.distanceTo(nodesArray[j].position);
          distances.push({ index: j, distance });
        }
      }
      
      // Sort by distance and connect to nearest nodes
      distances.sort((a, b) => a.distance - b.distance);
      const connectionsCount = Math.floor(1 + Math.random() * (connectionLimit - 1));
      
      for (let j = 0; j < Math.min(connectionsCount, distances.length); j++) {
        const targetIdx = distances[j].index;
        
        // Avoid duplicate connections
        if (!nodeConnections.includes(targetIdx) && !nodesArray[targetIdx].connections.includes(i)) {
          nodeConnections.push(targetIdx);
          nodesArray[i].connections.push(targetIdx);
          
          connectionsArray.push({
            start: i,
            end: targetIdx,
            strength: (nodesArray[i].strength + nodesArray[targetIdx].strength) / 2,
            active: false,
            lastActive: -Math.random() * 2,
          });
        }
      }
    }
    
    return { nodes: nodesArray, connections: connectionsArray };
  }, [nodeCount, connectionLimit]);
  
  // Setup instanced nodes for performance
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Update the neural network each frame
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (nodesRef.current && linesRef.current) {
      const positions = linesRef.current.geometry.attributes.position.array as Float32Array;
      const colors = linesRef.current.geometry.attributes.color.array as Float32Array;
      
      // Update node colors and sizes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Calculate pulse factor for nodes
        const timeSinceActive = time - node.lastActive;
        const pulseFactor = Math.max(0, 1 - timeSinceActive / 2);
        
        // Random activation of nodes to simulate brain activity
        if (!node.active && Math.random() < 0.003 * pulseSpeed) {
          node.active = true;
          node.lastActive = time;
          
          // Propagate activation to connections
          for (const connectionIdx of node.connections) {
            const connection = connections.find(
              c => (c.start === i && c.end === connectionIdx) || (c.end === i && c.start === connectionIdx)
            );
            if (connection) {
              connection.active = true;
              connection.lastActive = time;
            }
          }
        } else if (node.active && timeSinceActive > 1 / pulseSpeed) {
          node.active = false;
        }
        
        // Set node position, scale, and color
        dummy.position.copy(node.position);
        
        // Scale with pulse
        const scale = node.size * (1 + pulseFactor * 0.5);
        dummy.scale.set(scale, scale, scale);
        
        dummy.updateMatrix();
        
        // Update the instanced mesh
        nodesRef.current.setMatrixAt(i, dummy.matrix);
      }
      nodesRef.current.instanceMatrix.needsUpdate = true;
      
      // Update connections
      let posIdx = 0;
      let colorIdx = 0;
      
      for (const connection of connections) {
        const start = nodes[connection.start].position;
        const end = nodes[connection.end].position;
        
        // Set line positions
        positions[posIdx++] = start.x;
        positions[posIdx++] = start.y;
        positions[posIdx++] = start.z;
        positions[posIdx++] = end.x;
        positions[posIdx++] = end.y;
        positions[posIdx++] = end.z;
        
        // Calculate pulse factor for connections
        const timeSinceActive = time - connection.lastActive;
        const pulseFactor = Math.max(0, 1 - timeSinceActive / 1.5);
        
        // Active connections should glow more and be more opaque
        const color1Obj = new THREE.Color(color1);
        const color2Obj = new THREE.Color(color2);
        const mixedColor = color1Obj.lerp(color2Obj, connection.strength);
        
        // Opacity based on activity
        const opacity = 0.1 + connection.strength * 0.2 + pulseFactor * 0.7;
        
        // Set start vertex color
        colors[colorIdx++] = mixedColor.r;
        colors[colorIdx++] = mixedColor.g;
        colors[colorIdx++] = mixedColor.b;
        colors[colorIdx++] = opacity;
        
        // Set end vertex color
        colors[colorIdx++] = mixedColor.r;
        colors[colorIdx++] = mixedColor.g;
        colors[colorIdx++] = mixedColor.b;
        colors[colorIdx++] = opacity;
        
        // Random reactivation of connections to simulate ongoing brain activity
        if (!connection.active && Math.random() < 0.001 * pulseSpeed) {
          connection.active = true;
          connection.lastActive = time;
        } else if (connection.active && timeSinceActive > 1.5 / pulseSpeed) {
          connection.active = false;
        }
      }
      
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
    
    // Gently rotate the entire network
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.z = Math.sin(time * 0.05) * 0.1;
    }
  });
  
  // Create geometry and material for connections
  const lineGeo = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    
    // 2 positions per line (start and end) × 3 components per position (x, y, z)
    const positions = new Float32Array(connections.length * 6);
    // 2 colors per line (start and end) × 4 components per color (r, g, b, a)
    const colors = new Float32Array(connections.length * 8);
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
    
    // Add frustum culling optimization
    geometry.computeBoundingSphere();
    
    return geometry;
  }, [connections]);
  
  const lineMat = useMemo(() => {
    return new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);
  
  // Create material for nodes
  const nodeMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: color1,
      transparent: true,
      blending: THREE.AdditiveBlending,
      // Add depth test optimization to avoid overdraw
      depthTest: true,
    });
  }, [color1]);
  
  return (
    <group ref={groupRef}>
      {/* Connections between nodes */}
      <lineSegments ref={linesRef} geometry={lineGeo} material={lineMat} />
      
      {/* Nodes as instanced spheres for performance - optimized geometry detail level */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodes.length]}>
        {/* Reduce polygon count while maintaining visual quality */}
        <sphereGeometry args={[1, 8, 8]} />
        <primitive object={nodeMaterial} />
      </instancedMesh>
    </group>
  );
};

// Loading fallback component to show while 3D scene is loading
const LoadingFallback = () => (
  <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
    <sphereGeometry args={[1, 8, 8]} />
    <meshBasicMaterial color="white" transparent opacity={0.5} wireframe />
  </mesh>
);

// Performance adapter component
const PerformanceAdapter: React.FC<{
  children: React.ReactNode;
  initialQuality: GPUTier;
  adaptiveQuality: boolean;
  adaptiveOptions?: AdaptiveOptimizationOptions;
  onPerformanceReport?: (stats: PerformanceReportData) => void;
}> = ({ 
  children, 
  initialQuality, 
  adaptiveQuality, 
  adaptiveOptions, 
  onPerformanceReport 
}) => {
  // Default performance settings
  const minFrameRate = adaptiveOptions?.minFrameRate || 30;
  const upgradeAfterFrames = adaptiveOptions?.upgradeAfterFrames || 300;
  const logMetrics = adaptiveOptions?.enableMetricsLogging || false;
  
  const handlePerformanceReport = (stats: PerformanceReportData) => {
    if (onPerformanceReport) {
      onPerformanceReport(stats);
    }
  };

  return (
    <>
      {adaptiveQuality ? (
        <PerformanceMonitor
          onIncline={() => {
            if (logMetrics) console.log('Performance improved!');
            handlePerformanceReport({
              fps: 60,
              qualityLevel: initialQuality,
              frameTime: 16.67,
              timestamp: Date.now()
            });
          }}
          onDecline={() => {
            if (logMetrics) console.log('Performance decreased!');
            handlePerformanceReport({
              fps: 30,
              qualityLevel: initialQuality,
              frameTime: 33.33,
              timestamp: Date.now()
            });
          }}
          flipflopsPerSecond={0}
          bounds={[minFrameRate, 60]}
          frames={upgradeAfterFrames}
        >
          {children}
        </PerformanceMonitor>
      ) : (
        // If adaptive quality is disabled, just render children
        children
      )}
    </>
  );
};

// Main exported component
export const ThreeComponents: React.FC<ThreeComponentsProps> = ({
  gpuTier,
  nodeCount,
  connectionLimit,
  color1,
  color2,
  pulseSpeed,
  interactive,
  backgroundColor,
  showPerformanceStats,
  adaptiveQuality,
  adaptiveOptions,
  onPerformanceReport
}) => {
  // Adaptive settings based on GPU tier
  const bloomIntensity = gpuTier === 'high' ? 0.7 : 0.4;
  const bloomKernelSize = gpuTier === 'high' ? 5 : 3;
  
  return (
    <ThreeCanvas 
      dpr={gpuTier === 'high' ? [1, 2] : [1, 1.5]} // Responsive DPR based on GPU tier
      gl={{ 
        antialias: gpuTier !== 'low', // Disable antialiasing on low-end
        powerPreference: 'high-performance',
        alpha: true,
        stencil: false
      }}
      camera={{ 
        position: [0, 0, 50], 
        fov: 50, 
        near: 0.1, 
        far: 200 
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={[backgroundColor]} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {showPerformanceStats && <Stats />}
      
      <Suspense fallback={<LoadingFallback />}>
        <PerformanceAdapter
          initialQuality={gpuTier}
          adaptiveQuality={adaptiveQuality}
          adaptiveOptions={adaptiveOptions}
          onPerformanceReport={onPerformanceReport}
        >
          <NeuralNetwork 
            nodeCount={nodeCount}
            connectionLimit={connectionLimit}
            color1={color1}
            color2={color2}
            pulseSpeed={pulseSpeed}
            interactive={interactive}
          />
        </PerformanceAdapter>
        
        {/* Only add post-processing on medium and high GPU tiers */}
        {gpuTier !== 'low' && (
          <EffectComposer>
            <Bloom 
              intensity={bloomIntensity} 
              luminanceThreshold={0.1} 
              luminanceSmoothing={0.9} 
              kernelSize={bloomKernelSize}
              mipmapBlur={true} // Enable mipmap blur for better performance
            />
          </EffectComposer>
        )}
      </Suspense>
    </ThreeCanvas>
  );
};
