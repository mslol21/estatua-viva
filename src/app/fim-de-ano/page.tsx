import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Camera, Clock3, MapPin, Sparkles, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/marketing/WhatsAppCTA';
import ArtworkFrame from '@/components/ArtworkFrame';
import { SITE_URL } from '@/lib/site-config';

const pageUrl = `${SITE_URL}/fim-de-ano`;

export const metadata: Metadata = {
  title: 'Atrações para Festas de Fim de Ano em São Paulo | Estátua Viva Produções',
  description:
    'Estátuas vivas, recepção artística e performances para confraternizações, empresas e condomínios em São Paulo. Consulte disponibilidade e solicite orçamento.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Festas de Fim de Ano com Arte Viva | Estátua Viva Produções',
    description:
      'Recepções memoráveis, apresentações curtas e estátuas vivas para empresas, condomínios e celebrações em São Paulo.',
    url: pageUrl,
    type: 'website',
    images: [{ url: `${SITE_URL}/images/fim-de-ano/dionisio_escultura_nova.webp`, width: 1023, height: 1537, alt: 'Atrações artísticas para festas de fim de ano — Estátua Viva Produções' }],
  },
};

const highlights = [
  {
    title: 'Bailarina Prateada',
    type: 'Arte contemporânea & Vanguarda',
    image: '/images/fim-de-ano/escultura_prata_nova.webp',
    alt: 'Artista caracterizada como estátua viva bailarina prateada',
    description:
      'Presença artística prateada e futurista com movimentos coreografados para premiações corporativas, convenções e celebrações modernas.',
  },
  {
    title: 'Dionísio Imperial',
    type: 'Solenidade & Conquistas',
    image: '/images/fim-de-ano/dionisio_escultura_nova.webp',
    alt: 'Estátua viva clássica em pátina dourada imperial',
    description:
      'Imponência cênica e energia comemorativa com caracterização clássica refinada, celebrando o encerramento do ano em grande estilo.',
  },
  {
    title: 'Musa Dourada com Lira',
    type: 'Gala & Tradição',
    image: '/images/estatuas-vivas/estatua-viva-musa-lira-ouro.webp',
    alt: 'Estátua viva clássica em ouro imperial com lira',
    description:
      'A clássica intervenção artística em ouro imperial com lira, proporcionando um acolhimento nobre, poético e triunfal para os convidados.',
  },
  {
    title: 'Dupla Escultural de Gala',
    type: 'Recepções de alto impacto',
    image: '/images/confraternizacoes/ninfa-e-dionisio-festa-debutante-1.webp',
    alt: 'Casal de estátuas vivas em recepção de gala para eventos',
    description:
      'Casal de artistas em harmonia e imobilidade estatuária, criando um ponto nobre de atração visual e cenário especial para fotos com os convidados.',
  },
  {
    title: 'Mímicos & Intervenções',
    type: 'Interação & Descontração',
    image: '/images/entretenimento/mimicos-interacao-eventos.webp',
    alt: 'Artistas de mímica em performance interativa com o público',
    description:
      'Interações leves, acolhedoras e refinadas que circulam entre o público, descontraindo o ambiente e aproximando os participantes.',
  },
];

const formats = [
  {
    icon: Clock3,
    name: 'Presença Marcante',
    audience: 'Condomínios e celebrações menores',
    description:
      'Uma intervenção artística breve para surpreender moradores e convidados. A duração é definida com a produção conforme o personagem e o local.',
    message: 'Olá! Gostaria de uma proposta de Presença Marcante para um evento de fim de ano.',
  },
  {
    icon: Camera,
    name: 'Recepção Memorável',
    audience: 'Confraternizações empresariais',
    description:
      'Artistas posicionados na chegada dos convidados, com interação e momentos especiais para fotografias.',
    message: 'Olá! Gostaria de uma proposta de Recepção Memorável para minha confraternização.',
  },
  {
    icon: Sparkles,
    name: 'Experiência Especial',
    audience: 'Festas e eventos de maior porte',
    description:
      'Curadoria de personagens, atrações e intervenções de acordo com o estilo e a programação da celebração.',
    message: 'Olá! Gostaria de uma proposta de Experiência Especial para meu evento de fim de ano.',
  },
];

const questions = [
  {
    q: 'Ainda é possível contratar uma atração para dezembro?',
    a: 'A disponibilidade depende da data, local, personagem e tempo de apresentação. Consulte a equipe informando esses detalhes para receber uma proposta.',
  },
  {
    q: 'Vocês atendem festas em condomínios?',
    a: 'A produção pode avaliar apresentações para condomínios, como intervenções artísticas na recepção ou em áreas comuns, conforme a estrutura e as regras do local.',
  },
  {
    q: 'Uma apresentação curta faz sentido para um evento?',
    a: 'Sim. Uma recepção artística ou aparição surpresa pode complementar uma programação já definida, sem exigir uma festa ou produção completa.',
  },
  {
    q: 'Como solicitar um orçamento?',
    a: 'Informe tipo de evento, data, endereço ou cidade, quantidade aproximada de convidados e atração desejada pelo WhatsApp.',
  },
];

