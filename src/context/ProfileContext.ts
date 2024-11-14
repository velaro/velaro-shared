import { defaultProfile, Profile } from "../components/types";
import React from "react";

export const defaultProfileContext = {
  profile: defaultProfile,
  setProfile: () => {},
  belongsToGroup: () => false,
  loading: false
};

export interface Props {
  profile: Profile;
  loading: boolean;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  belongsToGroup(groupId: number): boolean;
}

const ProfileContext = React.createContext<Props>(defaultProfileContext);

export default ProfileContext;
