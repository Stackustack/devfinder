import dayjs from "dayjs";

import classes from "./ProfileHeader.module.css";

import Avatar from "./Avatar";
import { useProfile } from "../../../store/Profile/useProfileResult";

const ProfileHeader = () => {
  const { login, name, created_at } = useProfile();

  const createdAtParsed = () => {
    return "Joined " + dayjs(created_at).format("DD MMM YYYY");
  };

  return (
    <div className={classes.profileHeader}>
      <Avatar />
      <div className={classes.profileHeader__mainInfo}>
        <div className={classes.mainInfo__username}>{name}</div>
        <div className={classes.mainInfo__login}>{login}</div>
        <div className={classes.mainInfo__joined}>{createdAtParsed()}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
