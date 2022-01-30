import Card from "../../ui/Card";
import classes from "./ProfileStats.module.css";
import { useContext } from "react";
import { AppContext } from "../../../store/app-context";

const ProfileStats = () => {
  const { profileResult } = useContext(AppContext);
  const { followers, following, repos } = profileResult;

  return (
    <Card className={classes.profileStats}>
      <div className={classes.profileStats__label}>Repos</div>
      <div className={classes.profileStats__label}>Followers</div>
      <div className={classes.profileStats__label}>Following</div>
      <div className={classes.profileStats__value}>{repos}</div>
      <div className={classes.profileStats__value}>{followers}</div>
      <div className={classes.profileStats__value}>{following}</div>
    </Card>
  );
};

export default ProfileStats;
