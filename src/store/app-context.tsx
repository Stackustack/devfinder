import { createContext } from "react";

export const AppContext = createContext({
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

  search: (input: string): void => {},
  updateInput: (input: string): void => {},
});
