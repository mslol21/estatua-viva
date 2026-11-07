import BrandLogo from './BrandLogo';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return <section className="art-hero" aria-label="Estátua Viva Produções">
    <div className="art-hero-glow" aria-hidden="true" />
    <div className="art-hero-inner site-container">
      <div className="art-hero-copy">
        <p className="art-eyebrow"><span /> ARTE QUE SURPREENDE · DESDE 2005</p>
        <h1>Você imagina.<br /><em>A gente dá vida.</em></h1>
        <p className="art-intro">Estátuas vivas e personagens que surpreendem, encantam e fazem parte da história do seu evento.</p>
        <div className="art-actions"><a href="#acervo" className="art-primary">Conheça os personagens <ArrowUpRight size={18} /></a><a href="#briefing" className="art-secondary">Solicitar orçamento <ArrowUpRight size={17} /></a></div>
        <div className="art-note"><span>ESTÁTUAS VIVAS · PERSONAGENS</span><span>ESTÁTUA VIVA PRODUÇÕES</span></div>
      </div>
      <div className="hero-brand-stage" aria-label="Estátua Viva Produções">
        <div className="hero-brand-halo" aria-hidden="true" />
        <div className="hero-brand-orbit hero-brand-orbit-one" aria-hidden="true" />
        <div className="hero-brand-orbit hero-brand-orbit-two" aria-hidden="true" />
        <BrandLogo className="hero-brand-logo" />
        <span className="hero-brand-caption" aria-hidden="true">ARTE QUE SURPREENDE <span>✦</span> EXPERIÊNCIAS QUE FICAM</span>
      </div>
    </div>
    <div className="art-hero-footer site-container"><span>PERFORMANCES · PERSONAGENS · EVENTOS</span><a href="#experiencias">DESLIZE PARA DESCOBRIR <ArrowDownRight size={17} /></a><span>SÃO PAULO / BRASIL</span></div>
  </section>;
}

