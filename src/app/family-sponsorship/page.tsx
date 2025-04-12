import { CommanBanner } from "@/components";
import { familySponsorship } from "@/data/pagedata";
import Application from "./component/Application";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family & Sponsorship - TNC immigration",
  description:
    "Family & Sponsorship Family & Sponsorship Applications Spousal PR Sponsorship Read More Spousal Work Permit Read More Child Or Other Dependent Sponsorship Read More Parents, Grandparents Sponsorship Read More",
  keywords:"",
  alternates: {
    canonical: "https://tncimmigration.com/family-sponsorship/",
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
  authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/family-sponsorship/" }],
  openGraph: {
    title: "Family & Sponsorship - TNC immigration",
    description:
      "Family & Sponsorship Family & Sponsorship Applications Spousal PR Sponsorship Read More Spousal Work Permit Read More Child Or Other Dependent Sponsorship Read More Parents, Grandparents Sponsorship Read More",
    url: "https://tncimmigration.com/family-sponsorship/",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/family-sponsorship/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};
const page = () => {
  return (
    <main>
      <CommanBanner {...familySponsorship.bannerData} />
      <Application {...familySponsorship.application} />
    </main>
  );
};

export default page;
