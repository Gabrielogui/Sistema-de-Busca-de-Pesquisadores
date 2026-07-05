import PublicationCard from "@/components/publication/PublicationCard";
import { Button } from "@/components/ui/button";
import { ProducaoDetalhe } from "@/core/producao";
import { getPesquisadorPorId } from "@/service/researcherService";
import { getGrupoPesquisaPorId } from "@/service/researchGroupService";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function Publicacao ({ searchParams }: PageProps) {

    const ITEMS_PER_PAGE = 10;
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page ||  "1");

    // 1. Pega o grupo de pesquisa
    const responseGrupo = await getGrupoPesquisaPorId("5c0de827-daac-409a-96ad-e81417ac467b");
    const grupoPesquisa = responseGrupo.data;

    // 2. Busca produções agregadas
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

    // Todas as produções ordenadas por ano desc
    const todasProducoesOrdenadas = Array.from(mapaProducoes.values()).sort(
        (a, b) => b.ano - a.ano
    );

    // 3. Cálculos matemáticos da paginação do array
    const totalItems = todasProducoesOrdenadas.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    const producoesPaginadas = todasProducoesOrdenadas.slice(startIndex, endIndex);

    return( 
        <div className="flex flex-col gap-8">
            <div className="flex gap-3 items-center text-2xl">
                <BookOpen />
                <h2 className="font-semibold">Rpositório de publicações</h2>
            </div>

            <div className="w-full p-6 rounded-xl border border-indigo-700 bg-gray-200">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat doloribus! Possimus pariatur laudantium numquam? Laudantium atque, id aliquid corporis excepturi eveniet quis, nam veritatis cum tenetur ut quia in!
                </p>
            </div>

            {/* Lista de Cards */}
            <div className="flex flex-col gap-4 justify-items-center">
                {producoesPaginadas.length > 0 ? (
                producoesPaginadas.map((producao) => (
                    <PublicationCard key={producao.id} producao={producao} />
                ))
                ) : (
                <p className="text-gray-400 text-sm italic">Nenhuma publicação encontrada para esta página.</p>
                )}
            </div>

            {/* Controle de Paginação (Apenas renderiza se houver mais de uma página) */}
            {totalPages > 1 && (
                <div className="flex items-center gap-6 pt-4 max-w-4xl justify-center text-sm font-medium">
                {/* Botão Anterior */}
                {currentPage > 1 ? (
                    <Link href={`/publicacao?page=${currentPage - 1}`}>
                        <Button variant="outline" size="sm" className="gap-1 rounded-xl">
                            <ChevronLeft className="w-4 h-4" /> Anterior
                        </Button>
                    </Link>
                ) : (
                    <Button variant="outline" size="sm" disabled className="gap-1 rounded-xl opacity-50">
                        <ChevronLeft className="w-4 h-4" /> Anterior
                    </Button>
                )}

                {/* Indicador de Status */}
                <span className="text-gray-500">
                    Página <strong className="text-slate-900">{currentPage}</strong> de{" "}
                    <strong className="text-slate-900">{totalPages}</strong>
                </span>

                {/* Botão Próximo */}
                {currentPage < totalPages ? (
                    <Link href={`/publicacao?page=${currentPage + 1}`}>
                        <Button variant="outline" size="sm" className="gap-1 rounded-xl">
                            Próximo <ChevronRight className="w-4 h-4" />
                        </Button>
                    </Link>
                ) : (
                    <Button variant="outline" size="sm" disabled className="gap-1 rounded-xl opacity-50">
                        Próximo <ChevronRight className="w-4 h-4" />
                    </Button>
                )}
                </div>
            )}
        </div>
    );
}