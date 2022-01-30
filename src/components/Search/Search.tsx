import classes from "./Search.module.css";

import Button from "../ui/Button";
import Card from "../ui/Card";
import icon from "./../../assets/314807_search_icon.svg";
import { useContext, useRef } from "react";
import { AppContext } from "../../store/app-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const ctx = useContext(AppContext);
  const { isLoading } = useContext(AppContext);

  const inputValueRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    const inputValue = inputValueRef.current?.value;

    if (inputValue) {
      ctx.search(inputValue);
    }
  };

  const loadingState = (
    <div className={classes["search__button--loading"]}>
      <div>Loading</div>
      <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
    </div>
  );

  return (
    <Card>
      <div className={classes.search}>
        <img className={classes["search__icon"]} src={icon} alt="search icon" />
        <input
          className={classes["search__input"]}
          placeholder="Search GitHub username..."
          ref={inputValueRef}
        />
        <Button
          text={isLoading ? loadingState : "Search"}
          disabled={isLoading ? true : false}
          onClick={onClickHandler}
        />
      </div>
    </Card>
  );
};

export default Search;
