import PublicationCard from "@/components/publication/PublicationCard";
import ResearcherCard from "@/components/researcher/ResearcherCard";
import ResearcherCardDetails from "@/components/researcher/ResearcherCardDetails";
import Mission from "@/components/researchGroup/Mission";
import ResearchLine from "@/components/researchGroup/ResearchLine";

export default function Home() {
    return(
        <div className="p-6 flex flex-col gap-5">
            <ResearcherCard />
            <ResearcherCardDetails />
            <PublicationCard />
            <ResearchLine />
            <Mission />
        </div>
    );
}