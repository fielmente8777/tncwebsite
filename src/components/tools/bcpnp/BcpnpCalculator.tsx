"use client";

import { useMemo, useState } from "react";
import ToolHeading from "@/components/tools/shared/ToolHeading";
import ToolCard from "@/components/tools/shared/ToolCard";
import SelectField from "@/components/tools/shared/SelectField";
import CheckOption from "@/components/tools/shared/CheckOption";
import ScorePanel from "@/components/tools/shared/ScorePanel";
import ConsultationCTA from "@/components/tools/shared/ConsultationCTA";
import DisclaimerNote from "@/components/tools/shared/DisclaimerNote";
import type { BreakdownItem, LeadAnswer, PointOption } from "@/@types/tools";
import {
  AREA_DEFAULT,
  AREA_OPTIONS,
  BCPNP_MAX,
  DESIGNATION_OPTIONS,
  EDUCATION_DEFAULT,
  EDUCATION_LOCATION_DEFAULT,
  EDUCATION_LOCATION_OPTIONS,
  EDUCATION_OPTIONS,
  EXPERIENCE_DEFAULT,
  EXPERIENCE_OPTIONS,
  LANGUAGE_DEFAULT,
  LANGUAGE_OPTIONS,
  REGIONAL_BONUS_CAP,
  SECTION_MAX,
  WAGE_DEFAULT,
  WAGE_OPTIONS,
} from "./bcpnpData";
import { Container } from "@/components/sectionComponents";

function pick<T extends PointOption>(options: T[], index: string): T {
  return options[Number(index)] ?? options[options.length - 1];
}

