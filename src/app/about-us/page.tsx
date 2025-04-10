import {
  CommanBanner,
  Reviews,
  Section,
  SectionWithContainer,
} from "@/components";
import { AboutPageData } from "@/data/pagedata";
import AboutUsSection from "./components/AboutUsSection";
import Image from "next/image";
import TeamMember from "./components/TeamMember";

const page = () => {
  return (
    <main>
      <CommanBanner {...AboutPageData.bannerData} />
      <AboutUsSection {...AboutPageData.about} />
      <SectionWithContainer>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          {AboutPageData.images.slice(0, 2).map((item, index) => (
            <div
              className="w-full relative md:aspect-[4/1] aspect-[4/3.5]"
              key={index}
            >
              <Image src={item} alt={item} fill className="object-contain" />
            </div>
          ))}
        </div>
      </SectionWithContainer>

      <Section>
        {AboutPageData.images
          .slice(2, AboutPageData.images.length)
          .map((item, index) => (
            <div
              className="w-full relative md:aspect-[4/2.5] aspect-[4/3.5]"
              key={index}
            >
              <Image src={item} alt={item} fill className="object-cover" />
            </div>
          ))}
      </Section>

      <TeamMember {...AboutPageData.teamMembers} />
      <Reviews />
    </main>
  );
};

export default page;
