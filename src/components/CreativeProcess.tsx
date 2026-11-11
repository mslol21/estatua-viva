import { ArrowUpRight, Palette, Sparkles, Drama, ClipboardCheck } from 'lucide-react';

const stages = [
  { number: '01', title: 'Conceito artístico', description: 'Entendemos a proposta, o público e a identidade do evento para definir a direção criativa.', icon: Sparkles },
  { number: '02', title: 'Caracterização e figurino', description: 'Exploramos cores, materiais, acessórios, maquiagem e elementos visuais que dão identidade ao personagem.', icon: Palette },
  { number: '03', title: 'Interpretação e performance', description: 'Desenvolvemos a linguagem artística, os movimentos e as possibilidades de interação adequadas ao projeto.', icon: Drama },
  { number: '04', title: 'Produção personalizada', description: 'Ajustamos a proposta à complexidade da criação, às necessidades do evento e ao investimento disponível.', icon: ClipboardCheck },
];

const eventTypes = [
  'Eventos corporativos, convenções e recepções',
  'Feiras, lançamentos e ativações de marca',
  'Casamentos, aniversários e formaturas',
  'Museus, festivais e eventos culturais',
  'Hotéis, restaurantes e espaços de entretenimento',
];

export default function CreativeProcess() {
  return (
    <section id="producao-sob-medida" className="section-space border-b border-alabaster/10" aria-labelledby="processo-title">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">02 / Produção sob medida</p>
          <h2 id="processo-title">Do conceito <em>à criação.</em></h2>
          <p>Uma produção exclusiva começa com uma ideia e se desenvolve por meio de escolhas criativas. Mais do que escolher um personagem, é possível construir uma experiência para a ocasião.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 mt-10">
          {stages.map(({ number, title, description, icon: Icon }) => (
            <article key={number} className="neon-gold-card rounded-2xl bg-charcoal/40 p-6 sm:p-8">
              <div className="flex items-center justify-between text-champagne-gold mb-5">
                <span className="font-serif text-2xl">{number}</span>
                <Icon size={25} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-alabaster mb-3">{title}</h3>
              <p className="text-stone-warm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Onde atuamos</p>
            <h3 className="font-serif text-3xl sm:text-4xl mb-5">Arte para diferentes <em>espaços e públicos.</em></h3>
            <p className="text-stone-warm leading-relaxed">Atendemos eventos em todo o Brasil, mediante consulta de disponibilidade e logística, com propostas adequadas às necessidades de cada produção.</p>
            <ul className="mt-6 space-y-3 text-sm text-alabaster">
              {eventTypes.map((type) => <li key={type} className="flex gap-3"><span aria-hidden="true" className="text-champagne-gold">✦</span>{type}</li>)}
            </ul>
          </div>
          <div className="neon-gold-card rounded-2xl p-6 sm:p-8 bg-charcoal/40">
            <p className="eyebrow mb-4">Como trabalhamos</p>
            <ol className="space-y-5 text-stone-warm leading-relaxed">
              <li><strong className="text-champagne-gold">01. Conte-nos sobre seu evento.</strong> Compartilhe data, local, público e conceito desejado.</li>
              <li><strong className="text-champagne-gold">02. Exploramos possibilidades.</strong> Apresentamos opções do repertório ou avaliamos uma criação exclusiva.</li>
              <li><strong className="text-champagne-gold">03. Planejamos cada detalhe.</strong> Alinhamos formato, equipe, caracterização e recursos necessários.</li>
              <li><strong className="text-champagne-gold">04. A arte entra em cena.</strong> Realizamos a performance conforme a proposta combinada.</li>
            </ol>
            <a className="mt-8 inline-flex items-center gap-2 text-champagne-gold hover:underline underline-offset-4" href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20uma%20produ%C3%A7%C3%A3o%20art%C3%ADstica%20sob%20medida." target="_blank" rel="noopener noreferrer">Solicitar proposta personalizada <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
