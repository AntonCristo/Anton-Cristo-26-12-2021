import { Temperature } from "src/shared";

import { Location } from "./components";

import classes from "./current-weather.module.css";

export const CurrentWeather = () => {
  return (
    <div className={classes.currentWeather}>
      <Temperature value={25} unit="C" fontSize="L" />
      <Location location="Tel-Aviv" />
      {/* description */}
    </div>
  );
};
