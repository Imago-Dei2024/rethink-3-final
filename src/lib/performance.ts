/**
 * Performance optimization utilities
 * Collection of hooks and utilities for improving frontend performance
 */

import { useState, useEffect } from 'react';

/**
 * Detect if code is running on client or server
 */
export const isClient = typeof window !== 'undefined';

/**
 * Device type detection based on screen size, connection speed and hardware concurrency
 * @returns 'high' | 'medium' | 'low' based on device capabilities
 */
export const useDeviceDetection = (): 'high' | 'medium' | 'low' => {
  const [deviceType, setDeviceType] = useState<'high' | 'medium' | 'low'>('medium');

  useEffect(() => {
    if (!isClient) return;

    // Combine multiple factors to determine device capabilities
    const determineDeviceType = () => {
      // Check processor cores
      const cpuScore = navigator.hardwareConcurrency || 4;
      
      // Check screen resolution
      const { width, height } = window.screen;
      const resolution = width * height;
      
      // Check device memory if available
      const memory = (navigator as any).deviceMemory || 4;
      
      // Mobile detection
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Score the device
      let score = 0;
      
      // CPU score (0-3)
      if (cpuScore >= 8) score += 3;
      else if (cpuScore >= 4) score += 2;
      else score += 1;
      
      // Resolution score (0-3)
      if (resolution >= 2073600) score += 3; // 1920x1080 or higher
      else if (resolution >= 921600) score += 2; // 1280x720 or higher
      else score += 1;
      
      // Memory score (0-3)
      if (memory >= 8) score += 3;
      else if (memory >= 4) score += 2;
      else score += 1;
      
      // Mobile penalty
      if (isMobile) score -= 2;
      
      // Determine final type
      if (score >= 7) return 'high';
      else if (score >= 4) return 'medium';
      else return 'low';
    };

    setDeviceType(determineDeviceType());

    // Update on resize as the user might switch to a different device mode
    const handleResize = () => {
      setDeviceType(determineDeviceType());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

// Detect if the browser supports the IntersectionObserver API
export const hasIntersectionObserver = isClient && 'IntersectionObserver' in window;

// Device detection for adaptive performance settings
export const isMobile = isClient && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Connection speed detection

// Detect connection speed for adaptive loading
export function useConnectionSpeed() {
  const [connectionType, setConnectionType] = useState<'slow' | 'medium' | 'fast'>('medium');
  
  useEffect(() => {
    if (!isClient) return;
    
    // Use Network Information API if available
    if ('connection' in navigator && navigator.connection) {
      const connection = (navigator as any).connection;
      
      const getConnectionType = () => {
        if (connection.saveData) return 'slow';
        if (connection.effectiveType === '4g' && !connection.saveData) return 'fast';
        return 'medium';
      };
      
      setConnectionType(getConnectionType());
      
      // Listen for changes
      const handleConnectionChange = () => {
        setConnectionType(getConnectionType());
      };
      
      connection.addEventListener('change', handleConnectionChange);
      return () => {
        connection.removeEventListener('change', handleConnectionChange);
      };
    } else {
      // Fallback performance estimation
      const loadStart = performance.now();
      
      window.addEventListener('load', () => {
        const loadTime = performance.now() - loadStart;
        if (loadTime < 1000) setConnectionType('fast');
        else if (loadTime > 3000) setConnectionType('slow');
        else setConnectionType('medium');
      }, { once: true });
    }
  }, []);
  
  return connectionType;
}

// React Hook to detect if an element is in viewport for lazy loading
export function useIntersectionObserver(
  options: { threshold?: number; rootMargin?: string; skip?: boolean } = { threshold: 0.1, rootMargin: '0px 0px 200px 0px' }
) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(options.skip || false);
  
  useEffect(() => {
    // If skip is true or no IntersectionObserver support, just set visible to true
    if (options.skip || !hasIntersectionObserver || !ref) {
      if (options.skip) {
        setIsVisible(true);
      }
      return;
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: options.threshold,
      rootMargin: options.rootMargin
    });
    
    observer.observe(ref);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.rootMargin, options.skip]);
  
  return { ref: setRef, isVisible };
}

// Script optimization to defer non-critical scripts
export function useDeferredScripts(scripts: string[], delay = 3000) {
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setTimeout(() => {
      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });
    }, delay);
    
    return () => clearTimeout(timer);
  }, [scripts, delay]);
}

// Memory usage monitor to help detect memory leaks
export function useMemoryUsage(interval = 5000) {
  const [memoryUsage, setMemoryUsage] = useState<number | null>(null);
  
  useEffect(() => {
    if (!isClient || !('performance' in window && 'memory' in performance)) return;
    
    const checkMemory = () => {
      const memory = (performance as any).memory;
      if (memory) {
        setMemoryUsage(memory.usedJSHeapSize / (1024 * 1024));
      }
    };
    
    checkMemory();
    const timer = setInterval(checkMemory, interval);
    
    return () => clearInterval(timer);
  }, [interval]);
  
  return memoryUsage;
}

// Adaptive image quality based on device and connection
export const getImageQuality = (baseQuality = 75) => {
  if (!isClient) return baseQuality;
  
  // Reduce quality on mobile or slow connections
  if (isMobile) return Math.max(baseQuality - 15, 40);
  
  // Check for Data Saver mode
  if ('connection' in navigator && (navigator as any).connection?.saveData) {
    return Math.max(baseQuality - 25, 30);
  }
  
  return baseQuality;
};

// Detect if reduced motion is preferred
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    if (!isClient) return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);
  
  return prefersReducedMotion;
}
