import { Helmet } from "react-helmet";
import { useTheme } from "./useTheme";

const ThemeHeaders = () => {
  const theme = useTheme();

  return (
    <Helmet>
      <link
        rel="stylesheet"
        href={process.env.PUBLIC_URL + `/themes/${theme}.css`}
      />
      <meta
        name="theme-color"
        // Ugh... couldn't find any good solution for that :thinking_face:
        content={theme === "dark" ? "#141c2f" : "hsl(227, 100%, 98%)"}
      />
    </Helmet>
  );
};

export default ThemeHeaders;
