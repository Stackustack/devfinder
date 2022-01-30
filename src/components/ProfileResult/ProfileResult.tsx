import classes from "./ProfileResult.module.css";

import Card from "../ui/Card";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileLinks from "./ProfileLinks/ProfileLinks";
import ProfileStats from "./ProfileStats/ProfileStats";

const ProfileResult = () => {
  return (
    <Card>
      <div className={classes.profileResult}>
        <ProfileHeader />
        <ProfileStats />
        <ProfileLinks />
      </div>
    </Card>
  );
};

export default ProfileResult;
