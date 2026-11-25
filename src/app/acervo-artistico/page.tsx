import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AcervoArtisticoGallery from '@/components/AcervoArtisticoGallery';
import WhatsAppCTA from '@/components/marketing/WhatsAppCTA';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Acervo Artístico — Estátuas Vivas, Quadros Vivos e Personagens | Estátua Viva Produções',
  description: 'Conheça fotografias reais de estátuas vivas, bailarina prateada, quadros vivos, personagens temáticos e performances artísticas para eventos em São Paulo.',
  alternates: { canonical: `${SITE_URL}/acervo-artistico` },
  openGraph: { title: 'Acervo Artístico | Estátua Viva Produções', description: 'Repertório artístico com fotografias reais de personagens e performances.',url: `${SITE_URL}/acervo-artistico`, type:'website' },
};

export default function AcervoArtisticoPage() {
  return (
    <main className="site-surface min-h-screen text-alabaster">
      <Navbar/>
      <div id="conteudo" tabIndex={-1}>
        <section className="site-container pt-36 pb-12 sm:pt-48">
          <p className="eyebrow">Coleção artística</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl sm:text-6xl">Arte que ganha <span className="italic text-champagne-gold">vida.</span></h1>
          <p className="mt-5 max-w-3xl leading-relaxed text-stone-warm">Conheça o repertório da Estátua Viva Produções: esculturas vivas, composições de pintura, personagens temáticos, apresentações e o processo de criação. Todas as fotografias são do acervo fornecido pela equipe.</p>
        </section>
        <AcervoArtisticoGallery showLink={false}/>
        <section className="site-container py-16 sm:py-24">
          <div className="rounded-2xl border border-champagne-gold/35 bg-[#071318] p-8 sm:p-12">
            <h2 className="font-serif text-3xl sm:text-4xl">Gostaria de levar arte viva ao seu evento?</h2>
            <p className="mt-4 mb-7 text-stone-warm">Consulte figurinos, disponibilidade, duração e proposta de apresentação para sua empresa, celebração ou projeto cultural.</p>
            <WhatsAppCTA source="acervo_artistico" label="orcamento_acervo" message="Olá! Conheci o acervo artístico e gostaria de consultar a disponibilidade de personagens para um evento." buttonText="Solicitar proposta artística"/>
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  );
}
