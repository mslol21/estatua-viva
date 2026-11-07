import { ArrowUpRight, Instagram } from 'lucide-react';
export default function VideoShowcase() {
  return <section id="videos" className="section-space border-y border-champagne-gold/20 social-section"><div className="site-container grid md:grid-cols-[1fr_auto] gap-8 items-center"><div className="max-w-2xl"><p className="eyebrow mb-5">03 / Além das fotografias</p><h2 className="font-serif text-4xl sm:text-5xl leading-tight">A arte ganha outra dimensão <em className="text-champagne-gold">em movimento.</em></h2><p className="text-stone-warm mt-5 leading-relaxed">Veja os personagens em ação, acompanhe os bastidores e conheça mais do nosso trabalho no Instagram.</p></div><a href="https://www.instagram.com/estatuavivaproducoes/" target="_blank" rel="noopener noreferrer" className="button-outline"><Instagram size={19} /> Ver nosso Instagram <ArrowUpRight size={17} /></a></div></section>;
}

