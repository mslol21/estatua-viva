'use client';

import { useReportWebVitals } from 'next/web-vitals';

/**
 * Coleta as métricas oficiais de Core Web Vitals (LCP, FID, CLS, INP, FCP, TTFB)
 * recomendadas pelo Google Search Central e envia para o dataLayer / GTM / GA4.
 * Essas métricas influenciam diretamente a experiência do usuário e o ranqueamento no Google.
 */
export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (typeof window === 'undefined') return;

    try {
      const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      w.dataLayer = w.dataLayer || [];

      w.dataLayer.push({
        event: 'core_web_vitals',
        metric_name: metric.name,
        metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        metric_rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
        metric_id: metric.id,
        metric_navigation_type: metric.navigationType,
      });
    } catch {
      // Falha silenciosa para evitar qualquer impacto na navegação
    }
  });

  return null;
}
