import { createContext } from "react";

export type UserStatusType = "Available" | "Unavailable" | "Offline";

export interface Props {
  status: UserStatusType;
  setStatus(status: UserStatusType): void;
}

export const defaultProps: Props = {
  status: "Unavailable",
  setStatus: () => {}
};

const StatusContext = createContext<Props>(defaultProps);

export default StatusContext;
