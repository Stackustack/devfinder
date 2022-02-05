import ProfileResultContext from "./profile-result-context";
import { ReactNode, useState, useContext } from "react";
import { IProfile } from "./profile-result-context";

export const useProfileResultManager = () => {
  const initialProfile: IProfile = {
    login: "",
    name: null,
    avatar_url: "",
    bio: null,
    created_at: "",
    stats: {
      public_repos: 0,
      following: 0,
      followers: 0,
    },
    links: {
      location: null,
      twitter_username: null,
      blog: null,
      company: null,
    },
  };

  const [profile, setProfile] = useState<IProfile>(initialProfile);
  const saveProfile = (profile: any) => {
    setProfile({
      login: profile.login,
      name: profile.name,
      avatar_url: profile.avatar_url,
      bio: profile.bio,
      created_at: profile.created_at,
      stats: {
        public_repos: profile.public_repos,
        following: profile.following,
        followers: profile.followers,
      },
      links: {
        location: profile.location,
        twitter_username: profile.twitter_username,
        blog: profile.blog,
        company: profile.company,
      },
    });
  };

  return { profile, saveProfile };
};

type ProfileResultProviderTypes = {
  children: ReactNode;
};

export const ProfileResultProvider = ({
  children,
}: ProfileResultProviderTypes) => {
  return (
    <ProfileResultContext.Provider value={useProfileResultManager()}>
      {children}
    </ProfileResultContext.Provider>
  );
};

export const useSaveProfile = () => {
  const { saveProfile } = useContext(ProfileResultContext);
  return saveProfile;
};

export const useProfile = () => {
  const { profile } = useContext(ProfileResultContext);
  return profile;
};

export const useProfileLinks = () => {
  const { profile } = useContext(ProfileResultContext);
  return profile.links;
};
