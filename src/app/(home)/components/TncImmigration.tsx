import { LinkButton, SectionWithContainer } from "@/components";
import {
  ConsulationIcon,
  HorizontTowLine,
  HorizontTwoLineLeft,
  PreparingApplication,
  SelectingVisaCategory,
  Submission,
} from "@/data/icons";
import Image from "next/image";
import React from "react";

const TncImmigrationGirl = "/tnc/Tnc-immigration-girl.webp";

const ImmigrationData = [
  {
    title: "Consultation",
    desc: "Your immigration consultant is your steadfast companion throughout your immigration process with us, offering expert guidance at every pivotal moment.",
    icon: <ConsulationIcon />,
  },
  {
    title: "Selecting visa category",
    desc: "Your immigration consultant is your steadfast companion throughout your immigration process with us, offering expert guidance at every pivotal moment.",
    icon: <SelectingVisaCategory />,
  },
  {
    title: "Preparing Application",
    desc: "Your immigration consultant is your steadfast companion throughout your immigration process with us, offering expert guidance at every pivotal moment.",
    icon: <PreparingApplication />,
  },
  {
    title: "Submission",
    desc: "Your immigration consultant is your steadfast companion throughout your immigration process with us, offering expert guidance at every pivotal moment.",
    icon: <Submission />,
  },
];

const TncImmigration = () => {
  return (
    <SectionWithContainer>
      <div className="lg:-mt-[12rem] md:-mt-[10rem] relative">
        <div className="absolute -top-24 -left-8 w-96 h-96 lg:block hidden">
          <div className="relative w-full h-full">
            <Image
              src={TncImmigrationGirl}
              alt="girl-image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-[900px] mx-auto bg-second-red max-h-72 h-full  w-full rounded-t-full flex flex-col md:gap-10 items-center max-lg:jtc py-16">
          <h2 className="text-white font-bold md:text-4xl text-2xl md:max-w-xl max-w-xs w-full max-lg:mt-10 text-center">
            Embark on your Canadian dream journey with TNC Immigration.
          </h2>
          <LinkButton
            href="/contact-us"
            className="bg-second-red shadow-xl rounded-md shadow-black/30 font-bold text-white px-4 py-3 text-sm hover:bg-black duration-500"
          >
            Apply Now!
          </LinkButton>
        </div>
      </div>

      <div className="mt-4">
        <div className="space-y-1">
          <div className="flex justify-center items-center gap-2">
            <HorizontTwoLineLeft />
            <h2 className="text-second-red md:text-3xl text-2xl font-bold text-center">
              TNC Visa Application Process
            </h2>
            <HorizontTowLine />
          </div>

          <h3 className="text-center text-2xl text-black font-bold">
            General visa process and steps to apply for a visa to Canada
          </h3>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 md:gap-16 gap-8">
          {ImmigrationData?.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="mx-auto">{data?.icon}</div>
              <h2 className="text-center text-prime-red font-bold text-2xl">
                {data?.title}
              </h2>
              <p className="leading-7 text-sm text-center">{data?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TncImmigration;
