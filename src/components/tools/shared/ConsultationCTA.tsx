import { ASSESSMENT_URL, BOOKING_URL } from "@/lib/env";
import LeadCaptureForm from "./LeadCaptureForm";
import type { LeadAnswer, ToolId } from "@/types/tools";

interface ConsultationCTAProps {
  heading: string;
  body: string;
  tool: ToolId;
  source: string;
  result: string;
  answers: LeadAnswer[];
  leadNote: string;
  /** Side-by-side copy and form, used by the NOC Finder's full-width CTA. */
  layout?: "stacked" | "split";
}

const BTN =
  "block w-full cursor-pointer rounded-[10px] border-[1.5px] px-4 py-3 text-center text-[14px] font-semibold transition-colors";

const ConsultationCTA: React.FC<ConsultationCTAProps> = ({
  heading,
  body,
  tool,
  source,
  result,
  answers,
  leadNote,
  layout = "stacked",
}) => {
  const copy = (
    <>
      <h4 className="text-[17px] font-bold leading-[1.3]">{heading}</h4>
      <p className="mb-4 mt-1.5 text-[13px] leading-[1.55] opacity-[0.78]">{body}</p>
      <a
        className={`${BTN} border-[var(--tnc-red)] bg-[var(--tnc-red)] text-white hover:border-[var(--tnc-red-dark)] hover:bg-[var(--tnc-red-dark)]`}
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a consultation
      </a>
      <a
        className={`${BTN} mt-2.5 border-white/[0.28] bg-transparent text-white hover:border-white/50 hover:bg-white/10`}
        href={ASSESSMENT_URL}
      >
        Start a free assessment
      </a>
    </>
  );

  const form = (
    <LeadCaptureForm
      tool={tool}
      source={source}
      result={result}
      answers={answers}
      note={leadNote}
    />
  );

  return (
    <div className="mt-5 rounded-[14px] bg-black p-[24px_22px] text-white">
      {layout === "split" ? (
        <div className="grid gap-6 md:grid-cols-2">
          <div>{copy}</div>
          <div className="md:border-l md:border-white/15 md:pl-6">{form}</div>
        </div>
      ) : (
        <>
          {copy}
          {form}
        </>
      )}
    </div>
  );
};

export default ConsultationCTA;
