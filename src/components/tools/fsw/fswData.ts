import type { PointOption } from "@/types/tools";

export const FSW_PASS_MARK = 67;
export const FSW_MAX = 100;

export const AGE_OPTIONS: PointOption[] = [
  { points: 0, label: "Under 18" },
  { points: 12, label: "18 – 35 years" },
  { points: 11, label: "36 years" },
  { points: 10, label: "37 years" },
  { points: 9, label: "38 years" },
  { points: 8, label: "39 years" },
  { points: 7, label: "40 years" },
  { points: 6, label: "41 years" },
  { points: 5, label: "42 years" },
  { points: 4, label: "43 years" },
  { points: 3, label: "44 years" },
  { points: 2, label: "45 years" },
  { points: 1, label: "46 years" },
  { points: 0, label: "47 years or older" },
];
export const AGE_DEFAULT = "1";

export const EDUCATION_OPTIONS: PointOption[] = [
  { points: 25, label: "Doctoral (PhD) level degree" },
  {
    points: 23,
    label: "Master's degree or professional degree (medicine, law, dentistry, etc.)",
  },
  {
    points: 22,
    label: "Two or more credentials (at least one from a 3+ year program)",
  },
  {
    points: 21,
    label:
      "Bachelor's degree or 3+ year program (university, college, trade or technical school)",
  },
  { points: 19, label: "Two-year degree, diploma or certificate" },
  { points: 15, label: "One-year degree, diploma or certificate" },
  { points: 5, label: "Secondary school (high school)" },
  { points: 0, label: "Less than secondary school" },
];
export const EDUCATION_DEFAULT = "3";

/** -1 flags "below CLB 7", which makes the applicant ineligible rather than scoring. */
export const FIRST_LANGUAGE_OPTIONS: PointOption[] = [
  { points: 6, label: "CLB 9 or higher" },
  { points: 5, label: "CLB 8" },
  { points: 4, label: "CLB 7" },
  { points: -1, label: "Below CLB 7" },
];

export const LANGUAGE_ABILITIES = ["Speaking", "Listening", "Reading", "Writing"] as const;
export type LanguageAbility = (typeof LANGUAGE_ABILITIES)[number];

export const SECOND_LANGUAGE_OPTIONS: PointOption[] = [
  { points: 0, label: "No second language test / CLB 4 or less in any ability" },
  { points: 4, label: "At least CLB 5 in all four abilities" },
];
export const SECOND_LANGUAGE_DEFAULT = "0";

export const EXPERIENCE_OPTIONS: PointOption[] = [
  { points: 0, label: "Less than 1 year" },
  { points: 9, label: "1 year" },
  { points: 11, label: "2 – 3 years" },
  { points: 13, label: "4 – 5 years" },
  { points: 15, label: "6 or more years" },
];
export const EXPERIENCE_DEFAULT = "3";

export const JOB_OFFER_OPTIONS: PointOption[] = [
  { points: 0, label: "No valid job offer" },
  { points: 10, label: "Yes, I have a valid job offer" },
];
export const JOB_OFFER_DEFAULT = "0";

export interface AdaptabilityItem {
  id: string;
  points: number;
  label: string;
  /** Only selectable once the applicant has scored for arranged employment. */
  requiresJobOffer?: boolean;
}

export const ADAPTABILITY_MAX = 10;

export const ADAPTABILITY_ITEMS: AdaptabilityItem[] = [
  {
    id: "canadianWork",
    points: 10,
    label:
      "You did at least 1 year of full-time skilled work in Canada (TEER 0, 1, 2 or 3) with valid authorization",
  },
  {
    id: "canadianStudy",
    points: 5,
    label: "You completed at least 2 academic years of full-time study in Canada",
  },
  {
    id: "spouseLanguage",
    points: 5,
    label:
      "Your spouse or partner has CLB 4 or higher in all four abilities (English or French)",
  },
  {
    id: "spouseStudy",
    points: 5,
    label:
      "Your spouse or partner completed at least 2 academic years of full-time study in Canada",
  },
  {
    id: "spouseWork",
    points: 5,
    label:
      "Your spouse or partner did at least 1 year of full-time work in Canada with valid authorization",
  },
  {
    id: "arrangedEmployment",
    points: 5,
    label:
      "You earned points for arranged employment in Canada (select a valid job offer above)",
    requiresJobOffer: true,
  },
  {
    id: "relativeInCanada",
    points: 5,
    label:
      "You or your spouse have a close relative in Canada who is 18+, and a citizen or permanent resident",
  },
];
