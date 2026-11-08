import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services: Record<string, { title: string; description: string; image: string; alt: string; examples: string[] }> = {
  'estatua-viva-para-eventos': { title: 'Estátua viva para eventos', description: 'Estátuas vivas e personagens para receber, surpreender e encantar convidados em festas, feiras e celebrações.', image: '/portfolio/ouro.webp', alt: 'Artista caracterizado como estátua viva dourada', examples: ['Recepção de convidados', 'Festas e celebrações', 'Feiras e eventos corporativos'] },
  'estatua-viva-para-casamento': { title: 'Estátua viva para casamento', description: 'Uma apresentação artística para tornar a recepção do seu casamento ainda mais especial.', image: '/portfolio/branca.webp', alt: 'Artista caracterizado como anjo branco', examples: ['Recepção dos convidados', 'Estátuas em branco e dourado', 'Momentos para fotografias'] },
  'estatua-viva-para-eventos-corporativos': { title: 'Estátua viva para eventos corporativos', description: 'Performances artísticas para recepções, feiras, lançamentos e ações de marca.', image: '/portfolio/prata.webp', alt: 'Artista caracterizado como chef prateado', examples: ['Feiras e convenções', 'Recepção em eventos empresariais', 'Personagens e projetos personalizados'] },
  'personagens-para-festas': { title: 'Personagens para festas e eventos', description: 'Personagens vivos e performances artísticas para surpreender convidados em diferentes celebrações.', image: '/portfolio/diversas.webp', alt: 'Artistas caracterizados como personagens', examples: ['Personagens temáticos', 'Festas e celebrações', 'Interação e fotografias'] },
};

type Props = { params: { servico: string } };
export function generateStaticParams() { return Object.keys(services).map((servico) => ({ servico })); }
export function generateMetadata({ params }: Props): Metadata {
  const service = services[params.servico];
  if (!service) return {};
  return { title: `${service.title} em São Paulo | Estátua Viva Produções`, description: service.description, alternates: { canonical: `/${params.servico}` }, openGraph: { title: `${service.title} | Estátua Viva Produções`, description: service.description, url: `/${params.servico}`, images: [{ url: service.image, alt: service.alt }] } };
}
export default function ServicePage({ params }: Props) {
  const service = services[params.servico];
  if (!service) notFound();
  const whatsapp = `https://wa.me/5511937765250?text=${encodeURIComponent(`Olá! Gostaria de consultar disponibilidade de ${service.title.toLowerCase()} para meu evento.`)}`;
  return <main className="site-surface min-h-screen text-alabaster"><Navbar /><section id="conteudo" tabIndex={-1} className="site-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28"><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne-gold">Estátua Viva Produções · São Paulo</p><h1 className="font-serif text-5xl leading-tight sm:text-6xl">{service.title} <em className="text-champagne-gold">em São Paulo.</em></h1><p className="mt-6 max-w-xl text-lg leading-8 text-stone-warm">{service.description}</p><ul className="mt-7 space-y-3 text-sm text-alabaster">{service.examples.map((item) => <li key={item}>✦ {item}</li>)}</ul><div className="mt-9 flex flex-wrap gap-4"><a href={whatsapp} target="_blank" rel="noopener noreferrer" data-conversion="whatsapp_servico" className="button-gold">Consultar no WhatsApp <ArrowUpRight size={17} /></a><a href="/#acervo" className="button-outline">Conhecer personagens</a></div><p className="mt-7 text-sm text-stone-warm">Consulte disponibilidade, formatos e atendimento para a sua cidade.</p></div><div className="relative aspect-[4/5] max-h-[620px] overflow-hidden rounded-3xl border border-champagne-gold/30"><Image src={service.image} alt={service.alt} fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></div></section><Footer /></main>;
}
