import PublicationCard from "@/components/publication/PublicationCard";
import ResearcherCard from "@/components/researcher/ResearcherCard";
import Mission from "@/components/researchGroup/Mission";
import ResearchLine from "@/components/researchGroup/ResearchLine";
import SearchBar from "@/components/SearchBar";
import { ProducaoDetalhe } from "@/core/producao";
import { getPesquisadorPorId } from "@/service/researcherService";
import { getGrupoPesquisaPorId, getListaGruposPesquisa } from "@/service/researchGroupService";
import { BookOpen, PencilLine, Trees, Users2 } from "lucide-react";

export default async function Home() {

    // 1. Pega o grupo de pesquisa
    const responseGrupo = await getGrupoPesquisaPorId("5c0de827-daac-409a-96ad-e81417ac467b");
    const grupoPesquisa = responseGrupo.data;

    // 2. Dispara requisições paralelas para pegar as produções científicas de cada membro
    const membrosIds = grupoPesquisa.membros?.map((m) => m.pesquisadorId) || [];
    const respostasPesquisadores = await Promise.all(
        membrosIds.map((id) => getPesquisadorPorId(id).catch(() => null)) // catch evita travar tudo se uma falhar
    );

    console.log("RESPOSTAS PESQUISADORES: ", respostasPesquisadores);

    // 3. Agrega e Deduplica todas as produções pelo ID único do artigo/livro
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
    
    const as10UltimasProducoes = Array.from(mapaProducoes.values())
    .sort((a, b) => b.ano - a.ano)
    .slice(0, 10);

    return(
        <div className="flex flex-col gap-5">
            <SearchBar />
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center text-2xl">
                    <Users2 />
                    <h2 className="font-semibold">Pesquisadores</h2>
                </div>
                <div className="flex flex-wrap gap-4 justify-items-center">
                    {grupoPesquisa.membros?.map((membro) => <ResearcherCard key={membro.pesquisador.id} pesquisador={membro.pesquisador} />)}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center text-2xl">
                    <BookOpen />
                    <h2 className="font-semibold">Publicações do Grupo</h2>
                </div>
                <div className="flex flex-col gap-4 justify-items-center">
                    {as10UltimasProducoes.length > 0 ? (
                        as10UltimasProducoes.map((producao) => (
                        <PublicationCard key={producao.id} producao={producao} />
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm italic">Nenhuma publicação registrada no momento.</p>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center text-2xl">
                    <Trees />
                    <h2 className="font-semibold">Missão, Visão e Valores</h2>
                </div>
                <div className="grid grid-cols-3 gap-4 justify-items-center">
                    {Array.from({length: 3}, (_, i) => i).map((i) => <Mission key={i} />)}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center text-2xl">
                    <PencilLine />
                    <h2 className="font-semibold">Linha de Pesquisa</h2>
                </div>
                { grupoPesquisa.linhasPesquisa?.map((linha) => <ResearchLine key={linha.id} linhaPesquisa={linha} />) }
            </div>
        </div>
    );
}