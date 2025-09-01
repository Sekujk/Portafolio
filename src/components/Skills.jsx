import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase
} from 'react-icons/fa';
import { 
  SiMysql, 
  SiPostman,
  SiXampp
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = React.useMemo(() => {
    const categories = [
      {
        id: 'frontend',
        title: t('skills.frontend'),
        skills: [
          { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 90 },
          { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 85 },
          { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 80 },
          { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 75 }
        ]
      },
      {
        id: 'backend',
        title: t('skills.backend'),
        skills: [
          { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 70 },
          { name: 'SQL Server', icon: <FaDatabase />, color: '#CC2927', level: 75 },
          { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 80 }
        ]
      },
      {
        id: 'tools',
        title: t('skills.tools') || 'Tools',
        skills: [
          { name: 'XAMPP', icon: <SiXampp />, color: '#FB7A24', level: 85 },
          { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', level: 80 }
        ]
      }
    ];
    
    return categories;
  }, [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div
          className="skills-header text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t('skills.title')}</h2>
          <div className="section-divider"></div>
          <p>{t('skills.subtitle')}</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-progress">
                        <div className="skill-progress-bg">
                          <motion.div
                            className="skill-progress-fill"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
