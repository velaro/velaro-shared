import React from "react";
import { Button } from "./Button";

interface Props {
  label?: string;
  onClick(): void;
  icon?: React.ReactNode;
  disabled?: boolean;
  size?: "sm" | "md";
}
export function SecondaryButton(props: Props) {
  const padding = props.size === "sm" ? "px-3 py-2" : "px-6 py-3";
  if (props.disabled) {
    return (
      <Button {...props}>
        <div
          className={`grow shrink basis-0 h-10 ${padding} bg-white rounded border-2 border-neutral-300 justify-center items-center gap-2 flex`}
        >
          <div className="text-center text-neutral-300 text-sm font-semibold font-['Rubik'] leading-none">
            {props.label}
          </div>
        </div>
      </Button>
    );
  }

  return (
    <Button {...props}>
      <div
        className={`grow shrink basis-0 h-10 ${padding} bg-white rounded border-2 border-blue-500 hover:border-blue-700 active:border-blue-900 justify-center items-center gap-2 flex`}
      >
        <div className="text-center text-blue-500 text-sm font-semibold font-['Rubik'] leading-none">
          {props.label}
        </div>
      </div>
    </Button>
  );
}
