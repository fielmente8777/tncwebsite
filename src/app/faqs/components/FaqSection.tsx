import { Accordion } from "@/components";
import SectionWithContainer from "../../../components/sectionComponents/SectionWithContainer";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { HorizontTowLine, HorizontTwoLineLeft } from "@/data/icons";
interface faqSection {
  title: string;
  subTitle: string;
  images: string[];
  faqs: {
    question: string;
    answer: string[];
  }[];
}
const FaqSection: React.FC<faqSection> = ({
  title,
  subTitle,
  images,
  faqs,
}) => {
  return (
    <div>
      <SectionWithContainer>
        <div className="flex flex-col w-full md:gap-14 gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-second-red heading1 text-center font-semibold flex gap-2 items-center justify-center">
                <span><HorizontTwoLineLeft/></span>{title} <span><HorizontTowLine/></span></h2>
            <h3 className="heading text-center font-semibold">{subTitle}</h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8">
            <div className="flex flex-col w-full">
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`w-full md:max-w-[350px] max-w-[250px] relative aspect-[4/3] border-[5px] border-prime-red ${index !== 0 ? "ml-auto -mt-[5rem]" : " mr-auto"}`}
                >
                  <Image src={item} alt={title} fill />
                </div>
              ))}
            </div>
            <div className="">
              {faqs.slice(0, 5).map((item, index) => (
                <div key={index}>
                  <Accordion
                    answer={item.answer}
                    question={item.question}
                    typeList
                    icon={<AiOutlinePlus />}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            {faqs.slice(5, faqs.length).map((item, index) => (
              <div key={index}>
                <Accordion
                  answer={item.answer}
                  question={item.question}
                  typeList
                  index={index}
                  icon={<AiOutlinePlus />}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionWithContainer>
    </div>
  );
};

export default FaqSection;
