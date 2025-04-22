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
        <div className="">
          <h2 className="text-2xl md:text-[1.75rem]/[1.75rem]  font-semibold text-center">
            {title}
          </h2>

          <div className="max-w-[10rem] bg-primary h-px w-full mx-auto mt-4 " />
          <div className="max-w-[10rem] bg-primary h-3 w-full mx-auto mt-1" />
        </div>
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
