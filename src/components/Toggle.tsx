import React from "react";

interface Props {
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
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only peer"
            checked={props.toggled}
            readOnly
          />
          <div
            id="toggle"
            onClick={() => {
              props.changeToggle();
            }}
            className={`${colorClassName} w-11 h-6 bg-gray-200 rounded-full peer   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all `}
          ></div>
        </label>
      </div>
    </div>
  );
}
