# RELATÓRIO TÉCNICO DE MIGRAÇÃO DEFINITIVA DE IMAGENS
**Projeto:** Estátua Viva Produções  
**Branch de Implementação:** `feat/migracao-imagens-portfolio`  
**Objetivo:** Centralização de 100% dos ativos fotográficos no repositório, eliminação de dependências do domínio legado (`estatuaviva.com.br`) e otimização para tráfego pago (Google Ads / Meta Ads).

---

## 1. Diagnóstico Inicial e Riscos Identificados

Antes desta migração, a arquitetura visual do projeto apresentava pontos críticos de fragilidade:
1. **Dependência de Host Legado:** O componente `OriginalPhotoGallery.tsx` e o arquivo `portfolioData.ts` realizavam mais de 80 requisições diretas a `https://estatuaviva.com.br/wp-content/uploads/...`. Se o servidor WordPress antigo sofresse instabilidade ou fosse descontinuado, as galerias do novo site ficariam quebradas.
2. **Arquivos Não Otimizados:** Haviam 6 arquivos PNG na raiz de `public/` (`7.png` a `12.png`) somando mais de 23 MB, impactando severamente métricas de LCP (Largest Contentful Paint) e consumo de franquia móvel.
3. **Ausência de Fotografias Chave de Cases:** Imagens de alto valor comercial presentes na apresentação comercial confidencial (ex: estátuas interagindo com Cafu, performances em feiras de tecnologia com VR, mascote Loctite) não estavam aproveitadas nas landing pages de conversão.

---

## 2. Metodologia de Extração e Conversão

### A. Extração Segura da Fonte A (Apresentação Comercial)
- O arquivo `estatua-viva-assets-pdf.zip` foi descompactado em diretório scratch isolado.
- Foram identificadas 27 imagens únicas de alta resolução.
- As fotografias das páginas prioritárias (2, 4, 5, 7, 9 e 10) foram selecionadas.
- Todas as imagens foram processadas com o motor `sharp`, convertidas para WebP com qualidade visual 86, sem interpolação artificial e com remoção estrita de metadados EXIF/câmera para preservação da privacidade.

### B. Download e Preservação da Fonte B (Site Antigo)
- Script automatizado de download com verificação de integridade (HTTP 200, tamanho mínimo e SHA-256).
- 83 de 83 imagens do portfólio histórico foram baixadas com 100% de sucesso.
- Nenhuma falha de download e nenhum arquivo corrompido.
- Todas foram renomeadas de forma semântica (letras minúsculas, hífens, termos descritivos) e convertidas para WebP de alta fidelidade.

### C. Otimização da Fonte C (Site Atual)
- Os 6 PNGs de alta resolução da galeria da equipe (`7.png` a `12.png`, 23 MB) foram convertidos para `/images/portfolio/elenco-performance-01.webp` a `06.webp` (totalizando ~1,8 MB, economia de 92% de espaço).
- Os PNGs pesados originais foram removidos da raiz de `public/`.
- As imagens institucionais existentes (`perfil-oficial.webp`, `hero-bronze.jpg`, etc.) foram padronizadas na nova hierarquia.

---

## 3. Nova Estrutura de Diretórios de Imagens

```text
public/
  images/
    brand/             # Logotipos oficiais, texturas obsidiana e ornamentos dourados
    hero/              # Banners imersivos de abertura de páginas
    corporativo/       # Feiras, estandes, tecnologia (VR), convenções empresariais
    confraternizacoes/ # Interações de público, comemorações e celebrações
    natal/             # Personagens natalinos, Papai Noel clássico e anjos
    estatuas-vivas/    # Mármore Branco, Ouro Imperial, Prata Industrial, Hermes, Drummond
    personagens/       # Personagens vivos, Catrina, Piratas, Chaplin, literatura
    portfolio/         # Ensaios de elenco, acervo geral e momentos cênicos
    direcao-artistica/ # Fotografias oficiais de Rodolfo Valentino
    cases/             # Caterpillar 70 Anos, Loctite (Henkel), Monet Le Rêve, Cafu
```

---

## 4. Teste de Independência e Resultados

### Verificação de Dependências Externas
- Busca global no código (`git grep -i "estatuaviva.com.br" src/`): **0 ocorrências encontradas**.
- Remoção do domínio `estatuaviva.com.br` das `remotePatterns` do `next.config.mjs`.
- Todas as chamadas de imagem agora são relativas locais (ex: `/images/estatuas-vivas/...`), sendo servidas diretamente pela CDN da Vercel / Next.js Image Optimization.

### Comparativo de Peso
- **Peso antes da migração:** 40,62 MB
- **Peso após a migração:** 9,48 MB
- **Economia direta:** 31,14 MB (**-76,7%**)
- **Ganho de performance:** Redução drástica no tempo de carregamento em redes 4G/5G móveis, eliminação de gargalos de rede externa e zero risco de imagens quebradas por instabilidade no domínio antigo.
