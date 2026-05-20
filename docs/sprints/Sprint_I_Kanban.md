# Sprint I - Kanban da Primeira Semana

Projeto: Sistema de busca de informacoes de pesquisadores baseado em Full-Text Search e LLM
Sprint: I - Projeto
Duracao: 1 semana, de quarta-feira a quarta-feira

## Descricao Completa do Projeto

### Contexto

Universidades, grupos de pesquisa e gestores academicos precisam consultar informacoes sobre pesquisadores, producoes cientificas, areas de atuacao e competencias institucionais. Essas informacoes normalmente estao distribuidas em curriculos Lattes, bases externas e documentos em formatos diferentes, o que dificulta a busca, a analise e a tomada de decisao.

O Curriculo Lattes e uma fonte rica de dados academicos, mas seus arquivos em XML precisam passar por um processo de extracao, transformacao e carga para se tornarem uteis em consultas estruturadas, buscas textuais, buscas semanticas e paineis analiticos. O projeto proposto resolve esse problema criando uma solucao integrada que transforma dados brutos de pesquisadores em informacoes pesquisaveis e analisaveis.

### Objetivo do Projeto

O objetivo do projeto e desenvolver um sistema de busca de informacoes de pesquisadores baseado em Full-Text Search e LLM, integrando Ciencia de Dados, Inteligencia Artificial Generativa, banco de dados relacional, banco vetorial, API REST, interface web e visualizacao analitica.

O sistema devera permitir que usuarios pesquisem pesquisadores e producoes cientificas por termos textuais e por similaridade semantica, oferecendo resultados organizados em uma interface web. Alem disso, devera gerar arquivos CSV para analises em ferramenta OLAP, especialmente Power BI.

### O Que Sera Feito

O projeto sera desenvolvido em camadas, seguindo o processo Scrum em sprints semanais. A solucao contemplara:

- Orquestracao de dados com Apache Hop para extrair informacoes dos curriculos Lattes em XML.
- Transformacao e carga dos dados em uma base relacional PostgreSQL.
- Modelagem de dados para pesquisadores, producoes cientificas, curriculos, areas, palavras-chave e dados analiticos.
- Criacao de uma base vetorial com pgvector para armazenar embeddings dos titulos das producoes cientificas.
- Desenvolvimento de uma camada de back-end em NestJS, expondo uma API REST em JSON.
- Implementacao de busca textual usando recursos de Full-Text Search do PostgreSQL.
- Implementacao de busca semantica usando embeddings e tecnicas de IA Generativa.
- Criacao de uma camada de front-end em Next.js para consulta, filtros e visualizacao dos resultados.
- Geracao de arquivos CSV analiticos para construcao de paineis no Power BI.
- Elaboracao de documentacao tecnica com requisitos, historias de usuario, criterios de aceitacao, casos de uso, arquitetura, modelo de dados, documentacao da API e registros do processo Scrum.

### Produto Esperado

Ao final do projeto, espera-se entregar um software funcional composto por pipeline de ETL, banco de dados, back-end, front-end e camada analitica. Tambem sera entregue um relatorio tecnico contendo a especificacao completa do produto e os registros de conducao do processo Scrum.

O produto devera demonstrar que os dados dos curriculos Lattes podem ser organizados em uma base relacional, enriquecidos com representacoes vetoriais, pesquisados por texto e por semantica, consumidos por uma interface web e utilizados para analises gerenciais.

### Usuarios e Beneficiarios

Os principais usuarios e beneficiarios do sistema sao:

- Pesquisadores que desejam localizar producoes, temas e possiveis colaboradores.
- Professores e orientadores que precisam mapear competencias academicas.
- Gestores universitarios que precisam analisar producao cientifica por pesquisador, periodo ou area.
- Alunos e membros de projetos academicos que desejam consultar linhas de pesquisa e producoes relacionadas a determinados assuntos.

### Escopo Inicial

O escopo inicial do projeto considera os dados do Curriculo Lattes como fonte principal. A primeira versao da solucao tera foco em producoes cientificas, pesquisadores, busca textual, busca semantica e geracao de dados analiticos. Integracoes com outras bases, como Qualis CAPES, DOI, grupos de pesquisa ou JCR, poderao ser tratadas como evolucao do projeto conforme disponibilidade de tempo e validacao do professor.

