import { RefObject, useEffect, useRef, KeyboardEvent } from "react";
import { useAppSelector, useAppDispatch } from "src/store";
import { customAlertActions } from "src/slices";

import classes from "./custom-alert.module.css";

export const CustomAlert = () => {
  const alertWrapperRef: RefObject<HTMLDivElement> = useRef(null);

  const dispatch = useAppDispatch();
  const alertMessage = useAppSelector(
    (state) => state.customAlertReducer
  ).message;

  const isVisible = !!alertMessage;

  const onConfirmationClickHandler = () => {
    dispatch(customAlertActions.closeAlert());
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
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
      className={classes.customAlert}
    >
      <div className={classes.alert}>
        <div className={classes.header}>weather app says</div>
        <div className={classes.body}>{alertMessage}</div>
        <div className={classes.footer}>
          <button onClick={onConfirmationClickHandler}>OK</button>
        </div>
      </div>
    </div>
  ) : null;
};
