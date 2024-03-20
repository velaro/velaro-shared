import React from "react";
import { IconProps } from "./types";

function IconLinkButton(props: IconProps) {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.625 1.25H5.25C3.17893 1.25 1.5 2.92893 1.5 5C1.5 7.07107 3.17893 8.75 5.25 8.75H6.75C8.82107 8.75 10.5 7.07107 10.5 5M12.375 8.75H12.75C14.8211 8.75 16.5 7.07107 16.5 5C16.5 2.92893 14.8211 1.25 12.75 1.25H11.25C9.17893 1.25 7.5 2.92893 7.5 5"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconLinkButton;
