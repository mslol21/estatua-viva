# Estátua Viva Produções

Site institucional em Next.js 14, React 18, TypeScript e Tailwind CSS. Identidade em azul petróleo, dourado e tons claros, baseada nas referências fornecidas pela empresa.

## Executar

```sh
npm ci
npm run dev
npm run build
npm start
```

## Conteúdo e interações

- Página inicial com apresentação, seleção de tipos de evento e catálogo filtrável.
- Detalhes dos personagens em modal acessível (Radix Dialog).
- Formulário que prepara uma mensagem com os dados do evento e abre o WhatsApp. O visitante confirma o envio no WhatsApp; nenhum dado é armazenado pelo site.
- FAQ acessível e links para os canais externos da empresa.
- Página `/links` com a mesma identidade visual.
- Rolagem Lenis com respeito à preferência por movimento reduzido.

## Imagens da empresa

As três referências fornecidas foram otimizadas em WebP em `public/brand/`. `BrandLogo` enquadra a logo presente na arte de identidade, sem recriar o desenho. Uma versão isolada em SVG ou PNG transparente poderá substituir esse enquadramento quando estiver disponível.

O catálogo utiliza as duas imagens reais recebidas. Os demais estilos são apresentados sem fotografias de banco e podem receber fotos reais em `src/data/portfolioData.ts` no campo `imageUrl`.

Vídeos de demonstração sem relação com a empresa e depoimentos sem fonte foram retirados da apresentação. A seção de bastidores direciona ao Instagram oficial e as avaliações podem ser consultadas diretamente no Google. Repertório e dados de contato existentes devem ser mantidos pela produção.

## Verificação da revisão visual

- `npx tsc --noEmit` e `npm run build`.
- Conferência visual da home no navegador.
- Verificação de filtro do catálogo, modal de personagem, seleção de evento, FAQ e navegação para `/links`.
- Responsividade implementada em CSS; a revisão no navegador desta sessão foi realizada no viewport de desktop.
