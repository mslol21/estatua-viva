import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Canais Oficiais & Catálogo Expresso | Estátua Viva Produções',
  description: 'Acesse o WhatsApp direto da produção, acervo de personagens vivos e solicite sua proposta para casamentos, feiras e eventos corporativos.',
  alternates: {
    canonical: `${SITE_URL}/bio`,
  },
  openGraph: {
    title: 'Estátua Viva Produções — Bio & Catálogo Expresso',
    description: 'Acesse o atendimento comercial no WhatsApp e conheça nossas performances de estátuas vivas e personagens para eventos em todo o Brasil.',
    url: `${SITE_URL}/bio`,
    type: 'website',
  },
};

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
