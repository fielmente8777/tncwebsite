import type { PointOption, PointOptionGroup } from "@/@types/tools";

export type Pathway = "skilled" | "essential" | "physician";

/** Every factor that can appear in the breakdown panel. */
export type FactorKey =
  | "teer"
  | "cat"
  | "wage"
  | "exp"
  | "earn"
  | "status"
  | "edu"
  | "cancred"
  | "clb"
  | "lang2"
  | "region";

/** Answer slots in state. `exp` is derived, so it is not stored directly. */
export type AnswerKey =
  | "wage"
  | "expjob"
  | "expont"
  | "expphys"
  | "earn"
  | "status"
  | "edu"
  | "cancred"
  | "clb"
  | "lang2"
  | "region";

export interface PathwayOption {
  value: Pathway;
  label: string;
  hint: string;
  maxLabel: string;
}

export const PATHWAYS: PathwayOption[] = [
  {
    value: "skilled",
    label: "Ontario job offer, skilled occupation",
    hint: "NOC TEER 0 to 3",
    maxLabel: "130 max",
  },
  {
    value: "essential",
    label: "Ontario job offer, essential occupation",
    hint: "NOC TEER 4 or 5",
    maxLabel: "130 max",
  },
  {
    value: "physician",
    label: "Self employed physician in Ontario",
    hint: "Practice experience replaces the wage factor",
    maxLabel: "115 max",
  },
];

export const MAX_SCORE: Record<Pathway, number> = {
  skilled: 130,
  essential: 130,
  physician: 115,
};

export const FACTOR_LABELS: Record<FactorKey, { label: string; max: number }> = {
  teer: { label: "TEER level", max: 9 },
  cat: { label: "Occupation category", max: 10 },
  wage: { label: "Compensation", max: 15 },
  exp: { label: "Work experience", max: 18 },
  earn: { label: "Tax history", max: 8 },
  status: { label: "Status in Canada", max: 10 },
  edu: { label: "Highest credential", max: 10 },
  cancred: { label: "Canadian credentials", max: 10 },
  clb: { label: "Language level", max: 15 },
  lang2: { label: "Official languages", max: 10 },
  region: { label: "Work location", max: 15 },
};

export const FACTOR_ORDER: FactorKey[] = [
  "teer",
  "cat",
  "wage",
  "exp",
  "earn",
  "status",
  "edu",
  "cancred",
  "clb",
  "lang2",
  "region",
];

/** Physician NOCs are TEER 1, so TEER still scores; only the wage factor drops. */
export function activeFactors(pathway: Pathway): FactorKey[] {
  return FACTOR_ORDER.filter((key) => (pathway === "physician" ? key !== "wage" : true));
}

/** Which cards are visible for each pathway, in order. */
export const PATHWAY_SECTIONS: Record<Pathway, AnswerKey[]> = {
  skilled: ["wage", "expjob", "expont", "earn", "status", "edu", "cancred", "clb", "lang2", "region"],
  essential: ["wage", "expjob", "expont", "earn", "status", "edu", "cancred", "clb", "lang2", "region"],
  physician: ["expphys", "earn", "status", "edu", "cancred", "clb", "lang2", "region"],
};

export const WAGE_OPTIONS: PointOption[] = [
  { points: 15, label: "$40.00 an hour or more (15)" },
  { points: 12, label: "$35.00 to $39.99 (12)" },
  { points: 10, label: "$30.00 to $34.99 (10)" },
  { points: 8, label: "$25.00 to $29.99 (8)" },
  { points: 5, label: "$20.00 to $24.99 (5)" },
  { points: 0, label: "Under $20.00 (0)" },
];

export const EXPERIENCE_JOB_OPTIONS: PointOption[] = [
  { points: 18, label: "More than 24 months (18)" },
  { points: 15, label: "13 to 24 months (15)" },
  { points: 12, label: "6 to 12 months (12)" },
  { points: 0, label: "Under 6 months (0)" },
];

export const EXPERIENCE_ONTARIO_OPTIONS: PointOption[] = [
  { points: 12, label: "More than 24 months (12)" },
  { points: 9, label: "13 to 24 months (9)" },
  { points: 6, label: "6 to 12 months (6)" },
  { points: 0, label: "Under 6 months (0)" },
];

export const PHYSICIAN_PRACTICE_OPTIONS: PointOption[] = [
  { points: 18, label: "2 years or more, cumulative (18)" },
  { points: 15, label: "13 to 24 months (15)" },
  { points: 12, label: "6 to 12 months (12)" },
  { points: 0, label: "Under 6 months (0)" },
];

export const TAX_HISTORY_OPTIONS: PointOption[] = [
  { points: 8, label: "$70,000 or more in a year (8)" },
  { points: 6, label: "$50,000 to $69,999 (6)" },
  { points: 4, label: "$30,000 to $49,999 (4)" },
  { points: 0, label: "Under $30,000, or no Canadian tax history (0)" },
];

