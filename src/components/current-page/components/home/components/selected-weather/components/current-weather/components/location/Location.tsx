import classes from "./location.module.css";

type LocationProps = {
  location: string;
};

export const Location = (props: LocationProps) => {
  const { location } = props;
  return <div className={classes.location}>{location}</div>;
};
