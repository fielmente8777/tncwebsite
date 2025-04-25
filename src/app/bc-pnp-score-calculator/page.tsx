import CommanBanner from "@/components/banner/CommanBanner";
import React from "react";
import Calculator from "./components/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BC PNP SCORE CALCULATOR - TNC immigration",
  description:
    "BC PNP SCORE CALCULATOR BC PNP Calculator – New Version (2023) Directly Related Work Experience in the Occupation of B.C. Job Offer 5 or more yearsAt least 4 but less than 5 yearsAt least 3 but less than 4 yearsAt least 2 but less than 3 yearsAt least 1 but less than 2 yearsLess than",
  keywords: "",
  alternates: {
    canonical: "https://tncimmigration.com/bc-pnp-score-calculator",
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
      url: "https://tncimmigration.com/bc-pnp-score-calculator",
    },
  ],
  openGraph: {
    title: "BC PNP SCORE CALCULATOR - TNC immigration",
    description:
      "BC PNP SCORE CALCULATOR BC PNP Calculator – New Version (2023) Directly Related Work Experience in the Occupation of B.C. Job Offer 5 or more yearsAt least 4 but less than 5 yearsAt least 3 but less than 4 yearsAt least 2 but less than 3 yearsAt least 1 but less than 2 yearsLess than",
    url: "https://tncimmigration.com/bc-pnp-score-calculator",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/bc-pnp-score-calculator/images/tncimmigration-og.png",
        width: 1200,
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <CommanBanner title="BC PNP SCORE CALCULATOR" src="/tnc/bnr3.webp" />
      <Calculator />
    </div>
  );
};

export default page;
