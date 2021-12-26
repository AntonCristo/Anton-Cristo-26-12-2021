import favoriteIcon from "src/assets/svg/favorites.svg";

import classes from "./add-to-favorites.module.css";

export const AddToFavorites = () => {
  return (
    <button className={classes.addToFavorite}>
      Save <img src={favoriteIcon} alt="" />
    </button>
  );
};
