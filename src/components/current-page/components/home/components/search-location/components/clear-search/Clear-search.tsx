import clearSearchIcon from "src/assets/svg/clear.svg";
import clearSearchIconDisabled from "src/assets/svg/clear-gray.svg";

import classes from "./clear-search.module.css";

type ClearSearchProps = {
  searchedValue: string;
  clearSearch: () => void;
};

export const ClearSearch = (props: ClearSearchProps) => {
  const { clearSearch, searchedValue } = props;

  return (
    <img
      className={classes.clearSearch}
      onClick={clearSearch}
      src={!!searchedValue ? clearSearchIcon : clearSearchIconDisabled}
      alt="search-icon"
    />
  );
};
