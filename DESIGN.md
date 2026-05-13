# Palumbo Hormigón — Sistema de Diseño

## Colores

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#f7c915` | Amarillo marca — CTAs, bordes activos, hovers, barras decorativas |
| `--dark` | `#111111` | Texto principal, fondos oscuros (hero, footer, secciones dark) |
| `--light` | `#ffffff` | Fondo general de la página |
| Surface | `#fafafa` | Fondo de secciones alternas y cards |
| Muted text (light bg) | `text-dark/60` | Subtítulos y descripciones sobre fondo claro |
| Muted text (dark bg) | `text-white/50–60` | Subtítulos y descripciones sobre fondo oscuro |
| Borders (light) | `border-gray-200` | Separadores sobre fondo claro |
| Borders (dark) | `border-white/10` | Separadores sobre fondo oscuro |

## Tipografía

- **Familia:** Plus Jakarta Sans (Google Fonts, pesos 300–800)
- **Base font-size:** 15px (html)
- **Fallback:** `system-ui, sans-serif`

| Clase | Tailwind | Uso |
|---|---|---|
| `.section-title` | `text-3xl md:text-4xl lg:text-5xl font-black tracking-tight` | Títulos de sección |
| `.section-subtitle` | `text-base md:text-lg text-muted font-normal leading-relaxed` | Bajadas de sección |
| Tagline | `text-xs font-bold tracking-[0.3em] uppercase` | Etiqueta sobre títulos |
| Labels | `text-xs font-bold tracking-widest uppercase` | Labels de formulario y headers de columna |
| Body | `text-sm` | Texto de párrafo general |

## Espaciado

| Clase | Uso |
|---|---|
| `.section-container` | `max-w-site mx-auto px-4 sm:px-6 lg:px-12 xl:px-16` — contenedor horizontal estándar |
| `.section-padding` | `py-16 md:py-24 lg:py-32` — padding vertical de secciones |

## Botones

### `.btn-primary`
- Fondo: animación fill de derecha a izquierda — amarillo → negro
- Default: `background-position: right` (amarillo `#f7c915`, texto `#111111`)
- Hover: `background-position: left` (negro `#000000`, texto `#f7c915`)
- `background-size: 205%` — el 5% extra previene artefacto de 1px negro en borde izquierdo
- Estilo: `font-bold uppercase tracking-widest text-sm px-6 py-3`

### `.btn-outline`
- Igual que primary pero con `border-2 border-dark` y fondo inicial transparente
- Hover: rellena con negro, texto amarillo

## Componentes clave

### Hero Carousel (`HeroCarousel.tsx`)
- React + Embla Carousel, autoplay 10s
- Fondo: `#111111` oscuro
- Barra amarilla izquierda: `absolute left-0 top-0 bottom-0 w-1.5 bg-[#f7c915] z-20`
- Franja de descripción superior: `absolute top-0 z-10 bg-black/30` (en Hero.astro)
- Flechas prev/next: esquina inferior derecha, `z-20`

### Cards de hormigón (`HormigonCard.tsx`)
- Framer Motion: hover lift + borde acento
- Fondo: `#fafafa`

### Header (`Header.astro`)
- Sticky, transición transparente → sólido on scroll
- Logo: `palumbo_logo.svg` (versión oscura, sobre fondo blanco)

### Footer (`Footer.astro`)
- Fondo completo: `#111111`
- Logo: `palumbo_logo_white.svg` (blanco con detalle amarillo en la P)
- Tres secciones: top grid (brand + nav + contacto) → fila RRHH → bottom bar
- Separadores: `border-white/10`
- Hovers de links: `text-accent` (`#f7c915`)

## Animaciones

| Sistema | Uso |
|---|---|
| GSAP ScrollTrigger | Clase `.gsap-reveal` — opacity 0→1, y 32→0, `start: top 88%` |
| Lenis | Smooth scroll global, duración 1.2s |
| Framer Motion | Cards de hormigón, hover lift |
| CSS transitions | Botones (0.35s ease), links (200ms) |

## Logos

| Archivo | Uso |
|---|---|
| `/palumbo_logo.svg` | Logo original negro + amarillo — header, docs |
| `/palumbo_logo_white.svg` | Logo blanco + amarillo — footer oscuro |

## Secciones y fondos

| Sección | Fondo |
|---|---|
| Hero | `#111111` oscuro |
| Empresa | `#ffffff` blanco |
| Hormigón | `#fafafa` superficie |
| Staff Ventas | `#111111` oscuro |
| Novedades | `#ffffff` blanco |
| Galería | `#fafafa` superficie |
| Contacto | `#ffffff` blanco |
| Footer | `#111111` oscuro completo |
