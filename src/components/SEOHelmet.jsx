import React from 'react';

const SEOHelmet = () => {
  React.useEffect(() => {
    // Set document title
    document.title = "Alejandro Seclen Leonardo - Portfolio | Ingeniero de Sistemas";
    
    // Add meta tags
    const metaTags = [
      { name: 'description', content: 'Portfolio de Alejandro Seclen Leonardo, Ingeniero de Sistemas especializado en desarrollo web, apps y análisis de datos. Chiclayo, Perú.' },
      { name: 'keywords', content: 'Alejandro Seclen, Ingeniero de Sistemas, Desarrollo Web, React, Node.js, JavaScript, Portfolio, Chiclayo, Perú' },
      { name: 'author', content: 'Alejandro Seclen Leonardo' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Spanish' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'web' },
      { name: 'rating', content: 'general' },
      
      // Open Graph
      { property: 'og:title', content: 'Alejandro Seclen Leonardo - Portfolio' },
      { property: 'og:description', content: 'Ingeniero de Sistemas en formación, apasionado por el desarrollo web, apps y análisis de datos' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'Alejandro Seclen Portfolio' },
      { property: 'og:locale', content: 'es_PE' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Alejandro Seclen Leonardo - Portfolio' },
      { name: 'twitter:description', content: 'Ingeniero de Sistemas en formación, apasionado por el desarrollo web, apps y análisis de datos' },
      
      // Mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Alejandro Portfolio' },
    ];

    // Remove existing meta tags and add new ones
    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.remove();
      }
      
      const metaTag = document.createElement('meta');
      if (tag.name) metaTag.name = tag.name;
      if (tag.property) metaTag.property = tag.property;
      metaTag.content = tag.content;
      document.head.appendChild(metaTag);
    });

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alejandro Seclen Leonardo",
      "jobTitle": "Ingeniero de Sistemas",
      "description": "Ingeniero de Sistemas en formación, especializado en desarrollo web, apps y análisis de datos",
      "url": window.location.href,
      "sameAs": [
        "https://linkedin.com/in/alejandro-seclen",
        "https://github.com/alejandroseclen"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chiclayo",
        "addressCountry": "PE"
      },
      "email": "alejoseclen@gmail.com",
      "knowsAbout": [
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "SQL Server",
        "MySQL",
        "Desarrollo Web",
        "Análisis de Datos"
      ]
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, []);

  return null;
};

export default SEOHelmet;
