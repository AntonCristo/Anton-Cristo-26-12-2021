import { Header } from "src/shared";

import { SearchLocation, SelectedWeather } from "./components";

import classes from "./home.module.css";

export const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <SearchLocation />
      <SelectedWeather />
    </div>
  );
};
