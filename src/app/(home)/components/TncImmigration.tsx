import { LinkButton, SectionWithContainer } from "@/components";
import { ConsulationIcon, HorizontTwoLineLeft } from "@/data/icons";
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
    title: "Selecting visacategory",
    desc: "Your immigration consultant is your steadfast companion throughout your immigration process with us, offering expert guidance at every pivotal moment.",
    icon: <ConsulationIcon />,
  },
  {
    title: "Preparing Application",
    desc: "Your immigration consultant is your steadfast companion throughout your immigration process with us, offering expert guidance at every pivotal moment.",
    icon: <ConsulationIcon />,
  },
  {
    title: "Submission",
    desc: "Your immigration consultant is your steadfast companion throughout your immigration process with us, offering expert guidance at every pivotal moment.",
    icon: <ConsulationIcon />,
  },
];

const TncImmigration = () => {
  return (
    <SectionWithContainer>
      <div className="-mt-28 relative">
        <div className="absolute -top-24 -left-8 w-96 h-96">
          <div className="relative w-full h-full">
            <Image
              src={TncImmigrationGirl}
              alt="girl-image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-[900px] mx-auto bg-second-red max-h-72 rounded-t-full flex flex-col gap-10 items-center py-16">
          <h2 className="text-white font-bold text-4xl max-w-xl text-center">
            Embark on your Canadian dream journey with TNC Immigration.
          </h2>
          <LinkButton href="/">
            <button className="bg-second-red shadow-xl rounded-md shadow-black/30 font-bold text-white px-4 py-3 text-sm hover:bg-black duration-500">
              Apply Now!
            </button>
          </LinkButton>
        </div>
      </div>

      <div className="mt-4">
        <div className="space-y-1">
          <div className="flex justify-center items-center gap-2">
            <HorizontTwoLineLeft />
            <h2 className="text-second-red text-3xl font-bold">
              TNC Visa Application Process
            </h2>
            <HorizontTwoLineLeft />
          </div>

          <h3 className="text-center text-2xl text-black font-bold">
            General visa process and steps to apply for a visa to Canada
          </h3>
        </div>

        <div className="grid grid-cols-4 mt-8 gap-16">
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
