import axios from "axios";
import { LocationResult } from "src/slices";

const mock = [
  {
    Version: 1,
    Key: "226396",
    Type: "City",
    Rank: 10,
    LocalizedName: "Tokyo",
    Country: {
      ID: "JP",
      LocalizedName: "Japan",
    },
    AdministrativeArea: {
      ID: "13",
      LocalizedName: "Tokyo",
    },
  },
  {
    Version: 1,
    Key: "106770",
    Type: "City",
    Rank: 11,
    LocalizedName: "Taiyuan",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "SX",
      LocalizedName: "Shanxi",
    },
  },
  {
    Version: 1,
    Key: "106780",
    Type: "City",
    Rank: 11,
    LocalizedName: "Tianjin",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "TJ",
      LocalizedName: "Tianjin",
    },
  },
  {
    Version: 1,
    Key: "58491",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongren",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GZ",
      LocalizedName: "Guizhou",
    },
  },
  {
    Version: 1,
    Key: "102324",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tangshan",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "HE",
      LocalizedName: "Hebei",
    },
  },
  {
    Version: 1,
    Key: "59573",
    Type: "City",
    Rank: 13,
    LocalizedName: "Taizhou",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "JS",
      LocalizedName: "Jiangsu",
    },
  },
  {
    Version: 1,
    Key: "60198",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tongliao",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "NM",
      LocalizedName: "Inner Mongolia",
    },
  },
  {
    Version: 1,
    Key: "106571",
    Type: "City",
    Rank: 13,
    LocalizedName: "Tai'an",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "SD",
      LocalizedName: "Shandong",
    },
  },
  {
    Version: 1,
    Key: "58055",
    Type: "City",
    Rank: 15,
    LocalizedName: "Tianshui",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GS",
      LocalizedName: "Gansu",
    },
  },
  {
    Version: 1,
    Key: "2333653",
    Type: "City",
    Rank: 15,
    LocalizedName: "Taizhou",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "ZJ",
      LocalizedName: "Zhejiang",
    },
  },
];

export const fetchAutocompleteFromApi = async (searchText: string) => {
  return mock.map((mockLocation) => {
    const locationResult: LocationResult = {
      key: mockLocation.Key,
      location: mockLocation.LocalizedName,
    };
    return locationResult;
  });
};
