import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solicitação Recebida | Estátua Viva Produções',
  description: 'Sua solicitação de proposta foi recebida com sucesso. Em breve nossa equipe entrará em contato.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
