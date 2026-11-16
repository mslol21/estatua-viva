'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { trackLeadAndOpenWhatsApp } from '@/lib/tracking';

export interface CampaignStickyCTAProps {
  message: string;
  label: string;
  source?: string;
  headline?: string;
}

export default function CampaignStickyCTA({
  message,
  label,
  source = 'sticky_cta_mobile',
  headline = 'Orçamento Rápido via WhatsApp',
}: CampaignStickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe após 300px de rolagem em telas menores
      if (!dismissed && window.scrollY > 300) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackLeadAndOpenWhatsApp({
      message,
      leadSource: source,
      leadLabel: label,
      eventCategory: 'Mobile_Sticky_CTA',
    });
  };

  return (
    <aside
      aria-label="Atendimento comercial rápido"
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 animate-fade-in"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-champagne-gold/40 bg-[#071318]/96 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(223,189,124,0.3)]">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="relative shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/40">
            <MessageCircle size={17} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-alabaster truncate">{headline}</p>
            <p className="text-[10px] text-stone-warm truncate">Resposta direta com a produção artística</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleClick}
            className="px-3.5 py-2 rounded-xl bg-champagne-gold text-obsidian text-xs font-bold font-mono tracking-wide shadow-md hover:bg-[#ffe6a3] active:scale-95 transition-all"
          >
            Falar Agora
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Fechar botão flutuante"
            className="p-1.5 text-stone-warm/70 hover:text-white transition-colors"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}
