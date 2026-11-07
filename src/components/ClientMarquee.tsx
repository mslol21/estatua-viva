'use client';

import { CLIENT_STORIES } from '@/data/portfolioData';
import { Award, Tv, Building2 } from 'lucide-react';

export default function ClientMarquee() {
  return (
    <section id="clientes" className="py-20 bg-charcoal/40 border-b border-alabaster/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-alabaster/10 pb-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold mb-2">
              CHANCELA DE CONFIANÇA & GRANDES MARCAS
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-alabaster font-normal">
              Presença nas principais emissoras de TV e palcos corporativos.
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-stone-warm shrink-0">
            [ PORTFÓLIO COMPROVADO ]
          </p>
        </div>
      </div>

      {/* Grid of Prestigious Clients */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-alabaster/10 border border-alabaster/10">
          {CLIENT_STORIES.map((client, idx) => (
            <div
              key={client.name}
              className="bg-obsidian p-8 flex flex-col justify-between hover:bg-charcoal transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-stone-warm uppercase tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-technical text-champagne-gold/70 px-2 py-0.5 border border-champagne-gold/20 rounded-full">
                    {client.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-alabaster group-hover:text-champagne-gold transition-colors mb-2">
                  {client.name}
                </h3>
              </div>
              <p className="text-xs font-sans text-stone-warm leading-relaxed pt-4 border-t border-alabaster/5">
                {client.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Quote Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-12 text-center">
        <p className="font-serif text-lg sm:text-xl italic text-stone-warm max-w-3xl mx-auto">
          &ldquo;A ilusão de pedra ou metal só se torna completa quando a técnica de respiração e imobilidade desafia o olhar do espectador.&rdquo;
        </p>
        <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold mt-2 block">
          — Rodolfo Valentino, Fundador e Diretor Artístico
        </span>
      </div>
    </section>
  );
}
