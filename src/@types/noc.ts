export type TeerDigit = "0" | "1" | "2" | "3" | "4" | "5";
export type CategoryDigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

/** One entry in the searchable occupation index used by the OINP calculator. */
export interface NocOccupation {
  code: string;
  title: string;
  /** Pipe-separated search aliases, e.g. "rn|registered nurse|staff nurse". */
  alias: string;
}

/** One row in the NOC Finder table. */
export interface NocRow {
  teer: string;
  code: string;
  title: string;
}
