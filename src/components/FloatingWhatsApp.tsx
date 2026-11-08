'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { trackLeadAndOpenWhatsApp } from '@/lib/tracking';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Na página /bio e /links, não exibir o botão flutuante pois já contêm seus próprios CTAs e barra fixa dedicada
  if (pathname === '/bio' || pathname === '/links') {
    return null;
  }

  if (!visible) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackLeadAndOpenWhatsApp({
      message: 'Olá! Gostaria de consultar disponibilidade de estátuas vivas e personagens para meu evento.',
      leadSource: 'floating_button',
      leadLabel: 'botao_flutuante_whatsapp',
      eventCategory: 'Floating_CTA',
    });
  };

  return (
    <aside
      aria-label="Atendimento Rápido via WhatsApp"
      style={{ position: 'fixed' }}
      className="!fixed z-50 bottom-6 right-6 flex items-center select-none"
    >
      <a
        href="https://wa.me/5511937765250?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20de%20est%C3%A1tuas%20vivas%20e%20personagens%20para%20meu%20evento."
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a produção pelo WhatsApp"
        className="inline-flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#071318]/92 backdrop-blur-md text-[#ffe6a3] border border-[#dfbd7c]/60 shadow-[0_0_24px_rgba(223,189,124,0.4),0_12px_32px_rgba(0,0,0,0.7)] hover:shadow-[0_0_36px_rgba(245,215,145,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
      >
        <div className="relative flex items-center justify-center shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping" />
        </div>
        <MessageCircle size={19} className="text-[#dfbd7c] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider font-semibold text-[#f4f1ea] group-hover:text-[#ffe6a3] transition-colors">
          Falar com a produção
        </span>
      </a>
    </aside>
  );
}
