import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { GEO_FAQ } from '@/data/geoFaq';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = { title:'Perguntas frequentes | Estátua Viva Produções',description:'Dúvidas sobre contratação de estátuas vivas, personagens, apresentações, personalização, preços e atendimento em todo o Brasil.',alternates:{canonical:`${SITE_URL}/perguntas-frequentes`} };
export default function PerguntasFrequentes(){
const schema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:GEO_FAQ.map(({question,answer})=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))};
return <main id="conteudo" className="site-surface min-h-screen text-alabaster">
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
<Navbar/><section className="site-container py-20 sm:py-28"><p className="eyebrow">Informações para seu evento</p><h1 className="mt-4 font-serif text-4xl sm:text-6xl">Perguntas frequentes</h1><p className="mt-5 max-w-3xl text-stone-warm leading-7">A Estátua Viva Produções tem base em São Paulo e atende eventos em todo o Brasil. Conheça os formatos de apresentação e saiba como solicitar um orçamento personalizado.</p><div className="mt-12 grid gap-5">{GEO_FAQ.map(({question,answer})=><article key={question} className="neon-gold-card rounded-2xl border border-champagne-gold/20 bg-charcoal/50 p-6 sm:p-8"><h2 className="font-serif text-2xl sm:text-3xl text-champagne-gold">{question}</h2><p className="mt-3 max-w-4xl text-stone-warm leading-7">{answer}</p>{question.includes('Natal')&&<Link className="mt-3 inline-block text-champagne-gold underline" href="/natal">Conhecer o Especial de Natal</Link>}</article>)}</div><div className="mt-12"><a className="button-gold inline-flex" href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20meu%20evento." target="_blank" rel="noopener noreferrer">Solicitar orçamento pelo WhatsApp ↗</a></div></section><Footer/></main>
}