import React, { useState } from "react";

interface Props {
  onClick: (selected: boolean) => void;
  label?: string;
  disabled: boolean;
}

function RadioButton(props: Props) {
  const [selected, setSelected] = useState(false);

  const handleRadioButtonClick = () => {
    if (!props.disabled) {
      setSelected(!selected);
      props.onClick(!selected);
    }
  };

  const radioButtonClass = `
    w-4 h-4 rounded-full border justify-center items-center gap-2 flex
    ${
      selected
        ? "bg-transparent border-cornflower-blue-500"
        : "bg-transparent border-slate-300"
    }
    ${
      !selected && !props.disabled
        ? "hover:bg-slate-100 hover:border-cornflower-blue-500"
        : ""
    }
    ${
      props.disabled && !selected
        ? "bg-slate-100 border-slate-300 pointer-events-none"
        : ""
    }
    ${
      props.disabled && selected
        ? "bg-transparent border-slate-300 pointer-events-none"
        : ""
    }
  `;

  const innerCircleClass = `
    w-2.5 h-2.5 relative rounded-full justify-center items-center gap-2 inline-flex
    ${
      selected && !props.disabled
        ? "bg-cornflower-blue-500"
        : props.disabled && selected
        ? "bg-slate-300"
        : "bg-transparent"
    }
  `;

  return (
    <div className="h-[21px] justify-start items-center gap-2 inline-flex">
      <div className="justify-start items-start gap-2 flex">
        <div className={radioButtonClass} onClick={handleRadioButtonClick}>
          {selected && <div className={innerCircleClass} />}
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

export default RadioButton;
