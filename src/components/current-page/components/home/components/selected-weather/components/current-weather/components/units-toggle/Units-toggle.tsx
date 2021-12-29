import { MouseEvent } from "react";
import { useIsDarkMode } from "src/hooks";
import { weatherActions } from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./units-toggle.module.css";

export const UnitsToggle = () => {
  const isDarkMode = useIsDarkMode();
  const dispatch = useAppDispatch();
  const displayUnit = useAppSelector(
    (state) => state.weatherReducer
  ).displayUnit;

  const onToggleUnitClicked = (event: MouseEvent<HTMLButtonElement>) => {
    const clickedUnit = event.currentTarget.getAttribute("data-unit") as
      | "F"
      | "C";

    if (!clickedUnit) {
      throw new Error("[onToggleUnitClicked]:: impossible error");
    }

    const isClickedUnitCurrentlyActive = clickedUnit === displayUnit;

    !isClickedUnitCurrentlyActive &&
      dispatch(weatherActions.setDisplayUnit(clickedUnit));
  };

  return (
    <div className={classes.unitsToggle}>
      <button
        onClick={onToggleUnitClicked}
        data-unit={"C"}
        className={[
          classes.toggleButton,
          displayUnit === "C" &&
            (isDarkMode ? classes.darkModeActive : classes.active),
          isDarkMode && classes.darkMode,
        ].join(" ")}
      >
        C
      </button>
      <button
        onClick={onToggleUnitClicked}
        data-unit={"F"}
        className={[
          classes.toggleButton,
          displayUnit === "F" &&
            (isDarkMode ? classes.darkModeActive : classes.active),
          isDarkMode && classes.darkMode,
        ].join(" ")}
      >
        F
      </button>
    </div>
  );
};
