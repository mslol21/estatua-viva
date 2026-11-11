import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const base = 'https://estatuaviva.konnexy.com.br';
const services: Record<string, { title: string; description: string; heading: string; intro: string; benefits: string[]; questions: {q:string;a:string}[] }> = {
  'estatua-viva-para-eventos': {
    title: 'Estátua Viva para Eventos | Estátua Viva Produções',
    description: 'Contrate estátuas vivas e personagens caracterizados para recepções, festas, feiras e ações promocionais. Atendimento em todo o Brasil.',
    heading: 'Estátua viva para eventos',
    intro: 'Apresentações de estátuas vivas unem figurino, caracterização artística e performance para surpreender convidados. A produção adapta a experiência ao perfil de cada evento.',
    benefits: ['Recepção artística de convidados', 'Personagens temáticos e figurinos caracterizados', 'Interação e oportunidades para fotografias', 'Proposta adaptada ao local e ao formato do evento'],
    questions: [{q:'O que é uma estátua viva para eventos?',a:'É uma performance artística na qual um personagem caracterizado combina imobilidade, movimentos e interação com o público.'},{q:'A Estátua Viva Produções atende fora de São Paulo?',a:'Sim. A empresa informa atendimento para eventos em todo o Brasil, sujeito à disponibilidade e às condições da proposta.'}],
  },
  'estatua-viva-para-casamento': {
    title: 'Estátua Viva para Casamento | Recepção Artística',
    description: 'Estátuas vivas e personagens para recepção de casamentos, cerimônias e celebrações. Solicite uma proposta personalizada.',
    heading: 'Estátua viva para casamento',
    intro: 'Uma recepção artística com personagens vivos pode criar uma experiência marcante na chegada dos convidados, em momentos fotográficos e na celebração.',
    benefits: ['Recepção de convidados', 'Personagens em ouro, branco e outras estéticas', 'Interações e fotografias', 'Caracterização alinhada ao estilo da cerimônia'],
    questions: [{q:'É possível escolher o estilo do personagem?',a:'Sim. A proposta pode considerar a estética do casamento e as opções disponíveis no acervo.'},{q:'Como solicitar um orçamento para casamento?',a:'Informe a data, cidade, duração desejada e estilo da apresentação pelo formulário de orçamento.'}],
  },
  'estatua-viva-para-eventos-corporativos': {
    title: 'Estátua Viva para Eventos Corporativos e Feiras',
    description: 'Performances artísticas e personagens personalizados para feiras, congressos, recepções empresariais e ativações de marca.',
    heading: 'Entretenimento artístico para eventos corporativos',
    intro: 'Performances de estátuas vivas e personagens caracterizados para feiras, congressos, recepções, lançamentos e experiências de marca.',
    benefits: ['Atração visual em estandes e recepções', 'Personagens e figurinos temáticos', 'Ações promocionais e lançamentos', 'Experiências com interação do público'],
    questions: [{q:'A apresentação pode seguir o tema da marca?',a:'A produção pode avaliar caracterização e figurino personalizados conforme o briefing e a viabilidade do projeto.'},{q:'Vocês atendem feiras em outras cidades?',a:'Sim. O atendimento informado é nacional, sujeito a agenda e logística.'}],
  },
  'personagens-para-festas': {
    title: 'Personagens Temáticos para Festas e Eventos',
    description: 'Personagens vivos, figurinos e performances temáticas para festas, celebrações e eventos promocionais em todo o Brasil.',
    heading: 'Personagens temáticos para festas',
    intro: 'A Estátua Viva Produções desenvolve experiências com personagens caracterizados, figurinos e atuação para diferentes propostas de festas e eventos.',
    benefits: ['Personagens vivos e temáticos', 'Figurinos e maquiagem artística', 'Interação com convidados', 'Apresentações sob medida mediante consulta'],
    questions: [{q:'Os personagens podem ser personalizados?',a:'A personalização é avaliada de acordo com o conceito, prazo e disponibilidade da produção.'},{q:'Os figurinos são vendidos separadamente?',a:'Esta página apresenta figurinos como parte das performances. Consulte a produção para outras necessidades.'}],
  },
};

export function generateStaticParams() { return Object.keys(services).map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = services[params.slug];
  if (!item) return {};
  return { title: item.title, description: item.description, alternates: { canonical: `${base}/${params.slug}` }, openGraph: { title: item.title, description: item.description, url: `${base}/${params.slug}`, type: 'website' } };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const item = services[params.slug];
  if (!item) notFound();
  const url = `${base}/${params.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: item.title, description: item.description, inLanguage: 'pt-BR' },
    { '@type': 'Service', '@id': `${url}#servico`, name: item.heading, description: item.intro, serviceType: 'Entretenimento artístico para eventos', provider: { '@id': `${base}/#empresa` }, areaServed: { '@type': 'Country', name: 'Brasil' }, url },
    { '@type': 'FAQPage', mainEntity: item.questions.map(({q,a}) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ] };
  return <main className="min-h-screen bg-obsidian text-alabaster">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="site-container py-10"><Link href="/" className="text-champagne-gold underline underline-offset-4">← Voltar à página inicial</Link></div>
    <section className="site-container py-14 sm:py-24">
      <p className="eyebrow">Estátua Viva Produções · Atendimento em todo o Brasil</p>
      <h1 className="max-w-4xl font-serif text-4xl sm:text-6xl mt-5 mb-7">{item.heading}</h1>
      <p className="max-w-3xl text-lg leading-8 text-stone-warm">{item.intro}</p>
      <a href={`https://wa.me/5511937765250?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para ' + item.heading + '.')}`} className="mt-9 inline-flex rounded-full bg-champagne-gold px-7 py-4 font-semibold text-obsidian">Solicitar orçamento pelo WhatsApp</a>
    </section>
    <section className="border-y border-champagne-gold/20 bg-charcoal/50 py-16"><div className="site-container">
      <h2 className="font-serif text-3xl sm:text-4xl mb-8">Como funciona a experiência</h2>
      <ul className="grid gap-4 sm:grid-cols-2">{item.benefits.map((benefit) => <li key={benefit} className="neon-gold-card rounded-xl border border-champagne-gold/20 p-6">{benefit}</li>)}</ul>
    </div></section>
    <section className="site-container py-16"><h2 className="font-serif text-3xl sm:text-4xl mb-8">Perguntas frequentes</h2><div className="max-w-3xl space-y-7">{item.questions.map(({q,a}) => <div key={q}><h3 className="text-xl text-champagne-gold mb-2">{q}</h3><p className="text-stone-warm leading-7">{a}</p></div>)}</div>
      <div className="mt-12 flex flex-wrap gap-6"><Link href="/#acervo" className="text-champagne-gold underline underline-offset-4">Conhecer os personagens</Link><Link href="/#briefing" className="text-champagne-gold underline underline-offset-4">Planejar minha apresentação</Link></div>
    </section>
  </main>;
}
