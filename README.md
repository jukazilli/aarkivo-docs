# Documentação de produto — AARKIVO

A documentação de produto reúne a definição do problema, os processos, os requisitos, o desenho da solução, a execução, os critérios de qualidade e o catálogo funcional do AARKIVO. Os documentos foram organizados para que **a leitura principal descreva o produto e seus contratos**, sem exigir conhecimento de sua cronologia de desenvolvimento.

## Estrutura de leitura

A direção vigente é uma **rede multiusuário para compartilhar conhecimento adquirido na universidade e ao longo da vida**, com leitura pública, autoria individual e participação autenticada. Consulte primeiro o [briefing, direção de 14/10/2026](01-briefing.md). Definições históricas de autor único não governam o MVP atual.

| Ordem | Documento | Pergunta que responde |
| --- | --- | --- |
| 01 | [Briefing de produto e escopo](01-briefing.md) | Qual problema o AARKIVO resolve e para quem? |
| 02 | [Análise de negócios e processos](02-analise-de-negocios.md) | Que processos, atores e resultados sustentam o produto? |
| 03 | [Requisitos e regras de negócio](03-requisitos-e-regras.md) | O que a aplicação deve fazer, com quais condições? |
| 04 | [Jornadas e fluxos](04-jornadas-e-processos.md) | Como os participantes executam as atividades? |
| 05 | [Arquitetura e dados](05-arquitetura-e-dados.md) | Como a solução é organizada e quais dados mantém? |
| 06 | [Execução e rastreabilidade](06-execucao-e-rastreabilidade.md) | Como uma demanda percorre implementação e entrega? |
| 07 | [Qualidade e operação](07-qualidade-e-operacao.md) | Como verificamos critérios de aceite e operamos releases? |
| 08 | [Catálogo funcional](08-catalogo-funcional.md) | Quais funcionalidades são identificáveis no sistema? |

## Consulte por responsabilidade

- **Negócio e produto:** 01 → 02 → 03 → 04.
- **Desenvolvimento e arquitetura:** 03 → 05 → 06.
- **Qualidade e operação:** 03 → 06 → 07.
- **Compreensão geral da plataforma:** 01 → 08, aprofundando conforme necessidade.

## Status documental

Os documentos estão em **revisão**. São um conjunto coeso elaborado a partir da implementação rastreada no commit `20d852e11d423ae8560d5eb97242a00687b33e99`, com limites explicitados nos seus metadados. A promoção para documentação aprovada exige conferência de regras de negócio, resultados de testes pertinentes e, para declarações de disponibilidade, confirmação do ambiente de execução.

A descrição de capacidade **implementada no código** não equivale automaticamente à **funcionalidade testada e disponibilizada em produção**. Essa distinção é preservada no catálogo e nas condições de aceite.

## Autoridade por assunto

| Assunto | Referência de trabalho |
| --- | --- |
| Problema, propósito e público | [Briefing](01-briefing.md) |
| Processos, atores e responsabilidades | [Análise de negócios](02-analise-de-negocios.md) |
| Regras e condições verificáveis | [Requisitos](03-requisitos-e-regras.md) |
| Fluxos e decisões do usuário | [Jornadas](04-jornadas-e-processos.md) |
| Estrutura técnica e dados | [Arquitetura](05-arquitetura-e-dados.md) |
| Forma de entrega e vínculo com Git | [Execução](06-execucao-e-rastreabilidade.md) |
| Verificações e evidências | [Qualidade](07-qualidade-e-operacao.md) |
| Superfícies e capacidades | [Catálogo funcional](08-catalogo-funcional.md) |

## Registro histórico e documentação de execução

**Fronteira obrigatória:** issues e documentação final de produto vivem neste repositório. Contratos de execução, planos, instruções técnicas, decisões de implementação, diagnósticos e evidências ficam no `jukazilli/oplib` privado. Cada issue deve apontar para o contrato privado aplicável, sem copiar detalhes de vulnerabilidades abertas.

Mudanças de direção aprovadas pelo proprietário devem atualizar briefing, regras, jornadas e catálogo afetados. A atualização final exige revisão humana; não publicar documentação como reflexo automático de um merge ou de uma afirmação do executor. Uma capacidade implementada, validada em Preview e verificada em produção tem estados diferentes.

O conteúdo usado para orientar o desenvolvimento, os registros de decisões, tarefas, evidências, testes e runbooks continuam preservados no [acervo documental](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/README.md). A documentação principal descreve o contrato do produto; os arquivos históricos fornecem proveniência e explicações de decisões quando for necessário investigá-las.

A documentação pública de ajuda para usuários, destinada a `docs.aarkivo.com`, constitui uma **frente separada** e deverá derivar de funcionalidades homologadas, sem expor especificações internas.
