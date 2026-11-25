/**
 * Catálogo de fotos do arquivo estatuaviva.rar (25/11/2026).
 * Somente materiais reais fornecidos pela produção. Pastas com arquivos pendentes
 * são detectadas no servidor; enquanto não estiverem no repo, usamos imagens reais
 * já publicadas, evitando requisições 404 e fotos artificiais.
 */
import fs from 'node:fs';
import path from 'node:path';

export type ArchiveCategory = 'bailarina' | 'esculturas' | 'quadros-vivos' | 'corporativos' | 'culturais' | 'personagens' | 'bastidores';
export type ArchivePhoto = { src: string; title: string; alt: string; category: ArchiveCategory; caption: string; kind?: 'editorial' | 'artwork' };
const fromArchive = (slug: string) => `/images/acervo-2026/${slug}.webp`;
const item = (slug: string, title: string, category: ArchiveCategory, caption: string, kind: 'editorial' | 'artwork' = 'artwork'): ArchivePhoto =>
  ({ src: fromArchive(slug), title, category, alt: title + ' — foto real do acervo da Estátua Viva Produções', caption, kind });

export const newArchivePhotos: ArchivePhoto[] = [
  item('dupla-esculturas-recepcao','Dupla Escultural','esculturas','Dois artistas caracterizados em uma composição de recepção'),
  item('personagem-classico-uvas','Personagem Clássico','esculturas','Detalhe de figurino clássico com elementos de uvas'),
  item('dupla-catrinas-tematicas','Catrinas Temáticas','personagens','Caracterizações temáticas com maquiagem e flores'),
  item('bailarina-prateada-espelhos-pose-baixa','Bailarina Prateada — Pose Escultural','bailarina','Pose baixa diante de espelhos'),
  item('bailarina-prateada-espelhos-em-pe','Bailarina Prateada — Movimento','bailarina','Pose em pé com reflexos em espelhos'),
  item('bailarina-prateada-cenario-dourado','Bailarina Prateada — Luz Dourada','bailarina','Composição artística com iluminação dourada'),
  item('bailarina-prateada-cenario-violeta','Bailarina Prateada — Luz Violeta','bailarina','Composição artística com iluminação violeta'),
  item('escultura-pedra-ensaio-cenografico','Escultura em Pedra','esculturas','Caracterização cinza em cenário escultural'),
  item('escultura-pedra-lira','Escultura com Lira','esculturas','Personagem com estrutura de pedra e lira dourada'),
  item('quadro-vivo-cena-com-fonte','Quadro Vivo — Fonte','quadros-vivos','Composição cênica com personagem e fonte'),
  item('quadro-vivo-pintura-paisagem','Quadro Vivo — Paisagem','quadros-vivos','Personagem inserida em composição de pintura'),
  item('quadro-vivo-ateliê','Quadro Vivo — Ateliê','quadros-vivos','Cena artística em ambiente de ateliê'),
  item('quadro-vivo-moldura-pintura','Quadro Vivo — Moldura','quadros-vivos','Performance com moldura e pintura'),
  item('personagens-estatuas-verdes-rua','Personagens Verdes em Espaço Aberto','culturais','Intervenção artística registrada em área externa','editorial'),
  item('grupo-performers-dourados-palco','Elenco Dourado no Palco','corporativos','Performance coletiva com figurinos dourados em palco','editorial'),
  item('personagem-fantastico-escuro','Personagem Fantástico','personagens','Caracterização cênica com asas'),
  item('personagem-fantastico-cenario','Personagem em Cenário Temático','personagens','Figura fantástica em ambiente de apresentação'),
  item('personagens-alados-area-publica','Personagens Alados','culturais','Apresentação de personagens alados em espaço aberto','editorial'),
  item('elenco-estatuas-grupo-externo','Elenco Escultural','bastidores','Grupo de artistas em caracterização escultural','editorial'),
  item('trio-esculturas-externo','Trio Escultural','culturais','Três artistas caracterizados em área externa','editorial'),
  item('preparacao-artistas-cena','Preparação de Elenco','bastidores','Registros de caracterização antes da apresentação','editorial'),
  item('caracterizacao-close','Detalhes de Maquiagem','bastidores','Detalhe da maquiagem artística','editorial'),
  item('bastidores-ensaio-espaco-cultural','Registro de Ensaio','bastidores','Preparação do espaço e da composição cênica','editorial'),
  item('personagem-cartola-bastidores','Personagem em Preparação','bastidores','Caracterização temática em andamento','editorial'),
];

