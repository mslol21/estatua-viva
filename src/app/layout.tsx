import type { Metadata } from 'next';
import './globals.css';
import NoiseOverlay from '@/components/NoiseOverlay';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Estátua Viva para Eventos em São Paulo | Estátua Viva Produções',
  description: 'Estátuas vivas e personagens para festas, casamentos, feiras e eventos corporativos em São Paulo. Consulte disponibilidade com a Estátua Viva Produções.',
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
  openGraph: {
    title: 'Estátua Viva Produções — A Arte da Imobilidade e do Movimento',
    description: 'Performances hiper-realistas, maquiagem cinematográfica e figurinos autorais para eventos em todo o Brasil.',
    url: 'https://estatuaviva.konnexy.com.br',
    siteName: 'Estátua Viva Produções',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/brand/artista.webp', width: 794, height: 794, alt: 'Estátua Viva Produções' }],
  },
};

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

