import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ModernHero from './components/ModernHero';

// Animaciones globales
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(1deg); }
  66% { transform: translateY(5px) rotate(-1deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

// Estilos globales minimalistas
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0a0a0a;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #111;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 3px;
  }

  ::selection {
    background: rgba(102, 126, 234, 0.3);
  }
`;

// Fondo animado minimalista
const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: 
    radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(52, 152, 219, 0.08) 0%, transparent 50%);
  z-index: -2;
  animation: ${gradientShift} 20s ease infinite;
  background-size: 400% 400%;
`;

// Partículas flotantes minimalistas
const FloatingParticles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.6;
  filter: blur(0.5px);

  &:nth-child(even) {
    animation: ${pulse} ${props => props.duration * 1.5}s ease-in-out infinite;
    animation-delay: ${props => props.delay}s;
  }
`;

// Barra de progreso de scroll
const ScrollProgress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transform-origin: 0%;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
`;

// Navegación moderna y minimalista
const Navigation = styled(motion.nav)`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 12px 24px;
  display: flex;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }
`;

const NavItem = styled.button`
  background: ${props => props.active ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'transparent'};
  border: none;
  color: ${props => props.active ? '#000' : '#fff'};
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => props.active ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

// Container principal
const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

// Sección con espaciado moderno
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

// Título de sección minimalista
const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

// Grid moderno para proyectos
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Componente principal
function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Navegación suave
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setActiveSection(sectionId);
  };

  // Detección de sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'testimonials'];
      const scrollPos = window.scrollY + 200;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generar partículas
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    color: `hsl(${230 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5
  }));

  // Datos de proyectos con diferentes configuraciones
  const projectsData = [
    {
      title: "Panel Administrativo Para Hotel",
      description: "Panel Administrativo para hotel con carrito, pagos y dashboard admin. Diseño minimalista y UX excepcional.",
      tags: ['Java', 'TomCat', 'HTML', 'CSS', 'JavaScript'],
      demo: "",
      repo: "https://github.com/Sekujk/HotelRizzo_PAF",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      status: "completed"
    },
    {
      title: "Gestor de Archivos Personal",
      description: "Panel interactivo en desarrollo para la subida de archivos en la nube con interfaz moderna y funcionalidades avanzadas.",
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Electron'],
      demo: "",
      repo: "https://github.com/Sekujk/Gestor-Archivos",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      status: "completed"
    },
    {
      title: "Panel Administrativo Para Gimnasio World Light",
      description: "Sistema de gestión completo para gimnasio con manejo de membresías, pagos y dashboard administrativo moderno.",
      tags: ['React', 'Node.js', 'Express'],
      demo: "",
      repo: "",
      image: "/images/gimnasio-preview.png",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      status: "preview"
    },
  ];

  return (
    <>
      <GlobalStyle />
      
      {/* Fondo animado */}
      <AnimatedBackground />
      
      {/* Partículas flotantes */}
      <FloatingParticles>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            size={particle.size}
            color={particle.color}
            duration={particle.duration}
            delay={particle.delay}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`
            }}
          />
        ))}
      </FloatingParticles>

      {/* Barra de progreso */}
      <ScrollProgress style={{ scaleX: scrollYProgress }} />

      {/* Navegación */}
      <Navigation
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {[
          { id: 'hero', label: 'Inicio' },
          { id: 'about', label: 'Sobre mí' },
          { id: 'skills', label: 'Skills' },
          { id: 'projects', label: 'Proyectos' },
          { id: 'testimonials', label: 'Testimonios' }
        ].map(item => (
          <NavItem
            key={item.id}
            active={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </NavItem>
        ))}
      </Navigation>

      <MainContainer>
        {/* Hero Section */}
        <Section id="hero">
          <ModernHero />
        </Section>

        {/* About Section */}
        <Section id="about">
          <AboutMe />
        </Section>

        {/* Skills Section */}
        <Section id="skills">
          <SkillsSection />
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <div style={{ width: '100%', maxWidth: '1400px' }}>
            <SectionTitle
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Proyectos Destacados
            </SectionTitle>
            
            <ProjectsGrid>
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  demo={project.demo}
                  repo={project.repo}
                  image={project.image}
                  gradient={project.gradient}
                  status={project.status}
                />
              ))}
            </ProjectsGrid>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials">
          <TestimonialsSection />
        </Section>

        {/* Contact Section */}
        <Section id="contact" style={{ minHeight: '50vh' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '600px' }}
          >
            <SectionTitle>¿Hablamos?</SectionTitle>
            <motion.p
              style={{ 
                fontSize: '1.2rem', 
                color: 'rgba(255,255,255,0.8)', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Estoy disponible para nuevos proyectos y oportunidades increíbles.
            </motion.p>
            <motion.a
              href="mailto:tucorreo@email.com"
              style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Contactar
            </motion.a>
          </motion.div>
        </Section>
      </MainContainer>
    </>
  );
}

export default App;