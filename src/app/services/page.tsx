import { CommanBanner } from "@/components";
import { servicePageData } from "@/data/pagedata";
import CommonSection from "./Components/CommonSection";

const page = () => {
  return (
    <main>
      <CommanBanner {...servicePageData.banner} />
      {servicePageData.services.map((data, index) => (
        <CommonSection {...data} key={index} />
      ))}
    </main>
  );
};

export default page;
