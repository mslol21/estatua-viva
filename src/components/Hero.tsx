'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Drama, Sparkles, Star } from 'lucide-react';

const REVIEWS_URL = 'https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const reveal = { initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section aria-labelledby="hero-title" className="hero-split relative isolate overflow-hidden border-b border-[#dfbd7c]/15">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[#061217]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,14,19,0.88)_0%,rgba(3,14,19,0.70)_52%,rgba(3,14,19,0.52)_100%),url('/brand/textura-marmore.webp')] bg-cover bg-center" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#d3af6c]/10 blur-[110px]" />
      <div className="site-container">
        <div className="grid min-h-[calc(100svh-88px)] items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-14">
          <motion.div initial={reveal.initial} animate={reveal.animate} transition={{ duration: reducedMotion ? 0 : 0.7, ease: 'easeOut' }} className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#dfbd7c]/30 bg-[#102b30]/75 px-4 py-2 text-xs leading-relaxed text-[#ead4a9] shadow-lg backdrop-blur-sm sm:text-sm">
              <Sparkles aria-hidden="true" className="h-4 w-4 shrink-0 text-[#dfbd7c]" strokeWidth={1.6} />
              <span>Curadoria Artística para Eventos em São Paulo</span>
            </div>
            <h1 id="hero-title" className="font-serif text-[clamp(3.3rem,6.6vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f6f1e8]">
              Você imagina.<br /><span className="italic">A gente dá <span className="text-[#e7c582] [text-shadow:0_0_28px_rgba(223,189,124,0.28)]">vida.</span></span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#d5d7cf] sm:text-lg">Estátuas vivas, personagens e performances artísticas que surpreendem seus convidados e tornam cada evento inesquecível.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="#briefing" className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#dfbd7c] px-7 py-4 text-sm font-semibold text-[#071519] shadow-[0_10px_35px_rgba(211,175,108,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0d49a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">Solicitar orçamento <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.8} /></a>
              <a href="#acervo" className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#dfbd7c]/50 bg-transparent px-7 py-4 text-sm font-medium text-[#f5eee0] transition duration-300 hover:border-[#dfbd7c] hover:bg-[#dfbd7c]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">Conheça os personagens <ArrowDown aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transition-none" strokeWidth={1.8} /></a>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-[#dfbd7c]/20 pt-6 text-sm text-[#d8d5cb] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#f1d49d]"><Star aria-hidden="true" className="h-4 w-4 shrink-0 fill-[#dfbd7c] text-[#dfbd7c]" /><span><strong className="font-semibold text-[#f4dfb7]">5,0 no Google</strong> <span className="text-[#c6c8be]">· 37 avaliações de clientes</span></span></a>
              <div className="inline-flex items-center gap-2"><Drama aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-[#dfbd7c]" strokeWidth={1.6} /><span>Performances artísticas desde 2005</span></div>
            </div>
          </motion.div>
          <motion.div initial={reveal.initial} animate={reveal.animate} transition={{ duration: reducedMotion ? 0 : 0.85, delay: reducedMotion ? 0 : 0.15, ease: 'easeOut' }} className="relative mx-auto w-full max-w-[34rem] lg:ml-auto lg:mr-0">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-2 rounded-[2rem] border border-[#dfbd7c]/25 sm:-inset-3 sm:rounded-[2.4rem]" />
            <figure className="group relative overflow-hidden rounded-[1.6rem] border border-[#dfbd7c]/35 bg-[#0d252b] shadow-[0_25px_80px_rgba(0,0,0,0.48)] sm:rounded-[2rem]">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/brand/artista.webp" alt="Artista caracterizado como estátua viva em dourado" fill priority sizes="(max-width: 767px) 100vw, (max-width: 1023px) 75vw, 50vw" className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#041116]/90 via-[#041116]/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><div className="mb-3 flex items-center gap-3"><span aria-hidden="true" className="h-px w-8 bg-[#dfbd7c]" /><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e4c68e]">Arte que surpreende</span></div><p className="font-serif text-2xl leading-tight text-[#f8f2e8] sm:text-3xl">O extraordinário <span className="italic text-[#e4c184]">acontece ao vivo.</span></p></figcaption>
              </div>
            </figure>
          </motion.div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[#dfbd7c]/20 py-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#c5b28e]"><span>Performances · Personagens · Eventos</span><a href="#experiencias" className="inline-flex items-center gap-2 text-[#ead9b7] transition-colors hover:text-white"><span>Descubra mais</span><ArrowDown aria-hidden="true" className="h-4 w-4" /></a></div>
      </div>
    </section>
  );
}
