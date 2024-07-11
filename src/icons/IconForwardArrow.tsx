import React from "react";
import { IconProps } from "./types";

function IconForwardArrow(props: IconProps) {
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
          d="M5.17574 2.77535C4.94142 3.00966 4.94142 3.38956 5.17574 3.62387L9.55147 7.99961L5.17574 12.3753C4.94142 12.6097 4.94142 12.9896 5.17574 13.2239C5.41005 13.4582 5.78995 13.4582 6.02426 13.2239L10.8243 8.42387C11.0586 8.18956 11.0586 7.80966 10.8243 7.57535L6.02426 2.77535C5.78995 2.54103 5.41005 2.54103 5.17574 2.77535Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default IconForwardArrow;
