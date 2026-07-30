interface ToolHeadingProps {
  /** Rendered in navy. */
  title: string;
  /** Rendered in red, directly after the title. */
  accent: string;
  /** Optional supporting line under the rule. */
  tagline?: string;
}

const ToolHeading: React.FC<ToolHeadingProps> = ({ title, accent, tagline }) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.5px] text-[var(--tnc-navy)]">
        {title} <span className="text-[var(--tnc-red)]">{accent}</span>
      </h2>
      <div className="mx-auto mt-3.5 h-1 w-16 rounded-sm bg-[var(--tnc-red)]" />
      {tagline ? (
        <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-relaxed text-[var(--tnc-muted)]">
          {tagline}
        </p>
      ) : null}
    </div>
  );
};

export default ToolHeading;
