import { NextRequest, NextResponse } from 'next/server';

export interface LeadPayload {
  nome: string;
  empresa: string;
  whatsapp: string;
  email?: string;
  tipoEvento: string;
  dataPrevista?: string;
  cidade: string;
  convidados?: string;
  atracaoDesejada?: string;
  origemPagina?: string;
  utms?: Record<string, string>;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    // 1. Validação básica de campos obrigatórios
    if (!body.nome || body.nome.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Por favor, informe seu nome completo.' }, { status: 400 });
    }

    if (!body.empresa || body.empresa.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Por favor, informe o nome da sua empresa.' }, { status: 400 });
    }

    const cleanPhone = (body.whatsapp || '').replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return NextResponse.json({ success: false, error: 'Por favor, informe um WhatsApp válido com DDD.' }, { status: 400 });
    }

    if (!body.cidade || body.cidade.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Por favor, informe a cidade do evento.' }, { status: 400 });
    }

    // Validação de e-mail opcional
    if (body.email && body.email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email.trim())) {
        return NextResponse.json({ success: false, error: 'E-mail em formato inválido.' }, { status: 400 });
      }
    }

    // 2. Registro seguro do lead (Identificador único e carimbo de data/hora)
    const leadId = `EV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Log operacional estruturado no servidor (sem expor credenciais)
    console.info('[LEAD_RECEIVED]', {
      leadId,
      empresa: body.empresa.trim(),
      tipoEvento: body.tipoEvento || 'corporativo',
      cidade: body.cidade.trim(),
      origem: body.origemPagina || 'landing_page',
      timestamp,
      utms: body.utms || {},
    });

    return NextResponse.json(
      {
        success: true,
        leadId,
        message: 'Solicitação registrada com sucesso. Redirecionando para confirmação...',
        timestamp,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[LEAD_CAPTURE_ERROR]', err);
    return NextResponse.json({ success: false, error: 'Erro interno ao processar solicitação. Tente pelo WhatsApp direto.' }, { status: 500 });
  }
}
