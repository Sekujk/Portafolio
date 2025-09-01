import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = React.useMemo(() => [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: '/images/sistema-gestion.png',
      technologies: ['React', 'Node.js', 'MySQL', 'CSS3'],
      category: 'Web Development',
      github: 'https://github.com/Sekujk/HotelRizzo_PAF',
      demo: 'https://sistema-gestion-demo.netlify.app',
      featured: true
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: '/images/app-gym.png',
      technologies: ['React Native', 'Node.js', 'MySQL', 'Express'],
      category: 'Mobile Development',
      featured: true
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: '/images/gestor-archivos.png',
      technologies: ['Electron', 'Node.js', 'JavaScript', 'CSS3'],
      category: 'Desktop Development',
      github: 'https://github.com/Sekujk/Gestor-Archivos',
      featured: false
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: '/images/portfolio.png',
      technologies: ['React', 'Framer Motion', 'CSS3', 'HTML5'],
      category: 'Web Development',
      github: 'https://github.com/Sekujk/Portafolio',
      demo: 'https://portafoliozzz.netlify.app/',
      featured: false
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      image: '/images/analisis-red.png',
      technologies: ['Cisco Packet Tracer', 'Network Analysis', 'Wireshark', 'Documentation'],
      category: 'Network Analysis',
      featured: false
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      image: '/images/codewars.png',
      technologies: ['React', 'Node.js', 'JavaScript', 'CSS3'],
      category: 'Web Development',
      github: 'https://github.com/alejandroseclen/codewars-platform',
      demo: 'https://codequestempren01.netlify.app/',
      featured: false
    }
  ], [t]);

  const categories = [
    t('projects.categories.all'),
    t('projects.categories.web'),
    t('projects.categories.data'),
    t('projects.categories.mobile'),
    t('projects.categories.backend'),
    t('projects.categories.desktop'),
    t('projects.categories.network')
  ];
  const [activeCategory, setActiveCategory] = React.useState('');
  const [filteredProjects, setFilteredProjects] = React.useState([]);

  // Initialize and update activeCategory when translations change
  React.useEffect(() => {
    setActiveCategory(t('projects.categories.all'));
  }, [t]);

  const getCategoryMapping = React.useCallback((translatedCategory) => {
    const mapping = {
      [t('projects.categories.web')]: 'Web Development',
      [t('projects.categories.data')]: 'Data Analysis',
      [t('projects.categories.mobile')]: 'Mobile Development',
      [t('projects.categories.backend')]: 'Backend',
      [t('projects.categories.desktop')]: 'Desktop Development',
      [t('projects.categories.network')]: 'Network Analysis'
    };
    return mapping[translatedCategory] || translatedCategory;
  }, [t]);

  React.useEffect(() => {
    if (activeCategory && projects.length > 0) {
      if (activeCategory === t('projects.categories.all')) {
        setFilteredProjects(projects);
      } else {
        const englishCategory = getCategoryMapping(activeCategory);
        setFilteredProjects(projects.filter(project => project.category === englishCategory));
      }
    }
  }, [activeCategory, t, projects, getCategoryMapping]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development':
        return <FaCode />;
      case 'Data Analysis':
        return <FaDatabase />;
      case 'Mobile Development':
        return <FaMobile />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div
          className="projects-header text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t('projects.title')}</h2>
          <div className="section-divider"></div>
          <p>{t('projects.subtitle')}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {project.featured && (
                <div className="featured-badge">
                  {t('projects.featured')}
                </div>
              )}
              
              <div className="project-image">
                <div className="project-placeholder">
                  {getCategoryIcon(project.category)}
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={t('projects.viewCode')}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={t('projects.viewDemo')}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">
                  {project.category}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p>{t('projects.noProjects')}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
