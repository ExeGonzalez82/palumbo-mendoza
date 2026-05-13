import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    tagline: 'Hormigón Elaborado · Mendoza',
    title: ['Calidad que', 'resiste'],
    titleAccent: 'el tiempo',
    subtitle:
      'Más de 30 años construyendo la infraestructura de Mendoza con tecnología de vanguardia y control de calidad certificado ISO 9001:2015.',
    cta: 'Conocé nuestros hormigones',
    ctaHref: '/#hormigon',
    accent: 'Confianza · Resistencia · Precisión',
    bgLabel: '+30',
  },
  {
    tagline: 'Planta en Luján de Cuyo',
    title: ['Entrega en obra', 'puntual'],
    titleAccent: 'y segura',
    subtitle:
      'Flota propia de camiones mixer para garantizar la llegada del hormigón en el tiempo y condiciones que tu proyecto necesita.',
    cta: 'Hablá con nuestro equipo',
    ctaHref: '/#contacto',
    accent: 'Logística · Puntualidad · Servicio',
    bgLabel: 'MZA',
  },
  {
    tagline: 'H-8 a H-45',
    title: ['Soluciones para', 'cada'],
    titleAccent: 'estructura',
    subtitle:
      'Desde fundaciones residenciales hasta grandes obras de infraestructura. Diseño de mezcla personalizado según las exigencias de tu proyecto.',
    cta: 'Solicitá tu cotización',
    ctaHref: '/#contacto',
    accent: 'ISO 9001:2015 · OAA Acreditado · Bureau Veritas',
    bgLabel: 'H45',
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 10000);
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
    <div className="relative w-full h-full bg-[#111111]">
      {/* Viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex-none w-full h-full bg-[#111111] flex items-center relative overflow-hidden"
            >
              {/* Left yellow accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f7c915]" />

              <div className="section-container w-full relative z-10">
                <div className="max-w-2xl xl:max-w-3xl">
                  {/* Tagline */}
                  <div className="flex items-center gap-3 mb-7">
                    <span className="block w-8 h-0.5 bg-[#f7c915]" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/50">
                      {slide.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-2">
                    {slide.title.map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                    <span className="block text-[#f7c915]">{slide.titleAccent}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-lg mt-7 mb-5">
                    {slide.subtitle}
                  </p>

                  {/* Accent keywords */}
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-9">
                    {slide.accent}
                  </p>

                  {/* CTA */}
                  <a
                    href={slide.ctaHref}
                    className="btn-primary !px-7 !py-4 !gap-3"
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
          className="w-11 h-11 flex items-center justify-center border border-[#111111]/20 text-white/50 hover:bg-[#f7c915] hover:text-[#111111] hover:border-[#f7c915] transition-all duration-200"
          aria-label="Slide anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="w-11 h-11 flex items-center justify-center border border-[#111111]/20 text-white/50 hover:bg-[#f7c915] hover:border-[#f7c915] hover:text-[#111111] transition-all duration-200"
          aria-label="Siguiente slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

    </div>
  );
}
