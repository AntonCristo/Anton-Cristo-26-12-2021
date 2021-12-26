import { useAppDispatch } from "src/store";
import { navigationActions } from "src/slices";

export const Home = () => {
  const dispatch = useAppDispatch();

  const goToFavorites = () => {
    dispatch(navigationActions.setLocation("/favorites"));
  };

  return (
    <div>
      Home
      <button onClick={goToFavorites}>favorites</button>
    </div>
  );
};
