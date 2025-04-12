import { SectionWithContainer } from "@/components";
import CommanBanner from "@/components/banner/CommanBanner";
import FormSection from "./components/FormSection";
import { imagesLink } from "@/data/links";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - TNC immigration",
  description:
    "Your Trusted Immigration Partner Gateway to Your Canadian Dream View Services About Us Temporary Residence Read More Permanent Residence Read More Family & Sponsorship Read More FlagPoling Application Read More 5 1 + Years of experience We have been the top 1% RCIC for the 5+ Golden Years About Us We’re Trusted Immigration Consultant Our",
  keywords:"",
  alternates: {
    canonical: "https://tncimmigration.com/contact-us",
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
  authors: [{ name: "TNC Immigration", url: "https://tncimmigration.com/contact-us" }],
  openGraph: {
    title: "Home - TNC immigration",
    description:
      "Your Trusted Immigration Partner Gateway to Your Canadian Dream View Services About Us Temporary Residence Read More Permanent Residence Read More Family & Sponsorship Read More FlagPoling Application Read More 5 1 + Years of experience We have been the top 1% RCIC for the 5+ Golden Years About Us We’re Trusted Immigration Consultant Our",
    url: "https://tncimmigration.com/contact-us",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://tncimmigration.com/contact-us/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <CommanBanner title="Contact Us" src={imagesLink + "bg-slider-02.webp"} />
      <SectionWithContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex gap-4">
            <div className="w-[110px] h-20 bg-[#c1282a] text-white rounded-lg flex items-center justify-center">
              <span>
                <FaLocationDot size={30} />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Head office address:</h1>
              <p className="font-medium">
                Suite 303 – 15957 84 Avenue Surrey BC, V4N 0W7 Canada
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[80px] h-20 bg-[#c1282a] border text-white rounded-lg flex items-center justify-center">
              <span>
                <IoCallSharp size={30} />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Call for help:</h1>
              <p className="font-medium">+1 236 818 5558</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[80px] h-20 bg-[#c1282a] text-white rounded-lg flex items-center justify-center">
              <span>
                <svg
                  width="31"
                  height="24"
                  viewBox="0 0 31 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8281 0.75C29.3516 0.75 30.6406 2.03906 30.6406 3.5625V20.4375C30.6406 22.0195 29.3516 23.25 27.8281 23.25H3.45312C1.87109 23.25 0.640625 22.0195 0.640625 20.4375V3.5625C0.640625 2.03906 1.87109 0.75 3.45312 0.75H27.8281ZM27.8281 3.5625H3.45312V5.96484C4.74219 7.07812 6.85156 8.71875 11.3047 12.2344C12.3008 12.9961 14.2344 14.8711 15.6406 14.8125C16.9883 14.8711 18.9219 12.9961 19.918 12.2344C24.3711 8.71875 26.4805 7.07812 27.8281 5.96484V3.5625ZM3.45312 20.4375H27.8281V9.59766C26.4805 10.6523 24.5469 12.1758 21.6758 14.4609C20.3281 15.457 18.1016 17.6836 15.6406 17.625C13.1211 17.6836 10.8359 15.457 9.54688 14.4609C6.67578 12.1758 4.74219 10.6523 3.45312 9.59766V20.4375Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Mail for information:</h1>
              <p className="font-medium">info@tncimmigration.com</p>
            </div>
          </div>
        </div>
      </SectionWithContainer>

      <FormSection />
    </div>
  );
};

export default page;
