import React from "react";

interface Props {
  label: string;
  children: React.ReactElement;
}

export default function FormGroup({ label, children }: Props) {
  return (
    <div className="form-group flex mb-4">
      {label && <div className="w-1/3 font-semibold">{label}</div>}
      <span className="w-2/3">{children}</span>
    </div>
  );
}
