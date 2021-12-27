import { Temperature } from "src/shared";
import sunnyIcon from "src/assets/svg/wi-day-sunny.svg";

import classes from "./forecast-item.module.css";

type ForecastItemProps = {
  index: number;
};

export const ForecastItem = (props: ForecastItemProps) => {
  const { index } = props;
  return (
    <div className={classes.forecastItem}>
      <img src={sunnyIcon} alt="weather-icon" />
      <Temperature value={25} unit="C" fontSize="M" />
      <div className={classes.dayOfWeek}>day {index}</div>
    </div>
  );
};
