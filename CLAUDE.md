# Palumbo Hormigón — Contexto del Proyecto para Claude

## Empresa
- **Nombre:** Palumbo Hormigón
- **Rubro:** Hormigón elaborado
- **Sede:** Mendoza, Argentina
- **Certificación:** ISO 9001
- **Trayectoria:** +30 años en el mercado mendocino

## Repositorio y Deploy
- **GitHub:** https://github.com/ExeGonzalez82/palumbo-mendoza
- **Rama de desarrollo:** `palumbo-redesign`
- **Rama de producción:** `main`
- **Vercel team:** `exegonzalez82s-projects` (ID: `team_DCxlPpFenKnHvHtLNzVQsxuv`)
- **Vercel project ID:** `prj_yo8YLokAl3kHPdBacXmcqp8Jfnd1`
- **URL producción:** https://palumbo-mendoza.vercel.app
- **URL preview (rama dev):** https://palumbo-mendoza-git-palumbo-redesign-exegonzalez82s-projects.vercel.app
- **Deploy:** automático — cada push a `palumbo-redesign` → Vercel redeploya la preview

## Stack técnico
| Tecnología | Uso |
|---|---|
| Astro 5 | Framework principal (SSG) |
| React 18 | Componentes interactivos |
| Tailwind CSS 3 | Estilos utilitarios |
| GSAP 3 | Animaciones scroll-triggered |
| Lenis 1 | Smooth scroll global |
| Embla Carousel 8 | Carousel del Hero |
| Framer Motion 11 | Micro-interacciones en cards |
| Vercel | Hosting + CI/CD |

## Paleta de colores
- **Fondo:** `#ffffff` (blanco)
- **Texto:** `#111111` (negro)
- **Acento:** `#f7c915` (amarillo)
- **Superficie:** `#f5f5f4` (gris muy claro, para secciones alternas)

## Estructura de páginas
- `/` — One page con 7 secciones en orden:
  1. `#hero` — Carousel Embla, 3 slides, autoplay 5.5s
  2. `#empresa` — Resumen institucional, stats, ISO 9001
  3. `#hormigon` — 12 cards (H-8 a H-45, bombeado, fibras) con Framer Motion
  4. `#staff` — 4 tarjetas del equipo de ventas (fondo oscuro)
  5. `#novedades` — 3 cards "En los medios"
  6. `#galeria` — Grid masonry (placeholders, faltan fotos reales)
  7. `#contacto` — Formulario + mapa placeholder (fondo oscuro)
- `/recomendaciones` — Guía técnica de uso + botón descarga PDF

## Estructura de carpetas
```
src/
├── components/
│   ├── Header.astro          # Sticky, transparente→sólido on scroll, hamburger mobile
│   ├── Footer.astro          # Logo, nav, contacto, ISO badge, copyright
│   ├── sections/
│   │   ├── Hero.astro        # Wrapper del carousel
│   │   ├── Empresa.astro     # Stats 2x2 grid, quote
│   │   ├── Hormigon.astro    # Grid 4 cols XL / 3 L / 2 SM / 1 mobile
│   │   ├── StaffVentas.astro # 4 cols, bg dark
│   │   ├── Novedades.astro   # 3 cards de prensa
│   │   ├── Galeria.astro     # Grid masonry con placeholders
│   │   └── Contacto.astro    # Form 3/5 + info+mapa 2/5, bg dark
│   └── ui/
│       ├── HeroCarousel.tsx  # React + Embla, autoplay, flechas prev/next
│       └── HormigonCard.tsx  # Framer Motion: hover lift + stripe acento
├── layouts/
│   └── Layout.astro          # HTML base, Lenis init, GSAP ScrollTrigger global
├── pages/
│   ├── index.astro
│   └── recomendaciones.astro
└── styles/
    └── global.css            # Tailwind + custom properties + .gsap-reveal
```

## Convenciones de código
- `.gsap-reveal` → clase para animar elementos con ScrollTrigger (opacity 0→1, y 32→0)
- `section-container` → max-width + padding horizontal responsivo
- `section-padding` → padding vertical estándar por sección
- `btn-primary` → botón amarillo con texto negro
- `btn-outline` → botón con borde, sin relleno
- Paths con alias `@/` apuntan a `src/`
- Componentes React usan `client:load` (Hero) o `client:visible` (cards)

## Flujo de trabajo acordado
1. Editar archivos en `d:\zen-x\Proyectos\palumbo-mendoza\`
2. Claude hace el `git push` a `palumbo-redesign`
3. Vercel redeploya automáticamente la preview URL
4. El usuario revisa en la preview (no trabaja en local/localhost)
5. Cuando el sitio esté listo: merge `palumbo-redesign` → `main` → producción

## Pendientes — ver TODO.md
