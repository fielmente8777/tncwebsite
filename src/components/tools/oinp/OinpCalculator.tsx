"use client";

import { useMemo, useState } from "react";
import ToolHeading from "@/components/tools/shared/ToolHeading";
import ToolCard from "@/components/tools/shared/ToolCard";
import SelectField from "@/components/tools/shared/SelectField";
import RadioOption from "@/components/tools/shared/RadioOption";
import ScorePanel from "@/components/tools/shared/ScorePanel";
import ConsultationCTA from "@/components/tools/shared/ConsultationCTA";
import DisclaimerNote from "@/components/tools/shared/DisclaimerNote";
import OccupationSearch, { type OccupationPick } from "./OccupationSearch";
import type { BreakdownItem, LeadAnswer, PointOption } from "@/@types/tools";
import {
  activeFactors,
  CANADIAN_CREDENTIAL_OPTIONS,
  CLB_OPTIONS,
  EDUCATION_OPTIONS,
  EXPERIENCE_JOB_OPTIONS,
  EXPERIENCE_ONTARIO_OPTIONS,
  FACTOR_LABELS,
  MANUAL_CATEGORY_OPTIONS,
  MANUAL_TEER_OPTIONS,
  MAX_SCORE,
  OFFICIAL_LANGUAGE_OPTIONS,
  PATHWAY_SECTIONS,
  PATHWAYS,
  PHYSICIAN_PRACTICE_OPTIONS,
  REGION_GROUPS,
  REGION_OPTIONS,
  STATUS_OPTIONS,
  TAX_HISTORY_OPTIONS,
  WAGE_OPTIONS,
  type AnswerKey,
  type FactorKey,
  type Pathway,
} from "./oinpData";
import { Container } from "@/components/sectionComponents";

type Answers = Partial<Record<AnswerKey, string>>;

function optionAt(options: PointOption[], index?: string): PointOption | undefined {
  if (index === undefined || index === "") return undefined;
  return options[Number(index)];
}

const ANSWER_OPTIONS: Record<AnswerKey, PointOption[]> = {
  wage: WAGE_OPTIONS,
  expjob: EXPERIENCE_JOB_OPTIONS,
  expont: EXPERIENCE_ONTARIO_OPTIONS,
  expphys: PHYSICIAN_PRACTICE_OPTIONS,
  earn: TAX_HISTORY_OPTIONS,
  status: STATUS_OPTIONS,
  edu: EDUCATION_OPTIONS,
  cancred: CANADIAN_CREDENTIAL_OPTIONS,
  clb: CLB_OPTIONS,
  lang2: OFFICIAL_LANGUAGE_OPTIONS,
  region: REGION_OPTIONS,
};

