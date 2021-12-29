import { createAsyncThunk } from "@reduxjs/toolkit";
import { weatherApiService } from "src/services";

export const fetchCurrentWeatherByLocationKey = createAsyncThunk(
  "weather/fecthCurrentWeather",
  async (locationKey: string) => {
    const response = await weatherApiService.fetchCurrentWeatherByLocationKey(
      locationKey
    );

    return response;
  }
);

export const fetchFiveDayForecastByLocationKey = createAsyncThunk(
  "weather/fecthFiveDayForecast",
  async (locationKey: string) => {
    const response = await weatherApiService.fetchFiveDayForecastByLocationKey(
      locationKey
    );

    return response;
  }
);
