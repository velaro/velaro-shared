import React from "react";
import { IconProps } from "./types";

function IconUnderlineButton(props: IconProps) {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 1V6.25C11.5 8.73528 9.48528 10.75 7 10.75C4.51472 10.75 2.5 8.73528 2.5 6.25V1M1 13.75H13"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconUnderlineButton;
