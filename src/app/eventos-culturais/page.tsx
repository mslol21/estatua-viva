import type { Metadata } from 'next';
import InstitutionalLanding, { type InstitutionalPageData } from '@/components/InstitutionalLanding';
import { SITE_URL } from '@/lib/site-config';

const data: InstitutionalPageData = {
  "slug": "eventos-culturais",
  "eyebrow": "Cultura, arte de rua e programação cultural",
  "title": "Arte viva para",
  "emphasis": "encontros culturais.",
  "intro": "Estátuas vivas, personagens e performances esculturais para festivais, feiras, programações artísticas e celebrações abertas ao público. Uma linguagem visual que aproxima pessoas da arte.",
  "photo": "/images/estatuas-vivas/estatua-viva-colheita-terracota.webp",
  "photoAlt": "Estátua viva com caracterização terracota do acervo artístico da empresa",
  "photoCaption": "Fotografia do acervo real. Propostas para eventos culturais são desenvolvidas conforme o projeto.",
  "audience": "Produtores culturais, festivais e instituições",
  "cardTitle": "Intervenções para programações culturais",
  "cardIntro": "Formatos a serem personalizados conforme o espaço, o tema e o público do evento.",
  "services": [
    {
      "title": "Festivais e mostras de arte",
      "description": "Performances estáticas ou itinerantes como parte de uma programação artística, respeitando o conceito curatorial."
    },
    {
      "title": "Feiras culturais e espaços públicos",
      "description": "Personagens e esculturas vivas em locais de circulação, com interação planejada e orientação da organização."
    },
    {
      "title": "Celebrações históricas e temáticas",
      "description": "Possibilidades de figurinos e criações inspiradas em períodos e temas culturais, mediante pesquisa e alinhamento de roteiro."
    },
    {
      "title": "Programação de centros culturais",
      "description": "Intervenções para aberturas, recepções e ações de valorização da cultura."
    },
    {
      "title": "Arte e participação do público",
      "description": "Pontos de encontro com personagens, observação artística e registros fotográficos quando autorizados."
    },
    {
      "title": "Parcerias com produtores",
      "description": "Elaboração de proposta artística e necessidades técnicas para integração a projetos existentes."
    }
  ],
  "approachTitle": "Uma apresentação alinhada ao projeto cultural",
  "approach": [
    "A organização compartilha o tema, o perfil do público, o local e as datas previstas.",
    "A produção avalia acervo artístico, acessibilidade do espaço, tempo de caracterização e dinâmica da intervenção.",
    "São definidos personagens, duração, pausas, necessidades técnicas e orçamento para avaliação."
  ],
  "faq": [
    {
      "q": "As performances podem acontecer em espaços abertos?",
      "a": "Podem ser avaliadas conforme as condições de segurança, clima, acessibilidade e estrutura de apoio do evento."
    },
    {
      "q": "Os personagens podem dialogar com o tema de um festival?",
      "a": "Sim, a equipe pode estudar a adequação do repertório e das caracterizações existentes. Novas criações dependem de viabilidade e orçamento."
    },
    {
      "q": "O site mostra apresentações em festivais específicos?",
      "a": "As fotografias exibidas representam o repertório artístico da empresa; não devem ser interpretadas como comprovação de contratação por um evento público específico."
    }
  ],
  "related": [
    {
      "title": "Eventos públicos",
      "href": "/eventos-publicos"
    },
    {
      "title": "Campanhas institucionais",
      "href": "/campanhas-institucionais"
    },
    {
      "title": "Personagens para eventos",
      "href": "/personagens-para-eventos"
    }
  ],
  "leadMessage": "Olá! Gostaria de apresentar um projeto cultural e solicitar uma proposta de intervenção artística. Instituição/produtora: ___, cidade: ___, data: ___, público: ___."
};

export const metadata: Metadata = {
  title: "Estátuas Vivas para Eventos Culturais | Estátua Viva Produções",
  description: "Performances artísticas para festivais, feiras culturais, programação municipal e ações de arte em espaços públicos. Conheça possibilidades para São Paulo e região.",
  alternates: { canonical: `${SITE_URL}/eventos-culturais` },
  openGraph: {
    title: "Estátuas Vivas para Eventos Culturais | Estátua Viva Produções",
    description: "Performances artísticas para festivais, feiras culturais, programação municipal e ações de arte em espaços públicos. Conheça possibilidades para São Paulo e região.",
    url: `${SITE_URL}/eventos-culturais`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};
export default function Page() { return <InstitutionalLanding data={data}/>; }
