"use client";

import { useMemo, useState } from "react";
import Container from "@/components/sectionComponents/Container";
import ToolHeading from "@/components/tools/shared/ToolHeading";
import ToolCard from "@/components/tools/shared/ToolCard";
import SelectField from "@/components/tools/shared/SelectField";
import CheckOption from "@/components/tools/shared/CheckOption";
import ScorePanel from "@/components/tools/shared/ScorePanel";
import ConsultationCTA from "@/components/tools/shared/ConsultationCTA";
import DisclaimerNote from "@/components/tools/shared/DisclaimerNote";
import type { BreakdownItem, LeadAnswer, PointOption } from "@/@types/tools";
import {
  ADAPTABILITY_ITEMS,
  ADAPTABILITY_MAX,
  AGE_DEFAULT,
  AGE_OPTIONS,
  EDUCATION_DEFAULT,
  EDUCATION_OPTIONS,
  EXPERIENCE_DEFAULT,
  EXPERIENCE_OPTIONS,
  FIRST_LANGUAGE_OPTIONS,
  FSW_MAX,
  FSW_PASS_MARK,
  JOB_OFFER_DEFAULT,
  JOB_OFFER_OPTIONS,
  LANGUAGE_ABILITIES,
  SECOND_LANGUAGE_DEFAULT,
  SECOND_LANGUAGE_OPTIONS,
  type LanguageAbility,
} from "./fswData";

type LanguageState = Record<LanguageAbility, string>;

const INITIAL_LANGUAGE: LanguageState = {
  Speaking: "0",
  Listening: "0",
  Reading: "0",
  Writing: "0",
};

function pick(options: PointOption[], index: string): PointOption {
  return options[Number(index)] ?? { points: 0, label: "" };
}

