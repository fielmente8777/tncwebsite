import { SectionWithContainer } from "@/components";
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
    welcom?: undefined;
    mapSrc?: undefined;
}
}

const PgaeData:React.FC<PageProps> = ({ pageData }) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="" dangerouslySetInnerHTML={{ __html: "" }}></div>
        <div className=""></div>
      </div>
    </SectionWithContainer>
  );
};

export default PgaeData;
