"use client";

import { useState } from "react";
import { submitLead } from "@/lib/web3forms";
import { CONTACT_PHONE, LEAD_RECIPIENT } from "@/lib/env";
import type { LeadAnswer, LeadStatus, ToolId } from "@/@types/tools";

interface LeadCaptureFormProps {
  tool: ToolId;
  /** Human-readable tool name used in the email subject. */
  source: string;
  /** Headline result line, recomputed on every render by the parent. */
  result: string;
  /** Every visible answer, so the email carries the full picture. */
  answers: LeadAnswer[];
  note: string;
}

const FIELD_CLASS =
  "w-full appearance-none rounded-[10px] border-[1.5px] border-white/20 bg-white/[0.07] px-3.5 py-3 text-[14px] text-white outline-none placeholder:text-white/40 focus:border-[var(--tnc-red)] focus:shadow-[0_0_0_3px_rgba(200,16,46,0.25)]";

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  tool,
  source,
  result,
  answers,
  note,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [message, setMessage] = useState("");

  const failureText = `That did not go through. Email ${LEAD_RECIPIENT} or call ${CONTACT_PHONE} and we will take it from there.`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;

    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      setMessage(
        "Add your name and phone number so a TNC representative can call you back."
      );
      return;
    }

    setStatus("sending");
    setMessage("");

    const ok = await submitLead({
      tool,
      source,
      result,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      answers,
    });

    if (ok) {
      setStatus("sent");
      setMessage(
        "Requested. A TNC representative will call you back and walk through your result."
      );
    } else {
      setStatus("error");
      setMessage(failureText);
    }
  };

  const buttonLabel =
    status === "sending"
      ? "Requesting…"
      : status === "sent"
        ? "Callback requested"
        : "Request a callback";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[18px] border-t border-white/15 pt-[18px]"
      noValidate
    >
      <div className="mb-2.5">
        <label
          htmlFor={`${tool}-lead-name`}
          className="mb-1.5 block text-[12.5px] font-semibold text-white/85"
        >
          Name
        </label>
        <input
          id={`${tool}-lead-name`}
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="mb-2.5">
        <label
          htmlFor={`${tool}-lead-email`}
          className="mb-1.5 block text-[12.5px] font-semibold text-white/85"
        >
          Email
        </label>
        <input
          id={`${tool}-lead-email`}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <div className="mb-2.5">
        <label
          htmlFor={`${tool}-lead-phone`}
          className="mb-1.5 block text-[12.5px] font-semibold text-white/85"
        >
          Phone
        </label>
        <input
          id={`${tool}-lead-phone`}
          type="tel"
          autoComplete="tel"
          placeholder="+1"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={FIELD_CLASS}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="mt-1 block w-full cursor-pointer rounded-[10px] border-[1.5px] border-white/[0.28] bg-transparent px-4 py-3 text-center text-[14px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10 disabled:cursor-default disabled:opacity-70"
      >
        {buttonLabel}
      </button>

      <p className="mt-2.5 text-[11.5px] leading-[1.5] opacity-60">{note}</p>

      {message ? (
        <p
          aria-live="polite"
          className={`mt-2.5 text-[12.5px] font-semibold leading-[1.5] ${
            status === "sent"
              ? "text-[var(--tnc-green-text)]"
              : "text-[var(--tnc-red-text)]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
};

export default LeadCaptureForm;
