import { Goal } from "lucide-react";

export default function ResearchLine () {
    return(
        <div className="flex flex-col gap-3 w-full max-w-4xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            {/* LINHA DE PESQUISA - TÍTUOLO */}
            <div className="text-lg font-bold text-slate-900 leading-snug">
                Titulo da linha de pesquisa
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <Goal size={20}/>
                    <span className="font-semibold">Objetivos</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Voluptas, aspernatur. Aperiam, quae. Quisquam, quae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Voluptas, aspernatur. Aperiam, quae. Quisquam, quae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Voluptas, aspernatur. Aperiam, quae. Quisquam, quae.
                </p>
            </div>
        </div>
    );
}