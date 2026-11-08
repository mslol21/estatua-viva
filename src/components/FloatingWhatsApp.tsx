'use client';

import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { trackLeadAndOpenWhatsApp } from '@/lib/tracking';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 450);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  if (!visible) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackLeadAndOpenWhatsApp({
      message: 'Olá! Gostaria de consultar disponibilidade para meu evento.',
      leadSource: 'floating_button',
      leadLabel: 'botao_flutuante_whatsapp',
      eventCategory: 'Floating_CTA',
    });
  };

  return (
    <a
      href="https://wa.me/5511937765250?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20meu%20evento."
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a produção pelo WhatsApp"
      className="neon-gold-card fixed z-40 bottom-5 right-5 inline-flex items-center justify-center gap-2.5 min-h-12 px-5 py-3 rounded-full bg-[#071318]/90 backdrop-blur-md text-[#ffe6a3] shadow-[0_0_20px_rgba(223,189,124,0.45)] hover:scale-105 transition-all"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <MessageCircle size={19} strokeWidth={1.8} />
      <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider font-semibold">
        Falar com a produção
      </span>
    </a>
  );
}
