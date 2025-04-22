import { SectionWithContainer } from "@/components";
import Image from "next/image";

interface Props {
  title: string;
  src: string;
  desc: string[];
}
const AboutUsSection: React.FC<Props> = ({ title, src, desc }) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-2 md:gap-3 w-full"> <span className="w-10 h-1 bg-prime-red"></span>{title}</h2>
          {desc.slice(0, 2).map((item, index) => (
            <p className="font-medium max-md:text-sm" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className=" w-full">
          <div className="w-full md:aspect-[4/2.5] aspect-[4/3.5] relative box-shadow2 rounded-2xl">
            <Image src={src} alt={title} fill className="object-cover rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col gap-4">
        {desc.slice(2, desc.length).map((item, index) => (
          <p className="font-medium max-md:text-sm" key={index}>
            {item}
          </p>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default AboutUsSection;
