import type { Metadata } from 'next';
import InstitutionalLanding, { type InstitutionalPageData } from '@/components/InstitutionalLanding';
import { SITE_URL } from '@/lib/site-config';

const data: InstitutionalPageData = {
  "slug": "campanhas-institucionais",
  "eyebrow": "Comunicação, RH e conscientização",
  "title": "Arte que inspira",
  "emphasis": "mensagens importantes.",
  "intro": "Intervenções artísticas e estátuas vivas para compor campanhas educativas e ações de comunicação de empresas, instituições e projetos públicos. Uma experiência visual desenvolvida em diálogo com quem organiza a campanha.",
  "photo": "/images/cases/recepcao-gala-dionisio-cafu.webp",
  "photoAlt": "Artistas de estátua viva em recepção de evento",
  "photoCaption": "Fotografia real de apresentação artística. Os formatos temáticos são propostas personalizáveis.",
  "audience": "RH, comunicação interna e secretarias",
  "cardTitle": "Campanhas que podem ganhar expressão artística",
  "cardIntro": "Exemplos de possibilidades criativas, não um catálogo de campanhas anteriormente executadas.",
  "services": [
    {
      "title": "SIPAT e segurança no trabalho",
      "description": "Intervenções cênicas alinhadas ao conteúdo técnico elaborado pelos responsáveis de segurança e saúde ocupacional."
    },
    {
      "title": "Saúde e bem-estar",
      "description": "Ações de acolhimento e comunicação visual em campanhas como Outubro Rosa ou Novembro Azul, sem substituir orientação profissional."
    },
    {
      "title": "Meio ambiente e sustentabilidade",
      "description": "Personagens inspirados na natureza e performances para acompanhar atividades educativas."
    },
    {
      "title": "Cidadania e acessibilidade",
      "description": "Experiências artísticas concebidas com linguagem respeitosa e recursos adequados ao público participante."
    },
    {
      "title": "Datas culturais e comemorativas",
      "description": "Intervenções para valorização da cultura e da diversidade, com participação e revisão de representantes pertinentes."
    },
    {
      "title": "Endomarketing e valorização de equipes",
      "description": "Recepções simbólicas e apresentações em ações de reconhecimento, integração e campanhas internas."
    }
  ],
  "approachTitle": "Criatividade com responsabilidade",
  "approach": [
    "O contratante apresenta a mensagem da campanha, o público e os objetivos de comunicação.",
    "A equipe discute conceito, adequação artística, acessibilidade e eventuais revisões de especialistas no tema.",
    "São definidos personagens, roteiro, local, tempo de apresentação e formato de avaliação do projeto."
  ],
  "faq": [
    {
      "q": "A apresentação pode representar uma campanha específica?",
      "a": "A equipe pode desenvolver uma proposta artística alinhada ao briefing, com validação prévia das mensagens pela organização responsável."
    },
    {
      "q": "É possível atender campanhas de saúde ou prevenção?",
      "a": "Sim, como complemento artístico de uma iniciativa educativa. Mensagens técnicas e orientações de saúde devem ser elaboradas ou aprovadas por profissionais responsáveis."
    },
    {
      "q": "Vocês atuam em campanhas político-partidárias?",
      "a": "Esta página apresenta intervenções culturais e educativas de interesse institucional. Projetos devem respeitar a legislação, a impessoalidade administrativa e os requisitos aplicáveis a cada contratação."
    }
  ],
  "related": [
    {
      "title": "Eventos públicos",
      "href": "/eventos-publicos"
    },
    {
      "title": "Eventos culturais",
      "href": "/eventos-culturais"
    },
    {
      "title": "Entretenimento para empresas",
      "href": "/entretenimento-para-empresas"
    }
  ],
  "leadMessage": "Olá! Gostaria de solicitar uma proposta de intervenção artística para campanha institucional. Organização: ___, tema: ___, cidade: ___, data: ___."
};

export const metadata: Metadata = {
  title: "Intervenções Artísticas para Campanhas Institucionais | Estátua Viva Produções",
  description: "Estátuas vivas e performances para campanhas educativas, comunicação interna, ações de saúde, segurança e cidadania em empresas e instituições.",
  alternates: { canonical: `${SITE_URL}/campanhas-institucionais` },
  openGraph: {
    title: "Intervenções Artísticas para Campanhas Institucionais | Estátua Viva Produções",
    description: "Estátuas vivas e performances para campanhas educativas, comunicação interna, ações de saúde, segurança e cidadania em empresas e instituições.",
    url: `${SITE_URL}/campanhas-institucionais`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};
export default function Page() { return <InstitutionalLanding data={data}/>; }
