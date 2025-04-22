import Image from "next/image";
import { Container, Section, SectionTitleSubTitle } from "../sectionComponents";
import Link from "next/link";

interface bannnerData {
  title: string;
  subTitle: string;
  description?: string;
  src: string;
  links: {
    name: string;
    href: string;
  }[];
}
const Bannner: React.FC<bannnerData> = ({
  title,
  subTitle,
  description,
  src,
  links,
}) => {
  return (
    <Section className="!py-0">
      <div className="relative md:aspect-[4/1.6] aspect-[4/3.5] w-full">
        <Image src={src} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#1A213A]/30 flex items-center justify-center">
          <Container>
            <div className="max-w-xl md:pe-[2rem]">
              <SectionTitleSubTitle
                title={title}
                subTitle={subTitle}
                subTitleClassName="text-white md:text-7xl font-bold"
                
              />
            </div>
            <p className="heading4 text-white">{description}</p>
            <ul className="flex items-center gap-2 mt-4">
              {links.map((link, index) => (
                <li key={index} className="flex items-center gap-1">
                  <Link href={link.href} className={`${index === 0 ? "bg-prime-red hover:bg-blue-600" : "bg-black hover:bg-prime-red"} px-4 py-2 rounded-full text-white duration-300 transition-all ease-in-out`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Bannner;
