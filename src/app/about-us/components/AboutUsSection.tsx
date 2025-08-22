import { SectionWithContainer } from "@/components";
import Image from "next/image";

interface Props {
  title: string;
  src: string;
  data: {
    title?: string;
    subTitle?: string;
    desc: string[];
  }[];
}
const AboutUsSection: React.FC<Props> = ({ title, src, data }) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl max-md:text-3xl font-bold flex items-center gap-2 md:gap-3 w-full">
            {" "}
            <span className="w-10 h-1 bg-prime-red"></span>
            {title}
          </h2>
          {/* {desc.slice(0, 2).map((item, index) => (
            <p className="font-medium max-md:text-[18px]" key={index}>
              {item}
            </p>
          ))} */}
          {data?.slice(0, 2).map((item, index) => (
            <div className="space-y-3" key={index}>
              {item.title && (
                <h3 className="text-xl font-semibold">{item.title}</h3>
              )}
              {item.subTitle && (
                <p className="max-md:text-lg">{item.subTitle}</p>
              )}
              {item.desc.map((description, index) => (
                <p className="max-md:text-lg" key={index}>
                  {description}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-full">
          <div className="w-full md:aspect-[4/2.5] aspect-[4/3.5] relative box-shadow2 rounded-2xl">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col gap-4">
        {data?.slice(2, data.length).map((item, index) => (
          <div className="" key={index}>
            <div className="space-y-3" key={index}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {item.desc.map((description, index) => (
                <p className="max-md:text-lg" key={index}>
                  {description}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default AboutUsSection;
