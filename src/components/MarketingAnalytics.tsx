'use client';
import Script from 'next/script';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { captureAndStoreUtms } from '@/lib/tracking';

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const CONSENT_KEY = 'ev_analytics_consent';

export default function MarketingAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    captureAndStoreUtms();
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === 'accepted' || stored === 'rejected') setConsent(stored);
    } catch { /* Private browsing or restricted storage */ }
  }, []);

  useEffect(() => {
    if (consent !== 'accepted' || !gtmId) return;
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'virtual_page_view',
      page_path: pathname + (searchParams?.toString() ? '?' + searchParams.toString() : ''),
    });
  }, [pathname, searchParams, consent]);

  const choose = (value: 'accepted' | 'rejected') => {
    try { localStorage.setItem(CONSENT_KEY, value); } catch { /* storage unavailable */ }
    setConsent(value);
  };

  return <>
    {consent === 'accepted' && !gtmId && ga4Id && /^G-[A-Z0-9]+$/.test(ga4Id) && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" /><Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4Id}',{send_page_view:true});`}</Script></>}
    {consent === 'accepted' && gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId) && (
      <Script id="gtm-loader" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script>
    )}
    {consent === null && (gtmId || ga4Id) && (
      <aside aria-label="Preferências de privacidade" className="fixed bottom-3 left-3 right-3 z-[100] mx-auto max-w-xl rounded-xl border border-champagne-gold/40 bg-[#071318] p-4 text-[#f4f1ea] shadow-2xl">
        <p className="text-sm leading-6">Utilizamos ferramentas de análise opcionais para entender o uso do site e melhorar nossos serviços. Você pode aceitar ou recusar. Os recursos essenciais continuam funcionando. <Link href="/privacidade" className="underline text-champagne-gold">Política de privacidade</Link>.</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <button type="button" onClick={() => choose('accepted')} className="rounded-lg bg-champagne-gold px-4 py-2 text-sm font-semibold text-obsidian">Aceitar análise</button>
          <button type="button" onClick={() => choose('rejected')} className="rounded-lg border border-white/40 px-4 py-2 text-sm">Recusar</button>
        </div>
      </aside>
    )}
  </>;
}
