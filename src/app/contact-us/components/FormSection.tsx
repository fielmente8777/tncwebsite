import { SectionWithContainer } from "@/components";
import Form from "@/components/Form";
import LazyLoadedMap from "@/components/maps/LazyLoadedMap";
import { imagesLink } from "@/data/links";
import Image from "next/image";
import React from "react";

const FormSection = () => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="relative lg:aspect-[4/5]">
          <Image
            src= {imagesLink+"ad15.webp"}
            alt="avt"
            fill
            className="absolute object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <hr className="w-[50px] border-b-4 border-orange-700" />
          <h1 className="text-4xl mt-5 font-bold">
            Make a free consultation with our expert team to solve your prolems.
          </h1>

          <div className="mt-10">
            <Form />
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-20 md:aspect-[4/1.5] aspect-square w-full">
        <LazyLoadedMap src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42751828.19310749!2d-122.780239!3d49.155689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d1688ebdcbdd%3A0x66e0142ce7faea66!2sTNC%20True%20North%20Consultancy%20LTD!5e0!3m2!1sen!2sus!4v1744478973412!5m2!1sen!2sus' />
      </div>
    </SectionWithContainer>
  );
};

export default FormSection;