const existingFallback: ArchivePhoto[] = [
  { src: '/images/fim-de-ano/escultura_prata_nova.webp', title: 'Bailarina Prateada', category:'bailarina', alt:'Bailarina prateada em composição com espelhos',caption:'Acervo de performances esculturais' },
  { src: '/images/fim-de-ano/escultura_cenografica_nova.webp', title: 'Bailarina Prateada — Luz Cênica', category:'bailarina', alt:'Bailarina prateada com moldura iluminada',caption:'Fotografia do acervo artístico' },
  { src: '/images/fim-de-ano/escultura_dupla_nova.webp', title: 'Dupla Escultural', category:'esculturas',alt:'Dupla de estátuas vivas',caption:'Composição artística de recepção' },
  { src: '/images/estatuas-vivas/estatua-viva-musa-lira-ouro.webp', title: 'Musa com Lira', category:'esculturas',alt:'Estátua viva dourada com lira',caption:'Escultura viva de inspiração clássica' },
  { src: '/images/personagens/monet-le-reve-um-sonho-imersivo-1-768x1150.webp', title: 'Quadro Vivo',category:'quadros-vivos',alt:'Personagem em composição artística de pintura',caption:'Experiência de arte viva' },
  { src: '/images/personagens/monet-le-reve-um-sonho-imersivo-2-768x1150.webp', title: 'Performance Imersiva',category:'quadros-vivos',alt:'Registro de apresentação artística temática',caption:'Composição inspirada em artes visuais' },
  { src: '/images/cases/recepcao-gala-dionisio-cafu.webp', title: 'Recepção de Gala',category:'corporativos',alt:'Estátua viva em recepção de evento',caption:'Registro de evento',kind:'editorial' },
  { src: '/images/confraternizacoes/ninfa-e-dionisio-festa-debutante-1.webp', title: 'Dupla em Recepção',category:'corporativos',alt:'Dupla de estátuas vivas em recepção',caption:'Registro de evento',kind:'editorial' },
  { src: '/images/estatuas-vivas/estatua-viva-colheita-terracota.webp', title: 'Arte Escultural',category:'culturais',alt:'Estátua viva com figurino terracota',caption:'Personagem do repertório artístico' },
  { src: '/images/estatuas-vivas/estatua-viva-anjo-branco-1.webp', title: 'Personagem Alado',category:'culturais',alt:'Estátua viva branca com asas',caption:'Repertório artístico para projetos culturais' },
  { src: '/images/personagens/caveira-mexicana-katrina-e-miguelito-4-768x1024.webp', title: 'Catrinas',category:'personagens',alt:'Personagens Catrinas com caracterização temática',caption:'Personagens temáticos' },
  { src: '/images/personagens/mimicos-1-768x512.webp', title: 'Mímicos',category:'personagens',alt:'Mímicos em apresentação',caption:'Intervenções e personagens temáticos',kind:'editorial' },
];

export const galleryCategories: { key:ArchiveCategory; title:string; description:string }[] = [
  {key:'bailarina',title:'Bailarina Prateada',description:'Diferentes poses e composições da mesma personagem'},
  {key:'esculturas',title:'Esculturas Vivas',description:'Personagens esculturais, pedra, ouro e composições clássicas'},
  {key:'quadros-vivos',title:'Quadros Vivos',description:'Composições cênicas e referências às artes visuais'},
  {key:'corporativos',title:'Recepções e Palco',description:'Performances e presenças artísticas em eventos'},
  {key:'culturais',title:'Arte em Espaços Culturais',description:'Elenco, personagens e intervenções em ambientes abertos'},
  {key:'personagens',title:'Personagens Temáticos',description:'Caracterizações especiais para projetos e eventos'},
  {key:'bastidores',title:'Processo Criativo',description:'Ensaios, maquiagem e preparação do elenco'},
];

export function getAvailableArchivePhotos(category: ArchiveCategory): ArchivePhoto[] {
  const uploaded = newArchivePhotos.filter(p => p.category === category && fs.existsSync(path.join(process.cwd(), 'public', p.src.slice(1))));
  return uploaded.length ? uploaded : existingFallback.filter(p=>p.category===category);
}
