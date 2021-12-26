import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CustomAlertState {
  message: string;
}

const initialState: CustomAlertState = {
  message: "",
};

export const customAlertSlice = createSlice({
  name: "customAlert",
  initialState,
  reducers: {
    customAlert: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    closeAlert: (state) => {
      state.message = "";
    },
  },
});

export const customAlertActions = { ...customAlertSlice.actions };

export const customAlertReducer = customAlertSlice.reducer;
