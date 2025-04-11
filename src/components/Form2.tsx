"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Form2 = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  // const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "abhijeet", // Replace with your actual domain value
          // Domain: "",
          email: userEmail,
          Name: userName,
          Contact: `${userPhone}`, // Combine country code and phone number
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        // setCountryCode("+91"); // Reset country code
        setFormRes(false);
        router.push("/thank-you/");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-md:mt-6 text-base w-full bg-bgclr text-white"
      id="contact"
    >
      <div className="flex flex-col gap-6 border p-5">
        <div className="flex items-center gap-3 border border-secondary bg-white">
          <label htmlFor="Name" className="ps-2">
            {/* <UserOrange /> */}
          </label>
          <input
            id="Name"
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full h-max p-2 outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center gap-3 border border-secondary bg-white">
          <label htmlFor="Name" className="ps-2">
            {/* <CallOrange /> */}
          </label>
          {/* <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            required
            className="text-sm text-[#222] outline-none p-2 rounded-sm"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code}
              </option>
            ))}
          </select> */}
          <input
            type="text"
            placeholder="Phone"
            value={userPhone}
            onChange={handlePhoneChange}
            required
            maxLength={10}
            className="w-full  p-2 rounded-sm outline-none"
          />
        </div>
        <div className="flex items-center gap-3 border border-secondary bg-white">
          <label htmlFor="Name" className="ps-2">
            {/* <MailOrange /> */}
          </label>
          <input
            type="text"
            placeholder="Email"
            value={userEmail}
            onChange={handleEmailChange}
            required
            className="w-full p-2 rounded-sm outline-none"
          />
          {emailErrorMessage && (
            <p className="text-red-500">{emailErrorMessage}</p>
          )}
        </div>
        <div className="flex items-center gap-3 border border-secondary bg-white">

          <select
            id="selection"
            // value={selectedOption}
            // onChange={handleSelectChange}

            required
            className="w-full p-2 rounded-sm outline-none px-6 text-black/40"
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {/* {selectErrorMessage && (
            <p className="text-red-500">{selectErrorMessage}</p>
          )} */}
        </div>


        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex gap-3 border border-secondary bg-white">
          <label htmlFor="Name" className="ps-2">
            {/* <MessageOrange /> */}
          </label>
          <textarea
            placeholder="Message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            rows={10}
            className="w-full p-2 rounded-sm resize-none outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary w-full mx-auto text-sm text-white px-5 py-3 font-normal capitalize hover:bg-primary/80 duration-500 rounded-sm border"
        >
          {formRes ? "Loading...." : "Contact us"}
        </button>
      </div>


    </form>
  );
};

export default Form2;
