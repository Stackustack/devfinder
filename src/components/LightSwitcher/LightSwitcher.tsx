import classes from "./LightSwitcher.module.css";
import { useSwitchTheme, useTheme } from "../../store/useTheme";

const LightSwitcher = () => {
  const switchTheme = useSwitchTheme();
  const theme = useTheme();

  const MOON_URL =
    "https://img.icons8.com/ios-filled/50/000000/do-not-disturb-2.png";
  const SUN_URL = "https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png";

  const url = () => {
    return theme === "dark" ? MOON_URL : SUN_URL;
  };

  return (
    <div className={classes.lightSwitcher} onClick={switchTheme}>
      {theme === "dark" ? "DARK" : "LIGHT"}
      <img className={classes.icon} src={url()} alt="sun" />
    </div>
  );
};

export default LightSwitcher;
