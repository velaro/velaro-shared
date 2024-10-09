import React from "react";

interface DefaultTabsProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  onClick?: () => void;
  hoverColor?: string;
  activeTextColor?: string;
  disabledColor?: string;
  icon?: React.ReactNode;
  tabBorderColor?: string;

}

export default function DefaultTabs(props: DefaultTabsProps) {
  const {
    label,
    active = false,
    disabled = false,
    orientation = "horizontal",
    onClick,
    hoverColor = "hover:bg-slate-100",
    activeTextColor = "text-blue-600",
    disabledColor = "bg-slate-200",
    icon,
    tabBorderColor = "border-blue-500"
  } = props;

  const baseClass = "flex items-center cursor-pointer py-2 w-[220px] font-medium";
  const orientationClass =
    orientation === "horizontal"
      ? "border-b-4 justify-center"
      : "border-l-4 pl-2";
  const borderColor = active
    ? tabBorderColor
    : orientation === "vertical"
    ? "border-transparent"
    : "border-slate-200";
  const textColor = active ? activeTextColor : "text-gray-800";
  const hoverClass = !disabled ? hoverColor : "";
  const disabledClass = disabled
    ? `cursor-not-allowed opacity-50 ${disabledColor}`
    : "";

  return (
    <div
      className={`${baseClass} ${orientationClass}  ${borderColor} ${textColor} ${hoverClass} ${disabledClass}`}
      onClick={!disabled ? onClick : undefined}
    >
      {icon && <i className="mr-2">{icon}</i>}
      {label}
    </div>
  );
}
