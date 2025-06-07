/**
 * Web Vitals Component
 * 
 * Collects and reports Core Web Vitals metrics to help monitor site performance
 * Used to track LCP, FID, CLS, TTFB, and other performance metrics
 */

import { useEffect } from 'react';
import { onCLS, onLCP, onTTFB, onFCP, Metric } from 'web-vitals';

type ReportHandler = (metric: Metric) => void;

interface WebVitalsProps {
  reportEndpoint?: string; // Optional endpoint to send metrics to
  debug?: boolean; // Enable console logging of metrics
  sampleRate?: number; // Percentage of users to collect metrics from (0-100)
}

// Helper to send metrics to an analytics endpoint
const sendToAnalytics = (metric: Metric, endpoint: string) => {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
    navigationType: 'navigate',
    timestamp: Date.now(),
    userAgent: navigator.userAgent
  });

  // Use sendBeacon if available, fallback to fetch
  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
  } else {
    fetch(endpoint, {
      body,
      method: 'POST',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const WebVitals = ({ 
  reportEndpoint,
  debug = false,
  sampleRate = 100
}: WebVitalsProps) => {
  useEffect(() => {
    // Only collect metrics from a percentage of users
    if (Math.random() * 100 > sampleRate) return;

    // Setup reporter function
    const reportWebVital: ReportHandler = (metric) => {
      // Log metrics to console if debug is enabled
      if (debug) {
        console.log(`Web Vital: ${metric.name} = ${metric.value}`);
      }

      // Send to analytics endpoint if provided
      if (reportEndpoint) {
        sendToAnalytics(metric, reportEndpoint);
      }

      // Store in localStorage for later retrieval
      try {
        const storedMetrics = localStorage.getItem('web-vitals') || '{}';
        const metrics = JSON.parse(storedMetrics);
        metrics[metric.name] = metric.value;
        localStorage.setItem('web-vitals', JSON.stringify(metrics));
      } catch {
        // Ignore storage errors
      }
    };

    // Register metrics collectors
    onCLS(reportWebVital); // Cumulative Layout Shift
    onLCP(reportWebVital); // Largest Contentful Paint
    onTTFB(reportWebVital); // Time to First Byte
    onFCP(reportWebVital); // First Contentful Paint

    // Also track custom metrics
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = window.performance.timing;
          
          // Calculate time to interactive (rough approximation)
          const tti = timing.domInteractive - timing.navigationStart;
          
          reportWebVital({
            name: 'TTI',
            value: tti,
            delta: 0,
            id: 'v1-tti',
            entries: []
          });

          // Calculate total page load time
          const loadTime = timing.loadEventEnd - timing.navigationStart;
          
          reportWebVital({
            name: 'LoadTime',
            value: loadTime,
            delta: 0,
            id: 'v1-load',
            entries: []
          });
        }, 0);
      });
    }
  }, [reportEndpoint, debug, sampleRate]);

  // This is a monitoring component with no UI
  return null;
};

// Helper function to retrieve current web vitals data
export const getWebVitals = () => {
  try {
    const storedMetrics = localStorage.getItem('web-vitals') || '{}';
    return JSON.parse(storedMetrics);
  } catch {
    return {};
  }
};

export default WebVitals;
