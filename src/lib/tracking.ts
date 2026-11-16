'use client';

// Utilitário global de rastreamento de conversões (Google Ads, Meta Ads / GTM)
// e abertura universal de WhatsApp com parâmetros de campanha (UTMs).

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
] as const;

export function captureAndStoreUtms(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const utms: Record<string, string> = {};
  try {
    const params = new URLSearchParams(window.location.search);
    let foundAny = false;

    UTM_KEYS.forEach((key) => {
      const val = params.get(key);
      if (val) {
        utms[key] = val;
        sessionStorage.setItem(`ev_${key}`, val);
        foundAny = true;
      }
    });

    if (!foundAny) {
      UTM_KEYS.forEach((key) => {
        const stored = sessionStorage.getItem(`ev_${key}`);
        if (stored) utms[key] = stored;
      });
    }
  } catch {
    // sessionStorage fallback silencioso
  }

  return utms;
}

export function buildWhatsAppUrl(message: string, sourceIdentifier?: string): string {
  let finalMessage = message.trim();
  const utms = captureAndStoreUtms();

  const tags: string[] = [];
  if (sourceIdentifier) {
    tags.push(`Origem: ${sourceIdentifier}`);
  }
  if (utms.utm_source) {
    tags.push(`utm_source: ${utms.utm_source}`);
  }
  if (utms.utm_campaign) {
    tags.push(`utm_campaign: ${utms.utm_campaign}`);
  }
  if (utms.gclid) {
    tags.push('Google Ads');
  }
  if (utms.fbclid) {
    tags.push('Meta Ads');
  }

  if (tags.length > 0) {
    finalMessage += `\n\n_[${tags.join(' | ')}]_`;
  }

  return `https://wa.me/5511937765250?text=${encodeURIComponent(finalMessage)}`;
}

export interface TrackLeadOptions {
  message: string;
  leadSource?: string;
  leadLabel?: string;
  eventCategory?: string;
  isQuoteSubmission?: boolean;
}

export function trackFormStart(formName: string = 'lead_capture_form'): void {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'form_start',
      form_name: formName,
      timestamp: new Date().toISOString(),
    });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'form_start', {
        form_name: formName,
        event_category: 'Lead_Funnel',
      });
    }
  } catch {
    // noop
  }
}

export function trackFormError(formName: string, errorReason: string): void {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'form_error',
      form_name: formName,
      error_reason: errorReason,
      timestamp: new Date().toISOString(),
    });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'form_error', {
        form_name: formName,
        error_reason: errorReason,
      });
    }
  } catch {
    // noop
  }
}

export function trackFormSubmitSuccess(formName: string, meta: { eventType?: string; city?: string } = {}): void {
  if (typeof window === 'undefined') return;
  try {
    const utms = captureAndStoreUtms();
    const w = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    
    // 1. Evento de formulário concluído
    w.dataLayer.push({
      event: 'form_submit_success',
      form_name: formName,
      event_type: meta.eventType || '',
      city: meta.city || '',
      ...utms,
      timestamp: new Date().toISOString(),
    });

    // 2. Evento oficial de lead gerado (Google Ads & GA4)
    w.dataLayer.push({
      event: 'generate_lead',
      currency: 'BRL',
      value: 1,
      form_name: formName,
      ...utms,
      timestamp: new Date().toISOString(),
    });

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'generate_lead', {
        event_category: 'Conversion',
        event_label: formName,
        currency: 'BRL',
        value: 1,
      });
    }

    // 3. Meta Pixel (Lead)
    if (typeof w.fbq === 'function') {
      w.fbq('track', 'Lead', {
        content_name: formName,
        content_category: meta.eventType || 'Corporate_Event',
        currency: 'BRL',
        value: 1,
      });
    }
  } catch {
    // noop
  }
}

export function trackClickCTA(ctaName: string, destination: string): void {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'click_cta',
      cta_name: ctaName,
      destination,
      timestamp: new Date().toISOString(),
    });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'click_cta', {
        cta_name: ctaName,
        destination,
      });
    }
  } catch {
    // noop
  }
}

export function trackViewPortfolio(categoryName: string): void {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>>; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'view_portfolio',
      category: categoryName,
      timestamp: new Date().toISOString(),
    });
  } catch {
    // noop
  }
}

export function trackStartQuote(stepName: string = 'step_1'): void {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'start_quote',
      step: stepName,
      timestamp: new Date().toISOString(),
    });
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'start_quote', {
        event_category: 'Lead_Funnel',
        event_label: stepName,
      });
    }
  } catch {
    // noop
  }
}

export function trackLeadAndOpenWhatsApp({
  message,
  leadSource = 'website',
  leadLabel = 'whatsapp_click',
  eventCategory = 'Engagement',
  isQuoteSubmission = false,
}: TrackLeadOptions): void {
  const url = buildWhatsAppUrl(message, leadSource);

  if (typeof window !== 'undefined') {
    // 1. Google Tag Manager / GA4 dataLayer & gtag
    try {
      const w = window as unknown as {
        dataLayer?: Array<Record<string, unknown>>;
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];

      // Evento padrão: click_whatsapp
      w.dataLayer.push({
        event: 'click_whatsapp',
        lead_source: leadSource,
        lead_label: leadLabel,
        event_category: eventCategory,
        timestamp: new Date().toISOString(),
      });

      if (typeof w.gtag === 'function') {
        w.gtag('event', 'click_whatsapp', {
          event_category: eventCategory,
          event_label: leadLabel,
          lead_source: leadSource,
        });
      }

      // Se for uma submissão completa de proposta estruturada, dispara submit_quote e generate_lead
      if (isQuoteSubmission) {
        w.dataLayer.push({
          event: 'submit_quote',
          lead_source: leadSource,
          lead_label: leadLabel,
          timestamp: new Date().toISOString(),
        });
        w.dataLayer.push({
          event: 'generate_lead',
          currency: 'BRL',
          lead_source: leadSource,
          timestamp: new Date().toISOString(),
        });

        if (typeof w.gtag === 'function') {
          w.gtag('event', 'submit_quote', {
            event_category: 'Conversion',
            event_label: leadLabel,
            lead_source: leadSource,
          });
          w.gtag('event', 'generate_lead', {
            event_category: 'Conversion',
            event_label: leadLabel,
            lead_source: leadSource,
          });
        }
      }
    } catch {
      // noop
    }

    // 2. Meta Pixel (Facebook Ads)
    try {
      const w = window as unknown as { fbq?: (...args: unknown[]) => void };
      if (typeof w.fbq === 'function') {
        w.fbq('trackCustom', 'WhatsAppClick', {
          content_name: leadLabel,
          content_category: leadSource,
        });
        if (isQuoteSubmission) {
          w.fbq('track', 'Lead', {
            content_name: leadLabel,
            content_category: leadSource,
          });
        }
      }
    } catch {
      // noop
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
