import { CommanBanner } from "@/components";
import { servicePageData } from "@/data/pagedata";
import CommonSection from "./Components/CommonSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - TNC immigration",
  description:
    "Our Services Permanent Residence Federal Skilled Worker Book Consultation Read More Federal Skilled Trade Workers Book Consultation Read More Canadian Experience Class Book Consultation Read More Provincial Nominee Programs Book Consultation Read More Temporary Residence Study Permit Book Consultation Read More Intra-Company Transfer Book Consultation Read More Work Permit Book Consultation Read More Super Visa",
  keywords:"",
  alternates: {
    canonical: "https://tncimmigration.com/services",
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
  authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/services" }],
  openGraph: {
    title: "Services - TNC immigration",
    description:
      "Our Services Permanent Residence Federal Skilled Worker Book Consultation Read More Federal Skilled Trade Workers Book Consultation Read More Canadian Experience Class Book Consultation Read More Provincial Nominee Programs Book Consultation Read More Temporary Residence Study Permit Book Consultation Read More Intra-Company Transfer Book Consultation Read More Work Permit Book Consultation Read More Super Visa",
    url: "https://tncimmigration.com/services",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/services/images/tncimmigration-og.png",
        width: 1200,
      },
    ],
  },
};
const page = () => {
  return (
    <main>
      <CommanBanner {...servicePageData.banner} />
      {servicePageData.services.map((data, index) => (
        <CommonSection {...data} key={index} />
      ))}
    </main>
  );
};

export default page;
