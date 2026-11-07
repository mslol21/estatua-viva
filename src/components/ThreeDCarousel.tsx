'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CHARACTERS } from '@/data/portfolioData';

interface CarouselItem {
  id: string | number;
  title?: string;
  image?: string;
  color?: string;
}

interface ThreeDCarouselProps {
  items?: CarouselItem[];
  autoRotate?: boolean;
  speedSeconds?: number;
  className?: string;
  onSelectItem?: (id: string | number) => void;
}

const DEFAULT_ITEMS: CarouselItem[] = CHARACTERS.map((char) => ({
  id: char.id,
  title: char.name,
  image: char.imageUrl,
  color: char.colorAccent || '223, 189, 124',
}));

export default function ThreeDCarousel({
  items = DEFAULT_ITEMS,
  autoRotate = true,
  speedSeconds = 25,
  className = '',
  onSelectItem,
}: ThreeDCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const count = items.length;

  return (
    <div
      className={`threed-carousel-wrapper w-full h-[480px] relative overflow-hidden flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full bg-champagne-gold/10 blur-[100px]"
      />

      <div
        className="threed-carousel-inner"
        style={
          {
            '--quantity': count,
            '--duration': `${speedSeconds}s`,
            animationPlayState: isPaused ? 'paused' : 'running',
          } as React.CSSProperties
        }
      >
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => onSelectItem?.(item.id)}
              className={`threed-card group ${onSelectItem ? 'cursor-pointer' : ''}`}
              style={
                {
                  '--index': index,
                  '--color-card': item.color?.replace('#', '') || '223, 189, 124',
                } as React.CSSProperties
              }
            >
              <div className="threed-card-img relative w-full h-full overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title || 'Estátua Viva'}
                    fill
                    sizes="140px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full threed-gradient-fallback" />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

                {item.title && (
                  <div className="absolute bottom-2 left-2 right-2 text-left pointer-events-none">
                    <span className="font-serif text-[11px] text-alabaster line-clamp-1 leading-tight font-medium">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-stone-warm bg-charcoal/80 px-3 py-1 border border-alabaster/10 rounded-full backdrop-blur-md">
        {isPaused ? 'Pausado • Clique para ver' : 'Passe o mouse para pausar a órbita'}
      </div>
    </div>
  );
}
