import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
export default function Hero() {
  return <section className="brand-hero relative overflow-hidden border-b border-champagne-gold/20">
    <div className="hero-light" aria-hidden="true" />
    <div className="site-container relative z-10">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow mb-7"><span className="gold-rule" /> Arte que surpreende. Presença que encanta.</p>
          <h1 className="hero-title">Você imagina.<br /><em>A gente dá vida.</em></h1>
          <p className="hero-description">Estátuas vivas, personagens e performances artísticas que transformam o seu evento em um encontro inesquecível.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href="#briefing" className="button-gold">Planejar meu evento <ArrowUpRight size={17} /></a>
            <a href="#acervo" className="button-outline">Conhecer personagens <ArrowDown size={16} /></a>
          </div>
          <p className="mt-6 text-xs text-stone-warm">Festas e celebrações · Eventos corporativos · Ações culturais</p>
        </div>
        <figure className="hero-artwork">
          <div className="hero-artwork-frame"><Image src="/brand/artista.webp" alt="Artista da Estátua Viva Produções caracterizado em dourado, em moldura ornamental" width={794} height={794} priority sizes="(max-width: 767px) 92vw, 50vw" className="w-full h-auto" /></div>
          <figcaption className="hero-caption"><span>Estátua Viva Produções</span><span>O extraordinário, ao vivo.</span></figcaption>
        </figure>
      </div>
      <div className="hero-signature"><span className="eyebrow">Da primeira impressão à última lembrança.</span><a href="#experiencias" className="inline-flex items-center gap-3 text-sm text-stone-warm hover:text-champagne-gold">Descubra as possibilidades <ArrowDown size={16} /></a></div>
    </div>
  </section>;
}

