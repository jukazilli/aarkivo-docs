---
document_id: AAR-REQ-003
title: Requisitos funcionais e regras de negocio
status: em-revisao
version: 0.1.0
created_at: 2026-10-12
last_updated_at: 2026-10-12
baseline_code: 20d852e11d423ae8560d5eb97242a00687b33e99
information_sources:
  - SRC-DOCUMENT
  - SRC-IMPLEMENTATION
  - SRC-TEST
---

# 03 — Requisitos funcionais e regras de negócio — AARKIVO

## 1. Objetivo e interpretação

Este documento define **o que o sistema deve oferecer e como deve responder** às ações descritas na [análise de negócios](02-analise-de-negocios.md). Os critérios de aceite são condições verificáveis e não certificam, por si sós, que testes tenham sido executados. A implementação existente foi utilizada para estabelecer esta base; alterações de regra dependem de revisão do responsável pelo produto.

**Status do documento:** em revisão, com contrato extraído do código da versão indicada no cabeçalho.

## 2. Legenda

- **RF:** requisito funcional;
- **RNF:** requisito não funcional;
- **RB:** regra de negócio;
- **CA:** critério de aceite;
- **Perfil:** visitante, membro, autor ou administrador, conforme autorização definida.

## 3. Identidade e perfis

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-ID-01 | Permitir autenticação e entrada na aplicação | Sessão válida identifica o usuário; ausência de sessão impede ações restritas |
| RF-ID-02 | Concluir onboarding com dados de perfil e interesses | Informações são gravadas, relidas e confirmadas antes de indicar conclusão |
| RF-ID-03 | Consultar e alterar dados do próprio perfil | Identidade autorizada atualiza dados, e as consultas apresentam os valores persistidos |
| RF-ID-04 | Apresentar perfil público do autor | Perfil existente pode ser consultado por identificador público sem expor dados internos |
| RF-ID-05 | Separar permissões administrativas das permissões de membro | Identidade comum não executa operações de administrador |
| RF-ID-06 | Listar publicações do usuário no ambiente de perfil | Membro visualiza seus conteúdos e respectivos estados, com proteção de propriedade |

## 4. Produção editorial

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-ED-01 | Criar e persistir rascunhos | Rascunho válido é associado ao autor autenticado |
| RF-ED-02 | Editar o conteúdo em etapas | As etapas Escrever, Configurar, Detalhes e Revisar permitem conclusão e retorno |
| RF-ED-03 | Classificar o conteúdo | Tipo, tags e demais campos são validados e vinculados ao conteúdo |
| RF-ED-04 | Anexar referências e links relacionados | Referências válidas mantêm título, tipo, conteúdo e posição |
| RF-ED-05 | Publicar conteúdo | Publicação com dados obrigatórios válidos passa para o estado publicado |
| RF-ED-06 | Gerenciar visibilidade pública ou privada | Conteúdo privado permanece fora das consultas e rotas de leitura pública |
| RF-ED-07 | Impedir sobrescrita de edição concorrente | Versão desatualizada retorna conflito sem sobreposição silenciosa |
| RF-ED-08 | Gerenciar publicações do próprio autor | Edição, visibilidade e exclusão respeitam propriedade ou privilégio administrativo |
| RF-ED-09 | Retirar/republicar conforme estado permitido | Transição rejeita combinações inválidas de intenção, situação e versão |

## 5. Descoberta e leitura

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-DES-01 | Listar publicações disponíveis ao público | Apenas registros `published/public` aparecem nas consultas públicas |
| RF-DES-02 | Consultar publicação por endereço | Slug de conteúdo público retorna leitura; conteúdo privado/indisponível não é exposto |
| RF-DES-03 | Pesquisar e filtrar conteúdo público | Contrato aceita busca textual, área, tipo, categoria, tag, ano e ordenação conforme domínio |
| RF-DES-04 | Disponibilizar perfis e contexto de autoria | Leitura apresenta vínculo ao autor conforme dados públicos permitidos |
| RF-DES-05 | Navegar pela classificação temática | Áreas e taxonomias públicas direcionam a conteúdos pertinentes |

## 6. Participação e moderação

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-SOC-01 | Permitir comentário autenticado em publicação pública | Sem sessão, mutação negada; com sessão e dados válidos, comentário vinculado ao alvo |
| RF-SOC-02 | Permitir resposta a comentário | Comentário pai válido pode receber resposta sem cruzamento indevido de publicação |
| RF-SOC-03 | Curtir e retirar curtida de publicação | A mesma identidade alterna estado, com contagem coerente |
| RF-SOC-04 | Curtir/descurtir comentário | Alternância respeita unicidade de identidade e comentário |
| RF-SOC-05 | Editar comentário próprio | Apenas o autor correspondente altera o texto |
| RF-SOC-06 | Excluir comentário conforme autorização | Autor exclui o próprio conteúdo; admin usa permissão explícita |
| RF-SOC-07 | Ocultar e restaurar comentários na administração | Transição de visibilidade modifica estado e registra auditoria administrativa |
| RF-SOC-08 | Excluir permanentemente comentário sob moderação | Exclusão autorizada remove conteúdo e registra evento mínimo |

