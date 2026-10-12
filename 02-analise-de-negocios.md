---
document_id: AAR-BA-002
title: Analise de negocios e processos - AARKIVO
status: em-revisao
version: 0.1.0
created_at: 2026-10-12
last_updated_at: 2026-10-12
baseline_code: 20d852e11d423ae8560d5eb97242a00687b33e99
information_sources:
  - SRC-DOCUMENT
  - SRC-IMPLEMENTATION
---

# 02 — Análise de negócios e processos — AARKIVO

## 1. Finalidade

Definir **o que o negócio precisa realizar**, os participantes de cada atividade e as regras que condicionam as operações da plataforma. Este documento descreve os processos em funcionamento na versão do código referenciada. As decisões de design técnico estão no [documento de arquitetura](05-arquitetura-e-dados.md) e os critérios verificáveis nos [requisitos](03-requisitos-e-regras.md).

## 2. Cadeia de valor do produto

```mermaid
flowchart LR
    A[Identificar e autenticar] --> B[Preparar perfil]
    B --> C[Criar conhecimento]
    C --> D[Classificar e revisar]
    D --> E[Disponibilizar no acervo]
    E --> F[Descobrir e ler]
    F --> G[Interagir]
    G --> H[Moderar e apoiar]
```

A navegação pública de leitura e descoberta não depende da autenticação. O diagrama mostra o ciclo completo de participação e não uma sequência obrigatória para todo visitante.

## 3. Mapa dos processos

| Código | Processo | Gatilho | Resultado |
| --- | --- | --- | --- |
| PRC-01 | Ingresso e preparação do perfil | Conta autenticada ainda necessita concluir cadastro | Perfil e interesses disponíveis |
| PRC-02 | Produção editorial | Autor inicia ou retoma produção | Rascunho persistido, atualizado ou publicação |
| PRC-03 | Publicação e visibilidade | Autor decide disponibilizar/alterar conteúdo | Conteúdo público ou privado conforme autorização |
| PRC-04 | Descoberta e leitura | Leitor procura conteúdo | Consulta a publicações públicas |
| PRC-05 | Participação social | Membro quer curtir, comentar ou responder | Interação associada à identidade |
| PRC-06 | Moderação | Administrador identifica interação inadequada | Comentário ocultado, restaurado ou excluído |
| PRC-07 | Atendimento | Membro solicita ajuda | Chamado criado e acompanhado |
| PRC-08 | Administração da classificação | Admin precisa organizar temas | Categorias/tags mantidas conforme controles |

## 4. Participantes e responsabilidades

| Papel | Realiza | Limite de responsabilidade |
| --- | --- | --- |
| Visitante | Navega, pesquisa, lê | Não executa mutações autenticadas |
| Membro/autor | Personaliza perfil, escreve, publica, interage e acompanha chamados | Não gerencia conteúdos de terceiros sem autorização |
| Administrador | Administra conteúdos e categorias, modera e acompanha suporte | Requer autorização específica do sistema |
| Plataforma | Valida, persiste, controla versões, autoria e visibilidade | Não substitui decisão humana sobre conteúdo ou política |
| Responsável pelo produto | Aprova regras e prioridades | Aprovação de negócio não é prova de implementação |

## 5. PRC-01 — Ingresso e onboarding

**Entrada:** identidade autenticada e informações fornecidas pelo membro. **Saída:** perfil relacional e interesses persistidos; conclusão do onboarding registrada.

**Atividades:** identificar sessão; coletar dados e interesses; gravar perfil/interesses; verificar a gravação; atualizar os metadados de autenticação. Em erro, a conclusão não deve ser anunciada como bem-sucedida.

**Regras:** somente o usuário autenticado conclui o próprio processo; identificadores de perfil são vinculados à identidade; acesso à área administrativa é uma permissão separada.

**Exceções principais:** sessão expirada, nome de usuário já utilizado, falha na gravação e divergência entre perfil e provedor de autenticação.

## 6. PRC-02 — Produção editorial

**Entrada:** autor autenticado, dados do conteúdo e versão de edição. **Saída:** rascunho salvo ou publicação confirmada.

**Atividades:** iniciar/retomar rascunho, escrever, configurar, informar detalhes, revisar, salvar ou publicar. O editor utiliza quatro etapas: **Escrever → Configurar → Detalhes → Revisar**.

**Regras:** salvamento e publicação são vinculados ao autor; publicar demanda validações adicionais; o sistema verifica a versão persistida para evitar sobrescrita silenciosa.

**Exceções principais:** perfil inexistente, dados incompletos, falha de gravação e conflito de edição.

