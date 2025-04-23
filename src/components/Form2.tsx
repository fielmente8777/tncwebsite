"use client";

import axios from "axios";
import React, { useState } from "react";

const ServicesData = [
  {
    label: "PROCEDURAL FAIRNESS LETTERS",
    value: "PROCEDURAL FAIRNESS LETTERS",
  },
  {
    label: "INTRA COMPANY TRANSFER",
    value: "INTRA COMPANY TRANSFER",
  },
  {
    label: "SPONSOR YOUR SIBLINGS FOR PR",
    value: "SPONSOR YOUR SIBLINGS FOR PR",
  },
  {
    label: "SPOUSAL SPONSORSHIP",
    value: "SPOUSAL SPONSORSHIP",
  },
  {
    label: "EXTENSIONS WITHIN CANADA",
    value: "EXTENSIONS WITHIN CANADA",
  },
  {
    label: "SPOUSAL OPEN WORK PERMIT",
    value: "SPOUSAL OPEN WORK PERMIT",
  },
  {
    label: "STUDY PERMIT",
    value: "STUDY PERMIT",
  },
  {
    label: "POST-GRADUATE OPEN WORK PERMITS",
    value: "POST-GRADUATE OPEN WORK PERMITS",
  },
  {
    label: "VISITOR VISA",
    value: "VISITOR VISA",
  },
  {
    label: "SUPER VISA",
    value: "SUPER VISA",
  },
];

