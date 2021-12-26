import { navigationActions } from "src/slices";
import { useAppDispatch } from "src/store";

export const Favorites = () => {
  const dispatch = useAppDispatch();

  const goToFavorites = () => {
    dispatch(navigationActions.setLocation("/"));
  };

  return (
    <div>
      favorites
      <button onClick={goToFavorites}>Home</button>
    </div>
  );
};
