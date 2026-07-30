"use client";

import { useId } from "react";
import type { PointOption, PointOptionGroup } from "@/@types/tools";

interface SelectFieldProps {
  label?: string;
  /** Index into `options`, or "" when nothing is chosen yet. */
  value: string;
  onChange: (index: string) => void;
  options: PointOption[] | PointOptionGroup[];
  /** Renders a non-scoring first option, e.g. "Select a wage band". */
  placeholder?: string;
  className?: string;
}

function isGrouped(
  options: PointOption[] | PointOptionGroup[]
): options is PointOptionGroup[] {
  return options.length > 0 && "group" in options[0];
}

/**
 * Points live in the options array, not in the DOM. The select stores an index
 * so the parent can look up both the label and the points for a choice.
 */
const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  className = "",
}) => {
  const id = useId();

  const renderOption = (opt: PointOption, index: number) => (
    <option key={`${index}-${opt.label}`} value={String(index)}>
      {opt.label}
    </option>
  );

  let flatIndex = -1;

  return (
    <div className={`mb-3.5 last:mb-0 ${className}`}>
      {label ? (
        <label
          htmlFor={id}
          className="mb-1.5 block text-[13px] font-semibold text-[var(--tnc-ink)]"
        >
          {label}
        </label>
      ) : null}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="tnc-select w-full cursor-pointer appearance-none rounded-[10px] border-[1.5px] border-[var(--tnc-line)] bg-white px-3.5 py-3 pr-10 text-[14px] text-[var(--tnc-ink)] outline-none transition-colors focus:border-[var(--tnc-red)] focus:shadow-[0_0_0_3px_rgba(200,16,46,0.12)]"
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {isGrouped(options)
          ? options.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.options.map((opt) => {
                  flatIndex += 1;
                  return renderOption(opt, flatIndex);
                })}
              </optgroup>
            ))
          : options.map((opt, i) => renderOption(opt, i))}
      </select>
    </div>
  );
};

export default SelectField;
