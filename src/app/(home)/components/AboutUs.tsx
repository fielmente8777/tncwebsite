import { LinkButton, SectionWithContainer } from "@/components";
import { HorizontTowLine } from "@/data/icons";
import Image from "next/image";
import React from "react";

interface AboutUsProps {
  title: string;
  subTitle: string;
  desc: string;
  src: string;
  links: {
    name: string;
    href: string;
  }[];
}
const AboutUs: React.FC<AboutUsProps> = ({
  title,
  subTitle,
  desc,
  src,
  links,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 gap-5 grid-cols-1 items-center">
        <div className="relative w-full aspect-square md:aspect-[4/3.2]">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>

        <div className="space-y-5">
          <div className="flex gap-4 items-center">
            <h2 className="text-second-red font-bold text-2xl">{title}</h2>
            <HorizontTowLine />
          </div>

          <h3 className="text-4xl text-prime-dark-blue font-extrabold">
            {subTitle}
          </h3>

          <p className="text-tertiary max-w-[470px]">{desc}</p>

          <ul className="flex items-center gap-4 mt-5">
            {links.map((link, index) => (
              <li key={index}>
                <LinkButton
                  href={link.href}
                  className={`rounded-full ${index === 0 ? "bg-prime-light-blue text-white" : "bg-prime-red text-white"} px-5 py-2 font-medium text-sm`}
                >
                  {link.name}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutUs;
