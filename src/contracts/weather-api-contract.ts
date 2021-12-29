import { AxiosResponse } from "axios";

export interface IWeatherService {
  fetchLocationAutocompleteFromApi(searchText: string): Promise<any>;
  fetchLocationFromApiByGeoLocation(
    lat: number,
    lon: number
  ): Promise<AxiosResponse<any, any>>;
  fetchCurrentWeatherByLocationKey(locationKey: string): Promise<any>;
  fetchFiveDayForecastByLocationKey(locationKey: string): Promise<{
    headline: any;
    forecast: any;
  }>;
}
