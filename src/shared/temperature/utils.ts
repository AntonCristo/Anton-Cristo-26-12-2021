const FONT_SIZE_TO_LINE_HEIGHT_RATION = 0.7;

export const getInlineStyleByFontSize = (fontSize: "L" | "M" | "S") => {
  let _fontSize = 20;
  let _circleHeight = 6;

  switch (fontSize) {
    case "M":
      _fontSize = _fontSize * 2;
      _circleHeight = 10;
      break;
    case "L":
      _fontSize = _fontSize * 6;
      _circleHeight = 16;
      break;
    default:
      break;
  }

  let _lineHeight = _fontSize * FONT_SIZE_TO_LINE_HEIGHT_RATION;

  return {
    valueStyle: {
      fontSize: `${_fontSize}px`,
      lineHeight: `${_lineHeight}px`,
    },
    unitStyle: {
      fontSize: `${_fontSize / 3}px`,
      lineHeight: `${_lineHeight / 3}px`,
    },
    circleStyle: {
      height: `${_circleHeight}px`,
    },
  };
};
