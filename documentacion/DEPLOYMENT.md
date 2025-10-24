# Guía de Deployment - Instituto de Martilleros

## 🚀 Proceso de Build y Export

### 1. Preparar el Proyecto

```bash
# Asegurarse de que todas las dependencias están instaladas
npm install

# Verificar que no hay errores de TypeScript
npm run lint
```

### 2. Generar el Sitio Estático

```bash
# Compilar y exportar el sitio estático
npm run build

# El sitio estático se generará en la carpeta /out
```

La carpeta `/out` contendrá:
- Archivos HTML estáticos
- CSS y JavaScript optimizados
- Assets públicos (robots.txt, sitemap.xml)

## 📦 Opciones de Hosting

### Opción 1: GitHub Pages

1. **Configurar GitHub Actions** (automático)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. **Configurar GitHub Pages**
   - Ir a Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Opción 2: Netlify

1. **Deploy Manual**

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --dir=out --prod
```

2. **Deploy Automático (Conectar Repositorio)**

En Netlify Dashboard:
- New site from Git
- Conectar repositorio
- Build command: `npm run build`
- Publish directory: `out`

### Opción 3: Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

O conectar repositorio desde Vercel Dashboard.

### Opción 4: Hosting Tradicional (cPanel, FTP)

```bash
# 1. Generar sitio
npm run build

# 2. Subir todo el contenido de /out vía FTP
# - Conectar a tu servidor FTP
# - Subir todos los archivos de /out a public_html
```

## 🌐 Configuración de Dominio

### Para isftmartilleroslp.edu.ar

1. **En el Hosting**
   - Apuntar el dominio a la carpeta con los archivos del sitio
   - Configurar HTTPS/SSL

2. **DNS**
   - Configurar registros A o CNAME según el proveedor

3. **Actualizar URLs en el Código**

Si es necesario, actualizar las URLs absolutas en:
- `public/sitemap.xml`
- Meta tags de Open Graph (si incluyen URLs absolutas)

## ✅ Checklist Pre-Deploy

Antes de hacer deploy, verificar:

- [ ] `npm run build` funciona sin errores
- [ ] Todas las rutas funcionan correctamente
- [ ] Formularios muestran la UI correcta (aunque no envíen)
- [ ] Enlaces externos funcionan (Campus JURSOC, etc.)
- [ ] Responsive design funciona en todos los tamaños
- [ ] Meta tags están correctos
- [ ] Sitemap.xml tiene las URLs correctas
- [ ] Robots.txt está configurado

## 🔧 Troubleshooting

### Error: "Page not found" en rutas

**Solución**: Asegurarse de que `trailingSlash: true` está en `next.config.js`

### Error: Imágenes no cargan

**Solución**: Verificar que `images: { unoptimized: true }` está en `next.config.js`

### Error: 404 en GitHub Pages

**Solución**: Crear archivo `.nojekyll` en la raíz del sitio

```bash
# En /out después del build
touch out/.nojekyll
```

## 📊 Monitoreo Post-Deploy

Después del deploy, verificar:

1. **Performance**
   - Google PageSpeed Insights
   - GTmetrix

2. **SEO**
   - Google Search Console
   - Validar meta tags

3. **Responsive**
   - Probar en dispositivos reales
   - Usar DevTools para emular dispositivos

4. **Funcionalidad**
   - Todos los enlaces internos funcionan
   - Navegación es fluida
   - Formulario se muestra correctamente

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

```bash
# 1. Hacer cambios en el código
# 2. Commit y push
git add .
git commit -m "Descripción de cambios"
git push

# 3. El deploy se hará automáticamente (si está configurado)
# O manualmente:
npm run build
# Subir carpeta /out al hosting
```

## 📱 Testing en Producción

Después del deploy, probar:

- [ ] Página carga correctamente
- [ ] Navegación entre secciones funciona
- [ ] Responsive en mobile
- [ ] Formulario de contacto se muestra bien
- [ ] Footer con información de contacto visible
- [ ] Enlaces a Campus JURSOC funcionan
- [ ] Velocidad de carga es buena

## 🎯 URLs Importantes

- **Sitio Original**: https://isftmartilleroslp.edu.ar/
- **Campus JURSOC**: https://campus.jursoc.unlp.edu.ar/course/index.php?categoryid=136

## 📝 Notas Adicionales

- El sitio es completamente estático, no requiere servidor Node.js
- No hay variables de entorno necesarias
- No hay APIs o backends que configurar
- El formulario de contacto es solo UI (no envía datos)

---

**Última actualización**: 2023
**Mantenido por**: Instituto Superior de Formación Técnica
