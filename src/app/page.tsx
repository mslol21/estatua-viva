import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { FAQS, ARTISTIC_LINES } from '@/data/portfolioData';
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

export const metadata: Metadata = {
  title: 'Estátua Viva e Personagens Vivos para Eventos | SP e Brasil',
  description: 'Contrate estátuas vivas e personagens vivos para casamentos, feiras e eventos corporativos em São Paulo e todo o Brasil com a Estátua Viva Produções.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'Estátua Viva e Personagens Vivos para Eventos | SP e Brasil',
    description: 'Contrate estátuas vivas e personagens vivos para casamentos, feiras e eventos corporativos em São Paulo e todo o Brasil com a Estátua Viva Produções.',
    url: `${SITE_URL}/`,
    type: 'website',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://estatuavivaproducoes.com.br',
        name: 'Estátua Viva Produções',
        image: 'https://estatuavivaproducoes.com.br',
        url: 'https://www.estatuavivaproducoes.com.br/',
        telephone: '+5511937765250',
        email: 'contato@estatuavivaproducoes.com.br',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          addressCountry: 'BR',
          streetAddress: 'Tatuapé',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '-23.5414',
          longitude: '-46.5762',
        },
        founder: {
          '@type': 'Person',
          name: 'Rodolfo Valentino',
        },
        foundingDate: '2005',
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
        sameAs: [
          'https://instagram.com/estatuavivaproducoes/',
          'https://facebook.com/estatuavivaproducoes',
          'https://youtube.com/@estatuavivaoficial',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://estatuavivaproducoes.com.br',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Como funciona a dinâmica das estátuas vivas durante o evento?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Os artistas combinam períodos de imobilidade escultural impactante com movimentos sutis e interações calculadas conforme o público se aproxima, gerando surpresa e excelentes oportunidades de fotos.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vocês atendem fora da capital de São Paulo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sim. Embora nossa base operacional e de criação artística esteja localizada na região do Tatuapé, em São Paulo (SP), a Estátua Viva Produções atende casamentos, feiras e eventos corporativos em todo o Brasil.',
            },
          },
          {
            '@type': 'Question',
            name: 'Como solicitar um orçamento de estátua viva ou personagem?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Os orçamentos e consultas de disponibilidade podem ser feitos diretamente pelo nosso WhatsApp Oficial (+55 11 93776-5250) ou através do configurador de proposta expresso em nosso site.',
            },
          },
          {
            '@type': 'Question',
            name: 'A empresa possui atendimento presencial no Tatuapé?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nossa base no Tatuapé funciona como ateliê de criação e acervo cênico. O atendimento comercial é centralizado via canais digitais (WhatsApp e E-mail), e as performances artísticas ocorrem diretamente no local do evento contratado.',
            },
          },
        ],
      },
    ],
  };
  return (
    <main className="site-surface min-h-screen text-alabaster relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Navbar />
      <div id="conteudo" tabIndex={-1}><Hero /></div>
      <section aria-label="Especial de Natal" className="relative isolate overflow-hidden border-y border-champagne-gold/20 bg-[#0b1113]">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_50%,rgba(178,121,45,0.22),transparent_65%)]" />
        <div className="natal-sparkles pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} className="natal-sparkle" style={{ left: `${(index * 37 + 9) % 96}%`, top: `${(index * 29 + 11) % 90}%`, animationDelay: `${(index % 7) * -0.65}s`, animationDuration: `${3.5 + (index % 5) * 0.6}s` }} />
          ))}
        </div>
        <div className="natal-glow pointer-events-none absolute -right-24 top-1/4 z-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" aria-hidden="true" />
        <div className="natal-top-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px" aria-hidden="true" />
        <div className="relative z-10 site-container grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(260px,420px)] lg:gap-14">
          <div className="max-w-xl">
            <p className="eyebrow">Temporada especial de Natal</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">A magia do Natal ganha vida.</h2>
            <p className="text-alabaster/90 max-w-xl mt-5 leading-relaxed">Conheça os personagens e performances natalinas da Estátua Viva Produções. Três vídeos especiais para inspirar sua celebração.</p>
            <Link href="/natal" className="button-gold inline-flex mt-8">Conhecer o Especial de Natal ↗</Link>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-champagne-gold/30 bg-black shadow-[0_0_35px_rgba(207,166,85,0.2)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="auto"
              aria-label="Natal — Novos Personagens"
              className="block w-full max-h-[540px] object-contain"
            >
              <source src="https://br-super-moon-be663clt.storage.c-9.us-east-2.aws.neon.tech/estatua-viva-public/EV%20%281%29.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      </section>
      <section aria-label="Sobre a Estátua Viva Produções" className="site-container py-10 sm:py-14"><p className="max-w-4xl text-base sm:text-lg leading-8 text-stone-warm">A Estátua Viva Produções é uma empresa de São Paulo (SP) que, desde 2005, cria estátuas vivas, personagens vivos e performances personalizadas para eventos corporativos, feiras, lançamentos, casamentos e festas em todo o Brasil. A direção artística é de Rodolfo Valentino. O atendimento é feito pelo WhatsApp (11) 93776-5250, e as apresentações acontecem no local do evento.</p></section>
      <ClientMarquee />
      <ComoTrabalhamos />
      <CategoryGallery />
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
      <section aria-labelledby="equipe-resumo-titulo" className="site-container py-16 sm:py-20">
        <div className="neon-gold-card rounded-3xl border border-champagne-gold/25 bg-charcoal/50 p-7 sm:p-12 grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12 relative overflow-hidden">
          <div className="max-w-2xl">
            <p className="eyebrow">Quem está por trás da arte</p>
            <h2 id="equipe-resumo-titulo" className="mt-4 font-serif text-4xl sm:text-5xl">
              Pessoas que transformam ideias em experiências.
            </h2>
            <p className="mt-5 text-stone-warm leading-7">
              Conheça a direção artística e o trabalho de criação, caracterização e interpretação por trás das performances da Estátua Viva Produções.
            </p>
            <Link href="/equipe" className="button-gold mt-7 inline-flex">
              Conheça nossa equipe ↗
            </Link>
          </div>

          <div className="relative mx-auto md:mx-0 shrink-0 flex flex-col items-center">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 bg-gradient-to-tr from-[#dfbd7c] via-[#ffe6a3] to-[#9a7532] shadow-[0_0_35px_rgba(223,189,124,0.35)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#071318]">
                <Image
                  src="/brand/perfil-oficial.webp"
                  alt="Direção artística — Estátua Viva Produções"
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <span className="mt-3 inline-block px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#ffe6a3] bg-[#071318]/90 border border-[#dfbd7c]/50 shadow-[0_0_12px_rgba(223,189,124,0.3)]">
              Direção Artística
            </span>
          </div>
        </div>
      </section>
      <EventCuratorship />
      <CharacterCatalog />
      <BriefingBuilder />
      <ReviewsAndFaq />
      <div className="site-container pb-12 text-center"><Link href="/perguntas-frequentes" className="inline-flex text-champagne-gold underline underline-offset-4">Ver todas as perguntas frequentes →</Link></div>
      <Footer />
      <SiteMotion />
    </main>
  );
}


