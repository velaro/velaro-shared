import React from "react";
import IconCloseCircle from "../../icons/IconCloseCircle";

interface Props {
  label: string;
  onClose(): void;
  pill?: boolean;
  size?: "sm" | "md";
}

export default function RemovableBaseBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  const size = props.size === "sm" ? "text-xs" : "";
  const closeIconSize = props.size === "sm" ? "" : "w-6 h-6";

  return (
    <div
      className={`${pill} ${size} bg-cornflower-blue-100 text-slate-gray-800 px-1 py-[2px] m-1 flex items-center`}
    >
      {props.label}
      <div
        className="ml-1 text-cornflower-blue-300 hover:cursor-pointer bg-white rounded-full"
        onClick={() => props.onClose()}
      >
        <IconCloseCircle className={`${closeIconSize}`} />
      </div>
    </div>
  );
}
