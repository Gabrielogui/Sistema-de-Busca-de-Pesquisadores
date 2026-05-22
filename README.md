# Sistema de Busca de Pesquisadores

Monorepo do Sistema de Busca de Pesquisadores baseado em Full-Text Search e LLM.

## Estrutura

| Caminho | Conteudo |
| --- | --- |
| `apps/api` | Backend/API em NestJS |
| `apps/web` | Frontend em Next.js |
| `apps/scraper` | Web Scraper em Python para extração de dados do CNPq (DGP/Lattes) |
| `apps/scraper/data` | Arquivos XML dos Grupos de Pesquisa e banco de controle em SQLite (`scraper_estado.db`) |
| `docs/entregaveis` | Artefatos da Sprint I |
| `docs/sprints` | Planejamento, kanban e consolidado da Sprint I |
| `docs/referencias` | PDFs e materiais de referencia do trabalho |
| `data/lattes` | Arquivos XML do Curriculo Lattes usados como dados de entrada |

## Workspaces

O projeto usa workspaces do npm para organizar os aplicativos.

Comandos principais:

```bash
npm run api:dev
npm run api:test
npm run web:dev
npm run web:lint
```

Tambem e possivel executar comandos diretamente em cada workspace:

```bash
npm --workspace apps/api run build
npm --workspace apps/web run build
```

## Scraper (Python)

A automação de raspagem (Sonda de Descoberta e Extração em Lote) roda via scripts independentes do monorepo de backend/frontend. Para executar e atualizar a base do Data Lake:

```bash
# Instale os requerimentos do projeto a partir da raiz 
pip install -r requirements.txt

# Habilite a camada web paralela 
python -m playwright install

# Dispare os dois motores do extrator (Em Produtor/Consumidor)
python apps/scraper/run.py
```

## Entregaveis

Os entregaveis principais da Sprint I estao em `docs/entregaveis`, incluindo requisitos, historias de usuario, diagramas, projeto arquitetural, prototipo e burndown.