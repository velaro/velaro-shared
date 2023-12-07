import React from "react";

interface Props {
  value: string;
  onChange(value: string): void;
  disabled?: boolean;
  error: string;
}
export function Textbox({ value, onChange, disabled, error }: Props) {
  const textColor = error ? "text-rose-500" : "text-neutral-300";
  const borderColor = error ? "border-rose-500" : "border-neutral-300";
  const bgColor = error ? "bg-pink-50" : "bg-white";
  return (
    <div className="w-48 h-12 justify-start items-start inline-flex">
      <div
        className={`grow shrink basis-0 p-3 ${bgColor} rounded border ${borderColor} hover:border-gray-400 flex-col justify-center items-start gap-1 inline-flex`}
      >
        <input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          type="text"
          className={`${textColor} hover:text-gray-400 focus:text-zinc-700 text-base font-normal font-['Rubik'] leading-normal`}
        />
        {error && (
          <div className="text-rose-500 text-xs font-normal font-['Rubik'] leading-normal">
            {error}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-48 h-12 justify-start items-start inline-flex">
      <div className="grow shrink basis-0 p-3 bg-white rounded border border-neutral-300 hover:border-gray-400 flex-col justify-center items-start gap-1 inline-flex">
        <input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          type="text"
          className="text-neutral-300 hover:text-gray-400 focus:text-zinc-700 text-base font-normal font-['Rubik'] leading-normal"
        />
      </div>
    </div>
  );
}
