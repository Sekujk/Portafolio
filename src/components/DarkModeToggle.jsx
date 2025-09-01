import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      <motion.div
        className="toggle-track"
        animate={{
          backgroundColor: isDark ? '#374151' : '#e5e7eb'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          animate={{
            x: isDark ? 24 : 0,
            backgroundColor: isDark ? '#1f2937' : '#ffffff'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="toggle-icon"
            animate={{
              rotate: isDark ? 180 : 0,
              scale: isDark ? 0.8 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <FaMoon /> : <FaSun />}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
