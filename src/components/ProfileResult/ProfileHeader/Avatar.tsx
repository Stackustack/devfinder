import { useContext, useState } from "react";
import { AppContext } from "../../../store/app-context";
import classes from "./Avatar.module.css";
import placeholderImage from "./../../../assets/placeholder_img.png";

const Avatar = () => {
  const [loaded, setLoaded] = useState(false);

  const { profileResult } = useContext(AppContext);
  const { avatar } = profileResult;

  const placeholder = (
    <img
      className={classes.avatar}
      src={placeholderImage}
      alt="default avatar"
    />
  );

  return (
    <>
      <img
        className={`${classes.avatar} ${
          !loaded ? classes["avatar--hidden"] : ""
        }`}
        src={avatar}
        alt="avatar"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && placeholder}
    </>
  );
};

export default Avatar;
