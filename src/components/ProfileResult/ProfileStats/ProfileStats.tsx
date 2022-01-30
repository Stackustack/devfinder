import Card from "../../ui/Card";
import classes from "./ProfileStats.module.css";

const ProfileStats = () => {
  return (
    <Card className={classes.profileStats}>
      <div className={classes.profileStats__label}>Repos</div>
      <div className={classes.profileStats__label}>Followers</div>
      <div className={classes.profileStats__label}>Following</div>
      <div className={classes.profileStats__value}>8</div>
      <div className={classes.profileStats__value}>3938</div>
      <div className={classes.profileStats__value}>9</div>
    </Card>
  );
};

export default ProfileStats;
