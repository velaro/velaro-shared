import React from "react";
import { IconProps } from "./types";

function IconPlus(props: IconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="plus">
        <path
          id="Vector"
          d="M7.99992 3.83398V13.1673M3.33325 8.50065H12.6666"
          stroke="#3383EC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default IconPlus;
