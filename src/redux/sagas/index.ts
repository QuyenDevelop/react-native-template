import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";
import todoSaga from "./todo.saga";
import userSaga from "./user.saga";

export default function* rootSaga(): SagaIterator {
  yield all([call(todoSaga), call(userSaga)]);
}
