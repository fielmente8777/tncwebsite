"use client";
import { DrawerConsulationIcon, DrawerNoteBook } from "@/data/icons";
import Link from "next/link";
import { useState } from "react";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
const Data = [
  {
    icon: <DrawerConsulationIcon />,
    label: "Book a Consultation with RCIC",
    href: "https://calendly.com/tncconsult",
  },
  {
    icon: <DrawerConsulationIcon />,
    label: "Book an Urgent Consultation",
    href: "https://calendly.com/truenorthconsultation/urgent24hours?month=2025-04",
  },
  {
    icon: <DrawerNoteBook />,
    label: "Request a Call - Inside Canada",
    href: "/request-a-call-inside-canada",
  },
  {
    icon: <DrawerNoteBook />,
    label: "Request a Call - Outside Canada",
    href: "/request-a-call-outside-canada",
  },
];
export const ChatDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="flex flex-col justify-end items-end">
      <div
        className={`flex flex-col items-end space-y-3 mr-4 transition-all duration-100 origin-left ${openDrawer ? "scale-y-100 w-full max-h-[400px] opacity-100" : "scale-0 pointer-events-none w-0 justify-end max-h-0 opacity-0"}`}
      >
        {Data?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-full pl-3 py-1 font-medium shadow-xl w-fit"
          >
            <Link
              href={item?.href}
              className="flex items-center justify-between"
              target="_blank"
            >
              {item?.label}
              <span>{item?.icon}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <div
          className="w-16 h-16 bg-prime-red shadow-xl rounded-3xl flex justify-center items-center cursor-pointer text-white"
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
