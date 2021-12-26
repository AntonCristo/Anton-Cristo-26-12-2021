import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppLocation = "/" | "/favorites";

export interface NavigationState {
  location: AppLocation;
}

const initialState: NavigationState = {
  location: "/",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<AppLocation>) => {
      state.location = action.payload;
      window.history.pushState(null, null || "", action.payload);
    },
  },
});

export const navigationActions = { ...navigationSlice.actions };

export const navigationReducer = navigationSlice.reducer;
