import React from "react";
import { Button } from "./Button";

interface Props {
  label?: string;
  onClick(): void;
  icon?: React.ReactNode;
  disabled?: boolean;
  size?: "sm" | "md";
}
export function PrimaryButton(props: Props) {
  const padding = props.size === "sm" ? "px-3 py-2" : "px-6 py-3";
  if (props.disabled) {
    return (
      <Button {...props}>
        <div
          className={`${padding} grow shrink basis-0 bg-neutral-300 rounded border-2 border-neutral-300 justify-center items-center gap-2 inline-flex`}
        >
          <div className="text-center text-white text-sm font-semibold font-['Rubik'] leading-none">
            {props.label}
          </div>
        </div>
      </Button>
    );
  }
  return (
    <Button {...props}>
      <div
        className={`${padding} grow shrink basis-0 bg-cornflower-blue-500 rounded border-2 maxw border-cornflower-blue-500 hover:bg-cornflower-blue-700 hover:border-cornflower-blue-700 active:bg-cornflower-blue-900 active:border-cornflower-blue-900 justify-center items-center gap-2 flex`}
      >
        <div className="text-center text-white text-sm font-semibold font-['Rubik'] leading-none">
          {props.label}
        </div>
      </div>
    </Button>
  );
}
