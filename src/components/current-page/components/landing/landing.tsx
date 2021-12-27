import { useEffect } from "react";
import { Spinner } from "src/shared";
import {
  navigationActions,
  fetchCurrentWeatherByLocationKey,
  weatherActions,
} from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./landing.module.css";

export const Landing = () => {
  const weatherState = useAppSelector((state) => state.weatherReducer);
  const dispatch = useAppDispatch();

  const defaultOrClientLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const lat = success.coords.latitude;
        const lon = success.coords.longitude;
        dispatch(navigationActions.setLocation("/home"));
      },
      (error) => {
        dispatch(
          fetchCurrentWeatherByLocationKey(weatherState.defaultLocationKey)
        ).then(() => {
          dispatch(
            weatherActions.setLocationName(weatherState.defaultLocationName)
          );
        });
      }
    );
  };

  !weatherState.location && defaultOrClientLocation();

  if (weatherState.location) {
    dispatch(navigationActions.setLocation("/home"));
    return null;
  }

  return (
    <div className={classes.landing}>
      <div>Welcome</div>
      <Spinner />
    </div>
  );
};
