import axios, { AxiosResponse } from "axios";
import { IWeatherService } from "src/contracts";
import { LocationResult } from "src/slices";
import {
  AUTOCOMPLETE_REQUEST_URL,
  API_KEY,
  GEOLOCATION_REQUEST_URL,
  CURRENT_WEATHER_REQUEST_URL,
  FIVE_DAY_FORECAST_REQUEST_URL,
} from "src/constants";

class WeatherService implements IWeatherService {
  async fetchFiveDayForecastByLocationKey(
    locationKey: string
  ): Promise<{ headline: any; forecast: any }> {
    return axios
      .get(FIVE_DAY_FORECAST_REQUEST_URL + locationKey, {
        params: {
          apikey: API_KEY,
          detailes: false,
          metric: true,
        },
      })
      .then((forecastResponse) => {
        return {
          headline: forecastResponse.data.Headline.Text,
          forecast: forecastResponse.data.DailyForecasts,
        };
      });
  }

  async fetchCurrentWeatherByLocationKey(locationKey: string): Promise<any> {
    return axios
      .get(CURRENT_WEATHER_REQUEST_URL + locationKey, {
        params: {
          apikey: API_KEY,
          detailes: false,
        },
      })
      .then((currentWeatherResponse) => {
        return currentWeatherResponse.data[0];
      });
  }

  async fetchLocationFromApiByGeoLocation(
    lat: number,
    lon: number
  ): Promise<AxiosResponse<any, any>> {
    return axios
      .get(GEOLOCATION_REQUEST_URL, {
        params: {
          apikey: API_KEY,
          q: `${lat},${lon}`,
          toplevel: false,
        },
      })
      .then((location) => {
        return location;
      });
  }

  async fetchLocationAutocompleteFromApi(searchText: string): Promise<any> {
    const weatherResponse = await axios.get(AUTOCOMPLETE_REQUEST_URL, {
      params: {
        apikey: API_KEY,
        q: searchText,
      },
    });
    return weatherResponse.data.map((mockLocation: any) => {
      const locationResult: LocationResult = {
        key: mockLocation.Key,
        location: mockLocation.LocalizedName,
      };
      return locationResult;
    });
  }
}

export const weatherApiService = new WeatherService();
