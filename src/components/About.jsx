import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCode, FaChartLine, FaMobile } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const interests = [
    {
      icon: <FaCode />,
      title: t('about.interests.webDev.title'),
      description: t('about.interests.webDev.description')
    },
    {
      icon: <FaMobile />,
      title: t('about.interests.appDev.title'),
      description: t('about.interests.appDev.description')
    },
    {
      icon: <FaChartLine />,
      title: t('about.interests.dataAnalysis.title'),
      description: t('about.interests.dataAnalysis.description')
    }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          className="about-header text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t('about.title')}</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-intro">
              <div className="about-icon">
                <FaGraduationCap />
              </div>
              <div className="about-info">
                <h3>{t('about.title')}</h3>
                <p>{t('about.intro')}</p>
                <p>{t('about.description')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-interests"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>{t('about.myInterests')}</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  className="interest-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="interest-icon">
                    {interest.icon}
                  </div>
                  <h4>{interest.title}</h4>
                  <p>{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote>
            "La tecnología es mejor cuando acerca a las personas"
          </blockquote>
          <cite>- Matt Mullenweg</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
