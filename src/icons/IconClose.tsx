import React from "react";
import { IconProps } from "./types";

function IconClose(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M.337 14.838a1.15 1.15 0 010-1.626l5.624-5.625L.338 1.964A1.15 1.15 0 011.964.338l5.624 5.623L13.212.337a1.15 1.15 0 111.626 1.626L9.214 7.587l5.625 5.625a1.15 1.15 0 01-1.627 1.626L7.587 9.214l-5.624 5.624a1.15 1.15 0 01-1.626 0z"
        data-name="Union 4"
        transform="translate(5 5)"
      ></path>
    </svg>
  );
}

export default IconClose;
