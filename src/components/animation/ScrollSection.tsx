/**
 * ScrollSection Component
 * Provides GSAP-powered scroll animations for both DOM and Three.js elements
 */

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getPerformanceSettings } from '../../lib/animation/gsapThreeUtils';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
  pinned?: boolean;
  scrubAnimation?: boolean;
  triggerStart?: string;
  triggerEnd?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  parallaxFactor?: number; // 0 means no parallax, 1 means full parallax
  fadeIn?: boolean;
  scale?: boolean;
};

/**
 * ScrollSection component for enhanced scroll-triggered animations
 * Integrates with Three.js animations through shared GSAP timelines
 */
export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = '',
  id,
  pinned = false,
  scrubAnimation = true,
  triggerStart = "top bottom",
  triggerEnd = "bottom top",
  onEnter,
  onLeave,
  onEnterBack,
  onLeaveBack,
  parallaxFactor = 0.2,
  fadeIn = true,
  scale = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    const { enableParallax } = getPerformanceSettings();
    
    // Create the scroll trigger
    const section = sectionRef.current;
    const content = contentRef.current;
    
    if (!section || !content) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: triggerStart,
        end: triggerEnd,
        scrub: scrubAnimation ? 1 : false,
        pin: pinned,
        onEnter: onEnter,
        onLeave: onLeave,
        onEnterBack: onEnterBack,
        onLeaveBack: onLeaveBack,
      }
    });
    
    // Parallax effect
    if (enableParallax && parallaxFactor > 0) {
      tl.fromTo(
        content,
        { y: parallaxFactor * 100 },
        { y: parallaxFactor * -100, ease: "none" },
        0
      );
    }
    
    // Fade in animation
    if (fadeIn) {
      tl.fromTo(
        content,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        0
      );
    }
    
    // Scale animation
    if (scale) {
      tl.fromTo(
        content,
        { scale: 0.9 },
        { scale: 1, duration: 0.5, ease: "power2.out" },
        0
      );
    }
    
    return () => {
      // Clean up
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [
    triggerStart, 
    triggerEnd, 
    pinned, 
    scrubAnimation, 
    onEnter, 
    onLeave, 
    onEnterBack, 
    onLeaveBack, 
    parallaxFactor, 
    fadeIn, 
    scale
  ]);
  
  return (
    <section
      ref={sectionRef}
      className={`scroll-section ${className}`}
      id={id}
      data-scroll-section
    >
      <div ref={contentRef} className="scroll-content">
        {children}
      </div>
    </section>
  );
};
