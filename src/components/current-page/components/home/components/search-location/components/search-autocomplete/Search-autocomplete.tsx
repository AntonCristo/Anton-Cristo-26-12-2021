import { useIsDarkMode } from "src/hooks";
import { LocationResult } from "src/slices";
import { ListItem } from "./components";

import classes from "./search-autocomplete.module.css";

export type SearchAutoCompleteProps = {
  autocompleteResults: LocationResult[];
};

export const SearchAutoComplete = (props: SearchAutoCompleteProps) => {
  const { autocompleteResults } = props;
  const isDarkMode = useIsDarkMode();

  return autocompleteResults.length ? (
    <ul
      className={[
        classes.searchAutocomplete,
        isDarkMode && classes.darkMode,
      ].join(" ")}
    >
      {autocompleteResults.map((autocomplete, index) => (
        <ListItem key={index + autocomplete.key} item={autocomplete} />
      ))}
    </ul>
  ) : null;
};
