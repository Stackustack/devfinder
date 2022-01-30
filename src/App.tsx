import React from "react";
import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import ProfileResult from "./components/ProfileResult/ProfileResult";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Search />
      <ProfileResult />
    </div>
  );
}

export default App;
