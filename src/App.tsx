import classes from "./App.module.css";
import Header from "./components/Header/Header";
import ProfileResult from "./components/ProfileResult/ProfileResult";
import Search from "./components/Search/Search";
import AnimateCard from "./components/ui/AnimateCard";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Search />
      <AnimateCard>
        <ProfileResult />
      </AnimateCard>
    </div>
  );
}

export default App;
