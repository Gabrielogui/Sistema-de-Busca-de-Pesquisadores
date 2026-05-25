# API para Grupos de Pesquisa

Monorepo do backend e frontend para consulta de grupos de pesquisa do DGP/CNPq, com API REST, coleta por scraper, busca textual, busca semantica com LangChain e persistencia em PostgreSQL/pgvector.

## Estrutura

| Caminho | Conteudo |
| --- | --- |
| `apps/api` | Backend/API em NestJS |
| `apps/web` | Frontend em Next.js |
| `docs/entregaveis` | Artefatos da Sprint I |
| `docs/sprints` | Planejamento, kanban e consolidados das sprints |
| `docs/referencias` | PDFs e materiais de referencia do trabalho |
| `data/lattes` | Dados academicos complementares usados apenas como exemplos auxiliares |

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

## Entregaveis

Os entregaveis principais da Sprint I estao em `docs/entregaveis`, incluindo requisitos, historias de usuario, diagramas, projeto arquitetural, prototipo e burndown. O planejamento da Sprint II esta em `docs/sprints/Sprint_II_Kanban.md`.

O contexto atualizado do TCC esta em `docs/contexto_tcc_backend_grupos_pesquisa.md`.
