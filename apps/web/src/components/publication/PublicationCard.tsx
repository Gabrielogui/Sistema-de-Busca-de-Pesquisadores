export default function PublicationCard() {
    return (
        <div className="w-full max-w-4xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            {/* Badge do Ano */}
            <div className="mb-3">
                <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                2023
                </span>
            </div>

            {/* Título da Publicação */}
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Otimização de Hiperparâmetros em Algoritmos de Aprendizado por Reforço
            </h3>

            {/* Nome do Periódico / Journal */}
            <p className="mt-1 text-sm italic text-gray-400">
                Machine Learning Journal
            </p>

            {/* Divisor sutil */}
            <hr className="my-5 border-gray-100" />

            {/* Rodapé: Autores e Links */}
            <div className="flex items-center justify-between text-sm">
                {/* Autores */}
                <span className="font-medium text-gray-500">
                Mendes, C.; Silva, A.
                </span>

                {/* Links de Ação */}
                <div className="flex items-center gap-4 font-semibold">
                <a 
                    href="#" 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    DOI
                </a>
                <a 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                    PDF
                </a>
                </div>
            </div>
        </div>
    );
}