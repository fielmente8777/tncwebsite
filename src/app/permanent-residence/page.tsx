import { CommanBanner } from "@/components";
import { permanentResidence } from "@/data/pagedata";
import Application from "./component/Application";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permanent Residence - TNC immigration",
  description:
    "Permanent Residence Permanent Residence Federal Skilled Worker Read More Federal Skilled Trade Workers Read More Canadian Experience Class Read More Provincial Nominee Programs Read More",
  keywords:"",
  alternates: {
    canonical: "https://tncimmigration.com/permanent-residence/",
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
  authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/permanent-residence/" }],
  openGraph: {
    title: "Permanent Residence - TNC immigration",
    description:
      "Permanent Residence Permanent Residence Federal Skilled Worker Read More Federal Skilled Trade Workers Read More Canadian Experience Class Read More Provincial Nominee Programs Read More",
    url: "https://tncimmigration.com/permanent-residence/",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/permanent-residence/images/tncimmigration-og.png",
        width: 1200,
      },
    ],
  },
};
const page = () => {
  return (
    <main>
      <CommanBanner {...permanentResidence.bannerData} />
      <Application {...permanentResidence.application} />
    </main>
  );
};

export default page;
