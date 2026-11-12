import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';
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

export const metadata: Metadata = { alternates: { canonical: `${SITE_URL}/` } };

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#empresa`,
        name: 'Estátua Viva Produções',
        url: `${SITE_URL}/`,
        slogan: 'Você imagina. A gente dá vida.',
        telephone: '+55-11-93776-5250',
        email: 'contato@estatuaviva.com.br',
        image: `${SITE_URL}/og-image.png`,
        location: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' } },
        description: 'Produção de performances de estátuas vivas para casamentos, feiras, inaugurações e eventos corporativos em todo o Brasil. Atendimento comercial virtual e apresentações no local contratado.',
        areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'Country', name: 'Brasil' }],
        sameAs: ['https://www.instagram.com/estatuavivaproducoes/', 'https://www.youtube.com/@estatuavivaoficial', 'https://www.facebook.com/estatuavivaproducoes'],
      },
      { '@type': 'Service', name: 'Entretenimento artístico e personagens para eventos', serviceType: 'Performances de estátuas vivas, figurinos e personagens temáticos para eventos e ações promocionais', provider: { '@id': `${SITE_URL}/#empresa` }, areaServed: { '@type': 'Country', name: 'Brasil' }, description: 'Criação e caracterização de personagens, figurinos artísticos e performances presenciais para casamentos, feiras, inaugurações, eventos corporativos e ações promocionais.' },
      { '@type': 'FAQPage', mainEntity: FAQS.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };
  return (
    <main className="site-surface min-h-screen text-alabaster relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Navbar />
      <div id="conteudo" tabIndex={-1}><Hero /></div>
      <section aria-label="Especial de Natal" className="relative isolate overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] flex items-center border-y border-champagne-gold/20 bg-[#0b1113]">
        <div aria-hidden="true" className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_75%_50%,rgba(178,121,45,0.22),transparent_65%)]" />
        <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} className="absolute inset-y-0 right-0 -z-20 h-full w-full lg:w-[62%] object-contain object-center">
          <source src="https://br-super-moon-be663clt.storage.c-9.us-east-2.aws.neon.tech/estatua-viva-public/EV%20%281%29.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071318]/95 via-[#071318]/85 to-[#071318]/20 max-lg:bg-gradient-to-t max-lg:from-[#071318]/95 max-lg:via-[#071318]/65 max-lg:to-[#071318]/25" />
        <div className="site-container w-full py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl lg:max-w-[48%]">
            <p className="eyebrow">Temporada especial de Natal</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">A magia do Natal ganha vida.</h2>
            <p className="text-alabaster/90 max-w-xl mt-5 leading-relaxed">Conheça os personagens e performances natalinas da Estátua Viva Produções. Três vídeos especiais para inspirar sua celebração.</p>
            <Link href="/natal" className="button-gold inline-flex mt-8">Conhecer o Especial de Natal ↗</Link>
          </div>
        </div>
      </section>
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


