import { PayloadAction } from "@reduxjs/toolkit";
import { onChangeLanguage } from "@shared";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { asyncChangeLanguage, changeLanguageSuccess } from "../slices";

// ----- region change language
function* takeChangeLanguage(action: PayloadAction<string>) {
  try {
    yield call(onChangeLanguage, action.payload);
    yield put(changeLanguageSuccess(action.payload));
  } catch (error) {}
}

export default function* userSaga() {
  yield all([takeLatest(asyncChangeLanguage, takeChangeLanguage)]);
}
