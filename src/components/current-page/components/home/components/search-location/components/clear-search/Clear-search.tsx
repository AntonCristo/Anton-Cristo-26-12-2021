import clearSearchIcon from "src/assets/svg/clear.svg";
import clearSearchIconDisabled from "src/assets/svg/clear-gray.svg";

export const ClearSearch = () => {
  const hasSearchValue = false;

  return (
    <img
      src={hasSearchValue ? clearSearchIcon : clearSearchIconDisabled}
      alt="search-icon"
    />
  );
};
