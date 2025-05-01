"use client";
import { SectionWithContainer } from "@/components";
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [showEducationComplete, setShowEducationComplete] = useState(false);
  const [showFrenchLanguage, setShowFrenchLanguage] = useState(false);
  const [showProfessionalDesignation, setShowProfessionalDesignation] =
    useState(false);

  const [formData, setFormData] = useState({
    designation: "",
    frenchTest: "",
    wage: "",
    area: "",
    employmentOutside: "",
    educationOutside: "",
    clb: "",
    experienceYears: "",
    experienceInCanada: "",
    currentlyWorking: "",
    educationLevel: "",
    educationInCanada: "",
    employmentwithinbc: "",
  });

  const [score, setScore] = useState(0);

  const handleChange = (
    field: keyof typeof formData,
    value: string | number
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const priceOptions = [
    { label: "$70.00 and above", value: "" },
    { label: "$69.00 to $69.99", value: "" },
    { label: "$68.00 to $68.99", value: "" },
    { label: "$67.00 to $67.99", value: "" },
    { label: "$66.00 to $66.99", value: "" },
    { label: "$65.00 to $65.99", value: "" },
    { label: "$64.00 to $64.99", value: "" },
    { label: "$63.00 to $63.99", value: "" },
    { label: "$62.00 to $62.99", value: "" },
    { label: "$61.00 to $61.99", value: "" },
    { label: "$60.00 to $60.99", value: "" },
    { label: "$59.00 to $59.99", value: "" },
    { label: "$58.00 to $58.99", value: "" },
    { label: "$57.00 to $57.99", value: "" },
    { label: "$56.00 to $56.99", value: "" },
    { label: "$55.00 to $55.99", value: "" },
    { label: "$54.00 to $54.99", value: "" },
    { label: "$53.00 to $53.99", value: "" },
    { label: "$52.00 to $52.99", value: "" },
    { label: "$51.00 to $51.99", value: "" },
    { label: "$50.00 to $50.99", value: "" },
    { label: "$49.00 to $49.99", value: "" },
    { label: "$48.00 to $48.99", value: "" },
    { label: "$47.00 to $47.99", value: "" },
    { label: "$46.00 to $46.99", value: "" },
    { label: "$45.00 to $45.99", value: "" },
    { label: "$44.00 to $44.99", value: "" },
    { label: "$43.00 to $43.99", value: "" },
    { label: "$42.00 to $42.99", value: "" },
    { label: "$41.00 to $41.99", value: "" },
    { label: "$40.00 to $40.99", value: "" },
    { label: "$39.00 to $39.99", value: "" },
    { label: "$38.00 to $38.99", value: "" },
    { label: "$37.00 to $37.99", value: "" },
    { label: "$36.00 to $36.99", value: "" },
    { label: "$35.00 to $35.99", value: "" },
    { label: "$34.00 to $34.99", value: "" },
    { label: "$33.00 to $33.99", value: "" },
    { label: "$32.00 to $32.99", value: "" },
    { label: "$31.00 to $31.99", value: "" },
    { label: "$30.00 to $30.99", value: "" },
    { label: "$29.00 to $29.99", value: "" },
    { label: "$28.00 to $28.99", value: "" },
    { label: "$27.00 to $27.99", value: "" },
    { label: "$26.00 to $26.99", value: "" },
    { label: "$25.00 to $25.99", value: "" },
    { label: "$24.00 to $24.99", value: "" },
    { label: "$23.00 to $23.99", value: "" },
    { label: "$22.00 to $22.99", value: "" },
    { label: "$21.00 to $21.99", value: "" },
    { label: "$20.00 to $20.99", value: "" },
    { label: "$19.00 to $19.99", value: "" },
    { label: "$18.00 to $18.99", value: "" },
    { label: "$17.00 to $17.99", value: "" },
    { label: "$16.00 to $16.99", value: "" },
    { label: "Less than $16.00", value: "" },
  ];

  const professtionalDesignationOptions = [
    {
      label:
        "Any valid trade certificate issued by SkilledTradesBC or Industry Training Authority British Columbia (ITABC) - If you have been approved by SkilledTradesBC or by the ITABC to challenge the certification exam for your trade",
      value: "5",
    },
    {
      label:
        "Animal health technologists and veterinary technicians: NOC 32104 - Veterinary Technicians registered with British Columbia Veterinary Technologists Association",
      value: "5",
    },
    {
      label:
        "Dental Assistants: NOC 33100 - Dental Assistants certified with British Columbia College of Oral Health Professionals",
      value: "5",
    },
    {
      label:
        "Dental Hygienists: NOC 32111 - Dental Hygienists registered with British Columbia College of Oral Health Professionals",
      value: "5",
    },
    {
      label:
        "Dental Technicians: NOC 33100 - Dental Technicians registered with British Columbia College of Oral Health Professionals",
      value: "5",
    },
    {
      label:
        "Denturists: NOC 32110 - Denturists certified with British Columbia College of Oral Health Professionals",
      value: "5",
    },
    {
      label:
        "Early Childhood Educators (ECE): NOC 42202 - ECEs with a valid ECE One Year or ECE Five Year Certificate with the Early Childhood Educator Registry",
      value: "5",
    },
    {
      label:
        "Health Care Aide: NOC 33102 - Health Care Aides registered with BC Care Aide & Community Health Worker Registration",
      value: "5",
    },
    {
      label:
        "Pharmacy Technicians: NOC 33103 - Pharmacy Technicians registered with The College of Pharmacists of British Columbia",
      value: "5",
    },
    {
      label:
        "Practical Nurses: NOC 32101 - Practical Nurses licenced with The British Columbia College of Nurses and Midwives",
      value: "5",
    },
    {
      label:
        "Traditional Chinese medicine practitioners and acupuncturists: NOC 32200 - Practitioners licensed through The College of Traditional Chinese Medicine Practitioners and Acupuncturists of BC",
      value: "5",
    },
  ];

  const calculateScore = () => {
    let total = 0;

    const keys = [
      "experienceYears",
      "experienceInCanada",
      "currentlyWorking",
      "educationLevel",
      "educationInCanada",
      "frenchTest",
      "wage",
      "designation",
      "workOutsideMVRD",
      "clb",
      "educationOutside",
      "employmentOutside",
      "employmentwithinbc",
    ];

    keys.forEach((key) => {
      const value = Number(formData[key as keyof typeof formData]);
      if (!isNaN(value)) {
        total += value;
      }
    });

    setScore(total);

    // if (
    //   formData.designation &&
    //   formData.designation !== "no" &&
    //   formData.designation !== "yes"
    // ) {
    //   total += 5; // or however many points a valid designation gives
    // }

    // if (formData.designation === "yes") total += 5;
    // if (formData.frenchTest === "yes") total += 5;
    // if (parseFloat(formData.wage) >= 25) total += 10;

    // if (formData.area === "area2") total += 10;
    // else if (formData.area === "area3") total += 15;

    // if (formData.employmentOutside === "yes") total += 10;
    // if (formData.educationOutside === "yes") total += 8;

    // total += parseInt(formData.clb);

    // // New scoring logic (example points, adjust as needed)
    // switch (formData.experienceYears) {
    //   case "5+":
    //     total += 15;
    //     break;
    //   case "4-5":
    //     total += 12;
    //     break;
    //   case "3-4":
    //     total += 9;
    //     break;
    //   case "2-3":
    //     total += 6;
    //     break;
    //   case "1-2":
    //     total += 3;
    //     break;
    //   case "less1":
    //     total += 1;
    //     break;
    //   default:
    //     break;
    // }

    // if (formData.experienceInCanada === "yes") total += 10;
    // if (formData.currentlyWorking === "yes") total += 10;

    // switch (formData.educationLevel) {
    //   case "doctoral":
    //     total += 17;
    //     break;
    //   case "masters":
    //     total += 15;
    //     break;
    //   case "postgrad":
    //     total += 13;
    //     break;
    //   case "bachelors":
    //     total += 11;
    //     break;
    //   case "associate":
    //     total += 9;
    //     break;
    //   case "diploma":
    //     total += 7;
    //     break;
    //   case "highschool":
    //     total += 5;
    //     break;
    //   default:
    //     break;
    // }

    // if (formData.educationInCanada === "yes") total += 5;

    // setScore(total);
  };

  const resetForm = () => {
    setFormData({
      designation: "",
      frenchTest: "",
      wage: "",
      area: "",
      employmentOutside: "",
      educationOutside: "",
      clb: "0",
      experienceYears: "",
      experienceInCanada: "",
      currentlyWorking: "",
      educationLevel: "",
      educationInCanada: "",
      employmentwithinbc: "",
    });
    setScore(0);
  };

  useEffect(() => {
    calculateScore();
  }, [formData]);

  console.log(formData);

  return (
    <SectionWithContainer>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">
          BC PNP Points Calculator - New Version (2023)
        </h1>

        <hr className="h-px border-b-2 border-gray-400/50 mt-10" />

        <div className="space-y-6 mt-5">
          <div>
            <label className="block font-medium mb-1">
              Directly Related Work Experience in the Occupation of B.C. Job
              Offer
            </label>

            <select
              className="w-full border p-2 rounded"
              value={formData.experienceYears}
              onChange={(e) => handleChange("experienceYears", e.target.value)}
            >
              <option value="">Select experience</option>
              <option value="20">5 or more years</option>
              <option value="16">At least 4 but less than 5 years</option>
              <option value="12">At least 3 but less than 4 years</option>
              <option value="8">At least 2 but less than 3 years</option>
              <option value="4">At least 1 but less than 2 years</option>
              <option value="1">Less than 1 year</option>
              <option value="0">None</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              At least 1 year of directly related experience in Canada?
            </label>

            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="experienceInCanada"
                  value="10"
                  onChange={(e) =>
                    handleChange("experienceInCanada", e.target.value)
                  }
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="experienceInCanada"
                  value="0"
                  onChange={(e) =>
                    handleChange("experienceInCanada", e.target.value)
                  }
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Are you currently working full-time in B.C. for the employer in
              the occupation identified in the BC PNP registration?
            </label>

            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="currentlyWorking"
                  value="10"
                  onChange={(e) =>
                    handleChange("currentlyWorking", e.target.value)
                  }
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="currentlyWorking"
                  value="0"
                  onChange={(e) =>
                    handleChange("currentlyWorking", e.target.value)
                  }
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Highest Level of Education
            </label>

            <select
              className="w-full border p-2 rounded"
              value={formData.educationLevel}
              onChange={(e) => handleChange("educationLevel", e.target.value)}
            >
              <option value="">Select education</option>
              <option value="27">Doctoral Degree</option>
              <option value="22">Master&apos;s Degree</option>
              <option value="15">Post-Graduate Certificate or Diploma</option>
              <option value="15">Bachelor&apos;s Degree</option>
              <option value="5">Associate Degree</option>
              <option value="5">Post-secondary diploma/certificate</option>
              <option value="0">Secondary School or less</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Above-mentioned post-secondary education completed in Canada?
            </label>

            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="educationInCanadas"
                  value="0"
                  onChange={(e) => {
                    setShowEducationComplete(true);
                    handleChange("educationInCanada", e.target.value);
                  }}
                />{" "}
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="educationInCanadas"
                  value="0"
                  onChange={(e) => {
                    setShowEducationComplete(false);
                    handleChange("educationInCanada", e.target.value);
                  }}
                />{" "}
                No
              </label>
            </div>

            {showEducationComplete && (
              <div>
                <div className="flex flex-col gap-3 mt-6">
                  <label>
                    <input
                      type="radio"
                      name="educationInCanada"
                      value="8"
                      onChange={(e) => {
                        handleChange("educationInCanada", e.target.value);
                      }}
                    />{" "}
                    Inside Canada
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="educationInCanada"
                      value="6"
                      onChange={(e) => {
                        handleChange("educationInCanada", e.target.value);
                      }}
                    />{" "}
                    Outside Canada
                  </label>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Do you have Eligible Professional Designation in B.C.?
            </label>

            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="designations"
                  value="yes"
                  onChange={(e) => {
                    setShowProfessionalDesignation(true);
                    handleChange("designation", e.target.value);
                  }}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="designation"
                  value="no"
                  onChange={(e) => {
                    setShowProfessionalDesignation(false);
                    handleChange("designation", e.target.value);
                  }}
                />{" "}
                No
              </label>
            </div>

            {showProfessionalDesignation && (
              <div className="mt-5">
                <h2 className="text-xl">
                  Select your Eligible Professional Designation In B.C
                </h2>

                <div className="mt-2 space-y-4">
                  {professtionalDesignationOptions?.map((item, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <input
                        type="radio"
                        name="designation"
                        value={item.value}
                        className="mt-3"
                        onChange={(e) => {
                          handleChange("designation", e.target.value);
                        }}
                      />
                      <label htmlFor={`${item?.label}-${index}`}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Have you taken the French language proficiency test within the
              past two years?
            </label>

            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="frenchTest"
                  value="yes"
                  onChange={(e) => {
                    setShowFrenchLanguage(true);
                    handleChange("frenchTest", e.target.value);
                  }}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="frenchTest"
                  value="no"
                  onChange={(e) => {
                    setShowFrenchLanguage(false);
                    handleChange("frenchTest", e.target.value);
                  }}
                />{" "}
                No
              </label>
            </div>

            {showFrenchLanguage && (
              <div className="mt-6">
                <label className="block font-medium mb-1">
                  Have you achieved a score of CLB 4 or higher in all four
                  competencies?
                </label>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="frenchTest"
                      value="10"
                      onChange={(e) => {
                        handleChange("frenchTest", e.target.value);
                      }}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="frenchTest"
                      value="0"
                      onChange={(e) => {
                        handleChange("frenchTest", e.target.value);
                      }}
                    />{" "}
                    No
                  </label>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Hourly Wage of the B.C. Job Offer
            </label>

            <select
              className="w-full border p-2 rounded"
              value={formData.area}
              onChange={(e) => handleChange("wage", e.target.value)}
            >
              <option value="">Please Select</option>
              {priceOptions?.map((price, index) => (
                <option value={price?.value} key={index}>
                  {price?.label}
                </option>
              ))}
            </select>

            {/* <input
              type="number"
              className="w-full border p-2 rounded"
              value={formData.wage}
            /> */}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Area Of Employment Within B.C.
            </label>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  name="emp"
                  value={"0"}
                  className="mt-1"
                  onChange={(e) =>
                    handleChange("employmentwithinbc", e.target.value)
                  }
                />
                <label>
                  Area 1: Metro Vancouver Regional District Richmond, Surrey,
                  Coquitlam, Burnaby, Delta, City Of Langley, Township Of
                  Langley, Maple Ridge, New Westminster, Tsawwassen, Pitt
                  Meadows, North Vancouver, Belcarra, Anmore, Bowen Island,
                  Lions Bay, Port Moody, Vanvouver, West Vancouver, White Rock
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  name="emp"
                  value={"5"}
                  className="mt-1"
                  onChange={(e) =>
                    handleChange("employmentwithinbc", e.target.value)
                  }
                />
                <label>
                  Area 2: Squamish, Abbotsford, Agassiz, Mission, And Chilliwack
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  name="emp"
                  value={"15"}
                  className="mt-1"
                  onChange={(e) =>
                    handleChange("employmentwithinbc", e.target.value)
                  }
                />
                <label>Area 3: Areas Of B.C. Not Included In Area 1 Or 2</label>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Have You Completed At Least One Year Full-Time Paid Employment In
              Area Outside Of The Metro Vancouver Regional District (MVRD)
              Within 5 Years Prior To Registering With The BC PNP And have a
              valid job offer outside of MVRD?
            </label>

            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="employmentOutside"
                  value="10"
                  onChange={(e) =>
                    handleChange("employmentOutside", e.target.value)
                  }
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="employmentOutside"
                  value="0"
                  onChange={(e) =>
                    handleChange("employmentOutside", e.target.value)
                  }
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Have You Graduated From A Public B.C. Postsecondary Institution
              Located Outside Of The Metro Vancouver Regional District (MVRD)
              Within 3 Years Prior To Registering With The BC PNP?
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="educationOutside"
                  value="0"
                  onChange={(e) =>
                    handleChange("educationOutside", e.target.value)
                  }
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="educationOutside"
                  value="0"
                  onChange={(e) =>
                    handleChange("educationOutside", e.target.value)
                  }
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Canadian Language Benchmark Level
            </label>
            <select
              className="w-full border p-2 rounded"
              value={formData.clb}
              onChange={(e) => handleChange("clb", e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="30">9+</option>
              <option value="25">8</option>
              <option value="20">7</option>
              <option value="15">6</option>
              <option value="10">5</option>
              <option value="5">4</option>
              <option value="0">Below 4 or no test</option>
            </select>
          </div>

          <div className="flex  items-center justify-between">
            {/* <button onClick={calculateScore} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate</button> */}
            <div className="text-xl font-semibold border px-4 py-2 rounded bg-gray-100">
              Calculation: {score}
            </div>
            <button
              onClick={resetForm}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Calculator;
