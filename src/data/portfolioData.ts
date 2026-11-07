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
    tagline: 'A magnificência da mitologia esculpida em pátina dourada e presença nobre.',
    description: 'Com pintura corporal metálica em tom ouro nobre e figurino drapeado clássico de alta costura, esta intervenção confere imponência e atmosfera mítica imediata.',
    idealFor: 'Casamentos luxuosos, recepções de gala, premiações corporativas e formaturas.',
    details: ['Pintura atóxica metálica de alta aderência', 'Posturas e gestos estatuários de precisão milimétrica', 'Interação solene com convidados para fotografias'],
    imageUrl: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=85',
    highlightText: 'Mais requisitada em eventos sociais de luxo',
  },
  {
    id: 'deusa-espelho-anjos-marmore',
    name: 'Deusa do Espelho & Anjos em Mármore',
    category: 'Mármore Branco',
    tagline: 'Textura mineral de mármore de Carrara com pureza escultural estonteante.',
    description: 'Efeito textural de pedra cinzelada com acabamento acetinado alabastro. O contraste entre os reflexos do espelho e a serenidade do anjo barroco cria momentos de pura poesia visual.',
    idealFor: 'Cerimônias de casamento, bodas, jantares intimistas e bienais de arte.',
    details: ['Efeito craquelado e marmorizado artesanal', 'Asas anatômicas e adereços de inspiração renascentista', 'Iluminação cênica integrada opcional'],
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    highlightText: 'Impacto visual etéreo e atemporal',
  },
  {
    id: 'operario-executivo-prata',
    name: 'Operário & Executivo Metálico',
    category: 'Prata Industrial',
    tagline: 'Estética futurista e industrial com acabamento cromado reluzente.',
    description: 'Desenvolvido com maestria cenográfica para simbolizar precisão, tecnologia e força do trabalho. O reflexo metálico prateado dialoga com estandes modernos de alta tecnologia.',
    idealFor: 'Feiras industriais, congressos de tecnologia, convenções de vendas e logística.',
    details: ['Case de sucesso oficial Caterpillar 70 Anos', 'Figurino customizável com ferramentas cenográficas cromadas', 'Atuação de alto fluxo e retenção em estandes'],
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85',
    caseBadge: 'Case Oficial Caterpillar',
  },
  {
    id: 'catrina-miguelito',
    name: 'Catrina & Miguelito (Día de los Muertos)',
    category: 'Temáticos & Cosplay',
    tagline: 'Exuberância artística folclórica, coroas de flores e riqueza de adereços.',
    description: 'A reverenciada tradição mexicana ganha vida através de figurinos bordados, rendas finas e maquiagem facial artística de nível cinematográfico premiado.',
    idealFor: 'Festas temáticas, eventos de Halloween/Día de los Muertos, festivais culturais e lançamentos.',
    details: ['Maquiagem artística 3D em degradê', 'Acessórios barrocos e flores hiper-realistas', 'Performance magnética com elegância e mistério'],
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
    highlightText: 'Maquiagem artística cinematográfica',
  },
  {
    id: 'capitao-jack-sparrow',
    name: 'Capitão Jack Sparrow Interativo',
    category: 'Temáticos & Cosplay',
    tagline: 'Fidelidade absoluta aos trejeitos, voz e gingado do icônico pirata dos cinemas.',
    description: 'Mais do que uma estátua viva: uma performance que alterna entre a imobilidade de pedestal e a quebra cômica em passos cambaleantes, conquistando adultos e crianças.',
    idealFor: 'Festas corporativas descontraídas, ativações em cinemas, aniversários e festas de fim de ano.',
    details: ['Figurino fidedigno com couro, fivelas e adereços marítimos', 'Trejeitos e sotaque inspirados na franquia cinematográfica', 'Altíssima geração de selfies e engajamento orgânico'],
    imageUrl: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=85',
    highlightText: 'Recorde de engajamento e fotos nas redes',
  },
  {
    id: 'mimica-charles-chaplin',
    name: 'Arte da Mímica & Charles Chaplin',
    category: 'Temáticos & Cosplay',
    tagline: 'A poesia silenciosa da Belle Époque e do cinema mudo que emociona gerações.',
    description: 'Munido de bengala, cartola e sapato largo, o eterno Vagabundo interage de forma sutil, cordial e profundamente poética, desarmando o público com gestos gentis.',
    idealFor: 'Recepções de teatros, premiações literárias, festivais de cinema e eventos corporativos.',
    details: ['Gestual clássico da mímica francesa e comédia física', 'Interação elegante sem uso da palavra falada', 'Ideal para quebra de gelo no acolhimento de convidados'],
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'personagens-historicos',
    name: 'Personagens Históricos & Literatura',
    category: 'Projetos Sob Medida (B2B)',
    tagline: 'Santos Dumont, Drummond de Andrade, Fernando Pessoa e vultos da nossa história.',
    description: 'Recriações com rigor de pesquisa iconográfica histórica. Os personagens parecem ter acabado de descer dos monumentos das praças para conversar com a audiência.',
    idealFor: 'Museus, feiras literárias, bienais, universidades, inaugurações de centros culturais.',
    details: ['Apresentações já realizadas no Museu do Ipiranga e Bienal do Livro', 'Acessórios de época autênticos (óculos, canetas bico de pena, monóculos)', 'Textos e declamações estatuárias adaptáveis'],
    imageUrl: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?auto=format&fit=crop&w=1200&q=85',
    caseBadge: 'Presença Museu do Ipiranga',
  },
  {
    id: 'mascote-produto-custom',
    name: 'Mascote & Produto Vivo Sob Medida',
    category: 'Projetos Sob Medida (B2B)',
    tagline: 'O tubo de cola, a embalagem ou a mascote da sua marca transformados em arte viva.',
    description: 'Desenvolvimento cenográfico do zero: a partir das diretrizes de branding da sua empresa, criamos o figurino escultural, texturas e maquiagem exclusiva com suas cores.',
    idealFor: 'Lançamentos de produtos, estandes em feiras internacionais e ações de Live Marketing.',
    details: ['Cases Henkel/Loctite, Convenção Acelera DPA e Staedtler', 'Fidelidade de pantones corporativos e logotipo integrado', 'Consultoria e ensaios orientados aos objetivos de marketing'],
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85',
    caseBadge: 'Case Loctite & DPA',
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
    question: 'Qual a antecedência recomendada para reserva de data?',
    answer: 'Recomendamos que eventos corporativos, feiras e casamentos façam a reserva com pelo menos 30 a 60 dias de antecedência, especialmente para os meses de alta temporada (maio, setembro, outubro, novembro e dezembro). Para projetos sob medida com confecção cenográfica personalizada, sugerimos de 45 a 90 dias para confecção e ensaios.',
  },
];

export const VIDEOS = [
  {
    id: 'vid-1',
    title: 'Aparição em Rede Nacional — Televisão & Novelas',
    tag: 'Televisão',
    duration: '02:45',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    description: 'Imagens de bastidores e participações especiais em novelas da TV Globo e programas de auditório da TV brasileira.',
    videoSrc: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // Clean embed ready
  },
  {
    id: 'vid-2',
    title: 'Case Caterpillar 70 Anos — Retenção em Feira de Negócios',
    tag: 'Corporativo B2B',
    duration: '01:50',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85',
    description: 'Apresentação da performance de Prata Industrial mobilizando centenas de decisores e visitantes em estande.',
    videoSrc: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'vid-3',
    title: 'Recepção de Gala & Casamento de Alto Padrão',
    tag: 'Casamento & Social',
    duration: '03:10',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    description: 'Entrada solene dos convidados ladeada por Deusas Gregas em Ouro Imperial e Anjos em Mármore Branco.',
    videoSrc: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
];
