import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import ProfileResult from "./components/ProfileResult/ProfileResult";
import Search from "./components/Search/Search";
import { useContext } from "react";
import { AppContext } from "./store/app-context";

function App() {
  const ctx = useContext(AppContext);

  return (
    <div className={classes.app}>
      <Header />
      <Search />
      <ProfileResult />
      <div>{JSON.stringify(ctx, null, "\t")}</div>
    </div>
  );
}

export default App;
