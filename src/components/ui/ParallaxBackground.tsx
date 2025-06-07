"use client"; // Required for framer-motion hooks

import * as React from 'react';
import * as framerMotion from 'framer-motion';

// Extract the components
const { motion, useScroll, useTransform } = framerMotion;
import { cn } from '@/lib/utils';

export interface ParallaxBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Optional background color class (e.g., 'bg-blue-500'). Overrides default. */
  bgColor?: string;
  /** Optional background image URL. */
  imageUrl?: string;
  /** Strength of the parallax effect (0 to 1). Default is 0.2 */
  parallaxStrength?: number;
}

const ParallaxBackground = React.forwardRef<HTMLDivElement, ParallaxBackgroundProps>(
  (
    {
      className,
      children,
      bgColor = 'bg-neutral-100 dark:bg-neutral-900', // Default background
      imageUrl,
      parallaxStrength = 0.2, // Adjust for more/less effect
      style, // Allow passing style object
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Get scroll progress relative to the container
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end start'], // Track when element enters/leaves viewport
    });

    // Transform scroll progress into a vertical translation for the background
    // Adjust the output range [-X%, X%] based on parallaxStrength
    const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxStrength * 100}%`, `${parallaxStrength * 100}%`]);

    // Determine background style
    const backgroundStyle: React.CSSProperties = imageUrl
      ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
      : {};

    return (
      <div
        ref={ref || containerRef} // Use forwarded ref or internal ref
        className={cn('relative overflow-hidden', className)} // Container needs relative positioning and overflow hidden
        style={style}
        {...props}
      >
        {/* Background element that moves */}
        <motion.div
          className={cn(
            'absolute inset-0 -z-10', // Position absolutely behind content
             !imageUrl && bgColor // Apply bgColor class only if no imageUrl
          )}
          style={{
            ...backgroundStyle,
            y, // Apply the parallax transformation
            // Ensure background covers the potential movement space
            top: `-${parallaxStrength * 100}%`,
            bottom: `-${parallaxStrength * 100}%`,
          }}
        />
        {/* Content */}
        <div className="relative z-0"> {/* Ensure content stays above background */}
          {children}
        </div>
      </div>
    );
  }
);

ParallaxBackground.displayName = 'ParallaxBackground';

export default ParallaxBackground;
