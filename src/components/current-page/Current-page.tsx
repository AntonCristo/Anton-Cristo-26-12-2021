import { useAppSelector } from "src/store";

import { Favorites, Home, Landing } from "./components";

export const CurrentPage = () => {
  const appLocation = useAppSelector(
    (state) => state.navigationReducer
  ).location;

  switch (appLocation) {
    case "/":
      return <Landing />;
    case "/home":
      return <Home />;
    case "/favorites":
      return <Favorites />;
    default:
      return <Landing />;
  }
};
