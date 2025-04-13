import { SectionWithContainer } from "@/components";
import Form2 from "@/components/Form2";
import Link from "next/link";
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
    form?: boolean;
    btnLink?:boolean
    links?: { name: string; link: string }[];
    title?: string;
    address?: string;
  };
}

const PgaeData: React.FC<PageProps> = ({ pageData: { pageData1, pageData2, btnLink=true, form=true,links,title,address } }) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div
          className="flex flex-col gap-3 w-full data_pass"
          dangerouslySetInnerHTML={{ __html: pageData1 }}
        ></div>
        {/* form */}
        <div className="flex flex-col gap-8">
          {form && <Form2 />}
          {title && <h2 className="font-bold text-2xl">{title}</h2>}
          {btnLink && <div className="max-w-[340px] mx-auto mt-4">
            <Link
              href="https://calendly.com/tncbooking/consultation60"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-prime-red w-full mx-auto text-sm text-white px-5 py-3 font-normal capitalize hover:bg-black duration-500 border shadow-lg rounded-md"
            >
              {"CLICK HERE BOOK CONSULATION TODAY"}
            </Link>
          </div>}
            {address && <p className="text-lg border-l-2 border-prime-red pl-4">{address}</p>}
          {links && (
            <div className="flex gap-3 mt-4 p-2 box-shadow2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${index === 0 ? "" : "bg-second-red text-white hover:bg-black"} w-fit mx-auto text-sm  px-5 py-3 font-normal capitalize  duration-500 border shadow-lg rounded-md`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {pageData2 && (
        <div
          className="flex flex-col gap-3 w-full data_pass"
          dangerouslySetInnerHTML={{ __html: pageData2 }}
        ></div>
      )}
    </SectionWithContainer>
  );
};

export default PgaeData;
