import { LocationResult } from "src/slices";
import classes from "./list-item.module.css";

export type ListItemProps = {
  item: LocationResult;
};

export const ListItem = (props: ListItemProps) => {
  const { item } = props;
  return <li className={classes.listItem}>{item.location}</li>;
};
