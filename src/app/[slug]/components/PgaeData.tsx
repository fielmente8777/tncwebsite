import { SectionWithContainer } from "@/components";
import Form2 from "@/components/Form2";
import React from "react";

interface PageProps {
  pageData: {
    slug: string;
    banner: {
      title: string;
      src: string;
    };
    htm: string;
    pageData1: string;
    pageData2?: string;
    welcom?: undefined;
    mapSrc?: undefined;
  };
}

const PgaeData: React.FC<PageProps> = ({ pageData }) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div
          className="flex flex-col gap-3 w-full data_pass"
          dangerouslySetInnerHTML={{ __html: pageData.pageData1 }}
        ></div>
        {/* form */}
        <div className="">
          <Form2 />
          <div className="max-w-[340px] mx-auto mt-4">
            <button
              type="submit"
              className="bg-prime-red w-full mx-auto text-sm text-white px-5 py-3 font-normal capitalize hover:bg-black duration-500 border shadow-lg rounded-md"
            >
              {"CLICK HERE BOOK CONSULATION TODAY"}
            </button>
          </div>
        </div>
      </div>
      {pageData.pageData2 && (
        <div
          className="flex flex-col gap-3 w-full data_pass"
          dangerouslySetInnerHTML={{ __html: pageData.pageData2 }}
        ></div>
      )}
    </SectionWithContainer>
  );
};

export default PgaeData;
