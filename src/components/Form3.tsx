"use client";

import axios from "axios";
import React, { useState } from "react";


const Form3 = () => {
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
          Domain: "sumit", // Replace with your actual domain value
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
        // router.push("/thank-you/");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="" id="contact">
      <div className="flex flex-col gap-10 p-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-gray-600 text-sm">
            Your Name
          </label>
          <input
            id="Name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full p-3 border outline-none border-gray-400 focus:border-prime-red"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Name" className="text-gray-600 text-sm">
            Your Email
          </label>
          <input
            type="text"
            value={userEmail}
            onChange={handleEmailChange}
            required
            className="w-full p-3 border outline-none border-gray-400 focus:border-prime-red"
          />
          {emailErrorMessage && (
            <p className="text-red-500">{emailErrorMessage}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Name" className="text-gray-600 text-sm">
            Your Phone
          </label>

          <input
            type="text"
            value={userPhone}
            onChange={handlePhoneChange}
            required
            maxLength={10}
            className="w-full p-3 border outline-none border-gray-400 focus:border-prime-red"
          />
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex flex-col gap-2">
          <label htmlFor="Name" className="text-gray-600 text-sm">
            Your Message
          </label>
          <textarea
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            rows={6}
            className="w-full p-3 border outline-none border-gray-400 focus:border-prime-red"
          />
        </div>

        <button
          type="submit"
          className="bg-prime-red w-fit text-lg text-white px-6 py-3 font-normal capitalize hover:bg-prime-red/90 duration-500 rounded-lg border"
        >
          {formRes ? "Loading...." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Form3;
