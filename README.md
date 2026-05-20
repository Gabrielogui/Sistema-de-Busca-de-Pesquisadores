# Sistema de Busca de Pesquisadores

Monorepo do Sistema de Busca de Pesquisadores baseado em Full-Text Search e LLM.

## Estrutura

| Caminho | Conteudo |
| --- | --- |
| `apps/api` | Backend/API em NestJS |
| `apps/web` | Frontend em Next.js |
| `apps/scraper` | Web Scraper em Python (Playwright/BeautifulSoup) para extração de dados do CNPq (DGP/Lattes) |
| `apps/scraper/data` | Arquivos XML dos Grupos de Pesquisa extraídos e banco de dados SQLite (`scraper_estado.db`) com a fila de execução |
| `docs/entregaveis` | Artefatos da Sprint I |
| `docs/sprints` | Planejamento, kanban e consolidado da Sprint I |
| `docs/referencias` | PDFs e materiais de referencia do trabalho |
| `data/lattes` | Arquivos XML do Curriculo Lattes usados como dados de entrada |

## Workspaces (Node.js)

O projeto usa workspaces do npm para organizar os aplicativos web e de API.

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

A extração de dados dos Grupos de Pesquisa do CNPq é gerenciada por scripts Python independentes dentro de `apps/scraper`.

Para instalar as dependências e rodar a extração completa (Sonda de Descoberta + Aspirador de Metadados):

```bash
# Na raiz do projeto, instale as dependências (recomenda-se o uso de um ambiente virtual - venv)
pip install -r requirements.txt

# Instale os navegadores do Playwright
playwright install chromium

# Execute o orquestrador do pipeline a partir da raiz
python apps/scraper/run.py
```

## Entregaveis

Os entregaveis principais da Sprint I estao em `docs/entregaveis`, incluindo requisitos, historias de usuario, diagramas, projeto arquitetural, prototipo e burndown.