import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Compass, Home, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada (404) | Estátua Viva Produções',
  description: 'A página solicitada não foi encontrada ou foi movida. Conheça nosso acervo de estátuas vivas e personagens para eventos.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="site-surface min-h-screen text-alabaster flex flex-col justify-between">
      <Navbar />
      <div id="conteudo" className="site-container py-32 sm:py-44 text-center my-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne-gold/30 bg-[#071318] text-champagne-gold text-xs font-mono uppercase tracking-widest mb-6">
          <Compass size={14} /> Erro 404 · Conteúdo não encontrado
        </div>
        
        <h1 className="font-serif text-4xl sm:text-6xl text-alabaster max-w-2xl mx-auto leading-tight">
          A arte da imobilidade não encontrou esta página.
        </h1>
        
        <p className="mt-5 text-stone-warm max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
          O link acessado pode ter mudado ou não está mais disponível. Explore nosso acervo de personagens ou fale diretamente com a produção artística.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="button-gold inline-flex items-center gap-2"
          >
            <Home size={16} /> Voltar à página inicial
          </Link>
          <a
            href="https://wa.me/5511937765250?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Est%C3%A1tua%20Viva%20Produ%C3%A7%C3%B5es%20e%20gostaria%20de%20falar%20com%20a%20produ%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold/10 transition-colors text-sm font-semibold"
          >
            <MessageCircle size={16} /> Atendimento via WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
