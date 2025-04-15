"use client";
import Image from "next/image";
import { Container } from "../sectionComponents";
import Link from "next/link";
import { NavbarUpperLinks, NaveLinks } from "@/data/links";
import { DropDownIcon, OutlinePhone } from "@/data/icons";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const pathName = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  return (
    <header className="max_screen bg-black">
      {/* top header */}
      <div className="bg-[#c1282a]">
        <Container>
          <div className="flex items-center max-sm:flex-col gap-4 justify-between py-2 md:py-4">
            <div className="flex max-sm:flex-col  items-center gap-2 md:gap-5">
              {NavbarUpperLinks.slice(0, 2).map((link, index) => {
                return (
                  <Link
                    href={link.href}
                    key={index}
                    className="text-white flex items-center gap-2 md:text-base text-sm font-medium"
                  >
                    <span className="">
                      {" "}
                      <OutlinePhone
                        className="w-6 h-6 fill-white"
                        fill="white"
                      />
                    </span>{" "}
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center md:gap-5 gap-2">
              {NavbarUpperLinks.slice(2, NavbarUpperLinks.length).map(
                (link, index) => {
                  return (
                    <Link
                      href={link.href}
                      key={index}
                      className="capitalize md:text-base text-sm bg-white flex items-center rounded-full md:px-4 px-3 py-2 text-black font-medium hover:bg-blue-500 hover:text-white duration-300 transition-all ease-in-out"
                    >
                      {link.name}
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </Container>
      </div>
      {/* bottom header */}
      <Container>
        <nav className="flex items-center max-lg:justify-between justify-center gap-10 py-3">
          <div className="">
            <Link href={"/"} className="flex items-center">
              <Image
                src="/logo.png"
                alt="one shot logo"
                width={123.2}
                height={64}
                priority={true}
                quality={100}
              />
            </Link>
          </div>
          <div className="lg:hidden block">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`p-2 bg-white rounded-sm shadow-md`}
            >
              {!mobileMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>
          </div>
          <ul className="lg:flex hidden item-center gap-10">
            {NaveLinks?.map((link, index) => {
              // const id = index + 1;
              return (
                <li key={index} className="relative nav">
                  <Link
                    href={link.href ? link.href : "#"}
                    className={`relative hover:text-primary text-nowrap py-2 capitalize flex items-center gap-1  font-semibold description1 ${pathName === link.href ? "text-primary" : "text-white"}`}
                  >
                    {link.name}
                    {link.subLinks && (
                      <span className="group-hover:rotate-180 text-white duration-300 transition-all ease-in-out">
                        <DropDownIcon fill="white" />
                      </span>
                    )}
                  </Link>
                  {link.subLinks && (
                    <span className="nav-1">
                      {link.subLinks.map((subLink, index) => {
                        return (
                          <span className="relative group nav-2" key={index}>
                            <Link
                              href={subLink.href ? subLink.href : "#"}
                              className={`w-full text-nowrap flex items-center gap-1 group capitalize font-semibold hover:bg-[#29313C] hover:text-white ${pathName === subLink.href ? "bg-[#29313C] text-white" : ""}`}
                            >
                              {subLink.name}
                              {subLink.subLinks && (
                                <span className="group-hover:rotate-90 -rotate-90 duration-300 transition-all ease-in-out">
                                  <DropDownIcon />
                                </span>
                              )}
                            </Link>
                            {subLink.subLinks && (
                              <span className="nav-link">
                                {subLink.subLinks?.map(
                                  (nestedSubLink, nestedIndex) => {
                                    return (
                                      <span className="" key={nestedIndex}>
                                        <Link
                                          href={
                                            nestedSubLink.href
                                              ? nestedSubLink.href
                                              : "#"
                                          }
                                          className={`w-full text-nowrap py-2 px-4 flex items-center font-semibold description1 gap-1 group capitalize hover:bg-[#29313C] hover:text-white ${pathName === nestedSubLink.href ? "bg-[#29313C] text-white" : ""}`}
                                        >
                                          {nestedSubLink.name}
                                        </Link>
                                      </span>
                                    );
                                  }
                                )}
                              </span>
                            )}
                          </span>
                        );
                      })}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
      <MobileNav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </header>
  );
};

export default Navbar;
