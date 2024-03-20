import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
  error?: string;
  className?: string;
  errorClassName?: string;
}

export default function FormValidator(props: Props) {
  return (
    <div className={props.className}>
      <div className={props.error ? "border border-red-500 rounded" : ""}>
        {props.children}
      </div>
      {props.error && (
        <div className={`text-red-500 ${props.errorClassName}`}>
          {props.error}
        </div>
      )}
    </div>
  );
}
