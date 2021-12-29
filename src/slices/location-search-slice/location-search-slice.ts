import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAutocompleteResultsFromApi } from "./location-search-async-actions";

export interface LocationResult {
  key: string;
  location: string;
}

export interface LocationSearchState {
  currentSearch: string;
  searchResults: LocationResult[];
  networkError: boolean;
}

const initialState: LocationSearchState = {
  currentSearch: "",
  searchResults: [],
  networkError: false,
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
    builder
      .addCase(fetchAutocompleteResultsFromApi.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchAutocompleteResultsFromApi.rejected, (state) => {
        state.networkError = true;
      });
  },
});

export const locationSearchActions = { ...locationSearchSlice.actions };

export const locationSearchReducer = locationSearchSlice.reducer;
