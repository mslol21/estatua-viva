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
}

const DEFAULT_ITEMS: CarouselItem[] = CHARACTERS.map(char => ({
  id: char.id,
  title: char.name,
  subtitle: char.tagline || char.category,
  image: char.imageUrl,
  color: char.colorAccent,
}));

const TAU = Math.PI * 2;

export default function ThreeDCarousel({
  items = DEFAULT_ITEMS,
  className = '',
  onSelectItem,
}: ThreeDCarouselProps) {
  const root = useRef<HTMLDivElement>(null);
  const angle = useRef(0);
  const target = useRef(0);
  const speed = useRef(0);
  const interacting = useRef(false);
  const hovering = useRef(false);
  const focusWithin = useRef(false);
  const dragged = useRef(false);
  const drag = useRef({ x: 0, lastX: 0, time: 0, pointer: -1 });

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  const count = items.length;
  const signature = items.map(item => item.id).join('|');

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    angle.current = 0;
    target.current = 0;
    speed.current = 0;
    setActive(0);
  }, [signature]);

  useEffect(() => {
    const node = root.current;
    if (!node || !count) return;
    const cards = Array.from(node.querySelectorAll<HTMLElement>('[data-orbit-card]'));
    let frame = 0;
    let last = 0;
    let visible = false;

    const draw = () => {
      const isMobile = node.clientWidth < 640;
      // Spacing and 3D depth tuned so cards NEVER collide or drop vertically
      const xSpacing = isMobile
        ? Math.min(node.clientWidth * 0.46, 170)
        : Math.min(node.clientWidth * 0.32, 270);
      const zDepth = isMobile ? 120 : 180;
      const maxRotate = isMobile ? 22 : 30;

      const progress = (-angle.current / TAU) * count;

      cards.forEach((card, index) => {
        let diff = ((index - progress) % count + count) % count;
        if (diff > count / 2) diff -= count;

        const absDiff = Math.abs(diff);

        // Hide cards that are far away to prevent screen clutter
        if (absDiff > (isMobile ? 1.5 : 2.2)) {
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
          card.style.transform = `translateX(-50%) translate3d(${diff > 0 ? xSpacing * 2.5 : -xSpacing * 2.5}px, 0, -400px) scale(0.6)`;
          card.style.zIndex = '0';
          card.setAttribute('aria-hidden', 'true');
          card.tabIndex = -1;
          return;
        }

        const x = diff * xSpacing;
        const z = -absDiff * zDepth;
        const scale = Math.max(0.78, 1 - absDiff * 0.14);
        const rotateY = -Math.sign(diff) * Math.min(maxRotate, Math.pow(absDiff, 0.85) * maxRotate);
        const opacity = Math.max(0, 1 - absDiff * 0.42);
        const zIndex = Math.round(50 - absDiff * 15);

        // Clean horizontal 3D transform with Y strictly fixed at 0 (never drops!)
        card.style.transform = `translateX(-50%) translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px) scale(${scale.toFixed(3)}) rotateY(${rotateY.toFixed(1)}deg)`;
        card.style.opacity = opacity.toFixed(2);
        card.style.zIndex = String(zIndex);

        const isCenter = absDiff < 0.35;
        card.tabIndex = isCenter ? 0 : -1;
        card.style.pointerEvents = absDiff < 1.3 ? 'auto' : 'none';
        card.setAttribute('aria-hidden', String(!isCenter));
      });
    };

    const tick = (time: number) => {
      const dt = Math.min((time - (last || time)) / 1000, 0.05);
      last = time;

      if (!interacting.current) {
        if (Math.abs(speed.current) > 0.008 && !reduced) {
          target.current += speed.current * dt;
          speed.current *= Math.exp(-dt * 5);
        } else if (!paused && !reduced && !hovering.current && !focusWithin.current) {
          target.current -= dt * 0.06;
        }
        angle.current += (target.current - angle.current) * (reduced ? 1 : 1 - Math.exp(-dt * 9));
      }

      const activeIndex = ((Math.round(-angle.current / TAU * count) % count) + count) % count;
      setActive(prev => (prev !== activeIndex ? activeIndex : prev));

      draw();

      if (!reduced || Math.abs(target.current - angle.current) > 0.001) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const start = () => {
      if (!frame && visible && !document.hidden) {
        last = 0;
        frame = requestAnimationFrame(tick);
      }
    };

    const sync = () => {
      if (document.hidden || !visible) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        start();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(node);

    const resize = new ResizeObserver(draw);
    resize.observe(node);

    const manual = () => {
      start();
    };
    node.addEventListener('orbit-update', manual);
    document.addEventListener('visibilitychange', sync);
    draw();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      node.removeEventListener('orbit-update', manual);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [signature, count, paused, reduced]);

  const snapToNearest = () => {
    if (!count) return;
    speed.current = 0;
    const stepAngle = TAU / count;
    const currentStep = Math.round(-angle.current / stepAngle);
    target.current = -currentStep * stepAngle;
    root.current?.dispatchEvent(new Event('orbit-update'));
  };

  const go = (delta: number) => {
    if (!count) return;
    speed.current = 0;
    const stepAngle = TAU / count;
    const currentStep = Math.round(-target.current / stepAngle);
    const nextStep = currentStep + delta;
    target.current = -nextStep * stepAngle;
    root.current?.dispatchEvent(new Event('orbit-update'));
  };

  const show = (index: number) => {
    let delta = (index - active + count) % count;
    if (delta > count / 2) delta -= count;
    go(delta);
  };

  const down = (event: PointerEvent<HTMLDivElement>) => {
    if (count < 2 || event.button !== 0 || (event.target as HTMLElement).closest('[data-orbit-control]')) return;
    drag.current = { x: event.clientX, lastX: event.clientX, time: event.timeStamp, pointer: event.pointerId };
    dragged.current = false;
    interacting.current = true;
    speed.current = 0;
  };

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!interacting.current || event.pointerId !== drag.current.pointer) return;
    const delta = event.clientX - drag.current.lastX;
    if (Math.abs(event.clientX - drag.current.x) > 6) {
      dragged.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (dragged.current) {
      const factor = 0.005;
      angle.current += delta * factor;
      target.current = angle.current;
      speed.current = Math.max(-2.5, Math.min(2.5, (delta * factor) / Math.max((event.timeStamp - drag.current.time) / 1000, 0.016)));
      root.current?.dispatchEvent(new Event('orbit-update'));
    }
    drag.current.lastX = event.clientX;
    drag.current.time = event.timeStamp;
  };

  const release = (event: PointerEvent<HTMLDivElement>) => {
    interacting.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    snapToNearest();
  };

  if (!count) return <p className="py-12 text-center text-stone-warm">Nenhum item disponível.</p>;

  return (
    <div
      ref={root}
      className={`orbit-live relative select-none w-full ${className}`}
      aria-label="Carrossel em perspectiva 3D"
      aria-roledescription="carrossel"
      onPointerEnter={event => {
        if (event.pointerType === 'mouse') hovering.current = true;
      }}
      onPointerLeave={() => {
        hovering.current = false;
        if (!dragged.current) interacting.current = false;
      }}
      onFocusCapture={() => {
        focusWithin.current = true;
      }}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) focusWithin.current = false;
      }}
    >
      {/* 3D Stage Container */}
      <div
        className="orbit-live-stage relative mx-auto h-[420px] sm:h-[480px] max-w-5xl overflow-hidden pt-2"
        style={{ perspective: '1100px', touchAction: 'pan-y' }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={release}
        onPointerCancel={release}
        onLostPointerCapture={() => {
          interacting.current = false;
        }}
        onClickCapture={event => {
          if (dragged.current) {
            event.preventDefault();
            event.stopPropagation();
            dragged.current = false;
          }
        }}
      >
        {/* Glow de fundo teatral central */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-champagne-gold/15 blur-[100px]"
        />

        {items.map((item, index) => {
          const isCurrent = index === active;
          return (
            <button
              data-orbit-card
              key={item.id}
              type="button"
              onClick={() => (isCurrent ? onSelectItem?.(item.id) : show(index))}
              aria-label={isCurrent ? `Ver detalhes de ${item.title}` : `Girar para ${item.title}`}
              className={`neon-gold-card group absolute left-1/2 top-2 h-[370px] w-[260px] sm:h-[430px] sm:w-[310px] overflow-hidden rounded-2xl bg-[#0a1e24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold transition-shadow duration-300 ${
                isCurrent ? 'cursor-pointer shadow-[0_0_30px_rgba(245,215,145,0.7)]' : 'cursor-pointer opacity-80'
              }`}
            >
              {item.image && (
                <Image
                  draggable={false}
                  src={item.image}
                  alt={item.title || ''}
                  fill
                  sizes="(max-width: 640px) 260px, 310px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              )}
              {/* Degradê uniforme de leitura */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#031014]/95 via-[#031014]/35 to-transparent"
              />

              {/* Informações do card */}
              <span className="absolute inset-x-0 bottom-0 p-5 text-left flex flex-col justify-end">
                {item.badge && (
                  <span className="inline-block self-start px-2.5 py-0.5 mb-2 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#071318]/90 text-[#ffe6a3] border border-[#dfbd7c]/50 backdrop-blur-md shadow-[0_0_10px_rgba(223,189,124,0.35)]">
                    {item.badge}
                  </span>
                )}
                <span className="font-serif text-2xl sm:text-3xl leading-tight text-white font-normal group-hover:text-[#ffe6a3] transition-colors drop-shadow-md">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="mt-1.5 block text-xs text-[#d5d7cf] line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </span>
                )}

                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#071318] bg-[#dfbd7c] px-3.5 py-1.5 rounded-lg mt-3 self-start shadow-[0_0_15px_rgba(223,189,124,0.5)] group-hover:bg-[#ffe6a3] transition-all">
                    <span>Explorar estilo</span>
                    <ArrowUpRight size={14} />
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Controles de Navegação Limpos */}
      <div data-orbit-control className="flex items-center justify-center gap-4 pt-3 pb-2">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={count < 2}
          aria-label="Item anterior"
          className="orbit-control w-10 h-10 rounded-full border border-[#dfbd7c]/50 flex items-center justify-center text-[#dfbd7c] hover:bg-[#dfbd7c]/20 hover:shadow-[0_0_15px_rgba(223,189,124,0.5)] transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicadores Visuais de Dots */}
        <div className="flex items-center gap-2">
          {items.map((it, idx) => (
            <button
              key={it.id}
              type="button"
              onClick={() => show(idx)}
              aria-label={`Ir para ${it.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === active
                  ? 'w-7 bg-[#dfbd7c] shadow-[0_0_10px_rgba(223,189,124,0.8)]'
                  : 'w-2 bg-alabaster/25 hover:bg-alabaster/50'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          disabled={count < 2}
          aria-label="Próximo item"
          className="orbit-control w-10 h-10 rounded-full border border-[#dfbd7c]/50 flex items-center justify-center text-[#dfbd7c] hover:bg-[#dfbd7c]/20 hover:shadow-[0_0_15px_rgba(223,189,124,0.5)] transition-all"
        >
          <ChevronRight size={20} />
        </button>

        {!reduced && (
          <button
            type="button"
            onClick={() => {
              speed.current = 0;
              setPaused(v => !v);
            }}
            aria-label={paused ? 'Retomar rotação automática' : 'Pausar rotação automática'}
            aria-pressed={paused}
            className="orbit-control w-9 h-9 rounded-full border border-alabaster/20 flex items-center justify-center text-stone-warm hover:text-[#ffe6a3] transition-colors ml-1"
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        )}
      </div>

      <p className="text-center text-xs text-stone-warm flex items-center justify-center gap-1.5 mt-1">
        <Sparkles size={12} className="text-[#dfbd7c]" />
        <span>Deslize ou toque nas laterais para navegar pelos estilos.</span>
      </p>
    </div>
  );
}
