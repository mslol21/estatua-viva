'use client';

import React, { useEffect, useRef, useState, type PointerEvent } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ArrowUpRight } from 'lucide-react';
import { CHARACTERS } from '@/data/portfolioData';

export interface CarouselItem {
  id: string | number;
  title?: string;
  subtitle?: string;
  badge?: string;
  image?: string;
  color?: string;
}

interface ThreeDCarouselProps {
  items?: CarouselItem[];
  className?: string;
  onSelectItem?: (id: string | number) => void;
  actionLabel?: string;
}

const DEFAULT_ITEMS: CarouselItem[] = CHARACTERS.map(char => ({
  id: char.id,
  title: char.name,
  subtitle: char.tagline || char.category,
  image: char.imageUrl,
  color: char.colorAccent,
}));

export default function ThreeDCarousel({
  items = DEFAULT_ITEMS,
  className = '',
  onSelectItem,
  actionLabel = 'Explorar estilo',
}: ThreeDCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragDistance = useRef(0);
  const total = items.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);
    const updateMotion = () => setReduced(media.matches);
    media.addEventListener('change', updateMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      media.removeEventListener('change', updateMotion);
    };
  }, []);

  // Rotação automática suave quando não pausado
  useEffect(() => {
    if (paused || reduced || isMobile || total < 2) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [paused, reduced, isMobile, total]);

  const goNext = () => {
    setActiveIndex(prev => (prev + 1) % total);
  };

  const goPrev = () => {
    setActiveIndex(prev => (prev - 1 + total) % total);
  };

  // Suporte a toque / swipe com pointer events
  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    dragDistance.current = 0;
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    dragDistance.current = e.clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (dragStartX.current !== null && Math.abs(dragDistance.current) > 40) {
      if (dragDistance.current < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    dragStartX.current = null;
    dragDistance.current = 0;
  };

  if (!total) {
    return <p className="py-12 text-center text-stone-warm">Nenhum item disponível.</p>;
  }

  return (
    <div
      className={`orbit-live relative select-none w-full ${className}`}
      aria-label="Carrossel 3D Coverflow de Estilos"
      aria-roledescription="carrossel"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 3D Stage Container sem paredes de corte (overflow-visible) */}
      <div
        className="orbit-live-stage relative mx-auto w-full max-w-7xl h-[460px] sm:h-[520px] overflow-visible flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1100px', touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {items.map((item, index) => {
          // 1. Cálculo circular (Wrap-Around) simétrico (cards nos dois lados)
          let diff = index - activeIndex;
          const half = Math.floor(total / 2);
          if (diff > half) diff -= total;
          if (diff < -half) diff += total;

          const absDiff = Math.abs(diff);
          const isVisible = absDiff <= (isMobile ? 1 : 3);

          // 2. Coordenadas calibradas de Coverflow 3D contínuo ("um atrás do outro")
          const sign = diff > 0 ? 1 : diff < 0 ? -1 : 0;

          let stepX = 0;
          let translateZ = 0;
          let scale = 1;
          let rotateY = 0;
          let opacity = 0;

          if (isMobile) {
            if (absDiff === 0) {
              stepX = 0;
              translateZ = 0;
              scale = 1;
              rotateY = 0;
              opacity = 1;
            } else if (absDiff === 1) {
              stepX = sign * 90;
              translateZ = -60;
              scale = 0.86;
              rotateY = sign * -18;
              opacity = 0.85;
            } else if (absDiff === 2) {
              stepX = sign * 165;
              translateZ = -120;
              scale = 0.74;
              rotateY = sign * -28;
              opacity = 0.60;
            } else if (absDiff === 3) {
              stepX = sign * 230;
              translateZ = -180;
              scale = 0.62;
              rotateY = sign * -36;
              opacity = 0.30;
            }
          } else {
            if (absDiff === 0) {
              stepX = 0;
              translateZ = 0;
              scale = 1;
              rotateY = 0;
              opacity = 1;
            } else if (absDiff === 1) {
              stepX = sign * 140;
              translateZ = -75;
              scale = 0.88;
              rotateY = sign * -22;
              opacity = 0.88;
            } else if (absDiff === 2) {
              stepX = sign * 255;
              translateZ = -150;
              scale = 0.76;
              rotateY = sign * -32;
              opacity = 0.68;
            } else if (absDiff === 3) {
              stepX = sign * 360;
              translateZ = -225;
              scale = 0.64;
              rotateY = sign * -42;
              opacity = 0.35;
            }
          }

          const zIndex = 40 - absDiff * 10;

          const isCenter = diff === 0;

          const cardStyle: React.CSSProperties = {
            left: '50%',
            top: '50%',
            transform: `translate3d(calc(-50% + ${stepX}px), -50%, ${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
            opacity: isVisible ? opacity : 0,
            zIndex,
            pointerEvents: isCenter ? 'auto' : 'none',
            border: isCenter
              ? '1.5px solid rgba(230, 198, 135, 0.75)'
              : '1px solid rgba(230, 198, 135, 0.25)',
            boxShadow: isCenter
              ? '0 0 42px 4px rgba(212, 175, 55, 0.38), inset 0 0 24px rgba(212, 175, 55, 0.22)'
              : '0 12px 30px rgba(0, 0, 0, 0.65)',
            transition:
              'transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 420ms ease, box-shadow 420ms ease, border-color 420ms ease',
          };

          return (
            <div
              key={item.id}
              data-orbit-card="true"
              onClick={() => {
                if (!isCenter) {
                  setActiveIndex(index);
                }
              }}
              style={cardStyle}
              aria-hidden={!isCenter}
              className={`absolute w-[250px] h-[360px] sm:w-[300px] sm:h-[420px] rounded-[9999px] overflow-hidden bg-[#071318] group ${
                isCenter ? 'cursor-default' : 'cursor-pointer hover:opacity-90'
              }`}
            >
              {/* Imagem do personagem */}
              {item.image && (
                <Image
                  draggable={false}
                  src={item.image}
                  alt={item.title || ''}
                  fill
                  sizes="(max-width: 640px) 250px, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
              )}

              {/* Degradê uniforme de leitura */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#050e12] via-[#050e12]/35 to-transparent pointer-events-none"
              />

              {/* Overlay de texto 100% centralizado na curva oval */}
              <div className="absolute inset-x-0 bottom-0 px-8 pb-8 pt-16 text-center flex flex-col items-center justify-end bg-gradient-to-t from-[#050e12] via-[#050e12]/80 to-transparent">
                {item.badge && (
                  <span className="self-center mx-auto inline-block px-3 py-0.5 mb-2 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#071318]/90 text-[#ffe6a3] border border-[#dfbd7c]/50 backdrop-blur-md shadow-[0_0_10px_rgba(223,189,124,0.35)]">
                    {item.badge}
                  </span>
                )}

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight drop-shadow-md text-center">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="mt-1.5 text-xs text-[#d5d7cf] line-clamp-2 leading-relaxed text-center max-w-[200px]">
                    {item.subtitle}
                  </p>
                )}

                {/* Botão de Ação Centralizado */}
                {isCenter && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItem?.(item.id);
                    }}
                    className="self-center mx-auto inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#dfbd7c] hover:bg-[#ffe6a3] text-[#071318] transition-all shadow-[0_0_15px_rgba(223,189,124,0.5)] mt-3 cursor-pointer"
                  >
                    <span>{actionLabel}</span>
                    <ArrowUpRight size={13} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controles Inferiores Centralizados */}
      <div className="mt-4 flex items-center justify-center gap-4 z-40 relative">
        <button
          type="button"
          onClick={goPrev}
          disabled={total < 2}
          aria-label="Item anterior"
          className="w-10 h-10 rounded-full border border-[#dfbd7c]/50 flex items-center justify-center text-[#dfbd7c] hover:bg-[#dfbd7c]/20 hover:shadow-[0_0_15px_rgba(223,189,124,0.5)] transition-all cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicadores Visuais de Dots */}
        <div className="flex items-center gap-2">
          {items.map((it, idx) => (
            <button
              key={it.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Ir para ${it.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-7 bg-[#dfbd7c] shadow-[0_0_10px_rgba(223,189,124,0.8)]'
                  : 'w-2 bg-alabaster/25 hover:bg-alabaster/50'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={total < 2}
          aria-label="Próximo item"
          className="w-10 h-10 rounded-full border border-[#dfbd7c]/50 flex items-center justify-center text-[#dfbd7c] hover:bg-[#dfbd7c]/20 hover:shadow-[0_0_15px_rgba(223,189,124,0.5)] transition-all cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>

        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused(v => !v)}
            aria-label={paused ? 'Retomar rotação automática' : 'Pausar rotação automática'}
            aria-pressed={paused}
            className="w-9 h-9 rounded-full border border-alabaster/20 flex items-center justify-center text-stone-warm hover:text-[#ffe6a3] transition-colors ml-1 cursor-pointer"
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        )}
      </div>

      <p className="text-center text-xs text-stone-warm flex items-center justify-center gap-1.5 mt-2">
        <Sparkles size={12} className="text-[#dfbd7c]" />
        <span>Deslize ou toque nos medalhões laterais para navegar pelos estilos.</span>
      </p>
    </div>
  );
}
