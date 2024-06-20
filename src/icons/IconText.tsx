import React from "react";
import { IconProps } from "./types";

function IconText(props: IconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="type-01">
        <path
          id="Vector"
          d="M2.66675 5.16602C2.66675 4.54476 2.66675 4.23413 2.76824 3.9891C2.90357 3.6624 3.16313 3.40283 3.48984 3.26751C3.73486 3.16602 4.04549 3.16602 4.66675 3.16602H11.3334C11.9547 3.16602 12.2653 3.16602 12.5103 3.26751C12.837 3.40283 13.0966 3.6624 13.2319 3.9891C13.3334 4.23413 13.3334 4.54476 13.3334 5.16602M6.00008 13.8327H10.0001M8.00008 3.16602V13.8327"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default IconText;
