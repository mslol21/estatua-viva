'use client';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
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

export default function ThreeDCarousel({ items = DEFAULT_ITEMS, className = '', onSelectItem }: ThreeDCarouselProps) {
  const root = useRef<HTMLDivElement>(null);
  const angle = useRef(0), target = useRef(0), speed = useRef(0);
  const interacting = useRef(false), hovering = useRef(false), focusWithin = useRef(false), dragged = useRef(false);
  const drag = useRef({ x: 0, lastX: 0, time: 0, pointer: -1 });
  const [active, setActive] = useState(0), [paused, setPaused] = useState(false), [reduced, setReduced] = useState(true);
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
    angle.current = target.current = speed.current = 0;
    setActive(0);
  }, [signature]);

  useEffect(() => {
    const node = root.current;
    if (!node || !count) return;
    const cards = Array.from(node.querySelectorAll<HTMLElement>('[data-orbit-card]'));
    let frame = 0, last = 0, visible = false, current = ((Math.round(-angle.current / TAU * count) % count) + count) % count;

    const draw = () => {
      const radius = Math.min(node.clientWidth * 0.36, 430);
      cards.forEach((card, index) => {
        const theta = index / count * TAU + angle.current;
        const front = Math.cos(theta);
        const degrees = Math.atan2(Math.sin(theta), Math.cos(theta)) * 180 / Math.PI;
        const opacity = Math.max(0, (front + 0.25) / 1.25);
        card.style.transform = `translateX(-50%) translate3d(${Math.sin(theta) * radius}px,${(1 - front) * 18}px,${(front - 1) * radius}px) rotateY(${degrees * 0.5}deg)`;
        card.style.opacity = String(opacity);
        card.style.zIndex = String(Math.round((front + 1) * 10));
        const enabled = index === current;
        card.tabIndex = enabled ? 0 : -1;
        card.style.pointerEvents = front > 0.1 ? 'auto' : 'none';
        card.setAttribute('aria-hidden', String(front < 0));
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
          target.current -= dt * 0.08;
        }
        angle.current += (target.current - angle.current) * (reduced ? 1 : 1 - Math.exp(-dt * 9));
      }
      const index = ((Math.round(-angle.current / TAU * count) % count) + count) % count;
      if (index !== current) {
        current = index;
        setActive(index);
      }
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

  const go = (delta: number) => {
    if (!count) return;
    speed.current = 0;
    target.current = Math.round(target.current / (TAU / count)) * (TAU / count) - delta * TAU / count;
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
    if (Math.abs(event.clientX - drag.current.x) > 7) {
      dragged.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (dragged.current) {
      const factor = 0.006;
      angle.current += delta * factor;
      target.current = angle.current;
      speed.current = Math.max(-3, Math.min(3, delta * factor / Math.max((event.timeStamp - drag.current.time) / 1000, 0.016)));
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
  };

  if (!count) return <p className="py-12 text-center text-stone-warm">Nenhum personagem nesta categoria.</p>;

  return (
    <div
      ref={root}
      className={`orbit-live relative select-none ${className}`}
      aria-label="Carrossel em órbita 3D de personagens"
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
      <div
        className="orbit-live-stage relative mx-auto h-[390px] max-w-5xl overflow-hidden sm:h-[480px]"
        style={{ perspective: '1200px', touchAction: 'pan-y' }}
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
        {/* Glow de fundo teatral */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-1/4 bottom-6 top-10 rounded-full bg-champagne-gold/15 blur-[100px]"
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
              className={`neon-gold-card group absolute left-1/2 top-2 h-[310px] w-[210px] overflow-hidden rounded-[1.5rem] bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold sm:h-[390px] sm:w-[265px] transition-all duration-300 ${
                isCurrent ? 'scale-100 z-30' : 'scale-95'
              }`}
            >
              {item.image && (
                <Image
                  draggable={false}
                  src={item.image}
                  alt={item.title || ''}
                  fill
                  sizes="(max-width: 640px) 210px, 265px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#031014]/95 via-[#031014]/30 to-transparent"
              />

              <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-left">
                {item.badge && (
                  <span className="inline-block px-2.5 py-0.5 mb-2 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#dfbd7c]/25 text-[#ffe6a3] border border-[#dfbd7c]/60 backdrop-blur-md shadow-[0_0_10px_rgba(223,189,124,0.4)]">
                    {item.badge}
                  </span>
                )}
                <span className="block text-[10px] uppercase tracking-[0.16em] text-champagne-gold font-medium">
                  {item.badge ? 'Estilo cênico' : 'Conheça o personagem'}
                </span>
                <span className="mt-1 block font-serif text-xl leading-tight text-white sm:text-2xl font-normal group-hover:text-[#ffe6a3] transition-colors">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="mt-1 block text-xs text-[#d5d7cf] line-clamp-1">
                    {item.subtitle}
                  </span>
                )}
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f0d49a] mt-2.5 tracking-wider uppercase">
                    <span>Explorar estilo</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Controles da órbita */}
      <div data-orbit-control className="flex items-center justify-center gap-5 pb-3 pt-2">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={count < 2}
          aria-label="Item anterior"
          className="orbit-control hover:shadow-[0_0_15px_rgba(223,189,124,0.5)] transition-shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="min-w-16 text-center text-xs tracking-[0.16em] text-stone-warm font-mono">
          {active + 1} / {count}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={count < 2}
          aria-label="Próximo item"
          className="orbit-control hover:shadow-[0_0_15px_rgba(223,189,124,0.5)] transition-shadow"
        >
          <ChevronRight size={20} />
        </button>
        {!reduced && (
          <button
            type="button"
            onClick={() => {
              speed.current = 0;
              target.current = angle.current;
              setPaused(value => !value);
            }}
            aria-label={paused ? 'Retomar rotação automática' : 'Pausar rotação automática'}
            aria-pressed={paused}
            className="orbit-control hover:shadow-[0_0_15px_rgba(223,189,124,0.5)] transition-shadow"
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        )}
      </div>
      <p className="text-center text-xs text-stone-warm flex items-center justify-center gap-1.5">
        <Sparkles size={12} className="text-[#dfbd7c]" />
        <span>Arraste para girar a órbita 3D. Clique no card central para explorar o estilo.</span>
      </p>
    </div>
  );
}
