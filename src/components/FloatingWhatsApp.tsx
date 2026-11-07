'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const defaultMessage = 'Olá! Gostaria de falar com a produção da Estátua Viva Produções sobre disponibilidade para meu evento.';
  const whatsappUrl = `https://wa.me/5511937765250?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Atendimento ao Vivo via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dynamic Speech Bubble on hover / desktop */}
      <div
        className={`hidden md:block transition-all duration-300 transform origin-right ${
          hovered ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="bg-charcoal/95 border border-champagne-gold/40 text-alabaster px-4 py-2.5 rounded shadow-2xl backdrop-blur-md max-w-xs text-xs font-sans leading-snug">
          <span className="font-mono text-[9px] uppercase tracking-widest text-champagne-gold block mb-0.5">
            PRODUÇÃO ONLINE AGORA
          </span>
          Olá! Somos da Equipe Estátua Viva Produções. Vamos criar algo inesquecível?
        </div>
      </div>

      {/* Main Pill Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Produção via WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-obsidian/90 hover:bg-charcoal border border-champagne-gold/50 hover:border-champagne-gold text-alabaster rounded-full shadow-2xl backdrop-blur-md transition-all duration-300"
      >
        {/* Pulsing online status indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>

        <MessageCircle strokeWidth={1.5} className="w-4 h-4 text-champagne-gold group-hover:scale-110 transition-transform" />

        <span className="font-mono text-xs uppercase tracking-[0.12em] font-medium text-alabaster group-hover:text-champagne-gold transition-colors">
          Falar com a Produção
        </span>
      </a>
    </aside>
  );
}
