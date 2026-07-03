import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function SearchBar() {
    return(
        <div className="w-full max-w-4xl flex items-center gap-3">
            {/* Campo de Busca */}
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                type="text"
                placeholder="Buscar por nome, projeto, publicação ou especialidade..."
                className="h-12 w-full rounded-full border-gray-200 bg-white pl-12 pr-4 text-base placeholder:text-slate-400 focus-visible:ring-indigo-500 shadow-sm"
                />
            </div>

            {/* Seletor de Tipo de Busca (Shadcn Tabs) */}
            <Tabs defaultValue="lexica" className="w-auto">
                <TabsList className="h-12 rounded-full border border-gray-100 bg-gray-50/50 p-1 shadow-sm">
                    <TabsTrigger 
                        value="lexica" 
                        className="h-full rounded-full px-5 text-sm font-semibold text-slate-500 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all"
                    >
                        Léxica
                    </TabsTrigger>
                    <TabsTrigger 
                        value="semantica" 
                        className="h-full rounded-full px-5 text-sm font-semibold text-slate-500 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all"
                    >
                        Semântica
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}