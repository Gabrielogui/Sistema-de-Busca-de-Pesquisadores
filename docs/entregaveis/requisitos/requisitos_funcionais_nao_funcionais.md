# Requisitos Funcionais e Nao Funcionais

Projeto: Sistema de busca de informacoes de pesquisadores baseado em Full-Text Search e LLM
Sprint: I - Projeto

## 1. Objetivo

Este documento descreve os requisitos funcionais e nao funcionais do sistema proposto. Os requisitos foram derivados da visao do produto, do Product Backlog inicial e das historias de usuario da Sprint I.

## 2. Requisitos Funcionais

### RF-01 - Importar curriculos Lattes em XML

O sistema deve permitir a importacao de arquivos XML do Curriculo Lattes por meio de um fluxo de ETL.

Origem: HU-01
Prioridade: Alta
Usuarios envolvidos: Administrador

Criterios de aceitacao:

- Dado um XML valido do Lattes, quando o pipeline for executado, entao os dados do pesquisador devem ser gravados no banco.
- O sistema deve registrar producoes cientificas associadas ao pesquisador.
- O processo deve evitar duplicidade basica de pesquisadores e producoes.

### RF-02 - Armazenar dados estruturados dos pesquisadores

O sistema deve armazenar pesquisadores, curriculos, producoes cientificas, areas de atuacao e palavras-chave em banco relacional PostgreSQL.

Origem: Escopo do projeto e KAN-10
Prioridade: Alta
Usuarios envolvidos: Administrador, Usuario pesquisador, Professor/Gestor

Criterios de aceitacao:

- O banco deve conter entidades para pesquisadores, curriculos e producoes cientificas.
- As producoes devem estar associadas aos seus respectivos pesquisadores.
- Areas e palavras-chave devem ser relacionadas aos pesquisadores e/ou producoes quando disponiveis no XML.

### RF-03 - Buscar producoes cientificas por texto

O sistema deve permitir que usuarios pesquisem producoes cientificas por termos textuais, considerando principalmente o titulo das producoes.

Origem: HU-02
Prioridade: Alta
Usuarios envolvidos: Usuario pesquisador, Professor/Gestor, Aluno

Criterios de aceitacao:

- A busca deve considerar o titulo das producoes.
- O resultado deve listar titulo, ano, pesquisador e tipo de producao.
- O usuario deve conseguir combinar busca textual com filtros basicos.

### RF-04 - Buscar producoes cientificas por similaridade semantica

O sistema deve permitir busca semantica usando embeddings gerados a partir dos titulos das producoes cientificas.

Origem: HU-03 e KAN-11
Prioridade: Alta
Usuarios envolvidos: Usuario pesquisador, Professor/Gestor, Aluno

Criterios de aceitacao:

- O sistema deve gerar embeddings para os titulos das producoes.
- O sistema deve armazenar os vetores no PostgreSQL com pgvector.
- A API deve retornar resultados ordenados por similaridade.

### RF-05 - Consultar perfil do pesquisador

O sistema deve permitir a visualizacao do perfil de um pesquisador com suas informacoes principais e suas producoes cientificas.

Origem: HU-04
Prioridade: Alta
Usuarios envolvidos: Usuario pesquisador, Professor/Gestor, Aluno

Criterios de aceitacao:

- A tela deve exibir nome, identificador, areas ou palavras-chave disponiveis e lista de producoes.
- A lista de producoes deve permitir filtragem por ano ou tipo.
- A API deve ter endpoint para listar producoes de um pesquisador.

### RF-06 - Disponibilizar API REST em JSON

O sistema deve disponibilizar uma API REST em NestJS para consulta de pesquisadores, producoes, filtros e resultados de busca.

Origem: Product Backlog - API REST
Prioridade: Alta
Usuarios envolvidos: Frontend

Criterios de aceitacao:

- A API deve retornar dados em JSON.
- A API deve separar as responsabilidades entre frontend e backend.
- A API deve expor endpoints para busca textual, busca semantica e consulta de perfil do pesquisador.

### RF-07 - Disponibilizar interface web para consulta

O sistema deve disponibilizar uma interface web em Next.js para pesquisa, filtragem e visualizacao de resultados.

Origem: Product Backlog - Interface Web e KAN-12
Prioridade: Alta
Usuarios envolvidos: Usuario pesquisador, Professor/Gestor, Aluno

Criterios de aceitacao:

- A interface deve conter tela de busca.
- A interface deve permitir aplicacao de filtros basicos.
- A interface deve exibir resultados de pesquisadores e producoes.
- A interface deve permitir acesso ao detalhe do pesquisador.

### RF-08 - Gerar arquivos CSV analiticos

O sistema deve gerar arquivos CSV para apoiar a criacao de paineis no Power BI.

Origem: HU-05
Prioridade: Media
Usuarios envolvidos: Professor/Gestor

Criterios de aceitacao:

- O backend deve gerar dimensoes de pesquisador e tempo.
- O backend deve gerar fato de producao cientifica.
- Os arquivos devem ser compativeis com importacao no Power BI.

## 3. Requisitos Nao Funcionais

### RNF-01 - Desempenho das consultas

