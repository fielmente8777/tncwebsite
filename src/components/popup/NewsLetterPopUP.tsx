"use client";
import { imagesLink } from "@/data/links";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

interface NewsLetterPopUPProps {
  openNewsLetter: boolean;
  setOpenNewsLetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewsLetterPopUP: React.FC<NewsLetterPopUPProps> = ({
  openNewsLetter,
  setOpenNewsLetter,
}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Only set timer if popup hasn't been shown yet and isn't already open
    if (!hasShown && !openNewsLetter) {
      timerRef.current = setTimeout(() => {
        setOpenNewsLetter(true);
        setHasShown(true);
        document.body.style.overflow = "hidden";
      }, 5000); // Show after 5 seconds
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [openNewsLetter, hasShown, setOpenNewsLetter]);

  const closeModal = useCallback(() => {
    setOpenNewsLetter(false);
    document.body.style.overflow = "auto";
    
    // Clear any pending timer when modal is closed
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [setOpenNewsLetter]);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    const host = "https://nexon.eazotel.com/api/dashboard/editnewsletter";
    const data = {
      Domain: "tnc",
      email: email,
    };
    
    try {
      const response = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(data.email)
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    closeModal();
  };

  return (
    <div
      className={`fixed bg-black/50 ${openNewsLetter ? "inset-0 w-full h-full scale-100 opacity-100" : "opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 scale-0"} duration-300 transition-all ease-in-out flex items-center justify-center z-50`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="max-w-5xl w-full max-lg:px-4">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 bg-white box-shadow2 rounded-xl overflow-hidden">
          <div className="w-full px-8 py-4 flex flex-col gap-4 max-sm:order-2">
            <div className="relative w-full aspect-[4/2]">
              <Image
                src="/logo2.png"
                className="object-contain"
                alt="logo"
                fill
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-lg font-semibold text-black">
                Join Us & Stay Updated! 📢
              </h2>
              <p className="">
                Subscribe now to get the latest updates on Canadian immigration
                and expert tips from TNC Immigration. Don&apos;t miss out on
                important insights!
              </p>
              <form 
                className="flex flex-col gap-4 w-full" 
                onSubmit={handleNewsletter}
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Enter your email"
                  className="border border-secondary/10 rounded-md py-2 px-3 w-full outline-none focus:border-secondary/70 duration-300 transition-all ease-in-out"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-3 rounded-md hover:bg-secondary duration-300 transition-all ease-in-out"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="relative w-full md:aspect-square">
            <Image
              src={imagesLink + "popup.jpg"}
              alt="avatar"
              fill
              className="object-cover"
            />
            <button
              className="absolute top-3 right-3 p-1 aspect-square bg-white/10 text-secondary/70 hover:text-secondary flex items-center justify-center duration-300 transition-all ease-in-out"
              onClick={closeModal}
            >
              <IoClose className="w-8 h-8 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterPopUP;