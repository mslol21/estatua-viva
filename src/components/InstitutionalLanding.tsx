import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/marketing/WhatsAppCTA';
import { SITE_URL } from '@/lib/site-config';

export type InstitutionalPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  photo: string;
  photoAlt: string;
  photoCaption: string;
  audience: string;
  cardTitle: string;
  cardIntro: string;
  services: { title: string; description: string }[];
  approachTitle: string;
  approach: string[];
  faq: { q: string; a: string }[];
  related: { title: string; href: string }[];
  leadMessage: string;
};

export default function InstitutionalLanding({ data }: { data: InstitutionalPageData }) {
  const url = `${SITE_URL}/${data.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${url}#webpage`, name: `${data.title} ${data.emphasis}`, url, inLanguage: 'pt-BR', about: { '@id': `${SITE_URL}/#empresa` } },
      { '@type': 'Service', '@id': `${url}#service`, name: `${data.title} ${data.emphasis}`, description: data.intro, url, provider: { '@id': `${SITE_URL}/#empresa` }, areaServed: { '@type': 'AdministrativeArea', name: 'São Paulo, Brasil' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: data.cardTitle, item: url },
      ] },
    ],
  };
  return (
    <main className="site-surface min-h-screen text-alabaster selection:bg-champagne-gold selection:text-obsidian">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <Navbar />
      <div id="conteudo" tabIndex={-1}>
        <section className="relative overflow-hidden border-b border-champagne-gold/20 bg-[#071318] pt-36 pb-16 sm:pt-48 sm:pb-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(223,189,124,0.13),transparent_65%)]"/>
          <div className="site-container relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{data.eyebrow}</p>
              <h1 className="mt-5 font-serif text-4xl leading-[1.08] sm:text-6xl">{data.title} <span className="italic text-champagne-gold">{data.emphasis}</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-warm sm:text-lg">{data.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppCTA source={data.slug} label="proposta_institucional" message={data.leadMessage} buttonText="Solicitar proposta artística" size="lg"/>
                <a href="#solucoes" className="inline-flex items-center gap-2 rounded-full border border-champagne-gold/40 px-6 py-3 text-sm font-semibold text-champagne-gold hover:bg-champagne-gold/10">Conhecer aplicações <ArrowRight size={16}/></a>
              </div>
              <p className="mt-7 text-xs text-stone-warm">Projetos personalizados mediante avaliação do briefing, local, data e disponibilidade do elenco.</p>
            </div>
            <figure className="overflow-hidden rounded-[2rem] border border-champagne-gold/30 bg-[#0a1e24] shadow-[0_0_40px_rgba(223,189,124,0.18)]">
              <div className="relative aspect-[4/5]">
                <Image src={data.photo} alt={data.photoAlt} fill priority sizes="(max-width:1023px) 92vw, 44vw" className="object-contain object-center"/>
              </div>
              <figcaption className="border-t border-champagne-gold/20 p-4 text-center text-xs text-stone-warm">{data.photoCaption}</figcaption>
            </figure>
          </div>
        </section>
        <section id="solucoes" className="site-container py-16 sm:py-24">
          <p className="eyebrow">Possibilidades de atuação</p>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl sm:text-5xl">{data.cardTitle}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-warm">{data.cardIntro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.services.map(s => (
              <article key={s.title} className="neon-gold-card rounded-2xl border border-champagne-gold/25 bg-charcoal/50 p-7">
                <CheckCircle2 className="mb-5 text-champagne-gold" size={24}/>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-warm">{s.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
          <div className="site-container grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Da ideia à apresentação</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl">{data.approachTitle}</h2>
              <p className="mt-5 text-stone-warm leading-relaxed">A proposta é desenvolvida conforme o público, a finalidade e as condições do evento. Figurinos e personagens dependem da viabilidade artística e operacional.</p>
              <div className="mt-7 flex items-center gap-3 text-xs text-champagne-gold"><FileText size={20}/> Portfólio, informações técnicas e proposta sob solicitação</div>
            </div>
            <ol className="space-y-5">
              {data.approach.map((step, index) => (
                <li key={step} className="flex items-start gap-4 rounded-xl border border-champagne-gold/20 bg-charcoal/40 p-5">
                  <span className="font-mono text-xl text-champagne-gold">{String(index+1).padStart(2,'0')}</span>
                  <p className="text-sm leading-relaxed text-stone-warm">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="site-container py-16 sm:py-24">
          <p className="eyebrow">Confira outras soluções</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Experiências para diferentes públicos</h2>
          <div className="mt-6 flex flex-wrap gap-3">{data.related.map(item => (
            <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded-full border border-champagne-gold/30 px-5 py-3 text-sm text-champagne-gold hover:bg-champagne-gold/10">{item.title} <ArrowRight size={15}/></Link>
          ))}</div>
        </section>
        <section className="border-y border-champagne-gold/20 bg-charcoal/40 py-16 sm:py-24">
          <div className="site-container max-w-4xl">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Informações para planejar seu evento</h2>
            <div className="mt-9 space-y-6">{data.faq.map(item=>(
              <div key={item.q} className="border-b border-champagne-gold/20 pb-6">
                <h3 className="font-serif text-2xl">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-warm">{item.a}</p>
              </div>
            ))}</div>
          </div>
        </section>
        <section className="site-container py-16 sm:py-24">
          <div className="rounded-2xl border border-champagne-gold/35 bg-[#071318] p-8 sm:p-12">
            <div className="flex items-center gap-3 text-champagne-gold"><MessageCircle size={23}/><p className="eyebrow">Fale com a produção</p></div>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl">Vamos desenvolver uma proposta para o seu projeto?</h2>
            <p className="mt-4 mb-7 max-w-3xl text-stone-warm leading-relaxed">Informe a instituição ou empresa, cidade, período previsto, público e objetivo da ação. A equipe avalia a apresentação artística mais adequada.</p>
            <WhatsAppCTA source={data.slug+"_final"} label="solicitar_proposta" message={data.leadMessage} buttonText="Conversar com a produção" size="lg"/>
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  );
}
