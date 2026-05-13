# Projeto Arquitetural

Projeto: Sistema de busca de informacoes de pesquisadores baseado em Full-Text Search e LLM  
Sprint: I - Projeto

## Objetivo da arquitetura

A arquitetura proposta organiza os dados do Curriculo Lattes em uma solucao em camadas, permitindo importacao de XML, armazenamento relacional, busca textual, busca semantica, consulta por API, interface web e geracao de dados analiticos.

## Visao geral

O sistema sera composto pelas seguintes camadas:

| Camada | Responsabilidade | Tecnologia prevista |
| --- | --- | --- |
| Fonte de dados | Arquivos XML do Curriculo Lattes | XML Lattes |
| Orquestracao de dados | Extrair, transformar e carregar dados | Apache Hop |
| Persistencia | Armazenar pesquisadores, curriculos, producoes, areas e palavras-chave | PostgreSQL |
| Busca vetorial | Armazenar embeddings dos titulos e permitir consulta por similaridade | pgvector |
| Inteligencia artificial | Gerar embeddings a partir dos titulos das producoes | Modelo de embeddings |
| Backend | Expor regras de consulta, filtros, busca textual e busca semantica | Python + API REST |
| Frontend | Permitir busca, filtros, resultados e perfil do pesquisador | Next.js |
| Analitica | Consumir CSVs de dimensoes e fatos para paineis | Power BI |

## Fluxo principal

1. O administrador disponibiliza arquivos XML do Curriculo Lattes.
2. O Apache Hop executa o pipeline de ETL, extrai os dados relevantes e carrega o PostgreSQL.
3. Os dados estruturados alimentam as tabelas de pesquisadores, curriculos, producoes, areas e palavras-chave.
4. Os titulos das producoes sao enviados para geracao de embeddings.
5. Os vetores retornados sao armazenados no PostgreSQL com pgvector.
6. A API REST em Python consulta o PostgreSQL para busca textual e usa pgvector para busca semantica.
7. O frontend em Next.js consome a API e apresenta resultados, filtros e detalhes do pesquisador.
8. O backend gera CSVs analiticos para importacao no Power BI.

## Componentes

### Apache Hop

Responsavel pela leitura dos XMLs, tratamento de campos, normalizacao basica e carga inicial no banco. A camada de ETL deve registrar data de importacao, arquivo de origem e identificadores que ajudem a evitar duplicidades.

### PostgreSQL e pgvector

O PostgreSQL sera a base principal do sistema. O pgvector sera usado para armazenar representacoes vetoriais dos titulos das producoes cientificas, permitindo ordenacao por similaridade semantica.

### Backend Python

O backend concentra os endpoints REST, regras de consulta e integracao com o banco. Ele deve expor respostas JSON para o frontend e tambem oferecer rotinas para geracao dos CSVs analiticos.

### Frontend Next.js

O frontend disponibiliza a experiencia de consulta para usuarios pesquisadores, professores, gestores e alunos. As telas principais sao busca, filtros, lista de resultados, detalhe do pesquisador e area de relatorios.

### Power BI

O Power BI consome arquivos CSV exportados pelo backend. A estrutura analitica deve conter dimensoes como pesquisador e tempo, alem de fato de producao cientifica.

## Decisoes arquiteturais iniciais

- Manter separacao entre ETL, backend, frontend e analitica para reduzir acoplamento.
- Usar PostgreSQL como banco relacional principal e pgvector como extensao vetorial no mesmo ambiente de persistencia.
- Gerar embeddings prioritariamente a partir dos titulos das producoes cientificas na primeira versao.
- Expor dados ao frontend somente pela API REST, sem acesso direto ao banco.
- Gerar CSVs analiticos a partir do backend para simplificar a integracao com Power BI.

## Diagrama

Arquivo: `diagrama_arquitetural.svg`
