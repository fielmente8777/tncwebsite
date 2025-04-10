import Image from "next/image";
import React from "react";

interface CommanBannerProps {
  title: string;
  src: string;
}

const CommanBanner: React.FC<CommanBannerProps> = ({ title, src }) => {
  return (
    <section className="max-scree">
      <div className="relative md:aspect-[4/.8] aspect-[4/3.5] w-full">
        <Image src={src} alt={title} className="object-cover object-top" fill />
        <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white capitalize">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommanBanner;
