# ADR-012 — Hipóteses para evolução da UI/UX do AARKIVO após estabilização do MVP

- **Status:** Proposta exploratória · avaliação adiada · **não aprovada para implementação**
- **Data do registro:** 2026-10-13
- **Origem:** conversas de descoberta de produto e revisão de protótipos mobile (feed, leitura e perfil)
- **Momento de retomada:** após correção dos bugs prioritários e estabilização do MVP, por decisão explícita do responsável pelo produto
- **Escopo:** experiência pública e autenticada de descoberta, feed, leitura, discussões, perfis, acervos e publicação
- **Local sugerido no repositório:** `docs/decisions/ADR-012-hipoteses-evolucao-ui-ux-pos-mvp.md`
- **Não autoriza:** alterações no código, no design system canônico, nas rotas, nos dados, no backlog do MVP ou na navegação pública

## 1. Contexto e problema

O AARKIVO pretende unir **a familiaridade de uma rede social** com a **profundidade de uma rede de conhecimento**. A navegação social deve atrair e orientar pessoas; o conhecimento deve ser o motivo de descoberta, contribuição e retorno. A matéria-prima predominante são textos longos, artigos, estudos, referências e conteúdos técnicos.

As telas atuais analisadas (feed, leitura e perfil) apresentam identidade editorial: títulos serifados, azul como acento, fundo claro, cartões de cantos arredondados e navegação mobile familiar. Também foram explorados, em rodadas de mockups, feed social, exploração por temas, relações entre publicações, discussões contextuais, acervos, perfil intelectual e uma experiência opcional de leitura inspirada em e-readers.

**Aprendizado da exploração:** as primeiras propostas acumularam cartões dentro de cartões, ícones, chips, ações e seções. A rodada seguinte removeu boa parte disso, mas ainda não atingiu a experiência desejada. A direção foi considerada **promissora, porém não validada**. As imagens são estudos de intenção, não especificações de interface, nem aceite visual.

**Problema de design a investigar:** como oferecer descoberta social, leitura confortável e relações entre conhecimentos sem elevar a densidade visual nem diluir a identidade do AARKIVO?

## 2. Decisão neste momento

**Adiar a reformulação de UI/UX e registrar hipóteses verificáveis para estudo posterior.** A prioridade presente continua sendo corrigir bugs e estabilizar o MVP. Nenhuma alternativa visual ou funcional abaixo é aprovada automaticamente; nenhuma tela gerada representa o estado-alvo obrigatório.

Este ADR registra *questões e critérios de experimentação*, não um compromisso de roadmap. A aprovação futura exige conciliação com os documentos canônicos, pesquisa com usuários, protótipos funcionais e recortes de entrega próprios.

## 3. Direção e invariantes a preservar

1. **Rede social familiar:** feed, perfis, participação e navegação previsíveis; evitar aparência de ferramenta acadêmica restrita a especialistas.
2. **Texto como protagonista:** hierarquia tipográfica, contraste e espaçamento antes de ícones e ornamentos; não adicionar controles apenas para demonstrar funcionalidades.
3. **Marca intacta:** usar os ativos reais do logotipo AARKIVO, família tipográfica e tokens de cores do design system; não substituir o símbolo por recriações aproximadas de IA.
4. **Minimalismo com densidade equilibrada:** menos elementos concorrentes, sem transformar todas as telas em espaços vazios gigantescos; preservar ritmo e escaneabilidade.
5. **Divulgação progressiva:** funções secundárias aparecem quando necessárias, sem empobrecer sua descoberta ou acessibilidade.
6. **Leitura de conteúdo técnico sem perdas:** imagens, tabelas, fórmulas, citações, diagramas e blocos de código devem manter integridade e adaptação ao celular, inclusive sem corte horizontal de conteúdo importante.
7. **Acessibilidade e desempenho:** alvos de toque, rotulagem, foco, contraste, texto ampliado, redução de movimento, navegação por teclado e tecnologias assistivas; evitar regressões de velocidade e legibilidade.
8. **Honestidade de produto:** não apresentar conexões, recomendações, rankings, verificações científicas ou funções sociais que ainda não tenham dados e contratos reais.

### Antipadrões observados nos protótipos

- Cartões aninhados e bordas em todas as seções.
- Muitos ícones pequenos, especialmente símbolos genéricos ou decorativos.
- Chips e metadados disputando atenção com títulos e resumos.
- Ações sociais com igual destaque visual e repetição em excesso.
- Mapas, gráficos e conexões sem função contextual clara.
- Simular imagens, autores, contagens, relações ou capacidades como se fossem dados reais.
- Resolver densidade visual apenas diminuindo texto ou aumentando excessivamente espaços.

