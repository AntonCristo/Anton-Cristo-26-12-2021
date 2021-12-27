import axios from "axios";
import { LocationResult } from "src/slices";

const data: LocationResult[] = [
  {
    key: "226396",
    location: "Tokyo",
  },
  {
    key: "106770",
    location: "Taiyuan",
  },
  {
    key: "106780",
    location: "Tianjin",
  },
  {
    key: "58491",
    location: "Tongren",
  },
  {
    key: "102324",
    location: "Tangshan",
  },
  {
    key: "59573",
    location: "Taizhou",
  },
  {
    key: "60198",
    location: "Tongliao",
  },
  {
    key: "106571",
    location: "Tai'an",
  },
  {
    key: "58055",
    location: "Tianshui",
  },
  {
    key: "2333653",
    location: "Taizhou",
  },
];

const API_KEY = "dqFvpSeXGNVSvEN056JaMBXbTIJ4yuSG";
const REQUEST_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

export const fetchAutocompleteFromApi = async (searchText: string) => {
  //TODO remove mock
  return data;
  // return axios
  //   .get(REQUEST_URL, {
  //     params: {
  //       apikey: API_KEY,
  //       q: searchText,
  //     },
  //   })
  //   .then((weatherResponse) => {
  //     return weatherResponse.data.map((mockLocation: any) => {
  //       const locationResult: LocationResult = {
  //         key: mockLocation.Key,
  //         location: mockLocation.LocalizedName,
  //       };
  //       return locationResult;
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     //TODO: add error boundry component
  //     throw new Error("[fetchAutocompleteFromApi]:: check console error!");
  //   });
};
