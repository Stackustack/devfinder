import dayjs from "dayjs";

import { useContext, useState } from "react";
import { AppContext } from "../../../store/app-context";
import classes from "./ProfileHeader.module.css";
import placeholderImage from "./../../../assets/placeholder_img.png";
import Avatar from "./Avatar";

const ProfileHeader = () => {
  const { profileResult } = useContext(AppContext);
  const { username, joinedDate, login } = profileResult;

  const parseDate = (date: string) => {
    return "Joined " + dayjs(joinedDate).format("DD MMM YYYY");
  };

  return (
    <div className={classes.profileHeader}>
      <Avatar />
      <div className={classes.profileHeader__mainInfo}>
        <div className={classes.mainInfo__username}>{username}</div>
        <div className={classes.mainInfo__login}>{login}</div>
        <div className={classes.mainInfo__joined}>{parseDate(joinedDate)}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
