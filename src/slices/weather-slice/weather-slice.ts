import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentWeatherByLocationKey } from "./weather-slice-async-actions";

type Temperature = {
  F: { value: number | undefined };
  C: { value: number | undefined };
};

export interface WeatherState {
  location: string;
  locationKey: string;
  temperature: Temperature;
  description: string;
  displayUnit: "F" | "C";
}

const initialState: WeatherState = {
  displayUnit: "C",
  location: "",
  locationKey: "",
  description: "",
  temperature: {
    C: { value: undefined },
    F: { value: undefined },
  },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocationName: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setLocationKey: (state, action: PayloadAction<string>) => {
      state.locationKey = action.payload;
    },
    setDisplayUnit: (state, action: PayloadAction<"F" | "C">) => {
      state.displayUnit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCurrentWeatherByLocationKey.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.description = action.payload.WeatherText;
          state.temperature = {
            C: { value: action.payload.Temperature.Metric.Value },
            F: { value: action.payload.Temperature.Imperial.Value },
          };
        }
      }
    );
  },
});

export const weatherActions = { ...weatherSlice.actions };

export const weatherReducer = weatherSlice.reducer;
