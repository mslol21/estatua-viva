'use client';

import Image from 'next/image';
import { useState } from 'react';

const base = 'https://estatuaviva.com.br/wp-content/uploads/';
const galleries: Record<string, { label: string; photos: [string, string][] }> = {
  'Mármore Branco': { label: 'Branca', photos: [
    ['2025/07/Deusa-do-espelho-2-768x768.jpg', 'Deusa do espelho em branco'],
    ['2025/07/Deusa-do-espelho-1-768x768.jpg', 'Deusa do espelho em evento'],
    ['2025/07/Campanha-Cancer-de-cabeca-2-rotated.jpg', 'Estátua branca em campanha'],
    ['2025/07/Campanha-Cancer-de-cabeca-1-rotated.jpg', 'Estátua branca em evento'],
    ['2025/07/Hera-Lancamento-Marca-2-768x768.jpg', 'Personagem Hera em lançamento'],
    ['2025/07/Hera-Lancamento-Marca-1-768x768.jpg', 'Personagem Hera'],
    ['2022/05/estatua-viva-Romeu-1.jpg', 'Estátua viva clássica em branco'],
    ...[5,2,1,7,9,10,8,3,4].map((n): [string,string] => [`2022/05/Estatua-viva-anjo-branco-${n}${({2:'-768x576',7:'-768x576',8:'-768x511',4:'-768x598'} as Record<number,string>)[n] || ''}.jpg`, `Anjo branco em apresentação ${n}`]),
    ['2022/05/estatua-viva-camponesa-768x576.jpg', 'Estátua viva camponesa'],
    ['2022/05/estatua-viva-de-David-evento-corporativo-1-768x529.jpg', 'Estátua viva de David'],
    ['2022/05/estatua-viva-de-David-evento-corporativo-2-768x672.jpg', 'Estátua viva de David em evento'],
    ['2022/05/estatua-viva-chef-de-cozinha-768x576.jpg', 'Chef em estátua viva branca'],
    ['2022/05/estatua-viva-liberdade-branco-personalizado.jpg', 'Estátua da Liberdade em branco'],
    ['2022/05/estatua-viva-personalizada-1.jpg', 'Estátua branca personalizada'],
  ] },
  'Prata Industrial': { label: 'Prata', photos: [
    ['2025/07/Caterpillar-70-anos-3-rotated.jpg', 'Performance no evento Caterpillar 70 anos'],
    ...[4,1,2].map((n): [string,string] => [`2025/07/Caterpillar-70-anos-${n}.jpg`, 'Performance no evento Caterpillar 70 anos']),
    ['2022/05/Estatua-Viva-Prata-Chef-768x1057.jpg', 'Chef prateado'],
    ['2022/05/Estatua-Viva-Prata-Robo-Executivo-768x898.jpg', 'Robô executivo prateado'],
    ['2022/05/Estatua-Viva-Pintor-Feira-Congresso-768x768.jpg', 'Pintor em feira'],
    ['2022/05/Jogador-de-Futebol-768x402.jpg', 'Jogador de futebol'],
    ['2022/05/estatua-viva-presidente-da-republica-evento-corporativo-empresa-festa-de-confraternizacao-final-de-ano-6-1-768x1160.jpg', 'Personagem em evento corporativo'],
    ['2022/05/Estatua-viva-Manequim-Robo-Feira-1-768x509.jpg', 'Robô em feira'],
    ['2022/05/estatua-viva-dancarina-frevo-evento-corporativo-empresa-festa-de-confraternizacao-final-de-ano-1-1-768x1160.jpg', 'Dançarina em evento'],
    ['2022/05/O-italiano-1-768x653.jpg', 'Personagem italiano'],
    ['2022/05/Ninfa-e-Dionisio-festa-debutante-3-768x840.jpg', 'Ninfa e Dionísio em festa'],
    ['2022/05/Ninfa-e-Dionisio-festa-debutante-2.jpg', 'Ninfa e Dionísio'],
    ['2022/05/Ninfa-e-Dionisio-festa-debutante-1.jpg', 'Ninfa e Dionísio em apresentação'],
    ['2022/05/Lancamento-medicamento-laboratorio-famaceutico.jpg', 'Estátua viva em lançamento'],
    ['2022/05/Estatua-viva-prata-ninfa-768x432.jpg', 'Ninfa prateada'],
    ['2022/05/Jogador-de-futebol-e-Discobolo-768x576.jpg', 'Jogador de futebol e discóbolo'],
    ['2022/05/Hermes-768x1148.jpg', 'Personagem Hermes'],
  ] },
  'Ouro Imperial': { label: 'Ouro', photos: [
    ...['2-e1753540896401','4-rotated-e1753540817867','1-rotated-e1753540927900','3-e1753540846431'].map((n): [string,string] => [`2025/07/Deusa-Grega-Grupo-Acelerador-Giant-${n}.jpg`, 'Deusa grega em evento']),
    ['2022/05/Estatua-Viva-ouro-dourado-1.jpg', 'Estátua viva dourada'],
    ['2022/05/Estatua-Viva-ouro-dourado-3-768x576.jpg', 'Performance dourada'],
    ['2022/05/Estatua-Viva-dourado-ouro-13.jpg', 'Estátua viva em ouro'],
    ['2022/05/Estatua-Viva-ouro-dourado-2-768x862.jpg', 'Personagem dourado'],
    ['2022/05/Estatua-Viva-dourado-ouro-2-768x576.jpg', 'Performance de estátua dourada'],
    ['2022/05/Estatua-Viva-Carlos-Drummond-768x509.jpg', 'Estátua viva de Carlos Drummond'],
    ...['1','11-768x554','12','8','6-768x576','10-768x576','3-768x576','15','16','14'].map((n): [string,string] => [`2022/05/Estatua-Viva-dourado-ouro-${n}.jpg`, 'Personagem em dourado']),
  ] },
  'Temáticos & Cosplay': { label: 'Diversas', photos: [
    ...['4-768x1024','6-768x512','3-768x576','5'].map((n): [string,string] => [`2025/07/Caveira-mexicana-Katrina-e-Miguelito-${n}.jpg`, 'Catrina e Miguelito']),
    ...[3,2,1].map((n): [string,string] => [`2025/07/Monet-Le-Reve-Um-Sonho-Imersivo-${n}-768x1150.jpg`, 'Performance na exposição Monet Le Rêve']),
    ...[2,1].map((n): [string,string] => [`2025/07/henkel-loctite-boneco-${n}.jpg`, 'Personagem em ação Loctite']),
    ['2025/07/feira-Piramidal-resinas-termoplasticas-1-e1753541062774.jpg', 'Performance em feira Piramidal'],
    ['2025/07/feira-Piramidal-resinas-termoplasticas-2-rotated.jpg', 'Performance em feira Piramidal'],
    ['2025/07/feira-Piramidal-resinas-termoplasticas-3-rotated.jpg', 'Performance em feira Piramidal'],
    ...['1-768x512','2-768x768','768x512','3'].map((n): [string,string] => [`2025/07/mimicos${n === '768x512' ? '-' : '-'}${n}.jpg`, 'Artistas de mímica em evento']),
    ...[2,1].map((n): [string,string] => [`2025/07/Feira-Pixel-show-Staedtler-${n}-768x1023.jpg`, 'Performance na feira Pixel Show']),
    ['2022/05/O-Pensador-768x1024.jpg', 'Personagem O Pensador'],
    ['2022/05/Estatua-Viva-Bailarina.jpg', 'Estátua viva bailarina'],
    ['2022/05/Estatua-Viva-Tema-Egipcio-Ibis-e-Anubis-4-1-768x509.jpg', 'Personagens de tema egípcio'],
  ] },
};

