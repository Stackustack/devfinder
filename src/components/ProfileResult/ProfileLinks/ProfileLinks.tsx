import classes from "./ProfileLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMapMarkerAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../../store/app-context";

const ProfileLinks = () => {
  const { profileResult } = useContext(AppContext);

  type linksKey = "location" | "twitter" | "bio" | "organization";

  const prepareContent = (k: linksKey) => {
    return profileResult[k] ? profileResult[k] : "Not available";
  };

  return (
    <div className={classes.profileLinks}>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {prepareContent("location")}
      </div>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faTwitter} />
        {prepareContent("twitter")}
      </div>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faLink} />
        {prepareContent("bio")}
      </div>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faBuilding} />
        {prepareContent("organization")}
      </div>
    </div>
  );
};

export default ProfileLinks;
