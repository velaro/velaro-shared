import React from "react";
import { Button } from "./Button";

interface Props {
  label?: string;
  onClick(): void;
  icon?: React.ReactNode;
}
export function TeritaryButton({ label, onClick, icon }: Props) {
  return (
    <Button onClick={onClick} icon={icon}>
      <div className="grow shrink basis-0 h-10 px-6 py-3 justify-center items-center gap-2 flex">
        <div className="text-center text-blue-500 hover:text-blue-700 active:text-blue-900  text-sm font-semibold font-['Rubik'] leading-none">
          {label}
        </div>
      </div>
    </Button>
  );
}
