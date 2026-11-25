'use client';

import Link from 'next/link';
import BrandLogo from './BrandLogo';
import IsometricSocials from './IsometricSocials';
import { Instagram, Mail, Phone, MapPin, Clock, ArrowUpRight, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer relative border-t border-alabaster/10 pt-20 pb-12 overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-alabaster/10">
          {/* Brand Manifesto */}
          <div className="lg:col-span-4 flex flex-col items-start">
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
                href="mailto:contato@estatuavivaproducoes.com.br"
                aria-label="E-mail de contato"
                className="w-9 h-9 border border-alabaster/10 flex items-center justify-center text-stone-warm hover:text-champagne-gold hover:border-champagne-gold/40 transition-colors"
              >
                <Mail strokeWidth={1.5} className="w-4 h-4" />
              </a>
              <Link
                href="/bio"
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

          {/* Soluções Artísticas */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-4">
              SOLUÇÕES ARTÍSTICAS
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-stone-warm">
              <li>
                <Link href="/estatua-viva-para-eventos" className="hover:text-champagne-gold transition-colors font-medium text-alabaster">
                  Estátua Viva para Eventos
                </Link>
              </li>
              <li>
                <Link href="/estatua-viva-para-casamento" className="hover:text-champagne-gold transition-colors">
                  Estátuas para Casamentos
                </Link>
              </li>
              <li>
                <Link href="/estatua-viva-para-eventos-corporativos" className="hover:text-champagne-gold transition-colors">
                  Estátuas para Corporativo
                </Link>
              </li>
              <li>
                <Link href="/personagens-para-eventos" className="hover:text-champagne-gold transition-colors">
                  Personagens & Performances
                </Link>
              </li>
              <li>
                <Link href="/personagens-para-festas" className="hover:text-champagne-gold transition-colors">
                  Personagens para Festas
                </Link>
              </li>
              <li>
                <Link href="/natal" className="hover:text-champagne-gold transition-colors font-medium text-champagne-gold">
                  Especial de Natal
                </Link>
              </li>
              <li>
                <a href="/#acervo" className="hover:text-champagne-gold transition-colors">
                  Acervo de Personagens
                </a>
              </li>
              <li>
                <a href="/#experiencias" className="hover:text-champagne-gold transition-colors">
                  Curadoria de Experiências
                </a>
              </li>
            </ul>
          </div>

          {/* Corporativo & B2B */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-4">
              CORPORATIVO & B2B
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-stone-warm">
              <li>
                <Link href="/eventos-corporativos" className="hover:text-champagne-gold transition-colors font-medium text-alabaster">
                  Eventos Corporativos
                </Link>
              </li>
              <li>
                <Link href="/fim-de-ano" className="hover:text-champagne-gold transition-colors font-medium text-champagne-gold">Festas de Fim de Ano</Link>
              </li>
              <li>
                <Link href="/confraternizacao-empresa" className="hover:text-champagne-gold transition-colors font-medium text-alabaster">
                  Confraternizações
                </Link>
              </li>
              <li>
                <Link href="/entretenimento-para-empresas" className="hover:text-champagne-gold transition-colors">
                  Entretenimento Empresas
                </Link>
              </li>
              <li>
                <a href="/#clientes" className="hover:text-champagne-gold transition-colors">
                  Proposta Artística
                </a>
              </li>
              <li>
                <a href="/#briefing" className="hover:text-champagne-gold transition-colors">
                  Planejar meu Evento
                </a>
              </li>
            </ul>
          </div>

          {/* Institucional, Contato & Legal */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-4">
              INSTITUCIONAL & CONTATO
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-stone-warm mb-6">
              <li>
                <Link href="/equipe" className="hover:text-champagne-gold transition-colors">
                  Nossa Equipe (Rodolfo Valentino)
                </Link>
              </li>
              <li>
                <Link href="/perguntas-frequentes" className="hover:text-champagne-gold transition-colors">
                  Perguntas Frequentes (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-champagne-gold transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>

            <div className="border-t border-alabaster/10 pt-4 space-y-3">
              <div className="flex items-start gap-3 text-xs font-sans text-stone-warm">
                <MapPin strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                <span>
                  Base no Tatuapé, São Paulo (SP). Atendimento em todo o Brasil.<br />
                  Apresentações no local do evento.
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-sans text-stone-warm">
                <Clock strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0" />
                <span>Atendimento & Disponibilidade via WhatsApp</span>
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
                  href="mailto:contato@estatuavivaproducoes.com.br"
                  className="hover:text-champagne-gold transition-colors"
                >
                  contato@estatuavivaproducoes.com.br
                </a>
              </div>
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
            <span>São Paulo • Atendemos todo o Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


