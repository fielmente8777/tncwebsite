import { homePageData } from "@/data/pagedata";
import Services from "./components/Services";
import { Bannner, Reviews } from "@/components";
import AboutUs from "./components/AboutUs";
import OurSocailMedia from "./components/OurSocailMedia";
import OurServices from "./components/OurServices";
import TncImmigration from "./components/TncImmigration";

export default function Home() {
  return (
    <main>
      <Bannner {...homePageData.bannnerData} />
      <div className="lg:-mt-[9rem]">
        <Services cards={homePageData.services} />
        <AboutUs {...homePageData?.about} />
        <OurSocailMedia {...homePageData?.social} />
        <OurServices />
        <TncImmigration />
      </div>
      <Reviews />
    </main>
  );
}