export const STATUS_OPTIONS: PointOption[] = [
  { points: 10, label: "Valid Canadian work permit" },
  { points: 5, label: "Valid Canadian study permit" },
  { points: 0, label: "Neither" },
];

export const EDUCATION_OPTIONS: PointOption[] = [
  {
    points: 10,
    label:
      "Doctorate, or a degree in medicine, dentistry, veterinary medicine or optometry (10)",
  },
  { points: 8, label: "Master’s degree (8)" },
  { points: 6, label: "University certificate or diploma above a bachelor’s (6)" },
  { points: 6, label: "Bachelor’s degree or equivalent (6)" },
  { points: 5, label: "Ontario College Graduate Certificate (5)" },
  { points: 5, label: "University certificate or diploma below a bachelor’s (5)" },
  { points: 5, label: "College, CEGEP or other non university credential (5)" },
  { points: 5, label: "Apprenticeship or trades certificate or diploma (5)" },
  { points: 0, label: "Less than a college or trade certificate (0)" },
];

export const CANADIAN_CREDENTIAL_OPTIONS: PointOption[] = [
  { points: 10, label: "More than one Canadian post secondary credential" },
  { points: 5, label: "One Canadian post secondary credential" },
  { points: 0, label: "None" },
];

export const CLB_OPTIONS: PointOption[] = [
  { points: 15, label: "CLB 9 or higher (15)" },
  { points: 12, label: "CLB 8 (12)" },
  { points: 8, label: "CLB 7 (8)" },
  { points: 4, label: "CLB 6 (4)" },
  { points: 0, label: "CLB 5 or lower (0)" },
];

export const OFFICIAL_LANGUAGE_OPTIONS: PointOption[] = [
  { points: 10, label: "Both English and French at CLB 6 or higher" },
  { points: 5, label: "One official language at CLB 6 or higher" },
  { points: 0, label: "Neither at CLB 6 or higher" },
];

export const REGION_GROUPS: PointOptionGroup[] = [
  {
    group: "Northern Ontario — 15 points",
    options: [
      { points: 15, label: "Sudbury, Greater Sudbury, Thunder Bay, Nipissing, Parry Sound" },
      { points: 15, label: "Muskoka, Haliburton, Manitoulin, Timiskaming, Cochrane" },
      { points: 15, label: "Algoma, Rainy River, Kenora" },
    ],
  },
  {
    group: "Eastern Ontario — 10 points",
    options: [
      { points: 10, label: "Ottawa, Frontenac, Lanark, Leeds and Grenville, Renfrew" },
      { points: 10, label: "Hastings, Kawartha Lakes, Lennox and Addington, Northumberland" },
      { points: 10, label: "Peterborough, Prescott and Russell, Prince Edward" },
      { points: 10, label: "Stormont, Dundas and Glengarry" },
    ],
  },
  {
    group: "Southwestern Ontario — 10 points",
    options: [
      { points: 10, label: "Hamilton, Niagara, Brant, Haldimand Norfolk" },
      { points: 10, label: "Middlesex, Elgin, Oxford, Perth, Huron, Bruce" },
      { points: 10, label: "Essex, Chatham Kent, Lambton" },
    ],
  },
  {
    group: "Central Ontario outside the GTA — 10 points",
    options: [{ points: 10, label: "Waterloo, Wellington, Dufferin, Grey, Simcoe" }],
  },
  {
    group: "GTA outside the City of Toronto — 5 points",
    options: [{ points: 5, label: "Peel, York, Durham, Halton" }],
  },
  {
    group: "City of Toronto — 0 points",
    options: [{ points: 0, label: "City of Toronto" }],
  },
];

/** Flattened region list, so an index from the grouped select can be looked up. */
export const REGION_OPTIONS: PointOption[] = REGION_GROUPS.flatMap((g) => g.options);

export const MANUAL_TEER_OPTIONS: PointOption[] = [
  { points: 9, label: "TEER 0 or 1 — management, or usually needs a university degree (9)" },
  { points: 6, label: "TEER 2 or 3 — college, apprenticeship or supervisory (6)" },
  { points: 0, label: "TEER 4 or 5 — high school or short term training (0)" },
];

export const MANUAL_CATEGORY_OPTIONS: PointOption[] = [
  { points: 10, label: "Health occupations (10)" },
  { points: 8, label: "Trades, transport and equipment operators (8)" },
  { points: 6, label: "Natural and applied sciences (6)" },
  { points: 4, label: "Legislative and senior management (4)" },
  { points: 4, label: "Business, finance and administration (4)" },
  { points: 4, label: "Education, law, social, community and government services (4)" },
  { points: 4, label: "Natural resources, agriculture and related production (4)" },
  { points: 4, label: "Manufacturing and utilities (4)" },
  { points: 2, label: "Art, culture, recreation and sport (2)" },
  { points: 2, label: "Sales and service (2)" },
];

export const TEER_LABEL: Record<string, string> = {
  "0": "TEER 0",
  "1": "TEER 1",
  "2": "TEER 2",
  "3": "TEER 3",
  "4": "TEER 4",
  "5": "TEER 5",
};
