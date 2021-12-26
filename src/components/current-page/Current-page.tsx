import { useAppSelector } from "src/store";

import { Favorites, Home } from "./components";

export const CurrentPage = () => {
  const appLocation = useAppSelector(
    (state) => state.navigationReducer
  ).location;

  switch (appLocation) {
    case "/":
      return <Home />;
    case "/favorites":
      return <Favorites />;
    default:
      //TODO: 404 page
      return <Home />;
  }
};
