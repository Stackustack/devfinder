import classes from "./Search.module.css";

import Button from "../ui/Button";
import Card from "../ui/Card";
import icon from "./../../assets/314807_search_icon.svg";
import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../store/app-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const { isLoading, search, inputValue, updateInput } = useContext(AppContext);
  const SEARCH_ON_TYPE_DELAY = 800;

  // "Search On Type", delayed by 800ms
  useEffect(() => {
    if (!inputValue) {
      return;
    }

    const timer = setTimeout(() => {
      search(inputValue);
    }, SEARCH_ON_TYPE_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [search, inputValue]);

  const spinner = (
    <div className={classes["search__button--loading"]}>
      <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
    </div>
  );

  return (
    <Card>
      <div className={classes.search}>
        <img className={classes.search__icon} src={icon} alt="search icon" />
        {/* Two inputs problem, check info at the bottom */}
        <input
          className={classes["search__input--small"]}
          placeholder="Search username..."
          value={inputValue}
          onChange={(e) => updateInput(e.target.value)}
          spellCheck="false"
        />
        <input
          className={classes["search__input--big"]}
          placeholder="Search GitHub username..."
          value={inputValue}
          onChange={(e) => updateInput(e.target.value)}
          spellCheck="false"
        />
        <Button
          text={isLoading ? spinner : "Search"}
          disabled={isLoading ? true : false}
          onClick={() => inputValue && search(inputValue)}
        />
      </div>
    </Card>
  );
};

export default Search;

// We're only displaying one of the inputs based on media query 
// This is due to placeholder text being too long for smaller devices 
// I haven't found better way to change placeholder...
// Solution?  
// I could use customHook to check for offsetWidth of body element
// and put that value in state. Then in Search component use useEffect to watch for
// any changes to body width and return short/long text based on that. 
// But isn't that too much? 
