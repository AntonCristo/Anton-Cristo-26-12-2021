import { ChangeEvent } from "react";
import searchIcon from "src/assets/svg/search.svg";
import { useAppDispatch, useAppSelector } from "src/store";
import { locationSearchActions } from "src/slices";

import { SearchAutoComplete, ClearSearch } from "./components";

import classes from "./search-location.module.css";

const PLACEHOLDER = "Type location..";

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

    dispatch(locationSearchActions.setCurrentSearch(typedValue));
  };

  return (
    <div className={classes.searchLocation}>
      <div className={classes.inputWrapper}>
        <img src={searchIcon} alt="search-icon" />
        <input
          value={currentSearch}
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
