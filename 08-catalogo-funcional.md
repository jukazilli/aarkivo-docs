---
document_id: AAR-CAT-008
title: Catalogo funcional da aplicacao
status: em-revisao
version: 0.1.0
created_at: 2026-10-12
last_updated_at: 2026-10-12
baseline_code: 20d852e11d423ae8560d5eb97242a00687b33e99
information_sources:
  - SRC-IMPLEMENTATION
  - SRC-TEST
---

# 08 — Catálogo funcional do AARKIVO

## 1. Finalidade e leitura

**Revisão de direção em 14/10/2026:** prevalece o [briefing multiusuário](01-briefing.md). A origem de implementação indicada no cabeçalho é histórica. Este catálogo não recebeu novo aceite integrado ou de produção por esta revisão documental. As capacidades abaixo precisam registrar a versão aceita ao concluir a remediação; presença de código não comprova disponibilidade, integridade ou desempenho.

Inventariar os módulos e recursos identificáveis na aplicação, suas superfícies e principais limites. Os itens deste catálogo foram **localizados no código da versão referenciada**; a efetiva liberação em produção requer confirmação do deploy e testes associados.

**Categorias de constatação:**
- **Implementação localizada:** rota, serviço e/ou componente existem na versão analisada.
- **Dependente de validação:** integração, usabilidade, permissões e comportamento em ambiente ainda precisam de comprovação.
- **Não confirmado:** não apresentar como disponível sem evidência adicional.

## 2. Identidade e perfis

| Função | Superfície | Descrição operacional | Implementação |
| --- | --- | --- | --- |
| Entrada e sessão | `/sign-in`, `/sign-up` | Autenticação de usuários e preparação de sessão | `src/app/sign-in/`, `sign-up/`, `src/modules/identity/` |
| Onboarding | `/onboarding` | Dados de perfil, interesses e conclusão do cadastro | `identity/onboarding-action.ts`, `profile-repository.ts` |
| Perfil próprio | `/perfil` | Visualizar/alterar dados e gerenciar publicações | `identity/profile-actions.ts`, `src/components/profile/` |
| Perfil público | `/perfil/[username]` | Apresentar informações públicas de autor e publicações | `src/app/(public)/perfil/[username]/` |
| Permissão administrativa | `/admin` | Restringir operações a contas autorizadas | `identity/access.ts`, `admin.ts` |

**Regras principais:** sessões autenticadas para ações restritas, perfil vinculado à identidade e separação entre usuário comum e administrador.

## 3. Escrita e gestão do acervo

| Função | Superfície | Descrição operacional | Implementação |
| --- | --- | --- | --- |
| Composer | `/escrever` | Compor conteúdos em Escrever, Configurar, Detalhes e Revisar | `src/components/editor/multistep-draft-composer.tsx` |
| Editor de blocos | Composer | Edição de conteúdo e integrações de texto/mídia | `src/components/editor/blocknote-editor.tsx` |
| Rascunho | Composer | Criar, salvar e retomar texto | `publishing/draft-repository.ts`, `escrever/actions.ts` |
| Metadados | Composer | Título, resumo, tipo, tags, campos acadêmicos, URL e capa | `publishing/draft-domain.ts` |
| Referências | Composer | Cadastrar vínculos bibliográficos e links relacionados | `publishing/draft-domain.ts`, `src/lib/db/schema.ts` |
| Publicação | Composer e área do autor | Publicar, atualizar, controlar versão e visibilidade | `publishing/draft-repository.ts`, `escrever/actions.ts` |
| Gestão pelo perfil | `/perfil` | Listar conteúdos, alternar visibilidade e excluir | `identity/profile-repository.ts`, `profile-actions.ts` |

**Limitações de descrição:** cadastro de referências não significa formatação automática completa segundo norma acadêmica; arquivo de exportação não comprova fidelidade final de todos os formatos; a existência de um editor de blocos não confirma colaboração em tempo real.

## 4. Descoberta e navegação

