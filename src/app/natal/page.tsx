import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureForm from '@/components/marketing/LeadCaptureForm';
import WhatsAppCTA from '@/components/marketing/WhatsAppCTA';
import CampaignStickyCTA from '@/components/marketing/CampaignStickyCTA';
import { SITE_URL } from '@/lib/site-config';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  HelpCircle,
  Building2,
  Store,
  Calendar,
  Gift,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personagens Natalinos para Eventos | Estátua Viva',
  description:
    'Personagens natalinos e performances para festas de Natal, empresas e eventos especiais. Conheça nossas atrações e solicite orçamento.',
  alternates: {
    canonical: `${SITE_URL}/natal`,
  },
  openGraph: {
    title: 'Especial de Natal — Estátua Viva Produções',
    description:
      'Personagens natalinos, Papai Noel clássico de alta costura e performances artísticas para eventos corporativos, shoppings e celebrações em todo o Brasil.',
    url: `${SITE_URL}/natal`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Especial de Natal — Estátua Viva' }],
  },
};

const natalVideos = [
  {
    title: 'Novos Personagens de Natal',
    description: 'Conheça o elenco especial e as novas caracterizações cenográficas da temporada.',
    src: '/midia/videos/novos-personagens-de-natal.mp4',
    poster: '/brand/hero-bronze.jpg',
  },
  {
    title: 'Convite Artístico de Natal',
    description: 'Um convite poético para celebrar a magia das festas com sofisticação.',
    src: '/midia/videos/convite-artistico-de-natal.mp4',
    poster: '/brand/perfil-oficial.webp',
  },
  {
    title: 'Natal pela Perspectiva do Personagem',
    description: 'Sinta a emoção do acolhimento natalino sob o olhar do próprio personagem.',
    src: '/midia/videos/natal-pela-perspectiva-do-personagem.mp4',
    poster: '/brand/artista-share.jpg',
  },
];

const natalCharacters = [
  {
    name: 'Anjos Esculturais para Recepções',
    category: 'Clássico & Barroco',
    desc: 'Performance de anjo vivo com caracterização branca, indicada para recepções e celebrações de fim de ano.',
    img: '/images/estatuas-vivas/estatua-viva-anjo-branco-1.webp',
  },
  {
    name: 'Mímicos e Interação com Convidados',
    category: 'Interação Artística',
    desc: 'Artistas de mímica para acolher participantes, criar interações leves e momentos fotográficos durante a confraternização.',
    img: '/images/personagens/mimicos-1-768x512.webp',
  },
  {
    name: 'Estátuas Vivas em Prata',
    category: 'Recepção Corporativa',
    desc: 'Personagens esculturais prateados para recepções, coquetéis e encontros empresariais de fim de ano.',
    img: '/images/estatuas-vivas/estatua-viva-hermes-prata.webp',
  },
  {
    name: 'Estátuas Vivas em Ouro',
    category: 'Gala & Celebração',
    desc: 'Caracterizações douradas para eventos de gala, premiações e confraternizações corporativas.',
    img: '/images/estatuas-vivas/estatua-viva-dourado-ouro-1.webp',
  },
];

const faqs = [
  {
    q: 'Para quais tipos de eventos o Especial de Natal é indicado?',
    a: 'Nossas performances natalinas atendem confraternizações de empresas, recepções corporativas de fim de ano, shoppings centers, galerias comerciais, condomínios de alto padrão, clubes e celebrações familiares.',
  },
  {
    q: 'Qual é o diferencial do Papai Noel da Estátua Viva Produções?',
    a: 'Nosso Papai Noel foge do figurino sintético comum. Trabalhamos com figurino de alta costura cenográfica, barba profissional e atores preparados para manter o carisma e a magia vivos em cada interação.',
  },
  {
    q: 'Vocês atendem temporadas em shoppings e centros comerciais?',
    a: 'Sim, realizamos desde a tradicional Chegada do Papai Noel até escalas de permanência em troncos natalinos, cortejos musicais e paradas com múltiplos personagens.',
  },
  {
    q: 'Como funciona a logística para eventos fora da capital de SP?',
    a: 'Nossa produção providencia transporte, camarim portátil quando necessário e cronograma de montagem com pontualidade para cidades do interior, litoral e outros estados do Brasil.',
  },
];

