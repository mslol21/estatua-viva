import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
export default function Hero() {
 return <section className="cinema-hero" aria-label="Apresentação Estátua Viva Produções">
   <div className="cinema-backdrop" aria-hidden="true" />
   <div className="cinema-grain" aria-hidden="true" />
   <div className="cinema-layout site-container">
     <div className="cinema-copy">
       <p className="cinema-kicker"><span /> PRODUÇÕES ARTÍSTICAS · SÃO PAULO</p>
       <h1><span>Você</span><span className="cinema-italic">imagina.</span><span>A gente <em>dá vida.</em></span></h1>
       <p className="cinema-description">Personagens vivos e performances que transformam encontros em histórias inesquecíveis.</p>
       <div className="cinema-actions"><a href="#briefing" className="cinema-primary">CRIAR MEU EVENTO <ArrowUpRight size={18} /></a><a href="#acervo" className="cinema-secondary">CONHECER O ACERVO <ArrowDown size={16} /></a></div>
     </div>
     <div className="cinema-visual"><div className="cinema-frame"><Image src="/brand/artista.webp" alt="Performance em dourado da Estátua Viva Produções" fill priority sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div><span className="cinema-index">01 / A ARTE EM CENA</span><span className="cinema-vertical" aria-hidden="true">ESTÁTUA VIVA PRODUÇÕES</span></div>
   </div>
   <div className="cinema-bottom site-container"><span>PERSONAGENS · ARTE · EXPERIÊNCIAS</span><a href="#experiencias">DESCUBRA <ArrowDown size={14} /></a><span>SÃO PAULO / BRASIL</span></div>
 </section>;
}
