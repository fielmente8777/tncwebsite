import { SectionWithContainer, TeamMemberCard } from "@/components";
import { imagesLink } from "@/data/links";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  cards: {
    name: string;
    src: string;
    post?: string;
  }[];
}
const TeamMember: React.FC<Props> = ({ title, desc, cards }) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-prime-red text-lg md: font-bold flex items-center gap-2">
          <span className="w-12 h-1 bg-prime-red"></span>
          {title}
        </h2>
        <div className="flex gap-4">
          <div className="mt-3 w-full max-w-[40px] h-[40px] relative aspect-auto">
            <Image
              src={imagesLink + "icon/I.webp"}
              alt="ico"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-bold md:text-5xl/[57px] md:pe-16 text-2xl">{desc}</p>
        </div>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 md:gap-8">
          {cards.map((card, index) => (
            <TeamMemberCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TeamMember;
