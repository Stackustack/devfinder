import { ReactNode, useContext, useState } from "react";
import ThemeContext from "./theme-context";

// This one uses different approach to context with use of custom hooks. More clean I think :)
// This way all imports are just two lines (import of hook and calling that hook)
type themeTypes = "dark" | "light";

export const useThemeManager = (): {
  theme: string;
  switchTheme: () => void;
} => {
  const [theme, setTheme] = useState<themeTypes>("dark");

  const switchTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return { theme, switchTheme };
};

type ThemeProviderTypes = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  return (
    <ThemeContext.Provider value={useThemeManager()}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const useSwitchTheme = () => {
  const { switchTheme } = useContext(ThemeContext);
  return switchTheme;
};
