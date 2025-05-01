import { LinkButton, OnlyButton, SectionWithContainer } from "@/components";
import {
  HorizontTowLine,
  HorizontTwoLineLeft,
  InstagramIcon,
  PlayBtnIcon,
  StackedSquaresIcon,
} from "@/data/icons";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

interface OurSocialMediaPrps {
  title: string;
  content: {
    image: {
      src: string;
    };
    link: {
      href: string;
    };
    isIcon?: boolean;
  }[];
  buttons: {
    label: string;
    href?: string;
    icon?: JSX.Element;
  }[];
}

const OurSocailMedia: React.FC<OurSocialMediaPrps> = ({
  title,
  content,
  buttons,
}) => {
  return (
    <SectionWithContainer>
      <div>
        <div className="flex items-center justify-center gap-4">
          <HorizontTwoLineLeft />
          <h2 className="text-3xl font-bold text-second-red     ">{title}</h2>
          <HorizontTowLine />
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-2">
          <InstagramIcon />
          <h3 className="font-bold text-3xl">tncimmigration</h3>
        </div>

        <div className="grid md:grid-cols-6 grid-cols-2 gap-5 mt-6">
          {content?.map((item, index) => (
            <div className="relative max-w-48 aspect-[1/1]" key={index}>
              <Image
                src={item?.image.src}
                className="object-cover"
                fill
                alt="Social-Image"
              />
              {item?.isIcon && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span>
                    <PlayBtnIcon />
                  </span>
                </div>
              )}
              <Link
                href={item?.link?.href}
                target="_blank"
                className="w-full h-full absolute opacity-0 hover:bg-black/40 hover:opacity-100 duration-700 transition-all flex items-center justify-center"
              >
                <InstaIcon />
              </Link>

              <div className="absolute right-2 top-2">
                <StackedSquaresIcon className="w-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-2">
          {buttons.map((btn, index) => {
            if (btn.href) {
              return (
                <LinkButton href={btn.href} key={index} newTab={true}>
                  <button className="rounded-md bg-second-blue text-white px-3 py-2 text-xs font-medium hover:bg-blue-400 duration-200 flex gap-2">
                    {btn?.icon} {btn.label}
                  </button>
                </LinkButton>
              );
            } else {
              return (
                <OnlyButton key={index} className="bg-secondary text-white rounded-md text-xs px-4 py-2 font-medium hover:bg-secondary/70 duration-200">
                  {btn.label}
                </OnlyButton>
              );
            }
          })}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurSocailMedia;

export const InstaIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      {...props}
    >
      <path
        d="M7.101 4.45a3.362 3.362 0 00-3.367 3.367A3.362 3.362 0 007.1 11.183a3.362 3.362 0 003.368-3.366A3.362 3.362 0 007.1 4.45zm0 5.555a2.193 2.193 0 01-2.189-2.188c0-1.207.982-2.189 2.19-2.189 1.207 0 2.189.982 2.189 2.189a2.193 2.193 0 01-2.19 2.188zm4.291-5.692a.783.783 0 01-.785.785.785.785 0 11.785-.785zm2.23.797c-.05-1.052-.29-1.984-1.06-2.751-.768-.768-1.7-1.008-2.753-1.06-1.084-.062-4.334-.062-5.419 0-1.049.049-1.98.29-2.752 1.057-.77.767-1.008 1.699-1.06 2.75-.062 1.085-.062 4.334 0 5.418.05 1.051.29 1.983 1.06 2.75.771.768 1.7 1.009 2.752 1.061 1.085.062 4.335.062 5.42 0 1.052-.05 1.984-.29 2.752-1.06.767-.768 1.008-1.7 1.06-2.751.062-1.084.062-4.33 0-5.414zm-1.4 6.577a2.216 2.216 0 01-1.249 1.248c-.865.343-2.916.263-3.872.263-.955 0-3.01.077-3.871-.263a2.216 2.216 0 01-1.249-1.248c-.343-.864-.264-2.915-.264-3.87 0-.955-.076-3.01.264-3.87A2.216 2.216 0 013.23 2.698c.864-.342 2.916-.263 3.871-.263.956 0 3.01-.076 3.872.263.574.229 1.017.671 1.248 1.249.343.864.264 2.915.264 3.87 0 .955.08 3.008-.263 3.87z"
        fill="#fff"
      />
    </svg>
  );
};
