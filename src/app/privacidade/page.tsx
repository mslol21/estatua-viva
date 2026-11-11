import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacidade | Estátua Viva Produções',
  description: 'Informações sobre dados enviados por visitantes e sobre as ferramentas de análise do site.',
  alternates: { canonical: `${SITE_URL}/privacidade` },
};

export default function PrivacyPage() {
  return <main className="min-h-screen bg-obsidian text-alabaster">
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <Link href="/" className="text-champagne-gold underline underline-offset-4">← Voltar ao site</Link>
      <h1 className="mt-10 mb-6 font-serif text-4xl sm:text-5xl">Privacidade e dados pessoais</h1>
      <p className="mb-8 text-stone-warm leading-7">A Estátua Viva Produções disponibiliza informações sobre serviços artísticos e canais para solicitação de orçamento. Esta página apresenta as práticas técnicas previstas para o site e deve ser revisada pelo responsável antes da ativação de ferramentas de publicidade e análise.</p>
      <h2 className="mb-3 font-serif text-2xl">Contato e orçamento</h2>
      <p className="mb-7 text-stone-warm leading-7">Ao iniciar uma conversa pelo WhatsApp, o visitante é direcionado para uma plataforma externa. As informações fornecidas durante a conversa serão utilizadas para responder à solicitação e avaliar a proposta comercial. Consulte também as políticas de privacidade do WhatsApp.</p>
      <h2 className="mb-3 font-serif text-2xl">Análise de navegação</h2>
      <p className="mb-7 text-stone-warm leading-7">Caso ferramentas opcionais de análise sejam habilitadas, o site solicita consentimento antes de carregar o Google Tag Manager. O visitante pode recusar sem perder acesso às informações e aos serviços.</p>
      <h2 className="mb-3 font-serif text-2xl">Como revisar sua escolha</h2>
      <p className="mb-7 text-stone-warm leading-7">A preferência de análise é armazenada neste navegador. Para alterar a preferência atualmente armazenada, limpe os dados locais deste site no navegador e escolha novamente na próxima visita.</p>
      <p className="text-sm text-stone-warm">Antes da publicação definitiva, a empresa deverá confirmar os dados do controlador, o canal de privacidade, os prazos de retenção, os fornecedores envolvidos e os procedimentos para solicitações de titulares.</p>
    </article>
  </main>;
}
