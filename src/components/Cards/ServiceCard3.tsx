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
    <div className="w-full bg-white flex flex-col items-center justify-center gap-4 py-6 px-4">
      <div className="relative aspect-square w-full">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <Tag className="heading2 text-center font-semibold text-black px-10">
        {title}
      </Tag>
      <ul className="flex items-center gap-2 mt-4">
        {links.map((link, index) => (
          <li key={index} className="flex items-center gap-1">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard3;