export default function FimDeAnoPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: metadata.title,
        url: pageUrl,
        inLanguage: 'pt-BR',
        about: { '@id': `${SITE_URL}/#empresa` },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Atrações artísticas para festas de fim de ano',
        serviceType: 'Estátuas vivas e performances para empresas e condomínios',
        url: pageUrl,
        provider: { '@id': `${SITE_URL}/#empresa` },
        areaServed: { '@type': 'AdministrativeArea', name: 'São Paulo, Brasil' },
      },
      {
        '@type': 'VideoObject',
        '@id': `${pageUrl}#video-bailarina`,
        name: 'Bailarina Prateada — Performance Artística para Fim de Ano',
        description:
          'Performance artística de estátua viva e bailarina prateada para recepções, confraternizações empresariais e eventos de fim de ano em São Paulo.',
        thumbnailUrl: `${SITE_URL}/images/fim-de-ano/escultura_prata_nova.webp`,
        contentUrl: `${SITE_URL}/images/fim-de-ano/bailarina_prateada_hero_13s.mp4`,
        uploadDate: '2026-11-25T00:00:00+00:00',
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#empresa`,
          name: 'Estátua Viva Produções',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Festas de fim de ano', item: pageUrl },
        ],
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
        <section className="relative isolate overflow-hidden border-b border-champagne-gold/20 bg-[#071318] pt-36 pb-16 sm:pt-48 sm:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(223,189,124,0.15),transparent_65%)]"
          />
          <div className="site-container relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Temporada de fim de ano · São Paulo e região</p>
              <h1 className="mt-5 font-serif text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
                Sua celebração merece um momento <span className="italic text-champagne-gold">inesquecível.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-warm sm:text-lg">
                Estátuas vivas, performances visuais e recepções marcantes para festas de fim de ano, confraternizações
                empresariais e eventos em condomínios. Uma presença artística pode transformar todo o encontro.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppCTA
                  source="fim_de_ano_hero"
                  label="orcamento_fim_de_ano"
                  message="Olá! Gostaria de consultar atrações e datas disponíveis para uma festa de fim de ano."
                  buttonText="Consultar datas e orçamento"
                  size="lg"
                />
                <a
                  href="#atracoes"
                  className="inline-flex items-center rounded-full border border-champagne-gold/40 px-6 py-3 text-sm font-semibold text-champagne-gold hover:bg-champagne-gold/10"
                >
                  Conhecer atrações <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-stone-warm">
                <span className="inline-flex items-center gap-2">
                  <Building2 size={15} className="text-champagne-gold" /> Empresas
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users size={15} className="text-champagne-gold" /> Condomínios
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-champagne-gold" /> São Paulo e região
                </span>
              </div>
            </div>
            <figure className="overflow-hidden rounded-[2rem] border border-champagne-gold/35 bg-[#0a1e24] shadow-[0_0_40px_rgba(223,189,124,0.2)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] bg-black overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/fim-de-ano/escultura_prata_nova.webp"
                  aria-label="Performance da Bailarina Prateada para eventos de fim de ano"
                  className="h-full w-full object-cover object-center"
                >
                  <source src="/images/fim-de-ano/bailarina_prateada_hero_13s.mp4" type="video/mp4" />
                  Seu navegador não suporta reprodução de vídeo.
                </video>
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-black/75 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-champagne-gold border border-champagne-gold/40 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-champagne-gold animate-pulse" /> Registro em Performance
                </div>
              </div>
              <figcaption className="border-t border-champagne-gold/20 px-5 py-4 text-center font-mono text-[11px] uppercase tracking-widest text-champagne-gold">
                Bailarina Prateada · Arte viva para receber e surpreender
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="site-container py-16 sm:py-24">
          <p className="eyebrow">Complemento especial para sua festa</p>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl sm:text-5xl">
            Grandes momentos não precisam de grandes produções.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-stone-warm">
            Mesmo com a programação do evento já definida, é possível incluir uma recepção surpreendente, uma estátua
            viva ou um momento artístico para fotografias. Adaptamos a proposta ao local e à ocasião, sem depender
            exclusivamente de atrações natalinas.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {formats.map((item) => (
              <article
                key={item.name}
                className="neon-gold-card flex flex-col rounded-2xl border border-champagne-gold/25 bg-charcoal/50 p-7"
              >
                <item.icon className="mb-5 text-champagne-gold" size={28} />
                <p className="text-xs uppercase tracking-wider text-champagne-gold">{item.audience}</p>
                <h3 className="mt-3 font-serif text-2xl">{item.name}</h3>
                <p className="mt-3 mb-7 flex-1 text-sm leading-relaxed text-stone-warm">{item.description}</p>
                <WhatsAppCTA
                  source="fim_de_ano_formato"
                  label={item.name}
                  message={item.message}
                  buttonText="Consultar disponibilidade"
                  variant="outline"
                  size="sm"
                />
              </article>
            ))}
          </div>
        </section>
        <section id="atracoes" className="border-y border-champagne-gold/20 bg-charcoal/30 py-16 sm:py-24">
          <div className="site-container">
            <p className="eyebrow">Portfólio artístico</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Atrações que deixam uma lembrança</h2>
            <p className="mt-4 max-w-3xl text-stone-warm">
              Fotografias reais do acervo exclusivo de fim de ano. As opções de elenco e figurino são confirmadas
              conforme a data do evento.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="neon-gold-card flex flex-col overflow-hidden rounded-2xl border border-champagne-gold/25 bg-[#071318]"
                >
                  {item.title === 'Mímicos & Intervenções' ? (
                    <div className="relative aspect-[4/5] w-full bg-black/30">
                      <Image src={item.image} alt={item.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover object-center" />
                    </div>
                  ) : (
                    <div className="p-3 pb-0">
                      <ArtworkFrame src={item.image} alt={item.alt} sizes="(max-width: 639px) 85vw, (max-width: 1023px) 48vw, 20vw" />
                    </div>
                  )>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] uppercase tracking-wider text-champagne-gold">{item.type}</p>
                    <h3 className="mt-2 font-serif text-xl sm:text-2xl text-alabaster">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-warm">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-champagne-gold">
              <Link href="/estatua-viva-para-eventos" className="hover:underline">
                Ver mais estátuas vivas <ArrowRight size={15} className="inline" />
              </Link>
              <Link href="/personagens-para-eventos" className="hover:underline">
                Explorar personagens <ArrowRight size={15} className="inline" />
              </Link>
              <Link href="/confraternizacao-empresa" className="hover:underline">
                Confraternizações corporativas <ArrowRight size={15} className="inline" />
              </Link>
            </div>
          </div>
        </section>
        <section className="site-container grid gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div className="rounded-2xl border border-champagne-gold/25 bg-charcoal/40 p-7 sm:p-10">
            <p className="eyebrow">Para empresas</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Uma recepção à altura da celebração da equipe.
            </h2>
            <p className="mt-5 leading-relaxed text-stone-warm">
              Confraternizações, premiações e encontros de encerramento ganham um ponto nobre de atenção com personagens
              esculturais e interações artísticas memoráveis.
            </p>
            <Link
              href="/confraternizacao-empresa"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-champagne-gold hover:text-white"
            >
              Saiba mais sobre confraternizações <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl border border-champagne-gold/25 bg-charcoal/40 p-7 sm:p-10">
            <p className="eyebrow">Para condomínios</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Uma aparição curta. Um momento marcante.</h2>
            <p className="mt-5 leading-relaxed text-stone-warm">
              Uma proposta para halls, salões e áreas comuns, com interações e fotografias. O formato considera a
              circulação, a estrutura do condomínio e as orientações da administração.
            </p>
            <WhatsAppCTA
              source="fim_de_ano_condominios"
              label="solicitar_condominio"
              message="Olá! Represento um condomínio e gostaria de saber sobre uma apresentação artística curta para o fim de ano."
              buttonText="Pedir proposta para condomínio"
              variant="outline"
              size="sm"
              className="mt-7"
            />
          </div>
        </section>
        <section className="border-y border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
          <div className="site-container max-w-4xl">
            <p className="eyebrow">Dúvidas antes da contratação</p>
            <h2 className="mt-3 mb-8 font-serif text-3xl sm:text-5xl">Perguntas frequentes</h2>
            <div className="space-y-6">
              {questions.map((item) => (
                <div key={item.q} className="border-b border-champagne-gold/20 pb-6">
                  <h3 className="font-serif text-2xl">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-warm">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-2xl border border-champagne-gold/35 bg-charcoal/50 p-7 sm:p-10">
              <h2 className="font-serif text-3xl">Seu evento já tem data?</h2>
              <p className="mt-3 mb-6 text-stone-warm">
                Envie a cidade, o dia e o tipo de celebração. A equipe informa quais atrações podem atender à sua
                programação.
              </p>
              <WhatsAppCTA
                source="fim_de_ano_final"
                label="solicitar_orcamento_final"
                message="Olá! Meu evento de fim de ano já tem data e gostaria de consultar a disponibilidade de atrações."
                buttonText="Solicitar proposta personalizada"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
