---
document_id: AAR-QA-007
title: Qualidade homologacao e operacao
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

# 07 — Qualidade, homologação e operação — AARKIVO

## 1. Objetivo

Estabelecer os controles necessários para verificar os requisitos do AARKIVO e operar versões com rastreabilidade. Este documento diferencia:

- **Teste definido:** cenário que pode ser executado.
- **Teste executado:** cenário com versão, ambiente, data e resultado registrados.
- **Aceite de negócio:** confirmação de que a necessidade foi atendida.
- **Release:** versão implantada e validada em ambiente determinado.

Um item não implica automaticamente os demais.

## 2. Estratégia de qualidade

| Nível | Objetivo | Ferramenta ou origem |
| --- | --- | --- |
| Análise estática | Detectar problemas de tipagem, padrão e formatação | TypeScript, ESLint e Prettier |
| Unidade e componente | Validar contratos, regras de domínio e interface | Vitest e testes em `tests/unit/` |
| Integração | Exercitar persistência, validação, conflitos e autorização | Suítes e scripts de verificação |
| E2E | Validar jornadas completas e seus pontos críticos | Playwright em `tests/e2e/` |
| Segurança | Testar permissões, entradas, uploads e dependências | Testes negativos, inspeções e workflows |
| Homologação | Comparar comportamento com critérios de negócio | Roteiros derivados dos requisitos |
| Operação | Verificar deploy, recuperação, saúde e monitoramento | Workflows, scripts e runbooks |

## 3. Matriz de validação por processo

| Processo | Cenário prioritário | Evidência necessária |
| --- | --- | --- |
| PRC-01 — Onboarding | Conclusão, sessão inválida, falha parcial e duplicidade | Resultado do perfil, interesses e Auth no ambiente |
| PRC-02 — Escrita | Criar, retomar, revisar, publicar e tratar conflitos | Estado persistido + passos de interface |
| PRC-03 — Visibilidade | Alternar público/privado, tentar ler sem permissão | Consultas negativas e autorização por autor |
| PRC-04 — Descoberta | Buscar, filtrar, abrir e não expor conteúdo privado | Resposta das listagens e leitura |
| PRC-05 — Interações | Comentar, responder, editar e alternar curtida | Identidade, resultado persistido e limites |
| PRC-06 — Moderação | Ocultar, restaurar, excluir e auditar | Status, evento e atualização pública |
| PRC-07 — Atendimento | Criar, responder, alterar estado e proteger nota interna | Isolamento entre usuários e visão administrativa |
| PRC-08 — Taxonomia | Validar nomes, conflitos e classificação | Integridade dos vínculos e resultados de busca |

## 4. Cenários negativos transversais

1. Usuário não autenticado tenta ação de escrita.
2. Membro tenta alterar registro de outra pessoa.
3. Conteúdo privado aparece numa consulta pública.
4. Referência, arquivo ou formulário recebe entrada inválida.
5. Edição concorrente tenta sobrescrever conteúdo atualizado.
6. Resposta social aponta para comentário inexistente ou pertencente a outra publicação.
7. Pessoa consulta chamado de terceiro ou nota interna da equipe.
8. Admin sem permissão acessa ação protegida.
9. Persistência falha em etapa intermediária.
10. Cache mantém conteúdo acessível após alteração de visibilidade.

Esses são **casos de teste a executar/confirmar**, e não falhas comprovadas.

## 5. Comandos de verificação disponíveis

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Para testes E2E, integração e dados, utilizar os scripts definidos no `package.json`, as variáveis de ambiente autorizadas e as instruções operacionais respectivas. **Este documento não declara que essas verificações foram executadas na atualização documental.**

## 6. Evidências e registros

Toda execução deve registrar:

| Campo | Conteúdo |
| --- | --- |
| Identificação | ID do teste, requisito e caso de uso |
| Versão | Commit, branch e, se aplicável, artefato implantado |
| Ambiente | Local, Preview, homologação ou produção |
| Contexto | Pré-condições e dados necessários sem segredos |
| Resultado | Aprovado, reprovado, bloqueado ou não executado |
| Prova | Execução CI, relatório, saída de teste, log sanitizado ou validação manual |
| Responsabilidade | Executor, aprovador e data da observação |
| Acompanhamento | Link para problema, decisão, correção ou exceção |

Registros anteriores permanecem consultáveis em [evidências](https://github.com/jukazilli/oplib/tree/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/evidence/) e [registro de testes](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/testing/MVP_TEST_LEDGER.md). Não reutilizar resultado antigo como prova de uma versão nova sem identificar compatibilidade.

## 7. Operação e implantação

O código contém configuração para Cloudflare Workers/OpenNext, Hyperdrive, R2 e integrações Supabase. A execução em cada ambiente deve comprovar:

1. Variáveis e bindings correspondentes ao ambiente correto.
2. Migrações aplicadas com o procedimento autorizado.
3. Versão do deploy vinculada a SHA e resultado do pipeline.
4. Smoke público e autenticado no ambiente da entrega.
5. Acesso administrativo limitado a papéis autorizados.
6. Monitoramento com mensagens de erro úteis e sem segredos.
7. Plano de retorno, recuperação e dados preservados.

## 8. Runbooks oficiais de operação

| Procedimento | Referência |
| --- | --- |
| Configuração de ambientes e segredos | [Configuração](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/runbooks/configuration.md) |
| Cloudflare Worker | [Cloudflare](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/runbooks/cloudflare.md) |
| Banco e Supabase | [Supabase](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/runbooks/supabase.md) |
| Release e retorno | [Release e rollback](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/runbooks/release-and-rollback.md) |
| Backup e restauração | [Backup e restore](https://github.com/jukazilli/oplib/blob/393f22ab4fa81547bcb6a9db6b5b47c44b4da1aa/docs/runbooks/backup-and-restore.md) |

Os runbooks são referências técnicas existentes; precisam ser verificados com o ambiente vigente antes de execução crítica, pois mudanças de infraestrutura podem alterá-los.

## 9. Critérios de aceite para entrega

Uma funcionalidade só é declarada **disponível** quando:
- possui contrato de negócio claro e critério de aceite;
- a implementação está vinculada a versão verificável;
- os testes aplicáveis e a homologação têm resultado registrado;
- o ambiente de destino e as migrações foram confirmados;
- a documentação funcional e operacional foi atualizada.

É aceitável registrar **implementado, ainda não homologado** ou **validado em Preview, ainda não implantado**.

## 10. Indicadores de engenharia e operação

Métricas candidatas: taxa de execução de CI, erros por jornada, tempo de recuperação, falhas de publicação, latência das consultas e frequência de conflitos de edição. Metas, limiares e números só serão documentados após instrumentação e deliberação.

## 11. Pontos de validação aberta

Exigem confirmação específica: consistência de dados entre Auth e PostgreSQL, autorização de alteração/exclusão, integridade de threads, retenção administrativa, acesso a publicações privadas, integridade de chamados, migrações e efetividade da recuperação por backup.

As decisões de aceite de negócio devem ocorrer com o responsável pelo produto e ficar vinculadas aos requisitos de [Requisitos e regras](03-requisitos-e-regras.md) e ao [Processo de entrega](06-execucao-e-rastreabilidade.md).
