import { createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem(
        "darkMode",
        JSON.stringify({ isDarkMode: state.darkMode })
      );
    },
    initFromLocalStorage: (state) => {
      const darkModeAsString = localStorage.getItem("darkMode");
      if (darkModeAsString) {
        state.darkMode = JSON.parse(darkModeAsString).isDarkMode;
      }
    },
  },
});

export const darkModeActions = { ...darkModeSlice.actions };

export const darkModeReducer = darkModeSlice.reducer;
