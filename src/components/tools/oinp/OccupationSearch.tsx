"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CATEGORY_NAMES,
  CATEGORY_POINTS,
  NOC_OCCUPATIONS,
  TEER_POINTS,
} from "@/data/nocOccupations";
import { TEER_LABEL } from "./oinpData";
import type { CategoryDigit, NocOccupation, TeerDigit } from "@/@types/noc";

export interface OccupationPick {
  code: string;
  title: string;
  teerDigit: TeerDigit;
  categoryDigit: CategoryDigit;
  teerPoints: number;
  categoryPoints: number;
}

interface OccupationSearchProps {
  picked: OccupationPick | null;
  onPick: (pick: OccupationPick) => void;
  onClear: () => void;
}

interface IndexedOccupation extends NocOccupation {
  haystack: string;
  aliases: string[];
  lowerTitle: string;
}

const INDEX: IndexedOccupation[] = NOC_OCCUPATIONS.map((o) => ({
  ...o,
  aliases: o.alias ? o.alias.split("|") : [],
  lowerTitle: o.title.toLowerCase(),
  haystack: `${o.title} ${o.alias}`.toLowerCase(),
}));

function normalise(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Exact alias beats alias prefix beats title prefix beats word start beats substring. */
function scoreEntry(entry: IndexedOccupation, query: string): number {
  let best = 0;

  for (const alias of entry.aliases) {
    if (alias === query) return 1000;
    if (alias.startsWith(query)) best = Math.max(best, 700 - alias.length);
    else if (alias.includes(` ${query}`)) best = Math.max(best, 500 - alias.length);
    else if (alias.includes(query)) best = Math.max(best, 300 - alias.length);
  }

  const title = entry.lowerTitle;
  if (title === query) return 950;
  if (title.startsWith(query)) best = Math.max(best, 650 - title.length * 0.2);
  else if (title.includes(` ${query}`)) best = Math.max(best, 460 - title.length * 0.2);
  else if (title.includes(query)) best = Math.max(best, 260 - title.length * 0.2);

  if (entry.code.startsWith(query)) best = Math.max(best, 900);
  return best;
}

function searchOccupations(raw: string): IndexedOccupation[] {
  const query = normalise(raw);
  if (query.length < 2) return [];

  let hits = INDEX.map((entry) => ({ entry, score: scoreEntry(entry, query) })).filter(
    (hit) => hit.score > 0
  );

  // Multi-word fallback: require every token to appear somewhere.
  if (hits.length === 0 && query.includes(" ")) {
    const tokens = query.split(" ");
    hits = INDEX.filter((entry) => tokens.every((t) => entry.haystack.includes(t))).map(
      (entry) => ({ entry, score: 100 })
    );
  }

  return hits
    .sort((a, b) => b.score - a.score || a.entry.title.length - b.entry.title.length)
    .slice(0, 8)
    .map((hit) => hit.entry);
}

function toPick(occupation: NocOccupation): OccupationPick {
  const teerDigit = occupation.code.charAt(1) as TeerDigit;
  const categoryDigit = occupation.code.charAt(0) as CategoryDigit;
  return {
    code: occupation.code,
    title: occupation.title,
    teerDigit,
    categoryDigit,
    teerPoints: TEER_POINTS[teerDigit] ?? 0,
    categoryPoints: CATEGORY_POINTS[categoryDigit] ?? 0,
  };
}

const OccupationSearch: React.FC<OccupationSearchProps> = ({ picked, onPick, onClear }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  const hits = useMemo(() => searchOccupations(query), [query]);

  useEffect(() => {
    if (!picked) setQuery("");
    else setQuery(picked.title);
  }, [picked]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  const choose = (occupation: NocOccupation) => {
    onPick(toPick(occupation));
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleChange = (value: string) => {
    setQuery(value);
    if (picked) onClear();
    if (value.trim().length < 2) {
      setOpen(false);
      return;
    }
    setOpen(true);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) {
      if (event.key === "ArrowDown" && query.trim().length >= 2) {
        setOpen(true);
        event.preventDefault();
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1 >= hits.length ? 0 : i + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i - 1 < 0 ? hits.length - 1 : i - 1));
    } else if (event.key === "Enter") {
      if (activeIndex > -1 && hits[activeIndex]) {
        event.preventDefault();
        choose(hits[activeIndex]);
      } else if (hits.length === 1) {
        event.preventDefault();
        choose(hits[0]);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <label htmlFor="oinp-occupation" className="sr-only">
        Search by job title
      </label>
      <input
        id="oinp-occupation"
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls="oinp-occupation-results"
        aria-autocomplete="list"
        autoComplete="off"
        placeholder="registered nurse, welder, truck driver…"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-[10px] border-[1.5px] border-[var(--tnc-line)] bg-white px-3.5 py-3 pr-10 text-[14px] text-[var(--tnc-ink)] outline-none focus:border-[var(--tnc-red)] focus:shadow-[0_0_0_3px_rgba(200,16,46,0.12)]"
      />
      {query ? (
        <button
          type="button"
          aria-label="Clear occupation"
          onClick={() => {
            setQuery("");
            onClear();
            setOpen(false);
          }}
          className="absolute right-2.5 top-2.5 cursor-pointer rounded-md px-2 py-1 text-[18px] leading-none text-[var(--tnc-muted)] hover:bg-[var(--tnc-bg)] hover:text-[var(--tnc-red)]"
        >
          ×
        </button>
      ) : null}

      {open ? (
        <div
          id="oinp-occupation-results"
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-1.5 max-h-[320px] overflow-y-auto rounded-[10px] border border-[var(--tnc-line)] bg-white shadow-[0_12px_28px_rgba(71,16,27,0.14)]"
        >
          {hits.length === 0 ? (
            <p className="px-3.5 py-3 text-[13px] leading-[1.5] text-[var(--tnc-muted)]">
              No match. Try a different wording, or choose TEER and category manually below.
            </p>
          ) : (
            hits.map((hit, index) => {
              const teerDigit = hit.code.charAt(1);
              const categoryDigit = hit.code.charAt(0) as CategoryDigit;
              return (
                <button
                  key={hit.code}
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(hit)}
                  className={`flex w-full cursor-pointer flex-col gap-0.5 border-b border-[var(--tnc-line)] px-3.5 py-2.5 text-left last:border-b-0 ${
                    index === activeIndex ? "bg-[var(--tnc-bg)]" : "bg-white"
                  }`}
                >
                  <span className="text-[13.5px] font-semibold text-[var(--tnc-ink)]">
                    {hit.title}
                  </span>
                  <span className="text-[12px] text-[var(--tnc-muted)]">
                    <span className="font-semibold text-[var(--tnc-red)]">
                      NOC {hit.code}
                    </span>
                    {"  ·  "}
                    {TEER_LABEL[teerDigit]}
                    {"  ·  "}
                    {CATEGORY_NAMES[categoryDigit]}
                  </span>
                </button>
              );
            })
          )}
        </div>
      ) : null}

      {picked ? (
        <div className="mt-3.5 rounded-[10px] border border-[rgba(200,16,46,0.25)] bg-[rgba(200,16,46,0.05)] px-3.5 py-3">
          <p className="text-[13.5px] font-semibold text-[var(--tnc-navy)]">{picked.title}</p>
          <p className="mt-1 text-[12.5px] text-[var(--tnc-muted)]">
            NOC <b className="text-[var(--tnc-ink)]">{picked.code}</b> ·{" "}
            {TEER_LABEL[picked.teerDigit]} ({picked.teerPoints} points) ·{" "}
            {CATEGORY_NAMES[picked.categoryDigit]} ({picked.categoryPoints} points)
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default OccupationSearch;
