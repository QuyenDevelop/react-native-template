import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { todoReducer, userReducer } from "./slices";
import { IRootState } from "./types";

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    // serializableCheck: false,
  }).concat(sagaMiddleware);

export const store = configureStore<IRootState>({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
