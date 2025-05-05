import { SectionWithContainer } from "@/components";
import { FillCallIcon, FillMailIcon } from "@/data/icons";
import Link from "next/link";
import React, { JSX } from "react";
interface LinkItem {
  name: string;
  href: string;
}

export interface WelcomeItem {
  src: string;
  title?: string;
  desc: string;
  aspect: string;
  links?: LinkItem[];
}

export interface ContentBlock {
  type: string;
  level?: number;
  content?: string;
  src?: string;
  alt?: string;
  width?: string | null;
  height?: string | null;
  className?: string | string[] | null;
  items?: string[];
  ordered?: boolean;
}

export interface PageProps {
  pageData: {
    slug: string;
    banner?: { title: string; src: string };
    formInfo?: { title: string; desc: string };
    forData?: {
      title: string;
      link: LinkItem;
      address: string;
    };
    pageData1?: ContentBlock[];
    pageData2?: ContentBlock[];
    welcom?: WelcomeItem[];
    mapSrc?: string;
    form?: boolean;
    btnLink?: boolean;
    links?: LinkItem[];
    title?: string;
    address?: string;
  };
}

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "heading":
      const Heading = `h${block.level}` as keyof JSX.IntrinsicElements;
      return <Heading key={index} className="font-bold text-xl">{block.content}</Heading>;
    case "paragraph":
      return <p key={index} className="text-base">{block.content}</p>;
    // case "image":
    //   return (
    //     <img
    //       key={index}
    //       src={block.src}
    //       alt={block.alt || ""}
    //       width={block.width ?? undefined}
    //       height={block.height ?? undefined}
    //       className={(block.className || "").toString()}
    //     />

    //   );
    case "list":
      const List = block.ordered ? "ol" : "ul";
      return (
        <List key={index} className="pl-5 list-disc space-y-1">
          {block.items?.map((item, i) => <li key={i}>{item}</li>)}
        </List>
      );
    default:
      return null;
  }
};

const PgaeData: React.FC<PageProps> = ({
  pageData: {
    pageData1,
    pageData2,
    btnLink = true,
    links,
    title,
    address,
    forData,
  },
}) => {
  return (
    <SectionWithContainer sectionClassName="!pt-13 !pb-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
        {pageData1 && <div className="flex flex-col gap-3 w-full data_pass">
          {pageData1.map(renderBlock)}
        </div>}
        <div className="flex flex-col gap-8 w-full">
          {forData && (
            <div className="flex flex-col w-full data_pass -mb-6">
              <h2 className="font-bold text-2xl">{forData.title}</h2>
            </div>
          )}
          {title && <h2 className="font-bold text-2xl">{title}</h2>}
          {address && (
            <p className="text-lg border-l-2 border-prime-red pl-4">{address}</p>
          )}
          {pageData1
            ?.filter((block) => block.type === "image")
            .map((imgBlock: ContentBlock, i) => (
              <img
                key={i}
                src={imgBlock.src}
                alt={imgBlock.alt || ""}
                width={imgBlock.width ?? undefined}
                height={imgBlock.height ?? undefined}
                className={(imgBlock.className || "").toString()}
              />
            ))}
        </div>
      </div>

      {pageData2 && (
        <div className="flex flex-col gap-3 w-full data_pass">
          {pageData2.map(renderBlock)}
        </div>
      )}
      {btnLink && (
        <div className="max-w-[340px] mx-auto mt-8">
          <Link
            href="https://calendly.com/tncbooking/consultation60"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-prime-red w-full mx-auto text-sm text-white px-5 py-3 font-normal capitalize hover:bg-black duration-500 border shadow-lg rounded-md"
          >
            CLICK HERE BOOK CONSULTATION TODAY
          </Link>
        </div>
      )}
      {links && (
        <div className="flex max-lg:flex-col max-w-[500px] mx-auto gap-3 mt-8 p-2 box-shadow2 items-center">
          <Link
            href={links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-2 text-sm px-5 py-3 font-normal capitalize duration-500 rounded-md"
          >
            <span className="bg-black text-white rounded-full w-12 aspect-square flex items-center justify-center">
              <FillCallIcon />
            </span>
            <span className="flex flex-col gap-2">
              Call us for information
              <span className="text-lg font-semibold">{links[0].name}</span>
            </span>
          </Link>
          <Link
            href={links[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-prime-red hover:bg-black w-fit h-14 flex items-center text-white gap-2 mx-auto text-md font-semibold md:px-8 px-5 py-2 capitalize duration-500 border rounded-full"
          >
            <span className="text-white rounded-full flex items-center justify-center">
              <FillMailIcon />
            </span>
            {links[1].name}
          </Link>
        </div>
      )}
    </SectionWithContainer>
  );
};

export default PgaeData;
