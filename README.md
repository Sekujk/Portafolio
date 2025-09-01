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
- **Vite** - Herramienta de construcción rápida
- **Framer Motion** - Animaciones y transiciones
- **React Icons** - Iconos modernos y escalables
- **EmailJS** - Servicio de envío de emails
- **i18next** - Internacionalización
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
git clone https://github.com/Sekujk/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```
Edita el archivo `.env` con tus credenciales de EmailJS y otros servicios.

### Configuración de EmailJS

Para que el formulario de contacto funcione correctamente:

1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta
2. Crea un nuevo servicio (Gmail, Outlook, etc.)
3. Crea una plantilla de email con las siguientes variables:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{message}}` - Mensaje
   - `{{to_name}}` - Tu nombre
4. Obtén tu Service ID, Template ID y Public Key
5. Actualiza el archivo `.env` con estos valores

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Vite
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de código

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
│   ├── ParticleBackground.jsx # Fondo de partículas
│   └── *.css             # Estilos de cada componente
├── config/
│   └── emailjs.js        # Configuración de EmailJS
├── App.jsx               # Componente principal
├── App.css              # Estilos globales de la app
├── i18n.js              # Configuración de internacionalización
├── index.jsx            # Punto de entrada
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
- **LinkedIn**: [linkedin.com/in/alejandroseclenl](https://www.linkedin.com/in/alejandroseclenl/)
- **GitHub**: [github.com/Sekujk](https://github.com/Sekujk)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Hecho con ❤️ por Alejandro Seclen Leonardo en Chiclayo, Perú
