import React from "react";

export interface Profile {
  [key: string]: any;
  id: number;
  email: string;
  picture: string;
  displayName: string;
  firstName: string;
  lastName: string;
  language: string;
  phone: string;
  country: string;
  timezone: string;
  teamIds: number[];
  skillIds: number[];
  roles: string[];
  soundUrl: string;
  soundEnabled: boolean;
  newConversationSound: string;
  newMessageSound: string;
  chatTranslationsEnabled: boolean;
}

export const defaultProfile: Profile = {
  id: 0,
  email: "",
  picture: "",
  displayName: "",
  firstName: "",
  lastName: "",
  language: "en",
  country: "",
  timezone: "",
  phone: "",
  teamIds: [],
  skillIds: [],
  roles: [],
  soundUrl: "",
  soundEnabled: true,
  newConversationSound: "new_message_1.mp3",
  newMessageSound: "new_message_1.mp3",
  chatTranslationsEnabled: false,
};

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

