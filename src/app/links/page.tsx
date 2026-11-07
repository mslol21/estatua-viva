import type { Metadata } from 'next';
import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import {
  MessageCircle,
  Sparkles,
  Layers,
  Star,
  Instagram,
  Phone,
  ArrowUpRight,
  MapPin,
  CalendarCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Canais Oficiais & Atendimento | Estátua Viva Produções',
  description: 'Acesse nosso WhatsApp direto, acervo de personagens, solicitação de propostas e redes oficiais da Estátua Viva Produções.',
};

const BIO_LINKS = [
  {
    title: 'Consultar Disponibilidade de Data',
    subtitle: 'Fale direto com a produção cenográfica via WhatsApp',
    href: 'https://wa.me/5511937765250?text=Ol%C3%A1%21%20Vim%20pelo%20link%20da%20Bio%20e%20gostaria%20de%20consultar%20disponibilidade%20para%20meu%20evento.',
    highlight: true,
    icon: MessageCircle,
    isExternal: true,
  },
  {
    title: 'Explorar Acervo de Personagens',
    subtitle: 'Ouro Imperial, Mármore Branco, Prata e Projetos Customizados',
    href: '/#acervo',
    highlight: false,
    icon: Layers,
    isExternal: false,
  },
  {
    title: 'Planejar meu evento',
    subtitle: 'Conte sua ideia e solicite uma proposta',
    href: '/#briefing',
    highlight: false,
    icon: CalendarCheck,
    isExternal: false,
  },
  {
    title: 'Consultar avaliações no Google',
    subtitle: 'Leia as avaliações diretamente no Google',
    href: 'https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva',
    highlight: false,
    icon: Star,
    isExternal: true,
  },
  {
    title: 'Instagram Oficial @estatuavivaproducoes',
    subtitle: 'Bastidores, ensaios e vídeos de atuações ao vivo',
    href: 'https://www.instagram.com/estatuavivaproducoes',
    highlight: false,
    icon: Instagram,
    isExternal: true,
  },
];

export default function LinksPage() {
  return (
    <main id="conteudo" tabIndex={-1} className="min-h-screen bg-obsidian text-alabaster py-16 px-4 sm:px-6 relative flex flex-col justify-between items-center overflow-hidden">
      {/* Background Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-champagne-gold/[0.04] blur-[120px] rounded-full"
      />

      <div className="w-full max-w-lg mx-auto relative z-10 flex flex-col items-center">
        {/* Brand Header */}
        <Link href="/" className="group flex flex-col items-center text-center mb-8 focus:outline-none">
          <BrandLogo className="brand-logo-bio" />
          <h1 className="sr-only">Estátua Viva Produções — canais oficiais</h1>
          <p className="font-sans text-xs text-stone-warm max-w-xs mt-3 leading-relaxed">
            Você imagina. A gente dá vida. Personagens vivos e performances artísticas para festas e eventos.
          </p>
        </Link>

        {/* Link Buttons */}
        <div className="w-full space-y-3.5 mb-10">
          {BIO_LINKS.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <div
                className={`w-full p-4 border transition-all duration-300 flex items-center justify-between group ${
                  item.highlight
                    ? 'bg-champagne-gold text-obsidian border-champagne-gold shadow-xl shadow-champagne-gold/20'
                    : 'bg-charcoal/80 border-alabaster/10 hover:border-champagne-gold/60 text-alabaster hover:bg-charcoal'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 ${
                      item.highlight
                        ? 'bg-obsidian/10 text-obsidian'
                        : 'border border-alabaster/10 text-champagne-gold bg-obsidian'
                    }`}
                  >
                    <Icon strokeWidth={1.5} className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-xs uppercase tracking-wider font-semibold">
                      {item.title}
                    </div>
                    <div
                      className={`text-[11px] font-sans ${
                        item.highlight ? 'text-obsidian/80' : 'text-stone-warm'
                      }`}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight
                  strokeWidth={1.5}
                  className={`w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                    item.highlight ? 'text-obsidian' : 'text-stone-warm group-hover:text-champagne-gold'
                  }`}
                />
              </div>
            );

            if (item.isExternal) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={idx} href={item.href} className="block focus:outline-none">
                {content}
              </Link>
            );
          })}
        </div>

        {/* Location & Quick Contact */}
        <div className="w-full p-5 bg-charcoal/40 border border-alabaster/10 text-center font-mono text-xs text-stone-warm space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-alabaster">
            <MapPin strokeWidth={1.5} className="w-3.5 h-3.5 text-champagne-gold" />
            <span className="text-[11px] tracking-wide">Tatuapé, São Paulo - SP (Atendimento Nacional)</span>
          </div>
          <div className="text-[10px] text-stone-warm">
            WhatsApp Oficial: +55 (11) 93776-5250
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center relative z-10 font-mono text-[10px] text-stone-warm/70 uppercase tracking-widest">
        <Link href="/" className="hover:text-champagne-gold transition-colors">
          ← Voltar para o Site Oficial
        </Link>
      </footer>
    </main>
  );
}

