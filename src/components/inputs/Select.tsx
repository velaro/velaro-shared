import React, { useEffect } from "react";

export default function Select<T extends string | number>({
  className,
  options,
  value,
  onChange,
  allowNull: defaultNull = false
}: {
  className?: string;
  options: Record<T, string>;
  value: T;
  onChange(value: T): void;
  allowNull?: boolean; // if false, the first option will be auto selected if value is missing
}) {
  const optionList = Object.keys(options) as T[];

  useEffect(() => {
    if (!value && !defaultNull) {
      onChange(optionList[0]);
    }
  }, [defaultNull, onChange, optionList, value]);

  return (
    <div className="w-52 h-12 p-3 bg-white rounded border border-neutral-300 justify-between items-center inline-flex">
      <div className="rounded flex-col justify-center items-start gap-1 inline-flex">
        <select
          className={`text-neutral-300 text-base font-normal font-['Rubik'] leading-normal`}
          value={value || ""}
          onChange={(e) => onChange(e.currentTarget.value as T)}
        >
          {optionList.map((c, i) => (
            <option key={i} value={c}>
              {options[c]}
            </option>
          ))}
        </select>
      </div>
      <div className="justify-center items-center flex">
        <div className="w-6 h-6 relative" />
      </div>
    </div>
  );
}
