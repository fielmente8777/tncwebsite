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
        <h2 className="text-prime-red text-lg font-bold flex items-center gap-2"><span className="w-12 h-1 bg-prime-red"></span>{title}</h2>
        <div className="flex gap-4">
          <Image src={imagesLink+"icon/I.webp"} alt="ico" width={90} height={60} /><p className="font-semibold md:text-4xl text-2xl">{desc}</p>
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