## Definicao das Sprints

O projeto sera organizado em cinco sprints principais:

- Sprint I - Projeto: construcao do Product Backlog, analise e especificacao do projeto, historias de usuario, criterios de aceitacao, casos de uso, projeto arquitetural, prototipo de media fidelidade e modelo entidade-relacionamento.
- Sprint II - Camada de Orquestracao de Dados: criacao dos fluxos de ETL com Apache Hop para processar XML do Curriculo Lattes e carregar dados no PostgreSQL.
- Sprint III - Camada de Back-End: desenvolvimento da API REST em NestJS, busca textual, busca semantica, integracao com pgvector e documentacao da API.
- Sprint IV - Camada de Front-End: desenvolvimento da interface web em Next.js para consumir a API, aplicar filtros e exibir pesquisadores e producoes.
- Sprint V - Camada Analitica e Apresentacao Final: geracao de CSVs analiticos, criacao de painel no Power BI, video demonstrativo, artigo explicativo e apresentacao final dos artefatos.

Sprint Goal: entregar os artefatos de analise e especificacao do produto, com backlog priorizado, requisitos, casos de uso, arquitetura, prototipo de media fidelidade e modelo entidade-relacionamento validados pela equipe.

## Definicao de Pronto da Sprint

Um item so deve ir para `Done` quando:

- O artefato estiver registrado no Git.
- O item tiver pelo menos uma evidencia objetiva: arquivo, imagem, link, diagrama ou ata.
- Os criterios de aceitacao estiverem atendidos.
- A equipe tiver revisado o conteudo.
- O material estiver pronto para apresentacao de 10 minutos.

## Quadro Kanban

### To Do

| ID | Item | Tipo | Prioridade | Estimativa | Criterios de aceitacao |
| --- | --- | --- | --- | --- | --- |
| KAN-01 | Criar repositorio Git e estrutura inicial de pastas | Tarefa tecnica | Alta | 2h | Repositorio criado; pastas `docs`, `prototipo`, `modelagem`, `scrum` e `referencias` criadas; README inicial descrevendo o projeto |
| KAN-02 | Registrar visao do produto | Documentacao | Alta | 2h | Documento descreve problema, objetivo, publico-alvo, principais usuarios e valor do sistema |
| KAN-03 | Construir Product Backlog inicial | Scrum | Alta | 3h | Backlog contem epicos, historias de usuario, prioridades e estimativas iniciais |
| KAN-04 | Definir Sprint Backlog da Sprint I | Scrum | Alta | 1h | Itens selecionados para a semana; sprint goal documentado; tarefas tecnicas quebradas |
| KAN-05 | Fazer Planning Poker dos itens da Sprint I | Scrum | Alta | 1h | Registro das estimativas; divergencias anotadas; estimativa final por item |
| KAN-06 | Especificar historias de usuario com criterios de aceitacao | Requisitos | Alta | 5h | Historias cobrem ETL, busca textual, busca semantica, API, frontend e dados analiticos; cada historia tem criterios de aceitacao |
| KAN-07 | Criar diagrama de casos de uso | Modelagem | Alta | 3h | Atores principais identificados; casos de uso representam consulta, filtro, busca, carga de dados e exportacao CSV |
| KAN-08 | Criar descricao textual dos casos de uso principais | Modelagem | Media | 4h | Pelo menos 4 casos de uso descritos com fluxo principal, pre-condicoes e pos-condicoes |
| KAN-09 | Criar projeto arquitetural da solucao | Arquitetura | Alta | 4h | Diagrama mostra Apache Hop, PostgreSQL/pgvector, backend NestJS, API REST, frontend Next.js e Power BI |
| KAN-10 | Modelar esquema entidade-relacionamento inicial | Banco de dados | Alta | 4h | Modelo inclui pesquisadores, producoes, curriculos, palavras-chave/areas e relacionamentos essenciais |
| KAN-11 | Definir estrategia para dados vetoriais | Arquitetura | Media | 2h | Documento indica quais textos geram embeddings, onde serao armazenados e como a busca semantica sera feita |
| KAN-12 | Criar prototipo de media fidelidade | UX/UI | Alta | 5h | Prototipo mostra tela de busca, filtros, resultado de pesquisadores, detalhe de producoes e area de relatorios |
| KAN-13 | Criar quadro de burndown da Sprint I | Scrum | Media | 1h | Grafico ou planilha com total estimado, dias da sprint e trabalho restante |
| KAN-14 | Definir roteiro da apresentacao da Sprint I | Apresentacao | Media | 2h | Roteiro de 10 minutos cobrindo backlog, kanban, planning poker, burndown e artefatos |
| KAN-15 | Revisar e consolidar entrega da Sprint I | Qualidade | Alta | 3h | Checklist final preenchido; arquivos organizados; pendencias registradas para a proxima sprint |

