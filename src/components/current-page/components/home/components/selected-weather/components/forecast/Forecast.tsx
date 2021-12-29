import { useIsDarkMode } from "src/hooks";
import { useAppSelector } from "src/store";
import { ForecastItem } from "./components";

import classes from "./forecast.module.css";

export const Forecast = () => {
  const isDarkMode = useIsDarkMode();
  const weatherForeCast = useAppSelector(
    (state) => state.weatherReducer
  ).forecast;

  return (
    <div
      className={[
        classes.forecast,
        isDarkMode && classes.darkModeBorderTop,
      ].join(" ")}
    >
      <div
        className={[classes.header, isDarkMode && classes.darkModeColor].join(
          " "
        )}
      >
        {weatherForeCast.headline}
      </div>
      <div
        className={[
          classes.forecastContainer,
          isDarkMode && classes.darkMode,
        ].join(" ")}
      >
        {weatherForeCast.fiveDays.map((forecastItem, index) => (
          <ForecastItem key={forecastItem.date} foreCastItem={forecastItem} />
        ))}
      </div>
    </div>
  );
};
