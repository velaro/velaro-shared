import React from "react";
import IconCloseCircle from "../../icons/IconCloseCircle";

interface Props {
  label: string;
  onClose(): void;
  pill?: boolean;
  size?: "sm" | "md";
}

export default function RemovableOutlineBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  const size = props.size === "sm" ? "text-xs" : "";
  const closeIconSize = props.size === "sm" ? "" : "w-6 h-6";
  return (
    <div
      className={`${pill} ${size} border border-cornflower-blue-500 text-cornflower-blue-500 px-1 py-[2px] m-1 flex items-center`}
    >
      {props.label}
      <div
        className="ml-1 hover:cursor-pointer"
        onClick={() => props.onClose()}
      >
        <IconCloseCircle className={`${closeIconSize}`} />
      </div>
    </div>
  );
}
