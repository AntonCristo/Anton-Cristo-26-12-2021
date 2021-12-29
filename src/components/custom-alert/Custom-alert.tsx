import React, { RefObject, useEffect, KeyboardEvent } from "react";
import { useAppSelector, useAppDispatch } from "src/store";
import { customAlertActions } from "src/slices";

import classes from "./custom-alert.module.css";
import { useIsDarkMode } from "src/hooks";

export const CustomAlert = () => {
  const alertWrapperRef: RefObject<HTMLDivElement> = React.createRef();
  const isDarkMode = useIsDarkMode();
  const dispatch = useAppDispatch();
  const alertMessage = useAppSelector(
    (state) => state.customAlertReducer
  ).message;

  const isVisible = !!alertMessage;

  const onConfirmationClickHandler = () => {
    dispatch(customAlertActions.closeAlert());
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
      onConfirmationClickHandler();
    }
  };

  useEffect(() => {
    if (alertWrapperRef && alertWrapperRef.current) {
      alertWrapperRef.current.focus();
    }
  }, [alertWrapperRef]);

  return isVisible ? (
    <div
      onKeyDown={onKeyDownHandler}
      ref={alertWrapperRef}
      tabIndex={0}
      className={[
        classes.customAlert,
        isDarkMode && classes.darkModeBackgroundColor,
      ].join(" ")}
    >
      <div className={classes.alert}>
        <div
          className={[
            classes.header,
            isDarkMode && classes.darkModeBackgroundColor,
          ].join(" ")}
        >
          weather app says
        </div>
        <div
          className={[classes.body, isDarkMode && classes.darkMode].join(" ")}
        >
          {alertMessage}
        </div>
        <div
          className={[classes.footer, isDarkMode && classes.darkMode].join(" ")}
        >
          <button onClick={onConfirmationClickHandler}>OK</button>
        </div>
      </div>
    </div>
  ) : null;
};
