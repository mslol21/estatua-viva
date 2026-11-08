import { FAQS } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
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
        '@type': ['LocalBusiness', 'PerformingGroup'],
        '@id': 'https://estatuaviva.konnexy.com.br/#empresa',
        name: 'Estátua Viva Produções',
        url: 'https://estatuaviva.konnexy.com.br/',
        slogan: 'Você imagina. A gente dá vida.',
        telephone: '+55-11-93776-5250',
        email: 'contato@estatuaviva.com.br',
        image: 'https://estatuaviva.konnexy.com.br/og-image.png',
        address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', postalCode: '03306-060', addressCountry: 'BR' },
        description: 'Produção de performances de estátuas vivas para eventos, com base administrativa no Tatuapé e atendimento no local contratado.',
        areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'Country', name: 'Brasil' }],
        sameAs: ['https://www.instagram.com/estatuavivaproducoes/', 'https://www.youtube.com/@estatuavivaoficial', 'https://www.facebook.com/estatuavivaproducoes'],
      },
      { '@type': 'FAQPage', mainEntity: FAQS.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };
  return (
    <main className="site-surface min-h-screen text-alabaster relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Navbar />
      <div id="conteudo" tabIndex={-1}><Hero /></div>
      <ClientMarquee />
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


