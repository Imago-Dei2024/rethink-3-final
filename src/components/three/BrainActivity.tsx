/**
 * BrainActivity.tsx
 *
 * A 3D visualization of a neural network with adaptive rendering quality based on GPU capabilities
 * This component uses the latest performance optimization techniques:
 * - GPU tier detection for adaptive quality settings
 * - Lazy loading via Intersection Observer
 * - Performance monitoring with real-time quality adjustments
 * - Post-processing effects conditionally applied based on device capability
 */

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getGPUTier } from '../../lib/three/threeUtils';
import { useIntersectionObserver } from '@/lib/performance';
import { 
  BrainActivityProps, 
  GPUTier,
  PerformanceReportData
} from './BrainActivity.types';

// Dynamically import Three.js components to reduce initial bundle size
// The dynamic imports will only be loaded when the component is visible in the viewport
const ThreeComponents = dynamic(
  () => import('./BrainActivityThree').then((mod) => mod.ThreeComponents),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }
);

/**
 * BrainActivity component with GPU-adaptive rendering
 */
export const BrainActivity: React.FC<BrainActivityProps> = ({
  height = '500px',
  backgroundColor = '#000000',
  nodeCount = 180,
  connectionLimit = 5,
  color1 = '#4a9fff',
  color2 = '#a855f7',
  interactive = true,
  pulseSpeed = 1,
  lazyLoad = true,
  lazyLoadMargin = '100px',
  disableOnLowEnd = false,
  forceQuality,
  adaptiveQuality = true,
  showPerformanceStats = false,
  adaptiveOptions,
  onPerformanceReport
}) => {
  // Optimize performance on lower-end devices
  const [gpuTier, setGpuTier] = useState<GPUTier>(forceQuality || 'medium');
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const [isRendering, setIsRendering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use intersection observer to only render when visible
  const { ref, isVisible: elementIsVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: lazyLoadMargin,
    skip: !lazyLoad
  });
  
  useEffect(() => {
    // Check GPU capabilities when component mounts
    if (!forceQuality) {
      setGpuTier(getGPUTier());
    }
    
    // Set ref for intersection observer
    if (containerRef.current && lazyLoad) {
      ref(containerRef.current);
    }
  }, [ref, forceQuality, lazyLoad]);
  
  // Only start rendering when element is visible
  useEffect(() => {
    if (elementIsVisible && !isRendering) {
      setIsRendering(true);
    }
    setIsVisible(elementIsVisible);
  }, [elementIsVisible, isRendering]);

  // When low-end device is detected and disableOnLowEnd is true,
  // show a simplified version instead
  const shouldDisable = disableOnLowEnd && gpuTier === 'low';

  // Performance monitoring callback
  const handlePerformanceReport = (stats: PerformanceReportData) => {
    if (onPerformanceReport) {
      onPerformanceReport(stats);
    }
    
    // Implement adaptive quality adjustments if needed
    if (adaptiveQuality && stats.fps < (adaptiveOptions?.minFrameRate || 30)) {
      // Auto-downgrade quality if performance is poor
      if (gpuTier === 'high') {
        setGpuTier('medium');
      } else if (gpuTier === 'medium') {
        setGpuTier('low');
      }
    }
  };
  
  return (
    <div 
      ref={containerRef}
      style={{ 
        height, 
        width: '100%', 
        backgroundColor,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {isVisible && !shouldDisable ? (
        <ThreeComponents 
          gpuTier={gpuTier}
          nodeCount={nodeCount}
          connectionLimit={connectionLimit}
          color1={color1}
          color2={color2}
          pulseSpeed={pulseSpeed}
          interactive={interactive}
          backgroundColor={backgroundColor}
          showPerformanceStats={showPerformanceStats}
          adaptiveQuality={adaptiveQuality}
          adaptiveOptions={adaptiveOptions}
          onPerformanceReport={handlePerformanceReport}
        />
      ) : shouldDisable ? (
        // Simplified fallback for low-end devices
        <div className="w-full h-full flex items-center justify-center text-center p-4">
          <div>
            <div className="mb-2 text-xl font-semibold">Neural Network Visualization</div>
            <p className="text-sm opacity-70">
              A simplified version is shown due to device performance constraints.
            </p>
          </div>
        </div>
      ) : (
        // Loading placeholder when not yet visible
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
