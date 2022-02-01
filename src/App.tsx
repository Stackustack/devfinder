import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import ProfileResult from "./components/ProfileResult/ProfileResult";
import Search from "./components/Search/Search";
import { useContext, useEffect } from "react";
import { AppContext } from "./store/app-context";

function App() {
  const { inputValue, search } = useContext(AppContext);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    const timer = setTimeout(() => {
      search(inputValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search, inputValue]);

  return (
    <div className={classes.app}>
      <Header />
      <Search />
      <ProfileResult />
    </div>
  );
}

export default App;
