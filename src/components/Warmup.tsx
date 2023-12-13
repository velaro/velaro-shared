import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import Logo from "../images/logo_color.png";

export default function Warmup() {
  return (
    <div className="scale-150 w-full h-screen flex flex-col items-center justify-center gap-5">
      <img className="scale-50" src={Logo} />
      <span>Velaro is loading...</span>
      <LoadingSpinner />
    </div>
  );
}
