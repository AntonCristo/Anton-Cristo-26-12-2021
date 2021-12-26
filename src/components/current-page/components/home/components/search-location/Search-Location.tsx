import searchIcon from "src/assets/svg/search.svg";

import { ClearSearch } from "./components";

import classes from "./search-location.module.css";

const PLACEHOLDER = "Type location..";

export const SearchLocation = () => {
  return (
    <div className={classes.searchLocation}>
      <div className={classes.inputWrapper}>
        <img src={searchIcon} alt="search-icon" />
        <input
          lang="EN"
          placeholder={PLACEHOLDER}
          className={classes.searchInput}
          type="text"
        />
        <ClearSearch />
      </div>
    </div>
  );
};
