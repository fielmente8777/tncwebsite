import Image from "next/image";
import { LinkButton, OnlyButton } from "../buttons";
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  // level?: 1 | 2 | 3 | 4 | 5 | 6;
  aspectRatio?: string;
  buttons: {
    label: string;
    href: string;
    className?: string;
  }[];
  className?: string;
}
const ServiceCard2: React.FC<ServiceCardProps> = ({
  title,
  image,
  buttons,
  className,
  aspectRatio = "",
}) => {
  // const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div
      className={`w-full flex flex-col gap-2 bg-white p-3 ${className ? className : "rounded-xl"}`}
    >
      <div
        className={`relative w-full  mx-auto ${aspectRatio ? aspectRatio : "aspect-[5/3]"}`}
      >
        <Image
          src={image?.src}
          alt={image?.alt || title.replace(" ", "-")}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <div>
        <h3 className="text-center text-xl font-bold outfit">{title}</h3>

        <div className="flex items-center justify-center gap-2 mt-2">
          {buttons?.map((btn, index) => {
            if (btn.href) {
              return (
                <LinkButton
                  href={btn?.href}
                  key={index}
                  className={`rounded-full text-white px-4 py-2 text-sm font-medium ${btn?.className ? `${btn?.className} hover:bg-prime-light-blue` : "bg-prime-light-blue hover:bg-prime-red"}`}
                >
                  {btn?.label}
                </LinkButton>
              );
            } else {
              return <OnlyButton key={index}>{btn?.label}</OnlyButton>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
