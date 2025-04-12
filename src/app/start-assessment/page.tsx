import { CommanBanner, LinkButton, SectionWithContainer } from "@/components";
import { Metadata } from "next";
import Image from "next/image";

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
        url: "https://tncimmigration.com/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

const page = () => {
  const data = [
    {
      name: "Inside Canada",
      href: "https://api.mybusinesspilot.com/widget/form/4mIIinFkRqahNwPvQXCp",
    },
    {
      name: "Outside Canada",
      href: "https://api.mybusinesspilot.com/widget/form/4mIIinFkRqahNwPvQXCp",
    },
  ];
  return (
    <main>
      <CommanBanner title="Assessment" src="" />
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
