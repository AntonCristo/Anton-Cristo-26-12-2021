import { MouseEvent } from "react";
import { Temperature } from "src/shared";
import {
  favoritesActions,
  FavoritesItem as FavoritesItemType,
} from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./favorites-item.module.css";

type FavoritesItemProps = {
  favorite: FavoritesItemType;
};

export const FavoritesItem = (props: FavoritesItemProps) => {
  const { favorite } = props;
  const displayUnit = useAppSelector(
    (state) => state.weatherReducer
  ).displayUnit;
  const dispatch = useAppDispatch();

  const _temperatureValue = favorite.currentWeather[displayUnit].value || 0;

  const onRemoveClicked = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const keyToRemove = event.currentTarget.getAttribute("data-key-id");
    if (keyToRemove) {
      dispatch(favoritesActions.removeFromFavorites(keyToRemove));
    }
  };

  const setHomePageToDisplayClickedWeather = () => {
    alert("navigate and dipatch");
  };

  return (
    <div
      onClick={setHomePageToDisplayClickedWeather}
      className={classes.favoritesItem}
    >
      <div className={classes.temperatureGuard}>
        <Temperature
          fontSize="M"
          unit={displayUnit}
          value={_temperatureValue}
        />
      </div>
      <div className={classes.location}>{favorite.locationName}</div>
      <div className={classes.description}>{favorite.description}</div>
      <button data-key-id={favorite.locationKeyId} onClick={onRemoveClicked}>
        remove
      </button>
    </div>
  );
};
