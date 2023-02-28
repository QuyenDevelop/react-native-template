import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { IRootUserState } from "../types";
import { SliceName } from "./constants";

const initialState: IRootUserState = {
  profile: null,
  language: "vi-VN",
  anonymousId: null,
  deviceId: null,
};

export const userSlice = createSlice({
  name: SliceName.USER_SLICE,
  initialState,
  reducers: {
    changeLanguageSuccess: (
      state: IRootUserState,
      action: PayloadAction<string>,
    ) => {
      state.language = action.payload;
    },
    setAnonymousId: (state: IRootUserState, action: PayloadAction<string>) => {
      state.anonymousId = action.payload;
    },
  },
});

export const asyncChangeLanguage = createAction<string>(
  `${SliceName.USER_SLICE}/asyncChangeLanguage`,
);

export const asyncSetAnonymousId = createAction<string | number[]>(
  `${SliceName.USER_SLICE}/setAnonymousId`,
);

export const { changeLanguageSuccess } = userSlice.actions;

// reducer
export const userReducer = userSlice.reducer;
