"use client";
import { SectionWithContainer } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";

interface reviewProps {
  name: string;
  review: string;
  date: string;
  src?: string;
  gicon: string;
  rating: string;
  verify: string;
}
const Reviews = () => {
  const data = [
    {
      name: "Parishma Memon",
      review:
        "Excellent service.Very helpful people with so much hardwork. Always there to clear doubts.I always get positive response and all my applications until now got approved. Thanks a lot to Tanya,Megha and Rhea.",
      date: "2024-03-30",
      // src: "/saif.PNG",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Samuel Hammond",
      review:
        "My experience with TNC was nothing but excellent. Thanks to Sejal and the entire team, my wife's open work permit was approved so fast. They exceeded my expectation and I will recommend TNC to anyone who wants to apply any type of visa to Canada whether you are in or out of Canada. I am bringing more business from Africa so team TNC please get ready. Thank you.",
      date: "2024-03-27",
      // src: "/g.PNG",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Vanessa Mutoni",
      review:
        "I highly recommend TNC True North Consultancy LTD business. I was completely impressed with their professionalism and customer service. Their staff is not only friendly but also highly skilled. They are reliable, honest and operate with integrity. They always took time to answer questions I may have. I recommend their services to whoever is looking for help with an immigration matter. Thank you again TNC!!",
      date: "2024-03-22",
      src: "/unna.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Sarabjit Kaur",
      review:
        "One of the best immigration services providing place. My sister’s visitor to study permit approved with in 15 days inside Canada. I am really thankful to Tania mam for answering me every query quick and whenever i called and texted her she explained me in detail. I really thankful to her for this approval and her hard work. Thankyou so much Tania Mam and whole TNC Immigration team.😁🙏🏻",
      date: "2024-03-22",
      // src: "/un.PNG",
      gicon: "",
      rating: "",
      verify: "",
    },

    {
      name: "sukan thapa",
      review:
        "I would like to thank you for hard work and dedication at the end success. In future i will recommended to my friends great works thank you TNC. I really appreciate your contribution...",
      date: "2024-03-22",
      src: "/unn.png",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Naaz k",
      review:
        "I applied for my parents and sister's visitor visa with them. My parents were previously refused 4 times and my sister had just graduated high school. I contacted many immigration agents but everyone mentioned that the file is weak and that i should not apply right now but one day i finally saw TNC's social media and their content really gave me hope to re-apply. I spoke to Megha about the case and she made me feel like its worth giving a shot. Later, Simran answered all the questions we had and was very efficient in the paperwork. In just 2 weeks my entire family was approved! I would highly recommend their services to everyone. They know what they are doing and have the capability to change lives for the better!!",
      date: "2024-03-18",
      // src: "/seraj.PNG",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "G Kaur",
      review:
        "I am extremely delighted to be writing this review. I would really like to thank Megha for helping me get my work permit. She was professional and knowledgeable. My case was handled efficiently and i received timely updates. Simran made sure that each and every important information was highlighted in the right manner. Their team is genuine, polite and always ready to help. I highly recommend them for any kind of immigration services.",
      date: "2024-03-18",
      // src: "/nau.PNG",
      gicon: "",
      rating: "",
      verify: "",
    },
    {
      name: "Latif Ssenyonjo",
      review:
        "Thanks TNC..wonderful work accomplished...Really met my expectations as recommended..Thanks for the great work.My case Manager Simran,Megha..Really wonderful people in helping us..5 people (family)for the approvals..looking forward to work with you more",
      date: "2024-03-15",
      // src: "/sydaf.PNG",
      gicon: "",
      rating: "",
      verify: "",
    },
  ];
  return (
    <SectionWithContainer sectionClassName="!py-4">
      <div className="flex w-full max-lg:flex-col items-center justify-center gap-4">
        <div className="md:w-[15%] flex flex-col gap-2 items-center">
          <h3 className="text-secondary text-center uppercase font-bold">
            excellent
          </h3>
          <div className="flex gap-1 items-center justify-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                key={item}
                src={"/star.svg"}
                alt="alt"
                width={20}
                height={20}
              />
            ))}
          </div>
          <p className="text-center description2">
            Based on <b>370 reviews</b>
          </p>
          <Image src="/google.svg" alt="alt" width={100} height={50} />
        </div>
        <div className="md:w-[85%] w-full">
          <SliderSwip
            data={data}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: ".location_next",
              prevEl: ".location_prev",
            }}
            slidesPerView={1}
            spaceBetween={8}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            classNameSwiper="w-full"
            classNameSwiperSlide="p-2"
          >
            {(item) => <Card {...item} />}
          </SliderSwip>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Reviews;

export const Card: React.FC<reviewProps> = ({
  name,
  review,
  date,
  src,
  //   gicon,
  //   rating,
  //   verify,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full flex-col h-full min-h-[220px] gap-3 text-[#333333] p-4 rounded-sm bg-white shadow-xl">
      <div className="flex gap-8 mb-3 items-center">
        {src ? (
          <Image src={src} alt={name} width={50} height={50} />
        ) : (
          <div
            className="flex items-center justify-center rounded-full heading3 font-bold text-white"
            style={{
              backgroundColor: `hsl(${
                Array.from(name || "").reduce(
                  (acc, char) => acc + char.charCodeAt(0),
                  0
                ) % 360
              }, 70%, 50%)`,
              width: "50px",
              height: "50px",
            }}
          >
            {name.slice(0, 1).toUpperCase()}
          </div>
        )}

        <div className="flex flex-col ">
          <h3 className="description1 font-bold">{name}</h3>
          <p className="description3">{date}</p>
        </div>
        <Image
          src={"/gico.svg"}
          alt="logo GOOGLE"
          width={20}
          height={20}
          className="ml-auto"
        />
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <Image
            key={item}
            src={"/star.svg"}
            alt="alt"
            width={20}
            height={20}
          />
        ))}
        <Image src={"/ver.svg"} alt="tick logo" width={20} height={20} />
      </div>
      <p className="description2 !leading-5 mt-4">
        {review.slice(0, readMore ? review.length : 100)}
        {review.length > 120 && !readMore && " ..."}
        {review.length > 120 && (
          <b onClick={() => setReadMore(!readMore)}>
            {readMore ? " Read Less" : " Read More"}
          </b>
        )}
      </p>
    </div>
  );
};
