import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
import EventCuratorship from '@/components/EventCuratorship';
import CharacterCatalog from '@/components/CharacterCatalog';
import CategoryGallery from '@/components/CategoryGallery';
import BriefingBuilder from '@/components/BriefingBuilder';
import ReviewsAndFaq from '@/components/ReviewsAndFaq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="site-surface min-h-screen text-alabaster relative">
      <Navbar />
      <div id="conteudo" tabIndex={-1}><Hero /></div>
      <ClientMarquee />
      <EventCuratorship />
      <section className="site-container py-16 sm:py-20" aria-labelledby="servicos-title">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-champagne-gold">Arte para cada ocasião</p>
        <h2 id="servicos-title" className="font-serif text-3xl text-alabaster sm:text-5xl">Encontre a apresentação para o seu evento.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['/estatua-viva-para-eventos', 'Estátuas vivas para eventos'],
            ['/estatua-viva-para-casamento', 'Para casamentos'],
            ['/estatua-viva-para-eventos-corporativos', 'Para eventos corporativos'],
            ['/personagens-para-festas', 'Personagens para festas'],
          ].map(([href, label]) => <Link key={href} href={href} className="rounded-2xl border border-champagne-gold/25 bg-[#102329]/70 p-5 text-sm text-alabaster transition-colors hover:border-champagne-gold hover:text-champagne-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold">{label} <span aria-hidden="true">↗</span></Link>)}
        </div>
      </section>
      <CategoryGallery />
      <CharacterCatalog />
      <BriefingBuilder />
      <ReviewsAndFaq />
      <Footer />
    </main>
  );
}


