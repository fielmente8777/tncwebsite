import { CommanBanner } from "@/components";
import { temporaryResidence } from "@/data/pagedata";
import Application from "./component/Application";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home - TNC immigration",
  description:
    "Your Trusted Immigration Partner Gateway to Your Canadian Dream View Services About Us Temporary Residence Read More Permanent Residence Read More Family & Sponsorship Read More FlagPoling Application Read More 5 1 + Years of experience We have been the top 1% RCIC for the 5+ Golden Years About Us We’re Trusted Immigration Consultant Our",
  keywords:"",
  alternates: {
    canonical: "https://tncimmigration.com/",
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
  authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/" }],
  openGraph: {
    title: "Home - TNC immigration",
    description:
      "Your Trusted Immigration Partner Gateway to Your Canadian Dream View Services About Us Temporary Residence Read More Permanent Residence Read More Family & Sponsorship Read More FlagPoling Application Read More 5 1 + Years of experience We have been the top 1% RCIC for the 5+ Golden Years About Us We’re Trusted Immigration Consultant Our",
    url: "https://tncimmigration.com/",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/images/tncimmigration-og.png",
        width: 1200,
      },
    ],
  },
};

const page = () => {
  return (
    <main>
      <CommanBanner {...temporaryResidence.bannerData} />
      <Application {...temporaryResidence.application} />
    </main>
  );
};

export default page;
