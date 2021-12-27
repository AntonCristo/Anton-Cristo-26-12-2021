import axios from "axios";
import { API_KEY, CURRENT_WEATHER_REQUEST_URL } from "src/constants";

export const fetchCurrentWeatherByLocationKey = async (locationKey: string) => {
  return axios
    .get(CURRENT_WEATHER_REQUEST_URL + locationKey, {
      params: {
        apikey: API_KEY,
        detailes: false,
      },
    })
    .then((currentWeatherResponse) => {
      return currentWeatherResponse.data[0];
    })
    .catch((err) => {
      console.error(err);
      //TODO: add error boundry component
      throw new Error(
        "[fetchCurrentWeatherByLocationKey]:: check console error!"
      );
    });
};
