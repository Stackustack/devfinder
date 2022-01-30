import classes from "./LightSwitcher.module.css";

const LightSwitcher = () => {
  return (
    <div className={classes.lightSwitcher}>
      LIGHT
      <img
        className={classes.icon}
        src="https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png"
        alt="sun"
      />
    </div>
  );
};

export default LightSwitcher;
