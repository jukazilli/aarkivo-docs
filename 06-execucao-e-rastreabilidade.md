---
document_id: AAR-EXEC-006
title: Processo de entrega e rastreabilidade
status: em-revisao
version: 0.1.0
created_at: 2026-10-12
last_updated_at: 2026-10-12
baseline_code: 20d852e11d423ae8560d5eb97242a00687b33e99
information_sources:
  - SRC-DOCUMENT
  - SRC-IMPLEMENTATION
  - SRC-EVIDENCE
---

# 06 — Processo de entrega e rastreabilidade — AARKIVO

## 1. Finalidade

Estabelecer como uma necessidade de negócio é transformada em uma alteração de software, desde o levantamento até a entrega e manutenção. O processo se aplica a **novas funcionalidades, ajustes em componentes existentes, correções e melhorias técnicas**, com profundidade documental proporcional ao impacto.

## 2. Ciclo de trabalho

```mermaid
flowchart LR
    A[Briefing] --> B[Analise e diagnostico]
    B --> C[Requisitos e aceite]
    C --> D[Desenho da solucao]
    D --> E[Planejamento]
    E --> F[Implementacao]
    F --> G[Testes e homologacao]
    G --> H[Entrega e operacao]
    H --> I[Documentacao vigente]
```

A sequência é um **padrão de trabalho** para alterações novas; não significa que todas essas formalidades tenham sido realizadas separadamente em entregas anteriores.

## 3. Fases, artefatos e condições de saída

| Fase | Entrada | Artefato | Condição de saída |
| --- | --- | --- | --- |
| Briefing | Problema, demanda ou oportunidade | Contexto, objetivos, limites e motivação | Problema inteligível e escopo inicial delimitado |
| Análise | Processo real e necessidades de atores | AS-IS, regras, exceções e impacto | Estado atual reconhecido e alternativas identificadas |
| Especificação | Necessidade priorizada | Requisitos, critérios de aceite e TO-BE quando cabível | Escopo testável e decisões de negócio explícitas |
| Design | Requisitos aceitos | Fluxos, dados, interfaces, integrações e decisões técnicas | Viabilidade e riscos técnicos examinados |
| Planejamento | Solução e dependências | Itens de trabalho, responsáveis, cortes e testes | Entrega divisível e verificável |
| Implementação | Corte definido | Código, migrações, testes e alterações documentais | Mudança rastreada no Git |
| Validação | Artefatos executáveis | Resultado de testes, revisão e homologação | Critérios aceitos ou desvios registrados |
| Entrega | Versão validada | Release e plano de operação | Deploy/rollback e disponibilidade verificados |
| Manutenção | Sistema vigente | Documentação e registros de mudança | Fontes oficiais sincronizadas com a versão |

## 4. Responsabilidades por tipo de decisão

| Tema | Analista de negócios/produto | Engenharia e qualidade |
| --- | --- | --- |
| Problema e processo | Identifica atores, regras e objetivo | Esclarece impactos técnicos |
| Requisitos e aceite | Define resultados esperados e exceções | Testa viabilidade e ambiguidade |
| Dados | Define informações de negócio e relacionamentos conceituais | Modela esquema físico, restrições, migrações e consultas |
| Interfaces | Define tarefas e regras de interação | Detalha componentes, estados técnicos e implementação |
| Entrega | Homologa aderência ao problema | Testa, revisa, implanta e monitora |

Papéis podem ser acumulados em equipes pequenas ou projetos pessoais. A separação é **de responsabilidade e documentação**, e não uma afirmação de equipe multidisciplinar formalmente contratada.

## 5. Classificação de solicitações

| Tipo | Profundidade mínima recomendada |
| --- | --- |
| Correção localizada | Falha, comportamento esperado, impacto, teste e registro da alteração |
| Melhoria funcional | Diagnóstico AS-IS, requisitos, impacto, critérios de aceite, implementação e validação |
| Funcionalidade inédita | Briefing, atores, jornadas, requisitos, design, planejamento, testes e operação |
| Mudança de arquitetura ou dados | Decisão técnica, compatibilidade, migração, segurança, rollback e testes |
| Alteração de regra de negócio | Aprovação explícita, rastreabilidade e atualização dos contratos funcionais |

