import { useContext } from "react";

import classes from "./ProfileResult.module.css";

import Card from "../ui/Card";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileLinks from "./ProfileLinks/ProfileLinks";
import ProfileStats from "./ProfileStats/ProfileStats";
import { AppContext } from "../../store/app-context";
import ProfileBio from "./Bio/ProfileBio";

const ProfileResult = () => {
  const { isError } = useContext(AppContext);

  if (isError) {
    return (
      <Card>
        <div className={classes.notFound}>No profiles found :(</div>
      </Card>
    );
  }

  return (
    <Card>
      <div className={classes.profileResult}>
        <ProfileHeader />
        <ProfileBio />
        <ProfileStats />
        <ProfileLinks />
      </div>
    </Card>
  );
};

export default ProfileResult;
