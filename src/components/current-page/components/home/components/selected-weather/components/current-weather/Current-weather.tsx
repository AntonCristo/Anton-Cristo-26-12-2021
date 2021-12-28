import { useEffect } from "react";
import { Temperature } from "src/shared";
import { favoritesActions, FavoritesItem } from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import {
  Location,
  WeatherDescription,
  AddToFavorites,
  UnitsToggle,
} from "./components";

import classes from "./current-weather.module.css";

export const CurrentWeather = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favoritesReducer).favorites;
  const currentWeather = useAppSelector((state) => state.weatherReducer);
  const _location = currentWeather.location || "Default";
  const _displayUnit = currentWeather.displayUnit;
  const _value = currentWeather.temperature[_displayUnit].value || 20;
  const _description = currentWeather.description;

  useEffect(() => {
    const isFavorite = Object.keys(favorites).includes(
      currentWeather.locationKey
    );

    if (isFavorite) {
      const currentAsFavoritesItem: FavoritesItem = {
        currentWeather: currentWeather.temperature,
        description: currentWeather.description,
        locationKeyId: currentWeather.locationKey,
        locationName: currentWeather.location,
      };
      dispatch(favoritesActions.addToFavorites(currentAsFavoritesItem));
    }

    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.currentWeather}>
      <Temperature value={_value} unit={_displayUnit} fontSize="L" />
      <Location location={_location} />
      <WeatherDescription description={_description} />
      <UnitsToggle />
      <AddToFavorites />
    </div>
  );
};
