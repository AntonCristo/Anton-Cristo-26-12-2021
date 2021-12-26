import { Header } from "src/shared";

import { SearchLocation } from "./components";

import classes from "./home.module.css";

export const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <SearchLocation />
    </div>
  );
};
