import { getWeb3FormsKey, LEAD_RECIPIENT } from "@/lib/env";
import type { LeadAnswer, ToolId } from "@/@types/tools";

const ENDPOINT = "https://api.web3forms.com/submit";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export interface LeadPayload {
  tool: ToolId;
  /** Human-readable tool name, e.g. "FSW Calculator". */
  source: string;
  /** Headline result, e.g. "FSW score 72 / 100". */
  result: string;
  name: string;
  email: string;
  phone: string;
  answers: LeadAnswer[];
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

function formatAnswers(answers: LeadAnswer[]): string {
  return answers
    .filter((a) => a.value.trim().length > 0)
    .map((a) => `${a.label}: ${a.value}`)
    .join("\n");
}

/**
 * Sends a callback request to Web3Forms.
 * Web3Forms delivers to the address the key was registered with, so the
 * destination is fixed by the key and not by anything in this payload.
 */
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  const accessKey = getWeb3FormsKey(payload.tool);
  if (!accessKey) {
    console.error(`Missing Web3Forms key for tool "${payload.tool}".`);
    return false;
  }

  const answers = formatAnswers(payload.answers);
  const body = {
    access_key: accessKey,
    subject: `${payload.source} callback request — ${payload.result}`,
    from_name: `TNC ${payload.source}`,
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    source: payload.source,
    result: payload.result,
    replyto: EMAIL_RE.test(payload.email) ? payload.email : undefined,
    to_display: LEAD_RECIPIENT,
    answers,
    message: [
      `Tool: ${payload.source}`,
      `Result: ${payload.result}`,
      "",
      "CONTACT",
      `Name: ${payload.name}`,
      `Email: ${payload.email || "not given"}`,
      `Phone: ${payload.phone}`,
      "",
      "ANSWERS",
      answers,
    ].join("\n"),
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await res.json()) as Web3FormsResponse;
    return Boolean(data.success);
  } catch {
    return false;
  }
}