export default function OriginalPhotoGallery({ category }: { category: string }) {
  const [expanded, setExpanded] = useState(false);
  const gallery = galleries[category];
  if (!gallery) return null;
  const photos = expanded ? gallery.photos : gallery.photos.slice(0, 8);
  return (
    <section className="mt-20 border-t border-[#dfbd7c]/20 pt-12" aria-label={`Galeria de fotos ${gallery.label}`}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#dfbd7c]">Momentos reais</p>
      <h3 className="font-serif text-3xl text-[#f6f1e8] sm:text-4xl">Galeria <span className="italic text-[#e4c184]">{gallery.label}</span></h3>
      <p className="mt-3 max-w-xl text-sm leading-6 text-[#d5d7cf]">Conheça mais apresentações e personagens do nosso acervo.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-5">
        {photos.map(([path, alt]) => (
          <a key={path} href={base + path} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar foto: ${alt}`} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#dfbd7c]/25 bg-[#102329] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">
            <Image src={base + path} alt={alt} fill sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#031014]/55 to-transparent" />
          </a>
        ))}
      </div>
      {gallery.photos.length > 8 && <button type="button" onClick={() => setExpanded(!expanded)} className="mt-8 rounded-full border border-[#dfbd7c]/50 px-6 py-3 text-sm font-medium text-[#f5eee0] transition-colors hover:bg-[#dfbd7c]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">{expanded ? 'Mostrar menos fotos' : `Ver todas as ${gallery.photos.length} fotos`}</button>}
    </section>
  );
}
