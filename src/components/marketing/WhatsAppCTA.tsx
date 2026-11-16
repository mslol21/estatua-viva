'use client';

import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { trackLeadAndOpenWhatsApp } from '@/lib/tracking';

export interface WhatsAppCTAProps {
  message: string;
  label: string;
  source?: string;
  buttonText?: string;
  subText?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'outline' | 'card';
}

export default function WhatsAppCTA({
  message,
  label,
  source = 'whatsapp_cta',
  buttonText = 'Solicitar Orçamento no WhatsApp',
  subText,
  className = '',
  size = 'md',
  variant = 'gold',
}: WhatsAppCTAProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackLeadAndOpenWhatsApp({
      message,
      leadSource: source,
      leadLabel: label,
      eventCategory: 'Engagement',
    });
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  }[size];

  if (variant === 'card') {
    return (
      <div className={`p-6 sm:p-8 rounded-2xl border border-champagne-gold/30 bg-[#071318]/90 text-center neon-gold-card ${className}`}>
        <h4 className="font-serif text-2xl text-alabaster mb-2">Prefere conversar diretamente com nossa produção?</h4>
        {subText && <p className="text-xs sm:text-sm text-stone-warm max-w-md mx-auto mb-6">{subText}</p>}
        <button
          type="button"
          onClick={handleClick}
          className="button-gold inline-flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(223,189,124,0.35)]"
        >
          <MessageCircle size={18} />
          <span>{buttonText}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  const baseButtonClasses =
    variant === 'outline'
      ? 'rounded-full border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold/10 transition-colors font-semibold'
      : 'button-gold rounded-full shadow-[0_0_20px_rgba(223,189,124,0.3)] hover:shadow-[0_0_30px_rgba(245,215,145,0.5)]';

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-2.5 font-semibold cursor-pointer ${baseButtonClasses} ${sizeStyles} ${className}`}
      >
        <MessageCircle size={size === 'sm' ? 15 : size === 'lg' ? 20 : 18} className="shrink-0" />
        <span>{buttonText}</span>
        <ArrowRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} className="shrink-0" />
      </button>
      {subText && <span className="text-[11px] text-stone-warm/80 pl-2">{subText}</span>}
    </div>
  );
}
