'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

const EVENT_NATURES = [
  'Corporativo / Feira de Negócios',
  'Casamento / Celebração Social',
  'Festa Temática / Debutante',
  'TV / Cinema / Ativação Cultural',
];

const AESTHETICS = [
  'Ouro Imperial / Clássico',
  'Branco Escultural / Mármore',
  'Prata Tecnológico / Industrial',
  'Personagem Temático / Mímico',
  'Figurino Personalizado com Minha Marca',
];

export default function BriefingBuilder() {
  const [nature, setNature] = useState(EVENT_NATURES[0]);
  const [aesthetic, setAesthetic] = useState(AESTHETICS[0]);
  const [name, setName] = useState('');
  const [dateAndCity, setDateAndCity] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const handleSendBriefing = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*BRIEFING DE PROPOSTA — SITE ESTÁTUA VIVA PRODUÇÕES*

• *Nome / Empresa:* ${name.trim() || 'Não informado'}
• *Natureza do Evento:* ${nature}
• *Estética Desejada:* ${aesthetic}
• *Data Prevista & Cidade:* ${dateAndCity.trim() || 'A definir'}
${additionalNotes.trim() ? `• *Observações / Detalhes:* ${additionalNotes.trim()}\n` : ''}
Gostaria de verificar disponibilidade de agenda e receber uma estimativa de investimento para nossa celebração.`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/5511937765250?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="briefing" className="py-24 bg-charcoal border-b border-alabaster/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-champagne-gold/30 bg-obsidian rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold">
              ORÇAMENTO EXPRESSO VIA WHATSAPP
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal mb-4">
            Monte a proposta para o seu evento em segundos.
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-warm max-w-xl mx-auto">
            Selecione as premissas artísticas abaixo. Montamos o briefing estruturado e direcionamos você direto ao diretor de elenco.
          </p>
        </div>

        {/* Builder Form Card */}
        <form
          onSubmit={handleSendBriefing}
          className="bg-obsidian border border-alabaster/10 p-6 sm:p-10 shadow-2xl relative"
        >
          {/* Step 1: Event Nature */}
          <div className="mb-8">
            <label className="block font-mono text-xs uppercase tracking-widest text-champagne-gold mb-3">
              01. Qual a natureza do evento?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EVENT_NATURES.map((item) => {
                const isSelected = nature === item;
                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setNature(item)}
                    className={`p-3.5 text-left text-xs font-mono uppercase tracking-[0.08em] border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'border-champagne-gold bg-charcoal text-champagne-gold'
                        : 'border-alabaster/10 bg-charcoal/40 text-stone-warm hover:border-alabaster/30 hover:text-alabaster'
                    }`}
                  >
                    <span>{item}</span>
                    {isSelected && <CheckCircle2 strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Desired Aesthetics */}
          <div className="mb-8">
            <label className="block font-mono text-xs uppercase tracking-widest text-champagne-gold mb-3">
              02. Qual estética cênica você busca?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {AESTHETICS.map((item) => {
                const isSelected = aesthetic === item;
                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setAesthetic(item)}
                    className={`p-3.5 text-left text-xs font-mono uppercase tracking-[0.08em] border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'border-champagne-gold bg-charcoal text-champagne-gold'
                        : 'border-alabaster/10 bg-charcoal/40 text-stone-warm hover:border-alabaster/30 hover:text-alabaster'
                    }`}
                  >
                    <span>{item}</span>
                    {isSelected && <CheckCircle2 strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Quick Info Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="client-name" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-2">
                03. Seu Nome ou Empresa
              </label>
              <input
                id="client-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Beatriz Lima (Agência Vértice)"
                className="w-full bg-charcoal border border-alabaster/15 px-4 py-3 text-sm text-alabaster placeholder:text-stone-warm/50 focus:outline-none focus:border-champagne-gold transition-colors font-sans"
              />
            </div>

            <div>
              <label htmlFor="client-date-city" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-2">
                04. Data ou Mês Previsto + Cidade
              </label>
              <input
                id="client-date-city"
                type="text"
                required
                value={dateAndCity}
                onChange={(e) => setDateAndCity(e.target.value)}
                placeholder="Ex: 14 de Novembro • São Paulo - SP"
                className="w-full bg-charcoal border border-alabaster/15 px-4 py-3 text-sm text-alabaster placeholder:text-stone-warm/50 focus:outline-none focus:border-champagne-gold transition-colors font-sans"
              />
            </div>
          </div>

          {/* Optional notes */}
          <div className="mb-8">
            <label htmlFor="client-notes" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-2">
              Detalhes Adicionais (opcional)
            </label>
            <textarea
              id="client-notes"
              rows={2}
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Número estimado de convidados, horários ou referências específicas..."
              className="w-full bg-charcoal border border-alabaster/15 px-4 py-3 text-sm text-alabaster placeholder:text-stone-warm/50 focus:outline-none focus:border-champagne-gold transition-colors font-sans resize-none"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-4 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-champagne-gold/15"
          >
            <Send strokeWidth={1.5} className="w-4 h-4" />
            <span>Enviar Briefing Estruturado via WhatsApp</span>
          </button>

          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-stone-warm mt-4">
            Resposta ágil em horário comercial: Seg a Sáb das 09h às 22h
          </p>
        </form>
      </div>
    </section>
  );
}
