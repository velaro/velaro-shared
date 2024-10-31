import React from "react";
import { IconProps } from "../icons/types";

export function MenuItem(props: {
  onClick: () => void;
  icon: ({ ...props }: IconProps) => React.JSX.Element;
  text: string;
}) {
  return (
    <div
      onClick={props.onClick}
      className={`group self-stretch p-2 bg-white rounded-lg justify-start items-center gap-2 inline-flex hover:text-blue-500 hover:bg-slate-100 cursor-pointer`}
    >
      <props.icon className="group-hover:stroke-blue-500" />
      {props.text}
    </div>
  );
}
