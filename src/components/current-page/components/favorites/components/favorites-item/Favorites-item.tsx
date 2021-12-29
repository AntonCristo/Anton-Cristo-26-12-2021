import { MouseEvent } from "react";
import { useIsDarkMode } from "src/hooks";
import { Temperature, WeatherIcon } from "src/shared";
import {
  customAlertActions,
  favoritesActions,
  FavoritesItem as FavoritesItemType,
  fetchCurrentWeatherByLocationKey,
  fetchFiveDayForecastByLocationKey,
  navigationActions,
  weatherActions,
} from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./favorites-item.module.css";

type FavoritesItemProps = {
  favorite: FavoritesItemType;
};

export const FavoritesItem = (props: FavoritesItemProps) => {
  const { favorite } = props;
  const isDarkMode = useIsDarkMode();
  const displayUnit = useAppSelector(
    (state) => state.weatherReducer
  ).displayUnit;
  const dispatch = useAppDispatch();

  const _temperatureValue = favorite.currentWeather[displayUnit].value || 0;

  const onRemoveClicked = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const keyToRemove = event.currentTarget.getAttribute("data-key-id");
    if (keyToRemove) {
      dispatch(favoritesActions.removeFromFavorites(keyToRemove));
    }
  };

  const setHomePageToDisplayClickedWeather = () => {
    dispatch(fetchCurrentWeatherByLocationKey(favorite.locationKeyId))
      .then(() => {
        dispatch(fetchFiveDayForecastByLocationKey(favorite.locationKeyId));
      })
      .then(() => {
        dispatch(weatherActions.setLocationName(favorite.locationName));
        dispatch(weatherActions.setLocationKey(favorite.locationKeyId));
      })
      .then(() => {
        dispatch(navigationActions.setLocation("/home"));
      })
      .catch(() => {
        dispatch(navigationActions.setLocation("/"));
        setTimeout(() => {
          dispatch(
            customAlertActions.customAlert(
              "A Network error has happend, please true again later."
            )
          );
        }, 0);
      });
  };

  return (
    <div
      onClick={setHomePageToDisplayClickedWeather}
      className={[classes.favoritesItem, isDarkMode && classes.darkMode].join(
        " "
      )}
    >
      <div className={classes.temperatureGuard}>
        <Temperature
          fontSize="M"
          unit={displayUnit}
          value={_temperatureValue}
        />
      </div>
      <div className={classes.location}>{favorite.locationName}</div>
      <div
        className={[
          classes.description,
          isDarkMode && classes.darkModeColor,
        ].join(" ")}
      >
        {favorite.description}
      </div>
      <WeatherIcon iconNumber={favorite.weatherIcon} />
      <button data-key-id={favorite.locationKeyId} onClick={onRemoveClicked}>
        delete
      </button>
    </div>
  );
};
