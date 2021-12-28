import { Temperature } from "src/shared";
import { DailyForecast } from "src/slices";
import dayjs from "dayjs";

import classes from "./forecast-item.module.css";
import { useAppSelector } from "src/store";

type ForecastItemProps = {
  foreCastItem: DailyForecast;
};

export const ForecastItem = (props: ForecastItemProps) => {
  const { foreCastItem } = props;
  const displayUnit = useAppSelector(
    (state) => state.weatherReducer
  ).displayUnit;

  const _maxTemp = foreCastItem.maxTemp[displayUnit].value || 0;
  const _minTemp = foreCastItem.minTemp[displayUnit].value || 0;

  return (
    <div className={classes.forecastItem}>
      <div className={classes.dayOfWeek}>
        {dayjs(foreCastItem.date).format("DD/MM ddd")}
      </div>
      <div className={classes.minMaxWrapper}>
        <Temperature value={_minTemp} unit={displayUnit} fontSize="S" />
        <div className={classes.seperator}>-</div>
        <Temperature value={_maxTemp} unit={displayUnit} fontSize="S" />
      </div>
      <div className={classes.descriptionText}>
        <div className={classes.descriptionTextHeader}>Day</div>
        {foreCastItem.dayDescription}
      </div>
      <div className={classes.descriptionText}>
        <div className={classes.descriptionTextHeader}>Night</div>
        {foreCastItem.nightDescription}
      </div>
    </div>
  );
};