const BcpnpCalculator = () => {
  const [experience, setExperience] = useState(EXPERIENCE_DEFAULT);
  const [canadianExperience, setCanadianExperience] = useState(false);
  const [workingInBc, setWorkingInBc] = useState(false);

  const [education, setEducation] = useState(EDUCATION_DEFAULT);
  const [educationLocation, setEducationLocation] = useState(EDUCATION_LOCATION_DEFAULT);
  const [hasDesignation, setHasDesignation] = useState(false);
  const [designation, setDesignation] = useState("");

  const [english, setEnglish] = useState(LANGUAGE_DEFAULT);
  const [french, setFrench] = useState(LANGUAGE_DEFAULT);

  const [wage, setWage] = useState(WAGE_DEFAULT);

  const [area, setArea] = useState(AREA_DEFAULT);
  const [regionalWork, setRegionalWork] = useState(false);
  const [regionalGraduate, setRegionalGraduate] = useState(false);

  const educationOption = pick(EDUCATION_OPTIONS, education);
  const isPostSecondary = educationOption.postSecondary;
  const experienceBase = pick(EXPERIENCE_OPTIONS, experience).points;
  const canadianExperienceAvailable = experienceBase > 0;

  const englishOption = pick(LANGUAGE_OPTIONS, english);
  const frenchOption = pick(LANGUAGE_OPTIONS, french);
  const bothLanguages = englishOption.clb >= 4 && frenchOption.clb >= 4;

  const score = useMemo(() => {
    const canadianBonus = canadianExperienceAvailable && canadianExperience ? 10 : 0;
    const experiencePoints = Math.min(
      experienceBase + canadianBonus + (workingInBc ? 10 : 0),
      SECTION_MAX.experience
    );

    const locationPoints = isPostSecondary
      ? pick(EDUCATION_LOCATION_OPTIONS, educationLocation).points
      : 0;
    const educationPoints = Math.min(
      educationOption.points + locationPoints + (hasDesignation ? 5 : 0),
      SECTION_MAX.education
    );

    const languagePoints = Math.min(
      Math.max(englishOption.points, frenchOption.points) + (bothLanguages ? 10 : 0),
      SECTION_MAX.language
    );

    const wagePoints = pick(WAGE_OPTIONS, wage).points;

    const regionalBonus = Math.min(
      (regionalWork ? 10 : 0) + (regionalGraduate ? 10 : 0),
      REGIONAL_BONUS_CAP
    );
    const areaPoints = Math.min(
      pick(AREA_OPTIONS, area).points + regionalBonus,
      SECTION_MAX.area
    );

    return {
      experience: experiencePoints,
      education: educationPoints,
      language: languagePoints,
      wage: wagePoints,
      area: areaPoints,
      total: experiencePoints + educationPoints + languagePoints + wagePoints + areaPoints,
    };
  }, [
    area,
    bothLanguages,
    canadianExperience,
    canadianExperienceAvailable,
    education,
    educationLocation,
    educationOption.points,
    englishOption.points,
    experienceBase,
    frenchOption.points,
    hasDesignation,
    isPostSecondary,
    regionalGraduate,
    regionalWork,
    wage,
    workingInBc,
  ]);

  const breakdown: BreakdownItem[] = [
    { label: "Work experience", points: score.experience, max: SECTION_MAX.experience },
    { label: "Education", points: score.education, max: SECTION_MAX.education },
    { label: "Language", points: score.language, max: SECTION_MAX.language },
    { label: "Hourly wage", points: score.wage, max: SECTION_MAX.wage },
    { label: "Area of employment", points: score.area, max: SECTION_MAX.area },
  ];

  const answers: LeadAnswer[] = [
    { label: "Directly related work experience", value: pick(EXPERIENCE_OPTIONS, experience).label },
    {
      label: "1+ year of that experience in Canada",
      value: canadianExperienceAvailable && canadianExperience ? "yes" : "no",
    },
    { label: "Currently working full-time in B.C. for the employer", value: workingInBc ? "yes" : "no" },
    { label: "Highest level of education", value: educationOption.label },
    {
      label: "Where post-secondary education was completed",
      value: isPostSecondary
        ? pick(EDUCATION_LOCATION_OPTIONS, educationLocation).label
        : "not applicable",
    },
    {
      label: "Eligible professional designation",
      value: hasDesignation ? designation || "yes, occupation not specified" : "no",
    },
    { label: "English test result", value: englishOption.label },
    { label: "French test result", value: frenchOption.label },
    { label: "Hourly wage of the B.C. job offer", value: pick(WAGE_OPTIONS, wage).label },
    { label: "Area of employment", value: pick(AREA_OPTIONS, area).label },
    { label: "1+ year of paid employment outside Area 1", value: regionalWork ? "yes" : "no" },
    { label: "Graduated outside Area 1 within 3 years", value: regionalGraduate ? "yes" : "no" },
  ];

  return (
    <div className="bg-[var(--tnc-bg)] px-0 pb-16 pt-12 text-[var(--tnc-ink)]">
      <Container className="py-[20px]">
        <ToolHeading title="BCPNP" accent="Calculator" />

        <div className="grid items-start gap-7 lg:grid-cols-[1fr_340px]">
          <div>
            <ToolCard
              title="Directly Related Work Experience"
              maxLabel="Max 40 points"
              subtitle="Full-time or part-time experience in the occupation of your B.C. job offer, obtained in the last 10 years, in Canada or abroad."
            >
              <SelectField
                label="Years of directly related work experience"
                value={experience}
                onChange={setExperience}
                options={EXPERIENCE_OPTIONS}
                className="mb-3.5"
              />
              <CheckOption
                label="You have at least 1 year of directly related work experience in Canada"
                points="+10"
                disabled={!canadianExperienceAvailable}
                checked={canadianExperienceAvailable && canadianExperience}
                onChange={setCanadianExperience}
              />
              <CheckOption
                label="You are currently working full-time in B.C. for the employer in the occupation identified in your BC PNP registration"
                points="+10"
                checked={workingInBc}
                onChange={setWorkingInBc}
              />
            </ToolCard>

            <ToolCard
              title="Highest Level of Education"
              maxLabel="Max 40 points"
              subtitle="Foreign credentials must be assessed as equivalent to a Canadian credential."
            >
              <SelectField
                label="Highest completed level of education"
                value={education}
                onChange={setEducation}
                options={EDUCATION_OPTIONS}
                className="mb-3.5"
              />

              {isPostSecondary ? (
                <SelectField
                  label="Where did you complete your post-secondary education?"
                  value={educationLocation}
                  onChange={setEducationLocation}
                  options={EDUCATION_LOCATION_OPTIONS}
                  className="mb-3.5"
                />
              ) : null}

              <CheckOption
                label="Your B.C. job offer is in an occupation with an eligible professional designation in B.C."
                points="+5"
                checked={hasDesignation}
                onChange={(checked) => {
                  setHasDesignation(checked);
                  if (!checked) setDesignation("");
                }}
              />

              {hasDesignation ? (
                <div className="mt-3.5">
                  <label
                    htmlFor="bcpnp-designation"
                    className="mb-1.5 block text-[13px] font-semibold text-[var(--tnc-ink)]"
                  >
                    Select your eligible professional designation
                  </label>
                  <select
                    id="bcpnp-designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="tnc-select w-full cursor-pointer appearance-none rounded-[10px] border-[1.5px] border-[var(--tnc-line)] bg-white px-3.5 py-3 pr-10 text-[14px] text-[var(--tnc-ink)] outline-none focus:border-[var(--tnc-red)] focus:shadow-[0_0_0_3px_rgba(200,16,46,0.12)]"
                  >
                    <option value="">Select an occupation</option>
                    {DESIGNATION_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}
            </ToolCard>

            <ToolCard
              title="Language Proficiency"
              maxLabel="Max 40 points"
              subtitle="Use your lowest Canadian Language Benchmark (CLB) across listening, speaking, reading and writing. Points come from your stronger language, plus 10 for CLB 4 or higher in both."
            >
              <div className="grid gap-3.5 sm:grid-cols-2">
                <SelectField
                  label="English test result"
                  value={english}
                  onChange={setEnglish}
                  options={LANGUAGE_OPTIONS}
                />
                <SelectField
                  label="French test result"
                  value={french}
                  onChange={setFrench}
                  options={LANGUAGE_OPTIONS}
                />
              </div>
              {bothLanguages ? (
                <p className="mt-3.5 rounded-[10px] border border-[rgba(14,124,74,0.25)] bg-[rgba(14,124,74,0.07)] px-3.5 py-3 text-[13px] leading-[1.5] text-[var(--tnc-green)]">
                  You scored CLB 4 or higher in both English and French, so 10 bonus points
                  are included.
                </p>
              ) : null}
            </ToolCard>

            <ToolCard
              title="Wage of the B.C. Job Offer"
              maxLabel="Max 55 points"
              subtitle="The hourly wage stated in your B.C. job offer. This is the single largest factor in your score."
            >
              <SelectField
                label="Hourly wage"
                value={wage}
                onChange={setWage}
                options={WAGE_OPTIONS}
              />
            </ToolCard>

            <ToolCard
              title="Area of Employment in B.C."
              maxLabel="Max 25 points"
              subtitle="Where your main workplace is located, plus regional bonus points. The two bonuses below are capped at 10 points in total."
            >
              <SelectField
                label="Area where your main workplace is located"
                value={area}
                onChange={setArea}
                options={AREA_OPTIONS}
                className="mb-3.5"
              />
              <CheckOption
                label="You completed at least 1 year of full-time paid employment outside Area 1 within the 5 years before registering with the BC PNP"
                points="+10"
                checked={regionalWork}
                onChange={setRegionalWork}
              />
              <CheckOption
                label="You graduated from a public B.C. post-secondary institution outside Area 1 while living outside Area 1, within the 3 years before registering"
                points="+10"
                checked={regionalGraduate}
                onChange={setRegionalGraduate}
              />
            </ToolCard>
          </div>

          <aside className="lg:sticky lg:top-6">
            <ScorePanel
              label="Your BC PNP Score"
              score={score.total}
              max={BCPNP_MAX}
              caption={<>out of {BCPNP_MAX} &nbsp;•&nbsp; Skills Immigration</>}
              barTicks={["0", "100", String(BCPNP_MAX)]}
              verdict={`Estimated score ${score.total} of ${BCPNP_MAX}. The BC PNP has no fixed pass mark. Cut-off scores change with every draw and differ by category.`}
              breakdown={breakdown}
            />

            <ConsultationCTA
              tool="bcpnp"
              source="BC PNP Calculator"
              result={`BC PNP score ${score.total} / ${BCPNP_MAX}`}
              answers={answers}
              heading="Get a plan for these points"
              body="Professionals at TNC will review your registration, check your wage and area scores against recent BC PNP draws, and map the fastest route to an invitation."
              leadNote="A TNC representative will call you back with your score, your full point breakdown and the gaps we can close."
            />
          </aside>
        </div>

        <DisclaimerNote>
          <p>
            <strong>Please note:</strong> This calculator gives an average estimated score
            for general guidance only. Results could vary as the BC PNP updates its criteria
            and point values. Do not take any decision directly based on this calculator.
            Always consult a Regulated Canadian Immigration Consultant (RCIC) first to
            assess your eligibility.
          </p>
        </DisclaimerNote>
      </Container>
    </div>
  );
};

export default BcpnpCalculator;
