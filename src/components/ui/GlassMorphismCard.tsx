import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Define variants using class-variance-authority
const glassMorphismCardVariants = cva(
  // Base styles that apply to all variants
  'rounded-xl backdrop-blur transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'border border-white/20 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800/30 shadow-md',
        frosted: 'border border-white/30 bg-white/80 dark:bg-neutral-900/80 dark:border-neutral-800/40 shadow-lg hover:shadow-xl',
        solid: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md',
        outline: 'bg-transparent border border-white/30 dark:border-neutral-700/30 shadow-sm',
        gradient: 'bg-gradient-to-br from-white/80 to-white/60 dark:from-neutral-900/80 dark:to-neutral-900/60 border border-white/20 dark:border-neutral-800/20 shadow-md',
      },
      size: {
        sm: 'p-3',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1 hover:shadow-lg',
        scale: 'hover:scale-[1.02] hover:shadow-lg',
        glow: 'hover:shadow-glow',
      },
      rounded: {
        default: 'rounded-xl',
        full: 'rounded-full',
        lg: 'rounded-2xl',
        blob: 'rounded-blob',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      hover: 'none',
      rounded: 'default',
    },
  }
);

export interface GlassMorphismCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassMorphismCardVariants> {
  // Additional props
  withInnerBorder?: boolean;
  withRipple?: boolean;
  noAnimation?: boolean;
}

const GlassMorphismCard = React.forwardRef<HTMLDivElement, GlassMorphismCardProps>(
  ({ 
    className, 
    children, 
    variant, 
    size, 
    hover, 
    rounded,
    withInnerBorder = false,
    withRipple = false,
    noAnimation = false,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          glassMorphismCardVariants({ variant, size, hover, rounded }),
          withInnerBorder && 'ring-1 ring-inset ring-white/10 dark:ring-neutral-800/20',
          withRipple && 'active:bg-white/30 dark:active:bg-neutral-800/30',
          !noAnimation && 'animate-fade-in',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassMorphismCard.displayName = 'GlassMorphismCard';

export { GlassMorphismCard };
