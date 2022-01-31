import classes from "./ProfileResult.module.css";

import Card from "../ui/Card";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileLinks from "./ProfileLinks/ProfileLinks";
import ProfileStats from "./ProfileStats/ProfileStats";
import { useContext } from "react";
import { AppContext } from "../../store/app-context";

const ProfileResult = () => {
  const ctx = useContext(AppContext);

  if (ctx.isError) {
    return (
      <Card>
        <div className={classes.notFound}>
          <>No profiles found :(</>
        </div>
      </Card>
    );
  }

  if (!ctx.profileResult.login || ctx.isLoading) {
    return null;
  }

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
