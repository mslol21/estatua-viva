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

const equipe = [
  {
    "name": "Rodolfo Valentino",
    "role": "Diretor, criador artístico"
  },
  {
    "name": "Valentina Lindstron",
    "role": "Produção geral"
  },
  {
    "name": "Aline Varela",
    "role": "Produção executiva"
  },
  {
    "name": "Bianca Pereira",
    "role": "Contrarregra, produção"
  },
  {
    "name": "Pablo Trentin",
    "role": "Figurinista, fotógrafo"
  },
  {
    "name": "Robson da Silva",
    "role": "Artista"
  },
  {
    "name": "Danielle Yukari",
    "role": "Artista, dançarina"
  },
  {
    "name": "Deisi Silva",
    "role": "Artista, bailarina"
  },
  {
    "name": "Daniel Gregório",
    "role": "Artista"
  },
  {
    "name": "Angelo Medina",
    "role": "Artista"
  },
  {
    "name": "Giballin Gilberto",
    "role": "Artista, bailarino"
  },
  {
    "name": "Fernanda Eluf",
    "role": "Artista"
  },
  {
    "name": "Keyla Nayane",
    "role": "Artista, dançarina"
  },
  {
    "name": "Luis Almeida",
    "role": "Artista"
  },
  {
    "name": "Nathália Lanai",
    "role": "Artista, bailarina"
  },
  {
    "name": "Maira Cardoso",
    "role": "Atriz, cantora"
  },
  {
    "name": "Nicole Borelli",
    "role": "Artista, dançarina"
  }
];

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
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-warm">À frente da direção artística da Estátua Viva Produções, Rodolfo Valentino está ligado à criação de experiências que unem personagens, caracterização e performance para eventos. Conheça abaixo os profissionais apresentados no portfólio oficial da produção, com suas respectivas funções.</p>
          <div className="mt-10 rounded-2xl border border-champagne-gold/20 bg-charcoal/40 p-6 sm:p-8">
            <p className="text-sm text-champagne-gold">Conheça o trabalho da produção</p>
            <p className="mt-2 text-sm leading-7 text-stone-warm">Os nomes e as funções abaixo seguem o portfólio oficial. Os retratos individuais serão incluídos após a disponibilização dos arquivos de imagem correspondentes.</p>
            <Link href="/#acervo" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-champagne-gold hover:text-white">Explorar o acervo <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>
        <section id="integrantes" className="site-container section-space" aria-labelledby="integrantes-titulo">
          <p className="eyebrow">Profissionais do portfólio oficial</p>
          <h2 id="integrantes-titulo" className="mt-4 font-serif text-4xl sm:text-5xl">Conheça nossa <em className="text-champagne-gold">equipe.</em></h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-warm">Da direção artística à performance, diferentes especialidades se encontram em cada projeto. Conheça os 17 profissionais apresentados em nosso portfólio institucional.</p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {equipe.map(({ name, role }, index) => (
              <article key={name} className="neon-gold-card group overflow-hidden rounded-2xl border border-champagne-gold/20 bg-[#0b1c20]">
                <div className="relative flex aspect-[4/4.5] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,rgba(203,161,89,0.16),transparent_65%)]" aria-label={`Retrato oficial de ${name} ainda não publicado`}>
                  <span aria-hidden="true" className="font-serif text-5xl sm:text-6xl text-champagne-gold/50">{name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span>
                  <span className="absolute bottom-3 left-3 right-3 text-center text-[10px] uppercase tracking-wider text-stone-warm">Foto oficial em preparação</span>
                </div>
                <div className="border-t border-champagne-gold/20 p-4 sm:p-5">
                  <span className="text-[10px] font-mono text-champagne-gold/75">INTEGRANTE {String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-serif text-xl leading-tight text-alabaster sm:text-2xl">{name}</h3>
                  <p className="mt-2 text-xs leading-5 text-stone-warm">{role}</p>
                </div>
              </article>
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
