"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
const Data = [
  {
    icon: "",
    label: "Book a Consultation with RCIC",
    href: "https://calendly.com/tncconsult",
  },
  {
    icon: "",
    label: "Book an Urgent Consultation",
    href: "https://calendly.com/truenorthconsultation/urgent24hours?month=2025-04",
  },
  {
    icon: "",
    label: "Request a Call - Inside Canada",
    href: "/request-a-call-inside-canadaa",
  },
  {
    icon: "",
    label: "Request a Call - Outside Canada",
    href: "/request-a-call-outside-canada",
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
          {openDrawer ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiFillMessage size={30} />
          )}
        </div>
      </div>
    </div>
  );
};
