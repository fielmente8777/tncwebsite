import { CommanBanner, SectionWithContainer } from "@/components";
import Form3 from "@/components/Form3";

const page = () => {
  return (
    <main>
      <CommanBanner title="Request A Call - Outside Canada" src="/bgim.PNG" />

      <SectionWithContainer>
        <div className="max-w-96 mx-auto">
          <Form3 />
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