### Doing

| ID | Item | Responsavel | Observacao |
| --- | --- | --- | --- |
| - | - | - | Mover para esta coluna quando alguem iniciar a tarefa |

### Review

| ID | Item | Responsavel pela revisao | Criterio de revisao |
| --- | --- | --- | --- |
| - | - | - | Validar clareza, completude e aderencia ao escopo do PDF |

### Done

| ID | Item | Evidencia |
| --- | --- | --- |
| - | - | - |

## Product Backlog Inicial

| Prioridade | Epico | Historia de usuario | Valor esperado |
| --- | --- | --- | --- |
| 1 | ETL Lattes | Como administrador, quero carregar curriculos Lattes em XML para uma base relacional, para manter dados estruturados dos pesquisadores | Base confiavel para consultas e relatorios |
| 2 | Consulta textual | Como usuario, quero pesquisar producoes cientificas por termos nos titulos, para encontrar pesquisadores e trabalhos relacionados a um tema | Busca objetiva por palavras-chave |
| 3 | Busca semantica | Como usuario, quero fazer busca semantica sobre titulos de producoes, para encontrar resultados mesmo quando os termos nao forem identicos | Melhor recuperacao de informacao |
| 4 | API REST | Como frontend, quero consumir dados por uma API JSON, para separar interface e backend | Integracao limpa entre camadas |
| 5 | Interface Web | Como usuario, quero uma interface em Next.js para buscar pesquisadores, aplicar filtros e visualizar producoes | Experiencia de consulta acessivel |
| 6 | Dados analiticos | Como professor/gestor, quero arquivos CSV para Power BI, para analisar producao por ano, pesquisador e periodo quadrienal | Suporte a analises e dashboards |
| 7 | Documentacao | Como equipe, quero documentar requisitos, arquitetura e API, para facilitar validacao e continuidade do projeto | Reducao de ambiguidades |

## Historias de Usuario Prioritarias para Especificacao

### HU-01 - Cadastrar dados de pesquisadores via ETL

Como administrador do sistema, quero importar arquivos XML do Curriculo Lattes para o banco relacional, para disponibilizar dados estruturados dos pesquisadores.

Criterios de aceitacao:

- Dado um XML valido do Lattes, quando o pipeline for executado, entao os dados do pesquisador devem ser gravados no banco.
- O sistema deve registrar producoes cientificas associadas ao pesquisador.
- O processo deve evitar duplicidade basica de pesquisadores e producoes.

### HU-02 - Buscar producoes por texto

Como usuario, quero buscar producoes cientificas por termos textuais, para encontrar trabalhos relacionados ao tema pesquisado.

Criterios de aceitacao:

- A busca deve considerar o titulo das producoes.
- O resultado deve listar titulo, ano, pesquisador e tipo de producao.
- O usuario deve conseguir combinar busca textual com filtros basicos.

### HU-03 - Buscar producoes semanticamente

Como usuario, quero realizar busca semantica nos titulos das producoes, para encontrar resultados relacionados ao sentido da consulta.

Criterios de aceitacao:

- O sistema deve gerar embeddings para os titulos das producoes.
- O sistema deve armazenar os vetores no PostgreSQL com pgvector.
- A API deve retornar resultados ordenados por similaridade.

### HU-04 - Consultar perfil do pesquisador

Como usuario, quero visualizar o perfil de um pesquisador e suas producoes, para entender suas areas de atuacao.

Criterios de aceitacao:

- A tela deve exibir nome, identificador, areas ou palavras-chave disponiveis e lista de producoes.
- A lista de producoes deve permitir filtragem por ano ou tipo.
- A API deve ter endpoint para listar producoes de um pesquisador.

