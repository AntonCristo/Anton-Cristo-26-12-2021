import { useEffect } from "react";
import { fetchLocationFromApiByGeoLocation } from "src/services/autocomplete-service";
import { Spinner } from "src/shared";
import {
  navigationActions,
  fetchCurrentWeatherByLocationKey,
  fetchFiveDayForecastByLocationKey,
  weatherActions,
  customAlertActions,
} from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./landing.module.css";

export const Landing = () => {
  const weatherState = useAppSelector((state) => state.weatherReducer);
  const dispatch = useAppDispatch();

  const accessDeniedToClientsLoaction = () => {
    dispatch(fetchCurrentWeatherByLocationKey(weatherState.defaultLocationKey))
      .then(() => {
        dispatch(
          fetchFiveDayForecastByLocationKey(weatherState.defaultLocationKey)
        );
      })
      .then(() => {
        dispatch(
          weatherActions.setLocationName(weatherState.defaultLocationName)
        );
      })
      .catch((err) => {
        dispatch(
          customAlertActions.customAlert(
            "A Network Error Has Happend, Please Try Again Later!"
          )
        );
      });
  };

  const accessGrantedToClientsLocation = (lat: number, lon: number) => {
    fetchLocationFromApiByGeoLocation(lat, lon)
      .then((location) => {
        const clientKey = location.data.Key;
        const clientLocationName = location.data.LocalizedName;
        dispatch(fetchCurrentWeatherByLocationKey(clientKey)).then(() => {
          dispatch(weatherActions.setLocationName(clientLocationName));
        });
      })
      .catch((err) => {
        dispatch(
          customAlertActions.customAlert(
            "A Network Error Has Happend, Please Try Again Later!"
          )
        );
      });
  };

  const defaultOrClientLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const lat = success.coords.latitude;
        const lon = success.coords.longitude;
        accessGrantedToClientsLocation(lat, lon);
      },
      (error) => {
        accessDeniedToClientsLoaction();
      }
    );
  };

  useEffect(() => {
    defaultOrClientLocation();
    //eslint-disable-next-line
  }, []);

  if (!weatherState.networkError && weatherState.location) {
    dispatch(navigationActions.setLocation("/home"));
  } else {
    dispatch(
      customAlertActions.customAlert(
        "Service is unavailable right now, please try again later."
      )
    );
  }

  return (
    <div className={classes.landing}>
      <div>{weatherState.networkError ? "Error :\\" : "Welcome"}</div>
      {weatherState.networkError ? null : <Spinner />}
    </div>
  );
};
