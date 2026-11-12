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
}

export function trackLeadAndOpenWhatsApp({
  message,
  leadSource = 'website',
  leadLabel = 'whatsapp_click',
  eventCategory = 'Engagement',
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
      w.dataLayer.push({
        event: 'whatsapp_click',
        lead_source: leadSource,
        lead_label: leadLabel,
        event_category: eventCategory,
        timestamp: new Date().toISOString(),
      });

      if (typeof w.gtag === 'function') {
        w.gtag('event', 'generate_lead', {
          event_category: eventCategory,
          event_label: leadLabel,
          lead_source: leadSource,
          value: 1,
        });
      }
    } catch {
      // noop
    }

    // 2. Meta Pixel (Facebook Ads)
    try {
      const w = window as unknown as { fbq?: (...args: unknown[]) => void };
      if (typeof w.fbq === 'function') {
        w.fbq('track', 'Lead', {
          content_name: leadLabel,
          content_category: leadSource,
        });
      }
    } catch {
      // noop
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
