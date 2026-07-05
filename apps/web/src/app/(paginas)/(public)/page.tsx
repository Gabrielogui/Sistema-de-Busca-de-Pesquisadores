import PublicationCard from "@/components/publication/PublicationCard";
import ResearcherCard from "@/components/researcher/ResearcherCard";
import Mission from "@/components/researchGroup/Mission";
import ResearchLine from "@/components/researchGroup/ResearchLine";
import SearchBar from "@/components/SearchBar";
import { getGrupoPesquisaPorId } from "@/service/researchGroupService";
import { getPesquisadorPorId, getListaPesquisadores, getPesquisadoresBuscaSemantica } from "@/service/researcherService";
import { getListaProducoes, getProducoesBuscaSemantica } from "@/service/producaoService";
import { BookOpen, PencilLine, Trees, Users2, Undo2 } from "lucide-react";
import { ProducaoDetalhe } from "@/core/producao";
import { Pesquisador } from "@/core/researcher";

interface HomeProps {
  searchParams: Promise<{ query?: string; searchType?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const GRUPO_ID = "5c0de827-daac-409a-96ad-e81417ac467b";
    
    const resolvedParams = await searchParams;
    const searchQuery = resolvedParams.query || "";
    const isSemantic = resolvedParams.searchType === "semantica";

    let pesquisadoresExibidos: Pesquisador[] = [];
    let producoesExibidas: ProducaoDetalhe[] = [];
    let isSearching = searchQuery.length > 0;

    const responseGrupo = await getGrupoPesquisaPorId(GRUPO_ID);
    const grupoPesquisa = responseGrupo.data;

    if (isSearching) {
        // ======= MODO BUSCA ATIVA: CONSUMO DAS ROTAS DE FILTRAGEM LÉXICA OU SEMÂNTICA =======
        if (isSemantic) {
            // Chamadas simultâneas semânticas passando 'q'
            const [resPesqSemantica, resProdSemantica] = await Promise.all([
                getPesquisadoresBuscaSemantica(searchQuery, 1, 10),
                getProducoesBuscaSemantica(searchQuery, 1, 10)
            ]);
            pesquisadoresExibidos = resPesqSemantica.data?.data || [];
            producoesExibidas = resProdSemantica.data?.data || [];
        } else {
        // Chamadas simultâneas léxicas passando os parâmetros de campos específicos mapeados
        const [resPesqLexica, resProdLexica] = await Promise.all([
            getListaPesquisadores({ nome: searchQuery, grupoPesquisaId: GRUPO_ID, page: 1, size: 10 }),
            getListaProducoes({ titulo: searchQuery, grupoId: GRUPO_ID, page: 1, size: 10 })
        ]);
        pesquisadoresExibidos = resPesqLexica.data?.data || [];
        producoesExibidas = resProdLexica.data?.data || [];
        }
    } else {
        // ======= MODO PADRÃO: CARREGA A ESTRUTURA NATIVA DO GRUPO DE PESQUISA =======
        pesquisadoresExibidos = grupoPesquisa.membros?.map((m) => m.pesquisador) || [];
        
        // Agregação tradicional das produções por ID limitando em 10 itens
        const membrosIds = grupoPesquisa.membros?.map((m) => m.pesquisadorId) || [];
        const respostasPesquisadores = await Promise.all(
            membrosIds.map((id) => getPesquisadorPorId(id).catch(() => null))
        );

        const mapaProducoes = new Map<string, ProducaoDetalhe>();
        respostasPesquisadores.forEach((res) => {
            const pesquisadorCompleto = res?.data;

            if (pesquisadorCompleto?.producoes) {
                pesquisadorCompleto.producoes.forEach((p) => {
                if (!mapaProducoes.has(p.producao.id)) {
                    mapaProducoes.set(p.producao.id, p.producao);
                }
                });
            }
        });

        producoesExibidas = Array.from(mapaProducoes.values())
        .sort((a, b) => b.ano - a.ano)
        .slice(0, 10);
    }

  return (
        <div className="flex flex-col gap-5">
            <SearchBar />
            
            {/* Indicador de Busca Ativa */}
            {isSearching && (
                <div className="flex justify-between items-center bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 max-w-4xl">
                <p className="text-sm text-slate-700">
                    Resultados para a busca {isSemantic ? "Semântica" : "Léxica"}: <strong className="text-indigo-600">"{searchQuery}"</strong>
                </p>
                <a href="/" className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-slate-800 transition-colors">
                    <Undo2 className="w-3.5 h-3.5" /> Limpar Filtros
                </a>
                </div>
            )}

            {/* Bloco: Pesquisadores */}
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center text-2xl">
                    <Users2 />
                    <h2 className="font-semibold">Pesquisadores {isSearching && `(${pesquisadoresExibidos.length})`}</h2>
                </div>
                <div className="flex flex-wrap gap-4 justify-items-center">
                    {pesquisadoresExibidos.length > 0 ? (
                        pesquisadoresExibidos.map((pesq) => (
                        <ResearcherCard key={pesq.id} pesquisador={pesq} />
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm italic pl-2">Nenhum pesquisador correspondente.</p>
                    )}
                </div>
            </div>

            {/* Bloco: Publicações */}
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center text-2xl">
                    <BookOpen />
                    <h2 className="font-semibold">
                        {isSearching ? `Publicações Encontradas (${producoesExibidas.length})` : "Publicações Recentes do Grupo"}
                    </h2>
                </div>
                <div className="flex flex-col gap-4 justify-items-center">
                    {producoesExibidas.length > 0 ? (
                        producoesExibidas.map((producao) => (
                        <PublicationCard key={producao.id} producao={producao} />
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm italic pl-2">Nenhuma publicação correspondente.</p>
                    )}
                </div>
            </div>

            {/* Exibir blocos institucionais fixos apenas na visualização padrão da Home */}
            {!isSearching && (
                <>
                    {/* Missão, Visão e Valores */}
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-center text-2xl">
                            <Trees />
                            <h2 className="font-semibold">Missão, Visão e Valores</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4 justify-items-center">
                            <Mission  />
                            <Mission  />
                            <Mission  />
                        </div>
                    </div>

                    {/* Linhas de Pesquisa */}
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-center text-2xl">
                            <PencilLine />
                            <h2 className="font-semibold">Linhas de Pesquisa</h2>
                        </div>
                        {grupoPesquisa.linhasPesquisa?.map((linha) => (
                            <ResearchLine key={linha.id} linhaPesquisa={linha} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}