import { CSSProperties } from "react";

import { getInlineStyleByFontSize } from "./utils";

import classes from "./temperature.module.css";
import { useAppDispatch } from "src/store";
import { weatherActions } from "src/slices";
import { useIsDarkMode } from "src/hooks";

type TemperatureProps = {
  fontSize: "L" | "M" | "S";
  value: number;
  unit: "F" | "C";
};

export const Temperature = (props: TemperatureProps) => {
  const { fontSize, unit, value } = props;
  const isDarkMode = useIsDarkMode();
  const dispatch = useAppDispatch();

  const helperStyle: { [x: string]: CSSProperties } =
    getInlineStyleByFontSize(fontSize);

  const onUnitClickHandler = () => {
    dispatch(weatherActions.setDisplayUnit(unit === "F" ? "C" : "F"));
  };

  return (
    <div className={classes.temperature}>
      <div
        style={helperStyle.valueStyle}
        className={[classes.value, isDarkMode && classes.darkMode].join(" ")}
      >
        {value}
        <div
          style={helperStyle.circleStyle}
          className={[classes.circle, isDarkMode && classes.darkMode].join(" ")}
        ></div>
      </div>
      <div
        title={"Toggle unit F/C"}
        style={helperStyle.unitStyle}
        className={[classes.units, isDarkMode && classes.darkMode].join(" ")}
        onClick={onUnitClickHandler}
      >
        {unit}
      </div>
    </div>
  );
};
