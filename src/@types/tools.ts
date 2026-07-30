/** Which lead-capture key a tool submits with. */
export type ToolId = "fsw" | "bcpnp" | "oinp" | "noc";

/** A single option inside a scored <select>. */
export interface PointOption {
  /** Points awarded when this option is chosen. */
  points: number;
  /** Label shown to the user and sent in the lead email. */
  label: string;
}

/** A grouped set of options, used for the OINP work-location select. */
export interface PointOptionGroup {
  group: string;
  options: PointOption[];
}

/** One line in the score breakdown panel. */
export interface BreakdownItem {
  label: string;
  points: number;
  /** Omit to render a bare number instead of "points / max". */
  max?: number;
  /** Highlights the row once the user has actually scored on it. */
  scored?: boolean;
}

/** One labelled answer, sent to Web3Forms so the email carries the full picture. */
export interface LeadAnswer {
  label: string;
  value: string;
}

export type LeadStatus = "idle" | "sending" | "sent" | "error";
