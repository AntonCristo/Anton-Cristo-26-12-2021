import { CSSProperties } from "react";

import { getInlineStyleByFontSize } from "./utils";

import classes from "./temperature.module.css";
import { useAppDispatch } from "src/store";
import { weatherActions } from "src/slices";

type TemperatureProps = {
  fontSize: "L" | "M" | "S";
  value: number;
  unit: "F" | "C";
};

export const Temperature = (props: TemperatureProps) => {
  const { fontSize, unit, value } = props;
  const dispatch = useAppDispatch();

  const helperStyle: { [x: string]: CSSProperties } =
    getInlineStyleByFontSize(fontSize);

  const onUnitClickHandler = () => {
    dispatch(weatherActions.setDisplayUnit(unit === "F" ? "C" : "F"));
  };

  return (
    <div className={classes.temperature}>
      <div style={helperStyle.valueStyle} className={classes.value}>
        {value}
        <div style={helperStyle.circleStyle} className={classes.circle}></div>
      </div>
      <div
        title={"Toggle unit F/C"}
        style={helperStyle.unitStyle}
        className={classes.units}
        onClick={onUnitClickHandler}
      >
        {unit}
      </div>
    </div>
  );
};
