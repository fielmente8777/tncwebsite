import { homePageData } from "@/data/pagedata";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import { Bannner } from "@/components";

export default function Home() {
  return (
    <main>
      <Bannner {...homePageData.bannnerData} />
      <div className="lg:-mt-[9rem]">
        <Services cards={homePageData.services} />
      </div>
      <Reviews />
    </main>
  );
}