## 7. Atendimento

| ID | Requisito | Critério de aceite |
| --- | --- | --- |
| RF-SUP-01 | Abrir e acompanhar chamados autenticados | Solicitante cria chamado e recupera apenas seus registros |
| RF-SUP-02 | Consultar detalhe e histórico de chamado | Autor vê mensagens de atendimento sem notas internas |
| RF-SUP-03 | Permitir tratamento administrativo de chamados | Analista autorizado consulta fila, responde e atualiza situação |
| RF-SUP-04 | Registrar mensagens internas | Conteúdo interno só é visível no contexto administrativo autorizado |
| RF-SUP-05 | Classificar andamento e urgência | Situação/urgência assumem valores cadastrados no domínio |
| RF-SUP-06 | Registrar marcos de resolução e fechamento | Alteração de estado aplicável atualiza campos temporais correspondentes |

## 8. Regras de negócio de conteúdo

| ID | Regra |
| --- | --- |
| RB-ED-01 | A publicação exige título, resumo, corpo, tipo de conteúdo, identificador de rascunho e versão válida |
| RB-ED-02 | Na validação de publicação, exige-se pelo menos uma e no máximo cinco tags; o rascunho aceita até doze |
| RB-ED-03 | Cada publicação admite até cinquenta referências, com título, tipo e citação ou URL |
| RB-ED-04 | O corpo do rascunho possui limite de 200.000 caracteres; título até 240; resumo até 600; endereço até 260 |
| RB-ED-05 | A visibilidade de publicação pode ser `public` ou `private`, independentemente de estado editorial |
| RB-ED-06 | Publicação privada não participa das listagens públicas e perde destaque quando tornada privada |
| RB-ED-07 | Ações do autor exigem associação de propriedade; exceções administrativas devem estar expressas no servidor |
| RB-ED-08 | Capa editorial aceita JPEG, PNG, WebP e AVIF, com limite de 5 MiB e conferência de assinatura do arquivo |

## 9. Regras de interação e acesso

| ID | Regra |
| --- | --- |
| RB-INT-01 | Comentários e curtidas requerem autenticação no endpoint de mutação |
| RB-INT-02 | Comentário novo é permitido apenas em publicação pública e publicada |
| RB-INT-03 | Texto de comentário admite até 1.500 caracteres, conforme contrato do módulo |
| RB-INT-04 | Edição e exclusão ordinárias exigem autoria do comentário; exclusão administrativa é diferenciada |
| RB-INT-05 | Curtidas de publicações e de comentários são reversíveis |
| RB-INT-06 | A moderação distingue ocultação, restauração e exclusão permanente |
| RB-ACC-01 | Cliente comum não consulta chamado de terceiro nem notas internas |
| RB-ACC-02 | Administradores possuem verificação específica de permissão no lado servidor |

## 10. Requisitos não funcionais

| ID | Critério de qualidade a verificar |
| --- | --- |
| RNF-01 | Autorização server-side para cada mutação de conteúdo, identidade, interações e suporte |
| RNF-02 | Validação de origem e payload de requisições sensíveis |
| RNF-03 | Dados públicos não revelam publicações privadas nem notas internas de atendimento |
| RNF-04 | Proteção contra conteúdo malicioso em Markdown, referências e upload |
| RNF-05 | Tratamento de conflito de versão e falha de persistência com recuperação compreensível |
| RNF-06 | Interfaces responsivas e acessíveis por teclado e tecnologias assistivas |
| RNF-07 | Logs e observabilidade sem exposição de dados sensíveis |
| RNF-08 | Releases reproduzíveis, migrações controladas, rollback e backups de acordo com política operacional |

## 11. Critérios gerais de homologação

1. **Caminho de sucesso:** executar jornada válida de cada requisito.
2. **Caminho de erro:** validar entradas inválidas e respostas adequadas.
3. **Permissão:** repetir operações com usuário ausente, proprietário e usuário terceiro.
4. **Integridade:** conferir persistência, isolamento, privacidade e conflito de escrita.
5. **Observabilidade:** identificar erro sem vazamento de dados.
6. **Entrega:** conferir testes automatizados e ambiente antes de liberar o recurso.

O [plano de qualidade e operação](07-qualidade-e-operacao.md) define onde registrar execução e evidência.

## 12. Requisitos a ratificar ou detalhar

A documentação ainda precisa de decisão explícita sobre: política de exclusão e retenção de conteúdos dos usuários; transições formais de chamados e SLA; conformidade de citações/exports; regras de profundidade e integridade entre comentários; jornada de resolução de onboarding parcialmente concluído.

O registro dessas pendências não significa que as funcionalidades correspondentes não existam, mas evita estabelecer contrato de negócio sem validação.

**Rastreabilidade técnica:** [Catálogo funcional](08-catalogo-funcional.md). A [análise de negócios](02-analise-de-negocios.md) é a fonte primária de objetivos e atores; este documento é a referência para os contratos funcionais enquanto a versão está em revisão.