| Função | Superfície | Descrição operacional | Implementação |
| --- | --- | --- | --- |
| Página inicial | `/` | Acesso e apresentação do produto | `src/app/(public)/page.tsx` |
| Feed e acervo | `/publicacoes` | Navegar por publicações públicas | `src/app/(public)/publicacoes/` |
| Pesquisa e filtros | `/publicacoes`, API de busca | Consultar por termo, área, tipo, categoria, tag, ano e ordenação | `discovery/domain.ts`, `discovery/publications.ts` |
| Página de leitura | `/publicacoes/[slug]` | Ler conteúdo e visualizar interações elegíveis | `src/app/(public)/publicacoes/[slug]/page.tsx` |
| Áreas de conhecimento | `/areas` | Navegação temática | `src/app/(public)/areas/page.tsx` |
| Página de autor | `/perfil/[username]` | Contexto de autoria e materiais públicos | `src/modules/identity/profile-repository.ts` |

**Restrição essencial:** as consultas públicas selecionam conteúdo `published` e `public`.

## 5. Interações e moderação

| Função | Superfície | Descrição operacional | Implementação |
| --- | --- | --- | --- |
| Curtida de publicação | Leitura/feed | Alternar curtida por membro autenticado | `api/publications/[slug]/like/route.ts`, `interactions/likes/` |
| Comentário | Leitura | Enviar comentário em publicação pública | `api/publications/[slug]/comments/route.ts` |
| Resposta encadeada | Leitura | Associar resposta a comentário pai | `interactions/comments/repository.ts`, `comments-section.tsx` |
| Curtida de comentário | Leitura | Alternar curtida de comentário | `api/comments/[id]/like/route.ts` |
| Edição/exclusão própria | Leitura | Alterar comentário respeitando autoria | `api/comments/[id]/route.ts` |
| Moderação | `/admin/comentarios` | Ocultar, restaurar ou excluir comentários | `interactions/moderation/repository.ts` |

**Pontos de homologação:** validações completas de threads, dados anteriores anônimos, controle de concorrência e política de retenção.

## 6. Suporte e administração

| Função | Superfície | Descrição operacional | Implementação |
| --- | --- | --- | --- |
| Central do cliente | `/suporte` | Criar e acompanhar tickets autenticados | `support/actions.ts`, `support/repository.ts` |
| Atendimento administrativo | `/admin/suporte` | Consultar fila, responder e alterar situação | `src/app/admin/suporte/` |
| Notas internas | Atendimento | Distinguir informação interna de mensagem ao cliente | `support/repository.ts` |
| Administração editorial | `/admin/publicacoes` | Gerenciar conteúdos conforme permissões | `src/app/admin/publicacoes/` |
| Administração de taxonomia | `/admin/taxonomia` | Manter categorias e tags | `src/modules/taxonomy/` |
| Operação e saúde | `/api/health` e scripts | Consultas básicas de estado e verificações | `src/app/api/health/`, `scripts/` |

A Central de Suporte é uma implementação própria e não deve ser descrita como integração comprovada com serviço externo de helpdesk.

## 7. Conteúdos institucionais

| Superfície | Finalidade |
| --- | --- |
| `/sobre` | Apresentação institucional |
| `/privacidade` | Comunicação de privacidade |
| `/termos` | Condições de uso |
| `/docs` | Ponto de entrada para ajuda e documentação de usuários |

A rota de documentação pública está presente; o material definitivo de ajuda será desenvolvido a partir das capacidades validadas e não integra este catálogo técnico.

## 8. Capacidades não declaradas como homologadas

Este catálogo **não comprova**:
- colaboração simultânea em tempo real entre autores;
- aplicação integral de padrões bibliográficos a todos os tipos de referência;
- entrega final da exportação acadêmica em todos os formatos;
- integrações operacionais com serviços externos citados apenas como inspiração;
- disponibilidade em produção de todas as rotas e integrações da versão do Git;
- metas de adoção ou qualidade atingidas.

Esses temas exigem teste, prova de implantação e escopo aceito.

## 9. Fontes oficiais de regra e validação

A fonte dos objetivos é o [briefing](01-briefing.md); os processos estão na [análise de negócios](02-analise-de-negocios.md) e nas [jornadas](04-jornadas-e-processos.md); os contratos em [requisitos](03-requisitos-e-regras.md), os dados em [arquitetura](05-arquitetura-e-dados.md) e a comprovação em [qualidade](07-qualidade-e-operacao.md).

**Escopo controlado:** versão de código indicada nos metadados; a promoção deste catálogo de `em-revisao` para `aprovado` requer revisão do responsável pelo produto e evidências de validação aplicáveis.
