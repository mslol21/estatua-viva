'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageCircle,
  Star,
  Instagram,
  Youtube,
  Facebook,
  Sparkles,
  ArrowUpRight,
  Building2,
  Heart,
  PartyPopper,
  Palette,
  CheckCircle2,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { CHARACTERS, Character } from '@/data/portfolioData';
import { trackLeadAndOpenWhatsApp, captureAndStoreUtms } from '@/lib/tracking';

const BIO_CATEGORIES = [
  'Todos',
  'Ouro Imperial',
  'Mármore Branco',
  'Prata Industrial',
  'Temáticos & Cosplay',
] as const;

type BioCategory = typeof BIO_CATEGORIES[number];

export default function BioHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<BioCategory>('Todos');

  useEffect(() => {
    captureAndStoreUtms();
  }, []);

  const filteredCharacters = selectedCategory === 'Todos'
    ? CHARACTERS
    : CHARACTERS.filter((c) => c.category === selectedCategory);

  const handleQuickWhatsApp = (label: string, customMessage: string) => {
    trackLeadAndOpenWhatsApp({
      message: customMessage,
      leadSource: 'bio_page',
      leadLabel: label,
      eventCategory: 'Bio_Quick_Action',
    });
  };

  const handleCharacterWhatsApp = (char: Character) => {
    const text = `Olá! Vim pelo link da bio, gostei da performance "${char.name}" (${char.category}) e quero consultar disponibilidade e valores para meu evento.`;
    trackLeadAndOpenWhatsApp({
      message: text,
      leadSource: 'bio_showcase',
      leadLabel: `character_${char.id}`,
      eventCategory: 'Bio_Character_Inquiry',
    });
  };

  return (
    <div className="site-surface min-h-screen text-[#f4f1ea] relative selection:bg-[#dfbd7c] selection:text-[#071318]">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[450px] bg-champagne-gold/10 blur-[130px] rounded-full"
      />

      <main className="max-w-[480px] mx-auto min-h-screen px-4 py-8 relative z-10 flex flex-col justify-between">
        <div>
          {/* 1. CABEÇALHO DE AUTORIDADE & PROVA SOCIAL */}
          <header className="flex flex-col items-center text-center mb-6">
            {/* Monograma Dourado EV */}
            <Link
              href="/"
              className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#dfbd7c] via-[#b8862d] to-[#dfbd7c] p-[2px] shadow-[0_0_25px_rgba(223,189,124,0.4)] hover:shadow-[0_0_35px_rgba(223,189,124,0.7)] transition-all mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfbd7c]"
            >
              <div className="w-full h-full rounded-full bg-[#071318] flex items-center justify-center">
                <span className="font-serif text-2xl font-bold tracking-widest text-[#ffe6a3] group-hover:scale-105 transition-transform">
                  EV
                </span>
              </div>
            </Link>

            <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#f4f1ea] mb-1.5">
              Estátua Viva Produções
            </h1>
            <p className="font-sans text-xs text-[#c7c9c1] max-w-xs leading-relaxed mb-3">
              Você imagina. A gente dá vida. Performances artísticas e estátuas vivas em São Paulo desde 2005.
            </p>

            {/* Selo Prova Social Google 5.0 */}
            <a
              href="https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver 5 estrelas no Google"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#dfbd7c]/15 text-[#ffe6a3] border border-[#dfbd7c]/40 hover:border-[#ffe6a3] hover:shadow-[0_0_12px_rgba(223,189,124,0.4)] transition-all mb-4"
            >
              <span className="text-[#ffe6a3] tracking-widest">★★★★★</span>
              <span>5,0 no Google · Opiniões reais</span>
              <ArrowUpRight size={12} />
            </a>

            {/* Ícones sociais compactos */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/estatuavivaproducoes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="w-8 h-8 rounded-full border border-alabaster/15 flex items-center justify-center text-stone-warm hover:text-[#ffe6a3] hover:border-[#dfbd7c]/60 hover:shadow-[0_0_10px_rgba(223,189,124,0.3)] transition-all"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.youtube.com/@estatuavivaoficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Oficial"
                className="w-8 h-8 rounded-full border border-alabaster/15 flex items-center justify-center text-stone-warm hover:text-[#ffe6a3] hover:border-[#dfbd7c]/60 hover:shadow-[0_0_10px_rgba(223,189,124,0.3)] transition-all"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://www.facebook.com/estatuavivaproducoes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial"
                className="w-8 h-8 rounded-full border border-alabaster/15 flex items-center justify-center text-stone-warm hover:text-[#ffe6a3] hover:border-[#dfbd7c]/60 hover:shadow-[0_0_10px_rgba(223,189,124,0.3)] transition-all"
              >
                <Facebook size={15} />
              </a>
            </div>
          </header>

          {/* 2. BLOCO DE CONTATO IMEDIATO (ACIMA DA DOBRA) */}
          <section aria-label="Contato Imediato" className="mb-8">
            {/* Botão Principal Metálico de Alta Conversão */}
            <button
              type="button"
              onClick={() =>
                handleQuickWhatsApp(
                  'cta_principal_topo',
                  'Olá! Vim pelo link da bio e gostaria de consultar a disponibilidade e valores para meu evento.'
                )
              }
              className="w-full relative group overflow-hidden rounded-xl p-[2px] bg-gradient-to-r from-[#dfbd7c] via-[#ffe6a3] to-[#dfbd7c] shadow-[0_0_25px_rgba(223,189,124,0.5)] hover:shadow-[0_0_35px_rgba(245,215,145,0.8)] transition-all mb-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfbd7c]"
            >
              <div className="w-full bg-gradient-to-r from-[#dfbd7c] via-[#eed293] to-[#dfbd7c] text-[#071318] px-5 py-3.5 rounded-[10px] flex items-center justify-between font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#071318]/10 flex items-center justify-center text-[#071318]">
                    <MessageCircle size={20} className="fill-[#071318]/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#071318]/80">
                        Atendimento Online
                      </span>
                    </div>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#071318] block leading-tight">
                      Consultar no WhatsApp ↗
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-[#071318] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            {/* 4 Botões Rápidos de Ocasião (Grid 2x2) */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() =>
                  handleQuickWhatsApp(
                    'ocasioes_corporativo',
                    'Olá! Vim pelo link da bio e quero consultar estátuas vivas/personagens para um Evento Corporativo / Feira.'
                  )
                }
                className="neon-gold-card p-3 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] text-left transition-all group flex flex-col justify-between min-h-[78px]"
              >
                <div className="flex items-center justify-between text-[#dfbd7c] mb-1">
                  <Building2 size={16} />
                  <ArrowUpRight size={13} className="text-[#dfbd7c]/70 group-hover:text-[#ffe6a3] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-xs font-medium text-[#f4f1ea] leading-tight group-hover:text-[#ffe6a3]">
                  Corporativo / Feiras B2B
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickWhatsApp(
                    'ocasioes_casamento',
                    'Olá! Vim pelo link da bio e quero consultar estátuas vivas para recepção/festa de Casamento.'
                  )
                }
                className="neon-gold-card p-3 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] text-left transition-all group flex flex-col justify-between min-h-[78px]"
              >
                <div className="flex items-center justify-between text-[#dfbd7c] mb-1">
                  <Heart size={16} />
                  <ArrowUpRight size={13} className="text-[#dfbd7c]/70 group-hover:text-[#ffe6a3] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-xs font-medium text-[#f4f1ea] leading-tight group-hover:text-[#ffe6a3]">
                  Casamento & Recepção
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickWhatsApp(
                    'ocasioes_festa',
                    'Olá! Vim pelo link da bio e quero consultar personagens/estátuas vivas para uma Festa / 15 Anos.'
                  )
                }
                className="neon-gold-card p-3 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] text-left transition-all group flex flex-col justify-between min-h-[78px]"
              >
                <div className="flex items-center justify-between text-[#dfbd7c] mb-1">
                  <PartyPopper size={16} />
                  <ArrowUpRight size={13} className="text-[#dfbd7c]/70 group-hover:text-[#ffe6a3] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-xs font-medium text-[#f4f1ea] leading-tight group-hover:text-[#ffe6a3]">
                  Festas & 15 Anos
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickWhatsApp(
                    'ocasioes_sob_medida',
                    'Olá! Vim pelo link da bio e gostaria de orçar um Projeto Artístico Sob Medida.'
                  )
                }
                className="neon-gold-card p-3 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] text-left transition-all group flex flex-col justify-between min-h-[78px]"
              >
                <div className="flex items-center justify-between text-[#dfbd7c] mb-1">
                  <Palette size={16} />
                  <ArrowUpRight size={13} className="text-[#dfbd7c]/70 group-hover:text-[#ffe6a3] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-xs font-medium text-[#f4f1ea] leading-tight group-hover:text-[#ffe6a3]">
                  Figurino Sob Medida
                </span>
              </button>
            </div>
          </section>

          {/* 3. VITRINE INTERATIVA DE TRABALHOS ("Sem Sair Daqui") */}
          <section aria-labelledby="vitrine-title" className="mb-9">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#dfbd7c]" />
                <h2 id="vitrine-title" className="font-serif text-lg text-[#f4f1ea] font-medium">
                  Vitrine de Personagens
                </h2>
              </div>
              <span className="text-[10px] font-mono text-stone-warm uppercase tracking-wider">
                Deslize para ver
              </span>
            </div>

            {/* Pílulas de Filtro */}
            <div
              data-lenis-prevent
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-3.5"
            >
              {BIO_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'bg-[#dfbd7c] text-[#071318] font-bold shadow-[0_0_12px_rgba(223,189,124,0.5)]'
                        : 'bg-[#0d272d]/60 border border-alabaster/10 text-stone-warm hover:text-alabaster'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Carrossel Horizontal Swipe de Cards com Neon Dourado */}
            <div
              data-lenis-prevent
              className="flex gap-3.5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
            >
              {filteredCharacters.map((char) => (
                <div
                  key={char.id}
                  className="neon-gold-card w-[220px] shrink-0 snap-start rounded-2xl overflow-hidden bg-[#0c242a] flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] w-full bg-[#071318] overflow-hidden">
                    <Image
                      src={char.imageUrl}
                      alt={char.name}
                      fill
                      sizes="220px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031014]/95 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#071318]/85 text-[#ffe6a3] border border-[#dfbd7c]/40 backdrop-blur-sm">
                      {char.category}
                    </span>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <h3 className="font-serif text-lg font-normal text-white leading-tight">
                        {char.name}
                      </h3>
                      <p className="text-[11px] text-[#c7c9c1] line-clamp-1 mt-0.5">
                        {char.idealFor}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0a1e24]">
                    <button
                      type="button"
                      onClick={() => handleCharacterWhatsApp(char)}
                      className="w-full py-2 px-3 rounded-lg bg-[#dfbd7c] hover:bg-[#ffe6a3] text-[#071318] text-xs font-mono uppercase tracking-wider font-bold flex items-center justify-between transition-colors shadow-[0_0_12px_rgba(223,189,124,0.3)]"
                    >
                      <span>Orçar Personagem</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. ATALHOS PARA AS PÁGINAS COMPLETAS E SIMULADOR */}
          <section aria-label="Navegação Completa" className="space-y-2.5 mb-10">
            <Link
              href="/#briefing"
              className="neon-gold-card block p-3.5 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#dfbd7c] block mb-0.5">
                    Configurador Online
                  </span>
                  <span className="text-sm font-serif font-medium text-[#f4f1ea] group-hover:text-[#ffe6a3] transition-colors">
                    ⚡ Simular Proposta Expressa em 30s
                  </span>
                </div>
                <ChevronRight size={18} className="text-[#dfbd7c] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/estatua-viva-para-casamento"
              className="neon-gold-card block p-3.5 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#dfbd7c] block mb-0.5">
                    Especial Noivas & Cerimonial
                  </span>
                  <span className="text-sm font-serif font-medium text-[#f4f1ea] group-hover:text-[#ffe6a3] transition-colors">
                    💍 Ver Página Especial de Casamentos
                  </span>
                </div>
                <ChevronRight size={18} className="text-[#dfbd7c] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/estatua-viva-para-eventos-corporativos"
              className="neon-gold-card block p-3.5 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#dfbd7c] block mb-0.5">
                    Estandes & Congressos
                  </span>
                  <span className="text-sm font-serif font-medium text-[#f4f1ea] group-hover:text-[#ffe6a3] transition-colors">
                    🏛️ Ver Página de Eventos Corporativos
                  </span>
                </div>
                <ChevronRight size={18} className="text-[#dfbd7c] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/"
              className="neon-gold-card block p-3.5 rounded-xl bg-[#0a1e24]/70 hover:bg-[#0d272d] transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#dfbd7c] block mb-0.5">
                    Experiência Completa
                  </span>
                  <span className="text-sm font-serif font-medium text-[#f4f1ea] group-hover:text-[#ffe6a3] transition-colors">
                    🌐 Acessar Site Oficial Completo
                  </span>
                </div>
                <ChevronRight size={18} className="text-[#dfbd7c] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </section>
        </div>

        {/* 5. RODAPÉ OFICIAL DA MARCA */}
        <footer className="pt-6 border-t border-alabaster/10 text-center font-sans text-xs text-stone-warm space-y-2">
          <p className="font-serif text-sm text-[#f4f1ea]">
            Estátua Viva Produções · Direção Artística Rodolfo Valentino
          </p>
          <p className="text-[11px] text-stone-warm">
            R. Oriximiná, 27 — Tatuapé, São Paulo/SP · CEP 03306-060
          </p>
          <p className="font-mono text-[11px] text-[#dfbd7c]">
            Atendimento: +55 11 93776-5250
          </p>
          <div className="pt-2 text-[10px] text-stone-warm/60">
            © {new Date().getFullYear()} Estátua Viva Produções. Todos os direitos reservados.
          </div>
        </footer>
      </main>

      {/* Floating Bottom Bar para Mobile */}
      <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-[#071318]/90 backdrop-blur-lg border-t border-[#dfbd7c]/30 sm:hidden">
        <button
          type="button"
          onClick={() =>
            handleQuickWhatsApp(
              'barra_fixa_inferior',
              'Olá! Vim pelo link da bio e gostaria de consultar orçamento para meu evento.'
            )
          }
          className="w-full py-3 px-4 rounded-xl bg-[#dfbd7c] text-[#071318] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(223,189,124,0.6)]"
        >
          <MessageCircle size={16} />
          <span>Falar no WhatsApp (Atendimento Online)</span>
        </button>
      </div>
    </div>
  );
}
