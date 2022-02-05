import Card from "../../ui/Card";
import classes from "./ProfileStats.module.css";
import { useContext } from "react";
import { AppContext } from "../../../store/app-context";
import { useProfile } from "../../../store/Profile/useProfileResult";

const ProfileStats = () => {
  const { stats } = useProfile();

  return (
    <Card className={classes.profileStats}>
      <div className={classes.profileStats__label}>Repos</div>
      <div className={classes.profileStats__label}>Followers</div>
      <div className={classes.profileStats__label}>Following</div>
      <div className={classes.profileStats__value}>{stats.public_repos}</div>
      <div className={classes.profileStats__value}>{stats.followers}</div>
      <div className={classes.profileStats__value}>{stats.following}</div>
    </Card>
  );
};

export default ProfileStats;
