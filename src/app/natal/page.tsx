import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Especial de Natal | Personagens e Performances | Estátua Viva Produções',
  description: 'Conheça as performances e personagens natalinos da Estátua Viva Produções. Experiências artísticas para eventos e celebrações de Natal em todo o Brasil.',
  alternates: { canonical: `${SITE_URL}/natal` },
  openGraph: { title: 'Especial de Natal — Estátua Viva Produções', description: 'A magia do Natal ganha vida em apresentações e personagens especiais.', url: `${SITE_URL}/natal`, type: 'website' },
};
const videos = [
  { title: 'Convite Noel', description: 'Um convite especial para viver a magia do Natal.', src: '/videos/natal/convite-noel.mp4' },
  { title: 'Novos personagens de Natal', description: 'Conheça os personagens que dão vida à temporada.', src: '/videos/natal/novos-personagens.mp4' },
  { title: 'POV Noel', description: 'Veja a experiência natalina de uma nova perspectiva.', src: '/videos/natal/pov-noel.mp4' },
];
const whatsapp = 'https://wa.me/5511937765250?text=' + encodeURIComponent('Olá! Conheci o Especial de Natal no site da Estátua Viva Produções e gostaria de solicitar um orçamento para meu evento.');
export default function NatalPage() {
  return <main className="site-surface min-h-screen text-alabaster">
    <Navbar />
    <section id="conteudo" className="site-container pt-32 pb-14 sm:pt-44 sm:pb-20">
      <Link href="/" className="text-sm text-champagne-gold hover:underline">← Voltar ao site</Link>
      <p className="eyebrow mt-10">Temporada especial • Natal</p>
      <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl max-w-4xl leading-[1.05] mt-4">A magia do Natal <span className="text-champagne-gold">ganha vida.</span></h1>
      <p className="text-stone-warm max-w-2xl text-lg leading-relaxed mt-6">Personagens, caracterizações e performances artísticas para tornar celebrações natalinas ainda mais memoráveis. Atendemos eventos em todo o Brasil, mediante consulta de disponibilidade.</p>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button-gold inline-flex mt-8">Solicitar orçamento de Natal ↗</a>
    </section>
    <section className="site-container pb-20" aria-labelledby="videos-natal">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div><p className="eyebrow">Conheça a experiência</p><h2 id="videos-natal" className="font-serif text-3xl sm:text-5xl mt-2">Natal em cena</h2></div>
        <p className="text-stone-warm text-sm max-w-sm">Três perspectivas do trabalho da Estátua Viva Produções. Toque para reproduzir cada vídeo.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((video, index) => <article key={video.src} className="neon-gold-card rounded-2xl overflow-hidden border border-champagne-gold/25 bg-charcoal/50">
          <div className="relative bg-black/80 aspect-[9/16] max-h-[640px]">
            <video className="w-full h-full object-contain" controls playsInline preload="none" aria-label={video.title}>
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
          <div className="p-6"><p className="text-xs tracking-widest uppercase text-champagne-gold">Vídeo {String(index + 1).padStart(2, '0')}</p><h3 className="font-serif text-2xl mt-2">{video.title}</h3><p className="text-stone-warm text-sm mt-2">{video.description}</p></div>
        </article>)}
      </div>
    </section>
    <section className="site-container pb-24" aria-labelledby="natal-eventos">
      <div className="rounded-3xl border border-champagne-gold/30 bg-charcoal/50 p-7 sm:p-12 text-center">
        <p className="eyebrow">Seu evento merece uma experiência especial</p>
        <h2 id="natal-eventos" className="font-serif text-3xl sm:text-5xl mt-4">Leve o encanto do Natal para sua celebração</h2>
        <p className="text-stone-warm mt-5 max-w-2xl mx-auto">Consulte opções de personagens e performances para eventos corporativos, confraternizações, ações promocionais e celebrações natalinas.</p>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button-gold inline-flex mt-8">Consultar disponibilidade e orçamento ↗</a>
      </div>
    </section>
    <Footer />
  </main>;
}
