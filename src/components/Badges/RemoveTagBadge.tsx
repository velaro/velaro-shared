import React from "react";
import { badgeBgColors, BadgeColor, badgeTextColors } from "../types";
import IconCloseCircle from "../../icons/IconCloseCircle";

interface Props {
  label: string;
  onClick(): void;
  pill?: boolean;
  size?: "sm" | "md";
  color?: BadgeColor;
}

export default function AddTagBadge(props: Props) {
  const pill = props.pill ? "rounded-full" : "rounded";
  const size = props.size === "sm" ? "text-sm" : "";

  const getBgColor = () => {
    return props.color ? badgeBgColors[props.color] : badgeBgColors["blue"];
  };

  const getTextColor = () => {
    return props.color ? badgeTextColors[props.color] : badgeTextColors["blue"];
  };

  return (
    <span
      className={`${pill} ${size} ${getBgColor()} text-slate-gray-800 flex items-center py-[2px] px-1 hover:cursor-pointer hover:bg-opacity-80`}
      onClick={props.onClick}
    >
      {props.label}
      <IconCloseCircle className={`w-4 h-4 ${getTextColor()} ml-1`} />
    </span>
  );
}
