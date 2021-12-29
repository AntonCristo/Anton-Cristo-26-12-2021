import { useEffect } from "react";
import { fetchLocationFromApiByGeoLocation } from "src/services/autocomplete-service";
import { Spinner } from "src/shared";
import {
  navigationActions,
  fetchCurrentWeatherByLocationKey,
  fetchFiveDayForecastByLocationKey,
  weatherActions,
  customAlertActions,
  favoritesActions,
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
        dispatch(
          weatherActions.setLocationKey(weatherState.defaultLocationKey)
        );
      });
  };

  const accessGrantedToClientsLocation = (lat: number, lon: number) => {
    fetchLocationFromApiByGeoLocation(lat, lon)
      .then((location) => {
        const clientKey = location.data.Key;
        const clientLocationName = location.data.LocalizedName;
        dispatch(fetchCurrentWeatherByLocationKey(clientKey));

        return [clientKey, clientLocationName];
      })
      .then((geolocationResult) => {
        dispatch(fetchFiveDayForecastByLocationKey(geolocationResult[0]));
        return geolocationResult;
      })
      .then((geolocationResult) => {
        dispatch(weatherActions.setLocationName(geolocationResult[1]));
        dispatch(weatherActions.setLocationKey(geolocationResult[0]));
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
    dispatch(favoritesActions.initFromLocalStorage());
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!weatherState.networkError) {
      defaultOrClientLocation();
    }
    //eslint-disable-next-line
  }, []);

  if (weatherState.networkError) {
    dispatch(
      customAlertActions.customAlert(
        "Service is unavailable right now, please try again later."
      )
    );
  }

  const isHomePageReady =
    !weatherState.networkError &&
    weatherState.forecast.fiveDays.length &&
    weatherState.description;

  if (isHomePageReady) {
    dispatch(navigationActions.setLocation("/home"));
    return null;
  }

  return (
    <div className={classes.landing}>
      <div>
        {weatherState.networkError ? "Service not available :\\" : "Welcome"}
      </div>
      {weatherState.networkError ? null : <Spinner />}
    </div>
  );
};
