import { Header } from "src/shared";
import { customAlertActions, navigationActions } from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import { SearchLocation, SelectedWeather } from "./components";

import classes from "./home.module.css";

export const Home = () => {
  const dispatch = useAppDispatch();
  const weatherState = useAppSelector((state) => state.weatherReducer);

  if (weatherState.networkError) {
    dispatch(
      customAlertActions.customAlert(
        "The Service is unavailable at the moment, please try again later."
      )
    );
    dispatch(navigationActions.setLocation("/"));
    return null;
  }

  return (
    <div className={classes.home}>
      <Header />
      <SearchLocation />
      <SelectedWeather />
    </div>
  );
};
