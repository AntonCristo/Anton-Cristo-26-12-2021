import homeIcon from "src/assets/svg/home.svg";
import favoritesIcon from "src/assets/svg/favorites.svg";

import { NavButton, NavItem } from "./components";

import classes from "./header.module.css";

export const Header = () => {
  const navigationItems: NavItem[] = [
    {
      text: "Home",
      linkTo: "/",
      icon: homeIcon,
    },
    {
      text: "Favorites",
      linkTo: "/favorites",
      icon: favoritesIcon,
    },
  ];

  return (
    <div className={classes.header}>
      <div>Weather Hero</div>
      <div className={classes.navigationSection}>
        {navigationItems.map((navItem, index) => (
          <NavButton key={index + navItem.linkTo} navItem={navItem} />
        ))}
      </div>
    </div>
  );
};
