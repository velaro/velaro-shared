import React from "react";

interface Props {
  label: string;
  key?: number;
  pill?: boolean;
}

export default function BaseBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  return (
    <div
      key={props.key}
      className={`${pill} bg-cornflower-blue-100 text-slate-gray-800 text-xs px-1 py-[2px] m-1`}
    >
      {props.label}
    </div>
  );
}
