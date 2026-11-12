'use client';

import Script from 'next/script';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { captureAndStoreUtms } from '@/lib/tracking';
import WebVitalsReporter from './WebVitalsReporter';

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
const CONSENT_KEY = 'ev_analytics_consent';

export default function MarketingAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    captureAndStoreUtms();
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
      }
    } catch {
      /* Modo anônimo ou restrito */
    }
  }, []);

  // Notifica o Google Tag Manager / GA4 sobre visualizações virtuais de página em transições SPA
  useEffect(() => {
    if (consent !== 'accepted') return;
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'virtual_page_view',
      page_path: pathname + (searchParams?.toString() ? '?' + searchParams.toString() : ''),
      page_title: typeof document !== 'undefined' ? document.title : '',
    });
  }, [pathname, searchParams, consent]);

  const choose = (value: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* armazenamento local bloqueado */
    }
    setConsent(value);
  };

  return (
    <>
      {/* 1. Coleta automática de Core Web Vitals para otimização de ranking no Google */}
      <WebVitalsReporter />

      {/* 2. Google Tag Manager (GTM) */}
      {consent === 'accepted' && gtmId && /^GTM-[A-Z0-9]+$/i.test(gtmId) && (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}

      {/* 3. Google Analytics 4 (GA4) Fallback ou Standalone */}
      {consent === 'accepted' && !gtmId && ga4Id && /^G-[A-Z0-9]+$/i.test(ga4Id) && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4Id}',{send_page_view:true});`}
          </Script>
        </>
      )}

      {/* 4. Microsoft Clarity (Mapas de calor e comportamento de busca/clique) */}
      {consent === 'accepted' && clarityId && /^[a-z0-9]+$/i.test(clarityId) && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`}
        </Script>
      )}

      {/* 5. Banner de Consentimento LGPD / Privacidade */}
      {consent === null && (gtmId || ga4Id || clarityId) && (
        <aside
          aria-label="Preferências de privacidade e cookies"
          className="fixed bottom-3 left-3 right-3 z-[100] mx-auto max-w-xl rounded-xl border border-champagne-gold/40 bg-[#071318]/95 p-4 text-[#f4f1ea] shadow-2xl backdrop-blur-md"
        >
          <p className="text-sm leading-6">
            Utilizamos ferramentas de análise opcionais para entender a navegação e melhorar nosso atendimento e desempenho nas buscas. Você pode aceitar ou recusar sem perder nenhum recurso do site.{' '}
            <Link href="/privacidade" className="underline text-champagne-gold">
              Política de privacidade
            </Link>
            .
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => choose('accepted')}
              className="rounded-lg bg-champagne-gold px-4 py-2 text-sm font-semibold text-obsidian hover:bg-[#ffe6a3] transition-colors"
            >
              Aceitar análise
            </button>
            <button
              type="button"
              onClick={() => choose('rejected')}
              className="rounded-lg border border-white/40 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              Apenas essenciais
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
