import React from "react";

interface Props {
  label?: string;
  toggled: boolean;
  changeToggle(): void;
  color?: "blue" | "green";
}

export default function Toggle(props: Props) {
  let colorClassName =
    "peer-focus:cornflower-blue-200 peer-checked:bg-cornflower-blue-500";

  if (props.color === "green") {
    colorClassName =
      "peer-focus:ring-success-green-300 peer-checked:bg-success-green-500";
  }
  return (
    <div className="flex gap-2 items-center">
      <div className="inline-flex relative items-center cursor-pointer h-4">
        <input
          id="toggle"
          type="checkbox"
          className="sr-only peer"
          checked={props.toggled}
          readOnly
        />
        <div
          id="toggle"
          onClick={props.changeToggle}
          className={`${colorClassName} relative w-8 h-4 bg-gray-200 dark:bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:left-[9px] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[3px] after:bg-white after:rounded-full after:h-2.5 after:w-2.5 after:transition-all `}
        ></div>
      </div>
      {props.label && (
        <label
          className={`${props.toggled ? "text-blue-500" : "text-slate-500"}`}
        >
          {props.label}
        </label>
      )}
    </div>
  );
}
