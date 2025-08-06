import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
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
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: #667eea;
    font-family: 'Georgia', serif;
    line-height: 1;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  font-style: italic;
  margin-top: 1rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  color: white;
  font-weight: bold;
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: #8b9bff;
  margin-bottom: 0.2rem;
`;

const AuthorRole = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Star = styled.span`
  color: #ffd700;
  font-size: 1.2rem;
`;

const SkillsSection = styled(motion.div)`
  margin-top: 4rem;
  text-align: center;
`;

const SkillsTitle = styled.h3`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
  font-weight: 500;
`;

const SkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SkillBadge = styled(motion.div)`
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.9rem;
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    color: #8b9bff;
    transform: translateY(-2px);
    background: rgba(102, 126, 234, 0.08);
  }
`;

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Alex es un estudiante muy dedicado y proactivo. Durante nuestros proyectos colaborativos en la universidad, siempre demostró gran capacidad para resolver problemas complejos y aprender nuevas tecnologías rápidamente.",
      author: "Prof. Luis Martínez",
      role: "Docente de Ingeniería de Software",
      avatar: "LM",
      rating: 5
    },
    {
      text: "He colaborado con Alex en varios proyectos de clase y su enfoque meticuloso y creatividad para encontrar soluciones elegantes siempre me impresiona. Tiene un gran futuro como desarrollador.",
      author: "Sofia Chen",
      role: "Compañera de Estudios",
      avatar: "SC",
      rating: 5
    },
    {
      text: "Alex completó su práctica pre-profesional con nosotros y quedamos muy satisfechos. Su capacidad de adaptación, ganas de aprender y la calidad de su código nos sorprendieron gratamente.",
      author: "Diego Vargas",
      role: "Senior Developer @ DevStudio",
      avatar: "DV",
      rating: 5
    }
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js", 
    "Python",
    "Git",
    "HTML/CSS",
    "SQL",
    "MongoDB"
  ];

  return (
    <TestimonialsContainer>
      <Title
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Lo que dicen de mí
      </Title>

      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <StarsContainer>
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                >
                  <Star>★</Star>
                </motion.span>
              ))}
            </StarsContainer>
            
            <TestimonialText>{testimonial.text}</TestimonialText>
            
            <TestimonialAuthor>
              <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
              <AuthorInfo>
                <AuthorName>{testimonial.author}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>

      {/* Sección de habilidades técnicas */}
      <SkillsSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SkillsTitle>
          Tecnologías que manejo
        </SkillsTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillBadge
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </SkillBadge>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;