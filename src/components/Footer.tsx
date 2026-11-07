'use client';

import Link from 'next/link';
import BrandLogo from './BrandLogo';
import IsometricSocials from './IsometricSocials';
import { Instagram, Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer relative border-t border-alabaster/10 pt-20 pb-12 overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-alabaster/10">
          {/* Brand Manifesto */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-5"><BrandLogo className="brand-logo-footer" /></Link>

            <p className="font-sans text-sm text-stone-warm leading-relaxed mb-6 max-w-sm">
              Personagens vivos e performances artísticas para festas e eventos. Você imagina. A gente dá vida.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/estatuavivaproducoes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-alabaster/10 flex items-center justify-center text-stone-warm hover:text-champagne-gold hover:border-champagne-gold/40 transition-colors"
              >
                <Instagram strokeWidth={1.5} className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@estatuaviva.com.br"
                aria-label="E-mail de contato"
                className="w-9 h-9 border border-alabaster/10 flex items-center justify-center text-stone-warm hover:text-champagne-gold hover:border-champagne-gold/40 transition-colors"
              >
                <Mail strokeWidth={1.5} className="w-4 h-4" />
              </a>
              <Link
                href="/links"
                className="px-3 py-1.5 border border-alabaster/10 text-[11px] font-mono uppercase tracking-widest text-stone-warm hover:text-champagne-gold hover:border-champagne-gold/40 transition-colors flex items-center gap-1.5"
              >
                <span>Hub da Bio</span>
                <ArrowUpRight strokeWidth={1.5} className="w-3 h-3" />
              </Link>
            </div>

            <div className="mt-8">
              <IsometricSocials />
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-stone-warm">
              <li>
                <a href="#experiencias" className="hover:text-champagne-gold transition-colors">
                  Curadoria de Eventos
                </a>
              </li>
              <li>
                <a href="#acervo" className="hover:text-champagne-gold transition-colors">
                  Acervo de Personagens
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-champagne-gold transition-colors">
                  Galeria em Movimento
                </a>
              </li>
              <li>
                <a href="#clientes" className="hover:text-champagne-gold transition-colors">
                  Nossa proposta artística
                </a>
              </li>
              <li>
                <a href="#briefing" className="hover:text-champagne-gold transition-colors">
                  Planejar meu evento
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-champagne-gold transition-colors">
                  Dúvidas & Avaliações
                </a>
              </li>
            </ul>
          </div>

          {/* Official Operational Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-4">
              ATELIER & ATENDIMENTO OFICIAL
            </h4>

            <div className="flex items-start gap-3 text-xs font-sans text-stone-warm">
              <MapPin strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
              <span>
                R. Oriximiná, 27 — Cidade Mãe do Céu (Tatuapé)<br />
                São Paulo - SP, CEP 03306-060
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-sans text-stone-warm">
              <Clock strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0" />
              <span>Segunda a Sábado, das 09h às 22h</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-sans text-stone-warm">
              <Phone strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0" />
              <a
                href="https://wa.me/5511937765250"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne-gold transition-colors font-mono"
              >
                +55 (11) 93776-5250 (WhatsApp Direto)
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs font-sans text-stone-warm">
              <Mail strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0" />
              <a
                href="mailto:contato@estatuaviva.com.br"
                className="hover:text-champagne-gold transition-colors"
              >
                contato@estatuaviva.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-stone-warm">
          <div>
            © {currentYear} Estátua Viva Produções. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Direção: Rodolfo Valentino</span>
            <span>•</span>
            <span>São Paulo / Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


