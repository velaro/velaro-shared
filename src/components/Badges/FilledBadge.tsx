import React from "react";

interface Props {
  label: string;
  pill?: boolean;
  size?: "sm" | "md";
  backgroundColor?: string;
  textColor?: string;
}

export default function FilledBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  const size = props.size === "sm" ? "text-xs" : "";
  const backgroundColor = props.backgroundColor || "bg-cornflower-blue-500";
  const textColor = props.textColor || "text-white";

  return (
    <div
      className={`${pill} ${size} ${backgroundColor} ${textColor} px-1 py-[2px] m-1`}
    >
      {props.label}
    </div>
  );
}
