import React from "react";

interface Props {
  text: string;
}
function Heading5(props: Props) {
  return (
    <div className="text-lg font-medium text-slate-gray-800"> {props.text}</div>
  );
}

export default Heading5;
