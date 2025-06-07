/**
 * Custom Cursor Component
 * Enhanced cursor with GSAP animations and Three.js effects
 */

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
// @ts-expect-error - Canvas import issue with TypeScript definitions
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';

// Three.js cursor effect component
const CursorEffect = ({ color1, color2 }: { color1: string, color2: string }) => {
  const particlesRef = useRef<THREE.Group>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetMousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      targetMousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useFrame(() => {
    // Smooth mouse follow
    mousePosition.current.x += (targetMousePosition.current.x - mousePosition.current.x) * 0.1;
    mousePosition.current.y += (targetMousePosition.current.y - mousePosition.current.y) * 0.1;
    
    if (particlesRef.current) {
      particlesRef.current.position.x = mousePosition.current.x * 3;
      particlesRef.current.position.y = mousePosition.current.y * 3;
    }
  });
  
  return (
    <group ref={particlesRef}>
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={color1} transparent opacity={0.8} />
      </mesh>
      <points>
        <sphereGeometry args={[0.2, 16, 16]} />
        <pointsMaterial 
          size={0.02} 
          color={color2} 
          transparent 
          opacity={0.5} 
          blending={THREE.AdditiveBlending} 
        />
      </points>
    </group>
  );
};

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out"
      });
    };
    
    // Different styling for interactive elements
    const handleLinkHover = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        backgroundColor: "rgba(74, 159, 255, 0.2)",
        border: "1px solid rgba(74, 159, 255, 0.5)",
        ease: "elastic.out(1, 0.7)"
      });
      
      if (canvasRef.current) {
        gsap.to(canvasRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: "elastic.out(1, 0.7)"
        });
      }
    };
    
    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        duration: 0.3,
        ease: "elastic.out(1, 0.7)"
      });
      
      if (canvasRef.current) {
        gsap.to(canvasRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.7)"
        });
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-50 w-6 h-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 transition-colors"
      >
        <div ref={canvasRef} className="w-full h-full">
          <Canvas className="cursor-canvas">
            <CursorEffect color1="#4a9fff" color2="#a855f7" />
          </Canvas>
        </div>
      </div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          .custom-cursor {
            display: none !important;
          }
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};
