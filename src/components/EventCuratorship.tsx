'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Building2, Heart, Drama } from 'lucide-react';
const events = [
  { title: 'Corporativos & feiras', icon: Building2, subtitle: 'Dê presença à sua marca.', text: 'Valorize a presença da sua marca em feiras, convenções, lançamentos e recepções com performances que atraem olhares, estimulam interações e criam oportunidades de registro fotográfico.', points: ['Recepção e interação com convidados', 'Ações em estandes e lançamentos', 'Possibilidade de criação personalizada'] },
  { title: 'Festas & celebrações', icon: Heart, subtitle: 'Seu grande dia merece encanto.', text: 'Receba seus convidados com personagens marcantes e transforme casamentos, aniversários e formaturas em momentos de surpresa, interação e fotografias especiais.', points: ['Casamentos e aniversários', 'Festas de 15 anos e formaturas', 'Personagens para momentos especiais'] },
  { title: 'Temáticos & culturais', icon: Drama, subtitle: 'Histórias que saem da imaginação.', text: 'Dê vida a temas, épocas e narrativas com personagens vivos, caracterizações e performances para festivais, espaços culturais e eventos temáticos.', points: ['Festas temáticas e datas comemorativas', 'Intervenções em espaços culturais', 'Experiências com personagens vivos'] },
];
export default function EventCuratorship() {
  const [active, setActive] = useState(0);
  const event = events[active];
  return <section id="experiencias" className="section-space border-b border-alabaster/10"><div className="site-container">
    <div className="section-heading"><p className="eyebrow">01 / Experiências</p><h2>O seu evento.<br /><em>Uma nova possibilidade.</em></h2><p>Da recepção ao momento mais esperado, encontramos juntos a proposta artística para a sua ocasião.</p></div>
    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-12 mt-12">
      <div role="group" aria-label="Tipo de evento" className="flex flex-col">{events.map((item, i) => <button key={item.title} type="button" aria-pressed={i === active} aria-controls="event-detail" onClick={() => setActive(i)} className={`event-choice ${i === active ? 'is-active' : ''}`}><span className="text-xs text-champagne-gold">0{i + 1}</span><span className="flex-1 text-left font-serif text-2xl sm:text-3xl">{item.title}</span><item.icon size={22} strokeWidth={1.2} /></button>)}</div>
      <div key={active} id="event-detail" className="event-detail neon-gold-card rounded-2xl" aria-live="polite"><p className="eyebrow mb-5">Uma experiência pensada para você</p><h3 className="font-serif text-3xl sm:text-4xl mb-5">{event.subtitle}</h3><p className="text-stone-warm leading-relaxed mb-7">{event.text}</p><ul className="space-y-3 mb-9">{event.points.map(point => <li key={point} className="flex gap-3 text-sm"><Check size={17} className="text-champagne-gold shrink-0" />{point}</li>)}</ul><a className="inline-flex items-center gap-3 text-champagne-gold text-sm hover:underline underline-offset-4" href={`https://wa.me/5511937765250?text=${encodeURIComponent(`Olá! Gostaria de solicitar uma proposta para ${event.title}. Cidade: [cidade]. Data: [data]. Personagem ou ideia: [descreva].`)}`} target="_blank" rel="noopener noreferrer">Solicitar proposta para esta ocasião <ArrowUpRight size={16} /></a></div>
    </div>
    <nav aria-label="Apresentações por ocasião" className="mt-8 flex flex-wrap gap-3">{[['/estatua-viva-para-eventos', 'Eventos'], ['/estatua-viva-para-casamento', 'Casamentos'], ['/estatua-viva-para-eventos-corporativos', 'Corporativo'], ['/personagens-para-festas', 'Festas']].map(([href, label]) => <Link key={href} href={href} className="rounded-full border border-champagne-gold/35 px-5 py-3 text-sm text-alabaster transition-colors hover:border-champagne-gold hover:text-champagne-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold">{label} ↗</Link>)}</nav>
  </div></section>;
}


