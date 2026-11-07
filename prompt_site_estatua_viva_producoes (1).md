# Master Prompt (Google Antigravity): Site Editorial de Alta Conversão — Estátua Viva Produções

Este prompt foi desenhado especificamente para o **Google Antigravity** (agentic IDE com acesso a terminal, npm, criação de arquivos e preview integrado). Ele substitui os clichês de sites gerados por IA por uma **direção de arte editorial nível Awwwards / Studio Freight**, usando as melhores bibliotecas modernas do ecossistema React/Next.js.

## Prompt Pronto para Colar no Google Antigravity

```text
# ROLE & MISSÃO NO GOOGLE ANTIGRAVITY
Você é um Creative Developer Sênior (nível Awwwards / Studio Freight / Resn) e Arquiteto Front-End especialista em Design Editorial e CRO.
Sua missão é inicializar, arquitetar e construir o novo site institucional e catálogo interativo da "Estátua Viva Produções" (https://estatuaviva.com.br/), empresa de intervenções artísticas liderada por Rodolfo Valentino em São Paulo - SP (atuando desde 2005 em todo o Brasil).

Use suas ferramentas de agente no Antigravity para criar a estrutura completa do projeto, instalar as dependências via terminal e entregar uma aplicação digna de estúdio de design internacional — com ZERO aparência de template genérico de IA.

---

# 1. STACK TECNOLÓGICA & BIBLIOTECAS DE UI/UX (INSTALAR E CONFIGURAR)
- **Framework Core:** Next.js (App Router, TypeScript) + Tailwind CSS.
- **Animação & Física Coreografada:**
  - `gsap` + `@gsap/react` (`ScrollTrigger`): Para textos revelados linha por linha (masked split-text reveal), seções com pin horizontal no catálogo e parallax sutil nas fotos das estátuas.
  - `motion` (`framer-motion`): Para transições de layout fluidas (`layoutId`) na troca de filtros do catálogo e abertura de modais/drawers.
  - `lenis` (`@studio-freight/lenis` ou `lenis/react`): Para smooth scrolling editorial com inércia suave.
- **Componentes Primitivos & Acessibilidade (Headless):**
  - `@radix-ui/react-dialog` ou `vaul`: Para Drawer mobile nativo ao abrir detalhes de um personagem ou o simulador de orçamento.
  - `@radix-ui/react-accordion` + `@radix-ui/react-tabs`: Para filtros de catálogo e FAQ com acessibilidade perfeita.
  - `embla-carousel-react`: Para carrossel de vídeos de bastidores e depoimentos com física de arrasto (drag-free) real.
- **Ícones:** `lucide-react` (traço fino `strokeWidth={1.5}` — proibido usar ícones grossos ou emojis no lugar de ícones).

---

# 2. REGRAS ESTRITAS "ANTI-CARA DE IA" (PROIBIÇÕES VISUAIS)
Para garantir que o site pareça desenhado à mão por uma agência boutique de São Paulo/Nova York:
1. **PROIBIDO usar emojis soltos na interface** (nada de "✨", "🚀", "🎭", "📍" em títulos, badges ou botões). Use tipografia em caixa alta com alto espaçamento (`tracking-[0.2em] text-xs uppercase`), pequenos pontos geométricos (`w-1.5 h-1.5 rounded-full bg-[#C5A059]`) ou ícones `lucide-react` minimalistas.
2. **PROIBIDO usar gradientes neon, roxo/azul ou dourado saturado artificial** (`bg-gradient-to-r from-yellow-400 to-amber-600`). Use tons de museu e teatro:
   - Fundo Principal: Obsidian Matte (`#09090B`) e Warm Charcoal (`#111113`).
   - Textos: Alabaster (`#F4F1EA`) para títulos e Warm Stone (`#9A968E`) para leitura.
   - Destaque Metálico: Champagne / Antique Brass sólido (`#C5A059`) e bordas de 1px ultra-sutis (`border-[#F4F1EA]/10`).
3. **PROIBIDO usar grids simétricos de 3 cards com sombra pesada e ícone redondo no topo.** Use **Grids Editoriais Assimétricos (Bento / Swiss Grid)** com linhas divisórias visíveis de 1px (`divide-x divide-y divide-[#F4F1EA]/10`), numeração romana ou decimal (`01 / 02 / 03`) em fonte monoespaçada e imagens em proporção vertical (`aspect-[3/4]` ou `aspect-[4/5]`) que valorizam o corpo inteiro das estátuas vivas.
4. **Textura Cinematográfica:** Adicione um overlay global fixo de granulação de filme analógico (SVG `<feTurbulence>` com `opacity-[0.03] pointer-events-none`) sobre o fundo escuro para eliminar o aspecto chapado de tela digital.
5. **Tipografia de Contraste Extremo (`next/font/google`):**
   - Display / Headings: `Cormorant Garamond` (pesos 400, 600, e *italic* em palavras-chave das headlines, `tracking-tight`, `leading-[0.95]`).
   - UI / Body: `Plus Jakarta Sans` (pesos 400, 500, 600).
   - Metadados / Índices Técnicos: `JetBrains Mono` (`text-[11px] uppercase tracking-[0.18em]`).

---

# 3. REFERÊNCIAS DE UI/UX E BENCHMARKS DE INSPIRAÇÃO
Construa a experiência inspirada nestas 4 referências reais de design premiado:
1. **Cirque du Soleil / Teatro Municipal (Imersão Cênica):** O site é um palco escuro; as fotografias das estátuas vivas (Ouro, Prata, Marmóreo Branco e Catrinas) emergem da escuridão com iluminação lateral dramática.
2. **A24 Films / Leica Camera (Rigor Editorial):** Títulos grandes onde uma palavra-chave fica em *itálico serifado* (ex.: "Arte viva que *eterniza* o seu evento"), acompanhados de metadados técnicos nas extremidades (`EST. 2005 — SÃO PAULO, BR`).
3. **Spotlight / Cursor-Follow Sutil:** Nos cards do catálogo, implemente um efeito de iluminação radial via CSS variables (`--mouse-x`, `--mouse-y`) que simula uma lanterna/holofote suave iluminando a pintura metálica da estátua conforme o usuário move o cursor.
4. **Contraste "Imobilidade vs. Movimento":** No estado de repouso, as imagens do catálogo têm tratamento dramático (leve redução de saturação e alto contraste); no `hover`, a imagem ganha cor vibrante e escala suave (`scale-105 transition-transform duration-700 ease-out`), simulando o instante em que a estátua ganha vida.

---

# 4. ARQUITETURA DE SEÇÕES E CONTEÚDO (100% BASEADO EM DADOS REAIS)

## Seção 1: Top Bar Minimalista & Navegação Flutuante
- Esquerda: Monograma tipográfico `EV` em serifada + `ESTÁTUA VIVA PRODUÇÕES`.
- Centro (pílula discreta com `backdrop-blur-md bg-[#111113]/80 border border-[#F4F1EA]/10`): `Experiências` | `Acervo de Personagens` | `Em Movimento (Vídeos)` | `Clientes & TV` | `FAQ`.
- Direita: Link para o Instagram oficial (`https://www.instagram.com/estatuavivaproducoes`) + Botão sólido em Champagne Gold (`#C5A059` com texto `#09090B`): `Solicitar Orçamento`.

## Seção 2: Hero Section Cênica (Split ou Full-Bleed Editorial)
- Metadado superior em fonte mono: `[ DESDE 2005 • SÃO PAULO PARA TODO O BRASIL ]`
- H1 Monumental (`Cormorant Garamond`):
  "A arte da imobilidade que *surpreende* e transforma eventos em espetáculos."
- Subtítulo (`Plus Jakarta Sans`):
  "Performances hiper-realistas, maquiagem cinematográfica e figurinos autorais para eventos corporativos, feiras, casamentos de alto padrão e produções de TV."
- Barra de Ação Dupla:
  - CTA 1: "Consultar Disponibilidade via WhatsApp" (link direto para `https://wa.me/5511937765250?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Est%C3%A1tua%20Viva%20Produ%C3%A7%C3%B5es%20e%20gostaria%20de%20um%20or%C3%A7amento.`).
  - CTA 2: "Explorar Acervo de Personagens (↓)".
- Rodapé da Hero (Grid de 3 colunas com borda superior de 1px):
  - `01 / REPUTAÇÃO`: Nota 5,0 ★ no Google (37 avaliações verificadas).
  - `02 / TRAJETÓRIA`: +20 anos de atuação artística e direção de Rodolfo Valentino.
  - `03 / COBERTURA`: Sede no Tatuapé (SP) com logística para eventos em todo o Brasil.

## Seção 3: Chancela Corporativa & Emissoras ("Quem Já Contratou")
- Layout de faixa editorial com tipografia e selos monocromáticos elegantes destacando os cases reais do portfólio:
  - **Rede Globo** (*Novela As Três Graças*, *Programa do Jô*, *Faustão*)
  - **Rede Record** (*Programa Eliana*)
  - **Caterpillar** (*Celebração de 70 Anos no Brasil*)
  - **Henkel / Loctite** (*Ativação Personalizada em Feira Corporativa*)
  - **Staedtler** (*Feira Pixel Show*)
  - **Museu do Ipiranga** (*Performances de Personagens Históricos*)
  - **Exposição Monet Le Rêve** & **Feira do Plástico (Piramidal)**

## Seção 4: Curadoria por Tipo de Evento (Substituindo a antiga divisão apenas por cor)
Em vez de obrigar o cliente a adivinhar qual cor de estátua quer, apresente 3 painéis editoriais numerados (`01`, `02`, `03`) que expandem no hover/clique:
- **01 / Corporativo, Feiras & Live Marketing:**
  - *Proposta:* Geração de fluxo em estandes, retenção de público, lançamentos de produtos e criação de figurinos 100% personalizados com o produto ou identidade da marca (como os cases Loctite, Caterpillar e Convenção Acelera DPA).
- **02 / Casamentos, 15 Anos & Recepção de Gala:**
  - *Proposta:* Sofisticação clássica e emoção na recepção de convidados com Deusas Gregas em Ouro, Anjos Barrocos em Mármore Branco, Deusa do Espelho e Ninfa & Dionísio.
- **03 / Temáticos, Sazonais & Intervenções Culturais:**
  - *Proposta:* Carisma, humor fino e impacto fotográfico com Catrinas Mexicanas (*Día de los Muertos*), Capitão Jack Sparrow interativo, Mímicos Franceses, Charles Chaplin, Santos Dumont e Presépio Vivo.

## Seção 5: Acervo Interativo de Personagens (Filtro Fluido + Orçamento em 1 Clique)
Use `framer-motion` (`AnimatePresence` + `layout`) para filtrar suavemente entre:
`Todos` | `Ouro Imperial` | `Mármore Branco` | `Prata Industrial` | `Temáticos & Cosplay` | `Projetos Sob Medida (B2B)`

Crie pelo menos 8 cards ricos baseados no portfólio real da empresa:
1. **Deusa Grega & Clássicos em Ouro** — Categoria: *Ouro Imperial* — Ideal para casamentos luxuosos, premiações e recepções de gala.
2. **Deusa do Espelho & Anjos em Mármore** — Categoria: *Mármore Branco* — Pureza e impacto escultural para cerimônias e eventos elegantes.
3. **Operário & Executivo Metálico (Case Caterpillar)** — Categoria: *Prata Industrial* — Visual futurista e industrial perfeito para feiras tecnológicas e congressos.
4. **Catrina & Miguelito (Día de los Muertos)** — Categoria: *Temáticos & Cosplay* — Maquiagem artística premiada e figurino floral exuberante para eventos temáticos.
5. **Capitão Jack Sparrow Interativo** — Categoria: *Temáticos & Cosplay* — Performance com humor, dança e interação fiel ao cinema para festas e eventos corporativos.
6. **Arte da Mímica & Charles Chaplin** — Categoria: *Temáticos & Cosplay* — Intervenção poética e cômica que quebra o gelo na recepção dos convidados.
7. **Personagens Históricos & Literatura (Drummond, Pessoa, Santos Dumont)** — Categoria: *Projetos Sob Medida (B2B)* — Cultura viva para museus, escolas, feiras literárias e exposições.
8. **Mascote & Produto Vivo Sob Medida (Case Loctite)** — Categoria: *Projetos Sob Medida (B2B)* — Seu produto ou identidade corporativa transformado em performance artística.

- **Regra de Conversão em cada Card:** Botão discreto que ganha destaque no hover: `Orçar este personagem →`. Ao clicar, abre o WhatsApp (`5511937765250`) com a mensagem personalizada: *"Olá! Vi o personagem [Nome do Personagem] no site da Estátua Viva Produções e gostaria de consultar disponibilidade e orçamento para meu evento."*

## Seção 6: Galeria Audiovisual ("O Instante do Movimento")
- Seção escura com carrossel `Embla` exibindo os vídeos reais categorizados por contexto (TV, Feiras Corporativas e Casamentos), com player limpo em modal (`Radix Dialog`) para evitar travamentos de carregamento e eliminar o aspecto de iframes quebrados do site antigo.

## Seção 7: Configurador de Briefing Rápido (Lead Magnet para WhatsApp)
Em vez de um formulário tradicional frio, crie um **"Montador de Proposta Expressa"** em formato passo-a-passo ou painel interativo:
- Seleção 1 (Pílulas clicáveis): *Qual a natureza do evento?* (`Corporativo / Feira`, `Casamento / Social`, `Festa Temática / Infantil`, `TV / Cinema / Cultural`)
- Seleção 2 (Pílulas clicáveis): *Qual estética você busca?* (`Ouro / Clássico`, `Branco Escultural`, `Prata Tecnológico`, `Personagem Temático / Mímico`, `Figurino Personalizado com Minha Marca`)
- Campos rápidos: `Nome / Empresa` e `Data ou Mês Previsto + Cidade`.
- Ao clicar em **"Enviar Briefing para a Produção"**, o JavaScript monta um texto estruturado e abre `https://wa.me/5511937765250` pronto para envio imediato.

## Seção 8: Prova Social Google (5,0 Estrelas) + FAQ Editorial
- **Bloco de Avaliações:** Exibir o selo `5.0 ★★★★★ (37 avaliações no Google)` com citações reais de clientes elogiando o realismo, pontualidade e emoção, acompanhado de link direto para a ficha oficial no Google (`https://www.google.com/search?kgmid=/g/11yfq6b8js&hl=pt-BR&q=Est%C3%A1tua+viva`).
- **Acordeão FAQ (`@radix-ui/react-accordion`):**
  1. *Como funciona a dinâmica das estátuas vivas durante o evento?*
  2. *É possível personalizar o figurino com a marca ou produto da minha empresa?*
  3. *Vocês atendem fora da capital de São Paulo?*
  4. *Qual a antecedência recomendada para reserva de data?*

## Seção 9: Footer Monumental & Hub de Links
- Tipografia gigante de fundo em baixo contraste (`ESTÁTUA VIVA`).
- Dados oficiais 100% padronizados:
  - **Razão/Marca:** Estátua Viva Produções (Direção: Rodolfo Valentino)
  - **Endereço:** R. Oriximiná, 27 - Cidade Mãe do Céu (Tatuapé), São Paulo - SP, 03306-060
  - **Atendimento:** Segunda a Sábado, das 09h às 22h | WhatsApp: `+55 11 93776-5250`
  - **E-mail:** `contato@estatuaviva.com.br`
  - **Instagram Oficial:** `@estatuavivaproducoes` (`https://www.instagram.com/estatuavivaproducoes`)
- **Botão Flutuante de Atendimento (Canto Inferior Direito):**
  - Botão minimalista em acabamento escuro e borda dourada com indicador de status online verde pulsante e texto: *"Falar com a Produção"* (no hover, exibe: *"Olá! Somos da Equipe Estátua Viva Produções. Vamos criar algo inesquecível?"*).

---

# 5. DIRETRIZES DE EXECUÇÃO NO ANTIGRAVITY
1. Crie uma arquitetura modular limpa (`src/components/Navbar.tsx`, `Hero.tsx`, `ClientMarquee.tsx`, `EventCuratorship.tsx`, `CharacterCatalog.tsx`, `VideoShowcase.tsx`, `BriefingBuilder.tsx`, `ReviewsAndFaq.tsx`, `Footer.tsx`, `FloatingWhatsApp.tsx` e `src/data/portfolioData.ts`).
2. Crie também a rota dedicada `/links` (`src/app/links/page.tsx`) seguindo o mesmo Design System Dark & Gold para substituir o `bio.site` do Instagram da empresa, mantendo todo o tráfego dentro do domínio `estatuaviva.com.br`.
3. Rode o servidor de desenvolvimento e verifique se não há erros de hidratação, TypeScript ou estilos quebrados no mobile (375px) e desktop (1440px).
```

## O Que Muda na Prática com Essa Especificação (Resumo Técnico)

| Aspecto do Site | Como uma IA Comum Faz ("Cara de IA") | Como Este Prompt Faz no Antigravity (Nível Estúdio) |
| :--- | :--- | :--- |
| **Tipografia** | `Inter` ou `Roboto` em tudo, tamanhos monótonos e pesos iguais. | Contraste editorial entre `Cormorant Garamond` (com *itálicos* dramáticos), `Plus Jakarta Sans` e índices em `JetBrains Mono`. |
| **Ornamentos** | Emojis soltos (`✨`, `🎭`, `🚀`) em cada título e botão. | Proibição total de emojis; uso de índices numerados (`01 / 03`), linhas de 1px (`border-[#F4F1EA]/10`) e ícones `lucide-react` de traço fino (`1.5px`). |
| **Cores e Luz** | Gradientes amarelos berrantes e cartões cinzas chapados. | Fundo `#09090B` com textura de filme analógico (`SVG noise`), tom Champagne (`#C5A059`) e efeito de holofote que segue o mouse (`--mouse-x`, `--mouse-y`). |
| **Movimento (UX)** | Transições CSS bruscas ou inexistentes. | Rolagem suave com `Lenis`, revelação tipográfica com `GSAP ScrollTrigger` e filtragem fluida de catálogo com `Framer Motion (layoutId)`. |
| **Conversão** | Formulário estático "Nome, E-mail, Mensagem" que ninguém preenche. | **Configurador Interativo de Briefing** em pílulas + botões em cada personagem que já abrem o WhatsApp (`11 93776-5250`) com a mensagem pronta. |
| **Link da Bio** | Depende de ferramentas terceiras (`bio.site`). | Rota nativa `/links` (`src/app/links/page.tsx`) criada automaticamente no próprio projeto Next.js. |