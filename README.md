# Portfolio - Alejandro Seclen Leonardo

Un portafolio web profesional, moderno y optimizado construido con React y Framer Motion.

## 🚀 Características

- **Diseño moderno y responsive** - Funciona perfectamente en dispositivos móviles y de escritorio
- **Animaciones suaves** - Implementadas con Framer Motion para una experiencia fluida
- **Optimizado para rendimiento** - Código limpio y optimizado para obtener excelentes puntuaciones en Lighthouse
- **Navegación intuitiva** - Menú fijo con scroll suave entre secciones
- **Formulario de contacto funcional** - Sistema de contacto integrado
- **SEO optimizado** - Meta tags y estructura semántica

## 🛠️ Tecnologías utilizadas

- **React 18** - Biblioteca principal de JavaScript
- **Framer Motion** - Animaciones y transiciones
- **React Icons** - Iconos modernos y escalables
- **CSS3** - Estilos personalizados con variables CSS
- **HTML5** - Estructura semántica

## 📱 Secciones

1. **Hero/Inicio** - Presentación personal con foto de perfil y CTAs
2. **Sobre mí** - Información personal, biografía e intereses
3. **Habilidades** - Tecnologías y herramientas con barras de progreso
4. **Proyectos** - Portafolio de proyectos con filtros por categoría
5. **Contacto** - Formulario de contacto y información de contacto
6. **Footer** - Links adicionales y redes sociales

## 🚀 Instalación y uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/alejandroseclen/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

### Scripts disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de Create React App

## 📂 Estructura del proyecto

```
src/
├── components/
│   ├── Navigation.jsx      # Navegación principal
│   ├── Hero.jsx           # Sección de inicio
│   ├── About.jsx          # Sección sobre mí
│   ├── Skills.jsx         # Sección de habilidades
│   ├── Projects.jsx       # Sección de proyectos
│   ├── Contact.jsx        # Sección de contacto
│   ├── Footer.jsx         # Pie de página
│   └── *.css             # Estilos de cada componente
├── App.jsx               # Componente principal
├── App.css              # Estilos globales de la app
├── index.js             # Punto de entrada
└── index.css            # Estilos base y variables CSS
```

## 🎨 Personalización

### Colores
Los colores principales se definen en `src/index.css` usando variables CSS:

```css
:root {
  --primary-blue: #2563eb;
  --primary-blue-dark: #1d4ed8;
  --primary-blue-light: #3b82f6;
  --secondary-gray: #6b7280;
  --light-gray: #f9fafb;
  --text-dark: #1f2937;
  --text-light: #6b7280;
}
```

### Contenido
Para personalizar el contenido:

1. **Información personal**: Edita los datos en `Hero.jsx` y `About.jsx`
2. **Habilidades**: Modifica el array `skillCategories` en `Skills.jsx`
3. **Proyectos**: Actualiza el array `projects` en `Projects.jsx`
4. **Contacto**: Cambia la información en `Contact.jsx`

## 📈 Optimización de rendimiento

- **Lazy loading** de imágenes
- **Code splitting** automático con React
- **CSS optimizado** con variables personalizadas
- **Animaciones eficientes** con Framer Motion
- **Estructura semántica** para mejor SEO

## 🌐 Despliegue

### Netlify (Recomendado)
1. Construye el proyecto: `npm run build`
2. Arrastra la carpeta `build` a Netlify
3. Configura el dominio personalizado si es necesario

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### GitHub Pages
1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Agrega a package.json:
```json
"homepage": "https://tuusuario.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Ejecuta: `npm run deploy`

## 📞 Contacto

- **Email**: alejoseclen@gmail.com
- **LinkedIn**: [linkedin.com/in/alejandro-seclen](https://linkedin.com/in/alejandro-seclen)
- **GitHub**: [github.com/alejandroseclen](https://github.com/alejandroseclen)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Hecho con ❤️ por Alejandro Seclen Leonardo en Chiclayo, Perú
