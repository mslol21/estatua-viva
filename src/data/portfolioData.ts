export interface Character {
  id: string;
  name: string;
  category: 'Ouro Imperial' | 'Mármore Branco' | 'Prata Industrial' | 'Temáticos & Cosplay' | 'Projetos Sob Medida (B2B)' | 'Personagens vivos';
  tagline: string;
  description: string;
  idealFor: string;
  details: string[];
  imageUrl: string;
  gallery: string[];
  highlightText?: string;
  caseBadge?: string;
  colorAccent: string;
  specs: {
    duration: string;
    prepTime: string;
    makeup: string;
    interaction: string;
  };
}

export const CHARACTERS: Character[] = [
  {
    id: 'chef-prateado',
    name: 'Chef Prateado',
    category: 'Prata Industrial',
    colorAccent: '#94A3B8',
    tagline: 'A arte da gastronomia em uma performance de estátua viva.',
    description: 'Um chef caracterizado em prata leva criatividade e surpresa a eventos e recepções.',
    idealFor: 'Eventos gastronômicos, recepções e ações especiais.',
    details: ['Caracterização em prata', 'Personagem inspirado na gastronomia', 'Interação com os convidados'],
    imageUrl: '/portfolio/prata.webp',
    gallery: ['/portfolio/prata.webp'],
    specs: { duration: 'A combinar com a produção', prepTime: 'A combinar com a produção', makeup: 'Caracterização prateada', interaction: 'Performance e interação com o público' },
  },
  {
    id: 'estatua-classica-ouro',
    name: 'Estátua Clássica em Ouro',
    category: 'Ouro Imperial',
    colorAccent: '#C5A059',
    tagline: 'Uma figura clássica ganha vida em tons de ouro.',
    description: 'Caracterização artística em dourado para receber e surpreender convidados.',
    idealFor: 'Recepções, eventos culturais e corporativos.',
    details: ['Caracterização em dourado', 'Presença clássica', 'Performance de estátua viva'],
    imageUrl: '/portfolio/ouro.webp',
    gallery: ['/portfolio/ouro.webp'],
    specs: { duration: 'A combinar com a produção', prepTime: 'A combinar com a produção', makeup: 'Caracterização dourada', interaction: 'Performance e interação com o público' },
  },
  {
    id: 'deusa-grega-ouro',
    name: 'Deusa Grega & Clássicos em Ouro',
    category: 'Ouro Imperial',
    colorAccent: '#C5A059',
    tagline: 'A magnificência da mitologia esculpida em pátina dourada e presença nobre.',
    description: 'Com pintura corporal metálica em tom ouro nobre e figurino drapeado clássico de alta costura, esta intervenção confere imponência e atmosfera mítica imediata.',
    idealFor: 'Casamentos luxuosos, recepções de gala, premiações corporativas e formaturas.',
    details: ['Pintura atóxica metálica de alta aderência', 'Posturas e gestos estatuários de precisão milimétrica', 'Interação solene com convidados para fotografias'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2025/07/Deusa-Grega-Grupo-Acelerador-Giant-2-e1753540896401.jpg',
    gallery: [
      'https://estatuaviva.com.br/wp-content/uploads/2025/07/Deusa-Grega-Grupo-Acelerador-Giant-2-e1753540896401.jpg',
      'https://estatuaviva.com.br/wp-content/uploads/2025/07/Deusa-Grega-Grupo-Acelerador-Giant-3-e1753540846431.jpg',
    ],
        specs: {
      duration: 'Entradas de 45 a 60 min com intervalos',
      prepTime: '2h de preparação em camarim',
      makeup: 'Pintura metálica atóxica de alta fixação',
      interaction: 'Recepção solene e poses fotográficas',
    },
  },
  {
    id: 'deusa-espelho-anjos-marmore',
    name: 'Anjo em Branco',
    category: 'Mármore Branco',
    colorAccent: '#F4F1EA',
    tagline: 'A serenidade de um anjo ganha vida em uma performance delicada.',
    description: 'Uma estátua viva em branco, com asas e gestos delicados, leva poesia e encanto para a recepção dos seus convidados.',
    idealFor: 'Cerimônias de casamento, bodas, jantares intimistas e bienais de arte.',
    details: ['Caracterização em branco', 'Figurino com asas', 'Performance de estátua viva'],
    imageUrl: '/portfolio/branca.webp',
    gallery: ['/portfolio/branca.webp'],
    highlightText: 'Impacto visual etéreo e atemporal',
    specs: {
      duration: 'A combinar com a produção',
      prepTime: 'A combinar com a produção',
      makeup: 'Caracterização em branco',
      interaction: 'Gestual lento, reflexivo e etéreo',
    },
  },
  {
    id: 'operario-executivo-prata',
    name: 'Operário & Executivo Metálico',
    category: 'Prata Industrial',
    colorAccent: '#94A3B8',
    tagline: 'Estética futurista e industrial com acabamento cromado reluzente.',
    description: 'Desenvolvido com maestria cenográfica para simbolizar precisão, tecnologia e força do trabalho. O reflexo metálico prateado dialoga com estandes modernos de alta tecnologia.',
    idealFor: 'Feiras industriais, congressos de tecnologia, convenções de vendas e logística.',
    details: ['Case de sucesso oficial Caterpillar 70 Anos', 'Figurino customizável com ferramentas cenográficas cromadas', 'Atuação de alto fluxo e retenção em estandes'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2022/05/Estatua-Viva-Prata-Robo-Executivo-768x898.jpg',
    gallery: [
      'https://estatuaviva.com.br/wp-content/uploads/2022/05/Estatua-Viva-Prata-Robo-Executivo-768x898.jpg',
      'https://estatuaviva.com.br/wp-content/uploads/2022/05/Estatua-viva-Manequim-Robo-Feira-1-768x509.jpg',
    ],
    caseBadge: 'Case Oficial Caterpillar',
    specs: {
      duration: 'Atuação de pico em horários nobres de feira',
      prepTime: '1h45 para cromagem artística',
      makeup: 'Base prateada atóxica de alta durabilidade',
      interaction: 'Retenção e atração de público para estande',
    },
  },
  {
    id: 'catrina-miguelito',
    name: 'Catrina & Miguelito (Día de los Muertos)',
    category: 'Personagens vivos',
    colorAccent: '#E11D48',
    tagline: 'Exuberância artística folclórica, coroas de flores e riqueza de adereços.',
    description: 'A reverenciada tradição mexicana ganha vida através de figurinos bordados, rendas finas e maquiagem facial artística de nível cinematográfico premiado.',
    idealFor: 'Festas temáticas, eventos de Halloween/Día de los Muertos, festivais culturais e lançamentos.',
    details: ['Maquiagem artística 3D em degradê', 'Acessórios barrocos e flores hiper-realistas', 'Performance magnética com elegância e mistério'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2025/07/Caveira-mexicana-Katrina-e-Miguelito-4-768x1024.jpg',
    gallery: [
      'https://estatuaviva.com.br/wp-content/uploads/2025/07/Caveira-mexicana-Katrina-e-Miguelito-4-768x1024.jpg',
      'https://estatuaviva.com.br/wp-content/uploads/2025/07/Caveira-mexicana-Katrina-e-Miguelito-6-768x512.jpg',
    ],
    highlightText: 'Maquiagem artística cinematográfica',
    specs: {
      duration: 'Ciclos de 50 min de interação imersiva',
      prepTime: '2h30 com maquiador visagista',
      makeup: 'Pintura facial 3D resistente ao calor',
      interaction: 'Mistério, elegância e selfies com o público',
    },
  },
  {
    id: 'capitao-jack-sparrow',
    name: 'Capitão Jack Sparrow Interativo',
    category: 'Personagens vivos',
    colorAccent: '#D97706',
    tagline: 'Fidelidade absoluta aos trejeitos, voz e gingado do icônico pirata dos cinemas.',
    description: 'Mais do que uma estátua viva: uma performance que alterna entre a imobilidade de pedestal e a quebra cômica em passos cambaleantes, conquistando adultos e crianças.',
    idealFor: 'Festas corporativas descontraídas, ativações em cinemas, aniversários e festas de fim de ano.',
    details: ['Figurino fidedigno com couro, fivelas e adereços marítimos', 'Trejeitos e sotaque inspirados na franquia cinematográfica', 'Altíssima geração de selfies e engajamento orgânico'],
    imageUrl: '/brand/pirata.webp',
    gallery: [
      '/brand/pirata.webp',
    ],
        specs: {
      duration: 'Atuação contínua e quebras cômicas',
      prepTime: '1h30 para caracterização e peruca',
      makeup: 'Caracterização facial de cinema',
      interaction: 'Humor, sotaque pirata e interação direta',
    },
  },
  {
    id: 'mimica-charles-chaplin',
    name: 'Arte da Mímica & Charles Chaplin',
    category: 'Personagens vivos',
    colorAccent: '#A1A1AA',
    tagline: 'A poesia silenciosa da Belle Époque e do cinema mudo que emociona gerações.',
    description: 'Munido de bengala, cartola e sapato largo, o eterno Vagabundo interage de forma sutil, cordial e profundamente poética, desarmando o público com gestos gentis.',
    idealFor: 'Recepções de teatros, premiações literárias, festivais de cinema e eventos corporativos.',
    details: ['Gestual clássico da mímica francesa e comédia física', 'Interação elegante sem uso da palavra falada', 'Ideal para quebra de gelo no acolhimento de convidados'],
    imageUrl: '/portfolio/diversas.webp',
    gallery: ['/portfolio/diversas.webp'],
    specs: {
      duration: 'Recepção de 1h30 a 2h no acolhimento',
      prepTime: '1h15 para maquiagem monocromática',
      makeup: 'Maquiagem branca e olhos marcados clássicos',
      interaction: 'Gentileza, mímica poética e flores de pano',
    },
  },
  {
    id: 'personagens-historicos',
    name: 'Personagens Históricos & Literatura',
    category: 'Projetos Sob Medida (B2B)',
    colorAccent: '#854D0E',
    tagline: 'Santos Dumont, Drummond de Andrade, Fernando Pessoa e vultos da nossa história.',
    description: 'Recriações com rigor de pesquisa iconográfica histórica. Os personagens parecem ter acabado de descer dos monumentos das praças para conversar com a audiência.',
    idealFor: 'Museus, feiras literárias, bienais, universidades, inaugurações de centros culturais.',
    details: ['Apresentações já realizadas no Museu do Ipiranga e Bienal do Livro', 'Acessórios de época autênticos (óculos, canetas bico de pena, monóculos)', 'Textos e declamações estatuárias adaptáveis'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2022/05/Fernando-Pessoa-768x768.jpg',
    gallery: [
      'https://estatuaviva.com.br/wp-content/uploads/2022/05/Fernando-Pessoa-768x768.jpg',
      'https://estatuaviva.com.br/wp-content/uploads/2022/05/Estatua-Viva-Carlos-Drummond-768x509.jpg',
    ],
    caseBadge: 'Presença Museu do Ipiranga',
    specs: {
      duration: 'Entradas com textos e estátua cênica',
      prepTime: '2h de visagismo de época',
      makeup: 'Envelhecimento cênico e bronze estatuário',
      interaction: 'Declamações poéticas e poses de pedestal',
    },
  },
  {
    id: 'mascote-produto-custom',
    name: 'Mascote & Produto Vivo Sob Medida',
    category: 'Projetos Sob Medida (B2B)',
    colorAccent: '#0D9488',
    tagline: 'O tubo de cola, a embalagem ou a mascote da sua marca transformados em arte viva.',
    description: 'Desenvolvimento cenográfico do zero: a partir das diretrizes de branding da sua empresa, criamos o figurino escultural, texturas e maquiagem exclusiva com suas cores.',
    idealFor: 'Lançamentos de produtos, estandes em feiras internacionais e ações de Live Marketing.',
    details: ['Cases Henkel/Loctite, Convenção Acelera DPA e Staedtler', 'Fidelidade de pantones corporativos e logotipo integrado', 'Consultoria e ensaios orientados aos objetivos de marketing'],
    imageUrl: 'https://estatuaviva.com.br/wp-content/uploads/2025/07/henkel-loctite-boneco-2.jpg',
    gallery: [
      'https://estatuaviva.com.br/wp-content/uploads/2025/07/henkel-loctite-boneco-2.jpg',
    ],
    caseBadge: 'Case Loctite & DPA',
    specs: {
      duration: 'Alinhada à programação do evento / lançamento',
      prepTime: 'Desenvolvimento prévio em atelier de 15 a 30 dias',
      makeup: 'Personalizada com os pantones da empresa',
      interaction: 'Performance voltada aos objetivos de marketing',
    },
  },
];

export const CLIENT_STORIES = [
  { name: 'Rede Globo', role: 'Novela As Três Graças, Jô Soares & Faustão', tag: 'Televisão Aberta' },
  { name: 'Rede Record', role: 'Participações no Programa Eliana', tag: 'Emissora Nacional' },
  { name: 'Caterpillar', role: 'Comemoração Solene de 70 Anos no Brasil', tag: 'Indústria Pesada' },
  { name: 'Henkel & Loctite', role: 'Ativação Interativa Customizada em Feira B2B', tag: 'Multinacional Química' },
  { name: 'Staedtler', role: 'Intervenção Artística na Feira Pixel Show', tag: 'Material Artístico' },
  { name: 'Museu do Ipiranga', role: 'Performances com Vultos da História Nacional', tag: 'Patrimônio Histórico' },
  { name: 'Monet Le Rêve', role: 'Ativações na Imersão de Arte Internacional', tag: 'Exposição Cultural' },
  { name: 'Piramidal Plásticos', role: 'Recepção de Gala na Feira Feiplastic', tag: 'Petroquímica & Plásticos' },
];

export const TESTIMONIALS = [
  {
    author: 'Mariana Silveira',
    company: 'Diretora de Eventos Corporativos',
    event: 'Convenção de Vendas 2024',
    rating: 5,
    text: 'A contratação da Estátua Viva Produções foi o ponto alto do nosso estande. As pessoas ficavam em dúvida se era um manequim ou uma pessoa real até o momento sutil do movimento. Gerou filas de fotos e triplicou o fluxo no nosso espaço.',
    date: 'Fevereiro 2024',
  },
  {
    author: 'Carlos Eduardo Fontes',
    company: 'Noivo',
    event: 'Casamento no Espaço Villa Vérico',
    rating: 5,
    text: 'Queríamos uma recepção inesquecível para nossos convidados e a Deusa Grega em Ouro superou qualquer expectativa. A elegância, a postura impecável e a gentileza do artista fizeram todos comentarem até hoje sobre a experiência.',
    date: 'Novembro 2023',
  },
  {
    author: 'Renata Albuquerque',
    company: 'Gerente de Trade Marketing B2B',
    event: 'Feira Industrial São Paulo Expo',
    rating: 5,
    text: 'O Rodolfo Valentino e toda a equipe demonstraram um profissionalismo ímpar: pontualidade britânica, camarim impecável e uma caracterização que parecia de filme de Hollywood. Vale cada centavo.',
    date: 'Outubro 2024',
  },
];

export const FAQS = [
  {
    question: 'Como funciona a dinâmica das estátuas vivas durante o evento?',
    answer: 'Nossas apresentações são estruturadas em ciclos cênicos calculados para máximo impacto: o artista mantém a postura de imobilidade escultural perfeita e, em momentos milimetricamente pontuados — ou quando um convidado se aproxima para admirar ou tirar foto —, realiza movimentos sutis, gentis e cheios de poesia. Os períodos de performance geralmente duram de 45 a 60 minutos por entrada, com intervalos adequados para retoque e hidratação.',
  },
  {
    question: 'É possível personalizar o figurino com a marca ou produto da minha empresa?',
    answer: 'Sim, este é um dos nossos maiores diferenciais de mercado. Através da nossa divisão de Projetos Sob Medida (B2B), nosso atelier cenográfico desenvolve maquiagens, adereços e figurinos exclusivos integrando as cores, paleta Pantone, embalagens ou até réplicas fiéis de mascotes e produtos da sua marca, como já realizamos com sucesso para Loctite, Caterpillar e Staedtler.',
  },
  {
    question: 'Vocês atendem fora da capital de São Paulo?',
    answer: 'Com certeza. Embora nossa sede artística esteja localizada no Tatuapé (São Paulo - SP), possuímos logística estruturada para atender eventos em todo o estado de São Paulo, litoral, interior e em capitais de todo o território brasileiro, incluindo transporte de adereços, maquiagem especializada e elenco.',
  },
  {
    question: 'Como solicitar um orçamento de estátua viva ou personagem?',
    answer: 'Informe a data, a cidade, o tipo de evento, o público esperado e a ideia de personagem ou performance. A produção avalia disponibilidade, formato artístico, necessidades técnicas e logística antes de apresentar a proposta.',
  },
  {
    question: 'Quanto tempo dura uma apresentação de estátua viva?',
    answer: 'A duração e os intervalos dependem do personagem, do formato do evento e das condições de apresentação. A programação é definida na proposta, considerando conforto do artista, interação com o público e necessidades da produção.',
  },
  {
    question: 'Quais condições o espaço precisa oferecer para a apresentação?',
    answer: 'A equipe orienta sobre área de atuação, circulação do público, preparação e apoio ao artista conforme o formato contratado. Em feiras, recepções e eventos externos, os detalhes são alinhados previamente com o organizador.',
  },
  {
    question: 'É possível criar personagens para uma feira, marca ou tema específico?',
    answer: 'Sim. O briefing pode incluir referências visuais, cores, identidade da marca e objetivo do evento. A viabilidade, o prazo e os custos de criação são avaliados individualmente.',
  },
  {
    question: 'A empresa possui atendimento presencial no Tatuapé?',
    answer: 'A base de produção fica na região do Tatuapé, em São Paulo. O atendimento comercial é realizado de forma remota e as performances acontecem no local contratado, em São Paulo e outras regiões do Brasil, mediante disponibilidade.',
  },
  {
    question: 'Qual a antecedência recomendada para reserva de data?',
    answer: 'Recomendamos que eventos corporativos, feiras e casamentos façam a reserva com pelo menos 30 a 60 dias de antecedência, especialmente para os meses de alta temporada (maio, setembro, outubro, novembro e dezembro). Para projetos sob medida com confecção cenográfica personalizada, sugerimos de 45 a 90 dias para confecção e ensaios.',
  },
];
