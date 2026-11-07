import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return <section className="art-hero" aria-label="Estátua Viva Produções">
    <div className="art-hero-glow" aria-hidden="true" />
    <div className="art-hero-inner site-container">
      <div className="art-hero-copy">
        <p className="art-eyebrow"><span /> ARTE QUE SURPREENDE · DESDE 2005</p>
        <h1>O instante<br /><em>ganha vida.</em></h1>
        <p className="art-intro">Estátuas vivas, personagens e performances que transformam seu evento em uma experiência para lembrar.</p>
        <div className="art-actions"><a href="#acervo" className="art-primary">Explore os personagens <ArrowUpRight size={18} /></a><a href="#briefing" className="art-secondary">Conte seu evento <ArrowUpRight size={17} /></a></div>
        <div className="art-note"><span>01 — A ARTE DO ENCONTRO</span><span>ESTÁTUA VIVA PRODUÇÕES</span></div>
      </div>
      <div className="art-hero-stage">
        <span className="art-orbit art-orbit-one" aria-hidden="true" /><span className="art-orbit art-orbit-two" aria-hidden="true" />
        <div className="art-main-image"><Image src="/brand/artista.webp" alt="Artista caracterizado como estátua viva em dourado" fill priority sizes="(max-width: 767px) 85vw, 45vw" className="object-cover" /></div>
        <div className="art-side-image"><Image src="/brand/pirata.webp" alt="Personagem pirata da Estátua Viva Produções" fill sizes="(max-width: 767px) 26vw, 15vw" className="object-cover object-top" /><span>PERSONAGENS<br />QUE ENCANTAM</span></div>
        <span className="art-stage-label">O EXTRAORDINÁRIO<br /><em>acontece ao vivo.</em></span>
      </div>
    </div>
    <div className="art-hero-footer site-container"><span>PERFORMANCES · PERSONAGENS · EVENTOS</span><a href="#experiencias">DESLIZE PARA DESCOBRIR <ArrowDownRight size={17} /></a><span>SÃO PAULO / BRASIL</span></div>
  </section>;
}
