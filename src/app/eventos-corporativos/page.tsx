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
  Building2,
  Users,
  Target,
  ShieldCheck,
  Calendar,
  Layers,
  HelpCircle,
  Star,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Entretenimento para Eventos Corporativos | Estátua Viva Produções',
  description:
    'Surpreenda convidados e colaboradores com estátuas vivas, robôs prateados e performances artísticas em feiras, convenções e confraternizações. Solicite orçamento.',
  alternates: {
    canonical: `${SITE_URL}/eventos-corporativos`,
  },
  openGraph: {
    title: 'Entretenimento para Eventos Corporativos | Estátua Viva Produções',
    description:
      'Performances de alto impacto, estátuas vivas e personagens temáticos para empresas, feiras B2B e confraternizações em todo o Brasil.',
    url: `${SITE_URL}/eventos-corporativos`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Eventos Corporativos — Estátua Viva Produções' }],
  },
};

const solutions = [
  {
    title: 'Confraternizações Empresariais',
    desc: 'Celebrações de fim de ano e fechamento de metas com personagens e recepções marcantes.',
    img: '/images/confraternizacoes/interacao-publico-trio-marmore.webp',
    ctaText: 'Ver para confraternização',
    href: '/confraternizacao-empresa',
  },
  {
    title: 'Feiras de Negócios & Estandes',
    desc: 'Estátuas prateadas e figuras futuristas que atraem visitantes no pavilhão e aumentam a retenção de leads.',
    img: '/images/corporativo/performance-grego-vr-tecnologia.webp',
    ctaText: 'Atrair público no estande',
    href: '#orcamento-form',
  },
  {
    title: 'Lançamentos de Produtos & Marcas',
    desc: 'Intervenções cênicas ao redor do produto ou conceito, gerando curiosidade e registros fotográficos espontâneos.',
    img: '/images/cases/case-loctite-mascote-personalizado.webp',
    ctaText: 'Personalizar lançamento',
    href: '#orcamento-form',
  },
  {
    title: 'Convenções & Premiações de Vendas',
    desc: 'Performances estilo troféu vivo para noites solenes e reconhecimento de equipes de alta performance.',
    img: '/images/cases/recepcao-gala-dionisio-cafu.webp',
    ctaText: 'Planejar premiação',
    href: '#orcamento-form',
  },
  {
    title: 'Recepção de Convidados & Gala',
    desc: 'Acolhimento triunfal logo na entrada do espaço, estabelecendo o padrão de sofisticação do evento.',
    img: '/images/estatuas-vivas/estatua-viva-musa-lira-ouro.webp',
    ctaText: 'Recepção de alto padrão',
    href: '#orcamento-form',
  },
  {
    title: 'Recepção Artística para Eventos de Natal',
    desc: 'Anjos esculturais e estátuas vivas para recepções, confraternizações e celebrações de fim de ano.',
    img: '/images/estatuas-vivas/estatua-viva-anjo-branco-1.webp',
    ctaText: 'Conhecer Especial de Natal',
    href: '/natal',
  },
];

