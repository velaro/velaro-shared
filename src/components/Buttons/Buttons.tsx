import React from "react";
import { IconProps } from "../../icons/types";

interface Props {
  label?: string;
  onClick(e: React.MouseEvent): void;
  prefixIcon?: (props: IconProps) => React.JSX.Element;
  suffixIcon?: (props: IconProps) => React.JSX.Element;
  disabled?: boolean;
  size?: "sm" | "md";
}

export function PrimaryBlueButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center text-white cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-300  border-slate-300`;
  } else {
    className += ` bg-cornflower-blue-500 border-cornflower-blue-500 hover:bg-cornflower-blue-400 hover:border-cornflower-blue-400 active:bg-cornflower-blue-700 active:border-cornflower-blue-700`;
  }

  const iconClassName = "text-white";
  console.log("icons", props.prefixIcon, props.suffixIcon);

  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && <props.prefixIcon className={iconClassName} />}
      {props.label}
      {props.suffixIcon && <props.suffixIcon className={iconClassName} />}
    </div>
  );
}

export function PrimaryGrayButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-100 border-slate-100 text-slate-300 `;
  } else {
    className += ` text-slate-500 bg-slate-100 border-slate-100 hover:border-slate-500 active:bg-indigo-50 active:border-blue-500 `;
  }
  const iconClassName = `${
    props.disabled ? "text-slate-300" : "text-slate-500"
  }`;

  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && <props.prefixIcon className={iconClassName} />}
      {props.label}
      {props.suffixIcon && <props.suffixIcon className={iconClassName} />}
    </div>
  );
}

export function SecondaryBlueButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center text-blue-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-100  border-slate-100`;
  } else {
    className += ` bg-white border-blue-500 hover:bg-slate-100 hover:border-blue-400 hover:text-blue-400 active:bg-indigo-50 active:border-blue-700 active:text-blue-700`;
  }

  const iconClassName = `${
    props.disabled
      ? "text-slate-300"
      : "text-blue-500 group-hover:text-blue-400 group-active:text-blue-700"
  }`;

  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && <props.prefixIcon className={iconClassName} />}
      {props.label}
      {props.suffixIcon && <props.suffixIcon className={iconClassName} />}
    </div>
  );
}

export function SecondaryGrayButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} rounded-lg border-2 justify-center items-center gap-2 inline-flex text-center text-blue-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` bg-slate-100  border-slate-100`;
  } else {
    className += ` bg-white border-blue-500 hover:bg-slate-100 hover:border-blue-400 hover:text-blue-400 active:bg-indigo-50 active:border-blue-700 active:text-blue-700`;
  }

  const iconClassName = `${
    props.disabled
      ? "text-slate-300"
      : "text-slate-500 group-hover:text-slate-300 group-active:text-blue-500"
  }`;
  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && <props.prefixIcon className={iconClassName} />}
      {props.label}
      {props.suffixIcon && <props.suffixIcon className={iconClassName} />}
    </div>
  );
}

export function TeriaryBlueButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} justify-center items-center gap-2 inline-flex text-center text-blue-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` text-slate-300`;
  } else {
    className += ` hover:text-blue-400 active:text-blue-700 `;
  }
  const iconClassName = `${
    props.disabled
      ? "text-slate-300"
      : "text-blue-500 group-hover:text-blue-400 group-active:text-blue-700"
  }`;
  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && <props.prefixIcon className={iconClassName} />}
      {props.label}
      {props.suffixIcon && <props.suffixIcon className={iconClassName} />}
    </div>
  );
}

export function TeriaryGrayButton(props: Props) {
  const sizeClasses =
    props.size === "sm" ? "text-xs h-8 px-3 py-2" : "text-sm h-10 px-6 py-2.5";
  let className = `${sizeClasses} justify-center items-center gap-2 inline-flex text-center text-slate-500 group cursor-pointer`;
  if (props.disabled) {
    className += ` text-slate-300`;
  } else {
    className += ` hover:text-slate-300 active:text-blue-500 `;
  }

  const iconClassName = `${
    props.disabled
      ? "text-slate-300"
      : "text-slate-500 group-hover:text-slate-300 group-active:text-blue-500"
  }`;
  return (
    <div
      onClick={props.disabled ? undefined : props.onClick}
      className={className}
    >
      {props.prefixIcon && <props.prefixIcon className={iconClassName} />}
      {props.label}
      {props.suffixIcon && <props.suffixIcon className={iconClassName} />}
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
