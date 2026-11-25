/** Catalogo do acervo de vídeos existentes; não altera o conteúdo original. */
export const videoCatalog = [
  {
    slug: 'novos-personagens-de-natal',
    title: 'Novos Personagens de Natal — Estátua Viva Produções',
    description: 'Apresentação audiovisual do elenco e das caracterizações artísticas da temporada de Natal.',
    file: '/midia/videos/novos-personagens-de-natal.mp4',
    poster: '/brand/hero-bronze.jpg',
  },
  {
    slug: 'convite-artistico-de-natal',
    title: 'Convite Artístico de Natal — Estátua Viva Produções',
    description: 'Vídeo de convite à programação artística natalina da Estátua Viva Produções.',
    file: '/midia/videos/convite-artistico-de-natal.mp4',
    poster: '/brand/perfil-oficial.webp',
  },
  {
    slug: 'natal-pela-perspectiva-do-personagem',
    title: 'Natal pela Perspectiva do Personagem — Estátua Viva Produções',
    description: 'Registro audiovisual com enfoque na perspectiva do personagem durante a apresentação natalina.',
    file: '/midia/videos/natal-pela-perspectiva-do-personagem.mp4',
    poster: '/brand/artista-share.jpg',
  },
] as const;

export const findVideo = (slug: string) => videoCatalog.find(item => item.slug === slug);