As consultas textuais e semanticamente similares devem retornar resultados em tempo adequado para uso interativo na interface web.

Categoria: Desempenho
Prioridade: Alta

Criterios de verificacao:

- As consultas devem utilizar indices adequados no PostgreSQL.
- A busca textual deve considerar recursos de Full-Text Search quando aplicavel.
- A busca semantica deve utilizar indice vetorial compativel com pgvector quando houver volume significativo de dados.

### RNF-02 - Usabilidade da interface

A interface web deve ser simples, objetiva e adequada para usuarios que desejam localizar pesquisadores, producoes e dados analiticos.

Categoria: Usabilidade
Prioridade: Alta

Criterios de verificacao:

- A tela inicial deve permitir iniciar uma busca sem exigir conhecimento tecnico.
- Os filtros devem apresentar rotulos claros.
- Os resultados devem destacar nome do pesquisador, titulo da producao, ano e tipo de producao.

### RNF-03 - Manutenibilidade

O sistema deve ser organizado em camadas para facilitar manutencao, testes e evolucao do projeto.

Categoria: Manutenibilidade
Prioridade: Alta

Criterios de verificacao:

- A solucao deve separar responsabilidades entre ETL, banco de dados, backend, API e frontend.
- A documentacao tecnica deve registrar arquitetura, modelo de dados e contratos principais da API.
- O codigo deve seguir estrutura de pastas clara e padronizada.

### RNF-04 - Compatibilidade tecnologica

O sistema deve ser compativel com as tecnologias definidas para o projeto: Apache Hop, PostgreSQL com pgvector, backend NestJS, API REST, frontend Next.js e Power BI.

Categoria: Compatibilidade
Prioridade: Alta

Criterios de verificacao:

- O armazenamento vetorial deve ser compativel com pgvector.
- A API deve fornecer respostas em JSON consumiveis pelo frontend.
- Os arquivos analiticos devem ser exportados em CSV compativel com importacao no Power BI.

### RNF-05 - Integridade dos dados

O sistema deve preservar a consistencia dos dados importados dos curriculos Lattes.

Categoria: Confiabilidade
Prioridade: Alta

Criterios de verificacao:

- O ETL deve evitar duplicidade basica de pesquisadores e producoes.
- As producoes cientificas devem manter relacionamento com seus respectivos pesquisadores.
- Registros importados devem manter referencia ao arquivo ou carga de origem quando possivel.

### RNF-06 - Seguranca basica

O sistema deve adotar cuidados basicos para proteger a API, o banco de dados e os dados importados.

Categoria: Seguranca
Prioridade: Media

Criterios de verificacao:

- O backend deve validar parametros recebidos pela API.
- Credenciais e configuracoes sensiveis nao devem ser armazenadas diretamente no codigo.
- A aplicacao deve evitar exposicao desnecessaria de informacoes internas em mensagens de erro.

### RNF-07 - Observabilidade do processamento

O fluxo de importacao deve fornecer evidencias minimas de execucao para apoiar verificacao e correcao de falhas.

Categoria: Observabilidade
Prioridade: Media

Criterios de verificacao:

- O processo de ETL deve registrar quantidade de arquivos processados.
- O processo de ETL deve registrar falhas de leitura ou validacao.
- O sistema deve permitir identificar quando uma carga foi executada.

### RNF-08 - Disponibilidade para demonstracao

O sistema deve poder ser executado em ambiente local ou academico para apresentacao e validacao da Sprint.

Categoria: Disponibilidade
Prioridade: Media

Criterios de verificacao:

- A equipe deve documentar os passos principais para executar os componentes.
- A interface e a API devem operar de forma integrada no ambiente de demonstracao.
- Os dados de exemplo devem permitir demonstrar busca textual, busca semantica e consulta de perfil.

## 4. Rastreabilidade

| Requisito | Origem principal | Artefato relacionado |
| --- | --- | --- |
| RF-01 | HU-01 | Historias de usuario, arquitetura, DER |
| RF-02 | Escopo do projeto, KAN-10 | DER, projeto arquitetural |
| RF-03 | HU-02 | Historias de usuario, prototipo |
| RF-04 | HU-03, KAN-11 | Projeto arquitetural, DER |
| RF-05 | HU-04 | Historias de usuario, prototipo |
| RF-06 | Product Backlog - API REST | Projeto arquitetural |
| RF-07 | Product Backlog - Interface Web | Prototipo de media fidelidade |
| RF-08 | HU-05 | Dados analiticos, Power BI |
| RNF-01 | Necessidade de busca interativa | Arquitetura, banco de dados |
| RNF-02 | Necessidade de consulta por usuarios finais | Prototipo |
| RNF-03 | Organizacao tecnica do projeto | Projeto arquitetural |
| RNF-04 | Stack definida no escopo | Projeto arquitetural |
| RNF-05 | Qualidade dos dados importados | ETL, DER |
| RNF-06 | Protecao basica da aplicacao | API REST |
| RNF-07 | Controle de execucao do ETL | Apache Hop, logs |
| RNF-08 | Validacao academica da sprint | Ambiente de demonstracao |
