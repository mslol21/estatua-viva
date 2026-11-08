import type { Metadata, Viewport } from 'next';
import './globals.css';
import './hero-refinement.css';
import './motion-refinement.css';
import NoiseOverlay from '@/components/NoiseOverlay';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Estátua Viva Produções | Performances Artísticas e Personagens para Eventos em SP',
  description: 'Você imagina. A gente dá vida. Estátuas vivas e personagens para eventos corporativos, feiras e casamentos em São Paulo desde 2005.',
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
  metadataBase: new URL('https://estatuaviva.konnexy.com.br'),
  alternates: { canonical: '/' },
  other: { 'geo.region': 'BR-SP', 'geo.placename': 'São Paulo' },
  openGraph: {
    title: 'Estátua Viva Produções — Você imagina. A gente dá vida.',
    description: 'Estátuas vivas e personagens para eventos corporativos, feiras e celebrações em São Paulo.',
    url: 'https://estatuaviva.konnexy.com.br/',
    siteName: 'Estátua Viva Produções',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: 'https://estatuaviva.konnexy.com.br/og-image.png', width: 1200, height: 630, type: 'image/png', alt: 'Performance de estátua viva em dourado — Estátua Viva Produções' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estátua Viva Produções — Você imagina. A gente dá vida.',
    description: 'Estátuas vivas e personagens para festas e eventos em São Paulo.',
    images: ['https://estatuaviva.konnexy.com.br/og-image.png'],
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
        </SmoothScroll>
      </body>
    </html>
  );
}

