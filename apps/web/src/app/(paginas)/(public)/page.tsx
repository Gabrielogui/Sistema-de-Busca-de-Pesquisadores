import PublicationCard from "@/components/publication/PublicationCard";
import ResearcherCard from "@/components/researcher/ResearcherCard";
import Mission from "@/components/researchGroup/Mission";
import ResearchLine from "@/components/researchGroup/ResearchLine";
import SearchBar from "@/components/SearchBar";
import { getGrupoPesquisaPorId, getListaGruposPesquisa } from "@/service/researchGroupService";
import { BookOpen, PencilLine, Trees, Users2 } from "lucide-react";

export default async function Home() {

    const response = await getGrupoPesquisaPorId("5c0de827-daac-409a-96ad-e81417ac467b");
    console.log(response.data);

    const grupoPesquisa = response.data;
    

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
                    <h2 className="font-semibold">Publicações</h2>
                </div>
                <div className="flex flex-col gap-4 justify-items-center">
                    {}
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