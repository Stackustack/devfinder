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

  type linksKey = "location" | "twitter" | "webpage" | "organization";

  const prepareContent = (k: linksKey) => {
    return profileResult[k] ? profileResult[k] : "Not available";
  };

  const disabled = (k: linksKey) => {
    return profileResult[k] ? "" : classes["item_text--not_available"];
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
        <FontAwesomeIcon icon={faTwitter} className={disabled("twitter")} />
      </div>
      <div className={disabled("twitter")}>{prepareContent("twitter")}</div>

      <div className={classes.item__icon}>
        <FontAwesomeIcon icon={faLink} className={disabled("webpage")} />
      </div>
      <div className={disabled("webpage")}>{prepareContent("webpage")}</div>

      <div className={classes.item__icon}>
        <FontAwesomeIcon
          icon={faBuilding}
          className={disabled("organization")}
        />
      </div>
      <div className={disabled("organization")}>
        {prepareContent("organization")}
      </div>
    </div>
  );
};

export default ProfileLinks;
