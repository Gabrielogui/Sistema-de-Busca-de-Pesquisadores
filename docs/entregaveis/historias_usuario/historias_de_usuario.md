# Historias de Usuario

Projeto: Sistema de busca de informacoes de pesquisadores baseado em Full-Text Search e LLM  
Sprint: I - Projeto

## HU-01 - Cadastrar dados de pesquisadores via ETL

Como administrador do sistema, quero importar arquivos XML do Curriculo Lattes para o banco relacional, para disponibilizar dados estruturados dos pesquisadores.

Prioridade: Alta  
Origem: Product Backlog - ETL Lattes

### Criterios de aceitacao

- Dado um XML valido do Lattes, quando o pipeline for executado, entao os dados do pesquisador devem ser gravados no banco.
- O sistema deve registrar producoes cientificas associadas ao pesquisador.
- O processo deve evitar duplicidade basica de pesquisadores e producoes.

## HU-02 - Buscar producoes por texto

Como usuario, quero buscar producoes cientificas por termos textuais, para encontrar trabalhos relacionados ao tema pesquisado.

Prioridade: Alta  
Origem: Product Backlog - Consulta textual

### Criterios de aceitacao

- A busca deve considerar o titulo das producoes.
- O resultado deve listar titulo, ano, pesquisador e tipo de producao.
- O usuario deve conseguir combinar busca textual com filtros basicos.

## HU-03 - Buscar producoes semanticamente

Como usuario, quero realizar busca semantica nos titulos das producoes, para encontrar resultados relacionados ao sentido da consulta.

Prioridade: Alta  
Origem: Product Backlog - Busca semantica

### Criterios de aceitacao

- O sistema deve gerar embeddings para os titulos das producoes.
- O sistema deve armazenar os vetores no PostgreSQL com pgvector.
- A API deve retornar resultados ordenados por similaridade.

## HU-04 - Consultar perfil do pesquisador

Como usuario, quero visualizar o perfil de um pesquisador e suas producoes, para entender suas areas de atuacao.

Prioridade: Alta  
Origem: Product Backlog - Interface Web

### Criterios de aceitacao

- A tela deve exibir nome, identificador, areas ou palavras-chave disponiveis e lista de producoes.
- A lista de producoes deve permitir filtragem por ano ou tipo.
- A API deve ter endpoint para listar producoes de um pesquisador.

## HU-05 - Gerar dados analiticos em CSV

Como professor ou gestor, quero gerar CSVs analiticos, para construir paineis no Power BI.

Prioridade: Media  
Origem: Product Backlog - Dados analiticos

### Criterios de aceitacao

- O backend deve gerar dimensoes de pesquisador e tempo.
- O backend deve gerar fato de producao cientifica.
- Os arquivos devem ser compativeis com importacao no Power BI.

## HU-06 - Consumir dados pela API REST

Como frontend, quero consumir dados por uma API JSON, para separar a interface web das regras de consulta e processamento.

Prioridade: Alta  
Origem: Product Backlog - API REST

### Criterios de aceitacao

- A API deve retornar respostas em JSON.
- A API deve expor endpoints para busca textual, busca semantica, filtros e perfil do pesquisador.
- A interface web deve conseguir consultar a API sem acessar diretamente o banco de dados.
