import Image from "next/image";
import React from "react";
import { Section } from "../sectionComponents";
import { LinkButton } from "../buttons";

interface CommanBannerProps {
  title: string;
  src: string;
  link?: {
    name: string;
    href: string;
  };
}

const CommanBanner: React.FC<CommanBannerProps> = ({ title, src, link }) => {
  return (
    <Section className="!py-0">
      <div className="relative md:aspect-[4/.8] aspect-[4/2.5] w-full">
        <Image src={src} alt={title} className="object-cover object-top" fill />
        <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="">
            <h1 className="md:text-[42px]/[42px] text-center text-3xl font-bold text-white capitalize">
              {title}
            </h1>
            {link && (
              <LinkButton href={link.href} className=" mt-5 bg-prime-red text-white capitalize w-fit px-5 py-2 md:text-lg rounded-sm">
                {link.name}
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CommanBanner;
