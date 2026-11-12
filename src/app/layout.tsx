import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { Cormorant_Garamond, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { SITE_URL } from '@/lib/site-config';
import { headers } from 'next/headers';
import MarketingAnalytics from '@/components/MarketingAnalytics';
import './globals.css';
import './hero-refinement.css';
import './motion-refinement.css';
import NoiseOverlay from '@/components/NoiseOverlay';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], display: 'swap', variable: '--font-cormorant' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-jakarta' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-jetbrains' });

const baseMetadata: Metadata = {
  title: 'Estátua Viva para Eventos no Brasil | Estátua Viva Produções',
  description: 'Contrate estátuas vivas e personagens para casamentos, feiras, inaugurações e eventos corporativos em todo o Brasil. Solicite um orçamento personalizado.',
  keywords: [
    'estátua viva',
    'estátua viva sp',
    'estátua viva são paulo',
    'eventos corporativos',
    'recepção de gala',
    'casamentos de luxo',
    'intervenções artísticas',
    'Rodolfo Valentino',
    'marketing sensorial'
  ],
  authors: [{ name: 'Estátua Viva Produções' }],
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: '/brand/monograma-oficial.webp', type: 'image/webp', sizes: 'any' }],
    shortcut: '/brand/monograma-oficial.webp',
    apple: [{ url: '/brand/monograma-oficial.webp', sizes: '180x180', type: 'image/webp' }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  other: { 'geo.region': 'BR-SP', 'geo.placename': 'São Paulo' },
  openGraph: {
    title: 'Estátua Viva Produções — Você imagina. A gente dá vida.',
    description: 'Estátuas vivas e personagens para eventos corporativos, feiras e celebrações em todo o Brasil.',
    url: `${SITE_URL}/`,
    siteName: 'Estátua Viva Produções',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, type: 'image/png', alt: 'Performance de estátua viva em dourado — Estátua Viva Produções' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estátua Viva Produções — Você imagina. A gente dá vida.',
    description: 'Estátuas vivas e personagens para festas e eventos em todo o Brasil.',
    images: [`${SITE_URL}/og-image.png`],
  }
};

export function generateMetadata(): Metadata {
  const host = (headers().get('x-forwarded-host') || headers().get('host') || '').split(':')[0].toLowerCase();
  const official = host === 'estatuavivaproducoes.com.br' || host === 'www.estatuavivaproducoes.com.br';
  return { ...baseMetadata, robots: official ? { index: true, follow: true } : { index: false, follow: false, googleBot: { index: false, follow: false } } };
}

export const viewport: Viewport = { themeColor: '#071318' };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-TVHJP4QK';

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="bg-obsidian text-alabaster font-sans selection:bg-champagne-gold selection:text-obsidian antialiased">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <NoiseOverlay />
        <SmoothScroll>
          {children}
          <FloatingWhatsApp />
          <Suspense fallback={null}><MarketingAnalytics /></Suspense>
        </SmoothScroll>
      </body>
    </html>
  );
}

