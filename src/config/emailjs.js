// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below

export const emailjsConfig = {
  serviceId: 'service_3t6pxw4',
  templateId: 'template_8livluk',
  publicKey: '2xcp3eVx7rrMNtlPM',
};

// Example template variables for EmailJS:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{message}} - Message content
// {{to_name}} - Your name (Alejandro Seclen)
// {{reply_to}} - Reply-to email

// Example EmailJS template:
/*
Subject: Nuevo mensaje de contacto desde tu portafolio

Hola {{to_name}},

Has recibido un nuevo mensaje de contacto desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portafolio web.
*/