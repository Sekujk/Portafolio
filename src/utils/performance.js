// Performance monitoring utilities
export const measurePerformance = () => {
  if ('performance' in window) {
    // Web Vitals measurements
    const getWebVitals = () => {
      return new Promise((resolve) => {
        const vitals = {};
        
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            vitals.fcp = Math.round(fcp.startTime);
          }
        });
        
        try {
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('Performance Observer not supported');
        }
        
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            vitals.lcp = Math.round(lastEntry.startTime);
          }
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP Observer not supported');
        }
        
        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          vitals.cls = Math.round(clsValue * 1000) / 1000;
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS Observer not supported');
        }
        
        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstInput = entries[0];
          if (firstInput) {
            vitals.fid = Math.round(firstInput.processingStart - firstInput.startTime);
          }
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID Observer not supported');
        }
        
        // Time to Interactive (approximation)
        window.addEventListener('load', () => {
          setTimeout(() => {
            vitals.tti = Math.round(performance.now());
            resolve(vitals);
          }, 100);
        });
      });
    };
    
    return getWebVitals();
  }
  
  return Promise.resolve({});
};

// Log performance metrics
export const logPerformanceMetrics = async () => {
  try {
    const vitals = await measurePerformance();
    
    console.group('🚀 Performance Metrics');
    console.log('First Contentful Paint (FCP):', vitals.fcp ? `${vitals.fcp}ms` : 'Not measured');
    console.log('Largest Contentful Paint (LCP):', vitals.lcp ? `${vitals.lcp}ms` : 'Not measured');
    console.log('First Input Delay (FID):', vitals.fid ? `${vitals.fid}ms` : 'Not measured');
    console.log('Cumulative Layout Shift (CLS):', vitals.cls || 'Not measured');
    console.log('Time to Interactive (TTI):', vitals.tti ? `${vitals.tti}ms` : 'Not measured');
    console.groupEnd();
    
    // Performance recommendations
    const recommendations = [];
    
    if (vitals.fcp > 1800) {
      recommendations.push('Consider optimizing FCP - target < 1.8s');
    }
    
    if (vitals.lcp > 2500) {
      recommendations.push('Consider optimizing LCP - target < 2.5s');
    }
    
    if (vitals.fid > 100) {
      recommendations.push('Consider optimizing FID - target < 100ms');
    }
    
    if (vitals.cls > 0.1) {
      recommendations.push('Consider reducing CLS - target < 0.1');
    }
    
    if (recommendations.length > 0) {
      console.group('💡 Performance Recommendations');
      recommendations.forEach(rec => console.log(`• ${rec}`));
      console.groupEnd();
    }
    
    return vitals;
  } catch (error) {
    console.error('Error measuring performance:', error);
    return {};
  }
};

// Resource loading optimization
export const preloadCriticalResources = () => {
  const criticalResources = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  ];
  
  criticalResources.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Lazy loading utility
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, observerOptions);
  }
  
  // Fallback for browsers without IntersectionObserver
  return {
    observe: (element) => {
      callback([{ target: element, isIntersecting: true }]);
    },
    unobserve: () => {},
    disconnect: () => {}
  };
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory;
    console.group('💾 Memory Usage');
    console.log('Used JS Heap Size:', `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`);
    console.log('Total JS Heap Size:', `${Math.round(memory.totalJSHeapSize / 1024 / 1024)}MB`);
    console.log('JS Heap Size Limit:', `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`);
    console.groupEnd();
    
    return {
      used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
      total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
      limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
    };
  }
  
  return null;
};

// Bundle size analyzer (development only)
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    
    console.group('📦 Bundle Analysis');
    console.log('Script files:', scripts.length);
    console.log('Stylesheet files:', styles.length);
    
    scripts.forEach((script, index) => {
      console.log(`Script ${index + 1}:`, script.src);
    });
    
    styles.forEach((style, index) => {
      console.log(`Stylesheet ${index + 1}:`, style.href);
    });
    console.groupEnd();
  }
};
