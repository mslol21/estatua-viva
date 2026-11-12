'use client';

import Image from 'next/image';
import HeroAtmosphereCanvas from './motion/HeroAtmosphereCanvas';
import { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Drama, Sparkles, Star } from 'lucide-react';

const REVIEWS_URL = 'https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section ref={heroRef} aria-labelledby="hero-title" className="hero-split relative isolate overflow-hidden border-b border-[#dfbd7c]/15">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[#061217]" />
      <div aria-hidden="true" className="hero-immersive-background pointer-events-none absolute inset-0 -z-20 overflow-hidden"><Image src="/brand/hero-bronze.jpg" alt="" fill priority quality={65} sizes="100vw" className="hero-immersive-image object-cover" /></div>
      <div aria-hidden="true" className="hero-immersive-shade pointer-events-none absolute inset-0 z-[2] opacity-50" />
      <div aria-hidden="true" className="hero-immersive-light pointer-events-none absolute inset-0 z-[2] opacity-40" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#d3af6c]/10 blur-[110px]" />
      <HeroAtmosphereCanvas hero={heroRef} />
      <div className="site-container relative z-10">
        <div className="grid min-h-[calc(100svh-88px)] items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-14">
          <div className="hero-copy-entry relative z-10 max-w-2xl"><div className="hero-copy-motion">
            <div data-hero-reveal className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#dfbd7c]/30 bg-[#102b30]/75 px-4 py-2 text-xs leading-relaxed text-[#ead4a9] shadow-lg backdrop-blur-sm sm:text-sm">
              <Sparkles aria-hidden="true" className="h-4 w-4 shrink-0 text-[#dfbd7c]" strokeWidth={1.6} />
              <span>Experiências artísticas para eventos em todo o Brasil</span>
            </div>
            <div id="hero-title" className="font-serif text-[clamp(3.3rem,6.6vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f6f1e8]">
              <span data-hero-reveal className="block">Você imagina.</span><span data-hero-reveal className="block italic">A gente dá <span className="hero-gold-shimmer">vida.</span></span>
            </div>
            <h1 className="mt-7 max-w-xl text-lg font-semibold leading-7 text-[#f1d9aa] sm:text-xl">Estátua Viva e Personagens Vivos para Eventos em São Paulo e Todo o Brasil</h1>
            <p data-hero-reveal className="mt-4 max-w-xl text-base leading-8 text-[#d5d7cf] sm:text-lg">Desde 2005, criamos estátuas vivas, personagens vivos e performances personalizadas para casamentos, feiras, celebrações e eventos corporativos em todo o Brasil.</p>
            <div data-hero-reveal className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="https://wa.me/5511937765250?text=Ol%C3%A1!%20Quero%20consultar%20disponibilidade%20de%20est%C3%A1tuas%20vivas%20para%20meu%20evento." target="_blank" rel="noopener noreferrer" data-conversion="whatsapp_hero" className="hero-gold-button group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#dfbd7c] px-7 py-4 text-sm font-semibold text-[#071519] shadow-[0_10px_35px_rgba(211,175,108,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0d49a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">Consultar no WhatsApp <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.8} /></a>
              <a href="#acervo" className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#dfbd7c]/50 bg-transparent px-7 py-4 text-sm font-medium text-[#f5eee0] transition duration-300 hover:border-[#dfbd7c] hover:bg-[#dfbd7c]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">Conheça os personagens <ArrowDown aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transition-none" strokeWidth={1.8} /></a>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-[#dfbd7c]/20 pt-6 text-sm text-[#d8d5cb] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#f1d49d]"><Star aria-hidden="true" className="h-4 w-4 shrink-0 fill-[#dfbd7c] text-[#dfbd7c]" /><span><strong className="font-semibold text-[#f4dfb7]">5,0 no Google</strong> <span className="text-[#e3c580]" aria-label="5 estrelas">★★★★★</span> <span className="text-[#c6c8be]">· veja as avaliações</span></span></a>
              <div className="inline-flex items-center gap-2"><Drama aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-[#dfbd7c]" strokeWidth={1.6} /><span>Mais de 20 anos de performances desde 2005</span></div>
            </div>
          </div></div>

        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[#dfbd7c]/20 py-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#c5b28e]"><span className="hero-ticker"><span className="hero-ticker-track"><span>Performances vivas desde 2005 · Personagens para festas e eventos · Casamentos, feiras e eventos corporativos · Direção artística Rodolfo Valentino ·&nbsp;</span><span aria-hidden="true">Performances vivas desde 2005 · Personagens para festas e eventos · Casamentos, feiras e eventos corporativos · Direção artística Rodolfo Valentino ·&nbsp;</span></span></span><a href="#experiencias" className="inline-flex items-center gap-2 text-[#ead9b7] transition-colors hover:text-white"><span>Descubra mais</span><ArrowDown aria-hidden="true" className="h-4 w-4" /></a></div>
      </div>
    </section>
  );
}
