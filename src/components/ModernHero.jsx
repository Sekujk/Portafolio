import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Avatar = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  color: white;
  font-weight: bold;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    animation: ${blink} 2s infinite;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  letter-spacing: -2px;
`;

const TypewriterText = styled.div`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  overflow: hidden;
  border-right: 2px solid #667eea;
  white-space: nowrap;
  animation: 
    ${typewriter} 3s steps(40, end),
    ${blink} 0.75s step-end infinite;
  max-width: 100%;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 16px 32px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #000;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 8px 8px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-block;
  padding: 16px 32px;
  border: 2px solid #667eea;
  color: #667eea;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 8px 8px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;

  &:hover {
    background: #667eea;
    color: #000;
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;

  &::after {
    content: '';
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
    animation: ${keyframes`
      0% { opacity: 1; transform: translateY(0); }
      50% { opacity: 0.3; transform: translateY(8px); }
      100% { opacity: 1; transform: translateY(0); }
    `} 2s infinite;
  }
`;

const ModernHero = () => {
  const [text, setText] = useState('');
  const fullText = 'Programador en desarrollo';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <HeroContainer>
      <Avatar
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          duration: 1.2 
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <span style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: 'white',
          zIndex: 10,
          position: 'relative'
        }}>
          AS
        </span>
      </Avatar>

      <MainTitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Alejandro Seclen Leonardo
      </MainTitle>

      <TypewriterText>
        {text}
      </TypewriterText>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <CTAButton
          href="#projects"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Proyectos
        </CTAButton>
        
        <SecondaryButton
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sobre Mí
        </SecondaryButton>
      </motion.div>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </HeroContainer>
  );
};

export default ModernHero;