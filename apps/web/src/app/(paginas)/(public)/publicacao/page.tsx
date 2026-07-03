import PublicationCard from "@/components/publication/PublicationCard";
import { BookOpen } from "lucide-react";

export default function Publicacao () {
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

            <div className="flex flex-col gap-4 justify-items-center">
                {Array.from({length: 5}, (_, i) => i).map((i) => <PublicationCard key={i} />)}
            </div>
        </div>
    );
}