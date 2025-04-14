"use client";
import { SectionWithContainer } from "@/components";
import React, { useEffect, useState } from "react";
const FSWCalculator = () => {
  const [formData, setFormData] = useState({
    education: "",
    reading: "",
    writing: "",
    listening: "",
    speaking: "",
    experience: "",
    age: "",
    adaptability: [],
  });

  const [score, setScore] = useState(0);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdaptabilityChange = (value) => {
    setFormData((prev) => {
      const updated = prev.adaptability.includes(value)
        ? prev.adaptability.filter((v) => v !== value)
        : [...prev.adaptability, value];
      return { ...prev, adaptability: updated };
    });
  };

  const calculateScore = () => {
    let total = 0;

    // Education (max 25 points)
    const educationPoints = {
      doctoral: 25,
      masters: 23,
      bachelor3: 22,
      licensed: 22,
      twoDiplomas: 22,
      oneDiploma3: 21,
      twoYearDiploma: 19,
      oneYearDiploma: 15,
      highSchool: 5,
    };
    total += educationPoints[formData.education] || 0;

    // English Skills (max 24 points)
    const langPoints =
      scoreLangSkill(formData.reading) +
      scoreLangSkill(formData.writing) +
      scoreLangSkill(formData.listening) +
      scoreLangSkill(formData.speaking);
    total += langPoints;

    // Experience (max 15 points)
    const experiencePoints = {
      1: 9,
      "2-3": 11,
      "4-5": 13,
      "6+": 15,
    };
    total += experiencePoints[formData.experience] || 0;

    // Age (max 12 points)
    const agePoints = {
      "18-35": 12,
      36: 11,
      37: 10,
      38: 9,
      39: 8,
      40: 7,
      41: 6,
      42: 5,
      43: 4,
      44: 3,
      45: 2,
      46: 1,
    };
    total += agePoints[formData.age] || 0;

    // Adaptability (max 10 points)
    total += formData.adaptability.length * 5;

    setScore(total);
  };

  const scoreLangSkill = (score) => {
    if (score === "8") return 6;
    if (score === "7.5") return 5;
    if (score === "7") return 4;
    if (score === "6.5") return 3;
    if (score === "6") return 2;
    return 0;
  };

  const resetForm = () => {
    setFormData({
      education: "",
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
      experience: "",
      age: "",
      adaptability: [],
    });
    setScore(0);
  };

  const Scores = [
    { subject: "Reading", marks: [8, 7, 6.5, 6] },
    { subject: "Writing", marks: [7.5, 7, 6.5, 6] },
    { subject: "Listening", marks: [8.5, 8, 7.5, 6] },
    { subject: "Speaking", marks: [7.5, 7, 6.5, 6] },
  ];

  useEffect(() => {
    calculateScore();
  }, [formData]);
  return (
    <SectionWithContainer>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">CRS Points Calculator</h1>
        <hr className="h-px border-b-2 border-gray-400/50 mt-10" />

        <div className="space-y-4 mt-5">
          {/* EDUCATION */}
          <div>
            <h2 className="font-semibold">Education (Maximum 25 points)</h2>
            <div className="space-y-1 px-3">
              {[
                {
                  label:
                    "University degree at the Doctoral (PhD) level or equal",
                  value: 25,
                },
                {
                  label: "University degree at the Master's level or equal",
                  value: 23,
                },
                { label: "Bachelors degree three or more years", value: 21 },
                {
                  label:
                    "Professionals degree needed to practice in licensed profession",
                  value: 23,
                },
                {
                  label:
                    "Two or more Canadian post-secondary degrees or diplomas or equal (at least one must be for a program of at least three years)",
                  value: 22,
                },
                {
                  label:
                    "Canadian post-secondary degree or diploma for a program of three years or longer, or equal",
                  value: 21,
                },
                {
                  label:
                    "Canadian post-secondary degree or diploma for a two-year program, or equal",
                  value: 19,
                },
                {
                  label:
                    "Canadian post-secondary degree or diploma for a one-year program, or equal",
                  value: 15,
                },
                { label: "Canadian high school diploma, or equal", value: 5 },
              ].map((opt) => (
                <label key={opt.value} className="block">
                  <input
                    type="radio"
                    name="education"
                    value={opt.value}
                    onChange={(e) => handleChange("education", e.target.value)}
                  />{" "}
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* ENGLISH SKILLS */}
          <div>
            <h2 className="font-semibold">
              English Skills (Maximum 24 points)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-5">
              {Scores.map((skill) => (
                <div key={skill} className="flex flex-col">
                  <label className="capitalize block font-medium">
                    {skill?.subject}
                  </label>
                  {skill?.marks.map((level) => (
                    <label key={level} className="ml-3">
                      <input
                        type="radio"
                        name={skill}
                        value={level}
                        onChange={(e) => handleChange(skill, e.target.value)}
                      />{" "}
                      {level}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="font-semibold mt-2">
              Experience (Maximum 15 points)
            </h2>
            <select
              className="w-full border p-2 rounded"
              value={formData.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            >
              <option value="">Select Experience</option>
              <option value="1">1 year</option>
              <option value="2-3">2-3 years</option>
              <option value="4-5">4-5 years</option>
              <option value="6+">6 or more years</option>
            </select>
          </div>

          {/* AGE */}
          <div>
            <h2 className="font-semibold mt-2">Age (Maximum 12 points)</h2>
            <select
              className="w-full border p-2 rounded"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
            >
              <option value="">Select Age</option>
              {[
                "18-35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47 and Older",
              ].map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* ADAPTABILITY */}
          <div>
            <h2 className="font-semibold mt-2">
              Adaptability (Maximum 10 points)
            </h2>
            <div className="space-y-1 px-3">
              {[
                "Your spouse or common-law partner has a language level in either English or French at CLB 4 level or higher in all 4 language abilities (speaking, listening, reading and writing).",
                "You completed at least 2 academic years of full-time study (in a program at least 2 years long) at a secondary or post-secondary school in Canada.",
                "Your spouse or common-law partner completed at least 2 academic years of full-time study (in a program at least 2 years long) at a secondary or post-secondary school in Canada.",
                "You did at least 1 year of full-time work in Canada:In a job listed in Skill Type 0 or Skill Levels A or B of the National Occupational Classification (NOC) and, with a valid work permit, or while authorized to work in Canada.",
                "Your spouse or partner did at least 1 year of full-time work in Canada on a valid work permit or while authorized to work in Canada.",
                "You have an Arranged employment in Canada?",
                "You, or your spouse or common-law partner, have a relative who is living in Canada,18 years or older and, a Canadian citizen or permanent resident.This relative must be a:- Parent,Grandparent,Child,Grandchild,Your or your spouse's sibling (child of your or your spouse's parent),your or your spouse's aunt or uncle (by blood or marriage),Your or your spouse's niece or nephew (grandchild of your or your spouse's parent)",
              ].map((item, idx) => (
                <div className="flex gap-1 items-start">
                  <input
                    type="checkbox"
                    value={idx}
                    onChange={() => handleAdaptabilityChange(idx)}
                    className="mt-2"
                  />{" "}
                  <label key={idx} className="block">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="font-semibold mt-2">
              ARRANGE EMPLOYEMT(MAXIMUM 10 POINTS):
            </h2>

            <div className="space-y-2">
              <div className="flex gap-1">
                <input type="radio" name="arrange" />
                <label htmlFor="">Yes</label>
              </div>

              <div className="flex gap-1">
                <input type="radio" name="arrange" />
                <label htmlFor="">No</label>
              </div>
            </div>
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

export default FSWCalculator;
