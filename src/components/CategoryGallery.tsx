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
    name: 'Ouro Imperial',
    badge: 'Ouro',
    image: '/portfolio/ouro.webp',
    href: '#estilo-ouro',
    alt: 'Artista caracterizado como estátua viva em dourado',
    subtitle: 'Nobre, triunfal e banhado a ouro para recepções de gala e momentos solenes.',
  },
  {
    name: 'Mármore Branco',
    badge: 'Branca',
    image: '/portfolio/branca.webp',
    href: '#estilo-branca',
    alt: 'Artista caracterizado como anjo em branco',
    subtitle: 'Clássico renascentista, celestial e atemporal para casamentos e eventos elegantes.',
  },
  {
    name: 'Prata Industrial',
    badge: 'Prata',
    image: '/portfolio/prata.webp',
    href: '#estilo-prata',
    alt: 'Artista caracterizado como chef prateado',
    subtitle: 'Futurista, vanguardista e metálico para feiras corporativas e congressos high-tech.',
  },
  {
    name: 'Temáticos & Lúdicos',
    badge: 'Diversas',
    image: '/portfolio/diversas.webp',
    href: '#estilo-diversas',
    alt: 'Personagens inspirados em Chaplin e bailarina azul',
    subtitle: 'Chaplin, Piratas, Deuses e figuras personalizadas sob medida para o seu tema.',
  },
];

const ORBIT_INSPIRATIONS: CarouselItem[] = [
  {
    id: '#estilo-ouro',
    title: 'Ouro Imperial',
    badge: 'Gala & Solenidade',
    subtitle: 'Brilho supremo e estátuas douradas triunfais',
    image: '/portfolio/ouro.webp',
    color: '244, 212, 154',
  },
  {
    id: '#estilo-branca',
    title: 'Mármore Branco',
    badge: 'Clássico & Casamento',
    subtitle: 'Pureza escultural renascentista e anjos barrocos',
    image: '/portfolio/branca.webp',
    color: '240, 240, 245',
  },
  {
    id: '#estilo-prata',
    title: 'Prata Industrial',
    badge: 'Corporativo & High-Tech',
    subtitle: 'Elegância metálica, robótica e figuras futuristas',
    image: '/portfolio/prata.webp',
    color: '200, 205, 215',
  },
  {
    id: '#estilo-diversas',
    title: 'Temáticos & Lúdicos',
    badge: 'Experiência & Cinema',
    subtitle: 'Chaplin, piratas e personagens sob medida',
    image: '/portfolio/diversas.webp',
    color: '228, 193, 132',
  },
  {
    id: '#estilo-ouro',
    title: 'Deusa Grega em Ouro',
    badge: 'Mitologia Imperial',
    subtitle: 'Presença cênica monumental para palcos e recepções',
    image: 'https://estatuaviva.com.br/wp-content/uploads/2025/07/Deusa-Grega-Grupo-Acelerador-Giant-2-e1753540896401.jpg',
    color: '244, 212, 154',
  },
  {
    id: '#estilo-branca',
    title: 'Anjo Barroco Celestial',
    badge: 'Recepção Mágica',
    subtitle: 'Asas esculturais e atmosfera etérea inesquecível',
    image: 'https://estatuaviva.com.br/wp-content/uploads/2022/05/Estatua-viva-anjo-branco-5.jpg',
    color: '240, 240, 245',
  },
  {
    id: '#estilo-prata',
    title: 'Chef & Pintor Prateado',
    badge: 'Arte & Gastronomia',
    subtitle: 'Interação sutil e performática com os convidados',
    image: 'https://estatuaviva.com.br/wp-content/uploads/2022/05/Estatua-Viva-Prata-Chef-768x1057.jpg',
    color: '200, 205, 215',
  },
  {
    id: '#estilo-diversas',
    title: 'Personagens Cênicos',
    badge: 'Projetos Especiais',
    subtitle: 'Figurinos artesanais criados para marcas e lançamentos',
    image: 'https://estatuaviva.com.br/wp-content/uploads/2025/07/Hera-Lancamento-Marca-2-768x768.jpg',
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
    <section id="inspiracao" aria-labelledby="categorias-title" className="site-container py-20 sm:py-28 relative">
      {/* Glow de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-champagne-gold/10 blur-[130px] rounded-full"
      />

      <div className="mb-8 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#dfbd7c]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dfbd7c]">
              Um universo de personagens
            </p>
          </div>
          <h2 id="categorias-title" className="font-serif text-4xl text-[#f6f1e8] sm:text-5xl font-normal">
            Escolha sua <span className="italic text-[#e4c184]">inspiração.</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="max-w-xs text-sm leading-6 text-[#d5d7cf]">
            Explore estilos em órbita 3D e descubra a performance ideal para encantar seu público.
          </p>

          {/* Alternador de visualização (Órbita 3D vs Grade) */}
          <div className="flex items-center gap-1 border border-[#dfbd7c]/35 p-1 rounded-full bg-[#0a1e24]/70 backdrop-blur-md shrink-0 shadow-[0_0_15px_rgba(223,189,124,0.2)]">
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
      <div className="flex flex-wrap items-center gap-2.5 mb-8 relative z-10">
        <span className="text-[11px] font-mono uppercase tracking-wider text-stone-warm mr-1">
          Filtrar direto:
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
        <div className="relative z-10">
          <ThreeDCarousel
            items={ORBIT_INSPIRATIONS}
            onSelectItem={handleSelectInspiration}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
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
