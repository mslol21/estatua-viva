import type { Metadata } from 'next';
import InstitutionalLanding, { type InstitutionalPageData } from '@/components/InstitutionalLanding';
import { SITE_URL } from '@/lib/site-config';

const data: InstitutionalPageData = {
  "slug": "eventos-publicos",
  "eyebrow": "Prefeituras, secretarias e instituições",
  "title": "Arte viva para",
  "emphasis": "eventos públicos.",
  "intro": "Propostas de estátuas vivas, performances e personagens para eventos municipais, ações culturais e programações organizadas por instituições públicas. Uma experiência artística adaptada à finalidade de cada evento.",
  "photo": "/images/estatuas-vivas/estatua-viva-musa-lira-ouro.webp",
  "photoAlt": "Artista com caracterização de estátua viva dourada e lira",
  "photoCaption": "Acervo real da Estátua Viva Produções. Imagem ilustrativa da atuação artística, sem vínculo declarado com órgãos públicos.",
  "audience": "Órgãos públicos e gestores culturais",
  "cardTitle": "Soluções artísticas para a programação institucional",
  "cardIntro": "A equipe desenvolve propostas de apresentações conforme requisitos do órgão, espaço e finalidade cultural.",
  "services": [
    {
      "title": "Aniversários de cidades",
      "description": "Possibilidades de recepção artística e personagens para compor celebrações e eventos municipais."
    },
    {
      "title": "Festivais promovidos por municípios",
      "description": "Intervenções para mostras, festivais e programações culturais organizadas ou apoiadas por secretarias."
    },
    {
      "title": "Inaugurações e recepções oficiais",
      "description": "Presença artística em aberturas institucionais, respeitando protocolo e caráter público da ocasião."
    },
    {
      "title": "Programação de praças e parques",
      "description": "Apresentações em ambientes abertos, sujeitas a estrutura, condições climáticas e requisitos de segurança."
    },
    {
      "title": "Ações culturais com escolas",
      "description": "Propostas artísticas para projetos educativos e culturais, com conteúdo alinhado aos responsáveis."
    },
    {
      "title": "Apoio a projetos e editais",
      "description": "Envio de repertório, portfólio e informações técnicas para análise pela equipe organizadora."
    }
  ],
  "approachTitle": "Informações para uma proposta institucional",
  "approach": [
    "A secretaria ou organização apresenta objeto do projeto, local, público, cronograma e requisitos de contratação.",
    "A produção prepara escopo artístico, elenco previsto, infraestrutura, condições de apresentação e documentos pertinentes.",
    "A eventual contratação segue os procedimentos e regras aplicáveis ao órgão público, sem promessa de modalidade específica."
  ],
  "faq": [
    {
      "q": "Prefeituras e secretarias podem solicitar uma proposta?",
      "a": "Sim. A equipe pode apresentar portfólio e proposta artística para avaliação. A contratação depende dos procedimentos legais e administrativos aplicáveis."
    },
    {
      "q": "A empresa realiza contratação por inexigibilidade?",
      "a": "A modalidade de contratação não é presumida. O órgão responsável deve avaliar os requisitos legais, a documentação e a situação concreta, conforme a legislação de contratações públicas."
    },
    {
      "q": "Há apoio para elaborar a especificação técnica do evento?",
      "a": "A produção pode informar repertório, duração estimada, necessidades de espaço e condições operacionais para subsidiar o planejamento do órgão, sem substituir a definição administrativa do objeto."
    }
  ],
  "related": [
    {
      "title": "Eventos culturais",
      "href": "/eventos-culturais"
    },
    {
      "title": "Campanhas institucionais",
      "href": "/campanhas-institucionais"
    },
    {
      "title": "Eventos corporativos",
      "href": "/eventos-corporativos"
    }
  ],
  "leadMessage": "Olá! Represento um órgão público e gostaria de solicitar portfólio e proposta para um evento institucional. Órgão: ___, município: ___, data: ___, objetivo: ___."
};

export const metadata: Metadata = {
  title: "Estátuas Vivas para Eventos Públicos e Prefeituras | Estátua Viva Produções",
  description: "Propostas de apresentações artísticas para secretarias municipais, programações culturais e eventos públicos. Portfólio e informações técnicas sob consulta.",
  alternates: { canonical: `${SITE_URL}/eventos-publicos` },
  openGraph: {
    title: "Estátuas Vivas para Eventos Públicos e Prefeituras | Estátua Viva Produções",
    description: "Propostas de apresentações artísticas para secretarias municipais, programações culturais e eventos públicos. Portfólio e informações técnicas sob consulta.",
    url: `${SITE_URL}/eventos-publicos`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};
export default function Page() { return <InstitutionalLanding data={data}/>; }
