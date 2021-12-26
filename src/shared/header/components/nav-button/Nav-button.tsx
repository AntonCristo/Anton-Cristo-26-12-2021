import { AppLocation, navigationActions } from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./nav-button.module.css";

export type NavButtonProps = {
  text: string;
  linkTo: AppLocation;
};

export const NavButton = (props: NavButtonProps) => {
  const { linkTo, text } = props;

  const dispatch = useAppDispatch();
  const appLocation = useAppSelector(
    (state) => state.navigationReducer
  ).location;

  const isActiveLocation = appLocation === linkTo;

  const navigate = () => {
    dispatch(navigationActions.setLocation(linkTo));
  };

  return (
    <button
      onClick={navigate}
      className={[classes.navButton, isActiveLocation && classes.active].join(
        " "
      )}
    >
      {text}
    </button>
  );
};
