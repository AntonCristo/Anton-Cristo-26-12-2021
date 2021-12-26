import clearSearchIcon from "src/assets/svg/clear.svg";
import clearSearchIconDisabled from "src/assets/svg/clear-gray.svg";
import { useAppDispatch, useAppSelector } from "src/store";
import { locationSearchActions } from "src/slices";

import classes from "./clear-search.module.css";

export const ClearSearch = () => {
  const dispatch = useAppDispatch();
  const currentSearch = useAppSelector(
    (state) => state.locationSearchReducer
  ).currentSearch;

  const clearSearchHandler = () => {
    const resetSearchValue = "";

    dispatch(locationSearchActions.setCurrentSearch(resetSearchValue));
  };

  return (
    <img
      className={classes.clearSearch}
      onClick={clearSearchHandler}
      src={!!currentSearch ? clearSearchIcon : clearSearchIconDisabled}
      alt="search-icon"
    />
  );
};
