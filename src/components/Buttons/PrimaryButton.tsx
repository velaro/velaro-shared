import React from "react";
import { Button } from "./Button";

interface Props {
  label?: string;
  onClick(): void;
  icon?: React.ReactNode;
}
export function PrimaryButton({ label, onClick, icon }: Props) {
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
