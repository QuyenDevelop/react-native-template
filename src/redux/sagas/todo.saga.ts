import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { addTodo } from "../slices";

export const addTodoAsync = createAction<string>("todo/addTodoAsync");

function* addTodoSaga(action: PayloadAction<string>) {
  yield put(addTodo(action));
}

export default function* todoSaga() {
  yield takeLatest(addTodoAsync, addTodoSaga);
}
