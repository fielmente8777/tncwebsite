import { Container, SectionWithContainer } from "@/components";
import CommanBanner from "@/components/CommanBanner";
import { FacebookIcon } from "@/data/icons";
import FormSection from "./components/FormSection";

const page = () => {
    return (
        <div>
            <CommanBanner title="Contact Us" />
            <SectionWithContainer >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="flex gap-4">
                        <div className="w-[110px] h-20 bg-[#c1282a] text-white rounded-lg flex items-center justify-center">
                            <span><FacebookIcon /></span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold">Head office address:</h1>
                            <p className="font-medium">Suite 303 – 15957 84 Avenue Surrey BC, V4N 0W7 Canada</p>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="w-[80px] h-20 bg-[#c1282a] border text-white rounded-lg flex items-center justify-center">
                            <span><FacebookIcon /></span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold">Call for help:</h1>
                            <p className="font-medium">+1 236 818 5558</p>
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="w-[80px] h-20 bg-[#c1282a] text-white rounded-lg flex items-center justify-center">
                            <span><FacebookIcon /></span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold">Mail for information:</h1>
                            <p className="font-medium">info@tncimmigration.com</p>
                        </div>

                    </div>
                </div>



            </SectionWithContainer>

            <FormSection />
        </div>
    );
}

export default page;

