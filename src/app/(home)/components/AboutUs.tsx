import { LinkButton, SectionWithContainer, TwoColSection } from "@/components";
import { HorizontTowLine } from "@/data/icons";
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
  links,
  src,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 gap-5">
        <div></div>

        <div className="space-y-5">
          <div className="flex gap-4 items-center">
            <h2 className="text-second-red font-bold text-2xl">About Us</h2>
            <HorizontTowLine />
          </div>

          <h3 className="text-4xl text-prime-dark-blue font-extrabold">
            We’re Trusted Immigration Consultant
          </h3>

          <p className="text-tertiary max-w-[470px]">
            Our legal professionals take their time to understand the needs of
            our clients. We ensure that our clients are dealt professionally and
            provided all the suitable options. We provide immigration services
            to our clients inside Canada and also cater to our clients globally.
            We pride ourselves in providing professional services to a diversity
            of clients.
          </p>

          <div className="flex gap-2 items-center">
            <LinkButton href="/">
              <button className="bg-prime-red px-5 py-2 rounded-full text-white font-medium text-sm">
                Read More
              </button>
            </LinkButton>

            <LinkButton href="/">
              <button className="bg-prime-light-blue px-5 py-2 rounded-full text-white font-medium text-sm">
                Book Appointment
              </button>
            </LinkButton>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutUs;
