import { CurrentWeather, Forecast } from "./components";

import classes from "./selected-weather.module.css";

export const SelectedWeather = () => {
  return (
    <div className={classes.selectedWeather}>
      <CurrentWeather />
      <Forecast />
    </div>
  );
};
