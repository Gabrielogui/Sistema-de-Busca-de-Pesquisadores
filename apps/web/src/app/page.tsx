import ResearcherCard from "@/components/researcher/ResearcherCard";
import ResearcherCardDetails from "@/components/researcher/ResearcherCardDetails";

export default function Home() {
    return(
        <div className="p-6 flex flex-wrap gap-5">
            <ResearcherCard />
            <ResearcherCardDetails />
        </div>
    );
}