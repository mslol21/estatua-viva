# Estátua Viva Produções — implantação e mensuração

Domínio oficial planejado: https://estatuavivaproducoes.com.br

## Antes da virada de domínio
1. Adicionar e validar o domínio no projeto correto da Vercel (DNS e HTTPS).
2. Definir NEXT_PUBLIC_SITE_URL=https://estatuavivaproducoes.com.br na produção e reconstruir o site. Até lá, os canonicals e o sitemap continuam apontando ao subdomínio em operação.
3. Redirecionar permanentemente todas as rotas equivalentes de estatuaviva.konnexy.com.br para o domínio oficial, preservando caminhos e query strings; testar antes de habilitar.
4. Verificar as duas propriedades no Google Search Console e enviar https://estatuavivaproducoes.com.br/sitemap.xml; monitorar cobertura e indexação.
5. Atualizar a URL no Perfil da Empresa no Google e nos perfis sociais. Confirmar categoria real disponível, áreas de atendimento e serviços sem publicar endereço administrativo como loja aberta ao público.

## Google Tag Manager e conversões
- Criar contêiner GTM Web e definir NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX na Vercel; sem a variável, nenhum script GTM é carregado.
- No GTM, configurar tag GA4, consentimento e conversões conforme política de privacidade/LGPD. Não duplicar tags GA4 por outros plugins.
- Eventos disponíveis: generate_lead (cliques no WhatsApp via tracking.ts) e virtual_page_view (navegação interna). O clique não comprova envio de mensagem nem contratação.
- Criar conversões no Google Ads somente depois de validar tags no Tag Assistant e no GA4 DebugView; acompanhar origem por UTM, custo por lead e contratos efetivos.
- Para LGPD, revisar a base legal e implantar consentimento apropriado antes de ativar tags não essenciais.

## Medição e melhoria contínua
- Search Console: impressões, consultas, CTR, páginas indexadas.
- GA4: sessões, origens, engajamento e eventos de clique.
- Ads: gasto, CPC, cliques, conversões validadas e custo por contato qualificado.
- Negócio: orçamento recebido, proposta enviada e contrato fechado (registro externo/CRM).
- Auditar Core Web Vitals, acessibilidade, conteúdo e dados estruturados periodicamente.
- SEO/AEO/GEO não garante que assistentes de IA citem ou recomendem a empresa.
