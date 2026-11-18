'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleries: Record<string, { label: string; photos: [string, string][] }> = {
  "Mármore Branco": {
    "label": "Branca",
    "photos": [
      [
        "/images/estatuas-vivas/deusa-do-espelho-2-768x768.webp",
        "Deusa do espelho em branco"
      ],
      [
        "/images/estatuas-vivas/deusa-do-espelho-1-768x768.webp",
        "Deusa do espelho em evento"
      ],
      [
        "/images/portfolio/campanha-cancer-de-cabeca-2-rotated.webp",
        "Estátua branca em campanha"
      ],
      [
        "/images/portfolio/campanha-cancer-de-cabeca-1-rotated.webp",
        "Estátua branca em evento"
      ],
      [
        "/images/portfolio/hera-lancamento-marca-2-768x768.webp",
        "Personagem Hera em lançamento"
      ],
      [
        "/images/portfolio/hera-lancamento-marca-1-768x768.webp",
        "Personagem Hera"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-romeu-1.webp",
        "Estátua viva clássica em branco"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-5.webp",
        "Anjo branco em apresentação 5"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-2-768x576.webp",
        "Anjo branco em apresentação 2"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-1.webp",
        "Anjo branco em apresentação 1"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-7-768x576.webp",
        "Anjo branco em apresentação 7"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-9.webp",
        "Anjo branco em apresentação 9"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-10.webp",
        "Anjo branco em apresentação 10"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-8-768x511.webp",
        "Anjo branco em apresentação 8"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-3.webp",
        "Anjo branco em apresentação 3"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-anjo-branco-4-768x598.webp",
        "Anjo branco em apresentação 4"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-camponesa-768x576.webp",
        "Estátua viva camponesa"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-de-david-evento-corporativo-1-768x529.webp",
        "Estátua viva de David"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-de-david-evento-corporativo-2-768x672.webp",
        "Estátua viva de David em evento"
      ],
      [
        "/images/portfolio/estatua-viva-chef-de-cozinha-768x576.webp",
        "Chef em estátua viva branca"
      ],
      [
        "/images/portfolio/estatua-viva-liberdade-branco-personalizado.webp",
        "Estátua da Liberdade em branco"
      ],
      [
        "/images/portfolio/estatua-viva-personalizada-1.webp",
        "Estátua branca personalizada"
      ]
    ]
  },
  "Prata Industrial": {
    "label": "Prata",
    "photos": [
      [
        "/images/cases/caterpillar-70-anos-3-rotated.webp",
        "Performance no evento Caterpillar 70 anos"
      ],
      [
        "/images/cases/caterpillar-70-anos-4.webp",
        "Performance no evento Caterpillar 70 anos"
      ],
      [
        "/images/cases/caterpillar-70-anos-1.webp",
        "Performance no evento Caterpillar 70 anos"
      ],
      [
        "/images/cases/caterpillar-70-anos-2.webp",
        "Performance no evento Caterpillar 70 anos"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-prata-chef-768x1057.webp",
        "Chef prateado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-prata-robo-executivo-768x898.webp",
        "Robô executivo prateado"
      ],
      [
        "/images/corporativo/estatua-viva-pintor-feira-congresso-768x768.webp",
        "Pintor em feira"
      ],
      [
        "/images/portfolio/jogador-de-futebol-768x402.webp",
        "Jogador de futebol"
      ],
      [
        "/images/confraternizacoes/estatua-viva-presidente-da-republica-evento-corporativo-empresa-festa-de-confraternizacao-final-de-ano-6-1-768x1160.webp",
        "Personagem em evento corporativo"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-manequim-robo-feira-1-768x509.webp",
        "Robô em feira"
      ],
      [
        "/images/confraternizacoes/estatua-viva-dancarina-frevo-evento-corporativo-empresa-festa-de-confraternizacao-final-de-ano-1-1-768x1160.webp",
        "Dançarina em evento"
      ],
      [
        "/images/portfolio/o-italiano-1-768x653.webp",
        "Personagem italiano"
      ],
      [
        "/images/confraternizacoes/ninfa-e-dionisio-festa-debutante-3-768x840.webp",
        "Ninfa e Dionísio em festa"
      ],
      [
        "/images/confraternizacoes/ninfa-e-dionisio-festa-debutante-2.webp",
        "Ninfa e Dionísio"
      ],
      [
        "/images/confraternizacoes/ninfa-e-dionisio-festa-debutante-1.webp",
        "Ninfa e Dionísio em apresentação"
      ],
      [
        "/images/portfolio/lancamento-medicamento-laboratorio-famaceutico.webp",
        "Estátua viva em lançamento"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-prata-ninfa-768x432.webp",
        "Ninfa prateada"
      ],
      [
        "/images/estatuas-vivas/jogador-de-futebol-e-discobolo-768x576.webp",
        "Jogador de futebol e discóbolo"
      ],
      [
        "/images/estatuas-vivas/hermes-768x1148.webp",
        "Personagem Hermes"
      ]
    ]
  },
  "Ouro Imperial": {
    "label": "Ouro",
    "photos": [
      [
        "/images/estatuas-vivas/deusa-grega-grupo-acelerador-giant-2-e1753540896401.webp",
        "Deusa grega em evento"
      ],
      [
        "/images/estatuas-vivas/deusa-grega-grupo-acelerador-giant-4-rotated-e1753540817867.webp",
        "Deusa grega em evento"
      ],
      [
        "/images/estatuas-vivas/deusa-grega-grupo-acelerador-giant-1-rotated-e1753540927900.webp",
        "Deusa grega em evento"
      ],
      [
        "/images/estatuas-vivas/deusa-grega-grupo-acelerador-giant-3-e1753540846431.webp",
        "Deusa grega em evento"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-ouro-dourado-1.webp",
        "Estátua viva dourada"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-ouro-dourado-3-768x576.webp",
        "Performance dourada"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-13.webp",
        "Estátua viva em ouro"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-ouro-dourado-2-768x862.webp",
        "Personagem dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-2-768x576.webp",
        "Performance de estátua dourada"
      ],
      [
        "/images/portfolio/estatua-viva-carlos-drummond-768x509.webp",
        "Estátua viva de Carlos Drummond"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-1.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-11-768x554.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-12.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-8.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-6-768x576.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-10-768x576.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-3-768x576.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-15.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-16.webp",
        "Personagem em dourado"
      ],
      [
        "/images/estatuas-vivas/estatua-viva-dourado-ouro-14.webp",
        "Personagem em dourado"
      ]
    ]
  },
  "Temáticos & Cosplay": {
    "label": "Diversas",
    "photos": [
      [
        "/images/personagens/caveira-mexicana-katrina-e-miguelito-4-768x1024.webp",
        "Catrina e Miguelito"
      ],
      [
        "/images/personagens/caveira-mexicana-katrina-e-miguelito-6-768x512.webp",
        "Catrina e Miguelito"
      ],
      [
        "/images/personagens/caveira-mexicana-katrina-e-miguelito-3-768x576.webp",
        "Catrina e Miguelito"
      ],
      [
        "/images/personagens/caveira-mexicana-katrina-e-miguelito-5.webp",
        "Catrina e Miguelito"
      ],
      [
        "/images/personagens/monet-le-reve-um-sonho-imersivo-3-768x1150.webp",
        "Performance na exposição Monet Le Rêve"
      ],
      [
        "/images/personagens/monet-le-reve-um-sonho-imersivo-2-768x1150.webp",
        "Performance na exposição Monet Le Rêve"
      ],
      [
        "/images/personagens/monet-le-reve-um-sonho-imersivo-1-768x1150.webp",
        "Performance na exposição Monet Le Rêve"
      ],
      [
        "/images/cases/henkel-loctite-boneco-2.webp",
        "Personagem em ação Loctite"
      ],
      [
        "/images/cases/henkel-loctite-boneco-1.webp",
        "Personagem em ação Loctite"
      ],
      [
        "/images/cases/feira-piramidal-resinas-termoplasticas-1-e1753541062774.webp",
        "Performance em feira Piramidal"
      ],
      [
        "/images/cases/feira-piramidal-resinas-termoplasticas-2-rotated.webp",
        "Performance em feira Piramidal"
      ],
      [
        "/images/cases/feira-piramidal-resinas-termoplasticas-3-rotated.webp",
        "Performance em feira Piramidal"
      ],
      [
        "/images/personagens/mimicos-1-768x512.webp",
        "Artistas de mímica em evento"
      ],
      [
        "/images/personagens/mimicos-2-768x768.webp",
        "Artistas de mímica em evento"
      ],
      [
        "/images/personagens/mimicos-768x512.webp",
        "Artistas de mímica em evento"
      ],
      [
        "/images/personagens/mimicos-3.webp",
        "Artistas de mímica em evento"
      ],
      [
        "/images/cases/feira-pixel-show-staedtler-2-768x1023.webp",
        "Performance na feira Pixel Show"
      ],
      [
        "/images/cases/feira-pixel-show-staedtler-1-768x1023.webp",
        "Performance na feira Pixel Show"
      ],
      [
        "/images/personagens/o-pensador-768x1024.webp",
        "Personagem O Pensador"
      ],
      [
        "/images/personagens/estatua-viva-bailarina.webp",
        "Estátua viva bailarina"
      ],
      [
        "/images/personagens/estatua-viva-tema-egipcio-ibis-e-anubis-4-1-768x509.webp",
        "Personagens de tema egípcio"
      ]
    ]
  }
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
          <a key={path} href={path} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar foto: ${alt}`} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#dfbd7c]/25 bg-[#102329] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">
            <Image src={path} alt={alt} fill sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#031014]/55 to-transparent" />
          </a>
        ))}
      </div>
      {gallery.photos.length > 8 && (
        <button type="button" onClick={() => setExpanded(!expanded)} className="mt-8 rounded-full border border-[#dfbd7c]/50 px-6 py-3 text-sm font-medium text-[#f5eee0] transition-colors hover:bg-[#dfbd7c]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d49a]">
          {expanded ? 'Mostrar menos fotos' : `Ver todas as ${gallery.photos.length} fotos`}
        </button>
      )}
    </section>
  );
}
