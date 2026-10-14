---
document_id: AAR-EXEC-006
title: Política pública de entrega e rastreabilidade
status: em-revisao
version: 0.2.0
created_at: 2026-10-12
last_updated_at: 2026-10-14
---

# 06 — Política pública de entrega e rastreabilidade

Este documento final descreve como interpretar o estado de uma demanda e de uma versão do produto. Os procedimentos técnicos e registros de execução são mantidos no repositório privado `jukazilli/oplib`.

## Responsabilidade por repositório

| Conteúdo | Local |
| --- | --- |
| Definição do produto, público, regras, jornadas e catálogo final | `aarkivo-docs` |
| Issues de acompanhamento e critérios de aceite sanitizados | `aarkivo-docs` |
| Contratos e planos de execução, código, testes, decisões técnicas e runbooks | `oplib` privado |
| Logs, traces, resultados de testes e pacotes de evidência | `oplib` privado |
| Detalhes de segurança ainda não corrigidos | Issue/contrato privado no `oplib` |

## Significado dos estados

- **Planejado:** resultado solicitado; não existe comprovação de entrega.
- **Em execução:** há trabalho em andamento, sem aceite.
- **Implementado:** existe alteração de código identificada; validação integrada pode estar pendente.
- **Validado em Preview:** critérios foram demonstrados em ambiente isolado no commit informado.
- **Aceito:** revisão independente aprovou os critérios e a documentação final correspondente.
- **Verificado em produção:** houve implantação autorizada e verificação no ambiente ativo.
- **Parcial ou bloqueado:** faltam critérios, ambiente ou decisão; não equivale a resolvido.
- **Adiado com aprovação:** decisão de escopo registrada; não significa funcionalidade implementada.

CI verde, merge e existência de um componente não comprovam, isoladamente, o resultado para o usuário.

## Rastreabilidade pública

Uma issue deve identificar resultado esperado, critérios de aceite, dependências e contrato privado. Seu encerramento deve apontar versão/PR, resumo sanitizado da verificação e revisão responsável. Testes técnicos e logs completos permanecem privados. O executor recomenda o aceite; um revisor distinto verifica as provas antes do fechamento.

## Atualização do produto

O [briefing](01-briefing.md) expressa a direção autorizada pelo proprietário. Mudanças aprovadas precisam refletir-se nos [requisitos](03-requisitos-e-regras.md), nas [jornadas](04-jornadas-e-processos.md) e no [catálogo](08-catalogo-funcional.md) afetados. Esses documentos distinguem regras pretendidas de capacidades comprovadas.

Antes do aceite, a revisão deve confirmar que a documentação descreve o fluxo alcançável pelo usuário. Se uma capacidade foi retirada do corte, isso precisa aparecer como decisão de produto; não pode ser apresentada como correção entregue.

O [acompanhamento público de remediação](https://github.com/jukazilli/aarkivo-docs/issues/1) registra o backlog. Não é registro de execução nem certificado de estabilidade ou lançamento do MVP.
