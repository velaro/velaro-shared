import React from "react";

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick(): void;
}
export function Button({ children, icon, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-36 h-10 rounded justify-center items-center inline-flex cursor-pointer"
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
        "btn-sm border rounded-full h-5 flex justify-center hover:border-blue-200 hover:scale-125 hover:cursor-pointer"
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
        "btn-sm border rounded-full h-5 flex justify-center hover:border-blue-200 hover:scale-125 hover:cursor-pointer"
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