## 6. Rastreabilidade mínima

Cada requisito deve poder ser percorrido em ambas as direções:

**Necessidade → regra/requisito → desenho → item de trabalho → código/PR → teste → evidência → versão disponibilizada.**

| Elemento | Identificador | Referência permanente |
| --- | --- | --- |
| Processo | `PRC-*` | [Análise de negócios](02-analise-de-negocios.md) |
| Requisito | `RF-*`, `RNF-*` | [Requisitos e regras](03-requisitos-e-regras.md) |
| Tarefa de execução | Código de tarefa atribuído ao recorte | [Registro de tarefas](https://github.com/jukazilli/oplib/tree/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/tasks/) |
| Decisão | Código de decisão aplicável | [Decisões técnicas e de produto](https://github.com/jukazilli/oplib/tree/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/decisions/) |
| Código | Caminho + commit/PR | Diretórios `src/` e `drizzle/` |
| Validação | Identificação do teste e execução | `tests/`, [evidências](https://github.com/jukazilli/oplib/tree/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/evidence/) e [registro de testes](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/testing/MVP_TEST_LEDGER.md) |
| Operação | Identificador de release e ambiente | [Runbooks](https://github.com/jukazilli/oplib/tree/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/runbooks/) e workflows |

Referências históricas preservam seus códigos; novas tarefas não devem reutilizar identificadores diferentes para o mesmo objeto.

## 7. Exemplos de vínculo requisito → código

| Requisito | Implementação primária | Prova a manter |
| --- | --- | --- |
| RF-ID-02 — Concluir onboarding | `src/modules/identity/onboarding-action.ts`, `profile-repository.ts` | Sucesso, falha parcial e perfil confirmável |
| RF-ED-01 — Rascunhos | `src/app/(public)/escrever/actions.ts`, `draft-repository.ts` | Criação, retomada, versão e propriedade |
| RF-ED-05 — Publicação | `src/modules/publishing/draft-domain.ts`, `draft-repository.ts` | Validação e transição do estado |
| RF-ED-06 — Visibilidade | `src/modules/discovery/publications.ts`, `profile-repository.ts` | Privado ausente das consultas públicas |
| RF-SOC-01 — Comentário | `src/app/api/publications/[slug]/comments/route.ts` | Sessão, validação, limite e persistência |
| RF-SOC-03 — Curtida reversível | `src/modules/interactions/likes/repository.ts` | Alternância, contagem e concorrência |
| RF-SUP-02 — Consulta de ticket | `src/modules/support/repository.ts` | Isolamento do solicitante e notas internas |

Os testes e respectivos resultados devem ser vinculados na etapa de homologação; nomes de arquivo isolados não representam execução comprovada.

## 8. Gestão de mudanças e documentos históricos

**Documento vigente:** descreve o contrato atualmente aceito e a versão de implementação correspondente.  
**Registro de decisão:** explica escolha, alternativas e consequências relevantes.  
**Especificação para execução:** orienta um recorte de implementação e permanece como registro mesmo quando concluída ou substituída.  
**Evidência:** aponta o que foi observado sob condições definidas.

Essa separação evita que um plano antigo se apresente como contrato vigente. Os documentos de execução e decisões existentes devem ser preservados integralmente e identificados por links e status.

## 9. Revisão e critérios de atualização

Ao alterar regra ou comportamento:
1. Confirmar necessidade, responsáveis e escopo.
2. Localizar processo/requisito afetado e contratos dependentes.
3. Revisar design, migração e compatibilidade.
4. Desenvolver e executar testes apropriados.
5. Registrar evidência da versão e ambiente.
6. Atualizar este conjunto documental, catálogo funcional e operação pertinente.
7. Encerrar apenas com critérios de aceite registrados.

## 10. Estado da rastreabilidade

Os arquivos de tarefas, decisões e evidências existentes fornecem um histórico técnico importante, mas o cruzamento integral com todos os requisitos correntes **ainda está em revisão**. O [plano de qualidade](07-qualidade-e-operacao.md) registra as condições para concluir as validações; o [catálogo funcional](08-catalogo-funcional.md) representa a versão inspecionada, sem presumir homologação pública.
