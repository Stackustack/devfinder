import axios from "axios";
import { useCallback, useReducer } from "react";
import { AppContext } from "./app-context";
import { useSaveProfile } from "./Profile/useProfileResult";

// for testing / debugging locally - Github API restricts number of calls per hour
const mock = {
  login: "Stackustack",
  id: 8258455,
  node_id: "MDQ6VXNlcjgyNTg0NTU=",
  avatar_url: "https://avatars.githubusercontent.com/u/8258455?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Stackustack",
  html_url: "https://github.com/Stackustack",
  followers_url: "https://api.github.com/users/Stackustack/followers",
  following_url:
    "https://api.github.com/users/Stackustack/following{/other_user}",
  gists_url: "https://api.github.com/users/Stackustack/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Stackustack/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Stackustack/subscriptions",
  organizations_url: "https://api.github.com/users/Stackustack/orgs",
  repos_url: "https://api.github.com/users/Stackustack/repos",
  events_url: "https://api.github.com/users/Stackustack/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Stackustack/received_events",
  type: "User",
  site_admin: false,
  name: "Michał Jung",
  company: "@netguru ",
  blog: "",
  location: "Poznan, Poland",
  email: null,
  hireable: null,
  bio: "This is my GitHub bio",
  twitter_username: null,
  public_repos: 23,
  public_gists: 4,
  followers: 0,
  following: 0,
  created_at: "2014-07-24T15:15:19Z",
  updated_at: "2022-01-31T21:30:01Z",
};

const defaultAppState = {
  profileResult: {
    username: "",
    login: "",
    avatar: "",
    bio: "",
    joinedDate: "",
    repos: 0,
    following: 0,
    followers: 0,
    location: "",
    organization: "",
    twitter: "",
    webpage: "",
  },

  isLoading: false,
  isError: false,
  inputValue: "",
};

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, isLoading: true };

    case "SUCCESSFUL_FETCHING":
      const updatedProfile = {
        username: action.value.name,
        login: action.value.login,
        bio: action.value.bio,
        avatar: action.value.avatar_url,
        joinedDate: action.value.created_at,
        repos: action.value.public_repos,
        following: action.value.following,
        followers: action.value.followers,
        location: action.value.location,
        organization: action.value.company,
        twitter: action.value.twitter_username,
        webpage: action.value.blog,
      };

      return {
        ...state,
        isError: false,
        isLoading: false,
        profileResult: updatedProfile,
      };

    case "UPDATE_INPUT_VALUE": {
      return {
        ...state,
        inputValue: action.value,
      };
    }

    case "CLEAR_DATA": {
      return {
        ...state,
        profileResult: defaultAppState.profileResult,
        isError: false,
      };
    }

    case "ERROR":
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};

export const AppProvider = (props: any) => {
  const saveProfile = useSaveProfile();

  const [appState, dispatch] = useReducer(appReducer, defaultAppState);

  const searchUrl = (input: string): string => {
    return `https://api.github.com/users/${input}`;
  };

  // This uses some fucked up logic... It should be done better but well...
  // Basically the idea is to wait before clearing the data until the ProfileResult fade out.
  // Then (after 500ms) we clean the profileData and fetch new after clearing.
  // Posible solutions:
  // - Hide ProfileResult (animate out) as soon inputValue changes.
  // - Dont clear data explicitly using "CLEAR_DATA", data should be overriden by
  //   incoming (new) profile data
  const handleSearch = useCallback(
    // OLD CODE
    async (input: string) => {
      dispatch({ type: "START_FETCHING" });
      setTimeout(() => {
        dispatch({ type: "CLEAR_DATA" });
      }, 500);
      setTimeout(async () => {
        try {
          const response = await axios.get(searchUrl(input));
          dispatch({ type: "SUCCESSFUL_FETCHING", value: response.data });
          saveProfile(response.data);
        } catch (e) {
          dispatch({ type: "ERROR" });
          console.log(e);
        }
      }, 501);
    },
    [dispatch, saveProfile]
  );

  const updateInput = (inputValue: any) => {
    dispatch({ type: "UPDATE_INPUT_VALUE", value: inputValue });
  };

  const appContext = {
    isLoading: appState.isLoading,
    isError: appState.isError,
    inputValue: appState.inputValue,

    search: handleSearch,
    updateInput: updateInput,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};
