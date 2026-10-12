---
document_id: AAR-FLOW-004
title: Jornadas e fluxos operacionais do AARKIVO
status: em-revisao
version: 0.1.0
created_at: 2026-10-12
last_updated_at: 2026-10-12
baseline_code: 20d852e11d423ae8560d5eb97242a00687b33e99
information_sources:
  - SRC-IMPLEMENTATION
  - SRC-DOCUMENT
---

# 04 — Jornadas e fluxos operacionais

Este documento representa a experiência dos atores e as decisões de negócio nos processos do AARKIVO. Fluxogramas descrevem caminhos de referência; a regra verificável está em [Requisitos e regras](03-requisitos-e-regras.md).

## 1. Jornada de descoberta e leitura

**Ator:** visitante ou membro.  
**Objetivo:** localizar publicações públicas e acessar seu conteúdo.

```mermaid
flowchart TD
    A[Entrar no AARKIVO] --> B[Consultar feed ou pesquisar]
    B --> C[Aplicar filtros opcionais]
    C --> D[Resultados publicos elegiveis]
    D --> E{Conteudo encontrado?}
    E -- Nao --> F[Revisar consulta]
    E -- Sim --> G[Abrir publicacao]
    G --> H[Ler e consultar autoria]
    H --> I{Participar?}
    I -- Nao --> J[Continuar leitura]
    I -- Sim --> K{Sessao autenticada?}
    K -- Nao --> L[Acessar entrada]
    K -- Sim --> M[Curtir ou comentar]
```

**Controles:** listagens devem filtrar registros publicados e públicos. Leitura não exige sessão; mutações de interação exigem.

## 2. Jornada de ingresso e personalização

**Ator:** pessoa com conta válida.  
**Objetivo:** preparar perfil e interesses para participar do produto.

```mermaid
flowchart TD
    A[Acessar conta] --> B{Autenticado?}
    B -- Nao --> C[Concluir entrada]
    B -- Sim --> D{Onboarding concluido?}
    D -- Sim --> E[Acessar acervo]
    D -- Nao --> F[Informar dados e interesses]
    F --> G[Solicitar conclusao]
    G --> H{Perfil persistido e confirmado?}
    H -- Nao --> I[Exibir erro e recuperar]
    H -- Sim --> J[Atualizar estado de autenticacao]
    J --> K{Confirmado?}
    K -- Nao --> I
    K -- Sim --> E
```

**Pontos de atenção:** nome de usuário único, associação ao ID da autenticação, erros parciais entre banco e provedor de Auth.

## 3. Jornada editorial do autor

**Ator:** membro autor, com sessão e perfil.  
**Objetivo:** produzir uma publicação e controlar sua disponibilização.

```mermaid
flowchart TD
    A[Criar ou abrir rascunho] --> B[Escrever]
    B --> C[Configurar]
    C --> D[Detalhes e referencias]
    D --> E[Revisar]
    E --> F{Acao escolhida}
    F -- Salvar --> G[Validar rascunho]
    G --> H{Versao atual?}
    H -- Nao --> I[Tratar conflito]
    H -- Sim --> J[Gravar rascunho]
    F -- Publicar --> K[Validar publicacao]
    K --> L{Completa e autorizada?}
    L -- Nao --> M[Corrigir dados]
    L -- Sim --> N{Versao atual?}
    N -- Nao --> I
    N -- Sim --> O[Gravar como publicada]
    O --> P{Visibilidade}
    P -- Publica --> Q[Elegivel para descoberta]
    P -- Privada --> R[Disponivel no contexto privado]
```

**Regras resumidas:** publicação exige título, resumo, corpo, tipo, rascunho salvo e tags dentro dos limites. O usuário não deve perder conteúdo silenciosamente em conflito de edição.

## 4. Jornada de gestão do acervo

**Ator:** autor autenticado.  
**Objetivo:** localizar, manter, alterar visibilidade ou remover as próprias publicações.

