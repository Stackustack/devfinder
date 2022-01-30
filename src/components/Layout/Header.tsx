import classes from "./Header.module.css";

import LightSwitcher from "../LightSwitcher/LightSwitcher";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <LightSwitcher />
    </div>
  );
};

export default Header;