## 4. Inventário de hipóteses (não aprovadas)

| ID | Hipótese | Forma inicial de avaliar | Principal risco |
| --- | --- | --- | --- |
| **H01** | Um **feed editorial social** com título, autor, resumo, poucas ações e separadores discretos facilita descoberta sem perder familiaridade social. | Comparar feed atual com versão tipográfica, usando tarefas de localizar/abrir publicação. | Ficar parecido demais com lista de blog ou esconder interações. |
| **H02** | **Prévia no feed + publicação completa ao abrir** melhora varredura de assuntos, sem exigir leitura longa durante a navegação. | Testar prévia curta versus expansão no próprio feed; medir compreensão e retorno ao feed. | Cliques desnecessários; perda de contexto. |
| **H03** | **Interações progressivas**, com só ações essenciais visíveis, reduzem ruído sem diminuir engajamento significativo. | Teste de descoberta de Curtir, Comentar, Salvar, Compartilhar e Mais ações. | Funções invisíveis ou dependentes de gesto oculto. |
| **H04** | **Leitura contínua editorial** com margens, escala, ritmo e blocos técnicos responsivos melhora conforto e compreensão. | Leitura acompanhada em artigos reais com texto e diagramas/código. | Páginas extensas, quebra de diagramas e excesso de rolagem. |
| **H05** | **Modo opcional inspirado no Kindle** (paginação, retomada, tipografia ajustável, temas) beneficia parte dos leitores de textos longos. | Protótipo separado com troca reversível entre rolagem e páginas; testar com artigos técnicos. | Complexidade de paginação, perda de âncoras/seleções e quebras em mídia. |
| **H06** | **Conexões editoriais explícitas** entre publicações (pré-requisito, aprofunda, contrapõe, continua) tornam a exploração mais valiosa. | Protótipo com links textuais discretos no fim/trechos relevantes; medir relevância percebida. | Inventar relações ou poluir feed e leitura. |
| **H07** | **Discussões contextualizadas por trecho** geram respostas mais úteis que uma lista única de comentários. | Testar citação de trecho, comentário contextual e retorno ao parágrafo. | Confusão entre comentário e anotação; atualização do texto citado. |
| **H08** | **Responder com uma nova publicação conectada** incentiva contribuição aprofundada além de comentários. | Fluxo experimental de “Desenvolver resposta”, com vínculo para a origem. | Excesso de complexidade para contribuições simples; spam. |
| **H09** | **Salvar e organizar em acervos** melhora a recuperação de conteúdo e o retorno à plataforma. | Protótipo de salvar, criar coleção e reencontrar um estudo dias depois. | Duplicar categorias/tags, aumentar trabalho de organização. |
| **H10** | **Busca orientada por intenção** (aprender, aprofundar, debater) auxilia quem não sabe qual termo procurar. | Comparar busca convencional com caminhos guiados e listagens editoriais. | Categorizações artificiais e expectativa de IA sem suporte. |
| **H11** | **Perfil como identidade intelectual**, com áreas exploradas, conteúdo em destaque e acervos, ajuda encontrar autores relevantes. | Teste de compreensão do perfil por visitantes; encontrar uma publicação/autoria. | Aparência de currículo ou competição acadêmica. |
| **H12** | **Onboarding progressivo e plural** reduz fricção e representa interesses além de tecnologia. | Observar abandono, esforço e clareza do onboarding, sem exigir formação. | Personalização insuficiente no início. |
| **H13** | **Formatos editoriais em diferentes profundidades** permitem participação social rápida e estudos completos coexistirem. | Protótipos de observação curta versus artigo; clareza de tipo e intenção. | Fragmentação e perda da promessa editorial. |
| **H14** | **Indicadores de procedência** (referências, versão, data de atualização e correções) fortalecem confiança. | Testar entendimento de fonte, revisão e limitações, sem alegar revisão científica inexistente. | Metadados demais; falsa sensação de certificação. |
| **H15** | **Percursos de estudo e histórico de descobertas**, opcionais, ajudam continuar temas iniciados. | Testes de reencontro, navegação sequencial e controles de privacidade. | Complexidade e vigilância comportamental indevida. |

**Observação:** H05 foi **avaliada conceitualmente, não descartada**. Não é prioridade deste novo ciclo, mas permanece no registro para decisão futura. O mesmo vale para alternativas de feed com expansão inline e para grafos visuais: opções conhecidas, ainda sem validação.

## 5. Alternativas de apresentação consideradas

