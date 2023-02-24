import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";
import todoSaga from "./todo.saga";

export default function* rootSaga(): SagaIterator {
  yield all([call(todoSaga)]);
}
