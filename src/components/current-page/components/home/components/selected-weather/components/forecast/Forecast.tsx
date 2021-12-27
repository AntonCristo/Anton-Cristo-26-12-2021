import { ForecastItem } from "./components";

import classes from "./forecast.module.css";

export const Forecast = () => {
  return (
    <div className={classes.forecast}>
      <div className={classes.header}>Upcoming:</div>
      <div className={classes.forecastContainer}>
        {[0, 1, 2, 3, 4].map((forecastItem, index) => (
          <ForecastItem index={forecastItem} key={index} />
        ))}
      </div>
    </div>
  );
};
