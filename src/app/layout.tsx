import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { SITE_URL } from '@/lib/site-config';
import MarketingAnalytics from '@/components/MarketingAnalytics';
import './globals.css';
import './hero-refinement.css';
import './motion-refinement.css';
import NoiseOverlay from '@/components/NoiseOverlay';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
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
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
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

export const viewport: Viewport = { themeColor: '#071318' };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-alabaster font-sans selection:bg-champagne-gold selection:text-obsidian antialiased">
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

