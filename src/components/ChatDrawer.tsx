"use client";
import Link from "next/link";
import React, { useState } from "react";

const Data = [
  {
    icon: "❤️",
    label: "Book a Consulation With RCIC",
    href: "https://calendly.com/tncconsult",
  },
  {
    icon: "🤹‍♀️",
    label: "Book a Consulation With RCIC",
    href: "https://calendly.com/tncconsult",
  },
  {
    icon: "🥳",
    label: "Book a Consulation With RCIC",
    href: "https://calendly.com/tncconsult",
  },
  {
    icon: "🅿️",
    label: "Book a Consulation With RCIC",
    href: "https://calendly.com/tncconsult",
  },
];
export const ChatDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="">
      <div
        className={`space-y-3 mr-4 transition-all duration-100 origin-bottom ${openDrawer ? "scale-y-100" : "scale-0"}`}
      >
        {Data?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-full px-3 py-3 font-medium shadow-xl"
          >
            <Link href={item?.href} className="flex gap-2" target="_blank">
              {item?.label}

              <span>{item?.icon}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <div
          className="w-16 h-16 bg-red-600 rounded-3xl flex justify-center items-center cursor-pointer text-white"
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          {openDrawer ? <span className="font-bold">X</span> : "open"}
        </div>
      </div>
    </div>
  );
};