| Ação | Pré-condição | Resultado esperado |
| --- | --- | --- |
| Listar | Sessão válida e perfil existente | Relação dos próprios registros |
| Editar | Propriedade válida | Abrir conteúdo para atualização conforme estado |
| Alternar visibilidade | Publicação em estado `published` | Alternância entre `public` e `private`, com invalidação do acesso público aplicável |
| Excluir | Propriedade ou autorização administrativa | Registro excluído conforme implementação e política a ratificar |
| Retirar/republicar | Estado e versão compatíveis | Nova situação editorial gravada |

**Diferença crucial:** *retirar publicação* altera o estado; *tornar privada* mantém o estado de publicação e restringe sua exposição. Não tratar como sinônimos.

## 5. Jornada de comentários e respostas

**Ator:** membro autenticado.  
**Objetivo:** participar da discussão em uma publicação pública.

```mermaid
flowchart TD
    A[Abrir publicacao publica] --> B[Curtir ou escrever comentario]
    B --> C{Sessao valida?}
    C -- Nao --> D[Solicitar login]
    C -- Sim --> E{Tipo de interacao}
    E -- Curtida --> F[Alternar curtida]
    E -- Comentario --> G[Validar conteudo e limite]
    G --> H{Alvo valido?}
    H -- Nao --> I[Recusar operacao]
    H -- Sim --> J[Publicar comentario ou resposta]
    J --> K[Permitir acoes do autor]
    F --> L[Atualizar contagem e estado]
```

**Exceções:** sessão ausente, requisição suspeita, limite de frequência, comentário pai inválido e conteúdo indisponível. Resposta a comentário de outra publicação deve ser objeto de teste negativo específico.

## 6. Jornada administrativa de moderação

**Ator:** administrador autorizado.

```mermaid
flowchart TD
    A[Consultar comentario] --> B{Acao}
    B -- Ocultar --> C[Alterar para hidden]
    B -- Restaurar --> D[Alterar para visible]
    B -- Excluir --> E[Remover registro]
    C --> F[Registrar auditoria]
    D --> F
    E --> F
    F --> G[Atualizar consulta de leitura]
```

As três decisões são distintas e devem possuir autorização e rastreabilidade próprias.

## 7. Jornada de suporte

**Atores:** membro solicitante e analista autorizado.

```mermaid
flowchart TD
    A[Membro abre chamado] --> B[Registrar e categorizar]
    B --> C[Consultar fila administrativa]
    C --> D[Analista avalia]
    D --> E{Acao}
    E -- Resposta externa --> F[Mensagem visivel ao membro]
    E -- Nota interna --> G[Mensagem restrita a equipe]
    E -- Situacao --> H[Atualizar estado do ticket]
    F --> I[Membro acompanha]
    G --> H
    H --> I
```

**Estados disponíveis no código:** novo, em atendimento, aguardando retorno, em desenvolvimento, resolvido e fechado. Um mapa de transições permitido e SLA dependem de aprovação de negócio.

## 8. Critérios de consistência entre jornadas

- Exibição pública nunca revela conteúdo classificado como privado.
- Autorização deve ser aplicada no serviço, não somente nas opções visíveis da interface.
- Salvamento de conteúdo diferencia rascunho, publicação e situação de visibilidade.
- Mensagens internas de atendimento não aparecem na jornada do solicitante.
- Falhas relevantes resultam em resposta compreensível, sem indicação de sucesso falso.

## 9. Interfaces e origens técnicas

| Jornada | Componentes principais |
| --- | --- |
| Descoberta | `src/app/(public)/publicacoes/`, `src/modules/discovery/` |
| Onboarding | `src/app/(public)/onboarding/`, `src/modules/identity/` |
| Composição | `src/app/(public)/escrever/`, `src/components/editor/`, `src/modules/publishing/` |
| Perfil | `src/app/(public)/perfil/`, `src/modules/identity/profile-actions.ts` |
| Interações | `src/components/editorial/comments-section.tsx`, `src/modules/interactions/` |
| Administração | `src/app/admin/`, `src/modules/admin/` |
| Suporte | `src/app/(public)/suporte/`, `src/app/admin/suporte/`, `src/modules/support/` |

Os modelos são representações de processo. Verificação ponta a ponta, estados não previstos e critérios de aprovação ficam sob o [plano de qualidade](07-qualidade-e-operacao.md).
