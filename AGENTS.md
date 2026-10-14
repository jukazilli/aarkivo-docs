# Regras para humanos e agentes de IA neste repositório

Este é o repositório **público** de documentação de produto e issues do AARKIVO. Ele **não contém código-fonte** e **nenhum workflow daqui publica coisa alguma em produção**.

O código, as decisões técnicas, as evidências e o pipeline de produção ficam em outro repositório, privado: `jukazilli/oplib`. Lá, qualquer merge em `main` faz deploy.

## O que este repositório é

- Documentação de produto para leitura externa (arquivos `01-` a `08-`).
- Issues abertas ao público: bugs, melhorias, achados de auditoria e pesquisas de UX.

## O que este repositório não é

- **Não é prova de comportamento do sistema.** Um texto aqui descreve o produto; só o código, os testes e a produção dizem o que realmente existe. Estado "implementado" não significa "testado" nem "em produção".
- **Não é a wiki do site.** `docs.aarkivo.com` é gerada pelo app no `oplib`. Editar aqui não altera o site.
- **Não é o lugar de segredos**, IDs de conta, e-mails reais, caminhos de infraestrutura nem detalhes de vulnerabilidade ainda não corrigida. Esses casos vão para issue privada no `oplib`.

## Travas

Para o MVP, o briefing público registra a direção multiusuário vigente. Issues públicas contêm objetivo, resultado esperado, dependências, critérios de aceite e vínculo com o contrato privado. Planos detalhados, comandos, tarefas de execução e evidências não devem ser adicionados como arquivos deste repositório; armazená-los no `oplib`. Mudança de direção exige revisão dos documentos finais afetados, mantendo explícita a diferença entre intenção aprovada e capacidade validada. O executor não encerra sua própria issue nem usa fechamento automático pela PR antes do aceite independente.

1. Antes de afirmar algo sobre o sistema, verifique no `oplib` (arquivo e linha, teste ou resposta HTTP). Se não verificou, escreva "não verificado".
2. Antes de abrir uma issue, procure duplicatas aqui e nos PRs abertos do `oplib`. Comente na existente em vez de criar outra.
3. Uma issue é um pedido de trabalho, não uma decisão. Decisões aprovadas ficam em `docs/decisions/` no `oplib`.
4. Em caso de contradição, vale nesta ordem: produção observada, código e testes no `oplib`, decisão aprovada, documento canônico, ADR proposta, este repositório, issues.
5. Alterações de conteúdo deste repositório que descrevem o sistema devem vir de uma revisão humana do que está no `oplib`, não de cópia automática.
6. Não propague os nomes antigos "OPLIB", "Opal" ou "Opallib" em texto novo. A marca é **AARKIVO**.

A regra completa, com o mapa de onde cada coisa vive e o que dispara deploy, está em `docs/governanca-de-repositorios.md` no repositório `oplib` (privado).
