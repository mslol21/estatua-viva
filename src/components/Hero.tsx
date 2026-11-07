'use client';

import Image from 'next/image';
import { ArrowDown, MessageCircle, Star, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden flex flex-col justify-between border-b border-alabaster/10">
      {/* Background theatrical spotlight aura */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-champagne-gold/[0.04] blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10 my-auto">
        {/* Superior technical metadata badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-6 border border-champagne-gold/30 bg-charcoal/60 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold">
            EST. 2005 • SÃO PAULO PARA TODO O BRASIL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Headline & Context */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal tracking-tight text-alabaster leading-[0.98] mb-6">
              A arte da imobilidade que <span className="italic font-normal text-champagne-gold font-serif">surpreende</span> e transforma eventos em espetáculos.
            </h1>

            <p className="font-sans text-base sm:text-lg text-stone-warm max-w-2xl leading-relaxed mb-9">
              Performances hiper-realistas, maquiagem cinematográfica e figurinos autorais para eventos corporativos, feiras, casamentos de alto padrão e produções de TV.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Est%C3%A1tua%20Viva%20Produ%C3%A7%C3%B5es%20e%20gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-xl shadow-champagne-gold/15 group"
              >
                <MessageCircle strokeWidth={1.5} className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Consultar via WhatsApp</span>
              </a>

              <a
                href="#acervo"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 border border-alabaster/15 hover:border-champagne-gold text-alabaster text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 group hover:bg-charcoal/40"
              >
                <span>Explorar Acervo de Personagens</span>
                <ArrowDown strokeWidth={1.5} className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto w-full border border-alabaster/10 overflow-hidden bg-charcoal group">
              <Image
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=85"
                alt="Performance de Estátua Viva em Ouro Imperial — Estátua Viva Produções"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center grayscale-[0.25] contrast-[1.08] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-90" />
              
              {/* Floating Artistic Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 backdrop-blur-md bg-obsidian/85 border border-alabaster/10 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-technical text-champagne-gold">
                    OBRA EM DESTAQUE
                  </div>
                  <div className="font-serif text-lg text-alabaster italic">
                    Deusa Dourada da Abundância
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] uppercase text-stone-warm">
                    Ouro Nobre
                  </span>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-20 h-20 border-l border-b border-champagne-gold/40 pointer-events-none" />
            <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 border-r border-t border-champagne-gold/40 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Hero Footnote / Benchmark Tri-column Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full mt-12 pt-8 border-t border-alabaster/10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-alabaster/10">
          <div className="py-3 md:py-0 md:pr-8 flex items-start gap-4">
            <span className="font-mono text-xs font-semibold text-champagne-gold">01</span>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-technical text-stone-warm mb-1 flex items-center gap-1.5">
                <span>REPUTAÇÃO MÁXIMA</span>
                <span className="text-champagne-gold flex items-center">
                  <Star className="w-3 h-3 fill-current text-champagne-gold" />
                  <span className="ml-0.5 text-alabaster font-mono font-medium">5.0</span>
                </span>
              </div>
              <p className="text-sm font-sans text-alabaster">
                Avaliação máxima com 37 depoimentos verificados no Google.
              </p>
            </div>
          </div>

          <div className="py-3 md:py-0 md:px-8 flex items-start gap-4">
            <span className="font-mono text-xs font-semibold text-champagne-gold">02</span>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-technical text-stone-warm mb-1">
                TRAJETÓRIA ARTÍSTICA
              </div>
              <p className="text-sm font-sans text-alabaster">
                +20 anos de experiência sob direção cenográfica de Rodolfo Valentino.
              </p>
            </div>
          </div>

          <div className="py-3 md:py-0 md:pl-8 flex items-start gap-4">
            <span className="font-mono text-xs font-semibold text-champagne-gold">03</span>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-technical text-stone-warm mb-1">
                LOGÍSTICA & ALCANCE
              </div>
              <p className="text-sm font-sans text-alabaster">
                Atelier no Tatuapé (SP) com estrutura para eventos em todo o território nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
