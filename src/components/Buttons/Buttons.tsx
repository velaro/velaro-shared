import React from "react";

interface Props {
  label?: string;
  onClick(e: React.MouseEvent): void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export function PrimaryBlueButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} ${props.className} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center text-white cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-300  border-slate-300`;
  } else {
    className += ` bg-cornflower-blue-500 border-cornflower-blue-500 hover:bg-cornflower-blue-400 hover:border-cornflower-blue-400 active:bg-cornflower-blue-700 active:border-cornflower-blue-700`;
  }

  const iconClassName = "text-white stoke-white fill-white";

  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && (
        <div className={iconClassName}>{props.prefixIcon}</div>
      )}
      {props.label}
      {props.suffixIcon && (
        <div className={iconClassName}>{props.suffixIcon}</div>
      )}
    </div>
  );
}

export function PrimaryGrayButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} ${props.className} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-100 border-slate-100 text-slate-300 `;
  } else {
    className += ` text-slate-500 bg-slate-100 border-slate-100 hover:border-slate-500 active:bg-indigo-50 active:border-blue-500 `;
  }
  const iconClassName = `${
    props.disabled
      ? "text-slate-300 stroke-slate-300 fill-slate-300"
      : "text-slate-500 stroke-slate-500 fill-slate-500"
  }`;

  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && (
        <div className={iconClassName}>{props.prefixIcon}</div>
      )}
      {props.label}
      {props.suffixIcon && (
        <div className={iconClassName}>{props.suffixIcon}</div>
      )}
    </div>
  );
}

export function SecondaryBlueButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} ${props.className} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center text-blue-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-100  border-slate-100`;
  } else {
    className += ` bg-white border-blue-500 hover:bg-slate-100 hover:border-blue-400 hover:text-blue-400 active:bg-indigo-50 active:border-blue-700 active:text-blue-700`;
  }

  const iconClassName = `${
    props.disabled
      ? "text-slate-300 stoke-slate-300 fill-slate-300"
      : "text-blue-500 stoke-blue-500 fill-blue-500 group-hover:text-blue-400 group-active:text-blue-700 group-hover:stoke-blue-400 group-active:stoke-blue-700 group-hover:fill-blue-400 group-active:fill-blue-700"
  }`;

  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && (
        <div className={iconClassName}>{props.prefixIcon}</div>
      )}
      {props.label}
      {props.suffixIcon && (
        <div className={iconClassName}>{props.suffixIcon}</div>
      )}
    </div>
  );
}

export function SecondaryGrayButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} ${props.className} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center text-gray-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-100  border-slate-100`;
  } else {
    className += ` bg-white border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-500 active:bg-indigo-50 active:border-blue-700 active:text-slate-500`;
  }

  const iconClassName = `${
    props.disabled
      ? "text-slate-300 stoke-slate-300 fill-slate-300"
      : "text-slate-500 stoke-slate-500 fill-slate-500 group-hover:text-slate-300 group-active:text-slate-500 group-hover:stoke-slate-500 group-active:stoke-slate-500 group-hover:fill-slate-500 group-active:fill-slate-500"
  }`;
  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && (
        <div className={iconClassName}>{props.prefixIcon}</div>
      )}
      {props.label}
      {props.suffixIcon && (
        <div className={iconClassName}>{props.suffixIcon}</div>
      )}
    </div>
  );
}

export function TeriaryBlueButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} ${props.className} justify-center items-center gap-2 inline-flex text-center text-blue-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` text-slate-300`;
  } else {
    className += ` hover:text-blue-400 active:text-blue-700 `;
  }
  const iconClassName = `${
    props.disabled
      ? "text-slate-300 stoke-slate-300 fill-slate-300"
      : "text-blue-500 stoke-blue-500 fill-blue-500 group-hover:text-blue-400 group-active:text-blue-700 group-hover:stoke-blue-400 group-active:stoke-blue-700 group-hover:fill-blue-400 group-active:fill-blue-700"
  }`;
  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && (
        <div className={iconClassName}>{props.prefixIcon}</div>
      )}
      {props.label}
      {props.suffixIcon && (
        <div className={iconClassName}>{props.suffixIcon}</div>
      )}
    </div>
  );
}

export function TeriaryGrayButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} ${props.className} justify-center items-center gap-2 inline-flex text-center text-slate-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` text-slate-300`;
  } else {
    className += ` hover:text-slate-300 active:text-blue-500 `;
  }

  const iconClassName = `${
    props.disabled
      ? "text-slate-300 stoke-slate-300 fill-slate-300"
      : "text-slate-500 stoke-slate-500 fill-slate-500 group-hover:text-slate-300 group-active:text-blue-500 group-hover:stoke-slate-500 group-active:stoke-slate-500 group-hover:fill-slate-500 group-active:fill-slate-500"
  }`;
  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && (
        <div className={iconClassName}>{props.prefixIcon}</div>
      )}
      {props.label}
      {props.suffixIcon && (
        <div className={iconClassName}>{props.suffixIcon}</div>
      )}
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
