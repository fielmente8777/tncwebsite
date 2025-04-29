import { ArrowUpIcon } from "@/data/icons";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  href?: string;
  src: string;
  name: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  name,
  level,
  href,
  src,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className="w-full bg-white rounded-sm group box-shadow2 duration-300 transition-all ease-in-out relative md:aspect-[4/4.5] aspect-[4/3]">
      <Image src={src} alt={title} fill className="object-cover rounded-sm" />
      <div className="flex flex-col items-center justify-center gap-4 py-6 px-4 absolute inset-0 bg-white group-hover:bg-black/50 w-full h-full">
        <span className="p-5 aspect-square flex items-center justify-center group-hover:bg-white group-hover:text-primary bg-primary rounded-full text-white duration-500 transition-all ease-in-out">
          {icon ? icon : ""}
        </span>
        <Tag className="heading2 text-center font-semibold text-prime-dark-blue group-hover:text-white px-4">
          {title}
        </Tag>
        <Link
          href={href ? href : ""}
          className="heading4 capitalize rounded-full h-6 ps-2 text-center text-prime-dark-blue flex items-center w-fit gap-2  group-hover:text-white group-hover:bg-primary duration-300 transition-all ease-in-out
        justify-end font-semibold !text-sm
        relative after:absolute right-1 group-hover:after:w-full after:w-0 after:h-full after:z-[-1] after:bg-[#C1282A] after:bottom-0 after:rounded-full after:duration-500 after:transition-all after:ease-in-out"
        >
          {name}{" "}
          <span className="-mr-1">
            <ArrowUpIcon className="rotate-[30deg] w-8 h-8" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;