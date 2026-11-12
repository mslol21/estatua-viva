import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, Clapperboard, Palette, Sparkles, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nossa Equipe | Estátua Viva Produções',
  description: 'Conheça a direção artística e os profissionais por trás das estátuas vivas, personagens e experiências da Estátua Viva Produções.',
  alternates: { canonical: '/equipe' },
};

const fotosEquipe = ['7.png', '8.png', '9.png', '10.png', '11.png', '12.png'];

const frentes = [
  { icon: Palette, title: 'Caracterização e figurino', text: 'Cada detalhe visual ajuda a construir a identidade dos personagens e o impacto de cada apresentação.' },
  { icon: Clapperboard, title: 'Interpretação e performance', text: 'Expressão, presença cênica e interação transformam a caracterização em uma experiência viva.' },
  { icon: Users, title: 'Produção e planejamento', text: 'A proposta artística é alinhada às necessidades do evento, do espaço e do público.' },
];

export default function EquipePage() {
  return (
    <main className="site-surface min-h-screen text-alabaster">
      <Navbar />
      <div id="conteudo" tabIndex={-1}>
        <section className="relative isolate overflow-hidden border-b border-champagne-gold/20 bg-[#071519] pt-40 pb-16 sm:pt-48 sm:pb-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_30%,rgba(211,175,108,0.13),transparent_65%)]" />
          <div className="site-container grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> As pessoas por trás da arte</p>
              <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">Quem dá <em className="text-champagne-gold">vida</em> a cada experiência.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-stone-warm">Por trás de cada personagem existe um trabalho de criação, caracterização, interpretação e produção. Conheça a direção artística e o universo de profissionais que tornam cada apresentação possível.</p>
              <a href="/#briefing" className="button-gold mt-8 inline-flex">Planejar meu evento <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[2rem] border border-champagne-gold/30 bg-[#10262b]">
              <Image src="/brand/hero-bronze.jpg" alt="Caracterização artística em bronze da Estátua Viva Produções" fill sizes="(max-width: 1023px) 90vw, 440px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061317] via-[#061317]/60 to-transparent px-7 pb-8 pt-24"><span className="text-xs uppercase tracking-[0.18em] text-champagne-gold">Arte em cada detalhe</span></div>
            </div>
          </div>
        </section>
        <section className="site-container section-space">
          <p className="eyebrow">Direção artística</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl sm:text-6xl">Rodolfo Valentino</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-warm">À frente da direção artística da Estátua Viva Produções, Rodolfo Valentino está ligado à criação de experiências que unem personagens, caracterização e performance para eventos. Conheça os profissionais que transformam criação, figurino e performance em experiências memoráveis.</p>
          <Link href="/#acervo" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-champagne-gold hover:text-white">Explorar o acervo artístico <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>
        <section id="integrantes" className="site-container section-space" aria-labelledby="integrantes-titulo">
          <div className="flex flex-col gap-5 border-b border-champagne-gold/20 pb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Talentos por trás da arte</p>
              <h2 id="integrantes-titulo" className="mt-4 font-serif text-4xl sm:text-5xl">Nossa <em className="text-champagne-gold">equipe.</em></h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-warm">17 profissionais, diferentes especialidades e uma mesma paixão pela arte. Conheça a equipe nas seis imagens do portfólio oficial.</p>
            </div>
            <span className="shrink-0 font-serif text-5xl text-champagne-gold/70 sm:text-6xl" aria-label="17 profissionais">17 <span className="block font-sans text-xs uppercase tracking-[0.18em] text-stone-warm">profissionais</span></span>
          </div>
          <div className="mt-8 grid items-start gap-5 md:grid-cols-2 md:gap-7" aria-label="Galeria oficial da equipe">
            {fotosEquipe.map((arquivo, index) => (
              <figure key={arquivo} className="group min-w-0 overflow-hidden rounded-[1.5rem] border border-champagne-gold/25 bg-[#071519] p-2 shadow-[0_16px_60px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-champagne-gold/60 sm:p-3">
                <Image
                  src={`/${arquivo}`}
                  alt={`Página ${index + 1} do portfólio oficial apresentando profissionais da Estátua Viva Produções`}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </figure>
            ))}
          </div>
        </section>
        <section className="border-y border-champagne-gold/15 bg-charcoal/40">
          <div className="site-container section-space">
            <p className="eyebrow">Trabalho em conjunto</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">O talento está em cada etapa.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{frentes.map(({ icon: Icon, title, text }) => <article key={title} className="neon-gold-card rounded-2xl border border-champagne-gold/20 bg-[#071519] p-7"><Icon size={28} className="text-champagne-gold" aria-hidden="true" /><h3 className="mt-6 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-stone-warm">{text}</p></article>)}</div>
          </div>
        </section>
        <section className="site-container section-space text-center">
          <p className="eyebrow justify-center">Seu evento, nossa arte</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl sm:text-6xl">Vamos criar algo memorável?</h2>
          <p className="mx-auto mt-5 max-w-xl text-stone-warm">Conte sobre o seu evento e descubra as possibilidades de personagens e performances.</p>
          <a href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20a%20equipe%20e%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="button-gold mt-8 inline-flex">Conversar com a produção <ArrowUpRight size={17} aria-hidden="true" /></a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
