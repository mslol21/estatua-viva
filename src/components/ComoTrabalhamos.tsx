import { ArrowUpRight, Clapperboard, Handshake, Palette, Sparkles } from 'lucide-react';

const etapas = [
  {
    icon: Palette,
    title: 'Criação e caracterização',
    description: 'Maquiagem artística, figurino e interpretação transformam artistas em personagens vivos, com identidade visual pensada para cada proposta.',
  },
  {
    icon: Sparkles,
    title: 'Performance e interação',
    description: 'A imobilidade surpreende; gestos e movimentos inesperados criam encontros, fotografias e momentos memoráveis com o público.',
  },
  {
    icon: Clapperboard,
    title: 'Experiências para diferentes ocasiões',
    description: 'Recepções, feiras, lançamentos, eventos corporativos, casamentos, celebrações e projetos culturais podem receber intervenções artísticas.',
  },
  {
    icon: Handshake,
    title: 'Projetos sob medida',
    description: 'A produção conversa com organizadores e agências para alinhar personagem, estética, local e dinâmica da apresentação às necessidades do evento.',
  },
];

export default function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" aria-labelledby="como-trabalhamos-titulo" className="section-space border-b border-champagne-gold/15 bg-charcoal/40">
      <div className="site-container">
        <div className="section-heading max-w-3xl">
          <p className="eyebrow">A arte por trás da experiência</p>
          <h2 id="como-trabalhamos-titulo">Mais do que uma estátua. <em>Uma performance viva.</em></h2>
          <p>
            A Estátua Viva Produções une caracterização artística e interpretação para surpreender convidados.
            Cada apresentação combina presença cênica, expressão e interação, criando uma experiência que
            começa na contemplação e ganha vida diante do público.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {etapas.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="neon-gold-card rounded-2xl bg-obsidian/80 border border-champagne-gold/20 p-6 sm:p-7">
              <div className="flex items-center justify-between mb-7">
                <Icon className="text-champagne-gold" size={27} strokeWidth={1.4} aria-hidden="true" />
                <span className="font-mono text-xs text-champagne-gold/80">0{index + 1}</span>
              </div>
              <h3 className="font-serif text-2xl text-alabaster mb-3">{title}</h3>
              <p className="text-sm leading-7 text-stone-warm">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a href="#briefing" className="inline-flex items-center gap-2 rounded-full border border-champagne-gold bg-champagne-gold px-6 py-3 font-semibold text-obsidian hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-gold">
            Planejar minha apresentação <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href="#acervo" className="text-sm text-champagne-gold underline underline-offset-4 hover:text-alabaster">
            Conhecer os personagens
          </a>
        </div>
      </div>
    </section>
  );
}
