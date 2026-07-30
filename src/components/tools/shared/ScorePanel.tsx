import type { BreakdownItem } from "@/@types/tools";

interface ScorePanelProps {
  /** Small uppercase label above the number. */
  label: string;
  score: number;
  max: number;
  /** Line under the number, e.g. "out of 100 • pass mark 67". */
  caption: React.ReactNode;
  /** Optional pass-mark tick on the bar, as a percentage of the bar width. */
  markPercent?: number;
  /** Labels under the bar, left to right. */
  barTicks?: string[];
  verdict: string;
  verdictTone?: "neutral" | "pass" | "fail";
  breakdown: BreakdownItem[];
  /** Optional total row under the breakdown. */
  totalRow?: { label: string; value: string };
  children?: React.ReactNode;
}

const VERDICT_TONE: Record<"neutral" | "pass" | "fail", string> = {
  neutral: "bg-white/10 text-white",
  pass: "bg-[rgba(47,191,127,0.18)] text-[var(--tnc-green-text)]",
  fail: "bg-[rgba(200,16,46,0.22)] text-[var(--tnc-red-text)]",
};

const ScorePanel: React.FC<ScorePanelProps> = ({
  label,
  score,
  max,
  caption,
  markPercent,
  barTicks,
  verdict,
  verdictTone = "neutral",
  breakdown,
  totalRow,
  children,
}) => {
  const fillPercent = max > 0 ? Math.min((score / max) * 100, 100) : 0;
  const passed = verdictTone === "pass";

  return (
    <div className="rounded-2xl bg-black p-[30px_26px] text-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="text-[12px] font-semibold uppercase tracking-[2px] opacity-70">
        {label}
      </div>
      <div className="mt-2 text-[72px] font-extrabold leading-[1.05]">{score}</div>
      <div className="mb-[22px] text-[14px] opacity-65">{caption}</div>

      <div className="relative mb-2 h-2.5 rounded-md bg-white/15">
        <div
          className={`absolute inset-y-0 left-0 rounded-md transition-[width,background] duration-300 ${
            passed ? "bg-[var(--tnc-green-bright)]" : "bg-[var(--tnc-red)]"
          }`}
          style={{ width: `${fillPercent}%` }}
        />
        {typeof markPercent === "number" ? (
          <div
            className="absolute -top-[5px] -bottom-[5px] w-0.5 bg-white opacity-90"
            style={{ left: `${markPercent}%` }}
          />
        ) : null}
      </div>

      {barTicks?.length ? (
        <div className="mb-[22px] flex justify-between text-[11px] opacity-70">
          {barTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
      ) : null}

      <p
        className={`rounded-[10px] px-4 py-3 text-[14px] font-semibold leading-[1.5] ${VERDICT_TONE[verdictTone]}`}
      >
        {verdict}
      </p>

      {breakdown.length ? (
        <div className="mt-[22px] text-left">
          {breakdown.map((row) => (
            <div
              key={row.label}
              className={`flex justify-between border-b border-white/10 py-2 text-[13px] last:border-b-0 ${
                row.scored === false ? "opacity-55" : ""
              }`}
            >
              <span className="opacity-80">{row.label}</span>
              <span className="font-bold">
                {typeof row.max === "number" ? `${row.points} / ${row.max}` : row.points}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      {totalRow ? (
        <div className="mt-3 flex justify-between border-t border-white/25 pt-3 text-[13.5px] font-bold">
          <span>{totalRow.label}</span>
          <span>{totalRow.value}</span>
        </div>
      ) : null}

      {children}
    </div>
  );
};

export default ScorePanel;
