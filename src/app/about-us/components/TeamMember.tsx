import { SectionWithContainer, TeamMemberCard } from "@/components";

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
        <h2 className="text-prime-red text-lg font-bold">{title}</h2>
        <div className="flex gap-4">
          <p className="font-semibold md:text-4xl text-2xl">{desc}</p>
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
