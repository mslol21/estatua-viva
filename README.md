# Estátua Viva Produções — Site Editorial de Alta Conversão

Website institucional, catálogo cênico interativo e hub de atendimento para a **Estátua Viva Produções** (fundada e dirigida por Rodolfo Valentino desde 2005 em São Paulo - SP).

Desenvolvido com foco em estética editorial (*Dark & Champagne Gold*, nível estúdio internacional / Awwwards) e alta taxa de conversão (CRO).

---

## 🎭 Tecnologias e Bibliotecas

- **Core:** Next.js 14 (App Router, TypeScript) + Tailwind CSS
- **Animações & Layout Fluido:**
  - `framer-motion` (transições com `layoutId` nos filtros de catálogo)
  - `lenis` (smooth scrolling editorial inercial)
  - `embla-carousel-react` (carrossel drag-free com física suave)
- **Componentes Primitivos (Headless & Acessibilidade):**
  - `@radix-ui/react-dialog` (modais cênicos e visualizadores de vídeo)
  - `@radix-ui/react-accordion` (FAQ acessível)
- **Design System & Tipografia:**
  - `Cormorant Garamond` (display / serifadas clássicas)
  - `Plus Jakarta Sans` (leitura / UI)
  - `JetBrains Mono` (metadados e índices técnicos)
  - Cores: Obsidian Matte (`#09090B`), Warm Charcoal (`#111113`), Alabaster (`#F4F1EA`) e Champagne Gold (`#C5A059`)
  - Overlay sutil de granulação de filme analógico em SVG

---

## 🏛️ Estrutura de Seções

1. **Top Bar & Navegação Flutuante:** Monograma `EV`, pílula de navegação em vidro fosco e acesso rápido ao WhatsApp e Instagram.
2. **Hero Cênica:** Headline monumental, aura de holofote teatral e rodapé métrico (5.0 Google, +20 anos, cobertura nacional).
3. **Chancela Corporativa & Emissoras:** TV Globo (*Novela As Três Graças, Jô, Faustão*), Record (*Eliana*), Caterpillar, Loctite, Museu do Ipiranga e Monet.
4. **Curadoria por Tipo de Evento:** 3 painéis editoriais (Corporativo & Feiras, Casamentos & Gala, Temáticos & Culturais).
5. **Acervo de Personagens:** Grid Bento assimétrico com efeito spotlight no cursor, categorias dinâmicas e dossiê detalhado.
6. **Galeria em Movimento:** Carrossel audiovisual de bastidores e TV com player em modal.
7. **Montador de Briefing Express:** Formulário interativo em pílulas que formata o briefing e envia direto para o WhatsApp.
8. **Prova Social & FAQ:** Selo oficial de 5,0 estrelas no Google Perfil de Empresa e perguntas frequentes.
9. **Footer Monumental:** Informações oficiais do atelier no Tatuapé (SP).
10. **Rota `/links`:** Hub no próprio domínio para substituir agregadores externos no perfil do Instagram.

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```
