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
  PartyPopper,
  Camera,
  HeartHandshake,
  Clock,
  HelpCircle,
  Play,
  Star,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Atrações para Confraternização de Empresa | Estátua Viva',
  description:
    'Transforme sua confraternização de fim de ano com personagens vivos e performances artísticas. Celebre as conquistas da sua equipe com sofisticação.',
  alternates: {
    canonical: `${SITE_URL}/confraternizacao-empresa`,
  },
  openGraph: {
    title: 'Atrações para Confraternização de Empresa | Estátua Viva Produções',
    description:
      'Uma festa termina. Uma experiência memorável permanece. Personagens temáticos e estátuas vivas para festas empresariais de fim de ano.',
    url: `${SITE_URL}/confraternizacao-empresa`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Confraternização de Empresa — Estátua Viva' }],
  },
};

const attractions = [
  {
    name: 'Recepção de Gala em Ouro Imperial & Prata Nobre',
    category: 'Gala & Solenidade',
    desc: 'Estátuas imponentes recebendo os colaboradores logo na entrada do espaço para fotos inesquecíveis.',
    img: '/images/cases/recepcao-gala-dionisio-cafu.webp',
  },
  {
    name: 'Trio Clássico & Interação com o Público',
    category: 'Humor & Interação',
    desc: 'Performances esculturais com toques contemporâneos que quebram o gelo e divertem convidados de todas as idades.',
    img: '/images/confraternizacoes/interacao-publico-trio-marmore.webp',
  },
  {
    name: 'Estátuas Vivas para Celebrações',
    category: 'Fim de Ano',
    desc: 'Intervenções artísticas para recepções e celebrações de encerramento do ano, sem depender de uma temática natalina.',
    img: '/images/estatuas-vivas/estatua-viva-dourado-ouro-1.webp',
  },
  {
    name: 'Prata Futurista & Tecnologia',
    category: 'Tecnologia & B2B',
    desc: 'Estátuas futuristas e figuras cromadas para celebrar metas superadas e o olhar voltado ao próximo ano da empresa.',
    img: '/images/corporativo/performance-grego-vr-tecnologia.webp',
  },
];

const faqs = [
  {
    q: 'Com que antecedência devemos reservar atrações para a confraternização?',
    a: 'Novembro e dezembro são os meses de maior demanda corporativa do ano. Recomendamos reservar a data assim que o local da festa estiver definido para assegurar os personagens de preferência.',
  },
  {
    q: 'Como os artistas interagem durante a festa de confraternização?',
    a: 'Podemos posicionar as estátuas vivas no momento nobre da chegada dos colaboradores para fotos, e posteriormente integrar personagens vivos itinerantes que circulam pelo salão e pelas mesas com muito carisma.',
  },
  {
    q: 'A Estátua Viva Produções atende confraternizações fora de São Paulo?',
    a: 'Sim! Atendemos confraternizações empresariais em cidades do interior (Campinas, Sorocaba, Ribeirão Preto), litoral e capitais de outros estados em todo o Brasil.',
  },
  {
    q: 'A apresentação se adapta ao tema da nossa festa de fim de ano?',
    a: 'Com certeza. Seja uma noite de gala com premiação, um coquetel descontraído, festa temática anos 20 ou celebração natalina, selecionamos o figurino e a dinâmica cênica alinhados ao conceito da sua festa.',
  },
  {
    q: 'O que a empresa precisa fornecer no local da festa?',
    a: 'Apenas um camarim privativo, limpo e seguro para preparação da maquiagem e figurino, com espelho, ponto de energia e água. Todos os figurinos e materiais artísticos são levados por nossa equipe.',
  },
];

