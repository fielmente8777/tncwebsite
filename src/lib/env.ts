import type { ToolId } from "@/@types/tools";

/**
 * Web3Forms access keys.
 *
 * Next.js inlines `process.env.NEXT_PUBLIC_*` at build time, so every key has to
 * be referenced statically — you cannot do `process.env["NEXT_PUBLIC_" + id]`.
 * That is why this file lists each one out longhand.
 *
 * If you only have three keys, leave one of the tool-specific variables unset
 * and it falls back to NEXT_PUBLIC_WEB3FORMS_KEY, so two tools can share a key.
 */
const FALLBACK_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const KEYS: Record<ToolId, string> = {
  fsw: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_FSW || FALLBACK_KEY,
  bcpnp: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_BCPNP || FALLBACK_KEY,
  oinp: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_OINP || FALLBACK_KEY,
  noc: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_NOC || FALLBACK_KEY,
};

export function getWeb3FormsKey(tool: ToolId): string {
  return KEYS[tool];
}

/** Shown in the lead email so the inbox knows which tool the enquiry came from. */
export const LEAD_RECIPIENT =
  process.env.NEXT_PUBLIC_LEAD_RECIPIENT || "info@tncimmigration.com";

export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 236 818 5558";

export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || "https://tncimmigration.com/book-appointment/";

export const ASSESSMENT_URL =
  process.env.NEXT_PUBLIC_ASSESSMENT_URL || "https://tncimmigration.com/start-assessment/";