### HU-05 - Gerar dados analiticos em CSV

Como professor ou gestor, quero gerar CSVs analiticos, para construir paineis no Power BI.

Criterios de aceitacao:

- O backend deve gerar dimensoes de pesquisador e tempo.
- O backend deve gerar fato de producao cientifica.
- Os arquivos devem ser compativeis com importacao no Power BI.

## Sugestao de Distribuicao Semanal

| Dia | Foco | Entregas esperadas |
| --- | --- | --- |
| Quarta-feira | Sprint Planning | Sprint goal, backlog selecionado, kanban inicial e planning poker |
| Quinta-feira | Requisitos | Visao do produto, historias de usuario e criterios de aceitacao |
| Sexta-feira | Modelagem funcional | Casos de uso e descricoes textuais |
| Sabado | Arquitetura e banco | Diagrama arquitetural, modelo ER e estrategia pgvector |
| Domingo | Prototipo | Telas principais do prototipo de media fidelidade |
| Segunda-feira | Revisao integrada | Ajustes nos artefatos, validacao interna e burndown atualizado |
| Terca-feira | Preparacao da apresentacao | Roteiro de 10 minutos, checklist final e ensaio |
| Quarta-feira | Sprint Review e Retrospective | Apresentacao ao professor, validacao e melhorias para Sprint II |

## Registro de Daily Scrum

Usar este modelo diariamente:

| Data | Participantes | O que foi feito ontem | O que sera feito hoje | Impedimentos | Atualizacao do kanban |
| --- | --- | --- | --- | --- | --- |
| - | - | - | - | - | - |

## Planning Poker

Escala sugerida: 1, 2, 3, 5, 8, 13 pontos.

| Item | Estimativas individuais | Estimativa final | Observacao |
| --- | --- | --- | --- |
| KAN-01 | - | 1 | Estrutura simples do projeto |
| KAN-02 | - | 2 | Exige alinhamento conceitual |
| KAN-03 | - | 3 | Base para as demais sprints |
| KAN-04 | - | 1 | Depende do backlog |
| KAN-05 | - | 1 | Registro do processo Scrum |
| KAN-06 | - | 5 | Requer detalhamento dos requisitos |
| KAN-07 | - | 3 | Diagrama funcional |
| KAN-08 | - | 3 | Descricao dos fluxos principais |
| KAN-09 | - | 5 | Integra varias tecnologias |
| KAN-10 | - | 5 | Define a base das proximas sprints |
| KAN-11 | - | 2 | Decisao tecnica inicial |
| KAN-12 | - | 5 | Prototipo com multiplas telas |
| KAN-13 | - | 1 | Planilha ou grafico simples |
| KAN-14 | - | 2 | Organizacao da apresentacao |
| KAN-15 | - | 3 | Revisao e consolidacao |

Total estimado: 42 pontos.

## Burndown da Sprint I

| Dia | Pontos planejados restantes | Pontos reais restantes |
| --- | --- | --- |
| Quarta-feira | 42 | 42 |
| Quinta-feira | 35 | 37 |
| Sexta-feira | 28 | 30 |
| Sabado | 21 | 24 |
| Domingo | 14 | 17 |
| Segunda-feira | 8 | 10 |
| Terca-feira | 3 | 4 |
| Quarta-feira | 0 | 0 |

## Retrospectiva

Preencher no encerramento da Sprint I:

| O que funcionou bem | O que precisa melhorar | Acoes para a Sprint II |
| --- | --- | --- |
| - | - | - |

## Checklist de Entrega da Sprint I

- [ ] Product Backlog publicado.
- [ ] Sprint Backlog publicado.
- [ ] Quadro Kanban atualizado.
- [ ] Planning Poker registrado.
- [ ] Burndown atualizado.
- [ ] Historias de usuario com criterios de aceitacao.
- [ ] Casos de uso.
- [ ] Projeto arquitetural.
- [ ] Modelo entidade-relacionamento.
- [ ] Prototipo de media fidelidade.
- [ ] Ata ou registro das Daily Scrums.
- [ ] Sprint Review preparada.
- [ ] Retrospectiva preparada.