const OinpCalculator = () => {
  const [pathway, setPathway] = useState<Pathway | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [occupation, setOccupation] = useState<OccupationPick | null>(null);
  const [manualTeer, setManualTeer] = useState("");
  const [manualCategory, setManualCategory] = useState("");
  const [manualOpen, setManualOpen] = useState(false);

  const teerPoints = occupation
    ? occupation.teerPoints
    : optionAt(MANUAL_TEER_OPTIONS, manualTeer)?.points;
  const categoryPoints = occupation
    ? occupation.categoryPoints
    : optionAt(MANUAL_CATEGORY_OPTIONS, manualCategory)?.points;

  const setAnswer = (key: AnswerKey, index: string) =>
    setAnswers((prev) => {
      const next = { ...prev };
      if (index === "") delete next[key];
      else next[key] = index;
      return next;
    });

  const resetAll = () => {
    setPathway(null);
    setAnswers({});
    setOccupation(null);
    setManualTeer("");
    setManualCategory("");
    setManualOpen(false);
  };

  const choosePathway = (value: Pathway) => {
    if (value === pathway) return;
    // Switching pathway changes which factors are scored, so start clean.
    setPathway(value);
    setAnswers({});
    setOccupation(null);
    setManualTeer("");
    setManualCategory("");
  };

  const pointsFor = (key: FactorKey): number => {
    if (key === "teer") return teerPoints ?? 0;
    if (key === "cat") return categoryPoints ?? 0;
    if (key === "exp") {
      if (pathway === "physician") {
        return optionAt(PHYSICIAN_PRACTICE_OPTIONS, answers.expphys)?.points ?? 0;
      }
      // Ontario scores the higher of the two experience tables, never the sum.
      return Math.max(
        optionAt(EXPERIENCE_JOB_OPTIONS, answers.expjob)?.points ?? 0,
        optionAt(EXPERIENCE_ONTARIO_OPTIONS, answers.expont)?.points ?? 0
      );
    }
    return optionAt(ANSWER_OPTIONS[key as AnswerKey], answers[key as AnswerKey])?.points ?? 0;
  };

  const isAnswered = (key: FactorKey): boolean => {
    if (key === "teer") return teerPoints !== undefined;
    if (key === "cat") return categoryPoints !== undefined;
    if (key === "exp") {
      return pathway === "physician"
        ? answers.expphys !== undefined
        : answers.expjob !== undefined || answers.expont !== undefined;
    }
    return answers[key as AnswerKey] !== undefined;
  };

  const factors = pathway ? activeFactors(pathway) : [];
  const max = pathway ? MAX_SCORE[pathway] : 130;

  const { total, breakdown, answeredCount } = useMemo(() => {
    let sum = 0;
    let answered = 0;
    const rows: BreakdownItem[] = factors.map((key) => {
      const points = pointsFor(key);
      const done = isAnswered(key);
      sum += points;
      if (done) answered += 1;
      return {
        label: FACTOR_LABELS[key].label,
        points,
        max: FACTOR_LABELS[key].max,
        scored: done && points > 0,
      };
    });
    return { total: sum, breakdown: rows, answeredCount: answered };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, occupation, manualTeer, manualCategory, pathway]);

  let verdict: string;
  if (!pathway) {
    verdict = "Choose a pathway to start scoring.";
  } else if (answeredCount < factors.length) {
    verdict = `Answered ${answeredCount} of ${factors.length}. Complete every factor for an accurate estimate.`;
  } else {
    verdict = `All ${factors.length} factors answered. This is an estimate, not an eligibility decision.`;
  }

  const visibleSections = pathway ? PATHWAY_SECTIONS[pathway] : [];
  const shows = (key: AnswerKey) => visibleSections.includes(key);

  const answerLabel = (key: AnswerKey): string =>
    optionAt(ANSWER_OPTIONS[key], answers[key])?.label ?? "not answered";

  const leadAnswers: LeadAnswer[] = [
    { label: "Pathway", value: PATHWAYS.find((p) => p.value === pathway)?.label ?? "not chosen" },
    {
      label: "Occupation",
      value: occupation
        ? `${occupation.title} (NOC ${occupation.code})`
        : manualTeer !== "" || manualCategory !== ""
          ? `manual — ${optionAt(MANUAL_TEER_OPTIONS, manualTeer)?.label ?? "no TEER"} / ${
              optionAt(MANUAL_CATEGORY_OPTIONS, manualCategory)?.label ?? "no category"
            }`
          : "not answered",
    },
    ...(shows("wage") ? [{ label: "Compensation", value: answerLabel("wage") }] : []),
    ...(shows("expjob")
      ? [{ label: "Experience in the offer position", value: answerLabel("expjob") }]
      : []),
    ...(shows("expont")
      ? [{ label: "Experience anywhere in Ontario", value: answerLabel("expont") }]
      : []),
    ...(shows("expphys")
      ? [{ label: "Medical practice in Ontario", value: answerLabel("expphys") }]
      : []),
    { label: "Canadian tax history", value: answerLabel("earn") },
    { label: "Status in Canada", value: answerLabel("status") },
    { label: "Highest credential", value: answerLabel("edu") },
    { label: "Canadian credentials", value: answerLabel("cancred") },
    { label: "Language level", value: answerLabel("clb") },
    { label: "Official languages", value: answerLabel("lang2") },
    { label: "Work location", value: answerLabel("region") },
  ];

  return (
    <div className="bg-[var(--tnc-bg)] px-0 pb-16 pt-12 text-[var(--tnc-ink)]">
      <Container className="py-[20px]">
        <ToolHeading
          title="OINP"
          accent="Calculator"
          tagline="Estimate your points for the Ontario Workforce Priority Stream. Answer each factor and your score updates as you go."
        />

        <div className="grid items-start gap-7 lg:grid-cols-[1fr_340px]">
          <div>
            <ToolCard
              title="Pathway"
              subtitle="This sets which factors are scored and what your maximum is."
            >
              {PATHWAYS.map((option) => (
                <RadioOption
                  key={option.value}
                  name="oinp-pathway"
                  checked={pathway === option.value}
                  onSelect={() => choosePathway(option.value)}
                  label={option.label}
                  hint={option.hint}
                  points={option.maxLabel}
                />
              ))}
            </ToolCard>

            {pathway ? (
              <>
                <ToolCard
                  title="Occupation"
                  maxLabel="Max 19 points"
                  subtitle="Type a job title. Your NOC code sets both your TEER level and your occupational category, so this one answer scores two factors."
                >
                  <OccupationSearch
                    picked={occupation}
                    onPick={(pick) => {
                      setOccupation(pick);
                      setManualTeer("");
                      setManualCategory("");
                    }}
                    onClear={() => setOccupation(null)}
                  />

                  <button
                    type="button"
                    onClick={() => setManualOpen((open) => !open)}
                    className="mt-3.5 cursor-pointer border-none bg-transparent p-0 text-left text-[13px] font-semibold text-[var(--tnc-red)] underline underline-offset-2"
                  >
                    {manualOpen
                      ? "Hide manual TEER and category"
                      : "Not listed? Set TEER and category yourself"}
                  </button>

                  {manualOpen ? (
                    <div className="mt-3.5 rounded-[10px] border border-[var(--tnc-line)] bg-[var(--tnc-bg)] p-3.5">
                      <SelectField
                        label="TEER level — second digit of your NOC code"
                        value={manualTeer}
                        onChange={(value) => {
                          setManualTeer(value);
                          setOccupation(null);
                        }}
                        options={MANUAL_TEER_OPTIONS}
                        placeholder="Select TEER level"
                      />
                      <SelectField
                        label="Occupational category — first digit of your NOC code"
                        value={manualCategory}
                        onChange={(value) => {
                          setManualCategory(value);
                          setOccupation(null);
                        }}
                        options={MANUAL_CATEGORY_OPTIONS}
                        placeholder="Select category"
                      />
                    </div>
                  ) : null}
                </ToolCard>

                {shows("wage") ? (
                  <ToolCard
                    title="Compensation"
                    maxLabel="Max 15 points"
                    subtitle="The hourly wage your employer states on the job offer, before deductions."
                  >
                    <SelectField
                      value={answers.wage ?? ""}
                      onChange={(v) => setAnswer("wage", v)}
                      options={WAGE_OPTIONS}
                      placeholder="Select a wage band"
                    />
                  </ToolCard>
                ) : null}

                {shows("expjob") ? (
                  <ToolCard
                    title="Experience in the Offer Position"
                    maxLabel="Max 18 points"
                    subtitle="Months worked in the exact position named on your job offer."
                  >
                    <SelectField
                      value={answers.expjob ?? ""}
                      onChange={(v) => setAnswer("expjob", v)}
                      options={EXPERIENCE_JOB_OPTIONS}
                      placeholder="Select experience"
                    />
                    <p className="mt-3 text-[12.5px] leading-[1.55] text-[var(--tnc-muted)]">
                      Ontario scores this factor and the next one, then keeps whichever is
                      higher. They are never added together, so the breakdown shows a single
                      experience line.
                    </p>
                  </ToolCard>
                ) : null}

                {shows("expont") ? (
                  <ToolCard
                    title="Experience Anywhere in Ontario"
                    maxLabel="Max 12 points"
                    subtitle="Any Ontario work experience, counted separately from the offer position above."
                  >
                    <SelectField
                      value={answers.expont ?? ""}
                      onChange={(v) => setAnswer("expont", v)}
                      options={EXPERIENCE_ONTARIO_OPTIONS}
                      placeholder="Select experience"
                    />
                  </ToolCard>
                ) : null}

                {shows("expphys") ? (
                  <ToolCard
                    title="Medical Practice in Ontario"
                    maxLabel="Max 18 points"
                    subtitle="Cumulative months of practice. It does not need to be continuous."
                  >
                    <SelectField
                      value={answers.expphys ?? ""}
                      onChange={(v) => setAnswer("expphys", v)}
                      options={PHYSICIAN_PRACTICE_OPTIONS}
                      placeholder="Select experience"
                    />
                  </ToolCard>
                ) : null}

                <ToolCard
                  title="Canadian Tax History"
                  maxLabel="Max 8 points"
                  subtitle="Your highest single year of income in the last five tax years, as assessed by the CRA."
                >
                  <SelectField
                    value={answers.earn ?? ""}
                    onChange={(v) => setAnswer("earn", v)}
                    options={TAX_HISTORY_OPTIONS}
                    placeholder="Select an income band"
                  />
                </ToolCard>

                <ToolCard
                  title="Status in Canada"
                  maxLabel="Max 10 points"
                  subtitle="Your current valid immigration status, if any."
                >
                  {STATUS_OPTIONS.map((option, index) => (
                    <RadioOption
                      key={option.label}
                      name="oinp-status"
                      checked={answers.status === String(index)}
                      onSelect={() => setAnswer("status", String(index))}
                      label={option.label}
                      points={option.points > 0 ? `+${option.points}` : "0"}
                    />
                  ))}
                </ToolCard>

                <ToolCard
                  title="Highest Credential"
                  maxLabel="Max 10 points"
                  subtitle="Only your single highest completed credential counts."
                >
                  <SelectField
                    value={answers.edu ?? ""}
                    onChange={(v) => setAnswer("edu", v)}
                    options={EDUCATION_OPTIONS}
                    placeholder="Select credential"
                  />
                </ToolCard>

                <ToolCard
                  title="Canadian Credentials"
                  maxLabel="Max 10 points"
                  subtitle="Credentials earned at a Canadian institution, scored on top of your highest credential above."
                >
                  {CANADIAN_CREDENTIAL_OPTIONS.map((option, index) => (
                    <RadioOption
                      key={option.label}
                      name="oinp-cancred"
                      checked={answers.cancred === String(index)}
                      onSelect={() => setAnswer("cancred", String(index))}
                      label={option.label}
                      points={option.points > 0 ? `+${option.points}` : "0"}
                    />
                  ))}
                </ToolCard>

                <ToolCard
                  title="Language Level"
                  maxLabel="Max 15 points"
                  subtitle="Use your stronger official language, then take the lowest of your four abilities on that test: listening, reading, writing, speaking."
                >
                  <SelectField
                    value={answers.clb ?? ""}
                    onChange={(v) => setAnswer("clb", v)}
                    options={CLB_OPTIONS}
                    placeholder="Select CLB level"
                  />
                </ToolCard>

                <ToolCard
                  title="Official Languages"
                  maxLabel="Max 10 points"
                  subtitle="Scored on top of your CLB level above."
                >
                  {OFFICIAL_LANGUAGE_OPTIONS.map((option, index) => (
                    <RadioOption
                      key={option.label}
                      name="oinp-lang2"
                      checked={answers.lang2 === String(index)}
                      onSelect={() => setAnswer("lang2", String(index))}
                      label={option.label}
                      points={option.points > 0 ? `+${option.points}` : "0"}
                    />
                  ))}
                </ToolCard>

                <ToolCard
                  title="Work Location"
                  maxLabel="Max 15 points"
                  subtitle="Use the work location on the job offer, not your home address. Physicians: use the practice address registered to your OHIP billing number."
                >
                  <SelectField
                    value={answers.region ?? ""}
                    onChange={(v) => setAnswer("region", v)}
                    options={REGION_GROUPS}
                    placeholder="Select a census division"
                  />
                </ToolCard>
              </>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-6">
            <ScorePanel
              label="Your OINP Score"
              score={total}
              max={max}
              caption={<>out of {max}</>}
              verdict={verdict}
              breakdown={breakdown}
              totalRow={{ label: "Estimated total", value: `${total} / ${max}` }}
            >
              <button
                type="button"
                onClick={resetAll}
                className="mt-4 w-full cursor-pointer rounded-[10px] border border-white/25 bg-transparent px-4 py-2.5 text-[13px] font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                Reset all answers
              </button>
            </ScorePanel>

            <ConsultationCTA
              tool="oinp"
              source="OINP Calculator"
              result={`OINP score ${total} / ${max}`}
              answers={leadAnswers}
              heading="Get a plan for these points"
              body="Professionals at TNC will check your profile against the Workforce Priority Stream requirements, confirm your NOC, and tell you whether this score is worth acting on."
              leadNote="A TNC representative will call you back with your score, your full point breakdown and the gaps we can close."
            />
          </aside>
        </div>

        <DisclaimerNote heading="Before you rely on this score">
          <p>
            Ontario published this scoring grid on <strong>20 July 2026</strong> and it may
            change. No invitation cut-off score has been announced for the Workforce Priority
            Stream, so a high score here does not mean you will be invited to apply.
          </p>
          <p>
            This calculator estimates points only. It does not assess your eligibility or
            check the stream’s minimum requirements for work experience, language and
            education, all of which must be met before any points count. It is not
            immigration advice and does not create a consultant client relationship. Always
            consult a Regulated Canadian Immigration Consultant (RCIC) at TNC Immigration
            before acting on any number you see here.
          </p>
          <p>
            Occupational data adapted from the National Occupational Classification 2021,
            Employment and Social Development Canada and Statistics Canada, used under the
            Statistics Canada Open Licence. Verify every value against{" "}
            <a
              href="https://www.ontario.ca/page/ontario-workforce-priority-stream"
              target="_blank"
              rel="noopener noreferrer"
            >
              ontario.ca
            </a>
            . TNC Immigration is not affiliated with the Government of Ontario.
          </p>
        </DisclaimerNote>
      </Container>
    </div>
  );
};

export default OinpCalculator;
