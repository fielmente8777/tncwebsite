interface ToolCardProps {
  title: string;
  /** Right-hand pill, e.g. "Max 12 points". */
  maxLabel?: string;
  /** Muted explainer under the title. */
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  maxLabel,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <section
      className={`mb-5 rounded-[14px] border border-[var(--tnc-line)] bg-white p-[26px] shadow-[0_1px_3px_rgba(71,16,27,0.06)] ${className}`}
    >
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <h3 className="text-[17px] font-bold text-[var(--tnc-navy)]">{title}</h3>
        {maxLabel ? (
          <span className="whitespace-nowrap rounded-full bg-[rgba(200,16,46,0.08)] px-2.5 py-1 text-[12px] font-semibold text-[var(--tnc-red)]">
            {maxLabel}
          </span>
        ) : null}
      </div>
      {subtitle ? (
        <p className="mb-4 text-[13px] leading-[1.5] text-[var(--tnc-muted)]">{subtitle}</p>
      ) : null}
      {children}
    </section>
  );
};

export default ToolCard;
