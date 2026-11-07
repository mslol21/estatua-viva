'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { VIDEOS } from '@/data/portfolioData';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export default function VideoShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [activeVideo, setActiveVideo] = useState<(typeof VIDEOS)[0] | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="videos" className="py-24 bg-obsidian border-b border-alabaster/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold mb-2">
              REGISTROS AUDIOVISUAIS & BASTIDORES
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal">
              O Instante do Movimento.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Vídeo anterior"
              className="w-11 h-11 border border-alabaster/10 hover:border-champagne-gold text-stone-warm hover:text-champagne-gold flex items-center justify-center transition-colors"
            >
              <ChevronLeft strokeWidth={1.5} className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo vídeo"
              className="w-11 h-11 border border-alabaster/10 hover:border-champagne-gold text-stone-warm hover:text-champagne-gold flex items-center justify-center transition-colors"
            >
              <ChevronRight strokeWidth={1.5} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {VIDEOS.map((vid, idx) => (
              <div
                key={vid.id}
                className="flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_48%] min-w-0"
              >
                <div
                  onClick={() => setActiveVideo(vid)}
                  className="group bg-charcoal border border-alabaster/10 hover:border-champagne-gold/40 transition-colors p-4 flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-obsidian mb-4">
                    <Image
                      src={vid.thumbnail}
                      alt={vid.title}
                      fill
                      className="object-cover object-center grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/20 transition-colors" />

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-champagne-gold/90 text-obsidian flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <Play strokeWidth={1.5} className="w-5 h-5 ml-1 fill-current" />
                      </div>
                    </div>

                    {/* Top tags */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-alabaster bg-obsidian/90 px-2.5 py-1 border border-alabaster/10">
                        {vid.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 font-mono text-[10px] text-alabaster bg-obsidian/80 px-2 py-0.5">
                      {vid.duration}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-alabaster group-hover:text-champagne-gold transition-colors mb-2">
                      {vid.title}
                    </h3>
                    <p className="text-xs font-sans text-stone-warm leading-relaxed line-clamp-2">
                      {vid.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <Dialog.Root open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-obsidian/90 backdrop-blur-md z-50 animate-in fade-in duration-300" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl bg-charcoal border border-alabaster/20 p-4 sm:p-6 shadow-2xl z-50 focus:outline-none">
            {activeVideo && (
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-alabaster/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold">
                      {activeVideo.tag}
                    </span>
                    <span className="text-stone-warm">•</span>
                    <Dialog.Title className="font-serif text-lg text-alabaster">
                      {activeVideo.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close className="p-1.5 text-stone-warm hover:text-alabaster border border-alabaster/10 hover:border-champagne-gold">
                    <X strokeWidth={1.5} className="w-4 h-4" />
                  </Dialog.Close>
                </div>

                <div className="relative aspect-video w-full bg-obsidian border border-alabaster/10 overflow-hidden">
                  <iframe
                    src={activeVideo.videoSrc}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                <p className="text-xs font-sans text-stone-warm mt-4">
                  {activeVideo.description}
                </p>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
