import { MouseEvent } from "react";
import {
  LocationResult,
  fetchCurrentWeatherByLocationKey,
  locationSearchActions,
  weatherActions,
  customAlertActions,
} from "src/slices";
import { useAppDispatch } from "src/store";

import classes from "./list-item.module.css";

export type ListItemProps = {
  item: LocationResult;
};

export const ListItem = (props: ListItemProps) => {
  const { item } = props;
  const dispatch = useAppDispatch();

  const onLocationItemClickHandler = (event: MouseEvent<HTMLLIElement>) => {
    const clickedLocationKey =
      event.currentTarget.getAttribute("data-location-key");

    if (!clickedLocationKey) {
      throw new Error("[onLocationItemClickHandler]:: impossible error");
    }
    dispatch(fetchCurrentWeatherByLocationKey(clickedLocationKey))
      .then(() => {
        dispatch(weatherActions.setLocationName(item.location));
        dispatch(weatherActions.setLocationKey(item.key));
      })
      .catch(() => {
        dispatch(
          customAlertActions.customAlert(
            "A Network error has happend, please true again later."
          )
        );
      });
    dispatch(locationSearchActions.setCurrentSearch(""));
  };

  return (
    <li
      onClick={onLocationItemClickHandler}
      data-location-key={item.key}
      className={classes.listItem}
    >
      {item.location}
    </li>
  );
};
