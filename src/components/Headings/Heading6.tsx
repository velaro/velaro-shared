import React from "react";

interface Props {
  text: string;
}
function Heading6(props: Props) {
  return (
    <div className="text-base font-medium text-slate-gray-800">
      {" "}
      {props.text}
    </div>
  );
}

export default Heading6;
