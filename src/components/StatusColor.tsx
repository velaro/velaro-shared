import React from "react";

interface StatusOptionProps {
  statusText: string;
  bgColor: string;
  onClick: () => void;
}

export default function StatusOption(props: StatusOptionProps) {
  const { statusText, bgColor, onClick } = props;
  return (
    <div
      className="flex items-center h-8 hover:bg-slate-gray-200 cursor-pointer rounded p-2"
      onClick={onClick}
    >
      <div className={`w-4 h-4 rounded-full bg-${bgColor}`}></div>
      <div className="ml-2">{statusText}</div>
    </div>
  );
}
