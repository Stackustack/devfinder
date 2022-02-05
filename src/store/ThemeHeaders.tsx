import { Helmet } from "react-helmet";
import { useTheme } from "./useTheme";

const ThemeHeaders = () => {
  const theme = useTheme();

  // Ughh... this is ugly :( But i didn't find better way to get that dynamicaly
  const themeBgColor = getComputedStyle(document.body).getPropertyValue(
    "--dark-blue-bg"
  );

  return (
    <Helmet>
      <link
        rel="stylesheet"
        href={process.env.PUBLIC_URL + `/themes/${theme}.css`}
      />
      <meta name="theme-color" content={themeBgColor} />
    </Helmet>
  );
};

export default ThemeHeaders;
