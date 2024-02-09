import React from "react";

interface Props {
  label: string;
  pill?: boolean;
  size?: "sm" | "md";
}

export default function OutlineBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  const size = props.size === "sm" ? "text-xs" : "";

  return (
    <div
      className={`${pill} ${size} border border-cornflower-blue-500 text-cornflower-blue-500 px-1 py-[2px] m-1`}
    >
      {props.label}
    </div>
  );
}
