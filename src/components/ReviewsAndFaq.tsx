'use client';
import * as Accordion from '@radix-ui/react-accordion';
import { FAQS } from '@/data/portfolioData';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
export default function ReviewsAndFaq() {
  return <section id="faq" className="section-space border-b border-alabaster/10"><div className="site-container grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20"><div className="section-heading"><p className="eyebrow">05 / Antes do grande dia</p><h2>Vamos tirar<br /><em>suas dúvidas?</em></h2><p>Conte com a produção para definir os detalhes da sua experiência.</p><a href="https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva" target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center text-sm text-champagne-gold mt-6 hover:underline">Consultar avaliações no Google <ArrowUpRight size={16} /></a></div><Accordion.Root type="single" collapsible>{FAQS.map((faq, index) => <Accordion.Item key={faq.question} value={`faq-${index}`} className="border-b border-alabaster/15"><Accordion.Header><Accordion.Trigger className="faq-trigger group"><span>{faq.question}</span><ChevronDown size={18} className="shrink-0 text-champagne-gold group-data-[state=open]:rotate-180 transition-transform" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="text-sm text-stone-warm leading-relaxed pb-7 pr-6">{faq.answer}</Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>;
}

