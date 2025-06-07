'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
// Define a type that covers all possible image source types
type ImageSrc = string | StaticImageData | { default: StaticImageData };
import { useIntersectionObserver, isMobile, getImageQuality, useDeviceDetection, useConnectionSpeed } from '@/lib/performance';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'loading' | 'blurDataURL'> {
  lowQualitySrc?: string;
  lazyBoundary?: string;
  fadeIn?: boolean;
  skipCache?: boolean;
  criticalForLCP?: boolean;
  preloadOnHover?: boolean;
  adaptiveSize?: boolean;
  disableOnLowEnd?: boolean;
  fallbackSrc?: string;
  fill?: boolean; // Add fill prop
  sizes?: string; // Add sizes prop for when fill is true
}

/**
 * OptimizedImage component that:
 * 1. Lazy loads images
 * 2. Uses Next.js Image component for automatic optimization
 * 3. Shows a low-quality placeholder until the main image loads
 * 4. Adapts quality based on device capabilities
 * 5. Supports fade-in animation
 */
// Track which images are being hovered for preloading
const hoverRegistry = new Set<string>();

// Track which images failed to load
const failedImages = new Set<string>();

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  lowQualitySrc,
  lazyBoundary = '200px',
  fadeIn = true,
  priority = false,
  skipCache = false,
  criticalForLCP = false,
  preloadOnHover = true,
  adaptiveSize = true,
  disableOnLowEnd = false,
  fallbackSrc,
  fill, // Destructure fill prop
  sizes, // Destructure sizes prop
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  // Normalize the image source to handle all possible types
  const normalizeImageSrc = (source: string | StaticImageData | any): ImageSrc => {
    if (typeof source === 'string') return source;
    if (source && typeof source === 'object' && 'src' in source) return source;
    if (source && typeof source === 'object' && 'default' in source) return source.default;
    return String(source);
  };
  
  const [imgSrc, setImgSrc] = useState<ImageSrc>(normalizeImageSrc(src));
  const deviceType = useDeviceDetection();
  const connectionType = useConnectionSpeed();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Enhanced intersection observer with higher precision for critical images
  const { ref: internalRef, isVisible } = useIntersectionObserver({
    rootMargin: lazyBoundary,
    threshold: criticalForLCP ? 0.1 : 0.01
  });
  
  // Combine refs
  const setRefs = (element: HTMLDivElement | null) => {
    containerRef.current = element;
    
    // Handle the internal ref from useIntersectionObserver
    if (internalRef && typeof internalRef === 'object' && 'current' in internalRef) {
      // Type assertion to handle possible null value
      const refObject = internalRef as React.MutableRefObject<HTMLDivElement | null>;
      refObject.current = element;
    }
  };
  
  // Determine if we should load the image based on multiple factors
  const shouldLoad = 
    priority || 
    isVisible || 
    criticalForLCP || 
    // Consider an image critical if it's one of the first on the page
    (typeof window !== 'undefined' && 
     document.querySelectorAll('img').length < 3);
  
  // On low-end devices, we might skip some non-essential images
  const shouldSkipOnLowEnd = 
    disableOnLowEnd && 
    deviceType === 'low' && 
    !criticalForLCP && 
    !priority;
  
  // Only add fade effect when enabled and appropriate
  const fadeClassName = (fadeIn && !isLoaded) ? 'opacity-0' : 'opacity-100';
  const transitionClassName = fadeIn ? 
    `transition-opacity ${deviceType === 'low' ? 'duration-300' : 'duration-500'}` : 
    '';
  
  // Get optimized quality setting based on device
  const quality = getImageQuality();
  
  // Reduce quality further on slow connections
  const adaptiveQuality = connectionType === 'slow' ? Math.max(quality - 20, 30) : quality;
  
  // Apply native lazy loading as a fallback for older browsers
  const nativeLazy = (!priority && !criticalForLCP && !isMobile) ? 'lazy' : undefined;
  
  // Set placeholder image if provided
  const placeholder = lowQualitySrc ? 'blur' : 'empty';
  const blurDataURL = lowQualitySrc || undefined;
  
  // Dynamically adjust image size based on device capabilities if enabled
  const getAdaptiveSize = (originalSize: number) => {
    if (!adaptiveSize) return originalSize;
    
    // Scale down images on low-end devices or slow connections
    if (deviceType === 'low' || connectionType === 'slow') {
      return Math.round(originalSize * 0.8);
    }
    
    return originalSize;
  };
  
  // Determine actual dimensions to use
  const adaptiveWidth = typeof width === 'number' ? getAdaptiveSize(width) : width;
  const adaptiveHeight = typeof height === 'number' ? getAdaptiveSize(height) : height;
  
  // Reset load state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setImgSrc(normalizeImageSrc(src));
  }, [src]);
  
  // Handle preloading on hover
  useEffect(() => {
    if (!preloadOnHover || !containerRef.current) return;
    
    // Only preload if the image isn't already being loaded
    const handleMouseEnter = () => {
      if (!hoverRegistry.has(String(src))) {
        hoverRegistry.add(String(src));
        
        // Preload the image
        const img = new window.Image();
        img.src = String(src);
      }
    };
    
    const container = containerRef.current;
    container.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [src, preloadOnHover]);
  
  // Handle errors and fallback to alternative image if provided
  const handleError = () => {
    setHasError(true);
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    
    // Remember this image failed for analytics
    failedImages.add(String(src));
  };
  
  // Skip cache for dynamic images if requested
  const cacheBuster = skipCache ? `?t=${Date.now()}` : '';
  const finalSrc = hasError && fallbackSrc ? fallbackSrc : 
                  (typeof imgSrc === 'string' && skipCache) ? `${imgSrc}${cacheBuster}` : imgSrc;
  
  // For very low-end devices, we might return a simplified version or nothing
  if (shouldSkipOnLowEnd) {
    return (
      <div 
        ref={setRefs} 
        className={`relative overflow-hidden ${className}`}
        style={{ width: adaptiveWidth, height: adaptiveHeight }}
      />
    );
  }
  
  return (
    <div 
      ref={setRefs} 
      className={`relative overflow-hidden ${fill ? '' : className}`}
      data-lcp={criticalForLCP ? 'true' : undefined}
    >
      {shouldLoad && (
        <Image
          src={finalSrc}
          alt={alt}
          {...(fill ? 
            { fill: true, sizes: sizes } : 
            { width: adaptiveWidth, height: adaptiveHeight })}
          quality={adaptiveQuality}
          loading={nativeLazy}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`${fadeClassName} ${transitionClassName} ${hasError ? 'image-error' : ''} ${fill ? className : ''}`}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
}
