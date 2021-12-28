export const celsiusFahrenheitConvertor = (
  originalUnit: "F" | "C",
  value: number
) => {
  if (originalUnit === "C") {
    return ((value * 9) / 5 + 32).toFixed(1);
  } else {
    return (((value - 32) * 5) / 9).toFixed(1);
  }
};
