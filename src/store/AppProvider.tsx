import axios from "axios";
import { useCallback, useReducer } from "react";
import { AppContext } from "./app-context";

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
      return { ...state, isError: false, isLoading: true };

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

    case "ERROR":
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};

export const AppProvider = (props: any) => {
  const [appState, dispatch] = useReducer(appReducer, defaultAppState);

  const searchUrl = (input: string): string => {
    return `https://api.github.com/users/${input}`;
  };

  const handleSearch = useCallback(
    async (input: string) => {
      try {
        dispatch({ type: "START_FETCHING" });
        const response = await axios.get(searchUrl(input));
        dispatch({ type: "SUCCESSFUL_FETCHING", value: response.data });
      } catch (e) {
        dispatch({ type: "ERROR" });
        console.log(e);
      }
    },
    [dispatch]
  );

  const updateInput = (inputValue: any) => {
    dispatch({ type: "UPDATE_INPUT_VALUE", value: inputValue });
  };

  const appContext = {
    profileResult: {
      username: appState.profileResult.username,
      login: appState.profileResult.login,
      avatar: appState.profileResult.avatar,
      bio: appState.profileResult.bio,
      joinedDate: appState.profileResult.joinedDate,
      repos: appState.profileResult.repos,
      following: appState.profileResult.following,
      followers: appState.profileResult.followers,
      location: appState.profileResult.location,
      organization: appState.profileResult.organization,
      twitter: appState.profileResult.twitter,
      webpage: appState.profileResult.webpage,
    },

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
