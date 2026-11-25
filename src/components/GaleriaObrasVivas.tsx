import Link from 'next/link';
import ArtworkFrame from '@/components/ArtworkFrame';
import { ArrowUpRight } from 'lucide-react';

const obras = [
  { src: '/images/acervo-2026/bailarina-prateada-espelhos-em-pe.webp', title: 'Bailarina Prateada', detail: 'Performance escultural diante de espelhos — pose em pé' },
  { src: '/images/acervo-2026/bailarina-prateada-cenario-dourado.webp', title: 'Bailarina Prateada', detail: 'Composição artística em cenário com iluminação dourada' },
  { src: '/images/acervo-2026/bailarina-prateada-espelhos-pose-baixa.webp', title: 'Bailarina Prateada', detail: 'Composição contemporânea com reflexos e espelhos — pose baixa' },
  { src: '/images/acervo-2026/bailarina-prateada-cenario-violeta.webp', title: 'Bailarina Prateada', detail: 'Pose elegante em cenário com iluminação violeta' },
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
              Quatro registros da Bailarina Prateada em diferentes poses e cenários. As fotografias do acervo são apresentadas sem cortes, preservando a composição original.
            </p>
          </div>
          <Link href="/fim-de-ano#atracoes" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-champagne-gold hover:underline">
            Conheça as atrações <ArrowUpRight size={16}/>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {obras.map((obra) => (
            <article key={obra.src} className="min-w-0">
              <ArtworkFrame src={obra.src} alt={obra.title + ' — ' + obra.detail.toLowerCase() + ', fotografia do acervo artístico'} label={obra.title} sizes="(max-width: 639px) 48vw, (max-width: 1023px) 45vw, 24vw" />
              <p className="mt-2 text-center text-xs text-stone-warm">{obra.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-stone-warm">Imagens do acervo fornecido pela produção. Personagens, figurinos e apresentações sujeitos à disponibilidade e à avaliação técnica de cada evento.</p>
      </div>
    </section>
  );
}
