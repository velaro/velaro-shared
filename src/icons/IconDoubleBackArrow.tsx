import React from "react";
import { IconProps } from "./types";

function IconDoubleBackArrow(props: IconProps) {
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
          id="Icon (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.30635 8.47162C2.046 8.21127 2.046 7.78916 2.30635 7.52881L6.75079 3.08437C7.01114 2.82402 7.43325 2.82402 7.6936 3.08437C7.95395 3.34472 7.95395 3.76683 7.6936 4.02718L3.72056 8.00022L7.6936 11.9733C7.95395 12.2336 7.95395 12.6557 7.6936 12.9161C7.43325 13.1764 7.01114 13.1764 6.75079 12.9161L2.30635 8.47162ZM12.973 12.9161L8.52857 8.47162C8.26822 8.21127 8.26822 7.78916 8.52857 7.52881L12.973 3.08437C13.2334 2.82402 13.6555 2.82402 13.9158 3.08437C14.1762 3.34472 14.1762 3.76683 13.9158 4.02718L9.94278 8.00022L13.9158 11.9733C14.1762 12.2336 14.1762 12.6557 13.9158 12.9161C13.6555 13.1764 13.2334 13.1764 12.973 12.9161Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default IconDoubleBackArrow;
