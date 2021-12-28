import { Temperature } from "src/shared";
import { useAppSelector } from "src/store";

import {
  Location,
  WeatherDescription,
  AddToFavorites,
  UnitsToggle,
} from "./components";

import classes from "./current-weather.module.css";

export const CurrentWeather = () => {
  const currentWeather = useAppSelector((state) => state.weatherReducer);
  const _location = currentWeather.location || "Default";
  const _displayUnit = currentWeather.displayUnit;
  const _value = currentWeather.temperature[_displayUnit].value || 20;
  const _description = currentWeather.description;

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
