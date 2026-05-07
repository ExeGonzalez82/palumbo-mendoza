# TODO — Palumbo Hormigón Website

> Rama activa: `palumbo-redesign` | Preview: https://palumbo-mendoza-git-palumbo-redesign-exegonzalez82s-projects.vercel.app

---

## CONTENIDO REAL (reemplazar placeholders)
- [ ] Dirección física de la planta (para footer, contacto y mapa)
- [ ] Teléfonos reales del equipo comercial
- [ ] Emails reales del equipo comercial
- [ ] Nombres reales del staff de ventas y sus zonas
- [ ] Texto institucional definitivo (historia, misión, valores)
- [ ] Stats reales (años, m³ entregados, obras realizadas)
- [ ] Artículos de prensa reales (sección Novedades)
- [ ] Copy definitivo para las 12 cards de hormigón

---

## IMÁGENES Y MULTIMEDIA
- [ ] Fotos reales de la planta / equipos / camiones mixer
- [ ] Fotos de obra (para galería)
- [ ] Imágenes de fondo para los 3 slides del Hero (reemplazar gradientes)
- [ ] Fotos o avatares del equipo de ventas
- [ ] OG Image real (1200×630 px) para redes sociales → `/public/og-image.jpg`
- [ ] Logo oficial en SVG (reemplazar favicon PH actual)

---

## FUNCIONALIDADES PENDIENTES
- [ ] **Google Maps embed** — insertar iframe con coordenadas reales de la planta
- [ ] **Formulario de contacto** — integrar servicio de email:
  - Opciones: Resend, Formspree, Netlify Forms
  - Debe enviar email al recibir el form
- [ ] **PDF Recomendaciones** — subir archivo a `/public/recomendaciones.pdf`
- [ ] **Galería con lightbox** — abrir fotos en pantalla completa al hacer click
- [ ] **Página 404** — crear `src/pages/404.astro` con diseño propio
- [ ] **Cookie banner** — cumplimiento legal básico (si aplica)

---

## SEO — ALTA PRIORIDAD
- [ ] **JSON-LD / Schema.org** — agregar structured data en `<head>`:
  - `LocalBusiness` con nombre, dirección, teléfono, coordenadas, horarios
  - `Organization` con logo y redes sociales
  - `BreadcrumbList` para `/recomendaciones`
- [ ] **Sitemap.xml** — instalar `@astrojs/sitemap` y configurar `site` en `astro.config.mjs`
- [ ] **robots.txt** — crear `/public/robots.txt`
- [ ] **Meta descriptions** únicas por página (ajustar cuando haya copy definitivo)
- [ ] **Títulos** optimizados con keyword principal (ej: "Hormigón Elaborado Mendoza")
- [ ] **Alt text** en todas las imágenes cuando se agreguen
- [ ] **Canonical URLs** — ya configurado en Layout, verificar cuando haya dominio real
- [ ] **Heading hierarchy** — revisar H1/H2/H3 en cada sección

---

## GEO / SEO LOCAL — ALTA PRIORIDAD
- [ ] **Google Business Profile** — verificar o crear ficha de Google Maps del negocio
- [ ] **NAP consistente** — Nombre, Dirección, Teléfono idénticos en web y GBP
- [ ] **Keywords locales** en copy — "hormigón elaborado Mendoza", "hormigonera Mendoza", etc.
- [ ] **Schema LocalBusiness** con `geo` (latitud/longitud de la planta)
- [ ] **Citas locales** — directorios de empresas mendocinas y de construcción

---

## GOOGLE SEARCH CONSOLE
- [ ] Verificar propiedad del dominio en Search Console
- [ ] Enviar sitemap.xml
- [ ] Revisar cobertura de URLs indexadas post-lanzamiento
- [ ] Configurar alertas de errores

---

## PERFORMANCE & CORE WEB VITALS
- [ ] Optimizar imágenes: formato WebP, lazy loading, dimensiones correctas
- [ ] Usar componente `<Image>` de Astro para todas las imágenes
- [ ] Revisar Lighthouse score (objetivo: 90+ en Performance, SEO, A11y)
- [ ] Verificar Core Web Vitals (LCP, CLS, INP) en Vercel Analytics
- [ ] Activar **Vercel Analytics** en el dashboard

---

## ANALYTICS
- [ ] Activar Vercel Analytics (Speed Insights + Web Analytics) en dashboard Vercel
- [ ] Evaluar agregar Google Analytics 4 si se necesita más detalle

---

## DISEÑO & UX — REFINAMIENTOS
- [ ] Animaciones GSAP: ajustar timings y easing cuando haya contenido real
- [ ] Galería: decidir entre masonry, grid uniforme o carrusel
- [ ] Hero: video de fondo como opción (si hay material de planta/obra)
- [ ] Sección Empresa: agregar foto/imagen de la planta como elemento visual
- [ ] Modo de impresión: básico CSS @print si se necesita
- [ ] Revisar contraste de colores (WCAG AA mínimo)

---

## INFRAESTRUCTURA & LANZAMIENTO
- [ ] **Dominio personalizado** — configurar en Vercel si se tiene (ej: palumbo.com.ar)
- [ ] **SSL** — Vercel lo provee automáticamente al conectar dominio
- [ ] **Variables de entorno** — configurar en Vercel dashboard (keys del form, etc.)
- [ ] **Merge final** `palumbo-redesign` → `main` para activar producción
- [ ] **Redirect** www → apex (o viceversa) en Vercel
- [ ] Testing pre-lanzamiento:
  - [ ] Chrome, Firefox, Safari, Edge
  - [ ] iOS Safari, Android Chrome
  - [ ] Formulario de contacto end-to-end
  - [ ] Todos los links y anclas

---

## ESTADO GENERAL
| Sección | Estado |
|---|---|
| Scaffold + estructura | ✅ Completo |
| Header / Footer | ✅ Completo (placeholder data) |
| Hero carousel | ✅ Completo (sin fotos reales) |
| Sección Empresa | ✅ Completo (placeholder data) |
| Sección Hormigón 12 cards | ✅ Completo |
| Sección Staff | ✅ Completo (placeholder data) |
| Sección Novedades | ✅ Completo (placeholder data) |
| Sección Galería | ✅ Estructura (sin fotos) |
| Sección Contacto | ✅ Estructura (form no conectado, mapa placeholder) |
| Página /recomendaciones | ✅ Completo (sin PDF) |
| Vercel deploy automático | ✅ Activo |
| SEO técnico | 🔲 Pendiente |
| Contenido real | 🔲 Pendiente |
| Imágenes reales | 🔲 Pendiente |
| Formulario funcional | 🔲 Pendiente |
| Google Search Console | 🔲 Pendiente |
