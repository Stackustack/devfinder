import { useState } from "react";

import classes from "./Avatar.module.css";

import placeholderImage from "./../../../assets/placeholder_img.png";
import { useProfile } from "../../../store/Profile/useProfileResult";

const Avatar = () => {
  const [loaded, setLoaded] = useState(false);
  const { avatar_url } = useProfile();

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
        src={avatar_url}
        alt="avatar"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && placeholder}
    </>
  );
};

export default Avatar;
