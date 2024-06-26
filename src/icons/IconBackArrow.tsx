import React from "react";
import { IconProps } from "./types";

function IconBackArrow(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="icon">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8243 13.2247C11.0586 12.9903 11.0586 12.6104 10.8243 12.3761L6.44853 8.00039L10.8243 3.62465C11.0586 3.39034 11.0586 3.01044 10.8243 2.77613C10.5899 2.54181 10.2101 2.54181 9.97574 2.77613L5.17574 7.57613C4.94142 7.81044 4.94142 8.19034 5.17574 8.42465L9.97574 13.2247C10.2101 13.459 10.5899 13.459 10.8243 13.2247Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default IconBackArrow;
