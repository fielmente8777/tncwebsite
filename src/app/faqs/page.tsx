import { CommanBanner } from "@/components";
import { FaqPageData } from "@/data/pagedata";
import FaqSection from "./components/FaqSection";

const page = () => {
    return (
        <main>
            <CommanBanner {...FaqPageData.bannerData}/>
            <FaqSection {...FaqPageData.faqSection} />
        </main>
    );
}

export default page;