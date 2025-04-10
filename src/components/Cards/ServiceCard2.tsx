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
}) => {
  // const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div
      className={`w-full bg-white p-3 ${className ? className : "rounded-xl"}`}
    >
      <div
        className={`relative max-w-full mx-auto ${image?.className ? image?.className : "aspect-[5/3]"}`}
      >
        <Image
          src={image?.src}
          alt={image?.alt}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <div>
        <h2 className="text-center text-xl font-bold">{title}</h2>

        <div className="flex items-center justify-center gap-2 mt-2">
          {buttons?.map((btn, index) => {
            if (btn.href) {
              return (
                <LinkButton href={btn?.href} key={index}>
                  <button
                    className={`rounded-full text-white px-4 py-2 text-sm ${btn?.className ? btn?.className : "bg-prime-light-blue"}`}
                  >
                    {btn?.label}
                  </button>
                </LinkButton>
              );
            } else {
              return (
                <OnlyButton key={index}>
                  <button>{btn?.label}</button>
                </OnlyButton>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
