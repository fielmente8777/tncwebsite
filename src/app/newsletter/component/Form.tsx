"use client";
import { imagesLink } from "@/data/links";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState("");
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
      console.log(data.email);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setEmail("");
  };
  return (
    <div className="max-w-5xl mx-auto w-full max-lg:px-4">
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
        </div>
      </div>
    </div>
  );
};

export default Form;
