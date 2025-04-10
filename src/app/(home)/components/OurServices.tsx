import { HorizontTwoLineLeft } from "@/data/icons";
import React from "react";

const OurServices = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/tnc/bg-section-02.webp")`,
      }}
      className="h-[1068.21px]"
    >
      <div>
        <div className="py-10">
          <div className="flex justify-center items-center gap-2">
            <HorizontTwoLineLeft />
            <h2 className="text-second-red text-3xl font-bold">Services</h2>
            <HorizontTwoLineLeft />
          </div>

          <h3 className="text-white font-bold text-center text-4xl mt-4">
            Our Services
          </h3>
        </div>

        <div className="grid grid-cols-3"></div> 
      </div>
    </div>
  );
};

export default OurServices;
