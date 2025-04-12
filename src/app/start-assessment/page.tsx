import { CommanBanner, LinkButton, SectionWithContainer } from "@/components";
import Image from "next/image";

const page = () => {
  const data = [
    {
      name: "Inside Canada",
      href: "https://api.mybusinesspilot.com/widget/form/4mIIinFkRqahNwPvQXCp",
    },
    {
      name: "Outside Canada",
      href: "https://api.mybusinesspilot.com/widget/form/4mIIinFkRqahNwPvQXCp",
    },
  ];
  return (
    <main>
      <CommanBanner title="Assessment" src="" />
      <SectionWithContainer>
        <div className="flex flex-col w-full md:gap-8 gap-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-16">
            {data.map((item, i) => (
              <div
                className="w-full flex items-center justify-center p-16 box-shadow2 border-[4px] border-prime-light-blue"
                key={i}
              >
                <LinkButton
                  href={item.href}
                  className={`${i === 0 ? "bg-prime-red hover:bg-prime-light-blue" : "bg-prime-light-blue hover:bg-prime-red"} px-4 py-2 text-white`}
                >
                  {item.name}
                </LinkButton>
              </div>
            ))}
          </div>
          <Image src="/test1.webp" alt="test" width={500} height={500} className="mx-auto" />
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
