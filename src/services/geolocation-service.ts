import axios from "axios";
import { API_KEY, GEOLOCATION_REQUEST_URL } from "src/constants";

export const fetchLocationFromApiByGeoLocation = async (
  lat: number,
  lon: number
) => {
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
};
