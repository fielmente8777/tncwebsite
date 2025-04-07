import Image from "next/image";
import { Container, Section, SectionTitleSubTitle } from "../sectionComponents";
import Link from "next/link";

interface bannnerData {
  title: string;
  subTitle: string;
  description: string;
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
        <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center">
          <Container>
            <SectionTitleSubTitle title={title} subTitle={subTitle} subTitleClassName="text-white" />
            <p className="heading4 text-white">{description}</p>
            <ul className="flex items-center gap-2 mt-4">
              {links.map((link, index) => (
                <li key={index} className="flex items-center gap-1">
                  <Link href={link.href}>{link.name}</Link>
                  {index !== links.length - 1 && <span>|</span>}
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
