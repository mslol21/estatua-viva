import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL } from '@/lib/site-config';
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Calendar,
  MapPin,
  Clock,
  Layers,
  ChevronRight,
  Camera,
} from 'lucide-react';

const base = SITE_URL;

interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  deepDescription: string;
  gallery: { src: string; alt: string; caption: string }[];
  characterHighlights: { name: string; category: string; description: string }[];
  benefits: { title: string; desc: string }[];
  hiringSteps: { step: string; title: string; desc: string }[];
  whatsappMessage: string;
  questions: { q: string; a: string }[];
}

const services: Record<string, ServiceDetail> = {
  'estatua-viva-para-eventos': {
    slug: 'estatua-viva-para-eventos',
    title: 'Estátuas Vivas para Eventos em São Paulo e Brasil | EV',
    description: 'Contrate estátuas vivas e personagens performáticos para recepções, eventos sociais, feiras e celebrações em todo o Brasil com a Estátua Viva Produções.',
    eyebrow: 'Recepções de Alto Padrão · Atendimento Nacional',
    heading: 'Estátuas vivas para eventos e celebrações memoráveis',
    intro:
      'Uma intervenção artística que combina o rigor da imobilidade escultural com movimentos sutis e interações surpreendentes, transformando o acolhimento do seu evento em uma experiência inesquecível.',
    deepDescription:
      'Desde 2005, sob a direção artística de Rodolfo Valentino, a Estátua Viva Produções desenvolve performances esculturais para eventos sociais, comemorações empresariais e ações culturais. Nossos artistas criam um ponto nobre de atração visual logo na entrada do espaço, proporcionando fotografias memoráveis e um encantamento imediato para convidados de todas as idades.',
    gallery: [
      {
        src: '/portfolio/ouro.webp',
        alt: 'Estátua viva clássica em ouro imperial para recepção solene',
        caption: 'Ouro Imperial — Solenidade e requinte',
      },
      {
        src: '/portfolio/branca.webp',
        alt: 'Estátua viva em mármore branco escultural',
        caption: 'Mármore Branco — Poesia renascentista',
      },
      {
        src: '/portfolio/prata.webp',
        alt: 'Estátua viva prateada para eventos modernos e feiras',
        caption: 'Prata Industrial — Vanguardismo e tecnologia',
      },
      {
        src: '/portfolio/diversas.webp',
        alt: 'Personagens temáticos e figurinos artísticos do acervo',
        caption: 'Temáticos & Lúdicos — Versatilidade cenográfica',
      },
    ],
    characterHighlights: [
      {
        name: 'Estátua Clássica Dourada',
        category: 'Ouro Imperial',
        description: 'Imponência mitológica com pátina reluzente para recepções triunfais e noites de gala.',
      },
      {
        name: 'Anjo Escultural de Mármore',
        category: 'Mármore Branco',
        description: 'Suavidade barroca e lirismo celestial para casamentos, bodas e acolhimento solene.',
      },
      {
        name: 'Chef Prateado / Robô Futurista',
        category: 'Prata Industrial',
        description: 'Cromagem de alto impacto para congressos, ativações corporativas e feiras de negócios.',
      },
      {
        name: 'Ícones do Cinema & Mímica',
        category: 'Temáticos & Lúdicos',
        description: 'Homenagens a grandes mestres da arte, mímica expressiva e nostalgia envolvente.',
      },
    ],
    benefits: [
      {
        title: 'Recepção triunfal e acolhimento nobre',
        desc: 'Cria uma atmosfera imersiva e sofisticada logo nos primeiros segundos de chegada dos convidados ao local do evento.',
      },
      {
        title: 'Ponto privilegiado de fotos e engajamento',
        desc: 'Gera registros fotográficos espontâneos e atrai publicações nas redes sociais com a marca ou celebração.',
      },
      {
        title: 'Figurinos e caracterização de alto padrão',
        desc: 'Acervo próprio com maquiagem artística de alta fixação que suporta longos períodos com acabamento escultural impecável.',
      },
      {
        title: 'Produção adaptada ao conceito do evento',
        desc: 'Alinhamento completo com assessoria cerimonial, decoradores e organizadores quanto a posicionamento e iluminação.',
      },
    ],
    hiringSteps: [
      {
        step: '01',
        title: 'Briefing e Alinhamento Conceitual',
        desc: 'Entendemos o estilo do evento, local, público esperado e a atmosfera desejada para a recepção.',
      },
      {
        step: '02',
        title: 'Curadoria do Acervo',
        desc: 'Indicamos os personagens e figurinos mais adequados entre nossas linhas douradas, clássicas, prateadas ou temáticas.',
      },
      {
        step: '03',
        title: 'Proposta Comercial Transparente',
        desc: 'Estruturação expressa via WhatsApp ou configurador de proposta com logística, horários e condições de atendimento.',
      },
      {
        step: '04',
        title: 'Execução e Performance no Local',
        desc: 'Chegada antecipada da equipe artística para preparação minuciosa de caracterização e início pontual da intervenção.',
      },
    ],
    whatsappMessage:
      'Olá! Gostaria de solicitar um orçamento de estátuas vivas para meu evento. Cidade: [cidade]. Data: [data]. Tipo de evento: [tipo].',
    questions: [
      {
        q: 'Como funciona a dinâmica da estátua viva durante o evento?',
        a: 'Os artistas combinam períodos de imobilidade escultural impressionante com movimentos lentos e interações sutis à medida que os convidados se aproximam, gerando momentos de surpresa e excelentes oportunidades de fotos.',
      },
      {
        q: 'A Estátua Viva Produções atende fora de São Paulo?',
        a: 'Sim. Embora nossa base de produção e ateliê cenográfico esteja na região do Tatuapé, em São Paulo (SP), atendemos casamentos, convenções e feiras corporativas em todo o Brasil.',
      },
      {
        q: 'Quanto tempo dura uma apresentação?',
        a: 'O formato padrão para recepções costuma ter entre 1h30 e 2h30, podendo ser ajustado em blocos de performance conforme a programação e o fluxo de chegada dos convidados.',
      },
      {
        q: 'O que é necessário disponibilizar no local do evento?',
        a: 'Apenas um camarim privativo, seguro e limpo para preparação da maquiagem e figurino, com espelho, cadeira, ponto de energia e água. Toda a cenografia, pedestais (quando contratados) e materiais artísticos são levados por nossa equipe.',
      },
    ],
  },

  'estatua-viva-para-casamento': {
    slug: 'estatua-viva-para-casamento',
    title: 'Estátua Viva para Casamento e Recepção em SP | EV',
    description: 'Estátuas vivas de anjos clássicos e figuras barrocas em branco e dourado para casamentos inesquecíveis em São Paulo e Brasil. Peça seu orçamento.',
    eyebrow: 'Casamentos & Celebrações Clássicas · Arte Celestial',
    heading: 'Estátuas vivas para casamentos e celebrações clássicas',
    intro:
      'Acolha seus convidados com a poesia visual de anjos barrocos e figuras esculturais em mármore branco ou ouro imperial, criando um momento de acolhimento celestial no dia mais importante da sua vida.',
    deepDescription:
      'O casamento é uma celebração de momentos únicos. A intervenção de estátuas vivas e anjos clássicos na entrada da cerimônia ou na recepção do salão de festas estabelece imediatamente um clima de encantamento e sofisticação. Com gestos serenos, poses renascentistas e figurinos ricamente detalhados, nossos artistas enriquecem a memória afetiva e os álbuns fotográficos de noivos e convidados.',
    gallery: [
      {
        src: '/portfolio/branca.webp',
        alt: 'Estátua viva de anjo em mármore branco para casamento',
        caption: 'Anjo de Mármore — Acolhimento celestial e atemporal',
      },
      {
        src: '/portfolio/ouro.webp',
        alt: 'Estátua viva dourada para recepção de gala em casamento',
        caption: 'Ouro Imperial — Sofisticação para recepções clássicas',
      },
      {
        src: '/brand/perfil-oficial.webp',
        alt: 'Detalhe da caracterização artística e maquiagem metalizada',
        caption: 'Direção Artística — Acabamento e precisão teatral',
      },
      {
        src: '/portfolio/diversas.webp',
        alt: 'Acervo de figurinos nobres para eventos sociais',
        caption: 'Acervo Exclusivo — Figurinos de alta costura cenográfica',
      },
    ],
    characterHighlights: [
      {
        name: 'Anjos Barrocos Renascentistas',
        category: 'Mármore Branco',
        description: 'Asas esculturais, pátina de mármore e gestual poético para a recepção dos convidados.',
      },
      {
        name: 'Casal Escultural Clássico',
        category: 'Mármore & Ouro',
        description: 'Par romântico escultural para compor a entrada do espaço ou o lounge dos noivos.',
      },
      {
        name: 'Deusa Grega em Pátina Dourada',
        category: 'Ouro Imperial',
        description: 'Elegância soberana com túnica ricamente drapeada e coroa clássica metalizada.',
      },
      {
        name: 'Violinista / Músico Cenográfico',
        category: 'Personagens Vivos',
        description: 'Performance visual estática ou semi-interativa que se integra à trilha sonora do evento.',
      },
    ],
    benefits: [
      {
        title: 'Recepção emocionante e acolhimento poético',
        desc: 'Surpreende amigos e familiares logo na chegada ao salão, criando uma atmosfera inesquecível de elegância.',
      },
      {
        title: 'Cenário fotográfico sublime para noivos e padrinhos',
        desc: 'Gera fotos artísticas belíssimas que se tornam o ponto alto nos registros do casamento.',
      },
      {
        title: 'Perfeita harmonia com a decoração floral',
        desc: 'Os tons de mármore branco e ouro dialogam perfeitamente com arranjos florais, castiçais e iluminação cênica.',
      },
      {
        title: 'Postura discreta e respeito à cerimônia',
        desc: 'Artistas com rigor profissional, movimentos calculados e presença cênica alinhada ao cerimonial.',
      },
    ],
    hiringSteps: [
      {
        step: '01',
        title: 'Consulta de Data e Cidade',
        desc: 'Verificamos a disponibilidade na agenda para a data do seu casamento em São Paulo ou em qualquer estado.',
      },
      {
        step: '02',
        title: 'Escolha da Estética Artística',
        desc: 'Definimos entre anjos barrocos em mármore branco, mitologia dourada ou casais esculturais clássicos.',
      },
      {
        step: '03',
        title: 'Alinhamento com Cerimonialista / Assessoria',
        desc: 'Combinamos horários de montagem, camarim e momento ideal de performance na chegada dos convidados.',
      },
      {
        step: '04',
        title: 'Apresentação no Grande Dia',
        desc: 'Intervenção pontual e impecável para acolher seus convidados com todo o encanto que seu casamento merece.',
      },
    ],
    whatsappMessage:
      'Olá! Gostaria de solicitar um orçamento de estátua viva para casamento. Meu evento será em [cidade] na data [data]. Número de convidados: [número].',
    questions: [
      {
        q: 'Onde as estátuas vivas costumam ficar posicionadas no casamento?',
        a: 'A localização mais recomendada é no hall de entrada ou no foyer de recepção dos convidados, logo após a área de boas-vindas. Também podem compor a entrada da pista ou áreas de lounge fotográfico.',
      },
      {
        q: 'É possível escolher entre anjos brancos ou estátuas douradas?',
        a: 'Sim! Nosso acervo conta tanto com a linha Mármore Branco (anjos barrocos renascentistas) quanto com a linha Ouro Imperial. Orientamos a escolha que melhor se harmoniza com a paleta da sua decoração.',
      },
      {
        q: 'Vocês atendem casamentos no interior e no litoral de SP?',
        a: 'Sim, atendemos casamentos em fazendas no interior, cidades litorâneas e em capitais de todo o Brasil, com estrutura logística completa de deslocamento.',
      },
      {
        q: 'Com quanto tempo de antecedência devo reservar a data?',
        a: 'Recomendamos entrar em contato assim que a data e o local do casamento estiverem definidos, pois finais de semana e datas especiais de temporada têm alta procura.',
      },
    ],
  },

  'estatua-viva-para-eventos-corporativos': {
    slug: 'estatua-viva-para-eventos-corporativos',
    title: 'Estátuas Vivas para Eventos Corporativos e Feiras | SP',
    description: 'Atraia público para seu estande e gere ativações de marca memoráveis com robôs prateados e estátuas vivas em feiras corporativas e congressos.',
    eyebrow: 'Feiras de Negócios · Ativação de Marca · Congressos B2B',
    heading: 'Estátuas vivas para eventos corporativos, feiras e congressos',
    intro:
      'Em feiras de negócios e congressos, destacar o seu estande no pavilhão é decisivo. Nossas estátuas vivas e personagens futuristas atraem o fluxo de visitantes, prolongam o tempo de permanência e geram alto engajamento orgânico.',
    deepDescription:
      'A Estátua Viva Produções atua como parceira estratégica de agências de live marketing e departamentos de marketing corporativo. Criamos personagens vivos metálicos, robôs prateados e figuras esculturais personalizadas que representam valores de inovação, tecnologia e precisão. Uma solução comprovada para lançamento de produtos, estandes em feiras setoriais e convenções empresariais.',
    gallery: [
      {
        src: '/portfolio/prata.webp',
        alt: 'Estátua viva prateada para atração de público em feiras corporativas',
        caption: 'Prata Industrial — Destaque em estandes e convenções',
      },
      {
        src: '/portfolio/ouro.webp',
        alt: 'Performance em ouro para noites de premiação corporativa',
        caption: 'Troféu Vivo & Gala — Premiações de destaque B2B',
      },
      {
        src: '/brand/hero-bronze.jpg',
        alt: 'Caracterização profissional para ativação corporativa de marca',
        caption: 'Intervenções de Marca — Impacto visual imediato',
      },
      {
        src: '/portfolio/diversas.webp',
        alt: 'Projetos sob medida para empresas e campanhas publicitárias',
        caption: 'Projetos Customizados — Personagens sob medida para sua marca',
      },
    ],
    characterHighlights: [
      {
        name: 'Chef Prateado / Culinária High-Tech',
        category: 'Prata Industrial',
        description: 'Ideal para feiras de alimentação, hospitalidade, eventos gastronômicos e coquetéis.',
      },
      {
        name: 'Robô Cromado Futurista',
        category: 'Prata Industrial',
        description: 'Movimentos robóticos precisos para feiras de tecnologia, software, automação e finanças.',
      },
      {
        name: 'Troféu Vivo Clássico',
        category: 'Ouro Imperial',
        description: 'Apresentação em dourado para noites de premiação, reconhecimento de equipes e convenções de vendas.',
      },
      {
        name: 'Mascote Corporativo Escultural',
        category: 'Produções Personalizadas',
        description: 'Desenvolvimento do personagem ou conceito da empresa moldado em forma escultural viva.',
      },
    ],
    benefits: [
      {
        title: 'Atração magnética de visitantes para o estande',
        desc: 'Interrompe a caminhada dos participantes nos corredores da feira e direciona a atenção diretamente para sua equipe comercial.',
      },
      {
        title: 'Retenção qualificada de leads e potenciais clientes',
        desc: 'Enquanto o público assiste à performance e tira fotos, seus promotores e executivos iniciam a abordagem comercial de forma natural.',
      },
      {
        title: 'Fortalecimento da lembrança de marca (Top of Mind)',
        desc: 'A presença escultural da sua marca é o momento mais fotografado e compartilhado da feira em LinkedIn e Instagram.',
      },
      {
        title: 'Total conformidade com normas de eventos corporativos',
        desc: 'Pontualidade rigorosa, emissão de nota fiscal, conformidade e profissionalismo em pavilhões como Expo Center Norte, São Paulo Expo e Transamerica.',
      },
    ],
    hiringSteps: [
      {
        step: '01',
        title: 'Definição dos Objetivos de Marketing',
        desc: 'Alinhamos a mensagem da campanha, produto em destaque e dinâmica desejada durante os dias de feira ou congresso.',
      },
      {
        step: '02',
        title: 'Seleção do Personagem ou Customização',
        desc: 'Escolhemos figuras futuristas em prata, troféus em ouro ou criamos elementos de figurino com a identidade da marca.',
      },
      {
        step: '03',
        title: 'Grade de Apresentações e Escala',
        desc: 'Planejamos os blocos de intervenção nos horários de maior fluxo do pavilhão para maximizar o retorno da ação.',
      },
      {
        step: '04',
        title: 'Ativação e Cobertura no Estande',
        desc: 'Artistas experientes atraindo o público e gerando engajamento de alto nível durante todo o período contratado.',
      },
    ],
    whatsappMessage:
      'Olá! Gostaria de solicitar um orçamento de estátuas vivas para evento corporativo / feira de negócios. Cidade: [cidade]. Data: [data]. Nome da empresa: [empresa].',
    questions: [
      {
        q: 'Como é dividida a escala de performance em feiras que duram o dia todo?',
        a: 'Para feiras de longa duração (6h a 8h de pavilhão), organizamos a performance em turnos alternados (ex.: 45 minutos de performance por 15 minutos de intervalo) ou através de revezamento de artistas para manter o estande sempre ativo.',
      },
      {
        q: 'É possível personalizar o figurino com a logo da minha empresa?',
        a: 'Sim! Em nossa linha de Produções Personalizadas B2B, nosso atelier cenográfico pode incorporar aplicações de logotipo, cores corporativas e até criar mascotes vivos exclusivos.',
      },
      {
        q: 'Vocês emitem Nota Fiscal de prestação de serviços?',
        a: 'Sim, a Estátua Viva Produções é pessoa jurídica regularizada e emite Nota Fiscal de Serviços para todos os contratos corporativos.',
      },
      {
        q: 'Atendem feiras fora de São Paulo?',
        a: 'Sim. Participamos frequentemente de feiras e congressos em centros de convenções em Curitiba, Rio de Janeiro, Belo Horizonte, Brasília, Salvador e outras capitais.',
      },
    ],
  },

  'personagens-para-festas': {
    slug: 'personagens-para-festas',
    title: 'Personagens Vivos e Temáticos para Festas em SP | EV',
    description: 'Contrate atores performáticos e personagens vivos com atuação dinâmica, falas e figurinos de cinema e ficção para festas e eventos em todo o Brasil.',
    eyebrow: 'Personagens Temáticos · Atuação Dinâmica · Cosplay Profissional',
    heading: 'Personagens vivos e intervenções artísticas para festas',
    intro:
      'Diferente da contemplação estática, nossos personagens vivos trazem atores profissionais com interpretação dinâmica, uso de falas, improviso e forte carisma, quebrando a barreira entre a arte e o público.',
    deepDescription:
      'De clássicos imortais da mímica e do cinema mudo (como Charles Chaplin) a piratas aventureiros, deuses mitológicos e figuras de época, a Estátua Viva Produções oferece um elenco de artistas preparados para interagir ativamente com seus convidados. Ideal para festas temáticas, celebrações de debutantes, inaugurações, bienais, museus e shoppings.',
    gallery: [
      {
        src: '/brand/pirata.webp',
        alt: 'Personagem vivo de pirata para festa e eventos interativos',
        caption: 'Piratas & Aventura — Interação cênica vibrante',
      },
      {
        src: '/portfolio/diversas.webp',
        alt: 'Homenagem a Charles Chaplin em mímica clássica',
        caption: 'Charles Chaplin — Mímica expressiva e nostalgia cômica',
      },
      {
        src: '/portfolio/ouro.webp',
        alt: 'Mitologia clássica com caracterização em ouro',
        caption: 'Mitologia — Presença cênica para festas temáticas',
      },
      {
        src: '/brand/hero-bronze.jpg',
        alt: 'Intervenção teatral com figurino detalhado',
        caption: 'Arte Teatral — Caracterização de cinema para seu evento',
      },
    ],
    characterHighlights: [
      {
        name: 'Charles Chaplin (O Vagabundo)',
        category: 'Cinema & Mímica',
        description: 'Terno característico, bengala, passos cômicos e mímica delicada que encanta todas as gerações.',
      },
      {
        name: 'Pirata Aventureiro Interativo',
        category: 'Aventura & Ficção',
        description: 'Interpretação descontraída, charadas e interação dinâmica para festas temáticas e ações itinerantes.',
      },
      {
        name: 'Mestre de Cerimônias Performático',
        category: 'Personagens Vivos',
        description: 'Apresentação com fala, elegância e tiradas teatrais para conduzir momentos marcantes da celebração.',
      },
      {
        name: 'Figuras de Época & Carnaval Barroco',
        category: 'Clássico & Histórico',
        description: 'Máscaras venezianas e figurinos suntuosos que transportam o público para outra época.',
      },
    ],
    benefits: [
      {
        title: 'Interação cênica viva e quebra de gelo',
        desc: 'Atores com preparo teatral que acolhem os convidados com humor sutil, respeito e dinamismo contagiante.',
      },
      {
        title: 'Fidelidade rigorosa ao personagem original',
        desc: 'Caracterização facial, figurinos réplicas de cinema e gestual apurado que geram credibilidade imediata.',
      },
      {
        title: 'Versatilidade para múltiplos formatos de evento',
        desc: 'Desde recepções solenes até intervenções itinerantes em pistas de dança, shoppings e centros culturais.',
      },
      {
        title: 'Entretenimento que emociona todas as idades',
        desc: 'Adultos, jovens e crianças se conectam com a nostalgia dos ícones do cinema e a magia dos personagens.',
      },
    ],
    hiringSteps: [
      {
        step: '01',
        title: 'Tema e Perfil da Celebração',
        desc: 'Entendemos a proposta da festa (anos 20, cinema clássico, piratas, medieval, gala) e o público presente.',
      },
      {
        step: '02',
        title: 'Seleção do Elenco Artístico',
        desc: 'Definimos os atores e a quantidade ideal de personagens para cobrir o espaço do evento com harmonia.',
      },
      {
        step: '03',
        title: 'Roteiro de Interação',
        desc: 'Planejamos os momentos de recepção, fotos com os convidados e intervenções itinerantes no salão.',
      },
      {
        step: '04',
        title: 'Apresentação e Encantamento',
        desc: 'Chegada antecipada da equipe e execução brilhante para garantir sorrisos e momentos memoráveis.',
      },
    ],
    whatsappMessage:
      'Olá! Gostaria de solicitar um orçamento de personagens vivos para festa / celebração. Cidade: [cidade]. Data: [data]. Tema da festa: [tema].',
    questions: [
      {
        q: 'Qual a diferença entre uma estátua viva e um personagem vivo?',
        a: 'A estátua viva prioriza a imobilidade escultural e movimentos lentos e surpreendentes. Já o personagem vivo tem maior mobilidade, pode utilizar falas, interpretação cênica contínua e interagir de forma ativa e divertida com os convidados.',
      },
      {
        q: 'O personagem fala durante a apresentação?',
        a: 'Depende do personagem contratado! Personagens como Chaplin e mímicos comunicam-se pela linguagem corporal e gestual silencioso. Outros, como piratas e mestres de cerimônias, interagem verbalmente com muito carisma.',
      },
      {
        q: 'Vocês atendem festas de aniversário de 15 anos e formaturas?',
        a: 'Sim! Nossos personagens são muito requisitados para recepções de festas de 15 anos temáticas, formaturas universitárias e celebrações sociais de alto padrão.',
      },
      {
        q: 'Vocês criam personagens sob medida para uma festa temática específica?',
        a: 'Sim, nosso atelier cenográfico avalia pedidos de caracterização personalizada de acordo com o briefing, prazo e viabilidade de confecção do figurino.',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = services[params.slug];
  if (!item) return {};

  const url = `${base}/${params.slug}`;

  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url,
      type: 'website',
      images: [
        {
          url: `${base}/og-image.png`,
          width: 1200,
          height: 630,
          alt: item.heading,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.description,
      images: [`${base}/og-image.png`],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const item = services[params.slug];
  if (!item) notFound();

  const url = `${base}/${params.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: `${base}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Soluções Artísticas',
            item: `${base}/#acervo`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: item.heading,
            item: url,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: item.title,
        description: item.description,
        inLanguage: 'pt-BR',
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#servico`,
        name: item.heading,
        description: item.intro,
        serviceType: 'Entretenimento Artístico e Performances para Eventos',
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${base}/#empresa`,
          name: 'Estátua Viva Produções',
          telephone: '+5511937765250',
          url: `${base}/`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
        url,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: item.questions.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: a,
          },
        })),
      },
    ],
  };

  return (
    <main className="site-surface min-h-screen text-alabaster selection:bg-champagne-gold selection:text-obsidian">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <Navbar />

      <div id="conteudo" tabIndex={-1}>
        {/* Breadcrumbs & Navigation */}
        <nav
          aria-label="Caminho de navegação"
          className="site-container pt-32 sm:pt-40 pb-4 text-xs font-mono uppercase tracking-wider text-stone-warm"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-champagne-gold transition-colors">
                Início
              </Link>
            </li>
            <li aria-hidden="true" className="text-champagne-gold/40">
              <ChevronRight size={13} />
            </li>
            <li>
              <Link href="/#acervo" className="hover:text-champagne-gold transition-colors">
                Soluções Artísticas
              </Link>
            </li>
            <li aria-hidden="true" className="text-champagne-gold/40">
              <ChevronRight size={13} />
            </li>
            <li className="text-champagne-gold font-semibold truncate max-w-[200px] sm:max-w-none">
              {item.heading}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="site-container py-10 sm:py-16 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#dfbd7c]" />
              <p className="eyebrow !mb-0">{item.eyebrow}</p>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight text-alabaster font-normal">
              {item.heading}
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-stone-warm max-w-3xl leading-relaxed">
              {item.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <TrackedWhatsAppLink
                message={item.whatsappMessage}
                label={item.slug}
                className="button-gold inline-flex items-center gap-2 text-base px-8 py-4 shadow-[0_0_25px_rgba(223,189,124,0.4)]"
              >
                Solicitar orçamento no WhatsApp <ArrowRight size={18} />
              </TrackedWhatsAppLink>

              <a
                href="#galeria"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold/10 transition-colors text-sm font-semibold"
              >
                <Camera size={16} /> Ver fotos do acervo
              </a>
            </div>

            <p className="mt-5 text-xs text-[#d5d7cf] flex items-center gap-2">
              <CheckCircle2 size={14} className="text-champagne-gold shrink-0" />
              Base em São Paulo (SP) com apresentações confirmadas em todo o Brasil.
            </p>
          </div>
        </section>

        {/* Galeria de Trabalhos Reais */}
        <section id="galeria" aria-labelledby="galeria-titulo" className="site-container py-14 border-t border-champagne-gold/20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow">Trabalhos reais</p>
              <h2 id="galeria-titulo" className="font-serif text-3xl sm:text-4xl">
                Figurinos e performances do acervo
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-warm max-w-xs">
              Fotografias reais das apresentações realizadas pela Estátua Viva Produções.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {item.gallery.map((img, idx) => (
              <figure
                key={idx}
                className="neon-gold-card group rounded-2xl overflow-hidden border border-champagne-gold/25 bg-charcoal/60 relative flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#071318]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </div>
                <figcaption className="p-4 text-xs font-mono text-[#ffe6a3] bg-[#071318]/90 border-t border-champagne-gold/15">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Descrição Detalhada & Benefícios Reais */}
        <section className="border-y border-champagne-gold/20 bg-charcoal/40 py-16 sm:py-24">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <p className="eyebrow">A arte por trás da experiência</p>
              <h2 className="font-serif text-3xl sm:text-5xl mt-3 mb-6">
                Por que a intervenção escultural transforma o seu evento
              </h2>
              <p className="text-base sm:text-lg text-stone-warm leading-relaxed">
                {item.deepDescription}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {item.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="neon-gold-card rounded-2xl border border-champagne-gold/20 bg-charcoal/60 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-8 h-8 rounded-full bg-champagne-gold/10 border border-champagne-gold/40 flex items-center justify-center text-champagne-gold font-mono text-xs font-bold mb-4">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl text-alabaster mb-3 font-normal">
                      {b.title}
                    </h3>
                    <p className="text-sm text-stone-warm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de Personagens Adequados */}
        <section className="site-container py-16 sm:py-24">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">Curadoria de elenco</p>
            <h2 className="font-serif text-3xl sm:text-5xl">
              Personagens mais requisitados
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-warm">
              Algumas das opções de nosso acervo artístico mais indicadas para este perfil de evento:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {item.characterHighlights.map((char, idx) => (
              <div
                key={idx}
                className="neon-gold-card rounded-2xl border border-champagne-gold/25 bg-[#071318]/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-champagne-gold bg-champagne-gold/10 border border-champagne-gold/30 mb-4">
                    {char.category}
                  </span>
                  <h3 className="font-serif text-xl text-alabaster mb-2">
                    {char.name}
                  </h3>
                  <p className="text-xs text-stone-warm leading-relaxed">
                    {char.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Como Contratar (Etapas) */}
        <section className="border-y border-champagne-gold/20 bg-[#071318] py-16 sm:py-24">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Etapas simples</p>
              <h2 className="font-serif text-3xl sm:text-5xl">
                Como contratar a apresentação
              </h2>
              <p className="mt-4 text-stone-warm text-sm sm:text-base">
                Do primeiro contato até a performance ao vivo, cuidamos de toda a produção artística com rigor e pontualidade.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {item.hiringSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-champagne-gold/20 bg-charcoal/40 p-6 relative"
                >
                  <span className="font-mono text-2xl font-bold text-champagne-gold/60 block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg text-alabaster mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-warm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <TrackedWhatsAppLink
                message={item.whatsappMessage}
                label={`${item.slug}_etapas`}
                className="button-gold inline-flex items-center gap-2"
              >
                Consultar disponibilidade para minha data <ArrowRight size={16} />
              </TrackedWhatsAppLink>
            </div>
          </div>
        </section>

        {/* Perguntas Frequentes */}
        <section aria-labelledby="faq-titulo" className="site-container py-16 sm:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow">Tire suas dúvidas</p>
              <h2 id="faq-titulo" className="font-serif text-3xl sm:text-5xl">
                Perguntas frequentes
              </h2>
            </div>

            <div className="space-y-6">
              {item.questions.map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-2xl border border-champagne-gold/25 bg-charcoal/40 p-6 sm:p-7 neon-gold-card"
                >
                  <h3 className="font-serif text-xl text-champagne-gold mb-3 flex items-start gap-2.5">
                    <HelpCircle size={20} className="shrink-0 mt-0.5 text-champagne-gold/80" />
                    <span>{q}</span>
                  </h3>
                  <p className="text-stone-warm text-sm sm:text-base leading-relaxed pl-7">
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* Links internos relevantes */}
            <div className="mt-14 p-8 rounded-2xl border border-champagne-gold/20 bg-[#071318]/90 text-center">
              <h4 className="font-serif text-2xl text-alabaster mb-3">
                Deseja explorar outras opções artísticas?
              </h4>
              <p className="text-xs sm:text-sm text-stone-warm max-w-md mx-auto mb-6">
                Conheça as demais modalidades de apresentações e encontre a inspiração perfeita para o seu evento.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <Link href="/#acervo" className="text-champagne-gold underline underline-offset-4 hover:text-white">
                  Acervo completo de personagens
                </Link>
                <span className="text-champagne-gold/30">·</span>
                <Link href="/#briefing" className="text-champagne-gold underline underline-offset-4 hover:text-white">
                  Configurador de proposta expressa
                </Link>
                <span className="text-champagne-gold/30">·</span>
                <Link href="/equipe" className="text-champagne-gold underline underline-offset-4 hover:text-white">
                  Conhecer a direção artística
                </Link>
                <span className="text-champagne-gold/30">·</span>
                <Link href="/perguntas-frequentes" className="text-champagne-gold underline underline-offset-4 hover:text-white">
                  Todas as perguntas frequentes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
