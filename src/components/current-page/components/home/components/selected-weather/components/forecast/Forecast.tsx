import { useAppSelector } from "src/store";
import { ForecastItem } from "./components";

import classes from "./forecast.module.css";

export const Forecast = () => {
  const weatherForeCast = useAppSelector(
    (state) => state.weatherReducer
  ).forecast;

  return (
    <div className={classes.forecast}>
      <div className={classes.header}>{weatherForeCast.headline}</div>
      <div className={classes.forecastContainer}>
        {weatherForeCast.fiveDays.map((forecastItem, index) => (
          <ForecastItem key={forecastItem.date} foreCastItem={forecastItem} />
        ))}
      </div>
    </div>
  );
};
