import ResearcherCardDetails from "@/components/researcher/ResearcherCardDetails";
import { getGrupoPesquisaPorId } from "@/service/researchGroupService";
import { Users2 } from "lucide-react";

export default async function Pesquisador() {
    const response = await getGrupoPesquisaPorId("5c0de827-daac-409a-96ad-e81417ac467b");
    const grupoPesquisa = response.data;

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-3 items-center text-2xl">
                <Users2 />
                <h2 className="font-semibold">Rpositório de publicações</h2>
            </div>

            <div className="w-full p-6 rounded-xl border border-indigo-700 bg-gray-200">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat doloribus! Possimus pariatur laudantium numquam? Laudantium atque, id aliquid corporis excepturi eveniet quis, nam veritatis cum tenetur ut quia in!
                </p>
            </div>

            <div className="flex flex-col gap-4 justify-items-center">
                {grupoPesquisa.membros?.map((membro) => (
                    <ResearcherCardDetails 
                        key={membro.pesquisador.id} 
                        pesquisador={membro.pesquisador}
                        instituicaoNome={grupoPesquisa.instituicao?.nome}
                    />
                ))}
            </div>
        </div>
    );
}