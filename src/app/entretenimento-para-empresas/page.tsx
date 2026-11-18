import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site-config';

const pageUrl = `${SITE_URL}/entretenimento-para-empresas`;
export const metadata: Metadata = {
  title: 'Entretenimento para Empresas em São Paulo | Estátua Viva Produções',
  description: 'Estátuas vivas, personagens e recepção artística para eventos corporativos, confraternizações e festas de fim de ano em São Paulo. Solicite proposta.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Entretenimento para Empresas em São Paulo | Estátua Viva Produções',
    description: 'Recepção artística, estátuas vivas e personagens para eventos empresariais e confraternizações.',
    url: pageUrl,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    type: 'website',
  },
};
const services = [
  { title: 'Estátuas vivas na recepção', description: 'Recepção de convidados com personagens esculturais e momentos para fotos em coquetéis, premiações e confraternizações.', image: '/images/cases/recepcao-gala-dionisio-cafu.webp' },
  { title: 'Interação durante a confraternização', description: 'Performances e personagens que surpreendem os participantes e complementam a programação do evento.', image: '/images/confraternizacoes/interacao-publico-trio-marmore.webp' },
  { title: 'Atrações para ações de marca', description: 'Intervenções artísticas e caracterizações para feiras, lançamentos, convenções e ativações corporativas.', image: '/images/corporativo/performance-grego-vr-tecnologia.webp' },
];
const entertainmentGallery = [
  { title: 'Mímicos e interação artística', category: 'Interação com convidados', image: '/images/entretenimento/mimicos-interacao-eventos.webp', description: 'Personagens expressivos e mímica para recepção, interação e momentos descontraídos.' },
  { title: 'Personagem pirata', category: 'Personagens temáticos', image: '/images/entretenimento/personagem-pirata-eventos.webp', description: 'Caracterização temática para festas, experiências imersivas e encontros especiais.' },
  { title: 'Performance artística com fogo', category: 'Espetáculos de impacto', image: '/images/entretenimento/performance-artistica-fogo.webp', description: 'Apresentação visual de impacto, sujeita às condições técnicas e de segurança do evento.' },
  { title: 'Estátuas vivas e esculturas', category: 'Recepção sofisticada', image: '/images/entretenimento/estatuas-vivas-esculturas-eventos.webp', description: 'Figuras esculturais para recepções, eventos empresariais e fotografias memoráveis.' },
  { title: 'Performance de estátua prateada', category: 'Arte e movimento', image: '/images/entretenimento/estatua-viva-prateada-performance.webp', description: 'Arte corporal com acabamento metálico e expressão cênica para eventos especiais.' },
];
const questions = [
  { q: 'Que tipo de entretenimento contratar para confraternização de empresa?', a: 'Estátuas vivas, personagens temáticos e recepção artística são opções para recepcionar colaboradores, criar interações e proporcionar registros fotográficos durante o evento.' },
  { q: 'A Estátua Viva Produções atende eventos corporativos em São Paulo?', a: 'Sim. A Estátua Viva Produções tem base na região do Tatuapé, em São Paulo, e realiza apresentações em eventos na capital e em outras localidades do Brasil, conforme disponibilidade e orçamento.' },
  { q: 'É possível adaptar a performance ao tema da empresa?', a: 'A equipe avalia o conceito do evento, o público e o formato da programação para propor personagens e apresentações compatíveis com o briefing.' },
  { q: 'Como solicitar orçamento para entretenimento empresarial?', a: 'Envie a data, o local, o número aproximado de convidados e o tipo de evento pelo WhatsApp oficial. A equipe poderá elaborar uma proposta personalizada.' },
];
export default function EntretenimentoEmpresasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${pageUrl}#webpage`, name: metadata.title, url: pageUrl, inLanguage: 'pt-BR', about: { '@id': `${SITE_URL}/#empresa` } },
      { '@type': 'Service', '@id': `${pageUrl}#servico`, name: 'Entretenimento artístico para empresas e eventos corporativos', serviceType: 'Estátuas vivas, personagens temáticos e recepção artística para eventos empresariais', provider: { '@id': `${SITE_URL}/#empresa` }, areaServed: { '@type': 'AdministrativeArea', name: 'São Paulo, Brasil' }, url: pageUrl },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Entretenimento para empresas', item: pageUrl },
      ] },
    ],
  };
  return (
    <main className="site-surface min-h-screen text-alabaster">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <Navbar />
      <div id="conteudo" tabIndex={-1}>
        <section className="relative overflow-hidden border-b border-champagne-gold/20 bg-[#071318] pt-36 pb-20 sm:pt-48">
          <div className="site-container max-w-5xl">
            <p className="eyebrow">São Paulo • Eventos corporativos e confraternizações</p>
            <h1 className="font-serif text-4xl sm:text-6xl leading-tight mt-5">Entretenimento para empresas que transforma eventos em experiências memoráveis.</h1>
            <p className="mt-7 text-lg text-stone-warm leading-relaxed max-w-3xl">A Estátua Viva Produções oferece estátuas vivas, personagens temáticos e performances artísticas para confraternizações de fim de ano, premiações, feiras, convenções e recepções empresariais em São Paulo e outras regiões do Brasil.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a className="button-gold inline-flex" href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20entretenimento%20para%20evento%20corporativo.">Solicitar orçamento pelo WhatsApp ↗</a>
              <Link href="/confraternizacao-empresa" className="inline-flex items-center rounded-full border border-champagne-gold/40 px-6 py-3 text-champagne-gold">Ver atrações de fim de ano</Link>
            </div>
          </div>
        </section>
        <section className="site-container py-16 sm:py-24">
          <p className="eyebrow">Soluções artísticas</p>
          <h2 className="font-serif text-3xl sm:text-5xl mt-3 mb-8">Atrações para sua festa ou evento corporativo</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(s => <article key={s.title} className="overflow-hidden rounded-2xl border border-champagne-gold/20 bg-charcoal/50">
              <Image src={s.image} alt={s.title + ' — Estátua Viva Produções'} width={640} height={480} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6"><h3 className="font-serif text-2xl">{s.title}</h3><p className="mt-3 text-stone-warm leading-relaxed">{s.description}</p></div>
            </article>)}
          </div>
        </section>
        <section id="galeria-entretenimento" className="site-container py-16 sm:py-24" aria-labelledby="galeria-entretenimento-titulo">
          <p className="eyebrow">Portfólio real da Estátua Viva Produções</p>
          <h2 id="galeria-entretenimento-titulo" className="font-serif text-3xl sm:text-5xl mt-3">
            Entretenimento artístico para transformar seu evento
          </h2>
          <p className="mt-5 mb-10 max-w-3xl text-stone-warm leading-relaxed">
            Conheça algumas de nossas atrações, personagens e performances. A seleção e a disponibilidade são confirmadas conforme o perfil, a data e a estrutura de cada evento.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entertainmentGallery.map(item => (
              <article key={item.image} className="flex flex-col overflow-hidden rounded-2xl border border-champagne-gold/25 bg-charcoal/50">
                <div className="relative aspect-[4/5] w-full bg-[#071318]">
                  <Image src={item.image} alt={item.title + ' em apresentação da Estátua Viva Produções'} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-contain object-center" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-champagne-gold">{item.category}</p>
                  <h3 className="mt-2 font-serif text-2xl text-alabaster">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-warm">{item.description}</p>
                  <a href={`https://wa.me/5511937765250?text=${encodeURIComponent('Olá! Gostaria de um orçamento para ' + item.title + ' em um evento da minha empresa.')}`} className="mt-6 inline-flex self-start text-sm font-semibold text-champagne-gold hover:underline">Consultar disponibilidade ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-champagne-gold/20 bg-[#071318]">
          <div className="site-container py-16 sm:py-20">
            <h2 className="font-serif text-3xl sm:text-5xl">Para quais ocasiões?</h2>
            <p className="mt-5 text-stone-warm max-w-3xl leading-relaxed">Confraternizações de Natal e de fim de ano, eventos de reconhecimento de colaboradores, recepção de convidados, feiras de negócios, lançamentos e celebrações empresariais. O formato das atrações é definido de acordo com o espaço, a duração e o perfil dos participantes.</p>
            <div className="mt-7 flex flex-wrap gap-5 text-champagne-gold">
              <Link href="/confraternizacao-empresa">Confraternizações ↗</Link>
              <Link href="/eventos-corporativos">Eventos corporativos ↗</Link>
              <Link href="/natal">Especial de Natal ↗</Link>
              <Link href="/personagens-para-eventos">Personagens ↗</Link>
            </div>
          </div>
        </section>
        <section className="site-container py-16 sm:py-24">
          <h2 className="font-serif text-3xl sm:text-5xl mb-9">Perguntas frequentes sobre entretenimento corporativo</h2>
          <div className="max-w-4xl space-y-7">{questions.map(item => <section key={item.q} className="border-b border-champagne-gold/20 pb-6"><h3 className="font-serif text-2xl text-alabaster">{item.q}</h3><p className="mt-3 text-stone-warm leading-relaxed">{item.a}</p></section>)}</div>
          <div className="mt-12 rounded-2xl border border-champagne-gold/30 bg-charcoal/50 p-8">
            <h2 className="font-serif text-3xl">Conte sobre seu evento</h2>
            <p className="mt-3 text-stone-warm">Informe a data, cidade, local e tipo de celebração. Nossa equipe avalia a proposta de entretenimento para a ocasião.</p>
            <a href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Quero%20solicitar%20uma%20proposta%20para%20minha%20empresa." className="button-gold inline-flex mt-6">Pedir proposta personalizada ↗</a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
