import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ArtworkFrame from '@/components/ArtworkFrame';
import { getAvailableArchivePhotos, galleryCategories, type ArchiveCategory } from '@/data/acervoArtistico';

type Props = { categories?: ArchiveCategory[]; compact?: boolean; showLink?: boolean };

export default function AcervoArtisticoGallery({ categories, compact=false, showLink=true }: Props) {
  const groups = galleryCategories.filter(group => !categories || categories.includes(group.key));
  return (
    <section id="acervo-artistico" className="border-y border-champagne-gold/20 bg-[#071318] py-14 sm:py-20" aria-labelledby="acervo-artistico-titulo">
      <div className="site-container">
        <p className="eyebrow">Fotografias do repertório artístico</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 id="acervo-artistico-titulo" className="font-serif text-3xl sm:text-5xl">Acervo <span className="italic text-champagne-gold">Artístico</span></h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-warm sm:text-base">Imagens reais da produção, organizadas por linguagem artística. Os registros de bastidores e de eventos são identificados separadamente das apresentações que podem ser contratadas.</p>
          </div>
          {showLink && <Link href="/acervo-artistico" className="inline-flex items-center gap-2 text-sm font-medium text-champagne-gold hover:underline">Explorar acervo completo <ArrowUpRight size={16}/></Link>}
        </div>
        <div className="mt-10 space-y-12">
          {groups.map(group => {
            const photos = getAvailableArchivePhotos(group.key).slice(0,compact ? 3 : 8);
            if(!photos.length) return null;
            return (
              <div key={group.key}>
                <h3 className="font-serif text-2xl sm:text-3xl text-alabaster">{group.title}</h3>
                <p className="mt-2 mb-6 text-sm text-stone-warm">{group.description}</p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {photos.map(photo => (
                    <article key={photo.src} className="min-w-0 rounded-2xl border border-champagne-gold/15 bg-[#0a1a1e] p-2 sm:p-3">
                      {photo.kind === 'editorial' ? (
                        <figure className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#101b20]">
                          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw" className="object-contain object-center"/>
                        </figure>
                      ) : (
                        <ArtworkFrame src={photo.src} alt={photo.alt} sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"/>
                      )}
                      <div className="px-1 pb-2 pt-3">
                        <h4 className="font-serif text-base text-alabaster sm:text-lg">{photo.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-stone-warm">{photo.caption}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-xs text-stone-warm">Personagens e figurinos sujeitos à disponibilidade. Fotografias de ensaios, composições e projetos artísticos não representam automaticamente uma contratação por órgão público ou instituição.</p>
      </div>
    </section>
  );
}
