import { MouseEvent } from "react";
import { weatherActions } from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./units-toggle.module.css";

export const UnitsToggle = () => {
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
          displayUnit === "C" && classes.active,
        ].join(" ")}
      >
        C
      </button>
      <button
        onClick={onToggleUnitClicked}
        data-unit={"F"}
        className={[
          classes.toggleButton,
          displayUnit === "F" && classes.active,
        ].join(" ")}
      >
        F
      </button>
    </div>
  );
};
