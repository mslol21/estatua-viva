'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, MessageCircle, ArrowRight, Home } from 'lucide-react';
import { trackLeadAndOpenWhatsApp } from '@/lib/tracking';

interface ConfirmedLead {
  leadId: string;
  nome?: string;
  empresa?: string;
  whatsapp?: string;
  cidade?: string;
  dataPrevista?: string;
  tipoEvento?: string;
  atracaoDesejada?: string;
  timestamp?: string;
}

function ObrigadoContent() {
  const searchParams = useSearchParams();
  const queryLeadId = searchParams.get('leadId');
  const [lead, setLead] = useState<ConfirmedLead | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('ev_confirmed_lead');
      if (stored) {
        const parsed: ConfirmedLead = JSON.parse(stored);
        setLead(parsed);
      } else if (queryLeadId) {
        setLead({ leadId: queryLeadId });
      }
    } catch {
      if (queryLeadId) setLead({ leadId: queryLeadId });
    }
  }, [queryLeadId]);

  const handleContinueWhatsApp = () => {
    const leadCode = lead?.leadId || queryLeadId || 'SITE';
    const empresaInfo = lead?.empresa ? ` da empresa ${lead.empresa}` : '';
    const message = `Olá! Acabei de registrar uma solicitação de proposta no site (Código: ${leadCode})${empresaInfo}. Gostaria de agilizar os detalhes com a produção artística.`;

    trackLeadAndOpenWhatsApp({
      message,
      leadSource: 'obrigado_page',
      leadLabel: 'continuar_whatsapp_obrigado',
      eventCategory: 'Post_Conversion_Contact',
    });
  };

  return (
    <div id="conteudo" className="site-container pt-36 pb-20 sm:pt-48 sm:pb-28">
      <div className="max-w-2xl mx-auto rounded-3xl border border-champagne-gold/35 bg-[#071318]/95 p-7 sm:p-12 shadow-[0_0_50px_rgba(223,189,124,0.2)] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Ícone de Sucesso */}
        <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-champagne-gold/15 border border-champagne-gold/50 flex items-center justify-center text-champagne-gold mb-6 shadow-[0_0_30px_rgba(223,189,124,0.3)]">
          <CheckCircle2 size={36} className="animate-pulse" />
        </div>

        <p className="eyebrow !mb-2">Solicitação confirmada</p>
        <h1 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal">
          Recebemos sua solicitação!
        </h1>

        <p className="mt-4 text-sm sm:text-base text-stone-warm leading-relaxed max-w-lg mx-auto">
          Em breve nossa equipe entrará em contato para conversar sobre os detalhes cenográficos e disponibilidade da data do seu evento.
        </p>

        {/* Resumo do Lead registrado */}
        {lead && (
          <div className="mt-8 p-5 rounded-2xl bg-charcoal/60 border border-champagne-gold/20 text-left text-xs sm:text-sm space-y-2.5">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-mono uppercase text-champagne-gold text-[11px]">Identificador do Pedido</span>
              <span className="font-mono text-alabaster font-bold">{lead.leadId}</span>
            </div>
            {lead.empresa && (
              <div className="flex items-center justify-between text-stone-warm">
                <span>Empresa / Organização:</span>
                <span className="text-alabaster font-medium">{lead.empresa}</span>
              </div>
            )}
            {lead.tipoEvento && (
              <div className="flex items-center justify-between text-stone-warm">
                <span>Tipo de Evento:</span>
                <span className="text-alabaster font-medium">{lead.tipoEvento}</span>
              </div>
            )}
            {lead.cidade && (
              <div className="flex items-center justify-between text-stone-warm">
                <span>Cidade / Local:</span>
                <span className="text-alabaster font-medium">{lead.cidade}</span>
              </div>
            )}
          </div>
        )}

        {/* CTA para WhatsApp */}
        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={handleContinueWhatsApp}
            className="w-full button-gold py-4 rounded-xl flex items-center justify-center gap-2.5 text-base font-semibold shadow-[0_0_30px_rgba(223,189,124,0.4)] cursor-pointer"
          >
            <MessageCircle size={19} />
            <span>Agilizar Atendimento pelo WhatsApp</span>
            <ArrowRight size={17} />
          </button>
          <p className="text-[11px] text-stone-warm/80">
            Você pode enviar agora mesmo uma mensagem à produção com o código do seu pedido para agilizar o retorno.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-stone-warm hover:text-champagne-gold transition-colors font-mono uppercase tracking-wider"
          >
            <Home size={14} /> Voltar à página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ObrigadoPage() {
  return (
    <main className="site-surface min-h-screen text-alabaster flex flex-col justify-between selection:bg-champagne-gold selection:text-obsidian">
      <Navbar />
      <Suspense fallback={<div className="site-container py-44 text-center">Carregando confirmação...</div>}>
        <ObrigadoContent />
      </Suspense>
      <Footer />
    </main>
  );
}

