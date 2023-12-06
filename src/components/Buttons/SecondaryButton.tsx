import React from "react";
import { Button } from "./Button";

interface Props {
  label?: string;
  onClick(): void;
  icon?: React.ReactNode;
}
export function SecondaryButton({ label, onClick, icon }: Props) {
  return (
    <Button onClick={onClick} icon={icon}>
      <div className="grow shrink basis-0 h-10 px-6 py-3 bg-white rounded border-2 border-blue-500 hover:border-blue-700 active:border-blue-900 justify-center items-center gap-2 flex">
        <div className="text-center text-blue-500 text-sm font-semibold font-['Rubik'] leading-none">
          {label}
        </div>
      </div>
    </Button>
  );
}
