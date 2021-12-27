import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAutocompleteResultsFromApi } from "./location-search-async-actions";

export interface LocationResult {
  key: string;
  location: string;
}

export interface LocationSearchState {
  currentSearch: string;
  //TODO: set a type for returned api object
  searchResults: LocationResult[];
}

const initialState: LocationSearchState = {
  currentSearch: "",
  searchResults: [],
};

export const locationSearchSlice = createSlice({
  name: "locationSearch",
  initialState,
  reducers: {
    setCurrentSearch: (state, action: PayloadAction<string>) => {
      state.currentSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAutocompleteResultsFromApi.fulfilled,
      (state, action) => {
        state.searchResults = action.payload;
      }
    );
  },
});

export const locationSearchActions = { ...locationSearchSlice.actions };

export const locationSearchReducer = locationSearchSlice.reducer;
