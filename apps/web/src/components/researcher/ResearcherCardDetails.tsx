import { GraduationCap } from "lucide-react";
import Image from "next/image";

export default function ResearcherCardDetails() {
    return (
        <div className="flex gap-4 border rounded-md w-full h-75">
            {/* IMAGEM DO PESQUISADOR */}
            <div>
                <Image src="https://picsum.photos/200/300" width={200} height={300} alt="Imagem do pesquisador"></Image>
            </div>

            {/* DADOS DO PESQUISADOR */}
            <div className="flex flex-col gap-2 p-2 w-full">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <span className="text-lg">Nome do pesquisador</span>
                        <span className="p-2 bg-gray-200 rounded-md">Computação</span>
                    </div>
                    <div className="flex items-center text-sm gap-2 text-gray-500 -mt-2">
                        <GraduationCap />
                        <span className="">Mestrado</span>
                    </div>
                </div>
                
                <div className="p-3 bg-gray-200 rounded-md overflow-auto">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores obcaecati aliquid saepe delectus impedit? Voluptatum qui fugiat voluptatem itaque quisquam, earum placeat magni perspiciatis beatae similique, aut, facilis libero hic?
                </div>
                
                <div className="flex gap-2 border-t p-2 justify-end w-full">
                    <span>Visualizar mais</span>
                </div>

            </div>
        </div>
    )
}