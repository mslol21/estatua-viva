import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site-config';
import { videoCatalog, findVideo } from '@/data/videoCatalog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return videoCatalog.map(video => ({ slug: video.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const video = findVideo(slug);
  if (!video) return {};
  const url = `${SITE_URL}/videos/${video.slug}`;
  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'video.other',
      title: video.title,
      description: video.description,
      url,
      images: [{ url: `${SITE_URL}${video.poster}` }],
    },
  };
}

export default async function VideoWatchPage({ params }: Props) {
  const { slug } = await params;
  const video = findVideo(slug);
  if (!video) notFound();
  const pageUrl = `${SITE_URL}/videos/${video.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#video`,
    name: video.title,
    description: video.description,
    thumbnailUrl: `${SITE_URL}${video.poster}`,
    contentUrl: `${SITE_URL}${video.file}`,
    mainEntityOfPage: pageUrl,
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#empresa`, name: 'Estátua Viva Produções' },
  };
  return (
    <main className="site-surface min-h-screen text-alabaster">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}/>
      <Navbar/>
      <section id="conteudo" className="site-container mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center pt-36 pb-20 sm:pt-48">
        <p className="eyebrow text-center">Acervo audiovisual · Estátua Viva Produções</p>
        <h1 className="mt-5 max-w-4xl text-center font-serif text-3xl sm:text-5xl">{video.title}</h1>
        <p className="mt-5 mb-8 max-w-2xl text-center text-stone-warm">{video.description}</p>
        <div className="w-full max-w-[460px] overflow-hidden rounded-2xl border border-champagne-gold/30 bg-black shadow-[0_0_40px_rgba(223,189,124,0.18)]">
          <video controls playsInline preload="metadata" poster={video.poster} className="mx-auto block max-h-[75vh] w-full object-contain" aria-label={video.title}>
            <source src={video.file} type="video/mp4"/>
            Seu navegador não suporta este vídeo.
          </video>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/natal" className="inline-flex rounded-full border border-champagne-gold/40 px-6 py-3 text-sm text-champagne-gold">Outras apresentações de Natal</Link>
          <Link href="/fim-de-ano" className="button-gold inline-flex">Atrações para fim de ano ↗</Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
