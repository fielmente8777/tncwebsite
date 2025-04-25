import CommanBanner from '@/components/banner/CommanBanner'
import React from 'react'
import FSWCalculator from './components/FSWCalculator'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FSW SCORE CALCULATOR - TNC immigration",
    description:
      "FSW SCORE CALCULATOR EDUCATION(MAXIMUM 25 POINTS) University degree at the Doctoral (PhD) level or equalUniversity degree at the Master's level or equalBachelors degree three or more yearsProfessionals degree needed to practice in licensed professionTwo or more Canadian post-secondary degrees or diplomas or equal (at least one must be for a program of at least three",
    keywords:"",
    alternates: {
      canonical: "https://tncimmigration.com/fsw-score-calculator",
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
    authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/fsw-score-calculator" }],
    openGraph: {
      title: "FSW SCORE CALCULATOR - TNC immigration",
      description:
        "FSW SCORE CALCULATOR EDUCATION(MAXIMUM 25 POINTS) University degree at the Doctoral (PhD) level or equalUniversity degree at the Master's level or equalBachelors degree three or more yearsProfessionals degree needed to practice in licensed professionTwo or more Canadian post-secondary degrees or diplomas or equal (at least one must be for a program of at least three",
      url: "https://tncimmigration.com/fsw-score-calculator",
      siteName: "tncimmigration",
      locale: "en_IN",
      type: "website",
  
      images: [
        {
          url: "https://tncimmigration.com/fsw-score-calculator/images/tncimmigration-og.png",
          width: 1200,
        },
      ],
    },
  };

const page = () => {
    return (
        <div>
            <CommanBanner title="FSW SCORE CALCULATOR" src='/tnc/bnr3.webp'/>
            <FSWCalculator />
        </div>
    )
}

export default page