const faqs = [
  {
    q: 'Como contratar uma estátua viva para um evento corporativo?',
    a: 'Basta preencher o formulário expresso nesta página ou clicar no botão de WhatsApp informando a data, cidade e objetivo do evento. Nossa equipe artística enviará a proposta personalizada com as opções de elenco e condições de montagem.',
  },
  {
    q: 'Quais tipos de performances estão disponíveis para empresas?',
    a: 'Disponibilizamos estátuas vivas douradas (Ouro Imperial para gala e premiações), prateadas e robôs (Prata Industrial para feiras de tecnologia), mármore clássico, além de personagens vivos interativos e confecção sob medida de mascotes corporativos.',
  },
  {
    q: 'A Estátua Viva Produções atende fora de São Paulo?',
    a: 'Sim. Embora nosso ateliê cenográfico e base administrativa estejam localizados em São Paulo (região do Tatuapé), atendemos convenções, feiras e eventos corporativos em todo o Brasil mediante consulta de logística.',
  },
  {
    q: 'É possível personalizar os personagens com as cores ou logo da empresa?',
    a: 'Sim! Em nossa vertente de Projetos Exclusivos B2B, podemos confeccionar detalhes de figurino com a paleta institucional da sua marca, adereços cenográficos com seu produto e até mascotes vivos sob medida.',
  },
  {
    q: 'Como funciona a dinâmica de horários durante feiras e eventos longos?',
    a: 'Para feiras ou convenções com duração prolongada (de 4h a 8h), as apresentações são organizadas em blocos de performance com intervalos calculados ou com revezamento de artistas para manter a presença constante no espaço.',
  },
  {
    q: 'Com quanto tempo de antecedência devemos reservar a data?',
    a: 'Recomendamos iniciar o contato com pelo menos 15 a 30 dias de antecedência. Para datas críticas de fim de ano (novembro e dezembro), as reservas costumam ser confirmadas com meses de antecedência devido à alta procura.',
  },
  {
    q: 'As apresentações podem ocorrer em ambientes internos?',
    a: 'Sim, a maioria das intervenções corporativas ocorre em salões de eventos, foyers de hotéis, pavilhões de exposições (como Expo Center Norte, São Paulo Expo e Transamerica) e auditórios fechados.',
  },
  {
    q: 'É possível contratar mais de um artista para o mesmo evento?',
    a: 'Com certeza. Podemos compor duplas esculturais, trios ou elencos combinados (ex: uma estátua na recepção externa e personagens vivos itinerantes no salão principal).',
  },
];

