'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, MessageCircle, Star } from 'lucide-react';

interface SocialCardProps {
  variant?: 'brand' | 'colorful';
  className?: string;
}

export default function SocialCard({ variant = 'brand', className = '' }: SocialCardProps) {
  const isBrand = variant === 'brand';

  return (
    <div className={`social-card-wrapper inline-block ${className}`}>
      <div className={`social-interactive-card ${isBrand ? 'brand-theme' : 'colorful-theme'}`}>
        {/* Background layer */}
        <div className="social-card-bg" />

        {/* Central Logo / Label */}
        <div className="social-card-logo">
          {isBrand ? 'Redes' : 'Socials'}
        </div>

        {/* Box 1: Instagram */}
        <a
          href="https://www.instagram.com/estatuavivaproducoes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Oficial"
          className="social-box box1"
        >
          <span className="social-icon">
            <Instagram strokeWidth={1.75} className="w-5 h-5 text-white" />
          </span>
        </a>

        {/* Box 2: WhatsApp */}
        <a
          href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Est%C3%A1tua%20Viva%20Produ%C3%A7%C3%B5es."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Produção"
          className="social-box box2"
        >
          <span className="social-icon">
            <MessageCircle strokeWidth={1.75} className="w-4 h-4 text-white" />
          </span>
        </a>

        {/* Box 3: Google Reviews */}
        <a
          href="https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Avaliações Google 5.0"
          className="social-box box3"
        >
          <span className="social-icon">
            <Star strokeWidth={1.75} className="w-3.5 h-3.5 text-white fill-white" />
          </span>
        </a>

        {/* Box 4: Accent corner */}
        <div className="social-box box4" />
      </div>
    </div>
  );
}

