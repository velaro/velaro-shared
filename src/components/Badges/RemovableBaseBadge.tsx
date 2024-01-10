import React from "react";
import IconCloseCircle from "../../icons/IconCloseCircle";

interface Props {
  label: string;
  onClose(): void;
  pill?: boolean;
}

export default function RemovableBaseBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  return (
    <div
      className={`${pill} bg-cornflower-blue-100 text-slate-gray-800 text-xs px-1 py-[2px] m-1 flex items-center`}
    >
      {props.label}
      <div
        className="ml-1 text-cornflower-blue-300 hover:cursor-pointer"
        onClick={() => props.onClose()}
      >
        <IconCloseCircle />
      </div>
    </div>
  );
}
