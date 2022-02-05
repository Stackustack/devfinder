import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMapMarkerAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./ProfileLinks.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { useProfileLinks } from "../../../store/Profile/useProfileResult";

const ProfileLinks = () => {
  const links = useProfileLinks();
  type linksKey = "location" | "twitter_username" | "blog" | "company";

  const prepareContent = (k: linksKey) => {
    return links[k] ? links[k] : "Not available";
  };

  const disabled = (k: linksKey) => {
    return links[k] ? "" : classes["item_text--not_available"];
  };

  // To refactor? I could dynamically build that JSX based on provided links
  // Also 'disabled' styling (could be done for wrapper and not for each single element)
  return (
    <div className={classes.profileLinks}>
      <div className={classes.item__icon}>
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className={disabled("location")}
        />
      </div>
      <div className={disabled("location")}>{prepareContent("location")}</div>

      <div className={classes.item__icon}>
        <FontAwesomeIcon
          icon={faTwitter}
          className={disabled("twitter_username")}
        />
      </div>
      <div className={disabled("twitter_username")}>
        {prepareContent("twitter_username")}
      </div>

      <div className={classes.item__icon}>
        <FontAwesomeIcon icon={faLink} className={disabled("blog")} />
      </div>
      <div className={disabled("blog")}>{prepareContent("blog")}</div>

      <div className={classes.item__icon}>
        <FontAwesomeIcon icon={faBuilding} className={disabled("company")} />
      </div>
      <div className={disabled("company")}>{prepareContent("company")}</div>
    </div>
  );
};

export default ProfileLinks;
