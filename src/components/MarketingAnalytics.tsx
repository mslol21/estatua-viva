'use client';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { captureAndStoreUtms } from '@/lib/tracking';

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
export default function MarketingAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    captureAndStoreUtms();
    if (!gtmId) return;
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: 'virtual_page_view', page_path: pathname + (searchParams?.toString() ? '?' + searchParams.toString() : '') });
  }, [pathname, searchParams]);
  if (!gtmId || !/^GTM-[A-Z0-9]+$/.test(gtmId)) return null;
  return <Script id="gtm-loader" strategy="afterInteractive">{\`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','\${gtmId}');\`}</Script>;
}
