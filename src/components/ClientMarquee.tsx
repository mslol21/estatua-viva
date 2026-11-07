import { Palette, Drama, Sparkles } from 'lucide-react';
const details = [
  { icon: Palette, title: 'Caracterização artística', text: 'Figurinos e maquiagem que fazem parte da experiência.' },
  { icon: Drama, title: 'Interação com o público', text: 'Surpresa, movimento e boas histórias para compartilhar.' },
  { icon: Sparkles, title: 'Uma proposta para a sua ocasião', text: 'Personagens e formatos alinhados ao seu evento.' },
];
export default function ClientMarquee() {
  return <section id="clientes" aria-label="Nossa proposta artística" className="brand-values border-b border-champagne-gold/15"><div className="site-container grid md:grid-cols-3 gap-8 md:gap-10 py-10">{details.map(({icon: Icon, title, text}) => <div key={title} className="flex items-start gap-4"><Icon size={25} strokeWidth={1.2} className="shrink-0 text-champagne-gold mt-1" /><div><h2 className="font-serif text-2xl mb-1">{title}</h2><p className="text-sm leading-relaxed text-stone-warm">{text}</p></div></div>)}</div></section>;
}

