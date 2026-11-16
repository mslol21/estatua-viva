'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Building2, User, Phone, Mail, Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import { captureAndStoreUtms, trackFormStart, trackFormError, trackFormSubmitSuccess } from '@/lib/tracking';

export interface LeadCaptureFormProps {
  pageSource: string;
  defaultEventType?: string;
  title?: string;
  subtitle?: string;
}

export default function LeadCaptureForm({
  pageSource,
  defaultEventType = 'Confraternização / Fim de Ano',
  title = 'Solicite uma Proposta Personalizada',
  subtitle = 'Preencha os detalhes e nossa direção artística entrará em contato com a proposta ideal para o seu evento.',
}: LeadCaptureFormProps) {
  const router = useRouter();
  const formStartedRef = useRef(false);

  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    tipoEvento: defaultEventType,
    dataPrevista: '',
    cidade: '',
    convidados: '',
    atracaoDesejada: 'Estátuas Vivas (Ouro, Mármore ou Prata)',
  });

  const [status, setStatus] = useState<'idle' | 'validating' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Aplica máscara de telefone brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  const formatPhone = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 11);
    if (raw.length <= 2) return raw;
    if (raw.length <= 6) return `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    if (raw.length <= 10) return `(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`;
    return `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
  };

  const handleFieldChange = (field: string, value: string) => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStart(pageSource);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('validating');

    // Validação dos campos obrigatórios
    if (!formData.nome.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, informe seu nome completo.');
      trackFormError(pageSource, 'missing_nome');
      return;
    }

    if (!formData.empresa.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, informe o nome da sua empresa.');
      trackFormError(pageSource, 'missing_empresa');
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setStatus('error');
      setErrorMessage('Por favor, informe um WhatsApp válido com DDD (mínimo 10 dígitos).');
      trackFormError(pageSource, 'invalid_whatsapp');
      return;
    }

    if (!formData.cidade.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, informe a cidade e UF do evento.');
      trackFormError(pageSource, 'missing_cidade');
      return;
    }

    setStatus('submitting');

    try {
      const utms = captureAndStoreUtms();

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          origemPagina: pageSource,
          utms,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Não foi possível enviar sua solicitação.');
      }

      // Registro do evento de sucesso e geração de lead oficial
      trackFormSubmitSuccess(pageSource, {
        eventType: formData.tipoEvento,
        city: formData.cidade,
      });

      // Salva no sessionStorage para consumo na página /obrigado
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(
          'ev_confirmed_lead',
          JSON.stringify({
            leadId: result.leadId,
            nome: formData.nome,
            empresa: formData.empresa,
            whatsapp: formData.whatsapp,
            cidade: formData.cidade,
            dataPrevista: formData.dataPrevista,
            tipoEvento: formData.tipoEvento,
            atracaoDesejada: formData.atracaoDesejada,
            origemPagina: pageSource,
            timestamp: result.timestamp,
          })
        );
      }

      setStatus('success');

      // Redirecionamento limpo para a página /obrigado com o leadId
      router.push(`/obrigado?leadId=${encodeURIComponent(result.leadId)}&origem=${encodeURIComponent(pageSource)}`);
    } catch (err) {
      console.error('[FORM_SUBMIT_ERROR]', err);
      setStatus('error');
      const msg = err instanceof Error ? err.message : 'Erro ao enviar formulário. Tente novamente ou use o WhatsApp.';
      setErrorMessage(msg);
      trackFormError(pageSource, msg);
    }
  };

  return (
    <div id="orcamento-form" className="w-full max-w-2xl mx-auto rounded-3xl border border-champagne-gold/30 bg-[#071318]/95 p-6 sm:p-10 shadow-[0_0_40px_rgba(223,189,124,0.15)] relative overflow-hidden backdrop-blur-md">
      <div className="absolute top-0 right-0 w-64 h-64 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-champagne-gold/30 bg-black/60 text-champagne-gold text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles size={13} /> Orçamento Expresso B2B
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-alabaster font-normal">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-stone-warm leading-relaxed">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-5" noValidate>
        {/* Linha 1: Nome e Empresa */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-nome" className="block text-xs font-mono uppercase tracking-wider text-[#ffe6a3] mb-1.5">
              Seu Nome *
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
              <input
                id="lead-nome"
                type="text"
                required
                placeholder="Ex: Marina Silva"
                value={formData.nome}
                onChange={(e) => handleFieldChange('nome', e.target.value)}
                className="w-full rounded-xl bg-charcoal/60 border border-champagne-gold/30 pl-10 pr-4 py-3 text-sm text-alabaster placeholder-stone-warm/50 focus:border-champagne-gold focus:outline-none focus:ring-1 focus:ring-champagne-gold transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lead-empresa" className="block text-xs font-mono uppercase tracking-wider text-[#ffe6a3] mb-1.5">
              Empresa / Organização *
            </label>
            <div className="relative">
              <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
              <input
                id="lead-empresa"
                type="text"
                required
                placeholder="Ex: Banco Itaú / Agência X"
                value={formData.empresa}
                onChange={(e) => handleFieldChange('empresa', e.target.value)}
                className="w-full rounded-xl bg-charcoal/60 border border-champagne-gold/30 pl-10 pr-4 py-3 text-sm text-alabaster placeholder-stone-warm/50 focus:border-champagne-gold focus:outline-none focus:ring-1 focus:ring-champagne-gold transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Linha 2: WhatsApp e E-mail */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-whatsapp" className="block text-xs font-mono uppercase tracking-wider text-[#ffe6a3] mb-1.5">
              WhatsApp para Contato *
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
              <input
                id="lead-whatsapp"
                type="tel"
                required
                placeholder="(11) 98765-4321"
                value={formData.whatsapp}
                onChange={(e) => handleFieldChange('whatsapp', formatPhone(e.target.value))}
                className="w-full rounded-xl bg-charcoal/60 border border-champagne-gold/30 pl-10 pr-4 py-3 text-sm text-alabaster placeholder-stone-warm/50 focus:border-champagne-gold focus:outline-none focus:ring-1 focus:ring-champagne-gold transition-colors font-mono"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lead-email" className="block text-xs font-mono uppercase tracking-wider text-stone-warm mb-1.5">
              E-mail Corporativo (Opcional)
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
              <input
                id="lead-email"
                type="email"
                placeholder="contato@empresa.com.br"
                value={formData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                className="w-full rounded-xl bg-charcoal/60 border border-champagne-gold/20 pl-10 pr-4 py-3 text-sm text-alabaster placeholder-stone-warm/50 focus:border-champagne-gold focus:outline-none focus:ring-1 focus:ring-champagne-gold transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Linha 3: Tipo de Evento e Data Prevista */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-tipo" className="block text-xs font-mono uppercase tracking-wider text-[#ffe6a3] mb-1.5">
              Tipo de Evento *
            </label>
            <select
              id="lead-tipo"
              value={formData.tipoEvento}
              onChange={(e) => handleFieldChange('tipoEvento', e.target.value)}
              className="w-full rounded-xl bg-charcoal/80 border border-champagne-gold/30 px-3.5 py-3 text-sm text-alabaster focus:border-champagne-gold focus:outline-none transition-colors"
            >
              <option value="Confraternização / Fim de Ano">Confraternização / Fim de Ano</option>
              <option value="Especial de Natal">Especial de Natal (Shopping / Corporativo)</option>
              <option value="Feira de Negócios / Congresso">Feira de Negócios / Congresso B2B</option>
              <option value="Convenção de Vendas / Premiação">Convenção de Vendas / Premiação</option>
              <option value="Lançamento de Produto / Marca">Lançamento de Produto / Marca</option>
              <option value="Casamento / Bodas de Luxo">Casamento / Bodas de Luxo</option>
              <option value="Outro Formato">Outro Formato</option>
            </select>
          </div>

          <div>
            <label htmlFor="lead-data" className="block text-xs font-mono uppercase tracking-wider text-stone-warm mb-1.5">
              Data Prevista (ou Mês)
            </label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
              <input
                id="lead-data"
                type="text"
                placeholder="Ex: 12/12/2026 ou Dezembro"
                value={formData.dataPrevista}
                onChange={(e) => handleFieldChange('dataPrevista', e.target.value)}
                className="w-full rounded-xl bg-charcoal/60 border border-champagne-gold/20 pl-10 pr-4 py-3 text-sm text-alabaster placeholder-stone-warm/50 focus:border-champagne-gold focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Linha 4: Cidade/UF e Quantidade de Convidados */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-cidade" className="block text-xs font-mono uppercase tracking-wider text-[#ffe6a3] mb-1.5">
              Cidade / Local do Evento *
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
              <input
                id="lead-cidade"
                type="text"
                required
                placeholder="Ex: São Paulo / SP, Campinas, etc."
                value={formData.cidade}
                onChange={(e) => handleFieldChange('cidade', e.target.value)}
                className="w-full rounded-xl bg-charcoal/60 border border-champagne-gold/30 pl-10 pr-4 py-3 text-sm text-alabaster placeholder-stone-warm/50 focus:border-champagne-gold focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lead-convidados" className="block text-xs font-mono uppercase tracking-wider text-stone-warm mb-1.5">
              Público Estimado
            </label>
            <div className="relative">
              <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
              <select
                id="lead-convidados"
                value={formData.convidados}
                onChange={(e) => handleFieldChange('convidados', e.target.value)}
                className="w-full rounded-xl bg-charcoal/80 border border-champagne-gold/20 pl-10 pr-4 py-3 text-sm text-alabaster focus:border-champagne-gold focus:outline-none transition-colors"
              >
                <option value="">Selecione o porte...</option>
                <option value="Até 100 convidados">Até 100 convidados</option>
                <option value="100 a 300 convidados">100 a 300 convidados</option>
                <option value="300 a 800 convidados">300 a 800 convidados</option>
                <option value="Mais de 800 convidados">Mais de 800 convidados / Grande Feira</option>
              </select>
            </div>
          </div>
        </div>

        {/* Linha 5: Atração Desejada */}
        <div>
          <label htmlFor="lead-atracao" className="block text-xs font-mono uppercase tracking-wider text-stone-warm mb-1.5">
            Atração de Interesse
          </label>
          <select
            id="lead-atracao"
            value={formData.atracaoDesejada}
            onChange={(e) => handleFieldChange('atracaoDesejada', e.target.value)}
            className="w-full rounded-xl bg-charcoal/80 border border-champagne-gold/20 px-3.5 py-3 text-sm text-alabaster focus:border-champagne-gold focus:outline-none transition-colors"
          >
            <option value="Estátuas Vivas (Ouro, Mármore ou Prata)">Estátuas Vivas (Ouro, Mármore ou Prata)</option>
            <option value="Especial de Natal (Papai Noel, Anjos, Personagens)">Especial de Natal (Papai Noel, Anjos, Personagens)</option>
            <option value="Robô Futurista / Chef Prateado (Feiras)">Robô Futurista / Chef Prateado (Feiras e Inovação)</option>
            <option value="Personagens Vivos Interativos (Chaplin, Piratas)">Personagens Vivos Interativos (Chaplin, Piratas, etc.)</option>
            <option value="Desenvolvimento Customizado de Mascote / Marca">Desenvolvimento Customizado de Mascote / Marca B2B</option>
          </select>
        </div>

        {/* Mensagem de Erro */}
        {status === 'error' && errorMessage && (
          <div className="flex items-start gap-2 p-3.5 rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-200 text-xs">
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-rose-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Botão de Envio */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full button-gold py-4 rounded-xl flex items-center justify-center gap-2 text-base font-semibold shadow-[0_0_25px_rgba(223,189,124,0.35)] hover:shadow-[0_0_35px_rgba(245,215,145,0.6)] disabled:opacity-50 transition-all cursor-pointer"
          >
            {status === 'submitting' ? (
              <>
                <span className="w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                <span>Enviando solicitação...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Solicitar Proposta Comercial ↗</span>
              </>
            )}
          </button>
        </div>

        <p className="text-center text-[11px] text-stone-warm/80">
          🔒 Seus dados comerciais são confidenciais e utilizados exclusivamente para elaborar a proposta artística.
        </p>
      </form>
    </div>
  );
}
