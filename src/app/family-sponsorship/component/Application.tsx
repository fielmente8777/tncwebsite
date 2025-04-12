import { SectionWithContainer } from "@/components";
import ServiceCard2 from "@/components/Cards/ServiceCard2";

interface application {
  title: string;
  card: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
    buttons: {
      label: string;
      href: string;
      className?: string;
    }[];
  }[];
}
const Application: React.FC<application> = ({ title, card }) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="heading font-bold text-center text-primary">{title}</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          {card.map((item, index) => (
            <div className="box-shadow2 w-full" key={index}>
              <ServiceCard2 {...item} aspectRatio="aspect-[5/5]" />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Application;
