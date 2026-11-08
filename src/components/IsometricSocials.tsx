'use client';

import React from 'react';
import { Instagram, MessageCircle, Star, Youtube, Facebook } from 'lucide-react';

interface IsometricSocialsProps {
  className?: string;
}

export default function IsometricSocials({ className = '' }: IsometricSocialsProps) {
  const socials = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5511937765250?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Est%C3%A1tua%20Viva%20Produ%C3%A7%C3%B5es.',
      icon: MessageCircle,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/estatuavivaproducoes',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@estatuavivaoficial',
      icon: Youtube,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/estatuavivaproducoes',
      icon: Facebook,
    },
    {
      name: 'Google 5.0',
      href: 'https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva',
      icon: Star,
    },
  ];

  return (
    <div className={`iso-social-container inline-block ${className}`}>
      <div className="iso-social-card neon-gold-card">
        <ul className="iso-social-list">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className="iso-pro">
                <span />
                <span />
                <span />
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.name}
                  className="iso-link"
                >
                  <Icon className="iso-svg" strokeWidth={1.8} />
                </a>
                <div className="iso-text">{item.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
