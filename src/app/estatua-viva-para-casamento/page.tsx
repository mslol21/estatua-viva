import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estátua Viva para Casamento em São Paulo | Estátua Viva Produções',
  description: 'Surpreenda seus convidados com estátuas vivas e personagens artísticos na recepção do casamento em São Paulo. Consulte disponibilidade e orçamento.',
  alternates: { canonical: '/estatua-viva-para-casamento' },
};

export default function CasamentoPage() {
  return <main id="conteudo" className="site-container min-h-screen py-24 text-alabaster"><Link href="/" className="text-champagne-gold underline underline-offset-4">Voltar ao início</Link><p className="mt-16 text-xs uppercase tracking-widest text-champagne-gold">Experiências para celebrações</p><h1 className="mt-4 max-w-4xl font-serif text-5xl md:text-7xl">Estátua viva para casamento em São Paulo</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-stone-warm">Transforme a recepção dos convidados em uma experiência artística memorável. Estátuas vivas douradas, personagens clássicos e performances temáticas criam momentos especiais para fotografias e interação durante a celebração.</p><h2 className="mt-14 font-serif text-3xl text-champagne-gold">Uma recepção com personalidade</h2><p className="mt-4 max-w-2xl leading-8 text-stone-warm">A proposta artística pode ser planejada de acordo com o estilo da cerimônia, o espaço e a duração do evento. Consulte nossa equipe para escolher o personagem e avaliar a disponibilidade para a sua data.</p><a className="mt-10 inline-flex rounded-full bg-champagne-gold px-8 py-4 font-semibold text-obsidian" href="https://wa.me/5511937765250?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20est%C3%A1tua%20viva%20para%20casamento." target="_blank" rel="noopener noreferrer">Solicitar orçamento para casamento</a></main>;
}
