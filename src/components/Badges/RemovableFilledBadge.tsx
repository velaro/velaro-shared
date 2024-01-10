import React from "react";
import IconCloseCircle from "../../icons/IconCloseCircle";

interface Props {
  label: string;
  key?: number;
  onClose(): void;
  pill?: boolean;
}

export default function RemovableFilledBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  return (
    <div
      key={props.key}
      className={`${pill} bg-cornflower-blue-500 text-white text-xs px-1 py-[2px] m-1 flex items-center`}
    >
      {props.label}
      <div
        className="ml-2 hover:cursor-pointer"
        onClick={() => props.onClose()}
      >
        <IconCloseCircle />
      </div>
    </div>
  );
}
