import { Temperature } from "src/shared";

import classes from "./current-weather.module.css";

export const CurrentWeather = () => {
  return (
    <div className={classes.currentWeather}>
      <Temperature value={25} unit="C" fontSize="L" />
      {/* location */}
      {/* description */}
    </div>
  );
};
