# TAIKO — Landing Page

> SaaS de digitalización para pequeñas y medianas empresas mediante Inteligencia Artificial.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=flat-square)

---

## Descripción

**TAIKO** es una plataforma SaaS orientada al pequeño y mediano comercio que combina dos productos principales:

- **Gestión de catálogo inteligente** — panel de administración sin código para gestionar productos, con importación masiva via CSV.
- **Asistente de IA con RAG** — chatbot que conoce el catálogo en profundidad y atiende a clientes en lenguaje natural, disponible 24/7 en WhatsApp Business, Telegram y web embebida.

Este repositorio contiene la **landing page** del producto, desarrollada como parte del **Trabajo de Fin de Grado (TFG)** del ciclo formativo de Desarrollo de Aplicaciones Multiplataforma (DAM).

---

## Capturas de pantalla

| Hero | Servicios | Demos |
|------|-----------|-------|
| Sección principal con mockup de chat y orbs animados | Tres tarjetas de servicio con card destacada | Demos interactivas por sector (concesionario, moda) |

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 18.3 | UI declarativa por componentes |
| [Vite](https://vite.dev/) | 6.x | Bundler y servidor de desarrollo |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Estilos utilitarios |
| [lucide-react](https://lucide.dev/) | 0.511 | Iconografía SVG |
| [PostCSS](https://postcss.org/) | 8.x | Procesado de CSS |

---

## Estructura del proyecto

```
taiko_landing/
├── index.html                  # Punto de entrada HTML con fuentes Google
├── package.json
├── vite.config.js
├── tailwind.config.js          # Colores y fuentes personalizados
├── postcss.config.js
│
├── public/
│   └── uploads/
│       ├── favicon.png         # Logo sin fondo (generado con PIL)
│       ├── logoTaiko.png
│       └── logoTaiko-transparent.png
│
└── src/
    ├── main.jsx                # Entrada React
    ├── App.jsx                 # Composición de secciones + hook reveal
    ├── index.css               # Animaciones, glass-nav, grad-text, noise
    │
    ├── hooks/
    │   └── useReveal.js        # IntersectionObserver para scroll-reveal
    │
    └── components/
        ├── Icon.jsx            # Wrapper de lucide-react con mapa de nombres
        ├── Navbar.jsx          # Navbar fija con glass-blur y menú móvil
        ├── Hero.jsx            # Hero oscuro con orbs, mockup de chat y CTA
        ├── Services.jsx        # Tres tarjetas de producto (card central destacada)
        ├── Integrations.jsx    # WhatsApp, Telegram y Web con banner CTA
        ├── Demos.jsx           # Cards de demos interactivas por sector
        ├── About.jsx           # Historia y valores del proyecto
        ├── Contact.jsx         # Formulario con validación y estado de envío
        └── Footer.jsx          # Navegación, contacto y copyright
```

---

## Inicio rápido

### Requisitos

- Node.js ≥ 18
- npm ≥ 9

### Instalación

```bash
git clone https://github.com/Guillegas/Taiko-Landing.git
cd Taiko-Landing
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

### Producción

```bash
npm run build    # genera /dist
npm run preview  # sirve el build localmente
```

---

## Secciones de la landing

### Hero
Sección principal con fondo oscuro (`#060e22`), orbs animados en CSS, overlay de grid y un mockup interactivo de conversación con el asistente. Incluye señales de confianza (datos seguros, configuración rápida, soporte).

### Servicios
Tres tarjetas en grid de 3 columnas:
1. **Gestión de Catálogo** — panel sin código, importación CSV
2. **Asistente Inteligente con IA** — chatbot RAG, NLP, 24/7 *(tarjeta destacada)*
3. **Multiplataforma** — WhatsApp, Telegram, web embebida

### Integraciones
Sección oscura con cards de canal (WhatsApp, Telegram, Web) y un banner inferior con CTA hacia el formulario de contacto.

### Demos interactivas
Cards por caso de uso real. La demo de **Concesionario de Coches** enlaza a la aplicación desplegada. La demo de **Tienda de Zapatillas** está marcada como próximamente.

### Nosotros
Historia del proyecto, misión y tres valores core (Accesibilidad, Simplicidad, Crecimiento real).

### Contacto
Formulario con validación en cliente (nombre, email, negocio, mensaje), estados `idle → sending → sent` y mensaje de confirmación visual.

### Footer
Logo, navegación secundaria, email de contacto y copyright.

---

## Características técnicas destacadas

**Scroll reveal con IntersectionObserver**
El hook `useReveal` observa todos los elementos con la clase `.reveal` y añade `.visible` al entrar en el viewport, disparando una animación `fadeUp` por CSS.

**Glass-morphism en la navbar**
La barra de navegación usa `backdrop-filter: blur(20px) saturate(180%)` con un fondo semitransparente que aumenta su opacidad al hacer scroll.

**Favicon con fondo transparente**
El icono del navegador se generó procesando el logo original con Python PIL: eliminación de píxeles blancos con tolerancia y suavizado de bordes mediante canal alpha variable.

**Diseño dark/light por secciones**
Alternancia entre secciones oscuras (`#060e22`) y claras (`#f8faff`) para crear ritmo visual sin romper la coherencia de marca azul.

---

## Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| `brand` | `#2563eb` | Azul principal, botones, acentos |
| `brand-deep` | `#1e40af` | Gradientes y hover |
| `brand-navy` | `#0f1e3d` | Fondos de tarjetas |
| `brand-hero` | `#060e22` | Fondo de secciones oscuras |

Fuentes: **Sora** (titulares) · **DM Sans** (cuerpo)

---

## Demo en vivo

La demo de concesionario está disponible en:
**[https://frontend-xi-navy-88.vercel.app/](https://frontend-xi-navy-88.vercel.app/)**

---

## Autor

**Guillermo Andújar** — TFG DAM · 2026  
[GitHub](https://github.com/Guillegas)

---

*Este proyecto forma parte del Trabajo de Fin de Grado del ciclo de Desarrollo de Aplicaciones Multiplataforma.*
