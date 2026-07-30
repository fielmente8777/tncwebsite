"use client";

import { useMemo, useState } from "react";
import Container from "@/components/sectionComponents/Container";
import ToolHeading from "@/components/tools/shared/ToolHeading";
import ConsultationCTA from "@/components/tools/shared/ConsultationCTA";
import DisclaimerNote from "@/components/tools/shared/DisclaimerNote";
import { NOC_ROWS } from "@/data/noc2021";
import type { LeadAnswer } from "@/@types/tools";

const TEER_FILTERS = ["all", "0", "1", "2", "3", "4", "5"] as const;
type TeerFilter = (typeof TEER_FILTERS)[number];

interface IndexedRow {
  teer: string;
  code: string;
  title: string;
  haystack: string;
}

const ROWS: IndexedRow[] = NOC_ROWS.map((row) => ({
  ...row,
  haystack: `${row.code} ${row.title}`.toLowerCase(),
}));

/**
 * Splits `text` around each search term so matches can be wrapped in <mark>
 * without ever injecting HTML. Case is preserved.
 */
function highlight(text: string, terms: string[]): React.ReactNode {
  if (terms.length === 0) return text;

  const lower = text.toLowerCase();
  const ranges: Array<[number, number]> = [];

  for (const term of terms) {
    if (!term) continue;
    let from = 0;
    for (;;) {
      const at = lower.indexOf(term, from);
      if (at === -1) break;
      ranges.push([at, at + term.length]);
      from = at + term.length;
    }
  }

  if (ranges.length === 0) return text;

  ranges.sort((a, b) => a[0] - b[0]);
  const merged: Array<[number, number]> = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (last && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
    else merged.push([...range]);
  }

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  merged.forEach(([start, end], i) => {
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(<mark key={`${start}-${i}`}>{text.slice(start, end)}</mark>);
    cursor = end;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

const NocFinder = () => {
  const [query, setQuery] = useState("");
  const [teer, setTeer] = useState<TeerFilter>("all");

  const terms = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query]
  );

  const rows = useMemo(
    () =>
      ROWS.filter((row) => {
        if (teer !== "all" && row.teer !== teer) return false;
        return terms.every((term) => row.haystack.includes(term));
      }),
    [teer, terms]
  );

  const leadAnswers: LeadAnswer[] = [
    { label: "Search term", value: query.trim() || "none" },
    { label: "TEER filter", value: teer === "all" ? "All TEER" : `TEER ${teer}` },
    { label: "Matches shown", value: `${rows.length} of ${ROWS.length}` },
  ];

  return (
    <div className="bg-[var(--tnc-bg)] px-0 pb-16 pt-12 text-[var(--tnc-ink)]">
      <Container className="py-[20px]">
        <ToolHeading title="NOC" accent="Finder" />

        <section className="mb-5 rounded-[14px] border border-[var(--tnc-line)] bg-white p-[26px] shadow-[0_1px_3px_rgba(71,16,27,0.06)]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-[17px] font-bold text-[var(--tnc-navy)]">
              Find your occupation
            </h3>
            <span
              aria-live="polite"
              className="whitespace-nowrap rounded-full bg-[rgba(200,16,46,0.08)] px-2.5 py-1 text-[12px] font-semibold text-[var(--tnc-red)]"
            >
              {rows.length === ROWS.length
                ? `${ROWS.length} occupations`
                : `${rows.length} of ${ROWS.length}`}
            </span>
          </div>

          <div className="relative">
            <label htmlFor="noc-search" className="sr-only">
              Search by job title or NOC code
            </label>
            <input
              id="noc-search"
              type="search"
              autoComplete="off"
              placeholder="Search by job title or NOC code, e.g. welder or 72300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-[10px] border-[1.5px] border-[var(--tnc-line)] bg-white px-3.5 py-3 pr-10 text-[14px] text-[var(--tnc-ink)] outline-none focus:border-[var(--tnc-red)] focus:shadow-[0_0_0_3px_rgba(200,16,46,0.12)]"
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-2.5 cursor-pointer rounded-md px-2 py-1 text-[18px] leading-none text-[var(--tnc-muted)] hover:bg-[var(--tnc-bg)] hover:text-[var(--tnc-red)]"
              >
                ×
              </button>
            ) : null}
          </div>

          <div
            role="group"
            aria-label="Filter by TEER category"
            className="tnc-no-scrollbar mt-4 flex gap-2 overflow-x-auto"
          >
            {TEER_FILTERS.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={teer === value}
                onClick={() => setTeer(value)}
                className={`cursor-pointer whitespace-nowrap rounded-full border-[1.5px] px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                  teer === value
                    ? "border-[var(--tnc-red)] bg-[var(--tnc-red)] text-white"
                    : "border-[var(--tnc-line)] bg-white text-[var(--tnc-ink)] hover:border-[#D9CFD2]"
                }`}
              >
                {value === "all" ? "All TEER" : `TEER ${value}`}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-5 overflow-hidden rounded-[14px] border border-[var(--tnc-line)] bg-white shadow-[0_1px_3px_rgba(71,16,27,0.06)]">
          <div className="tnc-mark max-h-[560px] overflow-y-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                National Occupational Classification 2021 codes and TEER categories
              </caption>
              <thead className="sticky top-0 z-10 bg-[var(--tnc-bg)]">
                <tr>
                  <th
                    scope="col"
                    className="w-[72px] border-b border-[var(--tnc-line)] px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[var(--tnc-muted)]"
                  >
                    TEER
                  </th>
                  <th
                    scope="col"
                    className="w-[110px] border-b border-[var(--tnc-line)] px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[var(--tnc-muted)]"
                  >
                    NOC code
                  </th>
                  <th
                    scope="col"
                    className="border-b border-[var(--tnc-line)] px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[var(--tnc-muted)]"
                  >
                    Class title
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.code} className="hover:bg-[var(--tnc-bg)]">
                    <td className="border-b border-[var(--tnc-line)] px-4 py-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[rgba(200,16,46,0.08)] text-[12px] font-bold text-[var(--tnc-red)]">
                        {row.teer}
                      </span>
                    </td>
                    <td className="border-b border-[var(--tnc-line)] px-4 py-3">
                      <span className="font-mono text-[13px] font-semibold text-[var(--tnc-navy)]">
                        {highlight(row.code, terms)}
                      </span>
                    </td>
                    <td className="border-b border-[var(--tnc-line)] px-4 py-3 text-[13.5px] leading-[1.5]">
                      {highlight(row.title, terms)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {rows.length === 0 ? (
              <p className="px-4 py-8 text-center text-[13.5px] leading-[1.6] text-[var(--tnc-muted)]">
                No match in this list. Try a shorter word, or search the official{" "}
                <a
                  href="https://noc.esdc.gc.ca/?GoCTemplateCulture=en-CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--tnc-red)] underline"
                >
                  NOC 2021 database
                </a>
                .
              </p>
            ) : null}
          </div>
        </section>

        <ConsultationCTA
          layout="split"
          tool="noc"
          source="NOC Finder"
          result={
            query.trim()
              ? `NOC search "${query.trim()}" — ${rows.length} matches`
              : "NOC Finder, no search entered"
          }
          answers={leadAnswers}
          heading="Not sure this is your code?"
          body="Your NOC depends on the duties you actually performed, not your job title. Professionals at TNC will confirm the right code before a wrong one costs you a refusal."
          leadNote="A TNC representative will call you back to confirm your NOC code and what it means for your options."
        />

        <DisclaimerNote>
          <p>
            <strong>Please note:</strong> This tool is for general guidance only. Codes and
            TEER categories could change as IRCC and ESDC update the classification. Your
            correct NOC depends on the main duties you actually performed, not on your job
            title, so always check the duties listed on the official NOC 2021 Version 1.0
            record. Do not take any decision directly based on this tool. Always consult a
            Regulated Canadian Immigration Consultant (RCIC) first to confirm your NOC before
            you apply.
          </p>
        </DisclaimerNote>
      </Container>
    </div>
  );
};

export default NocFinder;
