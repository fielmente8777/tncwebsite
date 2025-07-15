import {
  CommanBanner,
  Reviews,
  Section,
  SectionWithContainer,
} from "@/components";
import { AboutPageData } from "@/data/pagedata";
import AboutUsSection from "./components/AboutUsSection";
import Image from "next/image";
// import TeamMember from "./components/TeamMember";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TNC immigration",
  description:
    "About Us TNC True North Consultancy TNC True North Consultancy Ltd. is one of the leading immigration consulting firms in the Lower Mainland of BC, Canada with offices to serve our clients at their best convenience.Our main office is based in the heart of Surrey and is easily accessible to our clients. We at True",
  keywords: "",
  alternates: {
    canonical: "https://tncimmigration.com/about-us/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    { name: "TNC Immigration", url: "https://tncimmigration.com/about-us/" },
  ],
  openGraph: {
    title: "About Us - TNC immigration",
    description:
      "About Us TNC True North Consultancy TNC True North Consultancy Ltd. is one of the leading immigration consulting firms in the Lower Mainland of BC, Canada with offices to serve our clients at their best convenience.Our main office is based in the heart of Surrey and is easily accessible to our clients. We at True",
    url: "https://tncimmigration.com/about-us/",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/about-us/images/tncimmigration-og.png",
        width: 1200,
      },
    ],
  },
};
const page = () => {
  return (
    <main>
      <CommanBanner {...AboutPageData.bannerData} />
      <AboutUsSection {...AboutPageData.about} />
      <SectionWithContainer sectionClassName="!py-0">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          {AboutPageData.images.slice(0, 2).map((item, index) => (
            <div
              className="w-full relative md:aspect-[4/1] aspect-[4/2]"
              key={index}
            >
              <Image src={item} alt={item} fill className="object-contain" />
            </div>
          ))}
        </div>
      </SectionWithContainer>

      <Section className="max-lg:px-2">
        {AboutPageData.images
          .slice(2, AboutPageData.images.length)
          .map((item, index) => (
            <div
              className="w-full relative md:aspect-[4/2.5] aspect-[4/2.2]"
              key={index}
            >
              <Image src={item} alt={item} fill className="object-cover" />
            </div>
          ))}
      </Section>

      {/* <TeamMember {...AboutPageData.teamMembers} /> */}
      <div className="bg-[#E4EAEE] max_screen md:py-16 py-8">
        <SectionWithContainer>
          <h3 className="heading font-bold text-[#0e0e0e] flex items-center gap-4">
            <span className="w-14 h-[1.8px] bg-prime-red"></span> Happy Customers
          </h3>
        </SectionWithContainer>
        <Reviews />
      </div>
    </main>
  );
};

export default page;
