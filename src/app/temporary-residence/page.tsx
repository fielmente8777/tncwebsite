import { CommanBanner } from "@/components";
import { temporaryResidence } from "@/data/pagedata";
import Application from "./component/Application";

const page = () => {
  return (
    <main>
      <CommanBanner {...temporaryResidence.bannerData} />
      <Application {...temporaryResidence.application} />
    </main>
  );
};

export default page;
