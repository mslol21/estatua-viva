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
  Drama,
  Users,
  Camera,
  Layers,
  HelpCircle,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personagens e Performances para Eventos | Estátua Viva',
  description:
    'Contrate personagens vivos, atores performáticos e intervenções temáticas para transformar seu evento em uma experiência inesquecível. São Paulo e Brasil.',
  alternates: {
    canonical: `${SITE_URL}/personagens-para-eventos`,
  },
  openGraph: {
    title: 'Personagens e Performances para Eventos | Estátua Viva Produções',
    description:
      'Atores performáticos, mímica clássica, cosplay profissional e figuras sob medida para recepções e celebrações em todo o Brasil.',
    url: `${SITE_URL}/personagens-para-eventos`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Personagens para Eventos — Estátua Viva' }],
  },
};

const characters = [
  {
    name: 'Carlos Drummond & Monumentos Históricos',
    category: 'Literatura & História',
    desc: 'Caracterização escultural de precisão milimétrica que recria poetas e personalidades históricas para eventos culturais e corporativos.',
    img: '/images/estatuas-vivas/estatua-viva-carlos-drummond-bronze.webp',
  },
  {
    name: 'Hermes & Deuses Mitológicos',
    category: 'Prata Industrial & Mitologia',
    desc: 'Pátina metalizada e elegância imponente para acolhimento de eventos temáticos, aniversários de gala e convenções empresariais.',
    img: '/images/estatuas-vivas/estatua-viva-hermes-prata.webp',
  },
  {
    name: 'Musa das Artes com Lira',
    category: 'Ouro Imperial & Gala',
    desc: 'Vestimenta drapeada clássica em pátina dourada com adereços florais e lira escultural, perfeita para recepções solenes.',
    img: '/images/estatuas-vivas/estatua-viva-musa-lira-ouro.webp',
  },
  {
    name: 'Anjos Barrocos em Mármore',
    category: 'Mármore Branco & Solenidade',
    desc: 'Esculturas vivas que remetem a monumentos renascentistas e barrocos, ideais para casamentos, bodas e galerias de arte.',
    img: '/images/estatuas-vivas/estatua-viva-anjo-barroco-igreja.webp',
  },
  {
    name: 'Mascotes & Personagens Customizados B2B',
    category: 'Projetos sob Medida',
    desc: 'Confecção em ateliê próprio de personagens vivos e mascotes tridimensionais sob medida para feiras e campanhas de marcas.',
    img: '/images/cases/case-loctite-mascote-personalizado.webp',
  },
  {
    name: 'Piratas Interativos & Aventura',
    category: 'Interação Dinâmica & Humor',
    desc: 'Figurinos detalhados, atuação cênica com improviso teatral que quebram a quarta parede e encantam os convidados.',
    img: '/brand/pirata.webp',
  },
];

const faqs = [
  {
    q: 'Qual é a diferença entre estátua viva e personagem vivo?',
    a: 'A estátua viva tem como foco a imobilidade escultural e movimentos milimétricos surpreendentes. Já o personagem vivo tem mobilidade fluida, interage com o público através de falas, gestual teatral e participa ativamente da dinâmica do evento.',
  },
  {
    q: 'Os personagens falam com os convidados?',
    a: 'Sim! Personagens como piratas, mestres de cerimônias e personagens de época utilizam voz e improviso teatral. Já figuras como Chaplin e mímicos comunicam-se pela linguagem corporal expressiva.',
  },
  {
    q: 'É possível criar um personagem exclusivo para a minha marca?',
    a: 'Sim! Nosso atelier de criação desenvolve figurinos sob medida para campanhas publicitárias, lançamentos de produtos e mascotes corporativos vivos.',
  },
  {
    q: 'Vocês atendem eventos fora da capital de São Paulo?',
    a: 'Sim. Nossa produção atende eventos corporativos, feiras e comemorações sociais em todo o Brasil com planejamento logístico completo.',
  },
];

