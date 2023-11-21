import React from "react";
import { IconProps } from "./types";

function IconCheckMarkCircle(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24.001"
      viewBox="0 0 24 24.001"
      {...props}
    >
      <defs>
        <clipPath id="clip-path">
          <path
            fill="currentColor"
            d="M0 0H24V24.001H0z"
            data-name="Rectangle 601"
          ></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path)" data-name="Group 343">
        <path
          fill="currentColor"
          d="M5.9 8.1L4.5 9.5 9 14 19 4l-1.4-1.4L9 11.147zM18 10a7.966 7.966 0 11-5.8-7.7L13.75.751A9.306 9.306 0 0010 0a10 10 0 1010 10z"
          data-name="Path 534"
          transform="translate(2 1.999)"
        ></path>
      </g>
    </svg>
  );
}

export default IconCheckMarkCircle;
