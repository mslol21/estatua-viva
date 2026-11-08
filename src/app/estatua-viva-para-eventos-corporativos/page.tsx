import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estátua Viva para Eventos Corporativos em SP | Estátua Viva Produções',
  description: 'Performances de estátuas vivas para feiras, congressos, lançamentos e recepções corporativas em São Paulo. Solicite uma proposta.',
  alternates: { canonical: '/estatua-viva-para-eventos-corporativos' },
};

export default function CorporativoPage() {
  return <main id="conteudo" className="site-container min-h-screen py-24 text-alabaster"><Link href="/" className="text-champagne-gold underline underline-offset-4">Voltar ao início</Link><p className="mt-16 text-xs uppercase tracking-widest text-champagne-gold">Experiências para marcas</p><h1 className="mt-4 max-w-4xl font-serif text-5xl md:text-7xl">Estátuas vivas para eventos corporativos em São Paulo</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-stone-warm">Crie uma recepção marcante para convidados, visitantes e parceiros. As performances podem integrar feiras, congressos, inaugurações, ativações de marca e lançamentos de produtos.</p><h2 className="mt-14 font-serif text-3xl text-champagne-gold">Arte alinhada à experiência do evento</h2><p className="mt-4 max-w-2xl leading-8 text-stone-warm">Nossa equipe avalia o ambiente, a proposta visual, o público e a dinâmica de circulação para sugerir personagens e formatos de apresentação adequados. Figurinos e caracterizações são definidos conforme o briefing e a disponibilidade.</p><a className="mt-10 inline-flex rounded-full bg-champagne-gold px-8 py-4 font-semibold text-obsidian" href="https://wa.me/5511937765250?text=Ol%C3%A1!%20Gostaria%20de%20uma%20proposta%20para%20evento%20corporativo." target="_blank" rel="noopener noreferrer">Solicitar proposta corporativa</a></main>;
}
