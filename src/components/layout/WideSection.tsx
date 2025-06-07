import * as React from 'react';
import { cn } from '@/lib/utils';
import * as framerMotion from 'framer-motion';

// Extract the motion component
const { motion } = framerMotion;

export interface WideSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Tailwind background color class(es) for the section */
  bgColor?: string;
  /** If true, the background color spans the full width, but content is centered in a container.
   * If false (default), the content spans the full width (useful for elements like ImageGallery that handle their own max-width). */
  fullWidth?: boolean;
  /** Optional class name for the inner container when fullWidth is true */
  containerClassName?: string;
  /** Enable fancy gradient background effect */
  gradientBg?: boolean;
  /** Add a wave or curve decorative divider */
  dividerTop?: 'wave' | 'curve' | 'none';
  /** Add a wave or curve decorative divider */
  dividerBottom?: 'wave' | 'curve' | 'none';
  /** Enable animation for section content */
  animate?: boolean;
  /** Add rounded corners to the section */
  rounded?: boolean;
  /** Add a subtle shadow effect */
  shadow?: boolean;
}

const WideSection = React.forwardRef<HTMLElement, WideSectionProps>(
  (
    {
      className,
      children,
      bgColor = 'bg-transparent', // Default to transparent background
      fullWidth = false,
      containerClassName,
      gradientBg = false,
      dividerTop = 'none',
      dividerBottom = 'none',
      animate = false,
      rounded = false,
      shadow = false,
      ...props
    },
    ref
  ) => {
    // Animation variants for the section content
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          staggerChildren: 0.1
        }
      }
    };

    // Add classes based on props
    const sectionClasses = cn(
      'py-16 md:py-20 lg:py-24', // Default vertical padding
      bgColor, // Apply background color
      gradientBg && 'blob-gradient', // Apply gradient background if enabled
      dividerTop === 'wave' && 'wave-top',
      dividerTop === 'curve' && 'curve-top',
      dividerBottom === 'wave' && 'wave-bottom',
      dividerBottom === 'curve' && 'curve-bottom',
      rounded && 'rounded-3xl overflow-hidden',
      shadow && 'shadow-soft',
      className
    );

    // Container for the content
    const contentContainer = (
      <>
        {animate ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={fullWidth ? cn('section-container', containerClassName) : 'w-full'}
          >
            {children}
          </motion.div>
        ) : (
          <div className={fullWidth ? cn('section-container', containerClassName) : 'w-full'}>
            {children}
          </div>
        )}
      </>
    );

    return (
      <section
        ref={ref}
        className={sectionClasses}
        {...props}
      >
        {fullWidth ? contentContainer : children}
      </section>
    );
  }
);

WideSection.displayName = 'WideSection';

export { WideSection };
