import React, { useEffect } from "react";
import IconCheck from "../icons/IconCheck";
import IconMinus from "../icons/IconMinus";

interface Props {
  onClick: () => void;
  label?: string;
  disabled: boolean;
  indeterminate?: boolean;
}

function Checkbox(props: Props) {
  const [checked, setChecked] = React.useState(false);
  const [indeterminateState, setIndeterminateState] = React.useState(false);

  useEffect(() => {
    setIndeterminateState(false);
    setChecked(false);
  }, [props.indeterminate]);

  const handleCheckboxClick = () => {
    if (!props.disabled) {
      if (props.indeterminate) {
        if (!checked && !indeterminateState) {
          setChecked(true);
        } else if (checked && !indeterminateState) {
          setChecked(false);
          setIndeterminateState(true);
        } else {
          setChecked(false);
          setIndeterminateState(false);
        }
      } else {
        setChecked(!checked);
      }
      props.onClick();
    }
  };

  const checkboxClass = `
  w-4 h-4 rounded border justify-center items-center gap-2 flex
  ${
    checked && !props.disabled
      ? "bg-cornflower-blue-500 border-cornflower-blue-500 hover:bg-cornflower-blue-500 hover:shadow-[0_0_0_2px_#cfe2fa]"
      : ""
  }
  ${
    indeterminateState && !props.disabled
      ? "bg-cornflower-blue-500 border-cornflower-blue-500 hover:shadow-[0_0_0_2px_#cfe2fa]"
      : "hover:bg-cornflower-blue-50 hover:border-cornflower-blue-500"
  }
  ${
    props.disabled && !(checked || indeterminateState)
      ? "bg-slate-100 border-slate-300 pointer-events-none"
      : ""
  }
  ${
    props.disabled && (checked || indeterminateState)
      ? "bg-cornflower-blue-300 border-cornflower-blue-300 pointer-events-none"
      : ""
  }
`;

  return (
    <div className="h-[21px] justify-start items-center inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <div className={checkboxClass} onClick={handleCheckboxClick}>
          {indeterminateState && (
            <div>
              <IconMinus />
            </div>
          )}
          {checked && !indeterminateState && (
            <div>
              <IconCheck />
            </div>
          )}
        </div>

        {props.label && (
          <div
            className={`text-base ${
              props.disabled ? "text-slate-300" : "text-slate-800"
            }`}
          >
            {props.label}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkbox;
