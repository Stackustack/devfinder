import React from "react";
import { useProfileResultManager } from "./useProfileResult";

type ProfileResultTypes = ReturnType<typeof useProfileResultManager>;

export interface IProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  created_at: string;
  stats: {
    public_repos: number;
    following: number;
    followers: number;
  };
  links: {
    location: string | null;
    twitter_username: string | null;
    blog: string | null;
    company: string | null;
  };
}

export interface IProfileResultContext {
  profile: IProfile;
  saveProfile: (profile: any) => {};
}

const ProfileResultContext = React.createContext<ProfileResultTypes>(
  {} as IProfileResultContext
);

export default ProfileResultContext;
