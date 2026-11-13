'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Orbit, LayoutGrid, Sparkles, ChevronDown } from 'lucide-react';
import ThreeDCarousel, { CarouselItem } from './ThreeDCarousel';
import { ARTISTIC_LINES } from '@/data/portfolioData';

const ORBIT_INSPIRATIONS: CarouselItem[] = ARTISTIC_LINES.map((line) => ({
  id: line.href,
  title: line.name,
  badge: line.badge,
  subtitle: line.shortSubtitle,
  image: line.image,
  color: line.color,
}));

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
            Explore as 6 linhas artísticas da Estátua Viva Produções e descubra a performance ideal para seu evento.
          </p>

          {/* Alternador de visualização (Órbita 3D vs Grade) */}
          <div className="flex items-center gap-1 border border-[#dfbd7c]/35 p-1 rounded-full bg-[#0a1e24]/80 backdrop-blur-md shrink-0 shadow-[0_0_15px_rgba(223,189,124,0.2)]">
            <button
              type="button"
              onClick={() => setViewMode('orbit')}
              aria-pressed={viewMode === 'orbit'}
              className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                viewMode === 'orbit'
                  ? 'bg-[#dfbd7c] text-[#071318] font-semibold shadow-[0_0_12px_rgba(223,189,124,0.6)]'
                  : 'text-[#d5d7cf] hover:text-white'
              }`}
            >
              <Orbit size={13} />
              <span>Órbita 3D</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#dfbd7c] text-[#071318] font-semibold shadow-[0_0_12px_rgba(223,189,124,0.6)]'
                  : 'text-[#d5d7cf] hover:text-white'
              }`}
            >
              <LayoutGrid size={13} />
              <span>Grade</span>
            </button>
          </div>
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {ARTISTIC_LINES.map((line) => (
            <article
              key={line.id}
              className="motion-collectible neon-gold-card group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#091a20]/80 border border-[#dfbd7c]/25 p-5 sm:p-6 transition-all hover:border-[#ffe6a3]/60"
            >
              <div>
                <div className="cinematic-card-image relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-black/40">
                  <Image
                    src={line.image}
                    alt={`${line.name} — ${line.badge}`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031014]/90 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#071318]/90 text-[#ffe6a3] border border-[#dfbd7c]/50 backdrop-blur-md">
                    {line.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#ffe6a3] transition-colors">
                    {line.name}
                  </h3>
                  <a
                    href={line.href}
                    aria-label={`Ver personagens da linha ${line.name}`}
                    className="text-[#e4c184] hover:text-[#ffe6a3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="text-xs text-[#d5d7cf] leading-relaxed mb-4">
                  {line.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {(line.applications || line.keywords).map((app) => (
                    <span
                      key={app}
                      className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-[#dfbd7c]/10 text-[#ffe6a3] border border-[#dfbd7c]/25 tracking-wide"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Guia Editorial e Curadoria Artística (Acessível a Visitantes, Buscadores e IA) */}
      <details className="group mt-12 rounded-2xl border border-champagne-gold/25 bg-[#071418]/80 p-6 sm:p-8 neon-gold-card relative z-10 transition-all">
        <summary className="cursor-pointer flex items-center justify-between font-serif text-xl sm:text-2xl text-[#ffe6a3] select-none hover:text-white transition-colors">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#dfbd7c]" />
            <span>Guia Curatorial das 6 Linhas Artísticas — Estátua Viva Produções</span>
          </div>
          <ChevronDown size={20} className="text-[#dfbd7c] transition-transform duration-300 group-open:rotate-180" />
        </summary>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-6 border-t border-champagne-gold/20">
          {ARTISTIC_LINES.map((line) => (
            <div key={`guide-${line.id}`} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dfbd7c]" />
                <h4 className="font-serif text-lg text-white font-medium">
                  {line.name} <span className="text-xs font-mono text-[#e4c184]">({line.badge})</span>
                </h4>
              </div>

              <p className="text-xs text-[#c5c8bf] leading-relaxed">
                {line.description}
              </p>

              <div className="pt-2">
                <p className="text-[11px] font-medium text-[#dfbd7c] mb-1">
                  Ambientações & Momentos ideais:
                </p>
                <p className="text-xs text-[#e4c184]/90 leading-snug">
                  {(line.applications || line.keywords).join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
