import React from "react";
import { Button } from "./Button";

interface Props {
  label?: string;
  onClick(): void;
  icon?: React.ReactNode;
  disabled?: boolean;
}
export function PrimaryButton({ label, onClick, icon, disabled }: Props) {
  if (disabled) {
    return (
      <Button onClick={onClick} icon={icon} disabled={disabled}>
        <div className="w-36 h-10 px-6 py-3 bg-neutral-300 rounded border-2 border-neutral-300 justify-center items-center gap-2 inline-flex">
          <div className="text-center text-white text-sm font-semibold font-['Rubik'] leading-none">
            {label}
          </div>
        </div>
      </Button>
    );
  }
  return (
    <Button onClick={onClick} icon={icon}>
      <div className="grow shrink basis-0 h-10 px-6 py-3 bg-blue-500 rounded border-2 border-blue-500 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-900 active:border-blue-900 justify-center items-center gap-2 flex">
        <div className="text-center text-white text-sm font-semibold font-['Rubik'] leading-none">
          {label}
        </div>
      </div>
    </Button>
  );
}
