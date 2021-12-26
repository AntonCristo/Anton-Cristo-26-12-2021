import { NavButton, NavButtonProps } from "./components";

import classes from "./header.module.css";

export const Header = () => {
  const navigationItems: NavButtonProps[] = [
    {
      text: "Home",
      linkTo: "/",
    },
    {
      text: "Favorites",
      linkTo: "/favorites",
    },
  ];

  return (
    <div className={classes.header}>
      <div>Weather Hero</div>
      <div>
        {navigationItems.map((navItem, index) => (
          <NavButton
            key={index + navItem.linkTo}
            linkTo={navItem.linkTo}
            text={navItem.text}
          />
        ))}
      </div>
    </div>
  );
};
