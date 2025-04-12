import { SectionWithContainer, ServiceCard3 } from "@/components";

interface Props {
  title: string;
  cards: {
    icon: string;
    title: string;
    links: {
      name: string;
      href: string;
    }[];
  }[];
}
const CommonSection: React.FC<Props> = ({ title, cards }) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col md:gap-10 gap-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary text-center">{title}</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-lg:gap-8 gap-4">
            {cards.map((card, index) => (
                <ServiceCard3 key={index} {...card} />
            ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CommonSection;