export default function NatalPage() {
  const pageUrl = `${SITE_URL}/natal`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: 'Especial de Natal | Estátua Viva Produções',
        url: pageUrl,
        inLanguage: 'pt-BR',
        about: { '@id': `${SITE_URL}/#empresa` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Especial de Natal',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#servico`,
        name: 'Especial de Natal — Personagens e Performances Artísticas',
        description:
          'Personagens natalinos, Papai Noel clássico de alta costura e performances de Natal para eventos corporativos e shoppings no Brasil.',
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#empresa`,
          name: 'Estátua Viva Produções',
          url: `${SITE_URL}/`,
          telephone: '+5511937765250',
        },
        areaServed: { '@type': 'Country', name: 'Brasil' },
        url: pageUrl,
      },
      ...natalVideos.map((vid, idx) => ({
        '@type': 'VideoObject',
        '@id': `${pageUrl}#video-${idx + 1}`,
        name: vid.title,
        description: vid.description,
        thumbnailUrl: `${SITE_URL}${vid.poster}`,
        contentUrl: `${SITE_URL}${vid.src}`,
                publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#empresa`,
          name: 'Estátua Viva Produções',
        },
      })),
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <main className="site-surface min-h-screen text-alabaster selection:bg-champagne-gold selection:text-obsidian">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <Navbar />

      <div id="conteudo" tabIndex={-1}>
        {/* HERO NATALINO PREMIUM */}
        <section className="relative isolate overflow-hidden border-b border-champagne-gold/20 bg-[#071318] pt-36 pb-20 sm:pt-48 sm:pb-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_25%,rgba(207,166,85,0.2),transparent_70%)]" />

          {/* Micro-partículas sutis natalinas */}
          <div className="natal-sparkles pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <span
                key={i}
                className="natal-sparkle"
                style={{
                  left: `${(i * 37 + 11) % 95}%`,
                  top: `${(i * 29 + 15) % 85}%`,
                  animationDelay: `${(i % 5) * -0.7}s`,
                }}
              />
            ))}
          </div>

          <div className="site-container relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne-gold/30 bg-black/60 text-champagne-gold text-xs font-mono uppercase tracking-widest mb-6">
              <Gift size={14} /> Temporada Especial de Natal 2026
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-alabaster font-normal">
              Leve a magia do Natal para o seu{' '}
              <span className="italic text-champagne-gold">evento.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-stone-warm max-w-2xl mx-auto leading-relaxed">
              Personagens natalinos, performances artísticas e experiências que tornam as celebrações ainda mais especiais.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#orcamento-form"
                className="button-gold text-base px-8 py-4 shadow-[0_0_30px_rgba(223,189,124,0.4)]"
              >
                Solicitar orçamento de Natal ↗
              </a>

              <a
                href="#videos-natal"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold/10 transition-colors text-sm font-semibold"
              >
                <Play size={16} /> Assistir vídeos da temporada
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-warm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-champagne-gold" /> Figurinos de alta costura cenográfica
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-champagne-gold" /> Apresentações corporativas e comerciais
              </span>
            </div>
          </div>
        </section>

        {/* VÍDEOS OFICIAIS DA TEMPORADA */}
        <section id="videos-natal" className="site-container py-16 sm:py-24 border-b border-champagne-gold/20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">Conheça a experiência</p>
              <h2 className="font-serif text-3xl sm:text-5xl mt-2">
                O Natal em cena
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-warm max-w-sm">
              Três registros reais produzidos pela Estátua Viva Produções. Toque para assistir.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {natalVideos.map((vid, idx) => (
              <article
                key={vid.title}
                className="neon-gold-card rounded-2xl overflow-hidden border border-champagne-gold/25 bg-charcoal/50 flex flex-col justify-between"
              >
                <div className="relative bg-black aspect-[9/16] max-h-[580px] w-full overflow-hidden">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={vid.poster}
                    aria-label={vid.title}
                    className="w-full h-full object-contain"
                  >
                    <source src={vid.src} type="video/mp4" />
                    Seu navegador não suporta reprodução de vídeo.
                  </video>
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-mono tracking-widest uppercase text-champagne-gold">
                    Vídeo 0{idx + 1}
                  </p>
                  <h3 className="font-serif text-2xl text-alabaster mt-2 mb-2">
                    {vid.title}
                  </h3>
                  <p className="text-stone-warm text-xs sm:text-sm leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PERSONAGENS DISPONÍVEIS */}
        <section className="site-container py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Acervo natalino</p>
            <h2 className="font-serif text-3xl sm:text-5xl">
              Atrações artísticas para sua celebração de fim de ano
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {natalCharacters.map((char) => (
              <div
                key={char.name}
                className="neon-gold-card rounded-2xl overflow-hidden border border-champagne-gold/25 bg-[#071318]/90 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#071318]">
                  <Image
                    src={char.img}
                    alt={char.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-champagne-gold px-2.5 py-0.5 rounded-full bg-champagne-gold/10 border border-champagne-gold/25 mb-3">
                      {char.category}
                    </span>
                    <h3 className="font-serif text-xl text-alabaster mb-2 font-normal">
                      {char.name}
                    </h3>
                    <p className="text-xs text-stone-warm leading-relaxed">
                      {char.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NATAL CORPORATIVO & SHOPPING CENTERS */}
        <section className="border-y border-champagne-gold/20 bg-charcoal/40 py-16 sm:py-24">
          <div className="site-container grid gap-8 md:grid-cols-2">
            <div className="neon-gold-card rounded-2xl border border-champagne-gold/25 bg-[#071318]/90 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-6 border border-champagne-gold/30">
                  <Building2 size={24} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-alabaster mb-4">
                  Natal Corporativo & Confraternizações
                </h3>
                <p className="text-stone-warm text-sm leading-relaxed mb-6">
                  Leve o encanto natalino para a festa de encerramento da sua empresa. Personagens que acolhem colaboradores e seus familiares com carinho, elegância e registros inesquecíveis.
                </p>
                <ul className="space-y-2.5 text-xs text-stone-warm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-champagne-gold" /> Entrega de presentes e brindes aos colaboradores
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-champagne-gold" /> Recepção solene e fotos de alta resolução
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-champagne-gold" /> Harmonia visual com a decoração corporativa
                  </li>
                </ul>
              </div>
            </div>

            <div className="neon-gold-card rounded-2xl border border-champagne-gold/25 bg-[#071318]/90 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-6 border border-champagne-gold/30">
                  <Store size={24} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-alabaster mb-4">
                  Shoppings & Espaços Comerciais
                </h3>
                <p className="text-stone-warm text-sm leading-relaxed mb-6">
                  Atraia famílias e aumente o fluxo de visitantes em centros de compras. Desde a grande Parada de Abertura até sessões diárias com o bom velhinho e seus guardiões.
                </p>
                <ul className="space-y-2.5 text-xs text-stone-warm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-champagne-gold" /> Chegada triunfal do Papai Noel com cortejo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-champagne-gold" /> Cenografia viva para o trono do shopping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-champagne-gold" /> Artistas com experiência em atendimento ao público
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ NATALINO */}
        <section aria-labelledby="faq-natal" className="site-container py-16 sm:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="eyebrow">Tire suas dúvidas</p>
              <h2 id="faq-natal" className="font-serif text-3xl sm:text-5xl">
                Perguntas Frequentes sobre o Especial de Natal
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-2xl border border-champagne-gold/25 bg-charcoal/40 p-6 neon-gold-card"
                >
                  <h3 className="font-serif text-xl text-champagne-gold mb-2.5 flex items-start gap-2.5">
                    <HelpCircle size={20} className="shrink-0 mt-0.5 text-champagne-gold/80" />
                    <span>{q}</span>
                  </h3>
                  <p className="text-stone-warm text-sm sm:text-base leading-relaxed pl-7">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONVERSÃO NATAL */}
        <section id="orcamento" className="border-t border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow">Temporada limitada de fim de ano</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-alabaster">
                Garanta a presença do Natal no seu evento
              </h2>
              <p className="mt-4 text-stone-warm text-sm sm:text-base">
                As datas de dezembro possuem agenda concorrida. Solicite sua cotação expressa agora mesmo.
              </p>
            </div>

            <LeadCaptureForm
              pageSource="natal_page"
              defaultEventType="Especial de Natal"
              title="Cotação para Especial de Natal"
              subtitle="Informe sua data prevista e localização para verificarmos a disponibilidade do elenco natalino."
            />

            <div className="mt-12 text-center">
              <WhatsAppCTA
                message="Olá! Gostaria de solicitar um orçamento para o Especial de Natal da Estátua Viva Produções."
                label="natal_whatsapp_final"
                source="natal_page"
                buttonText="Consultar Natal no WhatsApp"
                size="lg"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <CampaignStickyCTA
        message="Olá! Gostaria de consultar orçamento para atrações de Natal da Estátua Viva Produções."
        label="sticky_natal"
        source="natal_mobile"
        headline="Orçamento de Natal via WhatsApp"
      />
    </main>
  );
}
