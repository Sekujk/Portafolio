import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills", 
        projects: "Projects",
        contact: "Contact"
      },
      // Hero Section
      hero: {
        greeting: "Hello, I'm",
        name: "Alejandro Seclen Leonardo",
        description: "Systems Engineering student, passionate about",
        webDev: "web development",
        appDev: "app development", 
        dataAnalysis: "data analysis",
        location: "📍 Chiclayo, Peru • 9th semester",
        cta: "Get in touch",
        downloadCV: "Download CV",
        viewProjects: "View Projects"
      },
      // About Section
      about: {
        title: "About Me",
        intro: "I'm a dedicated Systems Engineering student with a passion for technology and innovation.",
        description: "Currently in my 9th semester, I have solid experience in web development, mobile applications, and data analysis. I enjoy solving complex problems and creating efficient solutions that make a real impact.",
        myInterests: "My Interests",
        interests: {
          webDev: {
            title: "Web Development",
            description: "Creating modern and responsive web applications with current technologies"
          },
          appDev: {
            title: "App Development", 
            description: "Developing mobile and desktop applications with intuitive experiences"
          },
          dataAnalysis: {
            title: "Data Analysis",
            description: "Extracting valuable insights from data for decision making"
          }
        }
      },
      // Skills Section
      skills: {
        title: "Skills & Technologies",
        subtitle: "Tools and technologies I work with",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools"
      },
      // Projects Section
      projects: {
        title: "Featured Projects",
        subtitle: "Some of my recent work",
        categories: {
          all: "All",
          web: "Web Development",
          data: "Data Analysis", 
          mobile: "Mobile Development",
          backend: "Backend",
          desktop: "Desktop Development",
          network: "Network Analysis"
        },
        viewDemo: "View Demo",
        viewCode: "View Code",
        featured: "Featured",
        project1: {
          title: "Administrative Panel for Hotel Rizzo Chiclayo",
          description: "Complete web application for inventory, sales and business reports management with interactive dashboard."
        },
        project2: {
          title: "Mobile App for World Light Gym in Chiclayo (Backend)",
          description: "Mobile app for gym clients where they can manage their training and progress, track nutrition, register for classes and make payments."
        },
        project3: {
          title: "File Manager",
          description: "Desktop application for file management with real-time synchronization and notifications, built with Electron."
        },
        project4: {
          title: "Personal Portfolio",
          description: "Responsive personal website with smooth animations and performance optimized."
        },
        project5: {
          title: "Hotel Rizzo Chiclayo Network Analysis",
          description: "Hotel network analysis with data visualization and report generation using Cisco Packet Tracer."
        },
        project6: {
          title: "CodeWars",
          description: "Web platform to solve programming challenges and improve coding skills."
        },
        noProjects: "No projects in this category at the moment."
      },
      // Contact Section
      contact: {
        title: "Let's Work Together",
        subtitle: "Ready to start your next project?",
        form: {
          name: "Your Name",
          email: "Your Email",
          message: "Your Message",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Error sending message. Please try again.",
          namePlaceholder: "Your full name",
          emailLabel: "Email address",
          emailPlaceholder: "your.email@example.com",
          messageLabel: "Message",
          messagePlaceholder: "Tell me about your project..."
        },
        info: {
          location: "Chiclayo, Peru",
          availability: "Available for projects"
        },
        availabilityDescription: "I'm currently looking for opportunities to collaborate on interesting and challenging projects.",
        locationTitle: "Location",
        statusTitle: "Status"
      },
      // Footer
      footer: {
        description: "Systems Engineering student passionate about creating innovative technological solutions.",
        quickLinks: "Quick Links",
        followMe: "Follow Me",
        copyright: "All rights reserved."
      },
      // Common
      common: {
        loading: "Loading...",
        backToTop: "Back to Top",
        and: "and",
        loadingPortfolio: "Loading portfolio...",
        preparingProjects: "Preparing projects...",
        optimizingExperience: "Optimizing experience...",
        almostReady: "Almost ready!"
      },
      // Error Boundary
      error: {
        title: "Something went wrong!",
        message: "An unexpected error has occurred. Don't worry, you can try refreshing the page or go back to home.",
        refresh: "Refresh page",
        goHome: "Go to home"
      }
    }
  },
  es: {
    translation: {
      // Navigation
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto"
      },
      // Hero Section
      hero: {
        greeting: "Hola, soy",
        name: "Alejandro Seclen Leonardo",
        description: "Ingeniero de Sistemas en formación, apasionado por el",
        webDev: "desarrollo web",
        appDev: "desarrollo de apps",
        dataAnalysis: "análisis de datos",
        location: "📍 Chiclayo, Perú • 9no ciclo",
        cta: "Contactar",
        downloadCV: "Descargar CV",
        viewProjects: "Ver Proyectos"
      },
      // About Section
      about: {
        title: "Sobre mí",
        intro: "Soy un estudiante dedicado de Ingeniería de Sistemas con pasión por la tecnología y la innovación.",
        description: "Actualmente en mi 9no ciclo, tengo experiencia sólida en desarrollo web, aplicaciones móviles y análisis de datos. Disfruto resolviendo problemas complejos y creando soluciones eficientes que generen un impacto real.",
        myInterests: "Mis intereses",
        interests: {
          webDev: {
            title: "Desarrollo Web",
            description: "Creación de aplicaciones web modernas y responsivas con tecnologías actuales"
          },
          appDev: {
            title: "Desarrollo de Apps",
            description: "Desarrollo de aplicaciones móviles y de escritorio con experiencias intuitivas"
          },
          dataAnalysis: {
            title: "Análisis de Datos",
            description: "Extracción de insights valiosos a partir de datos para la toma de decisiones"
          }
        }
      },
      // Skills Section
      skills: {
        title: "Habilidades y Tecnologías",
        subtitle: "Herramientas y tecnologías con las que trabajo",
        frontend: "Frontend",
        backend: "Backend", 
        tools: "Herramientas"
      },
      // Projects Section
      projects: {
        title: "Proyectos Destacados",
        subtitle: "Algunos de mis trabajos recientes",
        categories: {
          all: "Todos",
          web: "Desarrollo Web",
          data: "Análisis de Datos",
          mobile: "Desarrollo Móvil", 
          backend: "Backend",
          desktop: "Desarrollo de Escritorio",
          network: "Análisis de Redes"
        },
        viewDemo: "Ver Demo",
        viewCode: "Ver Código",
        featured: "Destacado",
        project1: {
          title: "Panel Administrativo para el Hotel Rizzo de Chiclayo",
          description: "Aplicación web completa para la gestión de inventarios, ventas y reportes empresariales con dashboard interactivo."
        },
        project2: {
          title: "Aplicación móvil para el Gimnasio World Light de Chiclayo (Backend)",
          description: "App móvil para la parte de clientes del Gimnasio donde podrá gestionar su entrenamiento y progreso además de realizar seguimiento a su nutrición, registro en clases y realizar pagos."
        },
        project3: {
          title: "Gestor de Archivos",
          description: "Aplicación de escritorio para gestión de archivos con sincronización en tiempo real y notificaciones, hecha con Electron."
        },
        project4: {
          title: "Portfolio Personal",
          description: "Sitio web personal responsive con animaciones suaves y optimizado para rendimiento."
        },
        project5: {
          title: "Análisis de la Red del Hotel Rizzo de Chiclayo",
          description: "Análisis de la red del hotel con visualización de datos y generación de informes mediante Cisco Packet Tracer."
        },
        project6: {
          title: "CodeWars",
          description: "Plataforma web para resolver desafíos de programación y mejorar habilidades de codificación."
        },
        noProjects: "No hay proyectos en esta categoría por el momento."
      },
      // Contact Section
      contact: {
        title: "Trabajemos Juntos",
        subtitle: "¿Listo para comenzar tu próximo proyecto?",
        form: {
          name: "Tu Nombre",
          email: "Tu Email",
          message: "Tu Mensaje",
          send: "Enviar Mensaje",
          sending: "Enviando...",
          success: "¡Mensaje enviado exitosamente!",
          error: "Error al enviar mensaje. Inténtalo de nuevo.",
          namePlaceholder: "Tu nombre completo",
          emailLabel: "Correo electrónico",
          emailPlaceholder: "tu.email@ejemplo.com",
          messageLabel: "Mensaje",
          messagePlaceholder: "Cuéntame sobre tu proyecto..."
        },
        info: {
          location: "Chiclayo, Perú",
          availability: "Disponible para nuevos proyectos"
        },
        availabilityDescription: "Actualmente estoy buscando oportunidades para colaborar en proyectos interesantes y desafiantes.",
        locationTitle: "Ubicación",
        statusTitle: "Estado"
      },
      // Footer
      footer: {
        description: "Estudiante de Ingeniería de Sistemas apasionado por crear soluciones tecnológicas innovadoras.",
        quickLinks: "Enlaces Rápidos",
        followMe: "Sígueme",
        copyright: "Todos los derechos reservados."
      },
      // Common
      common: {
        loading: "Cargando...",
        backToTop: "Volver Arriba",
        and: "y",
        loadingPortfolio: "Cargando portafolio...",
        preparingProjects: "Preparando proyectos...",
        optimizingExperience: "Optimizando experiencia...",
        almostReady: "¡Casi listo!"
      },
      // Error Boundary
      error: {
        title: "¡Algo salió mal!",
        message: "Ha ocurrido un error inesperado. No te preocupes, puedes intentar recargar la página o volver al inicio.",
        refresh: "Recargar página",
        goHome: "Ir al inicio"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es', // idioma por defecto
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    },
    
    // Performance optimizations
    load: 'languageOnly',
    preload: ['es'],
    cleanCode: true,
    
    react: {
      useSuspense: false // Avoid suspense for better performance
    }
  });

export default i18n;
