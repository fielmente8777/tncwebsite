import Image from "next/image";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import SectionWithContainer from "./SectionWithContainer";
import { LinkButton } from "../buttons";

export interface TwoColSectionProps {
  title?: string;
  subTitle?: string;
  desc: string[];
  src?: string;
  links?: {
    name: string;
    href: string;
  }[];
  btnCss?: boolean;
  index?: number;
}
const TwoColSection: React.FC<TwoColSectionProps> = ({
  title,
  desc,
  src,
  links,
  index,
  btnCss = false,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
        <div
          className={`w-full relative md:aspect-[4/2.8] aspect-[4/3.5] ${
            index
              ? index % 2 === 0
                ? "md:order-1 order-2"
                : "md:order-2 order-1"
              : ""
          }`}
        >
          {src && (
            <Image
              src={src}
              alt={title || "Image"}
              fill
              className="object-cover rounded-2xl"
            />
          )}
        </div>
        <div
          className={`flex flex-col gap-4 w-full ${index !== undefined && index % 2 === 0 ? "md:order-2 order-1" : "md:order-1 order-2"}`}
        >
          {title && (
            <SectionTitleSubTitle
              title={title}
              subTitleClassName="text-dark md:pe-4"
            />
          )}
          {desc.map((item, index) => (
            <div
              key={index}
              className="heading4 text-dark"
              dangerouslySetInnerHTML={{ __html: item }}
            ></div>
          ))}
          <ul className="flex max-lg:flex-col items-center gap-2 mt-auto">
            {links?.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <LinkButton
                  href={link.href}
                  className={`raleway ${index === 0 ? `${btnCss ? "bg-dark " : "bg-secondary"} capitalize text-white hover:box-shadow flex items-center gap-1 rounded-lg py-3 px-6` : "text-dark underline underline-offset-4 hover:text-primary"} font-semibold`}
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

export default TwoColSection;
