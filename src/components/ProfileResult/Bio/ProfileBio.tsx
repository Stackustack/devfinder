import { useProfile } from "../../../store/Profile/useProfileResult";
import classes from "./ProfileBio.module.css";

const ProfileBio = () => {
  const { bio } = useProfile();

  const styles = (): string =>
    `
      ${classes.bio} 
      ${!bio && classes["bio--hidden"]}
    `;

  return <div className={styles()}>{bio}</div>;
};

export default ProfileBio;
