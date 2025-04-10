import { SectionWithContainer } from "@/components";
import ServiceCard2 from "@/components/Cards/ServiceCard2";
import { HorizontTwoLineLeft } from "@/data/icons";
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
        href: "/",
      },
      {
        label: "Read More",
        href: "/",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Study Permit",
    image: {
      src: "/tnc/service-2.webp",

      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "/",
      },
      {
        label: "Read More",
        href: "/",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Study Permit",
    image: {
      src: "/tnc/service-3.webp",

      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "/",
      },
      {
        label: "Read More",
        href: "/",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Study Permit",
    image: {
      src: "/tnc/service-4.webp",
      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "/",
      },
      {
        label: "Read More",
        href: "/",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Study Permit",
    image: {
      src: "/tnc/service-5.webp",

      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "/",
      },
      {
        label: "Read More",
        href: "/",
        className: "bg-prime-red",
      },
    ],
  },
  {
    title: "Study Permit",
    image: {
      src: "/tnc/service-6.webp",

      alt: "",
    },
    buttons: [
      {
        label: "Book Consultation",
        href: "/",
      },
      {
        label: "Read More",
        href: "/",
        className: "bg-prime-red",
      },
    ],
  },
];

const OurServices = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/tnc/bg-section-02.webp")`,
      }}
      className="h-[1068.21px] bg-cover bg-center"
    >
      <div>
        <div className="pt-10">
          <div className="flex justify-center items-center gap-2">
            <HorizontTwoLineLeft />
            <h2 className="text-second-red text-3xl font-bold">Services</h2>
            <HorizontTwoLineLeft />
          </div>

          <h3 className="text-white font-bold text-center text-4xl mt-4">
            Our Services
          </h3>
        </div>

        <SectionWithContainer>
          <div className="grid grid-cols-3 mx-auto gap-2">
            {OurServicesData?.map((data, index) => (
              <div key={index}>
                <ServiceCard2 {...data} />
              </div>
            ))}
          </div>
        </SectionWithContainer>
      </div>
    </div>
  );
};

export default OurServices;