| Alternativa | Situação exploratória | Condição para reconsiderar |
| --- | --- | --- |
| Blog/rolagem longa como modelo único | Familiar, robusto para artigos; pode comunicar menos o caráter de rede. | Teste com leitores e visitantes novos. |
| Carrossel horizontal de publicações inteiras | Não recomendado como padrão neste momento; atrapalha exploração rápida. | Evidência de benefício específico, nunca por estética apenas. |
| Leitor paginado tipo Kindle | Interessante como opção, não padrão obrigatório. | Solução técnica correta para blocos ricos, âncoras, acessibilidade e retomada. |
| Feed com muitos cartões de conexões | Mockups ficaram visualmente densos. | Revelação sob demanda ou links semânticos discretos. |
| Feed/editorial quase sem ícones | Mais próximo do protagonismo textual; ainda não aprovado visualmente. | Teste de clareza de ações, leitura e equilíbrio de espaço. |
| Grafo visual de conhecimento | Alternativa exploratória distinta das listas de conexões; já existe proposta correlata `UX-003` para o acervo administrativo. | Definir domínio, relações reais, acessibilidade e adequação ao mobile. |

## 6. Jornadas a prototipar quando retomado

1. **Descoberta social:** entrar no feed → reconhecer autor/assunto → abrir artigo → retornar ao ponto do feed.
2. **Aprofundamento:** ler publicação longa → consultar código/diagrama intacto → navegar por uma relação relevante → retornar.
3. **Participação:** comentar um trecho → acompanhar respostas → opcionalmente desenvolver nova publicação vinculada.
4. **Preservação:** salvar artigo → organizar em acervo → recuperá-lo em outro dia/dispositivo.
5. **Identidade:** entrar no perfil de um autor → compreender seus temas → encontrar conteúdo relevante.
6. **Publicação:** iniciar texto → trabalhar em rascunho → revisar, definir visibilidade e publicar com contexto editorial.

## 7. Validação e sinais de sucesso

### Método recomendado

- **Passo 1 — auditoria do produto real:** comparar telas, funcionalidades implementadas, problemas de responsividade e documentos existentes. Identificar decisões antigas que já não descrevem o MVP.
- **Passo 2 — protótipos de baixa fidelidade:** testar hierarquia, informação e comportamentos sem “maquiar” o resultado com detalhes gráficos.
- **Passo 3 — no máximo duas variantes por hipótese:** uma referência atual e uma proposta; testar isoladamente para não confundir causas.
- **Passo 4 — testes de tarefas reais:** convidar participantes com familiaridade e níveis de conhecimento distintos; observar sem conduzir respostas.
- **Passo 5 — validação técnica/acessível:** artigos com ênfase em texto, código, matemática, diagramas, vídeos/imagens, títulos longos e tabelas; conferir mobile, desktop e leitor de tela.
- **Passo 6 — decisão explícita:** aprovar, ajustar, rejeitar ou arquivar cada hipótese; registrar evidência e criar trabalho executável somente para as aprovadas.

### Indicadores candidatos (estabelecer linha de base antes de metas)

- Tempo e taxa de sucesso em **encontrar uma publicação relevante**.
- Tempo e taxa de sucesso em **retornar ao feed**, sem perder a posição.
- Capacidade de **identificar autor, tema, tipo e ação principal** sem assistência.
- Taxa de êxito em **salvar e reencontrar uma publicação**.
- Dificuldades relatadas para **compreender, comentar e retomar uma leitura longa**.
- Erros, cliques equivocados, acionamentos involuntários e elementos ignorados.
- Legibilidade, esforço percebido, acessibilidade, tempo de carregamento e estabilidade.
- Valor percebido das **conexões entre conteúdos**, sem induzir cliques apenas por curiosidade.

Não fixar percentuais de conversão, tempo ou retenção sem medição inicial. O objetivo não é maximizar permanência na plataforma, mas facilitar descoberta, compreensão, participação e recuperação útil.

## 8. Guardrails de escopo e implementação

- Não misturar este estudo com os bugs em correção nem antecipar refatorações de UI no MVP.
- Não alterar endpoints, schema, permissões, rotas ou autenticação apenas para materializar mockups.
- Relações editoriais devem ter tipo e autoria/origem verificáveis; proximidade de tags não prova conexão semântica.
- Não inserir números, conteúdo relacionado, imagens ou recursos simulados na interface de produção.
- Preservar URLs permanentes e estados de leitura ao navegar entre feed e publicação.
- Acervos privados, histórico e anotações exigem regras explícitas de privacidade e autorização.
- Comentários ancorados devem lidar com edições do texto e moderação.
- Um modo paginado não pode quebrar código, fórmulas, diagramas nem leitura por tecnologia assistiva.
- Novos padrões mobile devem ter equivalentes desktop e comportamento sem mouse.
- Cada hipótese aprovada deve originar decisão/contrato específico, tarefa rastreável e critérios de aceite independentes.

