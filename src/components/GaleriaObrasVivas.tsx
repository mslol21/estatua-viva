import Link from 'next/link';
import ArtworkFrame from '@/components/ArtworkFrame';
import { ArrowUpRight } from 'lucide-react';

const obras = [
  { src: '/images/fim-de-ano/escultura_prata_nova.webp', title: 'Bailarina Prateada', detail: 'Escultura viva contemporânea' },
  { src: '/images/fim-de-ano/dionisio_escultura_nova.webp', title: 'Dionísio', detail: 'Personagem escultural clássico' },
  { src: '/images/fim-de-ano/escultura_lira_nova.webp', title: 'Escultura com Lira', detail: 'Composição artística cenográfica' },
  { src: '/images/fim-de-ano/escultura_cenografica_nova.webp', title: 'Escultura Cenográfica', detail: 'Arte viva em composição de pedra' },
];

export default function GaleriaObrasVivas() {
  return (
    <section id="galeria-obras-vivas" aria-labelledby="galeria-obras-vivas-titulo" className="border-y border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
      <div className="site-container">
        <p className="eyebrow">Acervo da Estátua Viva Produções</p>
        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="galeria-obras-vivas-titulo" className="font-serif text-3xl sm:text-5xl">
              Galeria de <span className="italic text-champagne-gold">Obras Vivas</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-warm sm:text-base">
              Personagens e esculturas vivas do nosso acervo artístico. Cada quadro apresenta uma fotografia real, preservada em seu enquadramento original.
            </p>
          </div>
          <Link href="/fim-de-ano#atracoes" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-champagne-gold hover:underline">
            Conheça as atrações <ArrowUpRight size={16}/>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {obras.map((obra) => (
            <article key={obra.src} className="min-w-0">
              <ArtworkFrame src={obra.src} alt={obra.title + ' — fotografia original do acervo artístico'} label={obra.title} sizes="(max-width: 639px) 48vw, (max-width: 1023px) 45vw, 24vw" />
              <p className="mt-2 text-center text-xs text-stone-warm">{obra.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-stone-warm">Imagens do acervo fornecido pela produção. Personagens, figurinos e apresentações sujeitos à disponibilidade e à avaliação técnica de cada evento.</p>
      </div>
    </section>
  );
}
