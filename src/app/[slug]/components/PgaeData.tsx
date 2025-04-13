import { SectionWithContainer } from "@/components";
import Form2 from "@/components/Form2";
import { FillCallIcon, FillMailIcon } from "@/data/icons";
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
    btnLink?: boolean;
    links?: { name: string; link: string }[];
    title?: string;
    address?: string;
  };
}

const PgaeData: React.FC<PageProps> = ({
  pageData: {
    pageData1,
    pageData2,
    btnLink = true,
    form = true,
    links,
    title,
    address,
  },
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <div
          className="flex flex-col gap-3 w-full data_pass"
          dangerouslySetInnerHTML={{ __html: pageData1 }}
        ></div>
        {/* form */}
        <div className="flex flex-col gap-8 w-full">
          {form && <Form2 />}
          {title && <h2 className="font-bold text-2xl">{title}</h2>}
          {btnLink && (
            <div className="max-w-[340px] mx-auto mt-4">
              <Link
                href="https://calendly.com/tncbooking/consultation60"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-prime-red w-full mx-auto text-sm text-white px-5 py-3 font-normal capitalize hover:bg-black duration-500 border shadow-lg rounded-md"
              >
                {"CLICK HERE BOOK CONSULATION TODAY"}
              </Link>
            </div>
          )}
          {address && (
            <p className="text-lg border-l-2 border-prime-red pl-4">
              {address}
            </p>
          )}
          {links && (
            <div className="flex max-lg:flex-col gap-3 mt-4 p-2 box-shadow2 items-center">
              <Link
                href={links[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className={` w-fit flex items-center gap-2 text-sm  px-5 py-3 font-normal capitalize  duration-500  rounded-md`}
              >
                <span className="bg-black text-white rounded-full w-12 aspect-square flex items-center justify-center">
                  <FillCallIcon />
                </span>
                <span className="flex flex-col gap-2">
                  Call us for information{" "}
                  <span className="text-lg font-semibold">{links[0].name}</span>
                </span>
              </Link>
              <Link
                href={links[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-prime-red hover:bg-black w-fit h-14 flex items-center text-white gap-2 mx-auto text-md font-semibold  px-5 py-2 capitalize  duration-500 border rounded-full`}
              >
                <span className=" text-white rounded-full flex items-center justify-center">
                  <FillMailIcon />
                </span>
                {links[1].name}
              </Link>
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
