"use client";

interface RadioOptionProps {
  name: string;
  checked: boolean;
  onSelect: () => void;
  label: string;
  /** Optional second line under the label. */
  hint?: string;
  /** Right-hand points hint, e.g. "+10" or "130 max". */
  points?: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  name,
  checked,
  onSelect,
  label,
  hint,
  points,
}) => {
  return (
    <label
      className={`mb-2.5 flex cursor-pointer items-start gap-3 rounded-[10px] border-[1.5px] px-3.5 py-3 transition-colors last:mb-0 ${
        checked
          ? "border-[var(--tnc-red)] bg-[rgba(200,16,46,0.04)]"
          : "border-[var(--tnc-line)] hover:border-[#D9CFD2]"
      }`}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onSelect}
        className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[var(--tnc-red)]"
      />
      <span className="text-[13.5px] leading-[1.45] text-[var(--tnc-ink)]">
        {label}
        {hint ? (
          <span className="mt-1 block text-[12px] text-[var(--tnc-muted)]">{hint}</span>
        ) : null}
      </span>
      {points ? (
        <span className="ml-auto whitespace-nowrap pl-2 text-[12px] font-bold text-[var(--tnc-red)]">
          {points}
        </span>
      ) : null}
    </label>
  );
};

export default RadioOption;
