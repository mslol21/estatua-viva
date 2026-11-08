'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Send,
  Building2,
  Heart,
  Crown,
  Film,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface EventOption {
  id: string;
  label: string;
  desc: string;
  icon: typeof Building2;
}

const EVENT_TYPES: EventOption[] = [
  {
    id: 'corporativo',
    label: 'Corporativo & Feira B2B',
    desc: 'Atração de público para estande, retenção e lançamentos',
    icon: Building2,
  },
  {
    id: 'casamento',
    label: 'Casamento & Celebração de Gala',
    desc: 'Acolhimento nobre de convidados e entrada solene',
    icon: Heart,
  },
  {
    id: 'aniversario',
    label: 'Debutante, 15 Anos & Social',
    desc: 'Impacto visual imersivo e cenografia viva para fotos',
    icon: Crown,
  },
  {
    id: 'cultural',
    label: 'TV, Cinema & Intervenção Cultural',
    desc: 'Personagens históricos, bienais, museus e gravações',
    icon: Film,
  },
];

interface AestheticOption {
  id: string;
  name: string;
  paletteColor: string;
  tagline: string;
}

const AESTHETIC_STYLES: AestheticOption[] = [
  {
    id: 'ouro',
    name: 'Ouro Imperial / Mitologia Clássica',
    paletteColor: '#C5A059',
    tagline: 'Presença nobre e calorosa com pátina dourada reluzente',
  },
  {
    id: 'marmore',
    name: 'Mármore Branco Escultural',
    paletteColor: '#F4F1EA',
    tagline: 'Pureza renascentista de pedra de Carrara e anjos barrocos',
  },
  {
    id: 'prata',
    name: 'Prata Industrial & Futurista',
    paletteColor: '#94A3B8',
    tagline: 'Cromagem de alto reflexo para feiras e congressos de tecnologia',
  },
  {
    id: 'tematico',
    name: 'Temático, Cinema & Cosplay',
    paletteColor: '#E11D48',
    tagline: 'Catrinas mexicanas, Jack Sparrow ou Charles Chaplin cômico',
  },
  {
    id: 'custom',
    name: 'Figurino Customizado com Marca / Mascote',
    paletteColor: '#0D9488',
    tagline: 'Desenvolvimento exclusivo sob medida para ativação B2B',
  },
];

