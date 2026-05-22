# Sistema de Busca de Pesquisadores

Monorepo do Sistema de Busca de Pesquisadores baseado em Full-Text Search e LLM (Engenharia de Software / T.E.E.S).

## Estrutura

| Caminho | Conteudo |
| --- | --- |
| `apps/api` | Backend/API em NestJS e ORM Prisma (Camada Relacional e Vetorial pgvector) |
| `apps/web` | Frontend UI em Next.js com React e Tailwind |
| `apps/scraper` | Motor Produtor-Consumidor em Python (Sonda de Descoberta DGP e Aspirador de XML Lattes) |
| `apps/scraper/data` | Arquivos Extratores Gerados: Dumps em `[ID].xml`, logs de falhas, e DB de controle local em SQLite |
| `docs/entregaveis` | Artefatos da Sprint I (Arquitetura, Banco, Casos de Uso, Requisitos e Protótipo) |
| `docs/sprints` | Registros diários (Burndown, Planning, Dailys, Retro) |

## Módulo de Extração de Dados (Python Scraper)

O pipeline que consome o Diretório de Grupos de Pesquisa do CNPq roda fora do Node.js, executado através de uma arquitetura resiliente. Ele utiliza SQLite para tracking idempotente de requisições, faz *Anti-Bot Evasion Bypass* nativo acessando domínios limpos sem esbarrar no Google reCaptcha da plataforma Lattes.

### Instalação

Para montar o ambiente de Ingestão de Dados:

    # Instale os requerimentos globais (a partir da raiz do monorepo)
    pip install -r requirements.txt

    # Adicione a camada nativa de motores web V8 (Chromium) isolada para Windows
    python -m playwright install

### Execução Completa (Pipeline Orquestrado)

Para ativar os dois scripts base ("Sonda" vasculhando os IDs no portal e o "Aspirador" formatando os HTML em árvore de XML):

    # Da raiz do projeto
    python apps/scraper/run.py

### Execução Limitada / Manual (Lotes Analíticos)

Caso queira isolar a execução do scraper oficial passando as Primary Keys (Identificador Lattes ID 16) desejadas:

    # Modo array via linha de comando
    python apps/scraper/scraper.py --grupos 4875461296350899 1250036305286788

    # Modo Injeção Bulk (usando arquivos *.txt, um ID por linha)
    python apps/scraper/scraper.py --arquivo id.txt

## Workspaces de Interface e Server (Node.js)

O ecossistema é consolidado via *NPM Workspaces*. Comandos principais:

    npm run api:dev
    npm run api:test
    npm run web:dev
    npm run web:lint

Execução referenciada diretamente ao contexto isolado:

    npm --workspace apps/api run build
    npm --workspace apps/web run build