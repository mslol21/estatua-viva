import type { Metadata } from 'next';
import './globals.css';
import NoiseOverlay from '@/components/NoiseOverlay';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Estátua Viva Produções | Performances Artísticas de Alto Padrão em São Paulo',
  description: 'Intervenções artísticas, estátuas vivas e maquiagem cênica cinematográfica para casamentos, feiras corporativas, convenções e TV. Direção artística de Rodolfo Valentino desde 2005.',
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
  metadataBase: new URL('https://estatuaviva.com.br'),
  openGraph: {
    title: 'Estátua Viva Produções — A Arte da Imobilidade e do Movimento',
    description: 'Performances hiper-realistas, maquiagem cinematográfica e figurinos autorais para eventos em todo o Brasil.',
    url: 'https://estatuaviva.com.br',
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
