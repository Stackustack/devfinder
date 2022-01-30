import classes from "./ProfileLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMapMarkerAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const ProfileLinks = () => {
  return (
    <div className={classes.profileLinks}>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        San Francisco
      </div>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faTwitter} />
        Twitter
      </div>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faLink} />
        https://github.blog
      </div>
      <div className={classes.profileLinks__item}>
        <FontAwesomeIcon icon={faBuilding} />
        @agithub
      </div>
    </div>
  );
};

export default ProfileLinks;
