export interface Character {
  id: string;
  name: string;
  category: 'Ouro Imperial' | 'Mármore Branco' | 'Prata Industrial' | 'Temáticos & Cosplay' | 'Projetos Sob Medida (B2B)';
  tagline: string;
  description: string;
  idealFor: string;
  details: string[];
  imageUrl: string;
  highlightText?: string;
  caseBadge?: string;
}

export const CHARACTERS: Character[] = [
  {
    id: 'deusa-grega-ouro',
    name: 'Deusa Grega & Clássicos em Ouro',
    category: 'Ouro Imperial',
    tagline: 'Figuras clássicas e acabamento dourado para uma recepção marcante.',
    description: 'Pintura metálica e figurinos de inspiração clássica compõem uma presença artística para recepções e celebrações.',
    idealFor: 'Casamentos luxuosos, recepções de gala, premiações corporativas e formaturas.',
    details: ['Caracterização com acabamento metálico', 'Gestos e posturas inspirados em esculturas', 'Interação solene com convidados para fotografias'],
    imageUrl: '',
  },
  {
    id: 'deusa-espelho-anjos-marmore',
    name: 'Deusa do Espelho & Anjos em Mármore',
    category: 'Mármore Branco',
    tagline: 'Figuras em branco e inspiração escultural para momentos especiais.',
    description: 'Efeito textural de pedra cinzelada com acabamento acetinado alabastro. O contraste entre os reflexos do espelho e a serenidade do anjo barroco cria momentos de pura poesia visual.',
    idealFor: 'Cerimônias de casamento, bodas, jantares intimistas e bienais de arte.',
    details: ['Efeito craquelado e marmorizado artesanal', 'Asas anatômicas e adereços de inspiração renascentista', 'Iluminação cênica integrada opcional'],
    imageUrl: '',
  },
  {
    id: 'operario-executivo-prata',
    name: 'Operário & Executivo Metálico',
    category: 'Prata Industrial',
    tagline: 'Estética futurista e industrial com acabamento cromado reluzente.',
    description: 'Desenvolvido com maestria cenográfica para simbolizar precisão, tecnologia e força do trabalho. O reflexo metálico prateado dialoga com estandes modernos de alta tecnologia.',
    idealFor: 'Feiras industriais, congressos de tecnologia, convenções de vendas e logística.',
    details: ['Conceito industrial para eventos corporativos', 'Figurino customizável com ferramentas cenográficas cromadas', 'Atuação de alto fluxo e retenção em estandes'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2022/05/Estatua-Viva-Prata-Robo-Executivo-768x898.jpg',
  },
  {
    id: 'catrina-miguelito',
    name: 'Catrina & Miguelito (Día de los Muertos)',
    category: 'Temáticos & Cosplay',
    tagline: 'Exuberância artística folclórica, coroas de flores e riqueza de adereços.',
    description: 'Personagens inspirados na tradição mexicana, com figurinos, flores e maquiagem artística para eventos temáticos.',
    idealFor: 'Festas temáticas, eventos de Halloween/Día de los Muertos, festivais culturais e lançamentos.',
    details: ['Caracterização artística temática', 'Acessórios barrocos e flores hiper-realistas', 'Performance magnética com elegância e mistério'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2025/07/Caveira-mexicana-Katrina-e-Miguelito-4-768x1024.jpg',
  },
  {
    id: 'capitao-jack-sparrow',
    name: 'Capitão Jack Sparrow Interativo',
    category: 'Temáticos & Cosplay',
    tagline: 'Um pirata cheio de personalidade para surpreender os convidados.',
    description: 'Mais do que uma estátua viva: uma performance que alterna entre a imobilidade de pedestal e a quebra cômica em passos cambaleantes, conquistando adultos e crianças.',
    idealFor: 'Festas corporativas descontraídas, ativações em cinemas, aniversários e festas de fim de ano.',
    details: ['Figurino e adereços de inspiração pirata', 'Trejeitos e sotaque inspirados na franquia cinematográfica', 'Interação e momentos para fotografias'],
    imageUrl: '/brand/pirata.webp',
  },
  {
    id: 'mimica-charles-chaplin',
    name: 'Arte da Mímica & Charles Chaplin',
    category: 'Temáticos & Cosplay',
    tagline: 'A poesia silenciosa da Belle Époque e do cinema mudo que emociona gerações.',
    description: 'Munido de bengala, cartola e sapato largo, o eterno Vagabundo interage de forma sutil, cordial e profundamente poética, desarmando o público com gestos gentis.',
    idealFor: 'Recepções de teatros, premiações literárias, festivais de cinema e eventos corporativos.',
    details: ['Gestual clássico da mímica francesa e comédia física', 'Interação elegante sem uso da palavra falada', 'Ideal para quebra de gelo no acolhimento de convidados'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2022/05/Charles-Chaplin-2.jpg',
  },
  {
    id: 'personagens-historicos',
    name: 'Personagens Históricos & Literatura',
    category: 'Projetos Sob Medida (B2B)',
    tagline: 'Santos Dumont, Drummond de Andrade, Fernando Pessoa e vultos da nossa história.',
    description: 'Recriações com rigor de pesquisa iconográfica histórica. Os personagens parecem ter acabado de descer dos monumentos das praças para conversar com a audiência.',
    idealFor: 'Museus, feiras literárias, bienais, universidades, inaugurações de centros culturais.',
    details: ['Personagens inspirados na história e na literatura', 'Acessórios de época autênticos (óculos, canetas bico de pena, monóculos)', 'Textos e declamações estatuárias adaptáveis'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2022/05/Fernando-Pessoa-768x768.jpg',
  },
  {
    id: 'mascote-produto-custom',
    name: 'Mascote & Produto Vivo Sob Medida',
    category: 'Projetos Sob Medida (B2B)',
    tagline: 'O tubo de cola, a embalagem ou a mascote da sua marca transformados em arte viva.',
    description: 'Desenvolvimento cenográfico do zero: a partir das diretrizes de branding da sua empresa, criamos o figurino escultural, texturas e maquiagem exclusiva com suas cores.',
    idealFor: 'Lançamentos de produtos, estandes em feiras internacionais e ações de Live Marketing.',
    details: ['Criação alinhada à identidade da marca', 'Fidelidade de pantones corporativos e logotipo integrado', 'Consultoria e ensaios orientados aos objetivos de marketing'],
    imageUrl: '',
  },
];

export const FAQS = [
  { question: 'Como funciona a apresentação?', answer: 'O artista combina imobilidade, movimentos e interação com o público. O formato, a duração das entradas e os intervalos são definidos com a produção de acordo com o personagem e a programação do evento.' },
  { question: 'Posso solicitar um personagem ou figurino personalizado?', answer: 'Sim. Conte sua ideia para a produção. A viabilidade, os materiais, o prazo de criação e a proposta são avaliados para cada projeto.' },
  { question: 'O que preciso informar para pedir um orçamento?', answer: 'Informe a data, a cidade, o tipo de evento e o personagem ou estilo desejado. Se possível, inclua o horário e a quantidade estimada de convidados para que a produção possa preparar uma proposta.' },
  { question: 'Com qual antecedência devo entrar em contato?', answer: 'Entre em contato assim que tiver a data prevista. A disponibilidade depende da agenda do elenco e do tempo necessário para preparar cada proposta.' },
];
