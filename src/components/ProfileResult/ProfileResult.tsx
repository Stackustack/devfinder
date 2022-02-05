import { useContext, useState } from "react";
import { useTransition, animated, config } from "@react-spring/web";

import classes from "./ProfileResult.module.css";

import Card from "../ui/Card";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileLinks from "./ProfileLinks/ProfileLinks";
import ProfileStats from "./ProfileStats/ProfileStats";
import { AppContext } from "../../store/app-context";

const ProfileResult = () => {
  const ctx = useContext(AppContext);
  const { bio } = ctx.profileResult;

  const bioStyles = (): string =>
    `
      ${classes["profileResult__bio"]} 
      ${bio ? "" : classes["profileResult__bio--hidden"]}
    `;

  if (ctx.isError) {
    return (
      <Card>
        <div className={classes.notFound}>
          <>No profiles found :(</>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className={classes.profileResult}>
        <ProfileHeader />
        <div className={bioStyles()}>{bio}</div>
        <ProfileStats />
        <ProfileLinks />
      </div>
    </Card>
  );
};

export default ProfileResult;
