import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = useMemo(() => [
    t('common.loadingPortfolio'),
    t('common.preparingProjects'),
    t('common.optimizingExperience'),
    t('common.almostReady')
  ], [t]);

  useEffect(() => {
    const duration = 1500; // Reduced to 1.5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const progressStep = 100 / steps;

    let currentProgress = 0;
    let textIndex = 0;

    const timer = setInterval(() => {
      currentProgress += progressStep;
      
      // Update text based on progress
      const newTextIndex = Math.floor((currentProgress / 100) * loadingTexts.length);
      if (newTextIndex !== textIndex && newTextIndex < loadingTexts.length) {
        textIndex = newTextIndex;
        setCurrentText(loadingTexts[textIndex]);
      }
      
      setProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500); // Small delay before hiding
      }
    }, interval);

    // Set initial text
    setCurrentText(loadingTexts[0]);

    return () => clearInterval(timer);
  }, [onComplete, loadingTexts]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-content">
          {/* Logo Animation */}
          <motion.div
            className="loading-logo"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="logo-circle">
              <span>AS</span>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="loading-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>Alejandro Seclen Leonardo</h2>
            <p>{currentText}</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="progress-container"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
            <span className="progress-text">{Math.round(progress)}%</span>
          </motion.div>

          {/* Animated Dots */}
          <div className="loading-dots">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="dot"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="loading-background">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-circle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
