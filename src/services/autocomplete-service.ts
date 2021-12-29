import axios from "axios";
import { LocationResult } from "src/slices";
import { AUTOCOMPLETE_REQUEST_URL, API_KEY } from "src/constants";

export const fetchAutocompleteFromApi = async (searchText: string) => {
  return axios
    .get(AUTOCOMPLETE_REQUEST_URL, {
      params: {
        apikey: API_KEY,
        q: searchText,
      },
    })
    .then((weatherResponse) => {
      return weatherResponse.data.map((mockLocation: any) => {
        const locationResult: LocationResult = {
          key: mockLocation.Key,
          location: mockLocation.LocalizedName,
        };
        return locationResult;
      });
    });
};
