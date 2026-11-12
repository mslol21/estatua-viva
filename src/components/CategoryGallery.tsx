'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Orbit, LayoutGrid, Sparkles } from 'lucide-react';
import ThreeDCarousel, { CarouselItem } from './ThreeDCarousel';

interface CategoryStyle {
  name: string;
  badge: string;
  image: string;
  href: string;
  alt: string;
  subtitle: string;
}

const CATEGORIES: CategoryStyle[] = [
  {
    name: 'Estátuas vivas — Ouro',
    badge: 'Ouro',
    image: '/portfolio/ouro.webp',
    href: '#estilo-ouro',
    alt: 'Artista caracterizado como estátua viva em dourado',
    subtitle: 'Nobre, triunfal e banhado a ouro para recepções de gala e momentos solenes.',
  },
  {
    name: 'Estátuas vivas — Branca',
    badge: 'Branca',
    image: '/portfolio/branca.webp',
    href: '#estilo-branca',
    alt: 'Artista caracterizado como anjo em branco',
    subtitle: 'Clássico renascentista, celestial e atemporal para casamentos e eventos elegantes.',
  },
  {
    name: 'Estátuas vivas — Prata',
    badge: 'Prata',
    image: '/portfolio/prata.webp',
    href: '#estilo-prata',
    alt: 'Artista caracterizado como chef prateado',
    subtitle: 'Futurista, vanguardista e metálico para feiras corporativas e congressos high-tech.',
  },
  {
    name: 'Estátuas vivas — Variadas',
    badge: 'Diversas',
    image: '/portfolio/diversas.webp',
    href: '#estilo-diversas',
    alt: 'Personagens inspirados em Chaplin e bailarina azul',
    subtitle: 'Chaplin, Piratas, Deuses e figuras personalizadas sob medida para o seu tema.',
  },
  {
    name: 'Personagens vivos', badge: 'Interação', image: '/brand/pirata.webp', href: '#estilo-personagens', alt: 'Personagem pirata interagindo com o público', subtitle: 'Interpretação dinâmica, movimentos, falas e interação constante com os convidados.',
  },
  {
    name: 'Produções personalizadas', badge: 'Sob medida', image: '/portfolio/diversas.webp', href: '#estilo-personalizados', alt: 'Personagens e performances de diferentes temáticas', subtitle: 'Personagens, figurinos e performances desenvolvidos a partir do conceito do seu evento ou marca.',
  },
];

const ORBIT_INSPIRATIONS: CarouselItem[] = [
  {
    id: '#estilo-ouro',
    title: 'Ouro Imperial',
    badge: 'Gala & Celebrações',
    subtitle: 'Brilho escultural soberano para recepções triunfais e eventos solenes',
    image: '/portfolio/ouro.webp',
    color: '244, 212, 154',
  },
  {
    id: '#estilo-branca',
    title: 'Mármore Branco',
    badge: 'Clássico & Casamentos',
    subtitle: 'Pureza renascentista, anjos barrocos e arte celestial atemporal',
    image: '/portfolio/branca.webp',
    color: '240, 240, 245',
  },
  {
    id: '#estilo-prata',
    title: 'Prata Industrial',
    badge: 'Corporativo & High-Tech',
    subtitle: 'Vanguardismo metálico, robôs e figuras contemporâneas para feiras',
    image: '/portfolio/prata.webp',
    color: '200, 205, 215',
  },
  {
    id: '#estilo-diversas',
    title: 'Temáticos & Lúdicos',
    badge: 'Cinema & Ficção',
    subtitle: 'Chaplin, Piratas, Deuses e criações exclusivas sob medida para seu tema',
    image: '/portfolio/diversas.webp',
    color: '228, 193, 132',
  },
];

export default function CategoryGallery() {
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');

  const handleSelectInspiration = (targetHref: string | number) => {
    const hash = String(targetHref).startsWith('#') ? String(targetHref) : `#${targetHref}`;
    const target = document.querySelector(hash) || document.getElementById('acervo');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = hash;
    }
  };

  return (
    <section id="inspiracao" aria-labelledby="categorias-title" className="site-container py-16 sm:py-24 relative overflow-x-clip w-full">
      {/* Glow de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-champagne-gold/10 blur-[130px] rounded-full"
      />

      <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#dfbd7c]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dfbd7c]">
              Um universo de personagens
            </p>
          </div>
          <h2 id="categorias-title" className="font-serif text-3xl sm:text-5xl text-[#f6f1e8] font-normal">
            Escolha sua <span className="italic text-[#e4c184]">inspiração.</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="max-w-xs text-xs sm:text-sm leading-6 text-[#d5d7cf]">
            Explore as 6 linhas artísticas do portfólio oficial e descubra a performance ideal para encantar seu público.
          </p>

          {/* Alternador de visualização (Órbita 3D vs Grade) */}
          <div className="flex items-center gap-1 border border-[#dfbd7c]/35 p-1 rounded-full bg-[#0a1e24]/80 backdrop-blur-md shrink-0 shadow-[0_0_15px_rgba(223,189,124,0.2)]">
            <button
              type="button"
              onClick={() => setViewMode('orbit')}
              aria-pressed={viewMode === 'orbit'}
              className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                viewMode === 'orbit'
                  ? 'bg-[#dfbd7c] text-[#071318] font-bold shadow-[0_0_12px_rgba(223,189,124,0.6)]'
                  : 'text-[#d5d7cf] hover:text-[#f6f1e8]'
              }`}
            >
              <Orbit size={14} />
              <span>Órbita 3D</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#dfbd7c] text-[#071318] font-bold shadow-[0_0_12px_rgba(223,189,124,0.6)]'
                  : 'text-[#d5d7cf] hover:text-[#f6f1e8]'
              }`}
            >
              <LayoutGrid size={14} />
              <span>Grade</span>
            </button>
          </div>
        </div>
      </div>

      {/* Atalhos rápidos de categorias com neon dourado suave */}
      <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
        <span className="text-[11px] font-mono uppercase tracking-wider text-stone-warm mr-1">
          Ir direto ao estilo:
        </span>
        {CATEGORIES.map((cat) => (
          <a
            key={cat.href}
            href={cat.href}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#0d272d]/70 border border-[#dfbd7c]/45 text-[#ffe6a3] hover:border-[#ffe6a3] hover:shadow-[0_0_15px_rgba(245,215,145,0.5)] transition-all"
          >
            {cat.name}
          </a>
        ))}
      </div>

      {/* Disposição em Órbita 3D ou Grade */}
      {viewMode === 'orbit' ? (
        <div className="relative z-10 w-full overflow-visible">
          <ThreeDCarousel
            items={ORBIT_INSPIRATIONS}
            onSelectItem={handleSelectInspiration}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          {CATEGORIES.map((category) => (
            <a
              data-motion-tilt
              key={category.name}
              href={category.href}
              className="motion-collectible neon-gold-card group relative block overflow-hidden rounded-2xl bg-[#102329] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]"
            >
              <div className="cinematic-card-image relative aspect-[3/4]">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#031014]/95 via-[#031014]/25 to-transparent"
                />
                <div className="absolute z-10 inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#e4c184] font-mono">
                      {category.badge}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#e4c184] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-white sm:text-3xl font-normal group-hover:text-[#ffe6a3] transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#d5d7cf] line-clamp-2 leading-relaxed">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
