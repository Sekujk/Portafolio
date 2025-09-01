import React, { useState, useEffect, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import DarkModeToggle from './components/DarkModeToggle';
import LanguageToggle from './components/LanguageToggle';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import SEOHelmet from './components/SEOHelmet';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LazySection from './components/LazySection';
import { logPerformanceMetrics, preloadCriticalResources } from './utils/performance';
import { initGA } from './utils/analytics';
import usePerformanceMode from './hooks/usePerformanceMode';
import './App.css';

// Lazy load non-critical components
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCursor, setShowCursor] = useState(false);
  const performanceMode = usePerformanceMode();

  useEffect(() => {
    // Check if device supports hover (desktop)
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    setShowCursor(supportsHover);
    
    // Initialize performance monitoring
    preloadCriticalResources();
    
    // Initialize Google Analytics
    initGA();
    
    // Log performance metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        logPerformanceMetrics();
      }, 1000);
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <SEOHelmet />
        <ScrollProgress />
        <Navigation />
        <DarkModeToggle />
        <LanguageToggle />
        {performanceMode !== 'minimal' && <ParticleBackground />}
        {showCursor && performanceMode === 'high' && <CustomCursor />}
        <BackToTop />
        
        <main>
          <Hero />
          <LazySection fallback={<div style={{ height: '100vh', background: 'var(--light-gray)' }} />}>
            <Suspense fallback={<div style={{ height: '50px', background: 'var(--light-gray)' }} />}>
              <About />
            </Suspense>
          </LazySection>
          <LazySection fallback={<div style={{ height: '100vh', background: 'var(--white)' }} />}>
            <Suspense fallback={<div style={{ height: '50px', background: 'var(--white)' }} />}>
              <Skills />
            </Suspense>
          </LazySection>
          <LazySection fallback={<div style={{ height: '100vh', background: 'var(--light-gray)' }} />}>
            <Suspense fallback={<div style={{ height: '50px', background: 'var(--light-gray)' }} />}>
              <Projects />
            </Suspense>
          </LazySection>
          <LazySection fallback={<div style={{ height: '100vh', background: 'var(--white)' }} />}>
            <Suspense fallback={<div style={{ height: '50px', background: 'var(--white)' }} />}>
              <Contact />
            </Suspense>
          </LazySection>
        </main>
        
        <LazySection fallback={<div style={{ height: '200px', background: 'var(--primary-gray)' }} />}>
          <Suspense fallback={<div style={{ height: '50px', background: 'var(--primary-gray)' }} />}>
            <Footer />
          </Suspense>
        </LazySection>
      </div>
    </ErrorBoundary>
  );
}

export default App;
