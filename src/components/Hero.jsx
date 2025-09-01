import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = React.useCallback((sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Image */}
          <motion.div
            className="hero-image"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hero-avatar">
              <span>AS</span>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="hero-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1>
              {t('hero.greeting')}{' '}
              <span className="hero-name">{t('hero.name')}</span>
            </h1>
            <p className="hero-description">
              {t('hero.description')}{' '}
              <span className="highlight">{t('hero.webDev')}</span>,{' '}
              <span className="highlight">{t('hero.appDev')}</span> {t('common.and')}{' '}
              <span className="highlight">{t('hero.dataAnalysis')}</span>
            </p>
            <p className="hero-location">
              {t('hero.location')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('#projects')}
            >
              {t('hero.viewProjects')}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('#contact')}
            >
              {t('hero.cta')}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="mailto:alejoseclen@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandroseclenl/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Sekujk"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
      </div>

      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-bg-circle hero-bg-circle-1"></div>
        <div className="hero-bg-circle hero-bg-circle-2"></div>
        <div className="hero-bg-circle hero-bg-circle-3"></div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
