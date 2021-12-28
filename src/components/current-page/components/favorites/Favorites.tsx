import { Header } from "src/shared";
import { useAppSelector } from "src/store";

import { FavoritesItem } from "./components";

import classes from "./favorites.module.css";

export const Favorites = () => {
  const favoritesState = useAppSelector((state) => state.favoritesReducer);

  const hasFavorites = !!Object.keys(favoritesState.favorites).length;
  console.log(Object.keys(favoritesState.favorites).length);

  return (
    <div>
      <Header />
      <div className={classes.subHeader}>
        {hasFavorites
          ? "Your favorite location, click to see current weather"
          : "Save your default/Searched location to view on this page"}
      </div>
      <div className={classes.itemsWrapper}>
        {Object.values(favoritesState.favorites).map((favItem, index) => (
          <FavoritesItem
            key={favItem.locationKeyId + index}
            favorite={favItem}
          />
        ))}
      </div>
    </div>
  );
};
