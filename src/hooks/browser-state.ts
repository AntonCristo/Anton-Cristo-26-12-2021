import { AppLocation, navigationActions } from "src/slices";
import { useAppDispatch } from "src/store";

export const useBrowserBackButtonEventListener = () => {
  const dispatch = useAppDispatch();

  window.addEventListener("popstate", () => {
    dispatch(
      navigationActions.setLocation(window.location.pathname as AppLocation)
    );
  });
};
