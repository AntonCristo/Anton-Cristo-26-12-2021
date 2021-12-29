import { createAsyncThunk } from "@reduxjs/toolkit";
import { weatherApiService } from "src/services";

export const fetchAutocompleteResultsFromApi = createAsyncThunk(
  "locationSearch/fetchAutocomplete",
  async (searchText: string) => {
    const response = await weatherApiService.fetchLocationAutocompleteFromApi(
      searchText
    );

    return response;
  }
);
