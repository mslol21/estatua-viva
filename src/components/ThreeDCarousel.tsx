'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CHARACTERS } from '@/data/portfolioData';

interface CarouselItem { id: string | number; title?: string; image?: string; color?: string }
interface ThreeDCarouselProps { items?: CarouselItem[]; className?: string; onSelectItem?: (id: string | number) => void }
const DEFAULT_ITEMS: CarouselItem[] = CHARACTERS.map((char) => ({ id: char.id, title: char.name, image: char.imageUrl, color: char.colorAccent }));

export default function ThreeDCarousel({ items = DEFAULT_ITEMS, className = '', onSelectItem }: ThreeDCarouselProps) {
  const [active, setActive] = useState(0);
  const count = items.length;
  useEffect(() => { setActive(0); }, [items.map(item => item.id).join('|')]);
  if (!count) return <p className="py-12 text-center text-stone-warm">Nenhum personagem nesta categoria.</p>;
  const current = active % count;
  const go = (delta: number) => setActive((current + delta + count) % count);
  const visible = count === 1 ? [{ item: items[current], position: 0 }] : count === 2
    ? [{ item: items[(current + 1) % count], position: 1 }, { item: items[current], position: 0 }]
    : [{ item: items[(current - 1 + count) % count], position: -1 }, { item: items[(current + 1) % count], position: 1 }, { item: items[current], position: 0 }];

  return (
    <div className={`relative select-none ${className}`} aria-label="Carrossel de personagens" aria-roledescription="carrossel">
      <div className="relative mx-auto h-[390px] max-w-5xl overflow-hidden sm:h-[470px]" style={{ perspective: '1200px' }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-1/4 bottom-6 top-10 rounded-full bg-champagne-gold/10 blur-[90px]" />
        {visible.map(({ item, position }) => (
          <button key={item.id} type="button" onClick={() => position === 0 ? onSelectItem?.(item.id) : go(position)} aria-label={position === 0 ? `Ver detalhes de ${item.title}` : `Mostrar ${item.title}`} className={`absolute left-1/2 top-2 h-[310px] w-[210px] overflow-hidden rounded-[1.5rem] border bg-charcoal shadow-2xl transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold motion-reduce:transition-none sm:h-[380px] sm:w-[260px] ${position === 0 ? 'z-20 border-champagne-gold/50' : 'z-10 border-alabaster/20 opacity-75 hover:opacity-100'}`} style={{ transform: `translateX(calc(-50% + ${position * 70}%)) translateY(${position === 0 ? 0 : 30}px) scale(${position === 0 ? 1 : 0.72}) rotateY(${position * -12}deg)` }}>
            {item.image && <Image src={item.image} alt="" fill sizes="(max-width: 640px) 210px, 260px" className="object-cover object-center" />}
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#031014]/95 via-transparent to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-4 text-left"><span className="block text-[10px] uppercase tracking-[0.16em] text-champagne-gold">{position === 0 ? 'Conheça o personagem' : 'Personagem'}</span><span className="mt-1 block font-serif text-xl leading-tight text-alabaster sm:text-2xl">{item.title}</span></span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 pb-4">
        <button type="button" onClick={() => go(-1)} disabled={count < 2} aria-label="Personagem anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne-gold/40 text-champagne-gold transition-colors hover:bg-champagne-gold/10 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold"><ChevronLeft size={20} /></button>
        <span aria-live="polite" className="min-w-16 text-center text-xs tracking-[0.14em] text-stone-warm">{current + 1} / {count}</span>
        <button type="button" onClick={() => go(1)} disabled={count < 2} aria-label="Próximo personagem" className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne-gold/40 text-champagne-gold transition-colors hover:bg-champagne-gold/10 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold"><ChevronRight size={20} /></button>
      </div>
      <p className="text-center text-xs text-stone-warm">Selecione a imagem central para conhecer os detalhes.</p>
    </div>
  );
}
