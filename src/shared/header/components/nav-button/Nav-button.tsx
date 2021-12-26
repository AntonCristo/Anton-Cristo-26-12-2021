import { AppLocation, navigationActions } from "src/slices";
import { useAppDispatch, useAppSelector } from "src/store";

import classes from "./nav-button.module.css";

export type NavItem = {
  text: string;
  linkTo: AppLocation;
  icon: string;
};

export type NavButtonProps = {
  navItem: NavItem;
};

export const NavButton = (props: NavButtonProps) => {
  const { navItem } = props;

  const dispatch = useAppDispatch();
  const appLocation = useAppSelector(
    (state) => state.navigationReducer
  ).location;

  const isActiveLocation = appLocation === navItem.linkTo;

  const navigate = () => {
    dispatch(navigationActions.setLocation(navItem.linkTo));
  };

  return (
    <button
      onClick={navigate}
      className={[classes.navButton, isActiveLocation && classes.active].join(
        " "
      )}
    >
      <img src={navItem.icon} alt="button-icon" />
      <span>{navItem.text}</span>
    </button>
  );
};
