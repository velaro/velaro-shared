import IconArrowCircleRight from "../icons/IconArrowCircleRight";
import IconPersonAdd from "../icons/IconPersonAdd";
import IconPersonGroupAdd from "../icons/IconPersonGroupAdd";
import React from "react";

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

export function PrimaryButton({
  label,
  onClick,
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium"
      }
      onClick={onClick}
      disabled
    >
      {label}
    </button>
  );
}

export function SecondaryButton({
  label,
  onClick
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "bg-white hover:bg-cornflower-blue-100 text-cornflower-blue-500 border-cornflower-blue-500  py-2 px-4 border rounded-full shadow text-sm font-semibold"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function CancelButton({
  label,
  onClick
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded-full shadow text-sm"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function NextButton({
  label,
  onClick
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center"
      }
      onClick={onClick}
    >
      {label}
      <IconArrowCircleRight className="ml-2" />
    </button>
  );
}

export function CreateNewTeamButton({
  label,
  onClick
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "bg-white hover:bg-cornflower-blue-100 text-cornflower-blue-500 border-cornflower-blue-500  py-2 px-4 border rounded-full shadow text-sm font-semibold flex"
      }
      onClick={onClick}
    >
      <IconPersonGroupAdd className="mr-2" />
      {label}
    </button>
  );
}

export function CreateNewUserButton({
  label,
  onClick
}: {
  label?: string;
  onClick(): void;
}) {
  return (
    <button
      className={
        "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center"
      }
      onClick={onClick}
    >
      <IconPersonAdd className="mr-2" />
      {label}
    </button>
  );
}