const FswCalculator = () => {
  const [age, setAge] = useState(AGE_DEFAULT);
  const [education, setEducation] = useState(EDUCATION_DEFAULT);
  const [firstLanguage, setFirstLanguage] = useState<LanguageState>(INITIAL_LANGUAGE);
  const [secondLanguage, setSecondLanguage] = useState(SECOND_LANGUAGE_DEFAULT);
  const [experience, setExperience] = useState(EXPERIENCE_DEFAULT);
  const [jobOffer, setJobOffer] = useState(JOB_OFFER_DEFAULT);
  const [adaptability, setAdaptability] = useState<Record<string, boolean>>({});

  const jobPoints = pick(JOB_OFFER_OPTIONS, jobOffer).points;
  const hasJobOffer = jobPoints === 10;

  const score = useMemo(() => {
    let firstLanguagePoints = 0;
    let ineligible = false;

    for (const ability of LANGUAGE_ABILITIES) {
      const points = pick(FIRST_LANGUAGE_OPTIONS, firstLanguage[ability]).points;
      if (points < 0) ineligible = true;
      else firstLanguagePoints += points;
    }

    const secondLanguagePoints = pick(SECOND_LANGUAGE_OPTIONS, secondLanguage).points;
    const language = firstLanguagePoints + secondLanguagePoints;
    const educationPoints = pick(EDUCATION_OPTIONS, education).points;
    const experiencePoints = pick(EXPERIENCE_OPTIONS, experience).points;
    const agePoints = pick(AGE_OPTIONS, age).points;

    const adaptabilityPoints = Math.min(
      ADAPTABILITY_ITEMS.reduce((sum, item) => {
        if (item.requiresJobOffer && !hasJobOffer) return sum;
        return adaptability[item.id] ? sum + item.points : sum;
      }, 0),
      ADAPTABILITY_MAX
    );

    const total =
      language + educationPoints + experiencePoints + agePoints + jobPoints + adaptabilityPoints;

    return {
      language,
      education: educationPoints,
      experience: experiencePoints,
      age: agePoints,
      job: jobPoints,
      adaptability: adaptabilityPoints,
      total,
      ineligible,
    };
  }, [
    adaptability,
    age,
    education,
    experience,
    firstLanguage,
    hasJobOffer,
    jobPoints,
    secondLanguage,
  ]);

  const breakdown: BreakdownItem[] = [
    { label: "Language skills", points: score.language },
    { label: "Education", points: score.education },
    { label: "Work experience", points: score.experience },
    { label: "Age", points: score.age },
    { label: "Arranged employment", points: score.job },
    { label: "Adaptability", points: score.adaptability },
  ];

  const gap = FSW_PASS_MARK - score.total;
  let verdict: string;
  let verdictTone: "pass" | "fail";

  if (score.ineligible) {
    verdict = "Not eligible: CLB 7 is the minimum in all four first-language abilities.";
    verdictTone = "fail";
  } else if (score.total >= FSW_PASS_MARK) {
    verdict =
      "You meet the 67-point pass mark. You may qualify for the Federal Skilled Worker Program.";
    verdictTone = "pass";
  } else {
    verdict = `You are ${gap} point${gap === 1 ? "" : "s"} below the 67-point pass mark.`;
    verdictTone = "fail";
  }

  const answers: LeadAnswer[] = [
    { label: "Age", value: pick(AGE_OPTIONS, age).label },
    { label: "Education", value: pick(EDUCATION_OPTIONS, education).label },
    ...LANGUAGE_ABILITIES.map((ability) => ({
      label: `First official language — ${ability}`,
      value: pick(FIRST_LANGUAGE_OPTIONS, firstLanguage[ability]).label,
    })),
    {
      label: "Second official language",
      value: pick(SECOND_LANGUAGE_OPTIONS, secondLanguage).label,
    },
    { label: "Skilled work experience", value: pick(EXPERIENCE_OPTIONS, experience).label },
    { label: "Arranged employment", value: pick(JOB_OFFER_OPTIONS, jobOffer).label },
    {
      label: "Adaptability",
      value:
        ADAPTABILITY_ITEMS.filter(
          (item) =>
            adaptability[item.id] && (!item.requiresJobOffer || hasJobOffer)
        )
          .map((item) => item.label)
          .join("; ") || "none selected",
    },
  ];

  const setAbility = (ability: LanguageAbility, value: string) =>
    setFirstLanguage((prev) => ({ ...prev, [ability]: value }));

  return (
    <div className="bg-[var(--tnc-bg)] px-0 pb-16 pt-12 text-[var(--tnc-ink)]">
      <Container className="py-[20px]">
        <ToolHeading title="FSW" accent="Calculator" />

        <div className="grid items-start gap-7 lg:grid-cols-[1fr_340px]">
          {/* LEFT: factors */}
          <div>
            <ToolCard
              title="Age"
              maxLabel="Max 12 points"
              subtitle="Your age on the day IRCC receives your application."
            >
              <SelectField value={age} onChange={setAge} options={AGE_OPTIONS} />
            </ToolCard>

            <ToolCard
              title="Education"
              maxLabel="Max 25 points"
              subtitle="Foreign credentials must be supported by an Educational Credential Assessment (ECA)."
            >
              <SelectField
                value={education}
                onChange={setEducation}
                options={EDUCATION_OPTIONS}
              />
            </ToolCard>

            <ToolCard
              title="First Official Language"
              maxLabel="Max 24 points"
              subtitle="Your CLB level in each ability, based on an approved English or French test."
            >
              <div className="grid gap-3.5 sm:grid-cols-2">
                {LANGUAGE_ABILITIES.map((ability) => (
                  <SelectField
                    key={ability}
                    label={ability}
                    value={firstLanguage[ability]}
                    onChange={(value) => setAbility(ability, value)}
                    options={FIRST_LANGUAGE_OPTIONS}
                  />
                ))}
              </div>
              {score.ineligible ? (
                <p className="mt-3.5 rounded-[10px] border border-[rgba(200,16,46,0.25)] bg-[rgba(200,16,46,0.07)] px-3.5 py-3 text-[13px] leading-[1.5] text-[var(--tnc-red-dark)]">
                  You need a minimum of CLB 7 in all four abilities of your first official
                  language to be eligible for the Federal Skilled Worker Program.
                </p>
              ) : null}
            </ToolCard>

            <ToolCard
              title="Second Official Language"
              maxLabel="Max 4 points"
              subtitle="You get 4 points only if you score at least CLB 5 in all four abilities of your second official language."
            >
              <SelectField
                value={secondLanguage}
                onChange={setSecondLanguage}
                options={SECOND_LANGUAGE_OPTIONS}
              />
            </ToolCard>

            <ToolCard
              title="Skilled Work Experience"
              maxLabel="Max 15 points"
              subtitle="Paid, full-time (or equivalent part-time) experience in a TEER 0, 1, 2 or 3 occupation, in Canada or abroad."
            >
              <SelectField
                value={experience}
                onChange={setExperience}
                options={EXPERIENCE_OPTIONS}
              />
            </ToolCard>

            <ToolCard
              title="Arranged Employment in Canada"
              maxLabel="Max 10 points"
              subtitle="A valid job offer of at least 1 year of continuous, paid, full-time work in a TEER 0, 1, 2 or 3 occupation from a Canadian employer."
            >
              <SelectField
                value={jobOffer}
                onChange={setJobOffer}
                options={JOB_OFFER_OPTIONS}
              />
            </ToolCard>

            <ToolCard
              title="Adaptability"
              maxLabel="Max 10 points"
              subtitle="Select everything that applies to you and your spouse or common-law partner. Points are capped at 10."
            >
              {ADAPTABILITY_ITEMS.map((item) => {
                const disabled = Boolean(item.requiresJobOffer) && !hasJobOffer;
                return (
                  <CheckOption
                    key={item.id}
                    label={item.label}
                    points={`+${item.points}`}
                    disabled={disabled}
                    checked={!disabled && Boolean(adaptability[item.id])}
                    onChange={(checked) =>
                      setAdaptability((prev) => ({ ...prev, [item.id]: checked }))
                    }
                  />
                );
              })}
            </ToolCard>
          </div>

          {/* RIGHT: score */}
          <aside className="lg:sticky lg:top-6">
            <ScorePanel
              label="Your FSW Score"
              score={score.total}
              max={FSW_MAX}
              caption={
                <>
                  out of {FSW_MAX} &nbsp;•&nbsp; pass mark {FSW_PASS_MARK}
                </>
              }
              markPercent={FSW_PASS_MARK}
              barTicks={["0", String(FSW_PASS_MARK), String(FSW_MAX)]}
              verdict={verdict}
              verdictTone={score.ineligible ? "fail" : verdictTone}
              breakdown={breakdown}
            />

            <ConsultationCTA
              tool="fsw"
              source="FSW Calculator"
              result={`FSW score ${score.total} / ${FSW_MAX}`}
              answers={answers}
              heading="Get a plan for these points"
              body="Professionals at TNC will review your profile, confirm your NOC and ECA, and map the fastest route to a score that clears the 67-point pass mark."
              leadNote="A TNC representative will call you back with your score, your full point breakdown and the gaps we can close."
            />
          </aside>
        </div>

        <DisclaimerNote>
          <p>
            <strong>Please note:</strong> This calculator is for general guidance only.
            Results could vary as IRCC updates its programs, criteria and point values. Do
            not take any decision directly based on this calculator. Always consult a
            Regulated Canadian Immigration Consultant (RCIC) first to assess your
            eligibility.
          </p>
        </DisclaimerNote>
      </Container>
    </div>
  );
};

export default FswCalculator;
