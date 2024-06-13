import React, { forwardRef } from "react";
import { IconProps } from "./types";

const IconMoreHorizontalDots = forwardRef(function IconMoreHorizontalDots(
  props: IconProps,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M1.5 12.0028C1.5 10.7422 2.52196 9.72021 3.78261 9.72021C5.04326 9.72021 6.06522 10.7422 6.06522 12.0028C6.06522 13.2635 5.04326 14.2854 3.78261 14.2854C2.52196 14.2854 1.5 13.2635 1.5 12.0028Z"
        fill="#64748B"
      />
      <path
        d="M9.71739 12.0028C9.71739 10.7422 10.7393 9.72021 12 9.72021C13.2607 9.72021 14.2826 10.7422 14.2826 12.0028C14.2826 13.2635 13.2607 14.2854 12 14.2854C10.7393 14.2854 9.71739 13.2635 9.71739 12.0028Z"
        fill="#64748B"
      />
      <path
        d="M17.9348 12.0028C17.9348 10.7422 18.9567 9.72021 20.2174 9.72021C21.478 9.72021 22.5 10.7422 22.5 12.0028C22.5 13.2635 21.478 14.2854 20.2174 14.2854C18.9567 14.2854 17.9348 13.2635 17.9348 12.0028Z"
        fill="#64748B"
      />
    </svg>
  );
});

export default IconMoreHorizontalDots;
