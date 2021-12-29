import { useIsDarkMode } from "src/hooks";
import classes from "./location.module.css";

type LocationProps = {
  location: string;
};

export const Location = (props: LocationProps) => {
  const { location } = props;
  const isDarkMode = useIsDarkMode();

  return (
    <div
      className={[classes.location, isDarkMode && classes.darkMode].join(" ")}
    >
      {location}
    </div>
  );
};
