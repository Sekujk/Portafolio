import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Language"
    >
      <div className="language-toggle-content">
        <span className={`lang-option ${i18n.language === 'es' ? 'active' : ''}`}>
          ES
        </span>
        <span className="separator">|</span>
        <span className={`lang-option ${i18n.language === 'en' ? 'active' : ''}`}>
          EN
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;
