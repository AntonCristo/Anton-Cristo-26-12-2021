import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LocationSearchState {
  currentSearch: string;
  //TODO: set a type for returned api object
  searchResults: string[];
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
});

export const locationSearchActions = { ...locationSearchSlice.actions };

export const locationSearchReducer = locationSearchSlice.reducer;