## 7. PRC-03 — Publicação e controle de acesso

**Entrada:** publicação identificada, titular/autorização e visibilidade escolhida. **Saída:** disponibilidade conforme estado e restrição de acesso.

**Regras fundamentais:**
- `draft`: conteúdo ainda em preparação;
- `published`: conteúdo publicado, com visibilidade `public` ou `private`;
- `withdrawn`: conteúdo retirado do estado publicado;
- conteúdos privados ou não publicados não integram descoberta pública;
- alternância de visibilidade pela gestão do perfil exige estado publicado;
- exclusão/alteração por autor diferente é negada, ressalvadas permissões administrativas.

O **status** de publicação não é a mesma dimensão que a **visibilidade**: um conteúdo pode estar publicado e ser privado. Essa distinção deve ser mantida em telas, APIs, testes e documentação.

## 8. PRC-04 — Descoberta e leitura

**Entrada:** consulta ou seleção de publicação. **Saída:** resultados de pesquisa/feed ou página de leitura de conteúdo elegível.

**Atividades:** consultar publicações públicas, aplicar termos/filtros disponíveis, ordenar, abrir conteúdo e acessar seu contexto de autoria.

**Regras:** elegibilidade de leitura pública combina estado publicado e visibilidade pública. A busca prevê texto, área, tipo, categoria, tag, ano, ordenação e visualização conforme contrato técnico.

## 9. PRC-05 — Participação e interação

**Entrada:** publicação pública acessível e membro autenticado. **Saída:** curtida/remoção de curtida, comentário, resposta ou alteração autorizada de comentário.

**Atividades:** identificar conta; validar ação e payload; verificar alvo e limites; persistir e retornar estado atualizado.

**Regras:** criação de comentário e curtida exige autenticação; curtidas de publicação são reversíveis; a edição de comentário pertence ao autor; exclusão por administrador usa permissão própria. Respostas associam-se a um comentário principal.

**Exceções:** tentativa anônima de escrita, conteúdo proibido/excessivo, limite de frequência, publicação indisponível, autor incorreto e referência inválida a comentário pai.

## 10. PRC-06 — Moderação

**Gatilho:** decisão do administrador de controlar comentário. **Saída:** comentário ocultado, restaurado ou excluído.

**Regras:** ações administrativas requerem permissão específica; ocultação e restauração alteram o estado; exclusão remove definitivamente o registro e registra evento administrativo mínimo. A política de retenção aplicável deve ser observada.

## 11. PRC-07 — Atendimento

**Entrada:** membro autenticado descreve solicitação. **Saída:** ticket registrado, mensagens e estado.

**Atividades:** abrir chamado; consultar próprios chamados; analisar fila administrativa; trocar mensagens; registrar notas internas; alterar status.

**Regras:** cliente só consulta seus próprios tickets; notas internas não são devolvidas ao usuário comum; estados cadastrados são `novo`, `em_atendimento`, `aguardando_retorno`, `em_desenvolvimento`, `resolvido` e `fechado`.

**Definições de negócio pendentes:** condições de transição, SLA, escalonamento, reabertura e indicadores operacionais. Não presumir a existência desses processos apenas pelo cadastro de estados.

## 12. Indicadores de processo

| Processo | Indicadores que poderão ser instrumentados |
| --- | --- |
| Onboarding | Conclusões / tentativas; falhas por etapa |
| Editorial | Rascunhos iniciados e publicados; conflitos resolvidos |
| Descoberta | Consultas e acessos públicos sem erro |
| Interação | Participações válidas; bloqueios por abuso |
| Atendimento | Primeira resposta, tempo até resolução e reaberturas |

Não são apresentados números de desempenho sem medições confiáveis.

## 13. Fronteiras entre análise de negócios e engenharia

A análise de negócios é responsável por esclarecer **atores, necessidades, eventos, regras, exceções, critérios e impactos**. A engenharia define **representações físicas, esquemas, algoritmos, componentes, integração e mecanismos de segurança**, com revisão conjunta para manter coerência.

Em um projeto de execução individual essas responsabilidades podem coincidir na mesma pessoa; ainda assim permanecem **documentalmente distintas**.

## 14. Detalhamento associado

Os fluxos com decisões e transições estão em [Jornadas e processos](04-jornadas-e-processos.md). Os requisitos aprováveis constam de [Requisitos e regras](03-requisitos-e-regras.md); os comportamentos técnicos são rastreáveis a partir do [catálogo funcional](08-catalogo-funcional.md). Este documento não é um histórico de alterações.
