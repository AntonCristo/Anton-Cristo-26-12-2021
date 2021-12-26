import { Temperature } from "src/shared";

import { Location, WeatherDescription } from "./components";

import classes from "./current-weather.module.css";

export const CurrentWeather = () => {
  return (
    <div className={classes.currentWeather}>
      <Temperature value={20} unit="C" fontSize="L" />
      <Location location="Tel-Aviv" />
      <WeatherDescription description="Sunny and shiny , go to the beach" />
    </div>
  );
};
