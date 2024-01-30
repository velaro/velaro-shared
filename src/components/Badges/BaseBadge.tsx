import React from "react";

interface Props {
  label: string;
  pill?: boolean;
  size?: "sm" | "md";
}

export default function BaseBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  const size = props.size === "sm" ? "text-xs" : "";
  return (
    <div
      className={`${pill} ${size} bg-cornflower-blue-100 text-slate-gray-800 px-1 py-[2px] m-1`}
    >
      {props.label}
    </div>
  );
}
