import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import NoiseOverlay from '@/components/NoiseOverlay';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
});

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="bg-obsidian text-alabaster font-sans selection:bg-champagne-gold selection:text-obsidian antialiased">
        <NoiseOverlay />
        <SmoothScroll>
          {children}
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
