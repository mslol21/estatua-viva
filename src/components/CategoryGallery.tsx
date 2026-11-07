import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { name: 'Branca', image: '/portfolio/branca.webp', href: '#estilo-branca', alt: 'Artista caracterizado como anjo em branco' },
  { name: 'Prata', image: '/portfolio/prata.webp', href: '#estilo-prata', alt: 'Artista caracterizado como chef prateado' },
  { name: 'Ouro', image: '/portfolio/ouro.webp', href: '#estilo-ouro', alt: 'Artista caracterizado como estátua viva em dourado' },
  { name: 'Diversas', image: '/portfolio/diversas.webp', href: '#estilo-diversas', alt: 'Personagens inspirados em Chaplin e bailarina azul' },
];

export default function CategoryGallery() {
  return (
    <section aria-labelledby="categorias-title" className="site-container py-20 sm:py-28">
      <div className="mb-9 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#dfbd7c]">Um universo de personagens</p>
          <h2 id="categorias-title" className="font-serif text-4xl text-[#f6f1e8] sm:text-5xl">Escolha sua <span className="italic text-[#e4c184]">inspiração.</span></h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#d5d7cf]">Explore estilos e descubra a performance ideal para o seu evento.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {categories.map((category) => (
          <a key={category.name} href={category.href} className="group relative block overflow-hidden rounded-2xl border border-[#dfbd7c]/25 bg-[#102329] shadow-[0_18px_40px_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">
            <div className="relative aspect-[3/4]">
              <Image src={category.image} alt={category.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1023px) 45vw, 25vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#031014]/95 via-[#031014]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-6">
                <div><span className="text-[10px] uppercase tracking-[0.16em] text-[#e4c184]">Conheça o estilo</span><h3 className="mt-1 font-serif text-2xl text-white sm:text-3xl">{category.name}</h3></div>
                <ArrowUpRight aria-hidden="true" className="mb-1 h-5 w-5 shrink-0 text-[#e4c184] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
