import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || 'linear-gradient(90deg, #667eea, #764ba2)'};
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  background: ${props => props.image 
    ? `url(${props.image}) center/cover no-repeat` 
    : 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))'
  };
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
  }

  ${Card}:hover &::after {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  transition: color 0.3s;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  padding: 4px 12px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #8b9bff;
  font-weight: 500;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectButton = styled(motion.a)`
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
  display: inline-block;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  
  &.primary {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: #000;
    
    &:hover {
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
  }
  
  &.secondary {
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 0.9);
    background: transparent;
    
    &:hover {
      border-color: #667eea;
      color: #667eea;
      background: rgba(102, 126, 234, 0.1);
    }
  }

  &.image-only {
    border: 1.5px solid rgba(255, 193, 7, 0.5);
    color: #ffc107;
    background: rgba(255, 193, 7, 0.1);
    
    &:hover {
      border-color: #ffc107;
      background: rgba(255, 193, 7, 0.2);
    }
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 6px 12px;
  background: rgba(255, 193, 7, 0.2);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 15px;
  font-size: 0.8rem;
  color: #ffc107;
  font-weight: 500;
`;

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  demo, 
  repo, 
  image, 
  gradient,
  status = 'completed' // 'completed', 'in-progress', 'preview'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hasDemo = demo && demo.trim() !== '';
  const hasRepo = repo && repo.trim() !== '';
  const hasImage = image && image.trim() !== '';
  const isPreviewOnly = !hasDemo && !hasRepo && hasImage;

  const getStatusText = () => {
    switch (status) {
      case 'in-progress':
        return 'En Desarrollo';
      case 'preview':
        return 'Vista Previa';
      default:
        return null;
    }
  };

  return (
    <Card
      gradient={gradient}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {getStatusText() && <StatusBadge>{getStatusText()}</StatusBadge>}
      
      {hasImage && <ProjectImage image={image} />}
      
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
      
      <ButtonsContainer>
        {hasDemo && (
          <ProjectButton 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Demo
          </ProjectButton>
        )}
        
        {hasRepo && (
          <ProjectButton 
            href={repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Código
          </ProjectButton>
        )}
        
        {isPreviewOnly && (
          <ProjectButton 
            className="image-only"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            as="div"
            style={{ cursor: 'default' }}
          >
            Vista Previa
          </ProjectButton>
        )}
        
        {!hasDemo && !hasRepo && !hasImage && (
          <ProjectButton 
            className="secondary"
            disabled
            style={{ cursor: 'default' }}
          >
            Próximamente
          </ProjectButton>
        )}
      </ButtonsContainer>
    </Card>
  );
};

export default ProjectCard;