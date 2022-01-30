import classes from "./Search.module.css";

import Button from "../ui/Button";
import Card from "../ui/Card";
import icon from "./../../assets/314807_search_icon.svg";

const Search = () => {
  return (
    <Card>
      <div className={classes.search}>
        <img className={classes["search__icon"]} src={icon} alt="search icon" />
        <input
          className={classes["search__input"]}
          placeholder="Search GitHub username..."
        />
        <Button text="Search" />
      </div>
    </Card>
  );
};

export default Search;
