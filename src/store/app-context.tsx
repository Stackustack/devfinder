import { createContext } from "react";

export const AppContext = createContext({
  isLoading: false,
  isError: false,
  inputValue: "",

  search: (input: string): void => {},
  updateInput: (input: string): void => {},
});