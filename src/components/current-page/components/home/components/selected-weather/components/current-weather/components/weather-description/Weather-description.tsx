import classes from "./weather-description.module.css";

type WeatherDescriptionProps = {
  description: string;
};

export const WeatherDescription = (props: WeatherDescriptionProps) => {
  const { description } = props;
  return <div className={classes.weatherDescription}>{description}</div>;
};
