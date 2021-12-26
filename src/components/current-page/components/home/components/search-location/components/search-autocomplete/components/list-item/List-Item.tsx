import classes from "./list-item.module.css";

export type ListItemProps = {
  item: string;
};

export const ListItem = (props: ListItemProps) => {
  const { item } = props;
  return <li className={classes.listItem}>{item}</li>;
};
