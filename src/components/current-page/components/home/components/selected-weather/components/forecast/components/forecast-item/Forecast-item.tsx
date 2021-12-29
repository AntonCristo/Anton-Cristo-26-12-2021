import dayjs from "dayjs";
import { useAppSelector } from "src/store";
import { Temperature, WeatherIcon } from "src/shared";
import { DailyForecast } from "src/slices";

import classes from "./forecast-item.module.css";
import { useIsDarkMode } from "src/hooks";

type ForecastItemProps = {
  foreCastItem: DailyForecast;
};

export const ForecastItem = (props: ForecastItemProps) => {
  const { foreCastItem } = props;
  const isDarkMode = useIsDarkMode();
  const displayUnit = useAppSelector(
    (state) => state.weatherReducer
  ).displayUnit;

  const _maxTemp = foreCastItem.maxTemp[displayUnit].value || 0;
  const _minTemp = foreCastItem.minTemp[displayUnit].value || 0;
  const _dayIcon = foreCastItem.dayIcon;
  const _nightIcon = foreCastItem.nightIcon;

  return (
    <div className={classes.forecastItem}>
      <div
        className={[
          classes.dayOfWeek,
          isDarkMode && classes.darkModeColor,
        ].join(" ")}
      >
        {dayjs(foreCastItem.date).format("DD/MM ddd")}
      </div>
      <div className={classes.minMaxWrapper}>
        <Temperature value={_minTemp} unit={displayUnit} fontSize="S" />
        <div className={classes.seperator}>-</div>
        <Temperature value={_maxTemp} unit={displayUnit} fontSize="S" />
      </div>
      <div
        className={[
          classes.descriptionText,
          isDarkMode && classes.darkModeColor,
        ].join(" ")}
      >
        <div className={classes.descriptionTextHeader}>DAY</div>
        <div className={classes.text}>{foreCastItem.dayDescription}</div>
        <WeatherIcon iconNumber={_dayIcon} />
      </div>
      <div
        className={[
          classes.descriptionText,
          isDarkMode && classes.darkModeColor,
        ].join(" ")}
      >
        <div className={classes.descriptionTextHeader}>NIGHT</div>
        <div className={classes.text}>{foreCastItem.nightDescription}</div>
        <WeatherIcon iconNumber={_nightIcon} />
      </div>
    </div>
  );
};
