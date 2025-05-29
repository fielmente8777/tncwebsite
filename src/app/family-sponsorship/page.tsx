import { CommanBanner } from "@/components";
import { familySponsorship } from "@/data/pagedata";
import Application from "./component/Application";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family & Sponsorship - TNC immigration",
  description:
    "Family & Sponsorship Family & Sponsorship Applications Spousal PR Sponsorship Read More Spousal Work Permit Read More Child Or Other Dependent Sponsorship Read More Parents, Grandparents Sponsorship Read More",
  keywords: "",
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
  authors: [
    {
      name: "TNC Immigration",
      url: "https://tncimmigration.com/family-sponsorship/",
    },
  ],
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
        url: "https://tncimmigration.com/family-sponsorship/images/tncimmigration-og.png",
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
      <div className="max-width">
        <p className="mb-4 mt-8 text-center">
          This page provides a basic outline of the respective application,
          which may or may not be applicable to you. Do not solely rely on the
          information here. To check your eligibility and get accurate
          information you can contact our team at TNC Immigration.
        </p>
      </div>
    </main>
  );
};

export default page;
