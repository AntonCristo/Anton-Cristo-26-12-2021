import { ChangeEvent, KeyboardEvent } from "react";
import searchIcon from "src/assets/svg/search.svg";
import { useAppDispatch, useAppSelector } from "src/store";
import { locationSearchActions, customAlertActions } from "src/slices";

import { SearchAutoComplete, ClearSearch } from "./components";

import classes from "./search-location.module.css";

const PLACEHOLDER = "Type location..";
const INVALID_INPUT_PATTERN = /[^a-zA-Z0-9 ]/g;

const autocompleteMock = [
  "Tel-Aviv",
  "Beer-Sheva",
  "Rishon-LeZion",
  "Ashdod",
  "Ramat-Gan",
  "Netanya",
  "Haifa",
];

export const SearchLocation = () => {
  const dispatch = useAppDispatch();
  const currentSearch = useAppSelector(
    (state) => state.locationSearchReducer
  ).currentSearch;

  const filteredAutocomleteResults = autocompleteMock.filter((ac) =>
    ac.toLowerCase().includes(currentSearch.toLowerCase())
  );

  const onLocationSearchChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const typedValue = event.target.value;

    if (typedValue.match(INVALID_INPUT_PATTERN)) {
      dispatch(
        customAlertActions.customAlert(
          "Please use ONLY English input character!"
        )
      );
      clearSearchHandler();
      return;
    }

    dispatch(locationSearchActions.setCurrentSearch(typedValue));
  };

  const clearSearchHandler = () => {
    const resetSearchValue = "";

    dispatch(locationSearchActions.setCurrentSearch(resetSearchValue));
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      clearSearchHandler();
      event.currentTarget.blur();
      return;
    }
  };

  return (
    <div className={classes.searchLocation}>
      <div className={classes.inputWrapper}>
        <img src={searchIcon} alt="search-icon" />
        <input
          value={currentSearch}
          onKeyDown={onKeyDownHandler}
          onChange={onLocationSearchChangeHandler}
          lang="EN"
          placeholder={PLACEHOLDER}
          className={classes.searchInput}
          type="text"
        />
        <ClearSearch />
        {currentSearch ? (
          <SearchAutoComplete
            autocompleteResults={filteredAutocomleteResults}
          />
        ) : null}
      </div>
    </div>
  );
};
