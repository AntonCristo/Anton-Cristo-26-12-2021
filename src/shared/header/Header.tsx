import homeIcon from "src/assets/svg/home.svg";
import favoritesIcon from "src/assets/svg/favorites.svg";
import sunIcon from "src/assets/svg/wi-day-sunny.svg";

import { NavButton, NavItem, ThemeModeButton } from "./components";

import classes from "./header.module.css";
import { useIsDarkMode } from "src/hooks";

export const Header = () => {
  const isDarkMode = useIsDarkMode();
  const navigationItems: NavItem[] = [
    {
      text: "Home",
      linkTo: "/home",
      icon: homeIcon,
    },
    {
      text: "Favorites",
      linkTo: "/favorites",
      icon: favoritesIcon,
    },
  ];

  return (
    <div className={[classes.header, isDarkMode && classes.darkMode].join(" ")}>
      <div className={classes.headerText}>
        Weather Hero <img src={sunIcon} alt="sun-logo" />
      </div>
      <div className={classes.navigationSection}>
        <ThemeModeButton />
        {navigationItems.map((navItem, index) => (
          <NavButton key={index + navItem.linkTo} navItem={navItem} />
        ))}
      </div>
    </div>
  );
};
