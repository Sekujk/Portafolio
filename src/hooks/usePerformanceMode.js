import { useState, useEffect } from 'react';

export const usePerformanceMode = () => {
  const [performanceMode, setPerformanceMode] = useState('high');

  useEffect(() => {
    const detectPerformanceMode = () => {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      const hasSlowConnection = navigator.connection && navigator.connection.effectiveType && 
        ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType);
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Detect very old browsers
      const isOldBrowser = !window.IntersectionObserver || !window.requestIdleCallback;
      
      if (prefersReducedMotion || isOldBrowser) {
        return 'minimal';
      } else if (isMobile && (isLowEnd || hasSlowConnection)) {
        return 'low';
      } else if (isMobile || isLowEnd) {
        return 'medium';
      } else {
        return 'high';
      }
    };

    setPerformanceMode(detectPerformanceMode());

    // Listen for connection changes
    if (navigator.connection) {
      const handleConnectionChange = () => {
        setPerformanceMode(detectPerformanceMode());
      };
      
      navigator.connection.addEventListener('change', handleConnectionChange);
      
      return () => {
        navigator.connection.removeEventListener('change', handleConnectionChange);
      };
    }
  }, []);

  return performanceMode;
};

export default usePerformanceMode;