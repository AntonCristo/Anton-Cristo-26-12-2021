import { ListItem } from "./components";

import classes from "./search-autocomplete.module.css";

export type SearchAutoCompleteProps = {
  autocompleteResults: string[];
};

export const SearchAutoComplete = (props: SearchAutoCompleteProps) => {
  const { autocompleteResults } = props;
  return autocompleteResults.length ? (
    <ul className={classes.searchAutocomplete}>
      {autocompleteResults.map((autocomplete, index) => (
        <ListItem key={index + autocomplete} item={autocomplete} />
      ))}
    </ul>
  ) : null;
};