export default function BriefingBuilder() {
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState<number>(1);
  const [selectedEventType, setSelectedEventType] = useState<EventOption>(EVENT_TYPES[0]);
  const [selectedAesthetic, setSelectedAesthetic] = useState<AestheticOption>(AESTHETIC_STYLES[0]);
  const [clientName, setClientName] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventCity, setEventCity] = useState<string>('');
  const [guestCount, setGuestCount] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [missingField, setMissingField] = useState<string | null>(null);
  const ticketRef = useRef<HTMLDivElement>(null);
  const ticketInitialized = useRef(false);
  useEffect(() => {
    if (!ticketInitialized.current) { ticketInitialized.current = true; return; }
    const ticket = ticketRef.current;
    if (!ticket || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    ticket.classList.remove('ticket-updated');
    const frame = requestAnimationFrame(() => ticket.classList.add('ticket-updated'));
    const timer = window.setTimeout(() => ticket.classList.remove('ticket-updated'), 500);
    return () => { cancelAnimationFrame(frame); clearTimeout(timer); ticket.classList.remove('ticket-updated'); };
  }, [selectedEventType, selectedAesthetic, clientName, eventDate, eventCity, guestCount, notes]);

  useEffect(() => {
    if (step === 3 && missingField) document.getElementById(missingField)?.focus();
  }, [step, missingField]);

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const missing = !clientName.trim() ? 'briefing-name' : !eventDate.trim() ? 'briefing-date' : !eventCity.trim() ? 'briefing-city' : null;
    if (missing) {
      setMissingField(missing);
      setStep(3);
      if (step === 3) document.getElementById(missing)?.focus();
      return;
    }
    setMissingField(null);

    const formattedMessage = `*SOLICITAÇÃO DE ORÇAMENTO — ESTÁTUA VIVA PRODUÇÕES*

🏛️ *DADOS DO EVENTO:*
• *Nome / Empresa:* ${clientName.trim() || 'Não informado'}
• *Natureza do Evento:* ${selectedEventType.label}
• *Estética / Categoria:* ${selectedAesthetic.name}
• *Data Prevista:* ${eventDate.trim() || 'A definir'}
• *Cidade / Local:* ${eventCity.trim()}
• *Porte Estimado:* ${guestCount || 'A definir'}
${notes.trim() ? `• *Observações Cênicas:* ${notes.trim()}\n` : ''}
Gostaria de verificar disponibilidade de agenda com a produção artística e obter uma proposta comercial personalizada.`;

    const encoded = encodeURIComponent(formattedMessage);
    const url = `https://wa.me/5511937765250?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="briefing" className="py-24 bg-charcoal border-b border-alabaster/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-champagne-gold/30 bg-obsidian rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold">
              03 / CONFIGURADOR DE PROPOSTA EXPRESSA
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal mb-4">
            Planeje a intervenção artística perfeita.
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-warm max-w-xl mx-auto">
            Em apenas 3 etapas rápidas, estruturamos os detalhes cenográficos para que nossa direção envie a proposta exata para o seu evento.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  step === s
                    ? 'text-champagne-gold font-bold'
                    : step > s
                    ? 'text-alabaster'
                    : 'text-stone-warm/50'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${
                    step === s
                      ? 'border-champagne-gold bg-champagne-gold text-obsidian'
                      : step > s
                      ? 'border-champagne-gold text-champagne-gold'
                      : 'border-alabaster/20 text-stone-warm/50'
                  }`}
                >
                  {step > s ? '✓' : `0${s}`}
                </span>
                <span className="hidden sm:inline">
                  {s === 1 ? 'Tipo' : s === 2 ? 'Estilo' : 'Dados & Resumo'}
                </span>
              </button>
            ))}
          </div>
          <div className="w-full bg-obsidian h-1 border border-alabaster/10 overflow-hidden">
            <div
              className="motion-progress h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `scaleX(${step / 3})`, transformOrigin: 'left' }}
            />
          </div>
        </div>

        {/* Main Split: Interactive Form Steps vs Live Ticket Receipt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form View (Steps) */}
          <div className="briefing-panel lg:col-span-7 bg-obsidian border border-alabaster/10 p-6 sm:p-8 shadow-2xl min-h-[460px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : 15 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-technical text-champagne-gold block mb-1">
                    ETAPA 01 / 03
                  </span>
                  <h3 className="font-serif text-2xl text-alabaster font-normal mb-4">
                    Qual a natureza da celebração?
                  </h3>

                  <div className="space-y-3 mb-6">
                    {EVENT_TYPES.map((ev) => {
                      const Icon = ev.icon;
                      const isSelected = selectedEventType.id === ev.id;
                      return (
                        <button
                          type="button"
                          key={ev.id}
                          onClick={() => setSelectedEventType(ev)}
                          className={`w-full p-4 border text-left transition-all flex items-start justify-between group ${
                            isSelected
                              ? 'border-champagne-gold bg-charcoal shadow-md shadow-champagne-gold/5'
                              : 'border-alabaster/10 bg-charcoal/30 hover:border-alabaster/30 hover:bg-charcoal/60'
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            <div
                              className={`p-2.5 rounded-sm shrink-0 transition-colors ${
                                isSelected
                                  ? 'bg-champagne-gold text-obsidian'
                                  : 'border border-alabaster/10 text-champagne-gold bg-obsidian'
                              }`}
                            >
                              <Icon strokeWidth={1.5} className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="font-mono text-xs uppercase tracking-wider text-alabaster font-semibold block">
                                {ev.label}
                              </span>
                              <span className="font-sans text-xs text-stone-warm mt-0.5 block">
                                {ev.desc}
                              </span>
                            </div>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-colors ${
                              isSelected
                                ? 'border-champagne-gold bg-champagne-gold text-obsidian'
                                : 'border-alabaster/20'
                            }`}
                          >
                            {isSelected && <span className="text-[10px] font-bold">✓</span>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : 15 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-technical text-champagne-gold block mb-1">
                    ETAPA 02 / 03
                  </span>
                  <h3 className="font-serif text-2xl text-alabaster font-normal mb-4">
                    Qual estética cênica mais encanta você?
                  </h3>

                  <div className="space-y-3 mb-6">
                    {AESTHETIC_STYLES.map((aes) => {
                      const isSelected = selectedAesthetic.id === aes.id;
                      return (
                        <button
                          type="button"
                          key={aes.id}
                          onClick={() => setSelectedAesthetic(aes)}
                          className={`w-full p-4 border text-left transition-all flex items-start justify-between group ${
                            isSelected
                              ? 'border-champagne-gold bg-charcoal shadow-md shadow-champagne-gold/5'
                              : 'border-alabaster/10 bg-charcoal/30 hover:border-alabaster/30 hover:bg-charcoal/60'
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            <div
                              className="w-4 h-4 rounded-full shrink-0 mt-1 border border-alabaster/20 shadow-sm"
                              style={{ backgroundColor: aes.paletteColor }}
                            />
                            <div>
                              <span className="font-mono text-xs uppercase tracking-wider text-alabaster font-semibold block">
                                {aes.name}
                              </span>
                              <span className="font-sans text-xs text-stone-warm mt-0.5 block">
                                {aes.tagline}
                              </span>
                            </div>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-colors ${
                              isSelected
                                ? 'border-champagne-gold bg-champagne-gold text-obsidian'
                                : 'border-alabaster/20'
                            }`}
                          >
                            {isSelected && <span className="text-[10px] font-bold">✓</span>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : 15 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-technical text-champagne-gold block mb-1">
                    ETAPA 03 / 03
                  </span>
                  <h3 className="font-serif text-2xl text-alabaster font-normal mb-4">
                    Detalhes finais para envio
                  </h3>

                  {missingField && <p role="alert" className="mb-4 text-sm text-alabaster">Preencha nome, data e cidade para continuar.</p>}
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="briefing-name" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-1.5">
                          Seu Nome ou Empresa *
                        </label>
                        <input
                          id="briefing-name"
                          autoFocus={missingField === 'briefing-name'}
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Ex: Camila Soares (Noiva)"
                          className="w-full bg-charcoal border border-alabaster/15 px-3.5 py-2.5 text-sm text-alabaster placeholder:text-stone-warm/50 focus:outline-none focus:border-champagne-gold transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label htmlFor="briefing-date" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-1.5">
                          Data ou Mês Estimado *
                        </label>
                        <input
                          id="briefing-date"
                          autoFocus={missingField === 'briefing-date'}
                          type="text"
                          required
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          placeholder="Ex: 22 de outubro ou mês previsto"
                          className="w-full bg-charcoal border border-alabaster/15 px-3.5 py-2.5 text-sm text-alabaster placeholder:text-stone-warm/50 focus:outline-none focus:border-champagne-gold transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="briefing-city" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-1.5">
                          Cidade / Espaço *
                        </label>
                        <input
                          id="briefing-city"
                          autoFocus={missingField === 'briefing-city'}
                          type="text"
                          required
                          value={eventCity}
                          onChange={(e) => setEventCity(e.target.value)}
                          placeholder="Ex: Tatuapé, São Paulo - SP"
                          className="w-full bg-charcoal border border-alabaster/15 px-3.5 py-2.5 text-sm text-alabaster placeholder:text-stone-warm/50 focus:outline-none focus:border-champagne-gold transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label htmlFor="briefing-guests" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-1.5">
                          Porte Estimado
                        </label>
                        <select
                          id="briefing-guests"
                          value={guestCount}
                          onChange={(e) => setGuestCount(e.target.value)}
                          className="w-full bg-charcoal border border-alabaster/15 px-3.5 py-2.5 text-sm text-alabaster focus:outline-none focus:border-champagne-gold transition-colors font-sans"
                        >
                          <option value="">Selecione ou deixe para depois</option>
                          <option value="Até 100 convidados">Até 100 convidados</option>
                          <option value="101 a 300 convidados">101 a 300 convidados</option>
                          <option value="301 a 800 convidados">301 a 800 convidados</option>
                          <option value="801 a 1.000 convidados">801 a 1.000 convidados</option>
                          <option value="+1.000 pessoas (Feira / Congresso)">+1.000 pessoas (Feira / Congresso)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="briefing-notes" className="block font-mono text-xs uppercase tracking-widest text-stone-warm mb-1.5">
                        Observações Especiais (Opcional)
                      </label>
                      <textarea
                        id="briefing-notes"
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ex: Gostaria de recepção no hall principal e fotos com padrinhos..."
                        className="w-full bg-charcoal border border-alabaster/15 px-3.5 py-2.5 text-sm text-alabaster placeholder:text-stone-warm/50 focus:outline-none focus:border-champagne-gold transition-colors font-sans resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step Navigation Actions */}
            <div className="pt-6 border-t border-alabaster/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-alabaster/15 hover:border-champagne-gold text-stone-warm hover:text-alabaster text-xs font-mono uppercase tracking-[0.12em] transition-colors"
                >
                  <ArrowLeft strokeWidth={1.5} className="w-3.5 h-3.5" />
                  <span>Voltar</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-colors"
                >
                  <span>Avançar Etapa</span>
                  <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all shadow-lg shadow-champagne-gold/20"
                >
                  <Send strokeWidth={1.5} className="w-3.5 h-3.5" />
                  <span>Enviar para Produção</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Ticket Preview (Live Receipt) */}
          <div ref={ticketRef} className="briefing-panel ticket-preview lg:col-span-5 bg-charcoal border border-alabaster/15 p-6 sm:p-8 relative">
            {/* Theatrical ticket badge */}
            <div className="flex items-center justify-between border-b border-alabaster/10 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-champagne-gold" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold">
                  TICKET CÊNICO PRELIMINAR
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase text-stone-warm">
                EST. 2005 • SP
              </span>
            </div>

            <div className="space-y-4 font-sans text-xs mb-6">
              <div className="p-3 bg-obsidian border border-alabaster/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-warm block mb-1">
                  Modalidade Selecionada
                </span>
                <span className="text-sm font-serif text-alabaster font-normal">
                  {selectedEventType.label}
                </span>
              </div>

              <div className="p-3 bg-obsidian border border-alabaster/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-warm block mb-1">
                  Estética Preferencial
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: selectedAesthetic.paletteColor }}
                  />
                  <span className="text-sm font-serif text-champagne-gold">
                    {selectedAesthetic.name}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-obsidian border border-alabaster/10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-stone-warm block mb-1">
                    Previsão de Data
                  </span>
                  <span className="text-alabaster font-mono text-[11px]">
                    {eventDate.trim() || 'A definir'}
                  </span>
                </div>
                <div className="p-3 bg-obsidian border border-alabaster/10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-stone-warm block mb-1">
                    Localidade
                  </span>
                  <span className="text-alabaster font-mono text-[11px] truncate block">
                    {eventCity.trim()}
                  </span>
                </div>
              </div>

              {clientName.trim() && (
                <div className="p-3 bg-obsidian border border-champagne-gold/30">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-champagne-gold block mb-1">
                    Responsável pelo Briefing
                  </span>
                  <span className="text-alabaster font-medium">
                    {clientName}
                  </span>
                </div>
              )}
            </div>

            <div className="p-3.5 bg-obsidian/60 border border-dashed border-alabaster/20 mb-6">
              <p className="font-mono text-[10px] text-stone-warm leading-relaxed uppercase">
                ✦ Ao enviar, você falará direto com o atelier cenográfico de Rodolfo Valentino. Sem intermediários ou respostas robotizadas.
              </p>
            </div>

            <button
              onClick={handleFinalSubmit}
              className="w-full py-3.5 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2 transition-colors shadow-xl"
            >
              <Send strokeWidth={1.5} className="w-4 h-4" />
              <span>Gerar e Enviar via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