interface Form2Props {
  title?: string;
  desc?: string;
}
const Form2: React.FC<Form2Props> = ({ title, desc }) => {
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

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      setFormRes(true);
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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 border-[3px] border-black p-3 rounded-2xl bg-[#F2F2F2] max-w-[486px] mx-auto shadow-2xl">
        <div className="space-y-2">
          {/* quick enquiry  */}
          <div className="flex justify-center items-center gap-4">
            <EnquiryIcon />
            <h2 className="text-prime-red font-bold text-lg">
              {title ? title : "QUICK ENQUIRY"}
            </h2>
          </div>

          {/* greetings message  */}
          <div className="flex justify-center">
            <HandShakeIcon />
            <p className="text-sm text-center max-w-96">
              {desc
                ? desc
                : " Greetings! Kindly provide your requirements below, and we'll get back to you shortly."}
            </p>
          </div>
        </div>

        {/* name and email input  */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUserName(e.target.value)}
              className="border px-5 py-3 outline-none border-gray-300 rounded-sm placeholder:font-medium"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
              className="border px-5 py-3 outline-none border-gray-300 rounded-sm placeholder:font-medium"
            />
            {emailErrorMessage && (
              <p className="text-red-500">{emailErrorMessage}</p>
            )}
          </div>
        </div>

        {/* phone input  */}
        <div className="gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium">
              Phone
            </label>
            <input
              type="text"
              placeholder="Phone"
              onChange={handlePhoneChange}
              className="border px-5 py-3 outline-none border-gray-300 rounded-sm placeholder:font-medium"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
        </div>

        {/* services select input  */}
        <div className="gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium">
              Services
            </label>

            <div className="border py-3 px-5 border-gray-500">
              <select
                onChange={(e) => setUserMessage(e.target.value)}
                className="bg-transparent outline-none w-full"
              >
                <option value="">Select Services</option>
                {ServicesData?.map((item, index) => (
                  <option
                    value={item?.value}
                    key={index}
                    className="text-sm p-2"
                  >
                    {item?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-prime-red w-full mx-auto text-sm text-white px-5 py-3 font-normal capitalize hover:bg-prime-red/90 duration-500 rounded-sm border shadow-lg"
        >
          {formRes ? "Loading...." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default Form2;

export const HandShakeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
    >
      <path
        d="M22.9556 7.17479C23.1105 7.29871 23.188 7.46909 23.188 7.68595V16.0038C23.188 16.1587 23.1338 16.2981 23.0253 16.422C22.9169 16.5459 22.7852 16.6079 22.6303 16.6079H20.911L19.6564 16.9796C19.6564 17.0106 19.6564 17.0416 19.6564 17.0726C19.6564 17.5372 19.4782 17.9477 19.122 18.304C18.7657 18.6602 18.3398 18.8384 17.8441 18.8384C17.5343 18.8384 17.24 18.7609 16.9612 18.606C16.8373 18.8848 16.6204 19.1327 16.3106 19.3495C16.0009 19.5664 15.6756 19.6748 15.3348 19.6748C15.025 19.6748 14.7307 19.5973 14.4519 19.4425C14.328 19.7213 14.1034 19.9691 13.7781 20.1859C13.4528 20.4028 13.1353 20.5112 12.8255 20.5112C12.5157 20.5112 12.2214 20.4338 11.9426 20.2789C11.8497 20.4648 11.718 20.6429 11.5476 20.8133C11.3772 20.9837 11.1759 21.1153 10.9435 21.2083C10.7112 21.3012 10.5021 21.3477 10.3162 21.3477C9.82055 21.3477 9.40234 21.1773 9.06157 20.8365L3.67124 16.6079H2.37012C2.21523 16.6079 2.08357 16.5459 1.97514 16.422C1.86671 16.2981 1.8125 16.1587 1.8125 16.0038V7.68595C1.8125 7.50007 1.86671 7.35292 1.97514 7.2445C2.08357 7.13607 2.21523 7.08186 2.37012 7.08186C2.43208 7.08186 2.49404 7.08186 2.55599 7.08186L4.6006 7.63948C6.67619 6.33836 8.41101 5.92015 9.80507 6.38483C11.2921 5.33155 13.0579 5.17665 15.1025 5.92015C17.7047 7.03539 19.393 7.62399 20.1675 7.68595L22.4445 7.08186C22.5064 7.08186 22.5529 7.08186 22.5839 7.08186C22.7388 7.08186 22.8627 7.11283 22.9556 7.17479ZM2.97421 8.42944V15.3997H3.34596L3.62477 12.6581L4.04298 8.70825L2.97421 8.42944ZM17.8673 17.6302C17.8673 17.6302 17.9099 17.6302 17.9951 17.6302C18.0803 17.6302 18.1771 17.576 18.2855 17.4675C18.394 17.3591 18.4482 17.2197 18.4482 17.0493C18.4482 16.8789 18.4017 16.7318 18.3088 16.6079L12.6396 10.9852C11.1526 12.2553 9.72762 12.4257 8.36454 11.4964C8.11671 11.3415 7.90761 11.0936 7.73722 10.7529C7.56684 10.4121 7.48165 10.1023 7.48165 9.82349C7.48165 9.45175 7.57458 9.09549 7.76046 8.75472C8.03927 8.29004 8.36454 7.84084 8.73629 7.40714C7.71399 7.40714 6.55228 7.80986 5.25116 8.61531L5.06529 10.1952L4.50767 15.725L9.85153 19.9536C9.85153 19.9536 9.86702 19.9691 9.898 20.0001C9.99094 20.093 10.1226 20.1395 10.293 20.1395C10.4634 20.1395 10.6105 20.0853 10.7344 19.9768C10.8583 19.8684 10.9203 19.729 10.9203 19.5586C10.9203 19.3882 10.8583 19.2566 10.7344 19.1636L9.06157 17.4443C8.93765 17.3514 8.8757 17.212 8.8757 17.0261C8.8757 16.8712 8.92991 16.7395 9.03834 16.6311C9.14676 16.5227 9.28617 16.4685 9.45655 16.4685C9.62694 16.4685 9.77409 16.5149 9.898 16.6079L12.4073 19.1636C12.5312 19.2566 12.6706 19.303 12.8255 19.303C12.9804 19.303 13.1198 19.2488 13.2437 19.1404C13.3676 19.032 13.4296 18.8926 13.4296 18.7222C13.4296 18.5518 13.3676 18.4047 13.2437 18.2807L10.688 15.7714C10.595 15.6475 10.5486 15.5081 10.5486 15.3532C10.5486 15.1983 10.6028 15.0589 10.7112 14.935C10.8196 14.8111 10.959 14.7491 11.1294 14.7491C11.2998 14.7491 11.4469 14.8111 11.5709 14.935L14.0802 17.4443L14.9166 18.2807C15.0405 18.4047 15.1799 18.4666 15.3348 18.4666C15.4897 18.4666 15.6291 18.4124 15.753 18.304C15.8769 18.1955 15.9389 18.0561 15.9389 17.8858C15.9389 17.7154 15.8769 17.5682 15.753 17.4443L12.4073 14.0986C12.3144 13.9747 12.2679 13.8353 12.2679 13.6804C12.2679 13.5874 12.2911 13.4945 12.3376 13.4016C12.3841 13.3086 12.4538 13.2389 12.5467 13.1925C12.6396 13.146 12.7326 13.1227 12.8255 13.1227C12.9804 13.1227 13.1198 13.1692 13.2437 13.2622L16.5895 16.6079L17.4259 17.4443C17.5498 17.5682 17.6969 17.6302 17.8673 17.6302ZM19.2382 15.8644L20.214 15.5856L19.7028 8.80119C18.6496 8.58433 16.9767 7.99574 14.6842 7.03539C12.9494 6.41581 11.4934 6.5707 10.3162 7.50007C10.3162 7.53105 10.3007 7.54654 10.2697 7.54654C9.68115 8.07318 9.18549 8.67727 8.78276 9.35881C8.68982 9.5137 8.64336 9.6686 8.64336 9.82349C8.64336 10.1023 8.76727 10.3346 9.0151 10.5205C10.2852 11.3569 11.6793 10.6909 13.1973 8.52238C13.3212 8.30552 13.4916 8.1971 13.7084 8.1971C13.8943 8.1971 14.0414 8.25906 14.1499 8.38297C14.2583 8.50689 14.3125 8.64629 14.3125 8.80119C14.3125 8.95608 14.266 9.09549 14.1731 9.2194C13.9562 9.52919 13.7239 9.82349 13.4761 10.1023L19.1452 15.7714C19.1762 15.8024 19.2072 15.8334 19.2382 15.8644ZM22.0263 15.3997V8.42944L20.8645 8.70825L21.3757 15.3997H22.0263Z"
        fill="#B41B2A"
      />
    </svg>
  );
};

export const EnquiryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
    >
      <path
        d="M3.6737 22.4822V5.66224H23.587V16.1022H24.457V2.95557C24.457 2.44002 24.2798 2.00502 23.9254 1.65057C23.5709 1.29613 23.1359 1.11891 22.6204 1.11891H4.5437C4.02814 1.11891 3.59314 1.29613 3.2387 1.65057C2.88425 2.00502 2.70703 2.44002 2.70703 2.95557V22.4822C2.70703 22.9334 2.88425 23.3361 3.2387 23.6906C3.59314 24.045 4.02814 24.2222 4.5437 24.2222H15.3704V23.3522H4.5437C4.28592 23.3522 4.07648 23.2717 3.91536 23.1106C3.75425 22.9495 3.64148 22.74 3.57703 22.4822H3.6737ZM4.5437 2.08557H22.6204C22.8781 2.08557 23.1037 2.16613 23.297 2.32724C23.4904 2.48835 23.587 2.6978 23.587 2.95557V4.79224H3.6737V2.95557C3.6737 2.6978 3.75425 2.48835 3.91536 2.32724C4.07648 2.16613 4.28592 2.08557 4.5437 2.08557ZM4.5437 2.95557H5.4137V3.82557H4.5437V2.95557ZM6.38036 2.95557H7.25036V3.82557H6.38036V2.95557ZM8.12036 2.95557H9.08703V3.82557H8.12036V2.95557ZM26.777 19.7756H25.2304L24.747 18.0356C24.6181 17.5845 24.3604 17.2461 23.9737 17.0206C23.587 16.795 23.1681 16.7145 22.717 16.7789L16.1437 17.8422C15.6926 17.9067 15.3543 18.1322 15.1287 18.5189C14.9031 18.9056 14.887 19.3245 15.0804 19.7756H14.017C13.9526 19.7756 13.8881 19.7756 13.8237 19.7756L12.567 20.6456H11.7937V21.5156H12.567L13.8237 22.3856C13.8881 22.45 13.9526 22.4822 14.017 22.4822H16.1437L17.207 23.5456C17.2715 23.9967 17.4326 24.4156 17.6904 24.8022C17.9481 25.1889 18.3026 25.4789 18.7537 25.6722L19.527 25.9622V28.3789H20.397V25.5756C20.397 25.3822 20.3004 25.2534 20.107 25.1889L19.1404 24.8022C18.8181 24.6734 18.5604 24.48 18.367 24.2222C18.1737 23.9645 18.1093 23.6745 18.1737 23.3522C18.1737 23.2234 18.1093 23.1267 17.9804 23.0622L16.4337 21.5156C16.3048 21.3222 16.2726 21.1289 16.337 20.9356C16.4015 20.7422 16.5626 20.6456 16.8204 20.6456H17.207L20.5904 22.3856L21.847 23.6422L22.5237 23.0622L21.9437 22.4822H24.457V28.3789H25.4237V22.4822H26.777C27.0993 22.4822 27.4054 22.3372 27.6954 22.0472C27.9854 21.7572 28.1304 21.435 28.1304 21.0806C28.1304 20.7261 27.9854 20.42 27.6954 20.1622C27.4054 19.9045 27.0993 19.7756 26.777 19.7756ZM13.5337 21.1289L14.2104 20.6456H15.467C15.4026 20.9678 15.4026 21.2578 15.467 21.5156H14.2104L13.5337 21.1289ZM16.8204 19.7756H16.337C16.2081 19.7756 16.0954 19.7272 15.9987 19.6306C15.902 19.5339 15.8537 19.405 15.8537 19.2439C15.8537 19.0828 15.902 18.9539 15.9987 18.8572C16.0954 18.7606 16.2081 18.7122 16.337 18.7122L22.9104 17.6489C23.1037 17.5845 23.297 17.6167 23.4904 17.7456C23.6837 17.8745 23.8126 18.0678 23.877 18.3256L24.3604 19.7756H21.9437L22.5237 19.1956L21.847 18.5189L20.687 19.7756H16.8204ZM20.977 21.5156L19.1404 20.6456H25.4237V21.5156H20.977ZM26.777 21.5156H26.2937V20.6456H26.777C26.9059 20.6456 27.0026 20.6939 27.067 20.7906C27.1315 20.8872 27.1637 21 27.1637 21.1289C27.1637 21.2578 27.1315 21.3545 27.067 21.4189C27.0026 21.4834 26.9059 21.5156 26.777 21.5156ZM13.147 14.7489V7.49891C13.147 7.37002 13.0987 7.25724 13.002 7.16057C12.9054 7.06391 12.7926 7.01557 12.6637 7.01557H5.4137C5.28481 7.01557 5.18814 7.06391 5.1237 7.16057C5.05925 7.25724 5.02703 7.37002 5.02703 7.49891V14.7489C5.02703 14.8778 5.05925 14.9906 5.1237 15.0872C5.18814 15.1839 5.28481 15.2322 5.4137 15.2322H12.6637C12.7926 15.2322 12.9054 15.1839 13.002 15.0872C13.0987 14.9906 13.147 14.8778 13.147 14.7489ZM9.08703 12.5256C9.4737 12.5256 9.79592 12.6545 10.0537 12.9122C10.3115 13.17 10.4404 13.4922 10.4404 13.8789V14.2656H7.7337V13.8789C7.7337 13.4922 7.86259 13.17 8.12036 12.9122C8.37814 12.6545 8.70036 12.5256 9.08703 12.5256ZM8.12036 10.6889C8.12036 10.4311 8.21703 10.2056 8.41036 10.0122C8.6037 9.81891 8.82925 9.72224 9.08703 9.72224C9.34481 9.72224 9.55425 9.81891 9.71536 10.0122C9.87648 10.2056 9.95703 10.4311 9.95703 10.6889C9.95703 10.9467 9.87648 11.1561 9.71536 11.3172C9.55425 11.4784 9.34481 11.5589 9.08703 11.5589C8.82925 11.5589 8.6037 11.4784 8.41036 11.3172C8.21703 11.1561 8.12036 10.9467 8.12036 10.6889ZM12.277 14.2656H11.3104V13.8789C11.3104 13.4922 11.2298 13.1217 11.0687 12.7672C10.9076 12.4128 10.6659 12.1389 10.3437 11.9456C10.6015 11.6878 10.7626 11.3817 10.827 11.0272C10.8915 10.6728 10.8593 10.3184 10.7304 9.96391C10.6015 9.60946 10.3759 9.33557 10.0537 9.14224C9.73148 8.94891 9.39314 8.85224 9.0387 8.85224C8.68425 8.85224 8.36203 8.94891 8.07203 9.14224C7.78203 9.33557 7.55648 9.60946 7.39536 9.96391C7.23425 10.3184 7.20203 10.6728 7.2987 11.0272C7.39536 11.3817 7.57259 11.6878 7.83036 11.9456C7.50814 12.1389 7.25036 12.4128 7.05703 12.7672C6.8637 13.1217 6.76703 13.4922 6.76703 13.8789V14.2656H5.89703V7.98224H12.277V14.2656ZM7.25036 16.1022H12.6637V16.9722H7.25036V16.1022ZM5.4137 16.1022H6.38036V16.9722H5.4137V16.1022ZM16.7237 7.98224H22.2337V8.85224H16.7237V7.98224ZM14.9837 9.72224H22.2337V10.6889H14.9837V9.72224ZM14.9837 11.5589H22.2337V12.5256H14.9837V11.5589ZM14.9837 13.3956H22.2337V14.2656H14.9837V13.3956ZM14.9837 7.98224H15.8537V8.85224H14.9837V7.98224ZM25.4237 3.43891H26.2937V12.5256H25.4237V3.43891ZM25.4237 13.3956H26.2937V14.2656H25.4237V13.3956ZM5.22036 19.7756L4.5437 21.4189L5.4137 21.7089L5.89703 20.3556L6.18703 20.9356C6.31592 21.1289 6.49314 21.2578 6.7187 21.3222C6.94425 21.3867 7.1537 21.3545 7.34703 21.2256L8.12036 20.7422L8.6037 21.3222C8.79703 21.4511 8.99036 21.5156 9.1837 21.5156H10.9237V20.6456H9.28036L8.70036 20.0656C8.57148 19.9367 8.41036 19.8561 8.21703 19.8239C8.0237 19.7917 7.83036 19.84 7.63703 19.9689L6.96036 20.4522L6.67036 19.7756C6.47703 19.4534 6.21925 19.2922 5.89703 19.2922C5.57481 19.2922 5.34925 19.4534 5.22036 19.7756Z"
        fill="#B41B2A"
      />
    </svg>
  );
};
