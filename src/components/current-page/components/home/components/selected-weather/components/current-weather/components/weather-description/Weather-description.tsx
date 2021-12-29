import { useIsDarkMode } from "src/hooks";

import classes from "./weather-description.module.css";

type WeatherDescriptionProps = {
  description: string;
};

export const WeatherDescription = (props: WeatherDescriptionProps) => {
  const { description } = props;
  const isDarkMode = useIsDarkMode();

  return (
    <div
      className={[
        classes.weatherDescription,
        isDarkMode && classes.darkMode,
      ].join(" ")}
    >
      {description}
    </div>
  );
};
