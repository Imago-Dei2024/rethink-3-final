import React, { useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import { Image, Text, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { getGPUTier } from '../../lib/three/threeUtils';

type GalleryImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Interactive3DGalleryProps = {
  images: GalleryImageType[];
  height?: string;
  backgroundColor?: string;
};

const ImageFrame = ({ 
  image, 
  position, 
  rotation = [0, 0, 0], 
  onClick 
}: { 
  image: GalleryImageType;
  position: [number, number, number];
  rotation?: [number, number, number];
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      // Add subtle movement
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation[1] + (hovered ? 0.1 : 0),
        0.05
      );
      
      // Scale effect on hover
      groupRef.current.scale.x = THREE.MathUtils.lerp(
        groupRef.current.scale.x,
        hovered ? 1.1 : 1,
        0.1
      );
      groupRef.current.scale.y = THREE.MathUtils.lerp(
        groupRef.current.scale.y,
        hovered ? 1.1 : 1,
        0.1
      );
    }
  });
  
  // Calculate aspect ratio for proper display
  const aspectRatio = image.width / image.height;
  const width = 2;
  const height = width / aspectRatio;
  
  return (
    <group 
      ref={groupRef}
      position={position}
      rotation={rotation as [number, number, number]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Border frame with optimized geometry */}
      <mesh position={[0, 0, -0.01]} scale={[width + 0.1, height + 0.1, 0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#4a9fff" : "#ffffff"}
          metalness={0.1}
          roughness={0.7}
        />
      </mesh>
      
      {/* Image */}
      <Image 
        url={image.src} 
        scale={[width, height, 1]} 
        transparent
        toneMapped={false}
        alt="Gallery image"
      />
      {/* Note: Current version of drei Image component has type issues with some props */}
      
      {/* Caption */}
      <Text
        position={[0, -height/2 - 0.2, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="top"
        maxWidth={width * 1.5}
        lineHeight={1.2}
        font="/fonts/inter.woff"
      >
        {image.alt}
      </Text>
    </group>
  );
};

const GalleryScene = ({ images }: { images: GalleryImageType[] }) => {
  const { camera } = useThree();
  const [activeIndex, setActiveIndex] = useState(-1);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const [gpuTier, setGpuTier] = useState<'high' | 'medium' | 'low'>('medium');
  
  useEffect(() => {
    // Check GPU capabilities when component mounts
    setGpuTier(getGPUTier());
  }, []);
  
  // Arrange images in a circular pattern
  const imageElements = useMemo(() => {
    // If low-end device, we may want to display fewer images for performance
    const optimizedImages = gpuTier === 'low' && images.length > 8 
      ? images.slice(0, 8) // Display fewer images on low-end devices
      : images;
      
    return optimizedImages.map((image, index) => {
      const angle = (index / optimizedImages.length) * Math.PI * 2;
      const radius = 5;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const rotation: [number, number, number] = [0, -angle, 0];
      
      return (
        <ImageFrame 
          key={index}
          image={image}
          position={[x, 0, z]}
          rotation={rotation}
          onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
        />
      );
    });
  }, [images, activeIndex, gpuTier]);
  
  // Camera movement
  useFrame(() => {
    if (activeIndex !== -1 && cameraRef.current) {
      const angle = (activeIndex / images.length) * Math.PI * 2;
      const targetX = Math.sin(angle) * 3;
      const targetZ = Math.cos(angle) * 3;
      
      // Smoothly move camera to focus on selected image
      cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, targetX, 0.05);
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetZ, 0.05);
      cameraRef.current.lookAt(Math.sin(angle) * 5, 0, Math.cos(angle) * 5);
    }
  });
  
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 1, 8]}
        fov={50}
      />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Gallery floor - simplified for low-end devices */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#111" 
          metalness={gpuTier === 'low' ? 0.4 : 0.8} 
          roughness={gpuTier === 'low' ? 0.8 : 0.5}
        />
      </mesh>
      
      {imageElements}
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={12}
      />
    </>
  );
};

export const Interactive3DGallery: React.FC<Interactive3DGalleryProps> = ({
  images,
  height = '700px',
  backgroundColor = '#000',
}) => {
  const [gpuTier, setGpuTier] = useState<'high' | 'medium' | 'low'>('medium');
  
  useEffect(() => {
    // Check GPU capabilities when component mounts
    setGpuTier(getGPUTier());
  }, []);
  
  return (
    <div style={{ width: '100%', height, background: backgroundColor }}>
      <Canvas 
        shadows={gpuTier !== 'low'} 
        dpr={gpuTier === 'low' ? [0.7, 1.5] : [1, 2]}
      >
        <fog attach="fog" args={['#000', gpuTier === 'low' ? 7 : 5, gpuTier === 'low' ? 15 : 20]} />
        <GalleryScene images={images} />
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
        Click on an image to focus • Use mouse to orbit • Scroll to zoom
      </div>
    </div>
  );
};
