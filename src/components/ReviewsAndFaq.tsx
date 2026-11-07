'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { FAQS, TESTIMONIALS } from '@/data/portfolioData';
import { Star, ChevronDown, ExternalLink } from 'lucide-react';

export default function ReviewsAndFaq() {
  return (
    <section id="faq" className="py-24 bg-obsidian border-b border-alabaster/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Split: Google Reviews + Proof */}
        <div className="mb-20">
          <div className="border border-alabaster/10 bg-charcoal p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Score Card */}
              <div className="lg:col-span-5 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-alabaster/10 pb-8 lg:pb-0 lg:pr-8">
                <div className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold mb-3">
                  PROVA SOCIAL VERIFICADA
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-6xl text-alabaster font-semibold leading-none">
                    5.0
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-champagne-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-champagne-gold" />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-stone-warm mt-1">
                      37 avaliações no Google Perfil de Empresa
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-stone-warm leading-relaxed my-4">
                  Reconhecimento espontâneo de noivos, produtoras culturais e agências de Live Marketing de todo o Brasil.
                </p>

                <a
                  href="https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-champagne-gold hover:text-champagne-hover hover:underline transition-colors mt-2"
                >
                  <span>Conferir no Google Perfil</span>
                  <ExternalLink strokeWidth={1.5} className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right Real Quotes */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TESTIMONIALS.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-obsidian border border-alabaster/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-champagne-gold mb-3">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-champagne-gold" />
                        ))}
                      </div>
                      <p className="font-serif text-sm italic text-alabaster/90 leading-relaxed mb-4">
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>

                    <div className="pt-3 border-t border-alabaster/10 flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-wider text-alabaster font-medium">
                        {item.author}
                      </span>
                      <span className="font-mono text-[10px] text-stone-warm">
                        {item.event}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold mb-2">
              DÚVIDAS FREQUENTES & CONTRATAÇÃO
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {FAQS.map((faq, idx) => (
              <Accordion.Item
                key={idx}
                value={`item-${idx}`}
                className="border border-alabaster/10 bg-charcoal/60 px-6 py-2 transition-colors data-[state=open]:border-champagne-gold/50 data-[state=open]:bg-charcoal"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 text-left font-serif text-lg sm:text-xl text-alabaster font-normal transition-all group">
                    <span className="group-hover:text-champagne-gold transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      strokeWidth={1.5}
                      className="w-4 h-4 text-champagne-gold transition-transform duration-300 group-data-[state=open]:rotate-180 ml-4 shrink-0"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-5 pt-1 text-sm font-sans text-stone-warm leading-relaxed data-[state=open]:animate-in data-[state=closed]:animate-out duration-300">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