## 9. Dependências e conciliação documental

Antes de avançar, revisar conjuntamente:

- [`docs/direcao-visual-e-design-system.md`](../direcao-visual-e-design-system.md) — paleta, tipografia, marca, espaçamento, responsividade e acessibilidade, hoje canônicos.
- [`docs/decisions/UX-002.md`](UX-002.md) — decisão histórica aprovada de descoberta/leitura/publicação; diversas restrições de seu MVP inicial precisam ser **reconciliadas** com a implementação e as telas atuais antes de serem tratadas como realidade vigente.
- [`docs/decisions/UX-003.md`](UX-003.md) — grafo e perfis isolados, proposta distinta deste ADR.
- [`docs/plano-segunda-onda-rede-do-conhecimento.md`](../plano-segunda-onda-rede-do-conhecimento.md) — planejamento anterior de rede multiusuário, sujeito a atualização de escopo e estado.
- [`docs/jornadas-e-fluxos.md`](../jornadas-e-fluxos.md), [`docs/principios-de-experiencia.md`](../principios-de-experiencia.md), [`docs/backlog-e-plano-de-entrega.md`](../backlog-e-plano-de-entrega.md) e [`docs/mapa-de-autoridade-documental.md`](../mapa-de-autoridade-documental.md).
- Código atual de `src/components/editorial/`, `src/components/editor/`, `src/components/auth/` e `src/modules/discovery/` — evidência de implementação, não substituto automático da documentação aprovada.

**Regra de autoridade:** este ADR não revoga `UX-002`, `UX-003`, o design system nem a visão do produto. Divergências devem ser identificadas, resolvidas e aprovadas antes de transformar ideias em requisitos.

## 10. Gatilho de retomada e priorização sugerida

A avaliação só começa quando o responsável pelo produto declarar que os **bugs bloqueantes/prioritários do MVP estão resolvidos**, que o núcleo editorial está estável e que há capacidade para testes de UX sem comprometer a correção de defeitos.

Na retomada, considerar esta ordem como **hipótese de planejamento**, não cronograma:

- **Fase A — fundamentos:** auditoria da experiência real, hierarquia textual, acessibilidade, responsividade, clareza de ações, onboarding e busca básica.
- **Fase B — descoberta e retorno:** prévias no feed, salvos/acervos, conexões textuais e perfis mais informativos.
- **Fase C — colaboração e profundidade:** discussões ancoradas, publicações-resposta, percursos e opções de leitura avançada, se validadas.

### Critérios para aprovar uma melhoria

Uma proposta deve demonstrar: benefício observável para uma jornada relevante, preservação da identidade visual real, clareza com baixa densidade, funcionamento com textos técnicos, acessibilidade, custo/manutenção compatíveis e ausência de regressões em fluxos essenciais. A apresentação visual isolada não é evidência suficiente.

## 11. Perguntas em aberto

1. Qual densidade de informação traz familiaridade social sem sobrecarregar o feed?
2. Conexões devem aparecer no próprio feed, somente na leitura ou apenas por demanda?
3. A leitura paginada é uma preferência útil para parte do público ou uma complexidade dispensável?
4. Qual o equilíbrio entre curtir/comentar/compartilhar e salvar/estudar/responder?
5. Qual a forma mais simples de separar publicações curtas e longas sem criar duas redes diferentes?
6. Quais atributos de perfil representam contribuições sem criar hierarquias elitistas?
7. Quais recursos são realmente procurados por leitores e autores — e quais aparecem apenas em mockups?
8. Como medir que a pessoa **aprendeu ou encontrou o que precisava**, e não apenas ficou mais tempo no app?

## 12. Resultado e próximos registros

**Resultado atual:** hipóteses organizadas, sem implementação autorizada e **sem aceite final da UI**. Os mockups exploratórios permanecem referências de discussão, não telas canônicas. Depois da estabilização, abrir uma avaliação específica por família de hipótese, reunir evidências, atualizar decisões aplicáveis e só então planejar implementação.

**Histórico**

- **2026-10-13 — Proposta inicial:** consolida a conversa sobre feed social, leitura, Kindle opcional, descoberta, discussões, conexões, acervos, perfis, minimalismo e críticas às duas rodadas de mockups; implementação postergada até corrigir os bugs do MVP.