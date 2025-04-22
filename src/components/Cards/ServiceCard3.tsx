import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
export interface ServiceCardProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  icon: string;
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}
const ServiceCard3: React.FC<ServiceCardProps> = ({
  icon,
  title,
  level,
  links,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div className="w-full bg-white flex flex-col items-center box-shadow2 justify-center gap-4 py-6 px-2 border-t-[6px] border-l-[6px] border-prime-red hover:border-t-0 hover:border-l-0 hover:border-b-[6px] hover:border-r-[6px] hover:border-prime-light-blue transition-all ease-in-out duration-300">
      <div className="relative aspect-[4/1] md:aspect-[4/1] w-full">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <Tag className="heading4 w-full text-center font-semibold text-black px-10">
        {title}
      </Tag>
      <ul className="flex flex-col gap-2 mt-4">
        {links.map((link, i) => (
          <li key={i} className="flex items-center gap-1">
            <Link href={link.href} className={` text-sm  text-nowrap ${i === 0 ? "bg-prime-red hover:bg-prime-light-blue" : "bg-prime-light-blue hover:bg-prime-red"} px-4 py-2 text-white`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard3;
