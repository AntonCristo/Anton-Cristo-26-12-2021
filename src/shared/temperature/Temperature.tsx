import { CSSProperties } from "react";

import { getInlineStyleByFontSize } from "./utils";

import classes from "./temperature.module.css";

type TemperatureProps = {
  fontSize: "L" | "M" | "S";
  value: number;
  unit: "F" | "C";
};

export const Temperature = (props: TemperatureProps) => {
  const { fontSize, unit, value } = props;

  const helperStyle: { [x: string]: CSSProperties } =
    getInlineStyleByFontSize(fontSize);

  return (
    <div className={classes.temperature}>
      <div style={helperStyle.valueStyle} className={classes.value}>
        {value}
        <div style={helperStyle.circleStyle} className={classes.circle}></div>
      </div>
      <div style={helperStyle.unitStyle} className={classes.units}>
        {unit}
      </div>
    </div>
  );
};
