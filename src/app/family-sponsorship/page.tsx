import { CommanBanner } from "@/components";
import { familySponsorship } from "@/data/pagedata";
import Application from "./component/Application";

const page = () => {
  return (
    <main>
      <CommanBanner {...familySponsorship.bannerData} />
      <Application {...familySponsorship.application} />
    </main>
  );
};

export default page;
