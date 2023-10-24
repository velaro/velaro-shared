import IconCheckMarkCircle from "../icons/IconCheckMarkCircle";
import IconClose from "../icons/IconClose";
import ErrorCircle from "../icons/IconErrorCircle";
import ExclamationCircle from "../icons/IconExclamationCircle";
import InformationCircle from "../icons/IconInformationCircle";
import React, { useEffect } from "react";

export enum Severity {
  Success,
  Info,
  Warning,
  Error
}

interface Props {
  message: string;
  severity: Severity;
  id: string;
  sticky: boolean;
  stickyDuration: number;
  closeAlert(id: string): void;
}

const colorVariants = {
  Success:
    "flex flex-row p-4 w-96 h-24 text-sm text-green-800 rounded-lg bg-green-300",
  Info: "flex flex-row p-4 w-96 h-24 text-sm text-blue-800 rounded-lg bg-blue-300",
  Warning:
    "flex flex-row p-4 w-96 h-24 text-sm text-yellow-800 rounded-lg bg-yellow-300",
  Error:
    "flex flex-row p-4 w-96 h-24 text-sm text-red-800 rounded-lg bg-red-300"
};

const iconVariants = {
  Success: <IconCheckMarkCircle />,
  Info: <InformationCircle />,
  Warning: <ExclamationCircle />,
  Error: <ErrorCircle />
};

export default function ToastAlert({
  message,
  severity,
  id,
  sticky,
  stickyDuration,
  closeAlert
}: Props) {
  useEffect(() => {
    if (sticky == true) {
      console.log("stickyAlerts is true");
    } else {
      const displayTimeout = setTimeout(() => closeAlert(id), stickyDuration);
      return () => clearTimeout(displayTimeout);
    }
  });

  return (
    <div
      id="toastAlert"
      className={
        colorVariants[Severity[severity] as keyof typeof Severity] +
        " justify-between mb-4 shadow-lg z-50 pointer-events-auto"
      }
    >
      <div className="flex">
        {iconVariants[Severity[severity] as keyof typeof Severity]}
      </div>
      <div className="flex flex-col grow pl-2">
        <div className="">{message}</div>
      </div>
      <button
        onClick={() => closeAlert(id)}
        className="rounded-md p-2 float-right text-gray-600 hover:text-gray-500 hover:bg-gray-400"
      >
        <IconClose />
      </button>
    </div>
  );
}
