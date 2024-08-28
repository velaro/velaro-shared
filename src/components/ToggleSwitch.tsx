import React, { useState } from "react";

interface Props {
  onClick: (selected: boolean) => void;
  label?: string;
  disabled: boolean;
}

function ToggleSwitch(props: Props) {
  const [selected, setSelected] = useState(false);

  const handleToggleClick = () => {
    if (!props.disabled) {
      setSelected(!selected);
      props.onClick(!selected);
    }
  };

  const toggleClass = `
  w-8 h-4 rounded-full 
  ${selected ? "bg-cornflower-blue-500 " : "bg-slate-300 "}

  ${props.disabled && !selected ? "bg-slate-100 pointer-events-none" : ""}
  ${
    props.disabled && selected
      ? "bg-cornflower-blue-100 pointer-events-none"
      : ""
  }
  flex items-center px-[3px]
`;

  const innerCircleClass = `
w-3 h-3 rounded-full bg-white
transition-transform duration-200
${selected ? "translate-x-3.5" : "translate-x-0"}
`;

  return (
    <div className="h-[21px] justify-start items-center gap-2 inline-flex">
      <div className="h-4 flex-col justify-start items-start gap-2 inline-flex">
        <div className={toggleClass} onClick={handleToggleClick}>
          <div className={innerCircleClass} />
        </div>
      </div>
      <div
        className={`text-base ${
          props.disabled ? "text-slate-300" : "text-slate-800"
        }`}
      >
        {props.label}
      </div>
    </div>
  );
}

export default ToggleSwitch;
