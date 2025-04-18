import Image from "next/image";
import SectionWithContainer from "./SectionWithContainer";
import { LinkButton } from "../buttons";
import { FillCallIcon, GLOcationIcon } from "@/data/icons";
import { cn } from "@/utils/cn";

export interface TwoColSectionProps {
  title?: string;
  subTitle?: string;
  desc: string;
  src?: string;
  links?: {
    name: string;
    href: string;
  }[];
  btnCss?: boolean;
  index?: number;
  aspect?: string;
}
const TwoColSection: React.FC<TwoColSectionProps> = ({
  title,
  desc,
  src,
  links,
  index,
  btnCss = false,
  aspect,
}) => {
  return (
    <SectionWithContainer sectionClassName={`${index ? "!pt-4" : "!pb-4"}`}>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
        <div
          className={cn(`w-full relative md:aspect-[4/3.8] aspect-[4/3.5], ${
            index
              ? index % 2 === 0
                ? "md:order-1 order-2"
                : "md:order-2 order-1"
              : ""
          }`,aspect)}
          // className={`w-full relative ${aspect ? aspect : "md:aspect-[4/3.8] aspect-[4/3.5]"} ${
          //   index
          //     ? index % 2 === 0
          //       ? "md:order-1 order-2"
          //       : "md:order-2 order-1"
          //     : ""
          // }`}
        >
          {src && (
            <Image
              src={src}
              alt={title || "Image"}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div
          className={`flex flex-col gap-4 w-full ${index !== undefined && index % 2 === 0 ? "md:order-2 order-1" : "md:order-1 order-2"}`}
        >
          {title && (
            <div className={`flex flex-col gap-4 w-full`}>
              <h2
                className={`text-xl font-semibold text-prime-red heading2`}
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            </div>
          )}
          <div
            key={index}
            className="heading4 text-dark flex flex-col gap-4 data_pass"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></div>
          <ul className="flex max-lg:flex-col items-center gap-2 mt-auto">
            {links?.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <LinkButton
                  href={link.href}
                  className={`box-shadow2 ${index === 0 ? `${btnCss ? "bg-dark " : "bg-secondary hover:bg-prime-red"} capitalize text-white flex items-center gap-1  ` : " bg-prime-red hover:bg-secondary "} font-semibold py-3 px-6 text-white rounded-lg`}
                >
                  {index === 0 ? (
                    <span className="">
                      <GLOcationIcon />
                    </span>
                  ) : (
                    <span className="">
                      <FillCallIcon />
                    </span>
                  )}{" "}
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

export default TwoColSection;
