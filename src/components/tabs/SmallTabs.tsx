import React from "react";

interface SmallTabsProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  hoverColor?: string;
  activeTextColor?: string;
  disabledColor?: string;
  icon?: React.ReactNode;
  tabBorderColor?: string;
  activeBgColor?: string;
}

export default function SmallTabs(props: SmallTabsProps) {
  const {
    label,
    active = false,
    disabled = false,
    onClick,
    hoverColor = "hover:bg-slate-100",
    activeTextColor = "text-blue-600",
    disabledColor = "bg-slate-200",
    icon,
    tabBorderColor = "border-blue-500",
    activeBgColor = "bg-slate-200"
  } = props;

  const baseClass =
    "inline-flex items-center cursor-pointer py-2 px-3 border-b-2";
  const borderColor = active ? tabBorderColor : "border-slate-200";
  const textColor = active ? activeTextColor : "text-gray-800";
  const bgColor = active ? activeBgColor : "";
  const hoverClass = !disabled ? hoverColor : "";
  const disabledClass = disabled
    ? `cursor-not-allowed opacity-50 ${disabledColor}`
    : "";

  return (
    <div
      className={`${baseClass} ${borderColor} ${textColor} ${hoverClass} ${disabledClass} ${bgColor}`}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
      {icon && <i className="ml-2">{icon}</i>}
    </div>
  );
}
