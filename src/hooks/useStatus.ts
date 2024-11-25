import { useContext } from "react";
import StatusContext from "../context/StatusContext";

export default function useStatus() {
  return useContext(StatusContext);
}
