import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <h3>{t('hero.name')}</h3>
              <p>{t('footer.description')}</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>{t('footer.quickLinks')}</h4>
                <ul>
                  <li><a href="#hero">{t('nav.home')}</a></li>
                  <li><a href="#about">{t('nav.about')}</a></li>
                  <li><a href="#skills">{t('nav.skills')}</a></li>
                  <li><a href="#projects">{t('nav.projects')}</a></li>
                  <li><a href="#contact">{t('nav.contact')}</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{t('nav.contact')}</h4>
                <ul>
                  <li>
                    <a href="mailto:alejoseclen@gmail.com">
                      alejoseclen@gmail.com
                    </a>
                  </li>
                  <li>{t('contact.info.location')}</li>
                  <li>{t('contact.info.availability')}</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{t('footer.followMe')}</h4>
                <div className="footer-social">
                  <a
                    href="https://github.com/Sekujk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alejandroseclenl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:alejoseclen@gmail.com"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="footer-copyright">
              <p>
                © {currentYear} {t('hero.name')}. {t('footer.copyright')}
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="scroll-to-top"
              aria-label={t('common.backToTop')}
            >
              <FaArrowUp />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
