import { LinkButton, OnlyButton, SectionWithContainer } from "@/components";
import {
  HorizontTowLine,
  HorizontTwoLineLeft,
  InstagramIcon,
  StackedSquaresIcon,
} from "@/data/icons";
import Image from "next/image";
import React, { JSX } from "react";

interface OurSocialMediaPrps {
  title: string;
  content: {
    image: {
      src: string;
    };
    link: {
      href: string;
    };
  }[];
  buttons: {
    label: string;
    href?: string;
    icon?: JSX.Element;
  }[];
}

const OurSocailMedia: React.FC<OurSocialMediaPrps> = ({
  title,
  content,
  buttons,
}) => {
  return (
    <SectionWithContainer>
      <div>
        <div className="flex items-center justify-center gap-4">
          <HorizontTwoLineLeft />
          <h2 className="text-3xl font-bold text-second-red     ">{title}</h2>
          <HorizontTowLine />
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-2">
          <InstagramIcon />
          <h3 className="font-bold text-3xl">tncimmigration</h3>
        </div>

        <div className="grid md:grid-cols-6 gap-5 mt-6">
          {content?.map((item, index) => (
            <div className="relative max-w-48 aspect-[1/1]" key={index}>
              <Image
                src={item?.image.src}
                className="object-cover"
                fill
                alt="Social-Image"
              />

              <div className="w-full h-full absolute bg-black/5 hover:bg-black/40 duration-700 transition-all"></div>

              <div className="absolute right-2 top-2">
                <StackedSquaresIcon className="w-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-2">
          {buttons.map((btn, index) => {
            if (btn.href) {
              return (
                <LinkButton href={btn.href} key={index} newTab={true}>
                  <button className="rounded-md bg-second-blue text-white px-4 py-2 text-xs font-medium hover:bg-blue-400 duration-200">
                    {btn.label}
                  </button>
                </LinkButton>
              );
            } else {
              return (
                <OnlyButton key={index}>
                  <button className="bg-secondary text-white rounded-md text-xs px-4 py-2 font-medium hover:bg-secondary/70 duration-200">
                    {btn.label}
                  </button>
                </OnlyButton>
              );
            }
          })}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurSocailMedia;
