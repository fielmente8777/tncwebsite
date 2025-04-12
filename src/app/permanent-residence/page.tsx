import { CommanBanner } from "@/components";
import { permanentResidence } from "@/data/pagedata";
import Application from "./component/Application";

const page = () => {
  return (
    <main>
      <CommanBanner {...permanentResidence.bannerData} />
      <Application {...permanentResidence.application} />
    </main>
  );
};

export default page;