export default function PersonagensParaEventosPage() {
  const pageUrl = `${SITE_URL}/personagens-para-eventos`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: 'Personagens e Performances para Eventos | Estátua Viva Produções',
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
            name: 'Personagens para Eventos',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#servico`,
        name: 'Personagens e Performances para Eventos',
        description:
          'Atores performáticos profissionais, intervenções temáticas e personagens vivos para eventos corporativos, celebrações e feiras no Brasil.',
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
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_25%,rgba(223,189,124,0.18),transparent_70%)]" />

          <div className="site-container max-w-4xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne-gold/30 bg-black/60 text-champagne-gold text-xs font-mono uppercase tracking-widest mb-6">
              <Drama size={14} /> Atuação Cênica & Performances Itinerantes
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-alabaster font-normal">
              Personagens e performances para{' '}
              <span className="italic text-champagne-gold">transformar seu evento.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-stone-warm max-w-2xl mx-auto leading-relaxed">
              Atores performáticos profissionais, fidelidade estética rigorosa e intervenções dinâmicas que conectam o público à atmosfera da sua celebração.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#orcamento-form"
                className="button-gold text-base px-8 py-4 shadow-[0_0_30px_rgba(223,189,124,0.4)]"
              >
                Solicitar orçamento de personagens ↗
              </a>

              <a
                href="#catalogo-personagens"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold/10 transition-colors text-sm font-semibold"
              >
                Conhecer personagens do acervo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-warm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-champagne-gold" /> Figurinos detalhados de cinema
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-champagne-gold" /> Atores com preparo teatral e carisma
              </span>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE PERSONAGENS */}
        <section id="catalogo-personagens" className="site-container py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Acervo artístico</p>
            <h2 className="font-serif text-3xl sm:text-5xl">
              Categorias e personagens mais requisitados
            </h2>
            <p className="mt-4 text-stone-warm text-sm sm:text-base">
              Fotografias reais das caracterizações desenvolvidas pelo ateliê da Estátua Viva Produções.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((char) => (
              <div
                key={char.name}
                className="neon-gold-card group rounded-2xl overflow-hidden border border-champagne-gold/25 bg-[#071318]/90 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <Image
                    src={char.img}
                    alt={char.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071318] via-transparent to-transparent opacity-80" />
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

        {/* FAQ PERSONAGENS */}
        <section aria-labelledby="faq-personagens" className="border-t border-champagne-gold/20 bg-charcoal/40 py-16 sm:py-24">
          <div className="site-container max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 id="faq-personagens" className="font-serif text-3xl sm:text-5xl">
                Perguntas Frequentes sobre Personagens
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-2xl border border-champagne-gold/25 bg-[#071318]/90 p-6 neon-gold-card"
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

        {/* CONVERSÃO: FORMULÁRIO */}
        <section id="orcamento" className="border-t border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow">Planeje sua intervenção artística</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-alabaster">
                Solicite uma proposta para personagens vivos
              </h2>
              <p className="mt-4 text-stone-warm text-sm sm:text-base">
                Preencha o formulário abaixo para receber os valores e a disponibilidade dos atores para o seu evento.
              </p>
            </div>

            <LeadCaptureForm
              pageSource="personagens_para_eventos"
              defaultEventType="Personagens Vivos e Temáticos"
              title="Cotação para Personagens Vivos"
              subtitle="Informe a data e o tipo de evento para indicarmos as melhores opções do elenco."
            />

            <div className="mt-12 text-center">
              <WhatsAppCTA
                message="Olá! Gostaria de consultar orçamento de personagens vivos para meu evento com a Estátua Viva Produções."
                label="personagens_whatsapp_final"
                source="personagens_para_eventos"
                buttonText="Falar sobre Personagens no WhatsApp"
                size="lg"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <CampaignStickyCTA
        message="Olá! Gostaria de consultar orçamento de personagens vivos para um evento."
        label="sticky_personagens"
        source="personagens_mobile"
        headline="Orçamento de Personagens via WhatsApp"
      />
    </main>
  );
}
