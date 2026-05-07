import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    tagline: 'Certificado ISO 9001',
    title: 'Hormigón Elaborado\nde Calidad',
    subtitle:
      'Más de 30 años construyendo la infraestructura de Mendoza. Tecnología de vanguardia y control de calidad en cada entrega.',
    cta: 'Conocé nuestros productos',
    ctaHref: '/#hormigon',
    bg: 'from-neutral-900 via-neutral-800 to-neutral-900',
    accent: 'Confianza. Resistencia. Precisión.',
  },
  {
    tagline: 'Planta en Mendoza',
    title: 'Entrega en Obra\nPuntual y Segura',
    subtitle:
      'Flota propia de camiones mixer para garantizar la llegada del hormigón en el tiempo y condiciones que tu proyecto necesita.',
    cta: 'Hablá con nuestro equipo',
    ctaHref: '/#staff',
    bg: 'from-neutral-950 via-stone-900 to-neutral-900',
    accent: 'Logística. Puntualidad. Servicio.',
  },
  {
    tagline: 'Proyectos de gran escala',
    title: 'Soluciones para\nCada Estructura',
    subtitle:
      'Desde fundaciones residenciales hasta grandes obras de infraestructura. Hormigones H-8 a H-45, bombeado, con fibra y más.',
    cta: 'Solicitá tu cotización',
    ctaHref: '/#contacto',
    bg: 'from-stone-900 via-neutral-900 to-zinc-900',
    accent: 'H-8 · H-20 · H-30 · H-45 · Bombeado.',
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 5500);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    emblaApi.on('pointerDown', stopAutoplay);
    emblaApi.on('pointerUp', startAutoplay);
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    stopAutoplay();
    emblaApi?.scrollPrev();
    startAutoplay();
  }, [emblaApi, stopAutoplay, startAutoplay]);

  const scrollNext = useCallback(() => {
    stopAutoplay();
    emblaApi?.scrollNext();
    startAutoplay();
  }, [emblaApi, stopAutoplay, startAutoplay]);

  return (
    <div className="relative w-full h-full">
      {/* Viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`flex-none w-full h-full bg-gradient-to-br ${slide.bg} flex items-center`}
            >
              {/* Decorative grain overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')] pointer-events-none" />

              {/* Yellow accent vertical bar */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#f7c915]" />

              <div className="section-container w-full relative z-10">
                <div className="max-w-3xl">
                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block w-8 h-px bg-[#f7c915]" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#f7c915]">
                      {slide.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 whitespace-pre-line">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-8">
                    {slide.subtitle}
                  </p>

                  {/* Accent text */}
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-8">
                    {slide.accent}
                  </p>

                  {/* CTA */}
                  <a
                    href={slide.ctaHref}
                    className="inline-flex items-center gap-3 bg-[#f7c915] text-[#111111] font-bold px-7 py-4 text-sm uppercase tracking-widest transition-all duration-200 hover:bg-yellow-400 hover:gap-4"
                  >
                    {slide.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow controls */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-16 xl:right-20 flex gap-2 z-20">
        <button
          onClick={scrollPrev}
          className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#111111] transition-all duration-200"
          aria-label="Slide anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-[#f7c915] hover:border-[#f7c915] hover:text-[#111111] transition-all duration-200"
          aria-label="Siguiente slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </div>
  );
}
