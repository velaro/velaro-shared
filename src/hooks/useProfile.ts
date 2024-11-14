import React from "react";
import ProfileContext from "../context/ProfileContext";

export default function useProfile() {
  return React.useContext(ProfileContext);
}
