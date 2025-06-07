/**
 * GSAP and Three.js Integration Utilities
 * Provides tools for animating Three.js objects with GSAP
 */

import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getGPUTier } from '../three/threeUtils';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Animate a Three.js object with GSAP
 */
export const animateThreeObject = (
  object: THREE.Object3D, 
  props: gsap.TweenVars, 
  options: {duration?: number, ease?: string, delay?: number} = {}
) => {
  return gsap.to(object, {
    ...props,
    duration: options.duration || 1,
    ease: options.ease || "power2.out",
    delay: options.delay || 0
  });
};

/**
 * Create scroll-triggered animations for Three.js objects and DOM elements
 */
export const createScrollAnimation = (
  threeObjects: {object: THREE.Object3D, props: gsap.TweenVars}[],
  domElements: {element: HTMLElement, props: gsap.TweenVars}[],
  triggerElement: string,
  options: {
    start?: string,
    end?: string,
    scrub?: boolean | number,
    markers?: boolean,
    toggleActions?: string
  } = {}
) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: options.start || "top center",
      end: options.end || "bottom center",
      scrub: options.scrub === undefined ? 1 : options.scrub,
      markers: options.markers || false,
      toggleActions: options.toggleActions || "play none none reverse"
    }
  });
  
  threeObjects.forEach(({object, props}) => {
    timeline.to(object, props, 0);
  });
  
  domElements.forEach(({element, props}) => {
    timeline.to(element, props, 0);
  });
  
  return timeline;
};

/**
 * Get performance-based settings for animations
 * Leverages the existing GPU detection system
 */
export const getPerformanceSettings = () => {
  const gpuTier = getGPUTier();
  
  // More aggressive settings for performance
  if (gpuTier === 'low') {
    return {
      animationDuration: 0.5, // Reduced from 0.7
      particleCount: 50,      // Reduced from 100
      textureQuality: 'low',
      enablePostProcessing: false, // Explicitly false
      enableParallax: false       // Explicitly false
    };
  } else if (gpuTier === 'medium') {
    return {
      animationDuration: 0.7, // Reduced from 1
      particleCount: 100,     // Reduced from 200
      textureQuality: 'medium',
      enablePostProcessing: false, // Disabled for medium tier as well for more performance
      enableParallax: true 
    };
  } else { // High tier
    return {
      animationDuration: 1.0, // Reduced from 1.2
      particleCount: 200,     // Reduced from 350
      textureQuality: 'high',
      enablePostProcessing: true,
      enableParallax: true
    };
  }
};

/**
 * Create a staggered animation sequence
 */
export const createStaggeredAnimation = (
  elements: HTMLElement[] | NodeListOf<Element>,
  props: gsap.TweenVars,
  options: {
    stagger?: number,
    duration?: number,
    ease?: string,
    delay?: number,
    from?: string | number | gsap.TweenVars | object // Replaced any[] with gsap.TweenVars
  } = {}
) => {
  return gsap.to(elements, {
    ...props,
    stagger: options.stagger || 0.1,
    duration: options.duration || 0.8,
    ease: options.ease || "power2.out",
    delay: options.delay || 0,
    from: options.from
  });
};

/**
 * Initialize scroll animations for a section
 */
export const initializeScrollAnimations = () => {
  // Animate elements when they enter the viewport
  gsap.utils.toArray<HTMLElement>('[data-animation="fade-in"]').forEach((element: HTMLElement) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Parallax effect for backgrounds
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element: HTMLElement) => {
    const speed = parseFloat(element.getAttribute('data-parallax') || '0.2');
    
    gsap.to(element, {
      y: () => -(element.offsetHeight * speed),
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
};
