import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="not-found">
      <div className="not-found-container">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Animation */}
          <motion.div
            className="error-code"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="four">4</span>
            <motion.div
              className="zero"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              0
            </motion.div>
            <span className="four">4</span>
          </motion.div>

          {/* Error Icon */}
          <motion.div
            className="error-icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaExclamationTriangle />
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="error-message"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h1>¡Oops! Página no encontrada</h1>
            <p>
              La página que estás buscando no existe o ha sido movida. 
              No te preocupes, puedes regresar al inicio y explorar mi portafolio.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="error-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={scrollToTop}
              className="btn btn-primary"
            >
              <FaHome />
              Ir al inicio
            </button>
            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary"
            >
              Volver atrás
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="helpful-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3>Páginas populares:</h3>
            <ul>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="error-bg">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