export default function EventosCorporativosPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/eventos-corporativos#servico`,
        name: 'Entretenimento para Eventos Corporativos e Feiras',
        description:
          'Estátuas vivas, personagens temáticos e performances artísticas de alto padrão para eventos corporativos, feiras e confraternizações no Brasil.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Estátua Viva Produções',
          url: `${SITE_URL}/`,
          telephone: '+5511937765250',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            addressCountry: 'BR',
            streetAddress: 'Região do Tatuapé',
          },
        },
        areaServed: { '@type': 'Country', name: 'Brasil' },
        url: `${SITE_URL}/eventos-corporativos`,
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/eventos-corporativos#faq`,
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
        {/* SEÇÃO 1: HERO COMERCIAL */}
        <section className="relative isolate overflow-hidden border-b border-champagne-gold/20 bg-[#071318] pt-36 pb-20 sm:pt-48 sm:pb-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_25%,rgba(223,189,124,0.18),transparent_70%)]" />

          <div className="site-container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne-gold/30 bg-black/60 text-champagne-gold text-xs font-mono uppercase tracking-widest mb-6">
                <Sparkles size={14} /> Soluções Artísticas B2B · São Paulo & Brasil
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-alabaster font-normal">
                Transforme seu evento corporativo em uma{' '}
                <span className="italic text-champagne-gold">experiência inesquecível.</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-stone-warm max-w-xl leading-relaxed">
                Estátuas vivas, personagens temáticos e performances artísticas que surpreendem colaboradores, clientes e convidados desde o primeiro instante.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#orcamento-form"
                  className="button-gold text-base px-8 py-4 shadow-[0_0_30px_rgba(223,189,124,0.4)]"
                >
                  Solicitar orçamento para meu evento ↗
                </a>

                <a
                  href="#solucoes"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold/10 transition-colors text-sm font-semibold"
                >
                  Conhecer nossas performances
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-stone-warm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-champagne-gold" /> Mais de 20 anos de atuação (desde 2005)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-champagne-gold" /> Direção de Rodolfo Valentino
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-champagne-gold" /> Emissão de Nota Fiscal PJ
                </span>
              </div>
            </div>

            {/* Imagem Real do Hero */}
            <figure className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-champagne-gold/35 bg-[#0a1e24] shadow-[0_0_45px_rgba(223,189,124,0.25)] sm:max-w-[440px]">
              {/* Respeita a proporção original para não cortar cabeça, mãos nem pés no celular. */}
              <div className="w-full bg-[#0a1e24]">
                <Image
                  src="/images/estatuas-vivas/estatua-viva-hermes-prata.webp"
                  alt="Performance de estátua viva prateada Hermes para eventos corporativos e feiras"
                  width={768}
                  height={1152}
                  priority
                  sizes="(max-width: 639px) min(100vw - 32px, 360px), 440px"
                  className="block h-auto w-full object-contain"
                />
              </div>
              <figcaption className="border-t border-champagne-gold/20 bg-[#071318] px-4 py-5 text-center">
                <span className="text-xs font-mono uppercase tracking-[0.2em] leading-relaxed text-[#ffe6a3]">
                  Prata Industrial · Destaque Corporativo
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SEÇÃO 2: PROPOSTA DE VALOR */}
        <section className="site-container py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Diferenciais que geram resultado</p>
            <h2 className="font-serif text-3xl sm:text-5xl">
              Mais do que entretenimento. Uma experiência que marca.
            </h2>
            <p className="mt-4 text-stone-warm text-sm sm:text-base">
              Ajudamos departamentos de marketing, agências e RH a criarem momentos que fortalecem a marca e permanecem na memória de quem participa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="neon-gold-card rounded-2xl border border-champagne-gold/25 bg-charcoal/50 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-6 border border-champagne-gold/30">
                  <Users size={24} />
                </div>
                <h3 className="font-serif text-2xl text-alabaster mb-3 font-normal">
                  Recepção que impressiona
                </h3>
                <p className="text-stone-warm text-sm leading-relaxed">
                  Quebre a formalidade fria com o acolhimento imponente de estátuas vivas esculturais logo na chegada, garantindo o efeito “uau” instantâneo.
                </p>
              </div>
            </div>

            <div className="neon-gold-card rounded-2xl border border-champagne-gold/25 bg-charcoal/50 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-6 border border-champagne-gold/30">
                  <Target size={24} />
                </div>
                <h3 className="font-serif text-2xl text-alabaster mb-3 font-normal">
                  Interação e retenção de público
                </h3>
                <p className="text-stone-warm text-sm leading-relaxed">
                  Em feiras e estandes, nossos artistas atraem o fluxo de visitantes dos corredores, gerando oportunidades espontâneas de abordagem para seus promotores.
                </p>
              </div>
            </div>

            <div className="neon-gold-card rounded-2xl border border-champagne-gold/25 bg-charcoal/50 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-6 border border-champagne-gold/30">
                  <Layers size={24} />
                </div>
                <h3 className="font-serif text-2xl text-alabaster mb-3 font-normal">
                  Adaptação ao conceito do evento
                </h3>
                <p className="text-stone-warm text-sm leading-relaxed">
                  Do futurismo metálico para feiras de tecnologia ao requinte dourado para noites de premiação, adaptamos figurinos e gestuais ao briefing da sua empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: SOLUÇÕES CORPORATIVAS */}
        <section id="solucoes" className="border-y border-champagne-gold/20 bg-charcoal/40 py-16 sm:py-24">
          <div className="site-container">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
              <div>
                <p className="eyebrow">Soluções sob medida</p>
                <h2 className="font-serif text-3xl sm:text-5xl mt-2">
                  Atrações para cada formato corporativo
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-warm max-w-sm">
                Conheça onde nossas apresentações mais se destacam no calendário corporativo.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((sol) => (
                <article
                  key={sol.title}
                  className="neon-gold-card group rounded-2xl overflow-hidden border border-champagne-gold/25 bg-[#071318]/80 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/5] sm:aspect-[5/4] w-full overflow-hidden bg-[#071318]">
                    <Image
                      src={sol.img}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-alabaster group-hover:text-champagne-gold transition-colors mb-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-warm leading-relaxed">
                        {sol.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Link
                        href={sol.href}
                        className="text-xs font-mono uppercase tracking-wider text-champagne-gold flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <span>{sol.ctaText}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: COMO FUNCIONA A CONTRATAÇÃO */}
        <section className="site-container py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Processo transparente</p>
            <h2 className="font-serif text-3xl sm:text-5xl">
              Como funciona a contratação
            </h2>
            <p className="mt-4 text-stone-warm text-sm sm:text-base">
              Fluxo ágil e seguro desenvolvido para atender à demanda de agências e empresas com rigor técnico e pontualidade.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Informe os Detalhes',
                desc: 'Envie data, cidade, público previsto e formato do evento pelo nosso formulário expresso ou WhatsApp.',
              },
              {
                step: '02',
                title: 'Curadoria de Atrações',
                desc: 'Apresentamos opções de personagens do acervo alinhadas ao perfil do seu público e conceito do espaço.',
              },
              {
                step: '03',
                title: 'Proposta Comercial Direta',
                desc: 'Você recebe um orçamento completo e transparente com logística, prazos e condições detalhadas.',
              },
              {
                step: '04',
                title: 'Execução e Performance',
                desc: 'Chegada antecipada da equipe artística para camarim, maquiagem e início pontual da apresentação.',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="rounded-2xl border border-champagne-gold/25 bg-charcoal/40 p-6 relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-3xl font-bold text-champagne-gold/60 block mb-3">
                    {st.step}
                  </span>
                  <h3 className="font-serif text-xl text-alabaster mb-2 font-normal">
                    {st.title}
                  </h3>
                  <p className="text-xs text-stone-warm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 5: PROVA SOCIAL & CREDIBILIDADE */}
        <section className="border-y border-champagne-gold/20 bg-[#071318] py-16">
          <div className="site-container">
            <div className="rounded-3xl border border-champagne-gold/30 bg-charcoal/40 p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-1.5 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-alabaster font-normal mb-4">
                Tradição e excelência artística comprovada desde 2005.
              </h3>
              <p className="text-stone-warm text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Dirigida por Rodolfo Valentino, a Estátua Viva Produções já atendeu centenas de empresas, casamentos solenes e feiras de negócios em todo o Brasil, combinando rigor técnico, pontualidade e acabamento cênico de alto nível.
              </p>
              <a
                href="https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-champagne-gold hover:text-white transition-colors underline underline-offset-4"
              >
                <span>Consultar avaliações no Perfil da Empresa no Google</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: FAQ CORPORATIVO */}
        <section aria-labelledby="faq-corporativo" className="site-container py-16 sm:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="eyebrow">Dúvidas frequentes de empresas</p>
              <h2 id="faq-corporativo" className="font-serif text-3xl sm:text-5xl">
                Perguntas Frequentes
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

        {/* SEÇÃO 7: CONVERSÃO FINAL (FORMULÁRIO & WHATSAPP) */}
        <section id="orcamento" className="border-t border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow">Pronto para transformar seu evento?</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-alabaster">
                Vamos criar uma experiência especial para seu próximo evento?
              </h2>
              <p className="mt-4 text-stone-warm text-sm sm:text-base">
                Solicite uma proposta personalizada preenchendo o formulário abaixo ou fale diretamente com a direção via WhatsApp.
              </p>
            </div>

            {/* Formulário de Captação B2B */}
            <LeadCaptureForm
              pageSource="eventos_corporativos"
              defaultEventType="Feira de Negócios / Congresso"
              title="Solicitar Proposta para Evento Corporativo"
              subtitle="Envie os dados da sua empresa para receber a cotação expressa com as opções de personagens disponíveis."
            />

            {/* Alternativa Direta via WhatsApp */}
            <div className="mt-12 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-stone-warm mb-4">
                Ou fale com a produção agora mesmo:
              </p>
              <WhatsAppCTA
                message="Olá! Vim pela página de Eventos Corporativos da Estátua Viva Produções e gostaria de solicitar um orçamento para nossa empresa."
                label="eventos_corporativos_final"
                source="eventos_corporativos"
                buttonText="Falar com a Produção no WhatsApp"
                size="lg"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <CampaignStickyCTA
        message="Olá! Gostaria de consultar disponibilidade de estátuas vivas e personagens para um evento corporativo."
        label="sticky_eventos_corporativos"
        source="eventos_corporativos_mobile"
        headline="Orçamento Corporativo via WhatsApp"
      />
    </main>
  );
}
