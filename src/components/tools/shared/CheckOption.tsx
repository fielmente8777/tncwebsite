"use client";

interface CheckOptionProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  /** Right-hand points hint, e.g. "+5". */
  points?: string;
  disabled?: boolean;
}

const CheckOption: React.FC<CheckOptionProps> = ({
  checked,
  onChange,
  label,
  points,
  disabled = false,
}) => {
  const state = disabled
    ? "cursor-not-allowed opacity-45 border-[var(--tnc-line)]"
    : checked
      ? "cursor-pointer border-[var(--tnc-red)] bg-[rgba(200,16,46,0.04)]"
      : "cursor-pointer border-[var(--tnc-line)] hover:border-[#D9CFD2]";

  return (
    <label
      className={`mb-2.5 flex items-start gap-3 rounded-[10px] border-[1.5px] px-3.5 py-3 transition-colors last:mb-0 ${state}`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[var(--tnc-red)] disabled:cursor-not-allowed"
      />
      <span className="text-[13.5px] leading-[1.45] text-[var(--tnc-ink)]">{label}</span>
      {points ? (
        <span className="ml-auto whitespace-nowrap pl-2 text-[12px] font-bold text-[var(--tnc-red)]">
          {points}
        </span>
      ) : null}
    </label>
  );
};

export default CheckOption;
