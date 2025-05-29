import { Section, SectionWithContainer } from "@/components";
import ServiceCard2 from "@/components/Cards/ServiceCard2";
import { HorizontTowLine, HorizontTwoLineLeft } from "@/data/icons";
import Image from "next/image";
import React from "react";

const OurServicesData = [
  {
    title: "Study Permit",
    image: {
      src: "/tnc/service-1.webp",
      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "https://calendly.com/tncbooking/consultation60",
      },
      {
        label: "Read More",
        href: "/study-permit",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Work Permit",
    image: {
      src: "/tnc/service-2.webp",
      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "https://calendly.com/tncbooking/consultation60",
      },
      {
        label: "Read More",
        href: "/work-permit",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "FlagPoling",
    image: {
      src: "/tnc/service-3.webp",
      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "https://calendly.com/tncbooking/consultation60",
      },
      {
        label: "Read More",
        href: "/flagpoling",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Visitor Visa",
    image: {
      src: "/tnc/service-4.webp",
      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "https://calendly.com/tncbooking/consultation60",
      },
      {
        label: "Read More",
        href: "/visitor-visa",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Family Sponsorship",
    image: {
      src: "/tnc/service-5.webp",
      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "https://calendly.com/tncbooking/consultation60",
      },
      {
        label: "Read More",
        href: "/sponsor-your-siblings-for-pr",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Spousal Sponsorship",
    image: {
      src: "/tnc/service-6.webp",
      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "https://calendly.com/tncbooking/consultation60",
      },
      {
        label: "Read More",
        href: "/spousal-sponsorship",
        className: "bg-prime-red",
      },
    ],
  },
];

const OurServices = () => {
  return (
    <Section className="!pt-0 relative w-full md:min-h-[68rem] md:h-full md:aspect-auto aspect-[4/21.5]">
      <Image
        src="/tnc/bg-section-02.webp"
        alt="banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 w-full h-full flex">
        <SectionWithContainer>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center items-center gap-2">
              <HorizontTwoLineLeft />
              <h2 className="text-second-red text-3xl font-bold">Services</h2>
              <HorizontTowLine />
            </div>
            <h3 className="text-white font-bold text-center text-4xl">
              Our Services
            </h3>
            <div className="grid w-full md:mt-6  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto md:gap-2 gap-4">
              {OurServicesData?.map((data, index) => (
                <div key={index}>
                  <ServiceCard2 {...data} />
                </div>
              ))}
            </div>
          </div>
        </SectionWithContainer>
      </div>
    </Section>
  );
};

export default OurServices;


