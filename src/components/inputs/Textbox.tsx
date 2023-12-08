import React, { useState } from "react";

interface Props {
  value: string;
  onChange(value: string): void;
  disabled?: boolean;
  error?: string;
}
export function Textbox(props: Props) {
  const [error, seteError] = useState(props.error);
  const textColor = error ? "text-rose-500" : "text-zinc-700";
  const borderColor = error
    ? "border-rose-500"
    : "border-neutral-300 hover:border-gray-400";
  const bgColor = error ? "bg-pink-50" : "bg-white";

  return (
    <div className="w-48 h-12 justify-start items-start inline-block">
      <div
        className={`grow shrink basis-0 p-3 ${bgColor} rounded border ${borderColor} flex-col justify-center items-start gap-1 inline-flex`}
      >
        <input
          value={props.value || ""}
          onChange={(e) => {
            seteError("");
            props.onChange(e.target.value);
          }}
          disabled={props.disabled}
          type="text"
          className={`${textColor} text-base font-normal font-['Rubik'] leading-normal border-none outline-none bg-inherit`}
        />
      </div>
      {error && (
        <div className="text-rose-500 text-xs font-normal font-['Rubik'] leading-normal">
          {error}
        </div>
      )}
    </div>
  );
}
