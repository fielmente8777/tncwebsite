import { SectionWithContainer } from "@/components";
import ServiceCard2 from "@/components/Cards/ServiceCard2";
import { JSX } from "react";

interface Props {
  cards: {
    icon: JSX.Element;
    title: string;
    name: string;
    href: string;
    src: string;
  }[];
}

const Services: React.FC<Props> = ({ cards }) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {cards.map((card, index) => (
          <ServiceCard2
            key={index}
            icon={card.icon}
            title={card.title}
            href={card.href}
            src={card.src}
            name={card.name}
            level={2}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Services;
