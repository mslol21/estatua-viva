import Link from 'next/link';
import { FAQS } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
import ComoTrabalhamos from '@/components/ComoTrabalhamos';
import EventCuratorship from '@/components/EventCuratorship';
import CharacterCatalog from '@/components/CharacterCatalog';
import CategoryGallery from '@/components/CategoryGallery';
import BriefingBuilder from '@/components/BriefingBuilder';
import ReviewsAndFaq from '@/components/ReviewsAndFaq';
import Footer from '@/components/Footer';
import SiteMotion from '@/components/motion/SiteMotion';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://estatuaviva.konnexy.com.br/#empresa',
        name: 'Estátua Viva Produções',
        url: 'https://estatuaviva.konnexy.com.br/',
        slogan: 'Você imagina. A gente dá vida.',
        telephone: '+55-11-93776-5250',
        email: 'contato@estatuaviva.com.br',
        image: 'https://estatuaviva.konnexy.com.br/og-image.png',
        location: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' } },
        description: 'Produção de performances de estátuas vivas para casamentos, feiras, inaugurações e eventos corporativos em todo o Brasil. Atendimento comercial virtual e apresentações no local contratado.',
        areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'Country', name: 'Brasil' }],
        sameAs: ['https://www.instagram.com/estatuavivaproducoes/', 'https://www.youtube.com/@estatuavivaoficial', 'https://www.facebook.com/estatuavivaproducoes'],
      },
      { '@type': 'Service', name: 'Entretenimento artístico e personagens para eventos', serviceType: 'Performances de estátuas vivas, figurinos e personagens temáticos para eventos e ações promocionais', provider: { '@id': 'https://estatuaviva.konnexy.com.br/#empresa' }, areaServed: { '@type': 'Country', name: 'Brasil' }, description: 'Criação e caracterização de personagens, figurinos artísticos e performances presenciais para casamentos, feiras, inaugurações, eventos corporativos e ações promocionais.' },
      { '@type': 'FAQPage', mainEntity: FAQS.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };
  return (
    <main className="site-surface min-h-screen text-alabaster relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Navbar />
      <div id="conteudo" tabIndex={-1}><Hero /></div>
      <ClientMarquee />
      <ComoTrabalhamos />
      <section aria-labelledby="servicos-titulo" className="site-container py-14 sm:py-20">
        <p className="eyebrow">Soluções artísticas</p>
        <h2 id="servicos-titulo" className="font-serif text-3xl sm:text-5xl mb-5">Encontre a apresentação ideal para seu evento</h2>
        <p className="max-w-3xl text-stone-warm mb-8">Criamos experiências com estátuas vivas, figurinos, personagens temáticos e performances para celebrações, empresas e ações promocionais. Conheça nossas opções e solicite um orçamento.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { href: '/estatua-viva-para-eventos', title: 'Estátuas vivas para eventos', detail: 'Recepções, festas e experiências artísticas.' },
            { href: '/estatua-viva-para-casamento', title: 'Estátuas vivas para casamentos', detail: 'Recepção artística e personagens para celebrações.' },
            { href: '/estatua-viva-para-eventos-corporativos', title: 'Eventos corporativos e ações promocionais', detail: 'Feiras, lançamentos, ativações e experiências de marca.' },
            { href: '/personagens-para-festas', title: 'Personagens e figurinos temáticos', detail: 'Caracterização artística e performances personalizadas.' },
          ].map((service) => <Link key={service.href} href={service.href} className="neon-gold-card group rounded-2xl border border-champagne-gold/20 bg-charcoal/50 p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne-gold"><h3 className="font-serif text-2xl text-alabaster group-hover:text-champagne-gold">{service.title}</h3><p className="mt-2 text-sm text-stone-warm">{service.detail}</p><span className="mt-4 inline-block text-sm text-champagne-gold">Conhecer serviço →</span></Link>)}
        </div>
      </section>
      <EventCuratorship />
      <CategoryGallery />
      <CharacterCatalog />
      <BriefingBuilder />
      <ReviewsAndFaq />
      <Footer />
      <SiteMotion />
    </main>
  );
}


