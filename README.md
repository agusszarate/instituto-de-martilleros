# 🎓 Instituto Superior de Formación Técnica

> Sitio web oficial del **Colegio de Martilleros y Corredores Públicos del Departamento Judicial La Plata**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.19-1890ff?logo=ant-design)](https://ant.design/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

---

## 🚀 Quick Start

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Abrir en el navegador
# → http://localhost:3000
```

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript (100% tipado, strict mode)
- **UI Library**: Ant Design v5.19
- **Estilos**: Únicamente mediante props de Ant Design
- **Tipo**: Static Site Generation (SSG)

## 🏗️ Estructura del Proyecto

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Exportar sitio estático
npm run export
```

## 🏗️ Estructura del Proyecto

```
instituto-de-martilleros/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout con ConfigProvider
│   ├── page.tsx             # Página principal
│   └── AntdRegistry.tsx     # Ant Design SSR config
├── components/
│   ├── Layout/
│   │   └── MainLayout.tsx   # Layout con Header/Footer
│   └── Sections/            # Componentes de secciones
│       ├── ValuesSection.tsx
│       ├── CareerSection.tsx
│       ├── CampusSection.tsx
│       ├── InscriptionsSection.tsx
│       ├── JobBoardSection.tsx
│       └── ContactSection.tsx
├── theme/
│   └── themeConfig.ts       # Configuración tema Ant Design
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.js
├── tsconfig.json
└── package.json
```

## ✨ Características

- ✅ **100% Responsive** - Mobile, Tablet, Desktop
- ✅ **SEO Optimizado** - Meta tags, Sitemap, Robots.txt
- ✅ **TypeScript Estricto** - Type safety completo
- ✅ **Static Site** - Sin backend, deploy en cualquier hosting
- ✅ **Ant Design** - UI profesional y accesible
- ✅ **Fidelidad Visual** - Réplica exacta del sitio original

## � Secciones Implementadas

1. **Hero** - Banner principal con CTA
2. **Nosotros** - Valores institucionales
3. **Representantes Legales** - Autoridades del instituto
4. **Carrera** - Información de Martillero Público
5. **Campus Virtual** - Acceso a material de estudio
6. **Inscripciones** - Info y descarga de documentación
7. **Bolsa de Trabajo** - Oportunidades para alumnos
8. **Contacto** - Formulario y datos de contacto
9. **Footer** - Información completa del instituto

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (http://localhost:3000)

# Producción
npm run build        # Compilar y generar sitio estático
npm run start        # Servidor de producción local

# Calidad
npm run lint         # Verificar código con ESLint
```

## 🎨 Paleta de Colores

| Color          | Uso                              | Hex       |
| -------------- | -------------------------------- | --------- |
| Azul Principal | Hero background, enlaces, iconos | `#149dcc` |
| Naranja CTA    | Botones de inscripción y envío   | `#ff4f38` |
| Blanco         | Fondo principal, texto en azul   | `#ffffff` |
| Gris Claro     | Fondos alternos                  | `#f8f9fa` |
| Gris Oscuro    | Footer background                | `#2e2e2e` |
| Negro          | Texto principal                  | `#232323` |

## 📦 Build y Deploy

### Generar Sitio Estático

```bash
npm run build
```

El sitio se generará en la carpeta `/out` listo para deploy.

### Opciones de Hosting

- **GitHub Pages** - Gratis
- **Netlify** - Gratis
- **Vercel** - Gratis
- **Hosting tradicional** - FTP/cPanel

## 🌐 Sitio Original

- **URL**: https://isftmartilleroslp.edu.ar/
- **Tipo**: Mobirise Website Builder
- **Recreado con**: Next.js + TypeScript + Ant Design

## 📞 Información de Contacto

**Instituto Superior de Formación Técnica**

- **Dirección**: Avenida 1 N° 671 e/ 45 y 46, La Plata, Buenos Aires
- **Email**: info@isftmartilleroslp.edu.ar
- **Teléfono**: (0221) 489-5604
- **WhatsApp**: 2214895604
- **Horario**: Lunes a viernes de 8:00 a 12:00 hs y de 18:00 a 20:00 hs

## 🤝 Contribuir

Este es un proyecto privado del Instituto Superior de Formación Técnica. Para cambios o sugerencias, contactar a las autoridades del instituto.

## 📄 Licencia

© 2025 ISFT - Todos los derechos reservados

---

**Desarrollado con** ❤️ **usando Next.js, TypeScript y Ant Design**
