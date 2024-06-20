import React from "react";
interface Props {
  icon?: any;
  text: string;
  subtext?: string;
  action: () => void;
}

export default function CustomizableSelectOption(props: Props) {
  return (
    <div
      className="flex items-center p-2 hover:bg-slate-100 rounded-md hover:text-cornflower-blue-500 hover:stroke-cornflower-blue-500"
      onClick={props.action}
    >
      <div className="flex items-center pr-2">{props.icon}</div>
      <div className="flex items-center">{props.text}</div>
      <div className="flex items-center pl-2 text-slate-500">
        {props.subtext}
      </div>
    </div>
  );
}
