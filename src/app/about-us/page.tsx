import { CommanBanner } from "@/components";
import { AboutPageData } from "@/data/pagedata";

const page = () => {
    return (
        <main>
            <CommanBanner {...AboutPageData.bannerData} />
        </main>
    );
}

export default page;