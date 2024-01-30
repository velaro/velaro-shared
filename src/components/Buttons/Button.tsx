import React from "react";

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick(): void;
  disabled?: boolean;
  size?: "sm" | "md";
}
export function Button({ children, icon, onClick, disabled, size }: Props) {
  const cursorClass = disabled ? "cursor-not-allowed" : "cursor-pointer";
  const dimensions = size === "sm" ? "max-w-16 h-8" : "max-w-36 h-10";
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`${dimensions} rounded justify-center items-center inline-flex ${cursorClass}`}
    >
      {icon && (
        <div className="w-4 h-4 justify-center items-center flex">
          <div className="w-4 h-4 relative">{icon}</div>
        </div>
      )}
      {children}
    </div>
  );
}

export function PlusButton({
  label,
  onClick
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "btn-sm border rounded-full h-5 flex justify-center hover:border-cornflower-blue-200 hover:scale-125 hover:cursor-pointer"
      }
      onClick={onClick}
    >
      <span className="group-hover:scale-125">
        <i className="fa fa-plus fa-xs mr-1" />
        {label}
      </span>
    </button>
  );
}

export function MinusButton({
  label,
  onClick
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "btn-sm border rounded-full h-5 flex justify-center hover:border-cornflower-blue-200 hover:scale-125 hover:cursor-pointer"
      }
      onClick={onClick}
    >
      <span className="group-hover:scale-125">
        <i className="fa fa-minus fa-xs mr-1" />
        {label}
      </span>
    </button>
  );
}
