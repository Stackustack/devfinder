import React from "react";
import { useThemeManager } from "./Theme/useTheme";

type ThemeContextTypes = ReturnType<typeof useThemeManager>;

const ThemeContext = React.createContext<ThemeContextTypes>({
  theme: "",
  switchTheme: () => {},
});

export default ThemeContext;
