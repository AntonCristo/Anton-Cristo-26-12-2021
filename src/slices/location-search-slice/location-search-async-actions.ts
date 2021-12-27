import { createAsyncThunk } from "@reduxjs/toolkit";
import { autocompleteService } from "src/services";

export const fetchAutocompleteResultsFromApi = createAsyncThunk(
  "locationSearch/fetchAutocomplete",
  async (searchText: string) => {
    const response = await autocompleteService.fetchAutocompleteFromApi(
      searchText
    );

    return response;
  }
);
