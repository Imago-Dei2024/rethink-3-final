/**
 * OptimizedMotion Component
 * 
 * A performance-optimized wrapper around Framer Motion animations
 * that adapts to device capabilities and preferences.
 */

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion, MotionProps, Variants } from 'framer-motion';
import { useConnectionSpeed, useDeviceDetection } from '@/lib/performance';

// Animation presets with varying performance costs
export const animationPresets = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  staggered: {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  }
};

// Calculate adaptive transition settings based on device performance
const getAdaptiveTransition = (
  deviceType: 'high' | 'medium' | 'low',
  connectionType: 'fast' | 'medium' | 'slow',
  reducedMotion: boolean,
  defaultDuration = 0.5,
  defaultEase = "easeOut"
) => {
  if (reducedMotion) {
    return { duration: 0.1, ease: "linear" };
  }
  
  // Adjust animation duration based on device capability
  let duration = defaultDuration;
  if (deviceType === 'low' || connectionType === 'slow') {
    duration = defaultDuration * 0.6; // Faster animations on lower-end devices
  } else if (deviceType === 'medium' || connectionType === 'medium') {
    duration = defaultDuration * 0.8;
  }
  
  return { duration, ease: defaultEase };
};

interface OptimizedMotionProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  preset?: keyof typeof animationPresets;
  customVariants?: Variants;
  initialVisible?: boolean;
  threshold?: number;
  delay?: number;
  index?: number;
  forceAnimate?: boolean;
  className?: string;
  Tag?: React.ElementType;
}

export const OptimizedMotion = ({
  children,
  preset = 'fadeIn',
  customVariants,
  initialVisible = false,
  threshold = 0.1,
  delay = 0,
  index,
  forceAnimate = false,
  className = '',
  Tag = 'div',
  ...props
}: OptimizedMotionProps) => {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const prefersReducedMotion = useReducedMotion();
  const deviceType = useDeviceDetection();
  const connectionType = useConnectionSpeed();
  
  // If user prefers reduced motion or device is low-end, simplify animations
  const shouldReduceMotion = prefersReducedMotion || 
                            (!forceAnimate && (deviceType === 'low' || connectionType === 'slow'));
  
  // Select appropriate variants
  const variants = customVariants || animationPresets[preset as keyof typeof animationPresets];
  
  // Create intersection observer to trigger animations when element comes into view
  useEffect(() => {
    // Skip if initial animation is disabled or element is already visible
    if (initialVisible) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '10px 0px' }
    );
    
    const currentRef = document.querySelector(`.${className}`) as Element;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [initialVisible, threshold, className]);
  
  // Calculate adaptive transition properties
  const transition = getAdaptiveTransition(deviceType, connectionType, shouldReduceMotion);
  
  // Apply index for staggered animations
  const custom = index !== undefined ? index : 0;
  
  // Create a unique class for the intersection observer
  const uniqueClassName = className || `optimized-motion-${Math.random().toString(36).substring(2, 9)}`;
  
  // For reduced motion, render without animations
  if (shouldReduceMotion && prefersReducedMotion) {
    const Component = Tag;
    return (
      <Component className={`${uniqueClassName} ${className}`} {...props}>
        {children}
      </Component>
    );
  }
  
  // Apply simplified animations for low-end devices
  const actualVariants = shouldReduceMotion ? 
    { hidden: { opacity: 0 }, visible: { opacity: 1 } } : 
    variants;
  
  return (
    <motion.div
      className={`${uniqueClassName} ${className}`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={actualVariants}
      custom={custom}
      transition={{
        ...transition,
        delay: delay || (index !== undefined ? index * 0.1 : 0)
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Optimized version of motion.div that automatically handles performance
export const OptimizedDiv = (props: OptimizedMotionProps) => (
  <OptimizedMotion Tag="div" {...props} />
);

// Optimized version of motion.section
export const OptimizedSection = (props: OptimizedMotionProps) => (
  <OptimizedMotion Tag="section" {...props} />
);

// Optimized version for headings
export const OptimizedHeading = ({ 
  level = 2, 
  ...props 
}: OptimizedMotionProps & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) => {
  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <OptimizedMotion Tag={HeadingTag} {...props} />;
};

// Optimized version for lists with staggered children
interface OptimizedListProps {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  containerProps?: Partial<OptimizedMotionProps>;
  itemProps?: Partial<Omit<OptimizedMotionProps, 'index'>>;
}

export const OptimizedList = ({
  items,
  className = '',
  itemClassName = '',
  containerProps = {},
  itemProps = {}
}: OptimizedListProps) => {
  return (
    <OptimizedMotion
      className={className}
      preset="fadeIn"
      {...containerProps as any}
    >
      {items.map((item, index) => (
        <OptimizedMotion
          key={index}
          className={itemClassName}
          preset="staggered"
          index={index}
          {...itemProps as any}
        >
          {item}
        </OptimizedMotion>
      ))}
    </OptimizedMotion>
  );
};

export default OptimizedMotion;
