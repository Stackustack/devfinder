import classes from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <div className={classes.profileHeader}>
      <img
        className={classes["profileHeader__avatar"]}
        src="https://avatars.githubusercontent.com/u/8258455?s=400&u=f37fd839dee77bc4f3e534fc034e6d56ff15bb90&v=4"
        alt="avatar"
      />
      {/* summary */}
      <div className={classes["profileHeader__profileSummary"]}>
        {/* top */}
        <div className={classes["profileSummary__topContainer"]}>
          <div className={classes["profileSummary__username"]}>The Octocat</div>
          <div className={classes["profileSummary__joined"]}>
            Joined 25 Jan 2011
          </div>
        </div>

        <div className={classes["profileSummary__login"]}>@octocat</div>
        <div className={classes["profileSummary__bio"]}>
          This profile has no bio
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
