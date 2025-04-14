"use client";
import { SectionWithContainer } from "@/components";
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [formData, setFormData] = useState({
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
  });

  const [score, setScore] = useState(0);

  const handleChange = (
    field: keyof typeof formData,
    value: string | number
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const priceOptions = [
    { label: "$70.00 and above", value: "$70.00 and above" },
    { label: "$69.00 to $69.99", value: "$69.00 to $69.99" },
    { label: "$68.00 to $68.99", value: "$68.00 to $68.99" },
    { label: "$67.00 to $67.99", value: "$67.00 to $67.99" },
    { label: "$66.00 to $66.99", value: "$66.00 to $66.99" },
    { label: "$65.00 to $65.99", value: "$65.00 to $65.99" },
    { label: "$64.00 to $64.99", value: "$64.00 to $64.99" },
    { label: "$63.00 to $63.99", value: "$63.00 to $63.99" },
    { label: "$62.00 to $62.99", value: "$62.00 to $62.99" },
    { label: "$61.00 to $61.99", value: "$61.00 to $61.99" },
    { label: "$60.00 to $60.99", value: "$60.00 to $60.99" },
    { label: "$59.00 to $59.99", value: "$59.00 to $59.99" },
    { label: "$58.00 to $58.99", value: "$58.00 to $58.99" },
    { label: "$57.00 to $57.99", value: "$57.00 to $57.99" },
    { label: "$56.00 to $56.99", value: "$56.00 to $56.99" },
    { label: "$55.00 to $55.99", value: "$55.00 to $55.99" },
    { label: "$54.00 to $54.99", value: "$54.00 to $54.99" },
    { label: "$53.00 to $53.99", value: "$53.00 to $53.99" },
    { label: "$52.00 to $52.99", value: "$52.00 to $52.99" },
    { label: "$51.00 to $51.99", value: "$51.00 to $51.99" },
    { label: "$50.00 to $50.99", value: "$50.00 to $50.99" },
    { label: "$49.00 to $49.99", value: "$49.00 to $49.99" },
    { label: "$48.00 to $48.99", value: "$48.00 to $48.99" },
    { label: "$47.00 to $47.99", value: "$47.00 to $47.99" },
    { label: "$46.00 to $46.99", value: "$46.00 to $46.99" },
    { label: "$45.00 to $45.99", value: "$45.00 to $45.99" },
    { label: "$44.00 to $44.99", value: "$44.00 to $44.99" },
    { label: "$43.00 to $43.99", value: "$43.00 to $43.99" },
    { label: "$42.00 to $42.99", value: "$42.00 to $42.99" },
    { label: "$41.00 to $41.99", value: "$41.00 to $41.99" },
    { label: "$40.00 to $40.99", value: "$40.00 to $40.99" },
    { label: "$39.00 to $39.99", value: "$39.00 to $39.99" },
    { label: "$38.00 to $38.99", value: "$38.00 to $38.99" },
    { label: "$37.00 to $37.99", value: "$37.00 to $37.99" },
    { label: "$36.00 to $36.99", value: "$36.00 to $36.99" },
    { label: "$35.00 to $35.99", value: "$35.00 to $35.99" },
    { label: "$34.00 to $34.99", value: "$34.00 to $34.99" },
    { label: "$33.00 to $33.99", value: "$33.00 to $33.99" },
    { label: "$32.00 to $32.99", value: "$32.00 to $32.99" },
    { label: "$31.00 to $31.99", value: "$31.00 to $31.99" },
    { label: "$30.00 to $30.99", value: "$30.00 to $30.99" },
    { label: "$29.00 to $29.99", value: "$29.00 to $29.99" },
    { label: "$28.00 to $28.99", value: "$28.00 to $28.99" },
    { label: "$27.00 to $27.99", value: "$27.00 to $27.99" },
    { label: "$26.00 to $26.99", value: "$26.00 to $26.99" },
    { label: "$25.00 to $25.99", value: "$25.00 to $25.99" },
    { label: "$24.00 to $24.99", value: "$24.00 to $24.99" },
    { label: "$23.00 to $23.99", value: "$23.00 to $23.99" },
    { label: "$22.00 to $22.99", value: "$22.00 to $22.99" },
    { label: "$21.00 to $21.99", value: "$21.00 to $21.99" },
    { label: "$20.00 to $20.99", value: "$20.00 to $20.99" },
    { label: "$19.00 to $19.99", value: "$19.00 to $19.99" },
    { label: "$18.00 to $18.99", value: "$18.00 to $18.99" },
    { label: "$17.00 to $17.99", value: "$17.00 to $17.99" },
    { label: "$16.00 to $16.99", value: "$16.00 to $16.99" },
    { label: "Less than $16.00", value: "Less than $16.00" },
  ];

  const calculateScore = () => {
    let total = 0;

    if (formData.designation === "yes") total += 5;
    if (formData.frenchTest === "yes") total += 5;
    if (parseFloat(formData.wage) >= 25) total += 10;

    if (formData.area === "area2") total += 10;
    else if (formData.area === "area3") total += 15;

    if (formData.employmentOutside === "yes") total += 10;
    if (formData.educationOutside === "yes") total += 8;

    total += parseInt(formData.clb);

    // New scoring logic (example points, adjust as needed)
    switch (formData.experienceYears) {
      case "5+":
        total += 15;
        break;
      case "4-5":
        total += 12;
        break;
      case "3-4":
        total += 9;
        break;
      case "2-3":
        total += 6;
        break;
      case "1-2":
        total += 3;
        break;
      case "less1":
        total += 1;
        break;
      default:
        break;
    }

    if (formData.experienceInCanada === "yes") total += 10;
    if (formData.currentlyWorking === "yes") total += 10;

    switch (formData.educationLevel) {
      case "doctoral":
        total += 17;
        break;
      case "masters":
        total += 15;
        break;
      case "postgrad":
        total += 13;
        break;
      case "bachelors":
        total += 11;
        break;
      case "associate":
        total += 9;
        break;
      case "diploma":
        total += 7;
        break;
      case "highschool":
        total += 5;
        break;
      default:
        break;
    }

    if (formData.educationInCanada === "yes") total += 5;

    setScore(total);
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
    });
    setScore(0);
  };

  useEffect(() => {
    calculateScore();
  }, [formData]);

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
              <option value="5+">5 or more years</option>
              <option value="4-5">At least 4 but less than 5 years</option>
              <option value="3-4">At least 3 but less than 4 years</option>
              <option value="2-3">At least 2 but less than 3 years</option>
              <option value="1-2">At least 1 but less than 2 years</option>
              <option value="less1">Less than 1 year</option>
              <option value="none">None</option>
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
                  value="yes"
                  onChange={(e) =>
                    handleChange("experienceInCanada", e.target.value)
                  }
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="experienceInCanada"
                  value="no"
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
                  value="yes"
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
                  value="no"
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
              <option value="doctoral">Doctoral Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="postgrad">
                Post-Graduate Certificate or Diploma
              </option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="associate">Associate Degree</option>
              <option value="diploma">
                Post-secondary diploma/certificate
              </option>
              <option value="highschool">Secondary School or less</option>
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
                  name="educationInCanada"
                  value="yes"
                  onChange={(e) =>
                    handleChange("educationInCanada", e.target.value)
                  }
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="educationInCanada"
                  value="no"
                  onChange={(e) =>
                    handleChange("educationInCanada", e.target.value)
                  }
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Do you have Eligible Professional Designation in B.C.?
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="designation"
                  value="yes"
                  onChange={(e) => handleChange("designation", e.target.value)}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="designation"
                  value="no"
                  onChange={(e) => handleChange("designation", e.target.value)}
                />{" "}
                No
              </label>
            </div>
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
                  onChange={(e) => handleChange("frenchTest", e.target.value)}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="frenchTest"
                  value="no"
                  onChange={(e) => handleChange("frenchTest", e.target.value)}
                />{" "}
                No
              </label>
            </div>
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
                <input type="radio" name="emp" />
                <label>
                  Area 1: Metro Vancouver Regional District Richmond, Surrey,
                  Coquitlam, Burnaby, Delta, City Of Langley, Township Of
                  Langley, Maple Ridge, New Westminster, Tsawwassen, Pitt
                  Meadows, North Vancouver, Belcarra, Anmore, Bowen Island,
                  Lions Bay, Port Moody, Vanvouver, West Vancouver, White Rock
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input type="radio" name="emp" />
                <label>
                  Area 2: Squamish, Abbotsford, Agassiz, Mission, And Chilliwack
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input type="radio" name="emp" />
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
                  value="yes"
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
                  value="no"
                  onChange={(e) =>
                    handleChange("employmentOutside", e.target.value)
                  }
                />{" "}
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
                  value="yes"
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
                  value="no"
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
              <option value="9">9+</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
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