export default function ConfraternizacaoEmpresaPage() {
  const pageUrl = `${SITE_URL}/confraternizacao-empresa`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: 'Atrações para Confraternização de Empresa | Estátua Viva Produções',
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
            name: 'Eventos Corporativos',
            item: `${SITE_URL}/eventos-corporativos`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Confraternização de Empresa',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#servico`,
        name: 'Atrações para Confraternizações de Empresa e Fim de Ano',
        description:
          'Personagens vivos, estátuas vivas e intervenções artísticas para festas de confraternização corporativa e celebrações de fim de ano no Brasil.',
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
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden border-b border-champagne-gold/20 bg-[#071318] pt-36 pb-20 sm:pt-48 sm:pb-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_25%,rgba(223,189,124,0.18),transparent_70%)]" />

          <div className="site-container max-w-4xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne-gold/30 bg-black/60 text-champagne-gold text-xs font-mono uppercase tracking-widest mb-6">
              <PartyPopper size={14} /> Festas de Fim de Ano & Celebrações Corporativas 2026
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-alabaster font-normal">
              Sua confraternização de fim de ano merece algo{' '}
              <span className="italic text-champagne-gold">extraordinário.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-stone-warm max-w-2xl mx-auto leading-relaxed">
              Surpreenda sua equipe com atrações artísticas, personagens vivos e experiências especiais para celebrar as conquistas do ano.
            </p>

            <div className="mt-8 p-4 rounded-2xl bg-charcoal/50 border border-champagne-gold/20 max-w-xl mx-auto">
              <p className="font-serif text-lg text-champagne-gold italic">
                “Uma festa termina. Uma experiência memorável permanece.”
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#orcamento-form"
                className="button-gold text-base px-8 py-4 shadow-[0_0_30px_rgba(223,189,124,0.4)]"
              >
                Solicitar proposta para confraternização ↗
              </a>

              <a
                href="/fim-de-ano"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold/10 transition-colors text-sm font-semibold"
              >
                <Play size={16} /> Ver apresentação em vídeo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-warm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-champagne-gold" /> Mais de 20 anos de tradição em eventos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-champagne-gold" /> Atendimento corporativo em todo o Brasil
              </span>
            </div>
          </div>
        </section>

        {/* VÍDEO DA PERFORMANCE REAL */}
        <section id="video-confraternizacao" className="site-container py-16 sm:py-20 border-b border-champagne-gold/20">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="eyebrow">A magia em movimento</p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Encantamento visual que une sua equipe
            </h2>
            <p className="text-stone-warm text-sm mt-2">
              Assista a uma das intervenções artísticas da Estátua Viva Produções preparadas para temporadas e eventos especiais.
            </p>
          </div>

          <div className="relative mx-auto max-w-[420px] aspect-[9/16] overflow-hidden rounded-3xl border border-champagne-gold/35 bg-black shadow-[0_0_40px_rgba(223,189,124,0.25)]">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/brand/hero-bronze.jpg"
              aria-label="Apresentação artística de personagens especiais"
              className="w-full h-full object-contain"
            >
              <source
                src="https://br-super-moon-be663clt.storage.c-9.us-east-2.aws.neon.tech/estatua-viva-public/EV%20%281%29.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </section>

        {/* BENEFÍCIOS PARA CONFRATERNIZAÇÕES */}
        <section className="site-container py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Por que contratar a Estátua Viva</p>
            <h2 className="font-serif text-3xl sm:text-5xl">
              Benefícios que transformam sua festa de fim de ano
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: HeartHandshake,
                title: 'Valorização dos Colaboradores',
                desc: 'Demonstre cuidado e apreço pela equipe oferecendo uma recepção de alto padrão visual logo na chegada ao salão.',
              },
              {
                icon: Camera,
                title: 'Fotos e Redes Sociais',
                desc: 'O momento mais compartilhado e fotografado da festa, gerando lembranças positivas e orgulho de pertencer à empresa.',
              },
              {
                icon: PartyPopper,
                title: 'Quebra de Gelo Descontraída',
                desc: 'Interações com personagens vivos e mímica que aproximam departamentos e estimulam a descontração entre todos.',
              },
              {
                icon: Clock,
                title: 'Pontualidade e Rigor Técnico',
                desc: 'Equipe profissional com chegada antecipada, camarim preparado e total respeito ao cronograma do cerimonial.',
              },
            ].map((b, i) => (
              <div
                key={b.title}
                className="neon-gold-card rounded-2xl border border-champagne-gold/20 bg-charcoal/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-5 border border-champagne-gold/30">
                    <b.icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl text-alabaster mb-2 font-normal">
                    {b.title}
                  </h3>
                  <p className="text-xs text-stone-warm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ATRAÇÕES RECOMENDADAS PARA CONFRATERNIZAÇÃO */}
        <section className="border-y border-champagne-gold/20 bg-charcoal/40 py-16 sm:py-24">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Curadoria de elenco</p>
              <h2 className="font-serif text-3xl sm:text-5xl">
                Atrações recomendadas para festas de empresa
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {attractions.map((att) => (
                <div
                  key={att.name}
                  className="neon-gold-card group rounded-2xl overflow-hidden border border-champagne-gold/25 bg-[#071318]/90 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                    <Image
                      src={att.img}
                      alt={att.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-champagne-gold px-2.5 py-0.5 rounded-full bg-champagne-gold/10 border border-champagne-gold/25 mb-3">
                        {att.category}
                      </span>
                      <h3 className="font-serif text-xl text-alabaster mb-2 font-normal">
                        {att.name}
                      </h3>
                      <p className="text-xs text-stone-warm leading-relaxed">
                        {att.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ CONFRATERNIZAÇÃO */}
        <section aria-labelledby="faq-confraternizacao" className="site-container py-16 sm:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 id="faq-confraternizacao" className="font-serif text-3xl sm:text-5xl">
                Perguntas Frequentes sobre Confraternizações
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

        {/* NAVEGAÇÃO CONTEXTUAL CORPORATIVA */}
        <section className="border-t border-champagne-gold/15 bg-charcoal/40 py-16">
          <div className="site-container">
            <p className="eyebrow text-center">Soluções Corporativas Complementares</p>
            <h2 className="font-serif text-2xl sm:text-4xl text-center text-alabaster mt-2 mb-10">
              Conheça outros formatos para seu evento corporativo
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/eventos-corporativos"
                className="group rounded-2xl border border-champagne-gold/20 bg-charcoal/60 p-6 transition-colors hover:border-champagne-gold/50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl text-champagne-gold group-hover:text-white transition-colors">
                    Eventos Corporativos & Feiras
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-warm leading-relaxed">
                    Estandes em feiras de negócios, convenções, congressos e lançamentos de produtos com ativações de marca.
                  </p>
                </div>
                <span className="mt-4 text-xs font-mono uppercase tracking-widest text-champagne-gold inline-flex items-center gap-1">
                  Ver soluções B2B →
                </span>
              </Link>

              <Link
                href="/estatua-viva-para-eventos-corporativos"
                className="group rounded-2xl border border-champagne-gold/20 bg-charcoal/60 p-6 transition-colors hover:border-champagne-gold/50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl text-champagne-gold group-hover:text-white transition-colors">
                    Estátuas Vivas Corporativas
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-warm leading-relaxed">
                    Performances esculturais em prata industrial, ouro de gala e pátina de mármore para recepções nobres.
                  </p>
                </div>
                <span className="mt-4 text-xs font-mono uppercase tracking-widest text-champagne-gold inline-flex items-center gap-1">
                  Ver estátuas vivas →
                </span>
              </Link>

              <Link
                href="/entretenimento-para-empresas"
                className="group rounded-2xl border border-champagne-gold/20 bg-charcoal/60 p-6 transition-colors hover:border-champagne-gold/50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl text-champagne-gold group-hover:text-white transition-colors">
                    Guia de Entretenimento SP
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-warm leading-relaxed">
                    Visão completa sobre planejamento de atrações artísticas para eventos empresariais na Grande São Paulo.
                  </p>
                </div>
                <span className="mt-4 text-xs font-mono uppercase tracking-widest text-champagne-gold inline-flex items-center gap-1">
                  Ler guia regional →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CONVERSÃO: FORMULÁRIO B2B */}
        <section id="orcamento" className="border-t border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow">Garanta a data da sua empresa</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-alabaster">
                Solicite uma proposta para sua confraternização
              </h2>
              <p className="mt-4 text-stone-warm text-sm sm:text-base">
                Preencha o formulário abaixo e nossa produção entrará em contato com a cotação e opções de elenco disponíveis.
              </p>
            </div>

            <LeadCaptureForm
              pageSource="confraternizacao_empresa"
              defaultEventType="Confraternização / Fim de Ano"
              title="Cotação Expressa para Confraternização"
              subtitle="Informe os detalhes do evento para verificarmos a disponibilidade na agenda."
            />

            <div className="mt-12 text-center">
              <WhatsAppCTA
                message="Olá! Gostaria de consultar disponibilidade e orçamento de personagens para a confraternização de fim de ano da minha empresa."
                label="confraternizacao_whatsapp_final"
                source="confraternizacao_empresa"
                buttonText="Consultar Confraternização no WhatsApp"
                size="lg"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <CampaignStickyCTA
        message="Olá! Gostaria de consultar orçamento para a confraternização de fim de ano da nossa empresa."
        label="sticky_confraternizacao"
        source="confraternizacao_mobile"
        headline="Orçamento para Confraternização"
      />
    </main>
  );
}
