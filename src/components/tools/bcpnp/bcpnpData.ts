import type { PointOption } from "@/types/tools";

export const BCPNP_MAX = 200;

export const SECTION_MAX = {
  experience: 40,
  education: 40,
  language: 40,
  wage: 55,
  area: 25,
} as const;

export const EXPERIENCE_OPTIONS: PointOption[] = [
  { points: 20, label: "5 or more years" },
  { points: 16, label: "At least 4 but less than 5 years" },
  { points: 12, label: "At least 3 but less than 4 years" },
  { points: 8, label: "At least 2 but less than 3 years" },
  { points: 4, label: "At least 1 but less than 2 years" },
  { points: 1, label: "Less than 1 year" },
  { points: 0, label: "No experience" },
];
export const EXPERIENCE_DEFAULT = "6";

/** `postSecondary` decides whether the "where did you study" follow-up shows. */
export interface EducationOption extends PointOption {
  postSecondary: boolean;
}

export const EDUCATION_OPTIONS: EducationOption[] = [
  { points: 27, label: "Doctoral degree", postSecondary: true },
  { points: 22, label: "Master's degree", postSecondary: true },
  { points: 15, label: "Post-graduate certificate or diploma", postSecondary: true },
  { points: 15, label: "Bachelor's degree", postSecondary: true },
  { points: 5, label: "Associate degree", postSecondary: true },
  {
    points: 5,
    label: "Post-secondary diploma or certificate (trades or non-trades)",
    postSecondary: true,
  },
  { points: 0, label: "Secondary school (high school) or less", postSecondary: false },
];
export const EDUCATION_DEFAULT = "6";

export const EDUCATION_LOCATION_OPTIONS: PointOption[] = [
  { points: 0, label: "Outside Canada" },
  { points: 8, label: "In British Columbia (+8)" },
  { points: 6, label: "In Canada, outside British Columbia (+6)" },
];
export const EDUCATION_LOCATION_DEFAULT = "0";

export const DESIGNATION_OPTIONS: string[] = [
  "Any trade: valid trade certificate issued by SkilledTradesBC, or apprentice registered with SkilledTradesBC",
  "Dental assistants (NOC 33100): certified with BC College of Oral Health Professionals",
  "Dental hygienists (NOC 32111): registered with BC College of Oral Health Professionals",
  "Dental technicians (NOC 32112): registered with BC College of Oral Health Professionals",
  "Denturists (NOC 32110): certified with BC College of Oral Health Professionals",
  "Early childhood educators (NOC 42202): valid ECE One Year or ECE Five Year Certificate",
  "Health care aides (NOC 33102): registered with BC Care Aide & Community Health Worker Registry",
  "Pharmacy technicians (NOC 32124): registered with the College of Pharmacists of British Columbia",
  "Practical nurses (NOC 32101): licensed with BC College of Nurses and Midwives",
  "Traditional Chinese medicine practitioners and acupuncturists (NOC 32200): licensed through CTCMA of BC",
  "Veterinary technicians (NOC 32104): registered with BC Veterinary Technologists Association",
];

/** `clb` drives the 10-point bonus for CLB 4 or higher in both languages. */
export interface LanguageOption extends PointOption {
  clb: number;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { points: 30, clb: 9, label: "CLB 9 or higher" },
  { points: 25, clb: 8, label: "CLB 8" },
  { points: 20, clb: 7, label: "CLB 7" },
  { points: 15, clb: 6, label: "CLB 6" },
  { points: 10, clb: 5, label: "CLB 5" },
  { points: 5, clb: 4, label: "CLB 4" },
  { points: 0, clb: 0, label: "Below CLB 4, or no valid test" },
];
export const LANGUAGE_DEFAULT = "6";

/**
 * $70+ scores 55, then one point less per dollar down to $16.
 * The original built this list in the browser; here it is built once at import.
 */
export const WAGE_OPTIONS: PointOption[] = (() => {
  const options: PointOption[] = [];
  for (let dollars = 70; dollars >= 16; dollars -= 1) {
    options.push({
      points: dollars - 15,
      label:
        dollars === 70
          ? "$70.00 and above"
          : `$${dollars}.00 to $${dollars}.99`,
    });
  }
  options.push({ points: 0, label: "Less than $16.00" });
  return options;
})();
export const WAGE_DEFAULT = String(WAGE_OPTIONS.length - 1);

export const AREA_OPTIONS: PointOption[] = [
  { points: 0, label: "Area 1: Metro Vancouver Regional District" },
  { points: 5, label: "Area 2: Squamish, Abbotsford, Agassiz, Mission, Chilliwack" },
  { points: 15, label: "Area 3: Areas of B.C. not included in Area 1 or Area 2" },
];
export const AREA_DEFAULT = "0";

export const REGIONAL_BONUS_CAP = 10;
