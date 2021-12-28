import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Temperature } from "../weather-slice";

const LOCAL_STORAGE_KEY = "favorites";

export interface FavoritesItem {
  locationKeyId: string;
  locationName: string;
  description: string;
  currentWeather: Temperature;
}

export interface FavoritesState {
  favorites: { [x: string]: FavoritesItem };
}

const initialState: FavoritesState = {
  favorites: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    initFromLocalStorage: (state) => {
      let existingFavorites = {};
      const favoritesAsString = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (favoritesAsString) {
        existingFavorites = JSON.parse(favoritesAsString);
      }
      state.favorites = existingFavorites;
    },
    addToFavorites: (state, action: PayloadAction<FavoritesItem>) => {
      state.favorites[action.payload.locationKeyId] = action.payload;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      delete state.favorites[action.payload];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const favoritesActions = { ...favoritesSlice.actions };

export const favoritesReducer = favoritesSlice.reducer;
