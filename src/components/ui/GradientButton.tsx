import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

// Define gradient button specific styles using cva
const gradientButtonVariants = cva(
  // Base styles - common properties for all variants
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: // Primary gradient background
          "bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-md hover:shadow-lg",
        outline: // Gradient border effect on hover/focus, transparent background initially
          "bg-transparent border-2 border-primary-600 text-primary-600 hover:text-white hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:border-transparent focus:bg-gradient-to-r focus:from-primary-600 focus:to-secondary-600 focus:text-white focus:border-transparent",
        glass: // Glass effect with backdrop blur
          "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-md hover:shadow-lg",
        secondary: // Secondary colors
          "bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-700 hover:to-primary-700 text-white shadow-md hover:shadow-lg",
        accent: // Accent colors
          "bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white shadow-md hover:shadow-lg",
        ghost: // Ghost button - only shows on hover/focus
          "bg-transparent hover:bg-white/10 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300",
        link: // Link style button
          "bg-transparent underline-offset-4 hover:underline text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 shadow-none",
      },
      size: { // Define sizes
        default: "h-10 px-6 py-2 text-sm rounded-md", // Standard size
        sm: "h-9 px-4 py-1 text-xs rounded-md",
        md: "h-11 px-6 py-2.5 text-base rounded-lg",
        lg: "h-12 px-8 py-3 text-base md:text-lg rounded-lg", // Larger size
        xl: "h-14 px-10 py-4 text-xl rounded-xl", // Extra large
        icon: "h-10 w-10 rounded-full", // Icon button size
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce-gentle",
        shimmer: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        glow: "animate-pulse-slow shadow-glow",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      animation: "none",
    },
  }
);

// Base props shared by both button and link variants
type BaseProps = {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
} & VariantProps<typeof gradientButtonVariants>;

// Props specific to the button element
type ButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | 'type'> & {
  href?: undefined; // Explicitly undefined for button
  type?: 'button' | 'submit' | 'reset';
};

// Props specific to the anchor element (when href is present)
type AnchorProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'> & {
  href: string; // Must be a string for anchor
  type?: undefined; // Type is not applicable to anchors
};

// Discriminated union type for the component props
export type GradientButtonProps = ButtonProps | AnchorProps;

// Component implementation using the discriminated union
const GradientButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement, // Ref type union
  GradientButtonProps
>(
  ({ className, variant, size, rounded, animation, asChild = false, leftIcon, rightIcon, isLoading, loadingText, ...props }, ref) => {
    const commonClass = cn(gradientButtonVariants({ variant, size, rounded, animation, className }));

    if (asChild) {
      // Ensure Slot receives correct props, might need careful handling depending on child
      return (
        <Slot className={commonClass} ref={ref as React.Ref<any>} {...props}>
          {props.children}
        </Slot>
      );
    }

    // Check if it's an anchor (href is defined and is a string)
    if (props.href !== undefined) {
      // props are AnchorProps here
      const { children, ...anchorSpecificProps } = props;
      return (
        <Link href={props.href} passHref legacyBehavior>
          <a
            className={commonClass}
            {...anchorSpecificProps} // Spread remaining anchor props
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {isLoading ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent mr-2"></span>
                {loadingText || children}
              </>
            ) : (
              <>
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="ml-2">{rightIcon}</span>}
              </>
            )}
          </a>
        </Link>
      );
    }

    // Otherwise, it's a button (href is undefined)
    // props are ButtonProps here
    const { children, type = 'button', ...buttonSpecificProps } = props;
    return (
      <button
        className={commonClass}
        type={type}
        {...buttonSpecificProps} // Spread remaining button props
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {isLoading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent mr-2"></span>
            {loadingText || children}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);
GradientButton.displayName = "GradientButton";

// Export the component and variants
export { GradientButton, gradientButtonVariants };
