import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMapMarkerAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import classes from "./ProfileLinks.module.css";

import { useProfileLinks } from "../../../store/Profile/useProfileResult";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ProfileLinks = () => {
  const links = useProfileLinks();

  type linksKey = "location" | "twitter_username" | "blog" | "company";

  const icons = (field: linksKey): IconProp => {
    switch (field) {
      case "location":
        return faMapMarkerAlt;
      case "twitter_username":
        return faTwitter;
      case "blog":
        return faLink;
      case "company":
        return faBuilding;
      default:
        throw new Error(`Unhadled icon type case: ${field}`);
    }
  };

  const content = Object.entries(links).map((item) => {
    const linkType = item[0];
    const linkContent = item[1];

    return (
      <div
        className={`
            ${classes.link_item} 
            ${!linkContent ? classes["link_item--disabled"] : ""}
          `}
      >
        <div>
          <FontAwesomeIcon
            className={classes.link_item__icon}
            icon={icons(linkType as linksKey)}
          />
        </div>
        <div className={classes.link_item__text}>
          {linkContent ? linkContent : "Not available"}
        </div>
      </div>
    );
  });

  return <div className={classes.links_container}>{content}</div>;
};

export default ProfileLinks;
