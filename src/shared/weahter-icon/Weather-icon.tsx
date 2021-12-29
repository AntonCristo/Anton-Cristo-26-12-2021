import { numberToIconMap } from "./utils";

import classes from "./weather-icon.module.css";

type WeatherIConProps = {
  iconNumber: number;
};

export const WeatherIcon = (props: WeatherIConProps) => {
  const { iconNumber } = props;

  const _icon = numberToIconMap[iconNumber];

  return (
    <div className={classes.iconWrapper}>
      {_icon ? <img src={_icon} alt="weather-icon" /> : "N/A"}
    </div>
  );
};
