import favoriteIcon from "src/assets/svg/favorites.svg";
import favoriteIconGold from "src/assets/svg/favorites-gold.svg";
import {
  customAlertActions,
  favoritesActions,
  FavoritesItem,
} from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./add-to-favorites.module.css";
import { useIsDarkMode } from "src/hooks";

export const AddToFavorites = () => {
  const isDarkMode = useIsDarkMode();
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
      weatherIcon: currentWeather.icon,
    };
    dispatch(favoritesActions.addToFavorites(currentLocationAsFavoritesItem));
    dispatch(
      customAlertActions.customAlert(
        `${currentWeather.location} is now on Favorites page :)`
      )
    );
  };

  const removeCurrentLocationFromVaorites = () => {
    dispatch(favoritesActions.removeFromFavorites(currentWeather.locationKey));
  };

  return (
    <button
      onClick={
        isFavorite
          ? removeCurrentLocationFromVaorites
          : addCurrentLocationToFavorites
      }
      className={[classes.addToFavorite, isDarkMode && classes.darkMode].join(
        " "
      )}
    >
      {isFavorite ? "Saved!" : "Save"}{" "}
      <img src={isFavorite ? favoriteIconGold : favoriteIcon} alt="" />
    </button>
  );
};
