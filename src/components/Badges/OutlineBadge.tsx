import React from "react";

interface Props {
  label: string;
  index?: number;
  pill?: boolean;
}

export default function OutlineBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";

  return (
    <div
      key={props.index}
      className={`${pill} border border-cornflower-blue-500 text-cornflower-blue-500 text-xs px-1 py-[2px] m-1`}
    >
      {props.label}
    </div>
  );
}
