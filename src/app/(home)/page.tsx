import { homePageData } from "@/data/pagedata";
import Services from "./components/Services";
import { Bannner, Reviews, SectionWithContainer } from "@/components";
import AboutUs from "./components/AboutUs";
import OurSocailMedia from "./components/OurSocailMedia";
import OurServices from "./components/OurServices";
import TncImmigration from "./components/TncImmigration";
import { HorizontTowLine, HorizontTwoLineLeft } from "@/data/icons";

export default function Home() {
  return (
    <main>
      <Bannner {...homePageData.bannnerData} />
      <div className="lg:-mt-[9rem] relative md:after:absolute after:bg-[url('/bg-01.webp')] after:w-full after:h-[85%] after:top-[11rem] after:left-0 after:z-[-1] after:bg-cover after:bg-no-repeat after:bg-center max_screen w-full">
        <Services cards={homePageData.services} />
        <AboutUs {...homePageData?.about} />
      </div>
      <OurSocailMedia {...homePageData?.social} />
      <OurServices />
      <TncImmigration />
      <div className=" relative md:after:absolute after:bg-[url('/bg-03.webp')] after:w-full after:h-full after:top-0 after:left-0 after:inset-0 after:z-[-1] after:bg-cover after:bg-no-repeat after:bg-center max_screen w-full">
        <SectionWithContainer>
          <h2 className="text-second-red heading2 mb-2 text-center font-semibold flex gap-2 items-center justify-center">
            <span>
              <HorizontTwoLineLeft />
            </span>
            Testimonials
            <span>
              <HorizontTowLine />
            </span>
          </h2>
          <h3 className="heading max-w-xl  mx-auto text-center font-bold text-gray-700">
            We always have our client’s best interest in our mind.
          </h3>
        </SectionWithContainer>
        <Reviews />
      </div>
    </main>
  );
}
