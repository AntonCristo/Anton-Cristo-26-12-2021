import favoriteIcon from "src/assets/svg/favorites.svg";
import favoriteIconGold from "src/assets/svg/favorites-gold.svg";
import { favoritesActions, FavoritesItem } from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./add-to-favorites.module.css";

export const AddToFavorites = () => {
  const dispatch = useAppDispatch();
  const currentWeather = useAppSelector((state) => state.weatherReducer);
  const favorites = useAppSelector((state) => state.favoritesReducer).favorites;

  const isFavorite = Object.keys(favorites).includes(
    currentWeather.locationKey
  );

  const addCurrentLocationToFavorites = () => {
    const currentLocationAsFavoritesItem: FavoritesItem = {
      currentWeather: {
        F: { value: currentWeather.temperature.F.value },
        C: { value: currentWeather.temperature.C.value },
      },
      description: currentWeather.description,
      locationKeyId: currentWeather.locationKey,
      locationName: currentWeather.location,
    };
    dispatch(favoritesActions.addToFavorites(currentLocationAsFavoritesItem));
  };

  return (
    <button
      onClick={addCurrentLocationToFavorites}
      className={classes.addToFavorite}
    >
      {isFavorite ? "Saved!" : "Save"}{" "}
      <img src={isFavorite ? favoriteIconGold : favoriteIcon} alt="" />
    </button>
  );
};
