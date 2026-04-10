import { CommanBanner, LinkButton, SectionWithContainer } from "@/components";
import Image from "next/image";
import { pageData } from "./pageData";
export default function BookAppointment() {
  return (
    <main>
      <CommanBanner
        title="Book your appointment with Canadian immigration experts."
        src="/tnc/bnr2.webp"
        link={{
          name: "book now",
          href: "#book-now",
        }}
      />
      <SectionWithContainer sectionId="book-now">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
          {pageData.bookAppointment.map((data, index) => (
            <div
              key={index}
              className="w-full relative aspect-[4/4.8] border-2 bg-black border-black rounded-md overflow-hidden"
            >
              <Image src={data.src} alt="img" fill className="object-cover" />
              <div
                className={`absolute ${index === 2 ? "md:bottom-[1.19rem] bottom-[0.6rem] right-[0.5px]" : "md:bottom-7 bottom-2 md:right-[4.5px] right-[2px]"}  z-10 md:space-y-3 space-y-2`}
              >
                {data.links.map((link, subIndex) => (
                  <LinkButton
                    href={link.href}
                    key={subIndex}
                    newTab
                    className={`bg-prime-red text-white rounded-sm ${index === 2 ? "nd:px-[1.9rem] px-2 py-3 md:py-[1.43rem] w-full uppercase" : "md:pl-12 pl-5 md:pr-2 pr-3 md:py-3 py-2 w-fit capitalize"}`}
                  > 
                    {link.label}
                  </LinkButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}
