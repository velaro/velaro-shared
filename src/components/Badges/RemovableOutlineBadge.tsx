import React from "react";
import IconCloseCircle from "../../icons/IconCloseCircle";

interface Props {
  label: string;
  onClose(): void;
  pill?: boolean;
}

export default function RemovableOutlineBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  return (
    <div
      className={`${pill} border border-cornflower-blue-500 text-cornflower-blue-500 text-xs px-1 py-[2px] m-1 flex items-center`}
    >
      {props.label}
      <div
        className="ml-1 hover:cursor-pointer"
        onClick={() => props.onClose()}
      >
        <IconCloseCircle />
      </div>
    </div>
  );
}
