'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

interface EventType {
  num: string;
  title: string;
  subtitle: string;
  proposal: string;
  highlights: string[];
  cases: string;
  imageUrl: string;
  whatsappMessage: string;
}

const EVENT_TYPES: EventType[] = [
  {
    num: '01',
    title: 'Corporativo, Feiras & Live Marketing',
    subtitle: 'Atração magnética de tráfego e memorabilidade de marca',
    proposal: 'Geração massiva de fluxo em estandes, retenção qualificada de tomadores de decisão e lançamentos de produtos com figurinos 100% customizados sob as diretrizes de branding da sua empresa.',
    highlights: [
      'Geração imediata de registros fotográficos e compartilhamentos orgânicos nas redes',
      'Possibilidade de réplicas cenográficas do produto ou embalagem em formato humano',
      'Alinhamento com equipes de vendas para direcionar o público ao estande',
    ],
    cases: 'Cases de destaque: Caterpillar (70 Anos), Henkel/Loctite, Convenção Acelera DPA e Staedtler.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Olá! Gostaria de consultar propostas e orçamentos para um Evento Corporativo / Feira com a Estátua Viva Produções.',
  },
  {
    num: '02',
    title: 'Casamentos, 15 Anos & Gala',
    subtitle: 'Sofisticação clássica e encantamento na recepção de convidados',
    proposal: 'Acolhimento solene que define o tom de elegância do evento desde o primeiro segundo. Obras vivas em Ouro Imperial e Mármore Branco que parecem esculturas de palácios europeus.',
    highlights: [
      'Recepção calorosa e de refinamento estético com Deusa Grega, Anjos Barrocos e Deusa do Espelho',
      'Momento nobre para recepção do cortejo dos noivos e brinde de comemoração',
      'Pintura hipoalergênica e figurinos sem desprendimento de resíduos ou pigmentos',
    ],
    cases: 'Atendimentos frequentes nas mais nobres casas de eventos e buffets de São Paulo.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Olá! Gostaria de consultar propostas para Casamento / Recepção de Gala com a Estátua Viva Produções.',
  },
  {
    num: '03',
    title: 'Temáticos, Sazonais & Culturais',
    subtitle: 'Carisma magnético, humor refinado e apelo cinematográfico',
    proposal: 'Performances interativas que alternam imobilidade com quebras cômicas e poéticas. Catrinas Mexicanas premiadas, Capitão Jack Sparrow fidedigno ao cinema, Charles Chaplin e vultos da literatura.',
    highlights: [
      'Quebra de protocolo leve e descontraída com mímica fina e interação participativa',
      'Repertório sazonal: Festivais de Halloween, Día de los Muertos, Páscoa e Presépio Vivo',
      'Intervenções históricas com Santos Dumont, Drummond e Fernando Pessoa para museus e bienais',
    ],
    cases: 'Atuações consagradas na Feira Pixel Show, Museu do Ipiranga e intervenções na TV.',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Olá! Gostaria de consultar personagens para um Evento Temático / Cultural com a Estátua Viva Produções.',
  },
];

export default function EventCuratorship() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experiencias" className="py-24 bg-obsidian border-b border-alabaster/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold mb-2">
            CURADORIA POR NATUREZA DO EVENTO
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal max-w-3xl leading-tight">
            Cada ocasião exige uma atmosfera e uma técnica <span className="italic font-serif text-champagne-gold">singular</span>.
          </h2>
        </div>

        {/* 3 Interactive Editorial Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation selectors */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-alabaster/10 border-y lg:border-y-0 lg:border-l border-alabaster/10">
            {EVENT_TYPES.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.num}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-6 sm:p-8 transition-all duration-300 relative group ${
                    isSelected
                      ? 'bg-charcoal text-alabaster'
                      : 'hover:bg-charcoal/50 text-stone-warm'
                  }`}
                >
                  {/* Left accent bar on active */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-champagne-gold" />
                  )}

                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-champagne-gold">
                      {item.num} / CURADORIA
                    </span>
                    <span className="font-mono text-[10px] uppercase text-stone-warm">
                      {isSelected ? 'Em exibição' : 'Ver detalhes'}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl sm:text-3xl font-normal transition-colors ${
                    isSelected ? 'text-alabaster' : 'text-stone-warm group-hover:text-alabaster'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-stone-warm mt-2 line-clamp-2">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Detail Showcase Panel */}
          <div className="lg:col-span-7 bg-charcoal border border-alabaster/10 p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[520px]">
            {/* Background Image Watermark with Blur & Grayscale */}
            <div className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none opacity-20">
              <Image
                src={EVENT_TYPES[activeTab].imageUrl}
                alt={EVENT_TYPES[activeTab].title}
                fill
                className="object-cover object-center filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-champagne-gold" />
                <span className="font-mono text-xs uppercase tracking-widest text-champagne-gold">
                  {EVENT_TYPES[activeTab].num} — Diretrizes Cenográficas
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-alabaster font-normal mb-4">
                {EVENT_TYPES[activeTab].title}
              </h3>

              <p className="font-sans text-base text-stone-warm leading-relaxed mb-6 max-w-xl">
                {EVENT_TYPES[activeTab].proposal}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 mb-8 max-w-xl">
                {EVENT_TYPES[activeTab].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0 mt-1" />
                    <span className="text-sm font-sans text-alabaster/90">{h}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-obsidian/70 border border-alabaster/10 max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold block mb-1">
                  HISTÓRICO REAL
                </span>
                <p className="text-xs font-sans text-stone-warm">
                  {EVENT_TYPES[activeTab].cases}
                </p>
              </div>
            </div>

            {/* CTA for this specific modality */}
            <div className="pt-8 mt-8 border-t border-alabaster/10 relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-technical text-stone-warm">
                Atendimento direto com a direção artística
              </span>
              <a
                href={`https://wa.me/5511937765250?text=${encodeURIComponent(EVENT_TYPES[activeTab].whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all group shadow-md"
              >
                <span>Orçar esta modalidade</span>
                <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
