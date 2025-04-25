import { CommanBanner } from "@/components";
import { FaqPageData } from "@/data/pagedata";
import FaqSection from "./components/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs - TNC immigration",
    description:
      "FAQs FAQs Frequently asked immigration questions What services does TNC Immigration offer? TNC Immigration provides a range of services including visa applications, permanent residency consultations, study permits, work permits, family sponsorships, and citizenship applications. Where are TNC Immigration's offices located? TNC Immigration has multiple locations across Canada, including Toronto (Mississauga) & Vancouver (Surrey, Kelowna) Please",
    keywords:"",
    alternates: {
      canonical: "https://tncimmigration.com/faqs",
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
    authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/faqs" }],
    openGraph: {
      title: "FAQs - TNC immigration",
      description:
        "FAQs FAQs Frequently asked immigration questions What services does TNC Immigration offer? TNC Immigration provides a range of services including visa applications, permanent residency consultations, study permits, work permits, family sponsorships, and citizenship applications. Where are TNC Immigration's offices located? TNC Immigration has multiple locations across Canada, including Toronto (Mississauga) & Vancouver (Surrey, Kelowna) Please",
      url: "https://tncimmigration.com/faqs",
      siteName: "tncimmigration",
      locale: "en_IN",
      type: "website",
  
      images: [
        {
          url: "https://tncimmigration.com/faqs/images/tncimmigration-og.png",
          width: 1200,
        },
      ],
    },
  };
const page = () => {
    return (
        <main>
            <CommanBanner {...FaqPageData.bannerData}/>
            <FaqSection {...FaqPageData.faqSection} />
        </main>
    );
}

export default page;