import { createAsyncThunk } from "@reduxjs/toolkit";
import { weatherService } from "src/services";

export const fetchCurrentWeatherByLocationKey = createAsyncThunk(
  "weather/fecthCurrentWeather",
  async (locationKey: string) => {
    const response = await weatherService.fetchCurrentWeatherByLocationKey(
      locationKey
    );

    return response;
  }
);

export const fetchFiveDayForecastByLocationKey = createAsyncThunk(
  "weather/fecthFiveDayForecast",
  async (locationKey: string) => {
    const response = await weatherService.fetchFiveDayForecastByLocationKey(
      locationKey
    );

    return response;
  }
);
