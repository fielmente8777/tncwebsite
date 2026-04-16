"use client";
import { FooterLinks } from "@/data/links";
import { Container, SectionWithContainer } from "../sectionComponents";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/data/icons";
import { useState } from "react";
import NewsLetterPopUP from "../popup/NewsLetterPopUP";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openNewsLetter, setOpenNewsLetter] = useState(false);
  return (
    <footer className="max_screen md:relative md:pt-[13rem]">
      <div className="md:absolute -top-8 left-0 w-full z-10">
        <Container className="py-6">
          <p className="">Disclaimer - All official TNC Immigration communications will come from an email ending in <b className="text-blue-600">@tncimmigration.com</b>. Please do not make any payments to anyone claiming to represent TNC Immigration unless verified through this domain.</p>
        </Container>
        <Container className="text-white relative after:content-[''] after:absolute after:bg-[url('/maps.webp')] after:w-full after:h-full after:inset-0 after:bg-cover after:bg-no-repeat after:bg-center after:z-[-1] after:opacity-40 before:content-[''] before:absolute before:inset-0 before:bg-[#29313C]  before:z-[-1] before:w-full before:h-full">


          <div className="md:px-20 px-4 md:py-14 py-6 w-full grid md:grid-cols-5 grid-cols-1 items-center gap-4">
            <div className="w-full flex flex-col gap-4 md:col-span-4 col-span-2 ">
              <h2 className="md:text-2xl text-lg">Are you looking for</h2>
              <h3 className="md:text-[2.0625rem]/[1.125rem] text-2xl font-semibold">
                Licensed Canadian Immigration Consultant?
              </h3>
              <p>
                Need A Consultation? Call us:{" "}
                <Link href={"tel:+12368185558"}>+1 (236) 818 5558</Link> or
                Email us:{" "}
                <Link href={"mailto:info@tncimmigration.com"} className="hover:text-black duration-300 ease-in-out transition-all">
                  info@tncimmigration.com
                </Link>
              </p>
            </div>
            <div className="w-full flex gap-4 md:col-span-1">
              <Link
                href="/contact-us"
                className="w-max border border-white px-4 py-2 capitalize font-medium rounded-[1px] hover:bg-white hover:text-black duration-300 transition-all ease-in-out flex items-center gap-2"
              >
                contact us{" "}
                <span className="">
                  <ArrowRightIcon className="hover:fill-black" />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <SectionWithContainer sectionClassName="bg-black text-white md:!pt-24">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-20 w-full">
          <div className="w-full flex justify-center flex-col items-center gap-6">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={250} height={64} />
            </Link>
          </div>
          {FooterLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-6">
              {link.title && (
                <h2
                  className={` text-lg capitalize text-primary font-semibold`}
                >
                  {link.title}
                </h2>
              )}
              <ul className="flex flex-col gap-2">
                {link.links?.map((sublink, index) => (
                  <li key={index} className="flex flex-col gap-2">
                    {sublink.title && (
                      <h3 className="font-semibold text-primary">
                        {sublink.title}
                      </h3>
                    )}
                    {sublink.name && (
                      <Link
                        href={sublink.href ? sublink.href : ""}
                        className={`${sublink?.capitalize && "capitalize"} flex items-center gap-2`}
                      >
                        {sublink.icon && (
                          <span className="w-4 text-prime-red">
                            {sublink.icon}{" "}
                          </span>
                        )}
                        {sublink.name}
                      </Link>
                    )}
                    {sublink.links && (
                      <div className="flex items-center gap-2">
                        {sublink.links?.map((slink, index) => (
                          <Link
                            href={slink.href ? slink.href : ""}
                            target="_blank"
                            key={index}
                            className="flex items-center justify-center md:w-10 w-8 hover:text-primary aspect-square"
                          >
                            {slink.icon}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-prime-red text-white !py-4">
        <div className="flex max-lg:flex-col justify-center items-center gap-2">
          <p className="text-center font-semibold">
            © {currentYear} All Right Reserved TNC Immigration.
          </p>
          <p className="text-center font-semibold">
            {" "}
            Marketing Partner:{" "}
            <Link href="https://oneshotmarketing.ca/" className="font-bold">
              oneshotmarketing
            </Link>
          </p>
        </div>
      </SectionWithContainer>

      <NewsLetterPopUP
        openNewsLetter={openNewsLetter}
        setOpenNewsLetter={setOpenNewsLetter}
      />
    </footer>
  );
};

export default Footer;
