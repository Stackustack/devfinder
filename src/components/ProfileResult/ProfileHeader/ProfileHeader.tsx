import dayjs from "dayjs";
import { useContext } from "react";
import { AppContext } from "../../../store/app-context";
import classes from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  const { profileResult } = useContext(AppContext);
  const { avatar, username, joinedDate, bio, login } = profileResult;

  const dateToReadable = (date: string) => {
    return "Joined " + dayjs(joinedDate).format("DD MMM YYYY");
  };

  return (
    <div className={classes.profileHeader}>
      <img
        className={classes["profileHeader__avatar"]}
        src={avatar}
        alt="avatar"
      />
      {/* summary */}
      <div className={classes["profileHeader__profileSummary"]}>
        {/* top */}
        <div className={classes["profileSummary__topContainer"]}>
          <div className={classes["profileSummary__username"]}>{username}</div>
          <div className={classes["profileSummary__joined"]}>
            {dateToReadable(joinedDate)}
          </div>
        </div>

        <div className={classes["profileSummary__login"]}>@{login}</div>
        <div className={classes["profileSummary__bio"]}>{bio}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
