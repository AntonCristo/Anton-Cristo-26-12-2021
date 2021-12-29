import lightModeIcon from "src/assets/svg/light-mode.svg";
import darkModeIcon from "src/assets/svg/dark-mode.svg";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./theme-mode-button.module.css";
import { darkModeActions } from "src/slices";

export const ThemeModeButton = () => {
  const dispatch = useAppDispatch();
  const darkModeState = useAppSelector(
    (state) => state.darkModeReducer
  ).darkMode;

  const onThemeButtonClicked = () => {
    dispatch(darkModeActions.toggleDarkMode());
  };

  return (
    <button
      onClick={onThemeButtonClicked}
      className={[
        classes.themeModeButton,
        darkModeState && classes.darkMode,
      ].join(" ")}
    >
      <img
        src={darkModeState ? darkModeIcon : lightModeIcon}
        alt="button-icon"
      />
      <span>Mode</span>
    </button>
  );
};
