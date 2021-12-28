import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { celsiusFahrenheitConvertor } from "src/utilities";
import {
  fetchCurrentWeatherByLocationKey,
  fetchFiveDayForecastByLocationKey,
} from "./weather-slice-async-actions";

export type Temperature = {
  F: { value: number | undefined };
  C: { value: number | undefined };
};

export interface DailyForecast {
  date: string;
  maxTemp: Temperature;
  minTemp: Temperature;
  dayDescription: string;
  nightDescription: string;
}

export interface Forecast {
  headline: string;
  fiveDays: DailyForecast[];
}

export interface WeatherState {
  networkError: boolean;
  location: string;
  locationKey: string;
  temperature: Temperature;
  description: string;
  displayUnit: "F" | "C";
  defaultLocationKey: string;
  defaultLocationName: string;
  forecast: Forecast;
}

const initialState: WeatherState = {
  networkError: false,
  displayUnit: "C",
  defaultLocationKey: "215854",
  defaultLocationName: "Tel-Aviv",
  location: "",
  locationKey: "",
  description: "",
  temperature: {
    C: { value: undefined },
    F: { value: undefined },
  },
  forecast: {
    headline: "",
    fiveDays: [],
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
    builder
      .addCase(fetchCurrentWeatherByLocationKey.fulfilled, (state, action) => {
        if (action.payload) {
          state.description = action.payload.WeatherText;
          state.temperature = {
            C: { value: action.payload.Temperature.Metric.Value },
            F: { value: action.payload.Temperature.Imperial.Value },
          };
        }
      })
      .addCase(fetchCurrentWeatherByLocationKey.rejected, (state) => {
        state.networkError = true;
      })
      .addCase(fetchFiveDayForecastByLocationKey.fulfilled, (state, action) => {
        state.forecast.headline = action.payload.headline;
        state.forecast.fiveDays = action.payload.forecast.map(
          (forecastItem: any) => {
            const validItem: DailyForecast = {
              date: forecastItem.Date,
              dayDescription: forecastItem.Day.IconPhrase,
              nightDescription: forecastItem.Night.IconPhrase,
              maxTemp: {
                C: { value: forecastItem.Temperature.Maximum.Value },
                F: {
                  value: parseInt(
                    celsiusFahrenheitConvertor(
                      "C",
                      forecastItem.Temperature.Maximum.Value
                    )
                  ),
                },
              },
              minTemp: {
                C: { value: forecastItem.Temperature.Minimum.Value },
                F: {
                  value: parseInt(
                    celsiusFahrenheitConvertor(
                      "C",
                      forecastItem.Temperature.Minimum.Value
                    )
                  ),
                },
              },
            };

            return validItem;
          }
        );
      })
      .addCase(fetchFiveDayForecastByLocationKey.rejected, (state) => {
        state.networkError = true;
      });
  },
});

export const weatherActions = { ...weatherSlice.actions };

export const weatherReducer = weatherSlice.reducer;
