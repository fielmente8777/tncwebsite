import { CommanBanner, LinkButton, SectionWithContainer } from "@/components";
import { imagesLink } from "@/data/links";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Start Assessment - TNC immigration",
  description:
    "Assessment Inside Canada Outside Canada",
  keywords:"",
  alternates: {
    canonical: "https://tncimmigration.com/start-assessment/",
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
  authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/start-assessment/" }],
  openGraph: {
    title: "Start Assessment - TNC immigration",
    description:
      "Assessment Inside Canada Outside Canada",
    url: "https://tncimmigration.com/start-assessment/",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/start-assessment/images/tncimmigration-og.png",
        width: 1200,
      },
    ],
  },
};

const page = () => {
  const data = [
    {
      name: "Inside Canada",
      href: "/inaside-canada", // Uncomment the line below if you want to use JotForm
      // href: "https://api.mybusinesspilot.com/widget/form/4mIIinFkRqahNwPvQXCp",
    },
    {
      name: "Outside Canada",
      href: "/outside-canada", // Uncomment the line below if you want to use JotForm
    },
  ];
  return (
    <main>
      <CommanBanner title="Assessment" src={imagesLink+"bgim.webp"} />
      <SectionWithContainer>
        <div className="flex flex-col w-full md:gap-8 gap-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-16">
            {data.map((item, i) => (
              <div
                className="w-full flex items-center justify-center p-16 box-shadow2 border-[4px] border-prime-light-blue"
                key={i}
              >
                <LinkButton
                  href={item.href}
                  className={`${i === 0 ? "bg-prime-red hover:bg-prime-light-blue" : "bg-prime-light-blue hover:bg-prime-red"} px-4 py-2 text-white`}
                >
                  {item.name}
                </LinkButton>
              </div>
            ))}
          </div>
          <Image src="/test1.webp" alt="test" width={500} height={500} className="mx-auto" />
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
